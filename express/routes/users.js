var express = require('express');
var router = express.Router();

var cors = require('cors')
router.use(cors())

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://tle:tle@tletawan-zxvcy.gcp.mongodb.net/test')

var mySchema = mongoose.Schema({
  sumx:String,
  sumg:String,
  start:String,
  end:String,
  n:String,
  xl:String,
  xr:String,
  i:String,
  x0:String,
  x1:String,
});

var MyModel = mongoose.model('MyModel', mySchema, 'db');

router.get('/TR', function(req, res, next) {
  MyModel.find({key:"TR"},function (err, docs){
    console.log(docs)
		res.json(docs)
  })
});
router.get('/BT', function(req, res, next) {
  MyModel.find({key:"BT"},function (err, docs){
    console.log(docs)
		res.json(docs)
  })
});
router.get('/FP', function(req, res, next) {
  MyModel.find({key:"FP"},function (err, docs){
    console.log(docs)
		res.json(docs)
  })
});
router.get('/OP', function(req, res, next) {
  MyModel.find({key:"OP"},function (err, docs){
    console.log(docs)
		res.json(docs)
  })
});
router.get('/ST', function(req, res, next) {
  MyModel.find({key:"ST"},function (err, docs){
    console.log(docs)
		res.json(docs)
  })
});

module.exports = router;
