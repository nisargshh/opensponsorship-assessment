const mongoose = require("mongoose")

const schema = mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   sports: {
      type: Array,
      required: true,
   },
   dob: {
      type: Date,
      required: true,
   },
   gender: {
      type: String,
      required: true,
   },
   location: {
      type: String,
      required: true,
   },
   team: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
}, { timestamps: true })

module.exports = mongoose.model("Player", schema)