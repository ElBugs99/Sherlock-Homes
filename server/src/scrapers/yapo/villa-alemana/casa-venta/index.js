import puppeteer from "puppeteer";
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Beginning scraping...');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.yapo.cl/valparaiso/inmuebles/inmuebles/comprar?comuna=villa-alemana&descripcion=true&tipo-inmueble=casa&pagina=1', { timeout: 60000 });
  await page.waitForSelector('app-paginator', { visible: true });

  const allListingUrls = [];
  let pageNumber = null;

  const lastPageLink = await page.$('a[rel="nofollow"][queryparamshandling="merge"][aria-label="Ir a última página"].ng-star-inserted');
  if (lastPageLink) {
    const href = await page.evaluate(element => element.getAttribute('href'), lastPageLink);
    console.log('Last page link:', href);
    pageNumber = extractPageNumber(href);
  } else {
    console.log('Last page link not found.');
  }

  function extractPageNumber(url) {
    const pageNumberRegex = /pagina=(\d+)/;
    const match = url.match(pageNumberRegex);
    if (match && match[1]) {
      return parseInt(match[1], 10);
    }
    return null;
  }

  const lastpage = pageNumber;
  console.log('Total pages: ', lastpage);

  const allListingInfo = [];

  for (let pageNumber = 1; pageNumber <= lastpage; pageNumber++) {
    await page.goto(`https://www.yapo.cl/valparaiso/inmuebles/inmuebles/comprar?comuna=villa-alemana&descripcion=true&tipo-inmueble=casa&pagina=${pageNumber}`);
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

  let houseCounter = 0;

  for (const url of allListingUrls) {
    houseCounter++;
    console.log(`Scraping house number: ${houseCounter}`);
    console.log('beginning listing url scraping...');
    console.log('url: ', url);
    await page.goto(url);
    await page.waitForSelector('h1');

    try {
      await page.click('.main-image');
    } catch (error) {
      console.error('Error clicking main image:', error);
      continue;
    }

    let lat = { latitude: null, longitude: null };

    try {
      await page.waitForSelector('adview-map');
      await page.click('adview-map');

      const divInsideAdviewMapHTML = await page.evaluate(() => {
        const divInsideAdviewMapElement = document.querySelector('adview-map > div.static-image');
        return divInsideAdviewMapElement ? divInsideAdviewMapElement.outerHTML : null;
      });

      function extractLatLon(fragment) {
        const regex = /lat=(-?\d+(\.\d+)?)(?=&amp;lon=)(.*?)lon=(-?\d+(\.\d+)?)/;
        const matches = fragment.match(regex);
        if (matches && matches.length >= 6) {
          const latitude = parseFloat(matches[1]);
          const longitude = parseFloat(matches[4]);
          return { latitude, longitude };
        }
        return null;
      }

      const latFromHTML = extractLatLon(divInsideAdviewMapHTML);
      if (latFromHTML) {
        lat = latFromHTML;
      }
    } catch (error) {
      console.error('Error waiting for map selector:', error);
    }

    const time = Math.random() * 2000 + 1000;
    await new Promise(resolve => setTimeout(resolve, time));

    let divsWithBackgroundImage = [];
    try {
      divsWithBackgroundImage = await page.evaluate(() => {
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
          const regex = /url\(&quot;(.+?)&quot;\)/g;
          const matches = str.match(regex);
          if (matches && matches.length > 0) {
            return matches[0].replace('url(&quot;', '').replace('&quot;)', '');
          }
          return null;
        }

        const divsWithBackgroundImage = [];
        const divs = document.querySelectorAll('div[style*="background-image"]');
        divs.forEach(div => {
          divsWithBackgroundImage.push([extractUrlFromString(div.outerHTML)]);
        });
        const list = removeDuplicatesAndLogos(divsWithBackgroundImage);
        return list;
      });
    } catch (error) {
      console.error('Error extracting divs with background images:', error);
    }

    const pmedia = divsWithBackgroundImage;

    const listingInfo = await page.evaluate((url, pmedia, lat) => {
      function extractNumericValue(str) {
        const regex = /\d+/;
        const match = str.match(regex);
        return match ? match[0] : null;
      }

      function extractPriceValue(str) {
        const numericStr = str.replace(/\D/g, '');
        return parseFloat(numericStr);
      }

      function cleanUFValue(ufStr) {
        const cleanedStr = ufStr.replace(/[()]/g, '').replace('UF', '').trim();
        const numericStr = cleanedStr.replace('.', '').replace(',', '.');
        return parseFloat(numericStr);
      }

      const listing_url = url;
      const media = pmedia;
      const title = document.querySelector('h1').innerText;
      const price = extractPriceValue(document.querySelector('.price').innerText);
      const ufStr = document.querySelector('.currency-price').innerText;
      const uf = cleanUFValue(ufStr);

      const region = 'V';
      const city = 'Villa Alemana';
      const transaction = 'sale';

      const description = document.querySelector('.description').innerText;

      const featuresContainer = document.querySelector('adview-features');
      const divs = featuresContainer.querySelectorAll('div');

      const info = {};

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

    allListingInfo.push(listingInfo);

    const dataFolderPath = path.resolve(__dirname, '..', 'data');
    const filePath = path.join(dataFolderPath, 'houseData.json');

    try {
      await fs.mkdir(dataFolderPath, { recursive: true });
      await fs.writeFile(filePath, JSON.stringify(allListingInfo, null, 2));
      console.log("Listing info saved to JSON file:", listingInfo);
    } catch (error) {
      console.error('Error writing to JSON file:', error);
    }

    const delay = Math.random() * 2000 + 1000;
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log("all info: ", listingInfo);
  }

  console.log('scraping finished.');
  await browser.close();
})();
