(window["webpackJsonpreact-pomodoro"]=window["webpackJsonpreact-pomodoro"]||[]).push([[0],{11:function(e,t,n){e.exports=n(23)},16:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),l=n.n(r),s=n(2),o=(n(16),n(4)),i=n(5),m=n(7),u=n.n(m),f=n(8),p=n.n(f),b=function(){var e=Object(a.useState)(5),t=Object(s.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(25),m=Object(s.a)(l,2),f=m[0],b=m[1],d=Object(a.useState)(1500),E=Object(s.a)(d,2),v=E[0],j=E[1],k=Object(a.useState)(0),N=Object(s.a)(k,2),O=N[0],w=N[1],C=Object(a.useState)(!0),g=Object(s.a)(C,2),h=g[0],S=g[1],y=Object(a.useState)(null),I=Object(s.a)(y,2),x=I[0],A=I[1],L=function(e){var t=Math.floor(e/60),n=e%60;return"".concat(t>=10?t:"0"+t,":").concat(n>=10?n:"0"+n)};Object(a.useEffect)((function(){v>0&&j(60*f)}),[f]),Object(a.useEffect)((function(){O>0&&w(60*n)}),[n]),Object(a.useEffect)((function(){if(!h&&v>0&&0==O)A(setInterval(B,1e3));else if(0==v&&0==O){new u.a(p.a,{volume:.4,throttleMs:100}).play(),w(60*n)}return function(){return clearInterval(x)}}),[h,v]);var B=function(){v>0?j(v-1):w(O-1)};Object(a.useEffect)((function(){if(!h&&O>0&&0==v)A(setInterval(B,1e3));else if(0==v&&0==O){new u.a(p.a,{volume:.4,throttleMs:100}).play(),j(60*f)}return function(){return clearInterval(x)}}),[h,O]);return c.a.createElement("div",{className:"main"},c.a.createElement("h1",{className:"title"},"Promodoro Clock"),c.a.createElement("div",{className:"label-container"},c.a.createElement("span",{id:"break-label",className:"label"},"Break Length"),c.a.createElement("span",{id:"session-label",className:"label"},"Session Length")),c.a.createElement("div",{className:"setterWrapperContainer"},c.a.createElement("div",{className:"setterContainer"},c.a.createElement("span",{onClick:function(){n>1&&h&&r(n-1)},id:"break-decrement",className:"downArrow"},"\u27a4"),c.a.createElement("span",{id:"break-length",className:"lengthLabel"},n),c.a.createElement("span",{onClick:function(){n<60&&h&&r(n+1)},id:"break-increment",className:"upArrow"},"\u27a4")),c.a.createElement("div",{className:"setterContainer"},c.a.createElement("span",{onClick:function(){f>1&&h&&b(f-1)},id:"session-decrement",className:"downArrow"},"\u27a4"),c.a.createElement("span",{id:"session-length",className:"lengthLabel"},f),c.a.createElement("span",{onClick:function(){f<60&&h&&b(f+1)},id:"session-increment",className:"upArrow"},"\u27a4"))),c.a.createElement("div",{className:"countContainer"},c.a.createElement("span",{id:"timer-label"},O>=0&&0==v?"Break":"Session"),c.a.createElement("span",{style:{color:v<60&&0==O||O<60&&0==v?"red":"green"},id:"time-left"},L(O>=0&&0==v?O:v))),c.a.createElement("div",{className:"controlContainer"},c.a.createElement(o.a,{style:{margin:"10px",cursor:"pointer",userSelect:"none"},icon:i.b,onClick:function(){h&&S(!1)}}),c.a.createElement(o.a,{style:{margin:"10px",cursor:"pointer",userSelect:"none"},icon:i.a,onClick:function(){h||(S(!0),clearInterval(x))}}),c.a.createElement(o.a,{style:{margin:"10px",cursor:"pointer",userSelect:"none"},icon:i.c,onClick:function(){h||S(!0),clearInterval(x),b(25),r(5),j(1500),w(0)}})))};n(22);l.a.render(c.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n.p+"static/media/beep.8ee39c4e.mp3"}},[[11,1,2]]]);
//# sourceMappingURL=main.13edec66.chunk.js.map