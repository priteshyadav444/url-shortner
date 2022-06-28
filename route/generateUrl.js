const express = require('express')
const router = express.Router()
const Url = require('../model/Url')
const validUrl = require('valid-url');
const shortid = require('shortid')
require('dotenv').config()
// router>> POST /api/generateUrl
// desc>> Generate short url and Save In Database 
router.post("/generateUrl", async (req, res) => {

    const { longLink } = req.body;
    if (!longLink) {
        return res.json({ err: "All Field Required!" })
    }

    if (!validUrl.isUri(process.env.BASE_URL)) {
        return res.json({ err: "BaseUrl Is inappropriate!" })
    }

    const shortId = shortid.generate();

    if (validUrl.isUri(longLink)) {
        try {
            const urlData = await Url.findOne({ longLink: longLink });

            if (urlData) {
                console.log("inside")
                return res.json(urlData);
            }
            else {
                const shortLink = process.env.BASE_URL + "/" + shortId;
                const newUrl = new Url({
                    shortId,
                    longLink,
                    shortLink
                });
                try {
                    await newUrl.save();
                    return res.json(newUrl);
                } catch (error) {
                    console.log(err)
                }
            }
        } catch (err) {
            console.log(err)
        }

    }
    else {
        return res.json({ err: "Link Is inappropriate!" })
    }

})

module.exports = router

