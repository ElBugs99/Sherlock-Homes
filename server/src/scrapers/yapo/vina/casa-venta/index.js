import puppeteer from "puppeteer";

console.log('Begining scraping...');

(async () => {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.yapo.cl/paginas/valparaiso/vina-del-mar/comprar/casa?pagina=1');
  await page.waitForSelector('app-paginator', { visible: true });

  const allListingUrls = [];

  for (let pageNumber = 1; pageNumber <= 2; pageNumber++) {
    await page.goto(`https://www.yapo.cl/paginas/valparaiso/vina-del-mar/comprar/casa?pagina=${pageNumber}`);
    await page.waitForSelector('listing-result-ad');
    const listingUrls = await page.evaluate(() => {
      const urls = [];
      const listingElements = document.querySelectorAll('listing-result-ad');
      listingElements.forEach(listingElement => {
        const anchorElement = listingElement.querySelector('a');
        if (anchorElement) {
          const url = anchorElement.getAttribute('href');
          urls.push(`https://www.yapo.cl${url}`);
        }
      });
      return urls;
    });
    allListingUrls.push(...listingUrls);
    console.log(`Scraped listings from page ${pageNumber}`);
    console.log(`---------------------------------------`);
    const delay = Math.random() * 2000 + 1000;
    await new Promise(resolve => setTimeout(resolve, delay));
  }

  for (const url of allListingUrls) {
    console.log('beginning listing url scraping...');
    console.log('url: ', url);
    await page.goto(url);
    await page.waitForSelector('h1');

    await page.click('.main-image');

    await page.waitForSelector('adview-map');
    await page.click('adview-map');

    // Wait for the thumbnails to load
    const time = Math.random() * 2000 + 1000;
    await new Promise(resolve => setTimeout(resolve, time));


    const divsWithBackgroundImage = await page.evaluate(() => {

      function removeDuplicatesAndLogos(list) {
        const uniqueList = list.filter(item => item && item[0] && item[0].startsWith('https://img.yapo.cl') && !item[0].includes('logo'));
        const uniqueUrls = [];
        const seenUrls = new Set();
        for (const item of uniqueList) {
          const url = item[0];
          if (!seenUrls.has(url)) {
            uniqueUrls.push(url);
            seenUrls.add(url);
          }
        }
        return uniqueUrls;
      }

      function extractUrlFromString(str) {
        // Define the regular expression to match the URL
        const regex = /url\(&quot;(.+?)&quot;\)/g;

        // Use match to find all matches of the regex in the string
        const matches = str.match(regex);

        // If matches are found, return the first match
        if (matches && matches.length > 0) {
          // Extract the URL from the match and replace the HTML entity &quot; with "
          return matches[0].replace('url(&quot;', '').replace('&quot;)', '');
        }

        // If no matches are found, return null
        return null;
      }

      const divsWithBackgroundImage = [];
      const divs = document.querySelectorAll('div[style*="background-image"]');
      divs.forEach(div => {
        divsWithBackgroundImage.push([extractUrlFromString(div.outerHTML)]);
      });
      const list = removeDuplicatesAndLogos(divsWithBackgroundImage)
      return list;
    });



    const divInsideAdviewMapHTML = await page.evaluate(() => {
      const divInsideAdviewMapElement = document.querySelector('adview-map > div.static-image');
      return divInsideAdviewMapElement ? divInsideAdviewMapElement.outerHTML : null;
    });

    function extractLatLon(fragment) {
      // Define the regular expression to match the latitude and longitude values
      const regex = /lat=(-?\d+(\.\d+)?)(?=&amp;lon=)(.*?)lon=(-?\d+(\.\d+)?)/;
    
      // Use match to find the latitude and longitude values in the fragment
      const matches = fragment.match(regex);
    
      // If matches are found, extract the latitude and longitude values
      if (matches && matches.length >= 6) {
        const latitude = parseFloat(matches[1]);
        const longitude = parseFloat(matches[4]);
        return { latitude, longitude };
      }
    
      // If no matches are found, return null
      return null;
    }



  const lat = extractLatLon(divInsideAdviewMapHTML);

  const pmedia = divsWithBackgroundImage;

  // Extract specific information from the listing page
  const listingInfo = await page.evaluate((url, pmedia, lat) => {

    function extractNumericValue(str) {
      const regex = /\d+/;
      const match = str.match(regex);

      return match ? match[0] : null;
    }

    function extractPriceValue(str) {
      // Remove all non-numeric characters
      const numericStr = str.replace(/\D/g, '');

      // Parse the string as a float
      return parseFloat(numericStr);
    }

    const listing_url = url
    const media = pmedia;
    const title = document.querySelector('h1').innerText;
    const price = extractPriceValue(document.querySelector('.price').innerText);
    const uf = document.querySelector('.currency-price').innerText;


    //const lat = document.querySelector('div.static-image[style*="background-image"]').outerHTML;
    const region = 'V';
    const city = 'Viña';
    const transaction = 'sale'; // sale/rent

    /* const seller = document.querySelector('.seller-name[_ngcontent-ng-c1692132960]').innerText; */
    const description = document.querySelector('.description').innerText;

    // Extract information from adview-features section
    const featuresContainer = document.querySelector('adview-features');
    const divs = featuresContainer.querySelectorAll('div');

    const info = {};

    // Iterate through each div containing the title and right <p> elements
    divs.forEach(div => {
      const titleElement = div.querySelector('p.title');
      const rightElement = div.querySelector('p.right');
      if (titleElement && rightElement) {
        const titleText = titleElement.textContent.trim();
        const rightText = rightElement.textContent.trim();
        info[titleText] = rightText;
      }
    });


    const bedrooms = info.Dormitorios ? extractNumericValue(info.Dormitorios) : null;
    const bathrooms = info['Baños'] ? extractNumericValue(info['Baños']) : null;
    const sqft = info['Superficie total'] ? extractNumericValue(info['Superficie total']) : null;
    const property_type = info['Tipo de inmueble'] ? info['Tipo de inmueble'] : null;
    const address = info['Dirección'] ? info['Dirección'] : null;
    const { latitude, longitude } = lat;

    return {
      title,
      price,
      uf,
      property_type,
      bedrooms,
      bathrooms,
      sqft,
      address,
      description,
      region,
      city,
      listing_url,
      transaction,
      latitude,
      longitude,
      media
    };
  }, url, pmedia, lat);

  const delay = Math.random() * 2000 + 1000;
  await new Promise(resolve => setTimeout(resolve, delay));
  console.log("all info: ", listingInfo)
}

  await browser.close();
}) ();