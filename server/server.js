import puppeteer from "puppeteer";
console.log('hola');

const getHouseData = async () => {

  const browser = await puppeteer.launch();
  console.log(browser)
  const page = await browser.newPage();
  console.log(page)
  await page.goto('https://quotes.toscrape.com');
  browser.close();

}

getHouseData();

//cheerio: pick out html elements, jQuery like
//axios: make HTTP request easier, perform CRUD operations
/* const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require("cheerio");
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

// Set up MongoDB connection
//DB
mongoose.connect('mongodb://localhost:27017/sherlock', { useNewUrlParser: true, useUnifiedTopology: true });

const DataModel = mongoose.model('Data', new mongoose.Schema({
  // Define your data schema here
  
}));

// Route to scrape data and save it to MongoDB
app.get('/scrape', async (req, res) => {
  try {
    const url = 'https://www.portalinmobiliario.com/venta/casa/vina-del-mar-valparaiso#unapplied_filter_id%3Dneighborhood%26unapplied_filter_name%3DBarrios%26unapplied_value_id%3DTVhYUmXDsWFjYVRVeERRMVpKMFdRM1pHVTQ%26unapplied_value_name%3DRe%C3%B1aca%26unapplied_autoselect%3Dfalse';
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    // Extract data from the webpage
    const scrapedData = $('ui-search-item__title-label-grid').text();

    //console.log(scrapedData)

    const newData = new DataModel({
      // Map the scraped data to your schema fields
    });

    await newData.save();

    res.status(200).json({ message: 'Data saved to MongoDB' });
  } catch (error) {
    console.error('Error scraping and saving data: ', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.use(cors()); // This allows all origins, you can configure it more specifically

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 */
/* const url = 'https://www.portalinmobiliario.com/venta/casa/vina-del-mar-valparaiso#unapplied_filter_id%3Dneighborhood%26unapplied_filter_name%3DBarrios%26unapplied_value_id%3DTVhYUmXDsWFjYVRVeERRMVpKMFdRM1pHVTQ%26unapplied_value_name%3DRe%C3%B1aca%26unapplied_autoselect%3Dfalse';
 */