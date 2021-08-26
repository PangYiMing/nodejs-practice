const fs = require("fs");
const iconv = require("iconv-lite");
const testKey = '平平'
const reg = new RegExp(`.{0,3}${testKey}.{0,3}`, 'g');


fs.readFile('我资质平平.txt', function (err, data) {
    if (err) {
        return false;
    }
    data = iconv.decode(data, 'gbk');
    // const result = reg.test(data)
    const result =  data.match(reg)
    console.log(result);
})



















// TEST 测试 限制次数执行
// let result = reg.exec('aaaaaaaaa平平aaafffaaaaaabbbb平平bbbbaaaa')
// console.log(result);
// result = reg.exec('aaaaaaaaa平平aaafffaaaaaabbbb平平bbbbaaaa')
// console.log(result);
// result = reg.exec('aaaaaaaaa平平aaafffaaaaaabbbb平平bbbbaaaa')
// console.log(result);