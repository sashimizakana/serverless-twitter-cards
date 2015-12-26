"use strict";
var client = require('cheerio-httpcli');
var config = require('./config.js');
exports.handler = function(evt,context){
    var url = decodeURIComponent(evt.url);
    if(!config.URL_MATCH.test(url)){
        context.fail('Bad Request: invalid URL');
        return;
    }
    client.fetch(url).then(function(result){
        var image = result.$(config.IMAGE_SELECTER);
        context.succeed({
            location:image.length > 0 ? image.eq(0).attr('src') : config.DEFAULT_IMAGE_URL
        });
    });    
}
