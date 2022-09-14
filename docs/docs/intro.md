---
sidebar_position: 1
slug: /
---

# Getting Started

## Installation
```shell
yarn add gree-ac-client
```

or

```shell
npm install --save gree-ac-client
```

## AC host
First, you need to find out the IP address of your air conditioner in your network. One of the easiest ways is to
view the list of devices connected to your router and find the air conditioner by excluding the devices you know.

## Configuring HVAC Wi-Fi
1. Make sure your HVAC running in AP mode. You can reset the Wi-Fi config by pressing MODE + WI-FI (or MODE + TURBO) on the AC remote for 5s.
2. Connect with the AP Wi-Fi network (the SSID name should be a 8-character alfanumeric, e.g. "u34k5l166").
3. Run the following in your UNIX terminal:
```shell
echo -n "{\"psw\": \"YOUR_WIFI_PASSWORD\",\"ssid\": \"YOUR_WIFI_SSID\",\"t\": \"wlan\"}" | nc -cu 192.168.1.1 7000
```
Note: This command may vary depending on your OS (e.g. Linux, macOS, CygWin). If facing problems, please consult the appropriate netcat manual.
