(this.webpackJsonpmusicplayer=this.webpackJsonpmusicplayer||[]).push([[0],{11:function(e,t,i){},12:function(e,t,i){},13:function(e,t,i){"use strict";i.r(t);var c=i(0),n=i(1),r=i.n(n),s=i(4),a=i.n(s),l=(i(11),i(2)),u=(i(12),i(5)),o=i.n(u),d=function(e){var t=e.url,i=Object(n.useRef)(null),r=Object(n.useRef)(null),s=Object(n.useState)(!1),a=Object(l.a)(s,2),u=a[0],d=a[1],p=Object(n.useState)(.5),j=Object(l.a)(p,2),m=j[0],b=j[1];Object(n.useEffect)((function(){d(!1);var e={container:i.current,waveColor:"#eee",progressColor:"#8291A9",barWidth:4,barRadius:1,barGap:2,responsive:!0,height:100,normalize:!0,partialRender:!0,showTime:!0};return r.current=o.a.create(e),r.current.load(t),r.current.on("ready",(function(){r.current&&(r.current.setVolume(m),b(m))})),function(){return r.current.destroy()}}),[t]);return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{id:"waveform",ref:i}),Object(c.jsx)("div",{className:"controls",children:Object(c.jsxs)("div",{className:"ControlsBody",children:[Object(c.jsx)("button",{onClick:function(){d(!u),r.current.playPause()},children:u?"Pause":"Play"}),Object(c.jsx)("input",{type:"range",id:"volume",name:"volume",min:"0.01",max:"1",step:".025",onChange:function(e){var t=+e.target.value;t&&(b(t),r.current.setVolume(t||1))},defaultValue:m})]})})]})},p=function(e){var t=e.tracks,i=e.selectedTrack,n=e.setSelectedTrack;return Object(c.jsxs)("div",{className:"playlist",children:[Object(c.jsx)("p",{children:"Playlist:"}),Object(c.jsx)("div",{className:"songs",children:t.map((function(e){return Object(c.jsxs)("div",{className:e.id===i.id?"playlist-itemSelected":"playlist-item",onClick:function(){n(e)},children:[Object(c.jsx)("span",{children:e.misician}),Object(c.jsx)("span",{children:"- "}),Object(c.jsx)("span",{children:e.title})]},e.id)}))})]})},j=[{id:0,misician:"Kunteynir",title:"Privet pider",url:"https://res.cloudinary.com/qpheliax/video/upload/v1609094194/mp3/01_t040fc.mp3"},{id:1,misician:"M\xd8L",title:"Bruma",url:"https://res.cloudinary.com/qpheliax/video/upload/v1609094195/mp3/02_imf5hp.mp3"},{id:3,misician:"\u0421\u041b\u0410\u0412\u0410 \u041a\u041f\u0421\u0421",title:"TOYOTA CRESTA",url:"https://res.cloudinary.com/qpheliax/video/upload/v1609094194/mp3/03_eccypd.mp3"},{id:4,misician:"Mourning By Morning",title:"I Let You Go For Nihilism",url:"https://res.cloudinary.com/qpheliax/video/upload/v1609094195/mp3/04_tafkbp.mp3"}];var m=function(){var e=Object(n.useState)(j[0]),t=Object(l.a)(e,2),i=t[0],r=t[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(d,{url:i.url}),Object(c.jsx)(p,{tracks:j,selectedTrack:i,setSelectedTrack:r})]})},b=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,14)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;i(e),c(e),n(e),r(e),s(e)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),b()}},[[13,1,2]]]);
//# sourceMappingURL=main.93986b23.chunk.js.map