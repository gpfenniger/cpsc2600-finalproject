import mongoose from "mongoose";

let MapNodeSchema = new mongoose.Schema({
    system: {
        type: String,
        maxlength: 30,
        required: true
    },
    lanes: [mongoose.Types.ObjectId],
    article: mongoose.Types.ObjectId
});

exports.MapNode = mongoose.model("MapNode", MapNodeSchema);
