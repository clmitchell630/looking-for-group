const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));;
app.use(express.json());

const authConfig = {
    domain: "dev-chris630.auth0.com",
    audience: "https://lookingforgroup-app.herokuapp.com/"
};

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
    }),
    audience: authConfig.audience,
    issuer: `https://${authConfig.domain}/`,
    algorithm: ["RS256"]
});

app.get("/api/external", checkJwt, (req, res) => {
    res.send({
        msg: "Your Access Token was successfully validated!"
    });
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/lookingforgroup');

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
