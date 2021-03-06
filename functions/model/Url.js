const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UrlSchema = new Schema(
    {
        shortId: { type: String },
        longLink: { type: String },
        shortLink: { type: String },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Url", UrlSchema);
