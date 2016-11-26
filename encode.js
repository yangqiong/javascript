/**
 * encode.js
 * desc: 对字符串进行加密
 * github: https://github.com/yangqiong/javascript/blob/master/encode.js
 * version: 1.0.1
 * author: yangqiong
 * date: 2016-11-26
 */

let crypto = require('crypto');
let assert = require('assert');

/**
 * [对字符串进行加密]
 * @param  {[type]} str 
 * @param  {[type]} alg ["md5", "sha1"]
 * @return {[type]}    
 */
module.exports = function(str, alg){
    assert(alg == "md5" || alg == "sha1", "第二个参数必须为md5或者sha1")
    return crypto.createHash(alg).update(str).digest('hex');
}