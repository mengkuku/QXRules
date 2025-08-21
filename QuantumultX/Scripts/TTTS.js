
[rewrite_local]

^https:\/\/api\.tiantiantiaosheng\.com\/api2\/s_plus_member\/info url script-response-body https://ghfast.top/raw.githubusercontent.com/mengkuku/QXRules/refs/heads/main/QuantumultX/Scripts/TTTS.js

[mitm] 

hostname = api.tiantiantiaosheng.com



*******************************/


$httpClient.get("https://ticket.sdstm.cn/servertime", function (error, response, data) {
  let serverTimeStr = data.trim();  // "1755760514.750"
  let formatted = "unavailable";

  if (!error && response.status === 200) {
    try {
      // 转成毫秒
      let tsMs = parseFloat(serverTimeStr) * 1000;
      let date = new Date(tsMs);

      // 格式化为 yyyy-MM-dd HH:mm:ss
      const pad = n => (n < 10 ? '0' + n : n);
      formatted = date.getFullYear() + '-' +
                  pad(date.getMonth() + 1) + '-' +
                  pad(date.getDate()) + ' ' +
                  pad(date.getHours()) + ':' +
                  pad(date.getMinutes()) + ':' +
                  pad(date.getSeconds());
    } catch (e) {
      formatted = "parse error";
    }
  }

  const result = {
  "code": 0,
  "msg": "success",
  "data": {
    "is_member": true,
    "member_name": "大会员连续包月（限时）",
    "member_expiration_time": "2025-09-20 14:51:49",
    "medal_id": 0,
    "medal_picture": "",
    "today_ttb": false,
    "medal_name": "",
    "renew_status": false,
    "mileage": {
      "current_value": 0,
      "next_value": 5,
      "next_medal_id": 1239,
      "next_medal_picture": "https://cdn.tiantiantiaosheng.com/dataupload/uploadImg/2023-06-09/87739a24-55d3-4ea3-afd5-f136b5ba43ce/9d4f98cc-f38b-4f3f-b77e-aa3842439b32.png",
      "category": "milestone",
      "honor_type": "s_vip",
      "unit": "s_vip_day",
      "title": "S+运动会员"
    },
    "conversion_config": {
      "charge_enabled": true,
      "renew_enabled": true
    },
    "member_type": "big",
    "big_expiration_time": "2025-09-20 14:51:49",
    "big_renew_status": false,
    "is_ad_trial": false,
    "is_pure_enjoy": false,
    "pure_enjoy_renew_status": false,
    "pure_enjoy_expiration_time": "",
    "member_growth_value": {
      "level_no": 1,
      "min_value": 0,
      "max_value": 899,
      "growth_value": 0,
      "delta_value": 900,
      "daily_delta": 20,
      "benefit_number": 17,
      "welfare_number": 6
    },
    "server_time": serverTimeStr
  }
};

  $done({ body: JSON.stringify(result) });
});
