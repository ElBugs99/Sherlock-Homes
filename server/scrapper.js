import puppeteer from "puppeteer";
import fs from 'fs/promises';

const getHouseData = async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.portalinmobiliario.com/venta/casa/vina-del-mar-valparaiso#unapplied_filter_id%3Dneighborhood%26unapplied_filter_name%3DBarrios%26unapplied_value_id%3DTVhYUmXDsWFjYVRVeERRMVpKMFdRM1pHVTQ%26unapplied_value_name%3DRe%C3%B1aca%26unapplied_autoselect%3Dfalse');