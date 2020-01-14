const express = require ('express');
const bodyParser = require ('body-parser'); /*Let's us have a body in our request, so we can send extra info*/ 
const cors = require ('cors');

// we installed nodemon for hard refreshes
const sendGrid = require ('@sendGrid/mail');

const app = express();

app.use(bodyParser.json());

app.use(cors()); 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


//this will help us know if something is wrong with the API
app.get('/api', (req, res, next) => {

    res.send('API Status: Running')
});

//now we are going to build the routes

app.post('api/email', (req, res, next) => {
    sendGrid.setApiKey('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');
    const msg = {

        to: 'mipalmero2a@gmail.com',
        from: req.body.email, 
        subject: 'Website Contact',
        text: req.body.message
    }
        sendGrid.send(msg)
            .then(result => {
                res.status(200).json({
                    success: true

                });

            })

        .catch(error => {
                console.log('error', error);
                res.status(401).json({
                success: false

                });

            });
});

app.listen(3030, '0.0.0.0');