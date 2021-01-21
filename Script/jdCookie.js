/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = [
    'jdapp;iPhone;9.3.5;13.5;a7f6c0292eb84e6391f389397564b27fd8714827;network/wifi;ADID/12942785-ACDD-4155-95CC-8E5589667FDA;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone11,6;addressid/1495032006;supportBestPay/0;appBuild/167515;jdSupportDarkMode/0;pv/95.163;apprpd/MyJD_Main;ref/https://linggame.jd.com/babelDiy/Zeus/heA49fhvyw9UakaaS3UUJRL7v3o/index.html?lng=114.269131&lat=30.594183&sid=ba984999bc288cf8d7ab0c0e21b0224w&un_area=17_1381_3582_52797;psq/1;ads/;psn/a7f6c0292eb84e6391f389397564b27fd8714827|228;jdv/0|direct|-|none|-|1610693169331|1611199623;adk/;app_device/IOS;pap/JA2015_311210|9.3.5|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
    '',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
]
// 判断环境变量里面是否有京东ck
if (process.env.JD_COOKIE) {
    if (process.env.JD_COOKIE.indexOf('&') > -1) {
        console.log(`您的cookie选择的是用&隔开\n`)
        CookieJDs = process.env.JD_COOKIE.split('&');
    } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
        console.log(`您的cookie选择的是用换行隔开\n`)
        CookieJDs = process.env.JD_COOKIE.split('\n');
    } else {
        CookieJDs = [process.env.JD_COOKIE];
    }
}
if (JSON.stringify(process.env).indexOf('GITHUB')>-1) {
    console.log(`请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n`);
    !(async () => {
        await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
        await process.exit(0);
    })()
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
    const index = (i + 1 === 1) ? '' : (i + 1);
    exports['CookieJD' + index] = CookieJDs[i].trim();
}