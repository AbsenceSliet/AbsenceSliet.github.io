(this["webpackJsonplq-birthday1"]=this["webpackJsonplq-birthday1"]||[]).push([[0],{129:function(t,e,a){},134:function(t,e,a){},135:function(t,e,a){},138:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),c=a(19),s=a.n(c),r=(a(78),a(52)),o=a.n(r),d=a(68),l=a(69),u=function(){function t(e){var a=e.width,n=e.height;Object(d.a)(this,t),this.position=void 0,this.speed=void 0,this.r=void 0,this.transparency=void 0,this.color=void 0,this.init({width:a,height:n})}return Object(l.a)(t,[{key:"init",value:function(t){var e=t.width,a=t.height;this.position={x:Math.random()*e,y:Math.random()*a},this.speed=10*Math.random(),this.r=6*Math.random(),this.transparency=Math.random(),this.color={r1:255*Math.random(),g:255*Math.random(),b:255*Math.random()}}},{key:"draw",value:function(t){var e=t.width,a=t.height,n=t.canvasContext;this.position.y++,this.transparency-=.01,this.transparency<=0&&this.init({width:e,height:a,canvasContext:n}),n.beginPath(),n.fillStyle="rgba("+this.color.r1+","+this.color.g+","+this.color.b+","+this.transparency+")",n.arc(this.position.x,this.position.y,this.r,0,2*Math.PI),n.fill()}}]),t}(),h=(a(141),function(t){return Object(n.useEffect)(t,[]),null}),p=(a(79),a(35)),j=a.n(p),m=a(54),b=a(16),f=a.n(b),g=a(3),x=(a(129),a.p+"static/media/starrule.31160fe1.mp3");function O(t){t.play(),"object"==typeof WeixinJSBridge&&"function"==typeof WeixinJSBridge.invoke?t.play():document.addEventListener?document.addEventListener("WeixinJSBridgeReady",(function(){t.play()}),!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",(function(){t.play()})),document.attachEvent("onWeixinJSBridgeReady",(function(){t.play()})));var e=!0;document.addEventListener("touchstart",(function(a){e&&(t.play(),e=!1)}),!1)}var v=a(1),_=function(){var t=Object(n.useState)(""),e=Object(m.a)(t,2),a=e[0],i=e[1],c=Object(n.useState)(""),s=Object(m.a)(c,2),r=s[0],o=s[1],d=Object(n.useRef)(0),l=Object(g.f)(),u=Object(n.useRef)(null);Object(n.useLayoutEffect)((function(){document.title="\u6b22\u8fce\u6765\u5230\u6211\u7684\u4e16\u754c\ud83d\udc4f",O(u.current)}));var h=Object(n.useCallback)((function(){if(d.current+=1,a&&r)if("qingqingxiannv"===a){if("0903"!==r){var t="";return t=d.current<=3?"\u5bc6\u7801\u9519\u4e86\u5662~":"\u76f8\u8bc6\u7684\u65e5\u671f\uff5e\ud83d\ude0a",void j.a.show(t)}console.log("correct"),l.push("/subPage")}else j.a.show("\u4f60\u96be\u9053\u5fd8\u8bb0\u81ea\u5df1\u662f\u4e00\u4e2a\u5c0f\ud83e\uddda\u200d\u2640\ufe0f\u4e86\u561b");else j.a.show("\u51c6\u786e\u8f93\u5165\u561b~\ud83d\ude21")}),[l,a,r]);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("audio",{autoPlay:!0,ref:u,loop:!0,preload:"auto",src:x}),Object(v.jsxs)("div",{className:"home__wrap",children:[Object(v.jsx)("h2",{className:"home__wrap-title animate__animated animate__lightSpeedInRight",children:"\u6e05\u6e05\ud83e\uddda\u200d\u2640\ufe0f\u751f\u65e5\u5feb\u4e50"}),Object(v.jsx)("h4",{className:"home__wrap-subTitle animate__animated animate__lightSpeedInLeft animate__delay-1s",children:"\u8fd9\u91cc\u6709\u4e00\u4efd\u793c\u7269\u8bf7\u67e5\u6536\u5662\uff5e\ud83d\ude0a\uff5e"}),Object(v.jsxs)("p",{className:"home__wrap-desc animate__animated animate__fadeInDownBig animate__delay-2s",children:["\u8d26\u6237\u540d\u79f0\u662f:",Object(v.jsx)("b",{children:"qingqingxiannv"}),Object(v.jsx)("br",{}),"\u81f3\u4e8e\u5bc6\u7801\u5c31\u770b\u4f60\u7684\u5566\uff08\u56db\u4f4d\u6570\u5b57\u5662\uff09"]}),Object(v.jsx)("section",{className:"home__wrap-content animate__animated animate__fadeIn animate__delay-3s",children:Object(v.jsxs)("section",{className:"inputwrapper",children:[Object(v.jsx)("input",{type:"text",className:"input",onChange:function(t){return i(t.target.value)}}),Object(v.jsx)("input",{type:"passward",className:f()("input","passward"),onChange:function(t){return o(t.target.value)}})]})}),Object(v.jsx)("div",{className:"btn-wrapper ",children:Object(v.jsx)("div",{className:"btn animate__animated animate__rotateIn animate__delay-4s",onClick:h,children:Object(v.jsx)("span",{children:"Click me!(\u0e51\u2022\u0300\u3142\u2022\u0301)\u0648\u2727"})})})]})]})},y=i.a.memo(_),w=a.p+"static/media/01.b6fdafcd.jpg",N=a.p+"static/media/02.cec3a1c3.jpg",C=a.p+"static/media/03.2c63f6bb.jpg",k=a.p+"static/media/04.2b5a66f7.jpg",L=a.p+"static/media/05.2a4dc41f.jpg",M=a.p+"static/media/06.d3e2b8b1.jpg",R=a.p+"static/media/1.2c29e314.jpg",S=a.p+"static/media/2.11ce8e94.jpg",E=a.p+"static/media/3.aad02761.jpg",F=a.p+"static/media/4.133c8302.jpg",P=a.p+"static/media/5.505f916f.jpg",T=a.p+"static/media/6.7ee3ab3d.jpg",q=[w,N,C,k,L,M],B=[R,S,E,F,P,T],I=["\u2764\u6e05\u6e05\ud83e\uddda\u200d\u2640\ufe0f\uff0c\u751f\u65e5\u5feb\u4e50\uff5e","\u2749\u8fd9\u662f\u966a\u4f60\u5ea6\u8fc7\u7684\u7b2c\u4e00\u4e2a\u751f\u65e5,","\u2749\u5e0c\u671b\u4ee5\u540e\u7684\u6bcf\u4e2a\u751f\u65e5\u90fd\u6709\u6211\u3002(\u5047\u60f3\ud83d\ude0a)","\u2749\u6211\u5f88\u611f\u6fc0\u7f18\u5206\u8ba9\u6211\u4eec\u76f8\u8bc6,","\u2749\u76f8\u8c08\u4e4b\u540e\u53d1\u73b0\u6211\u4eec\u6709\u597d\u591a\u5171\u540c\u70b9,","\u2749\u9047\u89c1\u4f60\u4e0d\u5bb9\u6613,\u4e0d\u8981\u60f3\u7740\u63a8\u5f00\u6211,","\u2749\u867d\u7136\u7ed9\u4e0d\u4e86\u4f60\u591a\u5c11\u611f\u52a8\uff0c\u4f46\u6211\u60f3\u4ee5\u540e\u53ef\u4ee5\u90fd\u6709\u6211","\u2749\u6211\u4e5f\u4e0d\u77e5\u9053\u4e3a\u4ec0\u4e48\u4f1a\u559c\u6b22\u4f60\uff0c\u559c\u6b22\u4f60\u4ec0\u4e48","\u2749\u53ef\u662f\u6211\u5c31\u662f\u559c\u6b22\u4f60\uff0c\u5f88\u559c\u6b22\uff0c\u975e\u5e38\u559c\u6b22\u4f60\uff0c\u8d8a\u6765\u8d8a\u559c\u6b22\u4f60","\u2749\u6211\u4eec\u5c31\u4ee5\u6700\u653e\u677e\u7684\u65b9\u5f0f\u53bb\u76f8\u5904,\u4e0d\u8981\u53bb\u5728\u610f\u592a\u591a\uff0c\u60f3\u592a\u591a\uff0c","\u2749\u60f3\u4f60\u6bcf\u5929\u90fd\u5f00\u68ee\uff5e","\u2749You can trust me with your Ridge,","\u2749And as long as you want to turn around, i^m standing behind you"],A=0;function J(t){var e=I[A].split("");!function a(){if(!(e.length>0))return W((function(){!function(t){var e=I[A].split("");!function a(){if(!(e.length>0))return I.length>A+1?A++:A=0,J(t),!1;e.pop(),t.innerHTML=e.join(""),setTimeout(a,50)}()}(t)}),3e3),!1;t.innerHTML+=e.shift(),setTimeout(a,100)}()}var W=function(){var t=0;return function(e,a){clearTimeout(t),t=setTimeout(e,a)}}(),D=J,H=a.p+"static/media/nightyou.50306499.mp3",K=(a(134),function(){var t=Object(n.useRef)(""),e=Object(n.useRef)(null);h((function(){document.title="\u8bb0\u5f55\u4f60\u6700\u7f8e\u7684\u4f60\ud83d\ude0a",O(e.current)})),Object(n.useLayoutEffect)((function(){D(t.current)}));return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("audio",{autoPlay:!0,ref:e,loop:!0,preload:"auto",src:H}),Object(v.jsxs)("div",{className:"typing",children:[Object(v.jsx)("div",{className:"header-sub-title",ref:t}),Object(v.jsx)("div",{className:"header-sub-title blink",children:"|"})]}),Object(v.jsx)("div",{className:"finnalbtn",onClick:function(){window.location.href="https://absencesliet.github.io/lqbirthday/star/index.html"},children:"Final surprise \u0ed2(\u2299\u1d17\u2299)\u096d\u270e\u25a4"}),Object(v.jsx)("div",{className:"landscape"}),Object(v.jsx)("div",{className:"filter"}),Object(v.jsx)("div",{className:"wrap",children:Object(v.jsxs)("div",{className:"cube",children:[Object(v.jsx)(v.Fragment,{children:B.map((function(t,e){return Object(v.jsx)("div",{className:"out",children:Object(v.jsx)("img",{src:t,alt:"",className:"pic"})},"b".concat(e))}))}),Object(v.jsx)(v.Fragment,{children:q.map((function(t,e){return Object(v.jsx)("span",{className:"inner",children:Object(v.jsx)("img",{src:t,alt:"",className:"inner_pic"})},"a".concat(e))}))})]})})]})}),Y=i.a.memo(K),Z=(a(135),a.p+"static/media/starsky.672aaa23.mp3"),z=function(){var t=Object(n.useRef)(null),e=Object(g.f)();Object(n.useLayoutEffect)((function(){document.title="\u53ea\u5c5e\u4e8e\u4f60\u7684\u793c\u7269",O(t.current)}));return Object(v.jsxs)("div",{className:"subpage__wrap",children:[Object(v.jsx)("audio",{autoPlay:!0,ref:t,loop:!0,preload:"auto",src:Z}),Object(v.jsxs)("div",{className:"subpage__wrap-content",children:[Object(v.jsx)("h1",{className:"content-title1",children:" \u7a81\u5982\u5176\u6765\u7684\u76f8\u9047\uff0c\u59cb\u6599\u672a\u53ca\u7684\u6b22\u559c"}),Object(v.jsx)("h2",{className:"content-title2",children:"\u4e16\u95f4\u7684\u76f8\u9047,\u90fd\u662f\u4e45\u522b\u7684\u91cd\u9022"}),Object(v.jsx)("span",{className:"content-title3",children:"\u6c38\u8fdc\u768418\u5c81\uff0c\u795d\u4f60\u751f\u65e5\u5feb\u4e50\ud83d\ude0a"})]}),Object(v.jsx)("div",{onClick:function(){e.push("/photo")},className:"subpage__wrap-btn",children:"go forward \u03c6(\u2267\u03c9\u2266*)\u266a"}),Object(v.jsx)("h2",{className:"fixedtitle",children:"\u2014\u2014\u6700\u7f8e\u7684\u9047\u89c1"})]})},G=[{path:"/",component:y,title:"\u6b22\u8fce\u6765\u5230\u6211\u7684\u4e16\u754c\ud83d\udc4f",exact:!0},{path:"/photo",component:Y,title:"\u8bb0\u5f55\u4f60\u6700\u7f8e\u7684\u4f60\ud83d\ude0a",exact:!0},{path:"/subPage",component:i.a.memo(z),title:"\u53ea\u5c5e\u4e8e\u4f60\u7684\u793c\u7269",exact:!0}],Q=a(51);var U=function(){var t=Object(n.useRef)(null),e=window.innerWidth,a=window.innerHeight,i=[],c=Object(n.useCallback)((function(){t.current.width=e,t.current.height=a;for(var n=0;n<50;n++){var c=new u({width:e,height:a});i.push(c)}}),[a,i,e]),s=Object(n.useCallback)((function(){if(t.current){var n=t.current&&t.current.getContext("2d");n&&n.clearRect(0,0,e,a);for(var c=0;c<i.length;c++)i[c].draw({width:e,height:a,canvasContext:n});requestAnimationFrame(s)}}),[a,i,e]);return h((function(){c(),s()})),Object(v.jsxs)("div",{className:o.a.App,style:{height:"100%",width:"100%"},children:[Object(v.jsx)("canvas",{className:o.a.canvas,ref:t}),Object(v.jsx)(Q.a,{children:Object(v.jsx)(g.c,{children:G.map((function(t,e){return Object(v.jsx)(g.a,{path:t.path,component:t.component,exact:t.exact},e)}))})})]})},V=(a(136),function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,142)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,c=e.getLCP,s=e.getTTFB;a(t),n(t),i(t),c(t),s(t)}))});a(137);s.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(U,{})}),document.getElementById("root")),V()},52:function(t,e,a){t.exports={App:"App_App__16ZpL",canvas:"App_canvas__1KgDx"}},78:function(t,e,a){}},[[138,1,2]]]);
//# sourceMappingURL=main.d6992c97.chunk.js.map