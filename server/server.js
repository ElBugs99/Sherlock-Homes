//cheerio: pick out html elements, jQuery like
//axios: make HTTP request easier, perform CRUD operations
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require("cheerio");

const app = express();

const url = 'https://www.portalinmobiliario.com/venta/casa/vina-del-mar-valparaiso#unapplied_filter_id%3Dneighborhood%26unapplied_filter_name%3DBarrios%26unapplied_value_id%3DTVhYUmXDsWFjYVRVeERRMVpKMFdRM1pHVTQ%26unapplied_value_name%3DRe%C3%B1aca%26unapplied_autoselect%3Dfalse';

axios(url)
    .then( response => {
        const html = response.data
        const $ = cheerio.load(html)
        const houses = [];

        $('.ui-search-item__information', html).each(function() {
            const info = $(this).text()
            houses.push({
                info
            })
            console.log(houses);
        })
    }).catch(error => console.log(error))

app.use(cors()); // This allows all origins, you can configure it more specifically

//set up api route
app.get("/api", (req, res) => {
    res.json({"users": ["userOne","userTwo","userThree","userFour"]})
})

app.listen(5000, () => {console.log("Server started at port 5000")})