"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1,slug:"/"},i="Getting Started",l={unversionedId:"intro",id:"intro",title:"Getting Started",description:"Installation",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/gree-hvac-api/docs/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Client",permalink:"/gree-hvac-api/docs/category/client"}},c={},s=[{value:"Installation",id:"installation",level:2},{value:"AC host",id:"ac-host",level:2},{value:"Configuring HVAC Wi-Fi",id:"configuring-hvac-wi-fi",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add gree-ac-client\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save gree-ac-client\n")),(0,o.kt)("h2",{id:"ac-host"},"AC host"),(0,o.kt)("p",null,"First, you need to find out the IP address of your air conditioner in your network. One of the easiest ways is to\nview the list of devices connected to your router and find the air conditioner by excluding the devices you know."),(0,o.kt)("h2",{id:"configuring-hvac-wi-fi"},"Configuring HVAC Wi-Fi"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure your HVAC running in AP mode. You can reset the Wi-Fi config by pressing MODE + WI-FI (or MODE + TURBO) on the AC remote for 5s."),(0,o.kt)("li",{parentName:"ol"},'Connect with the AP Wi-Fi network (the SSID name should be a 8-character alfanumeric, e.g. "u34k5l166").'),(0,o.kt)("li",{parentName:"ol"},"Run the following in your UNIX terminal:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'echo -n "{\\"psw\\": \\"YOUR_WIFI_PASSWORD\\",\\"ssid\\": \\"YOUR_WIFI_SSID\\",\\"t\\": \\"wlan\\"}" | nc -cu 192.168.1.1 7000\n')),(0,o.kt)("p",null,"Note: This command may vary depending on your OS (e.g. Linux, macOS, CygWin). If facing problems, please consult the appropriate netcat manual."))}p.isMDXComponent=!0}}]);