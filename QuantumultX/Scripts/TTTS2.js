
[rewrite_local]

^https:\/\/api\.tiantiantiaosheng\.com\/api2\/s_plus_member\/entrance_info url script-response-body https://ghfast.top/raw.githubusercontent.com/mengkuku/QXRules/refs/heads/main/QuantumultX/Scripts/TTTS2.js

[mitm] 

hostname = api.tiantiantiaosheng.com



*******************************/


var objc = JSON.parse($response.body);

    objc = 
{"code":0,"msg":"success","data":{"member_status":"is_splus","entrance_ad":{"ad_text":"","ad_url":""},"wx_show":false,"wx_current_subscribe":false}}
$done({body : JSON.stringify(objc)});
