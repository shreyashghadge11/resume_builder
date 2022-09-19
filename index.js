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

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


app.listen(port, () => console.log(`Server started on port ${port}`));



