const express = require('express')
const router = express.Router()
const { OAuth2Client } = require('google-auth-library');

exports.gAuth = async (req, res) => {

    // get the token from req.body
    let token = req.body.credential
    try {

        // verify the token and generate the ticket
        const client = new OAuth2Client();
        let ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID // your client ID here
        });

        // extracting the required parts from ticket
        ticket = ticket.payload
        let user = { name: ticket.name, email: ticket.email, picture: ticket.picture }

        // send the extracted data to front end
        res.json({
            "user": user
        })

    } catch (e) {
        res.json({
            "error ": e
        })
        
    }

}