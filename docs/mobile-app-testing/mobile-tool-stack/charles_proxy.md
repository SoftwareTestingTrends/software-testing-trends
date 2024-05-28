---
sidebar_position: 6
---
# Charles Proxy

## What is Charles Proxy?

Charles is an HTTP proxy / HTTP monitor / Reverse Proxy that enables a developer to view all of the HTTP and SSL / HTTPS traffic between their machine and the Internet. This includes requests, responses and the HTTP headers (which contain the cookies and caching information).

## Setting up Charles on Android Device

1. Download Charles
   Install the latest version of Charles proxy onto your laptop depending on your OS.(Link: http://www.charlesproxy.com/download/)
2. After installation, Use the following steps to configure Charles Proxy:
open Charles proxy and navigate to Proxy -> Proxy Settings. Enter the port as 8888
* Add SSL Proxy settings
   Click on Proxy -> SSL Proxying Settings. Provide the host as _._ and leave the port field blank.
* Add Charles root Certificate
   Install the Charles SSL certificate by navigating to Help --> SSL Proxying --> Instal Charles Root Certificate
* Trust Certificate
* Enable macOS Proxy

## Charles on Real Android

1. Enable the developer option in the Android phone
2. Navigate to the browser in the phone and open `chls.pro/ssl` and install the Charles certificate on your mobile.
3. Navigate to the Wi-Fi settings. Select a wi-fi connection that is same as the wi-fi connected on your laptop. After entering the password, enable Advanced Options. In the Proxy settings, select Manual. Enter the IP address of your laptop. 

This information can also be checked from Charles proxy tool by navigating to Help --> SSL Proxying -> Instal Charles Root Certificate on a Mobile Device or Remote Browser
After entering the proxy host name, enter port as 8888.

## Issues

- Checkout for VPN related issues: https://www.charlesproxy.com/documentation/faqs/vpn-not-working-with-charles/

## Additional Resources
- https://medium.com/@daptronic/the-android-emulator-and-charles-proxy-a-love-story-595c23484e02
