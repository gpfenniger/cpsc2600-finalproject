import mongoose from "mongoose";

let FactionSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength: 30,
        required: true,
        unique: true
    },
    description: {
        type: String,
        maxlength: 256,
        required: true
    }
});

exports.Faction = mongoose.model("Faction", FactionSchema);
