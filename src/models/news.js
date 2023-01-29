const { Schema, model } = require("mongoose");
const {handleMongooseError} = require('../helpers')

const newsSchema = new Schema({
    title: {
        type: String,
    },
    url: {
        type: String,
    },
    description: {
        type: String,
    },
    date: {
        type: String,
    },
}, { versionKey: false });

newsSchema.post("save", handleMongooseError);

const News = model('news', newsSchema);

module.exports = News;