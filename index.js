const express = require('express');
const bodyparser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const path = require('path');

const resume_template = require('./resume_template/resume')

const app = express();

const port = process.env.PORT || 5000;


app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.post('/create-pdf', (req, res) => {
    pdf.create(resume_template(req.body), {}).toFile('Resume.pdf', (err) => {
        if(err){
            console.log(err);

            return res.status(400).json(err);
        }

        
        console.log('Success');
        return res.json('Pdf Generated');
    });
});

app.get('/fetch-pdf', (req,res) => {
    res.sendFile(`${__dirname}/Resume.pdf`);
});

app.use("/", express.static(path.join(__dirname, "/my-app/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/my-app/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`server up and running on ${PORT}`);
});
