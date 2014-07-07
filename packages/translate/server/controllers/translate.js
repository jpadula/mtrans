var translate = require('node-google-translate')
  , assert = require('assert');

var key = 'AIzaSyDm8Kf8OJ2p2nLuUinCoDtmtP99sQMTfQg';

exports.render = function(req, res) {
	var srce = req.body.srce;
	var txt = req.body.txt;
	var tget = req.body.tget;


	translate({key: key, source:srce, q: txt, target: tget}, function(result){
	  res.jsonp(result);
	});

};
