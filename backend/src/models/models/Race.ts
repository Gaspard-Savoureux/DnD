import { Schema, model, ObjectId } from "mongoose";
import { } from "mongodb";

const RaceSchema = new Schema({
  index: {type: String, required: true},
  name: String,
  url: String,
  speed: Number,
  ability_bonuses: [{
    bonus: Number,
    ability_score: {
    index: String,
    name: String,
    url: String,
  }}],
  alignment: String,
  age: String,
  size: String,
  size_description: String,
  starting_proficiencies: [{
    index: String,
    name: String,
    url: String,
  }],
  starting_proficiency_options: {
    choose: Number,
    type: String,
    from: [{
    index: String,
    name: String,
    url: String,
  }]},
  languages: [{
    index: String,
    name: String,
    url: String,
  }],
  language_desc: String,
  traits: [{
    index: String,
    name: String,
    url: String,
  }],
  subraces: [{
    index: String,
    name: String,
    url: String,
  }],
  // author: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User"
  // },
  // post: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Post"
  // }
});

export default model("Race", RaceSchema);