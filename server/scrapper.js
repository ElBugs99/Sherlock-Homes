import puppeteer from "puppeteer";
import fs from 'fs/promises';

const getHouseData = async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.portalinmobiliario.com/venta/casa/vina-del-mar-valparaiso#unapplied_filter_id%3Dneighborhood%26unapplied_filter_name%3DBarrios%26unapplied_value_id%3DTVhYUmXDsWFjYVRVeERRMVpKMFdRM1pHVTQ%26unapplied_value_name%3DRe%C3%B1aca%26unapplied_autoselect%3Dfalse');
    
    const result = await page.evaluate(() => {
    const houseData = document.querySelectorAll('.ui-search-layout__item');
    const data = [...houseData].map(house => {
      const title = house.querySelector('.ui-search-item__title-label-grid').innerText;
      const priceString = house.querySelector('.ui-search-price__second-line--decimal').innerText;
      const priceNumber = house.querySelector('.andes-money-amount__fraction').innerText;
      const atributes = house.querySelector('.ui-search-item__group--attributes').innerText;
      const location = house.querySelector('.ui-search-item__group--location').innerText;
      
      //const imageElement = house.querySelector('img');
      const imageUrl = house.querySelector('img').getAttribute('data-src');
      const url = house.querySelector('a').getAttribute('href');
      
      return {
        title,
        priceString,
        priceNumber,
        atributes,
        location,
        imageUrl,
        url
      };
    })
    return data;