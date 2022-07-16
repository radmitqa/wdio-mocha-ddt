//merge parent conf object + add new changes in uat conf(baseurl, connectiontimeour)
const merge = require('deepmerge')
const wdioConf = require('./wdio.conf.js')

exports.config = merge(wdioConf.config, {

// Pointing to UAT environment
baseUrl : 'http://uat.rahulshettyacademy.com',
waitforTimeout: 5000,

mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    grep:"sanity"
},




})