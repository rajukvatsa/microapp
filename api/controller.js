'use strict';

let properties = require('../package.json')
let distance = require('../service/distance');

let controllers = {
   about: function(req, res) {
       let aboutInfo = {
           name: properties.name,
           version: properties.version
       }
       res.json(aboutInfo);
   },
   getDistance: function(req, res) {
           distance.find(req, res, function(err, dist) {
               if (err)
                   res.send(err);
               res.json(dist);
           });
       },
    something:async  function(req, res){
//for ci cd 
        const response =  fetch(
            "https://dummyapi.online/api/products",
          );
          const data = await response.json();
          console.log(data);
          return data;
    },
    hello: async (req, res) => {
       const response = await fetch("https://dummyapi.online/api/products",);
       const data = await response.json();
       res.json(data);
      

    }
};

module.exports = controllers;