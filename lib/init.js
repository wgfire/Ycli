const dowloade = require('./getGitTemplate')
const  path =require('path')

module.exports = function init (arg){
    console.log('arg',arg)
    let url  = 'wgfire/Keep_Learning'
    dowloade(url,path.resolve('./','wg'),(err)=>{console.log(err)})
}