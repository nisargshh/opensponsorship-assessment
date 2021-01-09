const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const Player = require("./models/Player")
var cors = require('cors')
const path = require('path');
const app = express();
require('dotenv').config()


app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


mongoose.connect('mongodb+srv://' + process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD + '@nisarg.6tcq2.mongodb.net/<' + process.env.DB_DB + '?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log("connected to the database");
});

app.get('/', function (req, res) {
  res.send('Express is running')
});

app.post("/player", async (req, res) => {
  const player = new Player({
    name: req.body.name,
    sports: req.body.sports,
    gender: req.body.gender,
    dob: req.body.dob,
    description: req.body.description,
    team: req.body.team,
    location: req.body.location,
  })

  await player.save()
  res.send(player)
})

app.get("/playerlist", async (req, res) => {
  Player.find({}, function (err, players) {
    var playerMap = {};

    players.forEach(function (player) {
      playerMap[player._id] = player;
    });

    res.send(playerMap);
  });
});

app.post("/:id", async (req, res) => {
  const player = await Player.findOne({ _id: req.params.id })
  res.send(player)
});

app.listen(process.env.PORT || 3001);