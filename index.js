const express = require('express');
const bodyparser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const path = require('path');
// const favicon = require('express-favicon');


const resume_template = require('./resume_template/resume')
// app.use(favicon(__dirname + '/public/favicon.png'));


const app = express();

const port = process.env.PORT || 5000;


app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.post('/create-pdf', (req, res) => {
    pdf.create(resume_template(req.body), {}).toFile('Resume.pdf', (err) => {
        if(err){
            res.send(Promise.reject());
            console.log(err);
        }

        res.send(Promise.resolve());
        console.log('Success');
    });
});

app.get('/fetch-pdf', (req,res) => {
    res.sendFile(`${__dirname}/Resume.pdf`);
});

app.use("/", express.static(path.join(__dirname, "/my-app/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/my-app/build/index.html"));
});

app.listen(port, () => {
  console.log(`server up and running on ${port}`);
});

