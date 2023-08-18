const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); // This allows all origins, you can configure it more specifically

//set up api route
app.get("/api", (req, res) => {
    res.json({"users": ["userOne","userTwo","userThree","userFour"]})
})

app.listen(5000, () => {console.log("Server started at port 5000")})