(this["webpackJsonpcontinental-ui"]=this["webpackJsonpcontinental-ui"]||[]).push([[0],{1:function(e,n,a){e.exports={table:"table_table__33iWm",playerscolumn:"table_playerscolumn__2fsQg",dealscontainer:"table_dealscontainer__1XrHm",dealcolumn:"table_dealcolumn__1udqx",dealheader:"table_dealheader___1Q9Q",inputcontainer:"table_inputcontainer__1jexm",truncated:"table_truncated__WqQUc",nameheader:"table_nameheader__Gr9_Y",playername:"table_playername__1P8n_",resultcolumn:"table_resultcolumn__qu47w"}},11:function(e,n,a){},13:function(e,n,a){"use strict";a.r(n);var t=a(2),r=a.n(t),s=a(6),c=a.n(s),l=(a(11),a(3)),u=a(0),i=function(e){var n=e.label,a=e.onAddName,t=r.a.useState(""),s=Object(l.a)(t,2),c=s[0],i=s[1];return Object(u.jsx)("form",{onSubmit:function(e){a(c),i(""),e.preventDefault()},children:Object(u.jsxs)("label",{children:[n,Object(u.jsx)("input",{type:"text",onChange:function(e){i(e.target.value)},value:c})]})})},o=a(1),d=a.n(o),m={dealsHeaders:["2t","1t 1st","2st","3t","2t 1st","2st 1t","3s"],dealsEarnings:[500,1e3,1500,2e3,2500,3e3,3500],sumEarning:5e3,resultsHeaders:["total","$"]},j=function(e){var n=e.players;return Object(u.jsxs)("div",{className:d.a.playerscolumn,children:[Object(u.jsx)("div",{className:d.a.nameheader,children:"Player"}),n.map((function(e){return Object(u.jsx)("div",{className:d.a.playername,children:e},e)}))]})},b=function(e){var n=e.deals,a=e.onChangeScore;return Object(u.jsx)("div",{className:d.a.dealscontainer,children:m.dealsHeaders.map((function(e,t){return Object(u.jsxs)("div",{className:d.a.dealcolumn,children:[Object(u.jsx)("div",{className:d.a.dealheader,children:e}),n&&n[t]&&n[t].map((function(e){return Object(u.jsx)("div",{className:d.a.inputcontainer,children:Object(u.jsx)("input",{type:"number",step:"5",value:e.value,onChange:function(n){return a({dealIndex:t,name:e.name,value:n.target.value})}},e.name)})}))||null]},e)}))})},h=function(e){var n=e.totals;return Object(u.jsxs)("div",{className:d.a.resultcolumn,children:[Object(u.jsx)("div",{className:d.a.dealheader,children:m.resultsHeaders[0]}),n.map((function(e){return Object(u.jsx)("div",{children:e.scoreSum},e.name)}))]})},p=function(e){var n=e.earnings;return Object(u.jsxs)("div",{className:d.a.resultcolumn,children:[Object(u.jsx)("div",{className:d.a.dealheader,children:m.resultsHeaders[1]}),n.map((function(e){return Object(u.jsx)("div",{children:e.earningSum},e.name)}))]})},S=function(e){var n=e.players,a=e.deals,t=e.scoreSums,r=e.earningSums,s=e.onChangeScore;return Object(u.jsxs)("div",{className:d.a.table,children:[Object(u.jsx)(j,{players:n}),Object(u.jsx)(b,{deals:a,onChangeScore:s}),Object(u.jsx)(h,{totals:t}),Object(u.jsx)(p,{earnings:r})]})},v=function(e){var n=e.children;return Object(u.jsx)("div",{style:{margin:"10px"},children:n})},f=a(5),g=function(e){var n=e.scoresSetup,a=n.scores,t=n.setScores,r=e.winnersSetup,s=r.winners,c=r.setWinners,l=e.earningsSetup,u=function(e,n){return c(s.map((function(a,t){return t===n?e:a})))},i=function(e,n,a){var t,r,s=a.dealEarnings,c=a.BestScoreEarning,l=e.map((function(e){return{name:e.name,scoreSum:e.deals.reduce((function(e,n){return e+(n.isSet?n.score:0)}),0)}})),u=l.length>0&&l.reduce((function(e,n){return n.scoreSum<e.scoreSum?n:e})),i=e.map((function(a){return{name:a.name,earningSum:n.reduce((function(n,t,r){return null!==t?n+(t===a.name?s[r]*(e.length-1):-s[r]):n}),0)+(a.name===u.name?c*(e.length-1):-c)}})),o=null===(t=e[0])||void 0===t||null===(r=t.deals)||void 0===r?void 0:r.map((function(n,a){return e.map((function(e){return{name:e.name,value:e.deals[a].isSet?e.deals[a].score:""}}))}));return{players:e.map((function(e){return e.name})),deals:o,scoreSums:l,earningSums:i}}(a,s,l);return{players:i.players,deals:i.deals,scoreSums:i.scoreSums,earningSums:i.earningSums,handleChangeScore:function(e){var n=function(e,n){var a=e.dealIndex,t=e.name,r=e.value;return n.map((function(e){return e.name===t?Object(f.a)(Object(f.a)({},e),{},{deals:e.deals.map((function(e,n){return n===a?{isSet:""!==r,score:(t=r,t?parseInt(t,10):0)}:e;var t}))}):e}))}(e,a);t(n),"0"===e.value&&u(e.name,e.dealIndex)},handleChangeWinner:u}},x=function(){var e=Object(t.useState)([]),n=Object(l.a)(e,2),a=n[0],r=n[1],s=Object(t.useState)([null,null,null,null,null,null,null]),c=Object(l.a)(s,2),o=c[0],d=c[1],m=g({scoresSetup:{scores:a,setScores:r},winnersSetup:{winners:o,setWinners:d},earningsSetup:{dealEarnings:[500,1e3,1500,2e3,2500,3e3,3500],BestScoreEarning:5e3}}),j=m.players,b=m.deals,h=m.scoreSums,p=m.earningSums,f=m.handleChangeScore,x=m.handleChangeWinner;return Object(u.jsxs)(v,{children:[Object(u.jsx)(i,{label:"Name",onAddName:function(e){r(a.concat({name:e,deals:[{isSet:!1,score:0},{isSet:!1,score:0},{isSet:!1,score:0},{isSet:!1,score:0},{isSet:!1,score:0},{isSet:!1,score:0},{isSet:!1,score:0}]}))}}),Object(u.jsx)(S,{players:j,deals:b,scoreSums:h,earningSums:p,onChangeScore:f,onChangeWinner:x})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(n){var a=n.getCLS,t=n.getFID,r=n.getFCP,s=n.getLCP,c=n.getTTFB;a(e),t(e),r(e),s(e),c(e)}))};c.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),O()}},[[13,1,2]]]);
//# sourceMappingURL=main.f22bfcfd.chunk.js.map