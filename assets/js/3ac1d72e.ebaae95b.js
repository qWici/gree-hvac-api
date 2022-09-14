"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[409],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(t),f=c,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function f(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var o=t.length,i=new Array(o);i[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:c,i[1]=a;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7504:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=t(7462),c=(t(7294),t(3905));const o={sidebar_position:2},i="Connecting",a={unversionedId:"client/connecting",id:"client/connecting",title:"Connecting",description:"Event based",source:"@site/docs/client/connecting.md",sourceDirName:"client",slug:"/client/connecting",permalink:"/docs/client/connecting",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Class",permalink:"/docs/client/client-class"},next:{title:"Properties",permalink:"/docs/client/properties"}},l={},s=[{value:"Event based",id:"event-based",level:2},{value:"Async",id:"async",level:2},{value:"Disconnect",id:"disconnect",level:2}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,c.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"connecting"},"Connecting"),(0,c.kt)("h2",{id:"event-based"},"Event based"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Client } from \"gree-hvac-api\"\n\nconst client = new Client({ host: '192.168.7.60' });\n// autoConnect by default is true or use client.connect();\n\nclient.on('connect', () => {\n    client.setProperty('power', 'on');\n    client.setProperty('temperature', 20);\n});\n")),(0,c.kt)("h2",{id:"async"},"Async"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Client } from \"gree-hvac-api\"\n\n// turn off autoConnect and connect when you need it\nconst client = new Client({ host: '192.168.7.60', autoConnect: false });\n\nconst main = async () => {\n    const connected = await client.connectAsync();\n\n    connected.setProperty('power', 'on');\n    connected.setProperty('temperature', 20);\n}\n\nvoid main();\n")),(0,c.kt)("h2",{id:"disconnect"},"Disconnect"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"client.disconnect()\n\nclient.on('disconnect', () => {\n    // device disconnected\n});\n")))}u.isMDXComponent=!0}}]);