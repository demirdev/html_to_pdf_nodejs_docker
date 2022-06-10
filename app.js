const { response } = require("express");
const express = require("express")
const html_to_pdf = require('html-pdf-node');

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("I'm inside docker!")
})

app.post("/html-to-pdf", (req, res) => {
    const html = req.body.html;
    const fileName = req.body.fileName;
    
    let options = { format: 'A4' };

    let file = { content: html, name: `${fileName}.pdf`  };

    html_to_pdf.generatePdf(file, options).then(pdfBuffer => {

    res.end(pdfBuffer)

    });

})


const port = 3000;

app.listen(port, ()=> {
    console.log(`Express listening at http://0.0.0.0:${port}`)
})