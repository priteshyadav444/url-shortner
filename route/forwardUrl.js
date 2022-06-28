const express = require('express')
const router = express.Router()
const Url = require('../model/Url')
const validUrl = require('valid-url');
const shortid = require('shortid')
require('dotenv').config()

router.get("/:shortId", async (req, res) => {

    try {
        const urlData = await Url.findOne({ shortId: req.params.shortId });
        if (urlData) {
            res.redirect(urlData.longLink);
        }
        else {
            res.json({
                err: "Link is Expired"
            })
        }
    } catch (error) {
        console.log(error)
    }
})
module.exports = router