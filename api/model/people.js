import { Schema, model } from "mongoose";

const newsSchema = Schema({

    id: {
        type: String
    },
    mail: {
        type: String
    },
    adress: {
        type: String
    },
    name: {
        type: String
    }
    ,
    username: {
        type: String
    }

});

export default model("People", newsSchema);