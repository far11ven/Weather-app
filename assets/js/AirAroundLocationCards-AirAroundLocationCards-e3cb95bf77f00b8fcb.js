(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["AirAroundLocationCards-AirAroundLocationCards"],{"/9aa":function(e,t,a){var r=a("NykK"),n=a("ExA7"),i="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||n(e)&&r(e)==i}},AP2z:function(e,t,a){var r=a("nmnc"),n=Object.prototype,i=n.hasOwnProperty,o=n.toString,l=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,l),a=e[l];try{e[l]=void 0;var r=!0}catch(e){}var n=o.call(e);return r&&(t?e[l]=a:delete e[l]),n}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},GoyQ:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},IbxU:function(e,t,a){"use strict";a.r(t);var r=a("v8/g"),n=a("FBcu"),i=a("jJcU"),o=a("fAui"),l=a("q1tI"),c=a.n(l),u=a("/MKj"),s=a("r0Wv"),d=a("Wwog"),m=a("yGI6"),p=a("XMVm"),f=a.n(p),v=a("0bCb"),y=a("mgGy"),g=a("NGE1"),h=1,E=5,b=Math.abs(E-h),x={low:g.b,moderate:g.c,severe:g.d,extreme:g.a,max:g.a};var _=function(e){return e.airQuality},O=Object(d.a)((function(e,t){var a=e.hours.slice(0,25),r=a.map((function(e,t){return[t/(a.length-1),Object(v.f)(e.airQuality.index,h,E,0,1)]})),n=a.map((function(e){return x[e.airQuality.severity]})),o=f.a.get(t),l={type:"ticks",ticks:a.map((function(e,r){var n=o.get("components/airQualityCard/severities/".concat(e.airQuality.severity)),l=Object(y.b)({time:e.time,type:"time",localeCode:t}),c=Object(y.b)({time:e.time,type:"date-long",localeCode:t}),u="".concat(l," ").concat(c),s=Object(i.c)(o.get("selectors/airQuality/ariaLabel"),n,u);return{label:{type:"string",value:m.a.create(e.time).format("HH")},ariaLabel:s,normalizedX:r/(a.length-1)}}))},c={type:"rows",rows:[]},u=b/1,s=e.airQualitySeverity.slice().reverse();return c.rows=s.map((function(e){return{label:{type:"string",value:e.severity},normalizedMinY:Object(v.f)(e.from,h,E,4,0)/u,normalizedMaxY:Object(v.f)(e.to,h,E,4,0)/u}})),{xAxis:l,yAxis:c,curve:r,severityRange:s.map((function(e){return{severity:e.severity,color:x[e.severity],startOffset:Object(v.f)(e.to,h,E,1,0),endOffset:Object(v.f)(e.from,h,E,1,0)}})),hoverOverlayColors:n}}));function N(e,t){return _(e).airQuality[t]}function j(e,t){return _(e).fetchStatus[t]}Object(s.a)((function(e,t){var a=N(e,t),r=j(e,t);return Object(s.b)(a,r)}),(function(e,t){return(!e||!e.hours)&&(null!=t&&t.isActive)}));var C=Object(s.a)((function(e,t){var a=N(e,t),r=j(e,t);return Object(s.b)(a,r)}),(function(e,t){return(!e||!e.hours)&&(null!=t&&t.isError)})),Q=Object(s.a)((function(e,t,a){var r=N(e,t);return Object(s.b)(r,a)}),(function(e,t){if(e)return O(e,t)})),w=a("S8kc"),k=function(e){return e.pollen};function A(e,t){return k(e).pollen[t]}function H(e,t){return k(e).fetchStatus[t]}Object(s.a)((function(e,t){var a=A(e,t),r=H(e,t);return Object(s.b)(a,r)}),(function(e,t){return(!e||!e.regionName)&&(null!=t&&t.isActive)}));var I=Object(s.a)((function(e,t){var a=A(e,t),r=H(e,t);return Object(s.b)(a,r)}),(function(e,t){return(!e||!e.regionName)&&(null!=t&&t.isError)})),L=a("pVnL"),M=a.n(L),q=a("J4zp"),T=a.n(q),U=a("Xr/R"),G=a("yeBY"),S=a("aIUp"),B=a("jz2H"),D=a("V/h/"),F=a("2mdj"),P=a("JXpO"),z=a("o8nh"),W=a("dN2m"),R=1e3;var K=function(e){var t=Object(l.useState)(),a=T()(t,2),r=a[0],n=a[1];return Object(l.useEffect)((function(){if(null!=e){var t;return function a(){null!=e&&(n(e.getBoundingClientRect()),t=setTimeout(a,R))}(),function(){null!=t&&clearTimeout(t)}}}),[e]),r},Y=function(e){if(void 0!==e)return e>500?50:e>340?80:95},V=function(e){var t=e.curve,a=e.onHover,r=e.xAxis,o=e.yAxis,u=e.severityRange,s=e.hoverOverlayColors,d=e.defaultHighlight,m=e.currentLocationName,p=Object(n.a)(),f=Object(l.useRef)(null),v=K(null==f?void 0:f.current),y=Object(D.a)(o,(function(e){e.rows.forEach((function(e){null!=e.label&&"string"===e.label.type&&(e.label.value=p.get("components/airQualityCard/severities/".concat(e.label.value)))}))})),g=Object(i.c)(p.get("statistics/graphLabel"),p.get("terminology/airQuality/long"),m);return c.a.createElement("div",{ref:f,className:"air-quality-card__graph"},c.a.createElement(W.a,{label:g,legends:u.map((function(e){return c.a.createElement(P.a,{key:e.severity,type:"line",colors:[e.color],label:p.get("components/airQualityCard/severities/".concat(e.severity))})})),xAxis:r,yAxis:y,onHover:a,renderHoverOverlay:function(e){var a=e.index,r=e.graphWidth,n=e.graphHeight;return c.a.createElement(F.a,{graphHeight:n,graphWidth:r,normalizedCoordinate:t[a],fill:s[a]})},defaultHighlight:{index:d,type:"tick"},yAxisWidth:Y(null==v?void 0:v.width),containerSize:null==v?void 0:v.width},(function(e){var a=e.graphWidth,r=e.graphHeight;return c.a.createElement(c.a.Fragment,null,c.a.createElement("defs",null,c.a.createElement("linearGradient",{id:"air-quality-graph__gradient",x1:"0",y1:"0",x2:"0",y2:r,gradientUnits:"userSpaceOnUse",spreadMethod:"pad"},u.map((function(e){return c.a.createElement(c.a.Fragment,{key:e.severity},c.a.createElement("stop",{offset:e.startOffset,stopColor:e.color,stopOpacity:"1"}),c.a.createElement("stop",{offset:e.endOffset,stopColor:e.color,stopOpacity:"1"}))})))),c.a.createElement(z.a,{curved:!0,normalizedCoordinates:t,className:"air-quality-graph__curve",gradientId:"air-quality-graph__gradient",graphWidth:a,graphHeight:r,strokeWidth:2}))})))},X=a("B5s9"),$=a("zyn5"),J=function(e){var t=e.datetime,a=e.datetimeNow;return c.a.createElement("p",{className:"air-quality-card__index-time"},c.a.createElement($.a,{type:"relative-date-short",date:t,includeTimestamp:!0,datetimeNow:a,transform:"sentence-case"}))},Z=function(e){var t=e.airQuality,a=e.airQualityHoverIndex,r=Object(n.a)(),i=t.hours[a],o=i.airQuality.severity;return c.a.createElement("div",{className:"air-quality-card__index"},c.a.createElement(J,{datetimeNow:t.hours[t.nowIndex].time,datetime:i.time}),c.a.createElement("div",{className:"air-quality-card__index-severity-container"},c.a.createElement(X.a,{type:"air-quality-".concat(o),size:"medium"},r.get("components/airQualityCard/severities/".concat(o)))),c.a.createElement("div",{className:"air-quality-card__index-description-container"},c.a.createElement("p",{className:"air-quality-card__index-description"},i.airQuality.description)))},ee=a("al9T"),te=a("jGct"),ae=function(e){var t=e.airQuality,a=e.openedById,r=e.onClose,i=Object(n.a)();return c.a.createElement(te.a,{openedById:a,title:i.get("components/airQualityCard/title"),onClose:r},i.get("components/airQualityCard/infoPanel/textParagraphs").map((function(e,t){return c.a.createElement("p",{key:t},e)})),c.a.createElement("ul",{className:"air-quality-card__info-panel-list"},i.get("components/airQualityCard/infoPanel/vulnerableGroups").map((function(e,t){return c.a.createElement("li",{key:t},e)}))),c.a.createElement("p",null,i.get("components/airQualityCard/infoPanel/linkDescription"),c.a.createElement(ee.b,{className:"air-quality-card__info-panel-link","data-app-tracking-source":"air_quality_info_panel",isExternal:!0,href:t.urlPath},t.urlName)))},re=function(e){var t=e.airQualityGraphData,a=e.currentLocationName,r=e.airQuality,i=e.isError,o=r?r.nowIndex:0,u=Object(l.useState)(o),s=T()(u,2),d=s[0],m=s[1],p=Object(l.useState)(),f=T()(p,2),v=f[0],y=f[1],g=Object(n.a)();return i?c.a.createElement(S.a,{type:"error",errorMessage:g.get("components/airQualityCard/errorMessage"),footer:c.a.createElement(S.c,{text:g.get("components/airQualityCard/footerText"),link:{url:U.a.external.airQuality,text:g.get("components/airQualityCard/footerLinkText")}})},c.a.createElement(S.b,{title:g.get("components/airQualityCard/title"),subtitle:a})):null==t||null==r?c.a.createElement(S.a,{type:"empty",renderFooter:!0},c.a.createElement(B.a,{className:"air-quality-card__index-time",type:"h3",length:10}),c.a.createElement("div",{className:"air-quality-card__index-severity-container"},c.a.createElement(B.a,{className:"air-quality-card__index-severity-text",type:"h3",length:6})),c.a.createElement(B.a,{className:"air-quality-card__index-description",type:"p",length:28}),c.a.createElement("div",{className:"air-quality-card__graph"},c.a.createElement("div",{className:"air-quality-card__graph--empty"}))):c.a.createElement(S.a,{footer:c.a.createElement(S.c,{text:g.get("components/airQualityCard/footerText"),link:{url:r.urlPath,text:r.urlName}})},c.a.createElement(S.b,{title:g.get("components/airQualityCard/title"),subtitle:a,renderInfoPanel:function(e,t){return G.a.event("air_quality_card","open_info"),c.a.createElement(ae,{airQuality:r,openedById:e,onClose:function(){G.a.event("air_quality_card","close_info"),t()}})},infoButtonId:"air-quality-info-button"}),c.a.createElement(Z,{airQualityHoverIndex:d,airQuality:r}),c.a.createElement(V,M()({defaultHighlight:d,onHover:function(e){v||void 0===e||(y(!0),G.a.event("air_quality_card","hover_graph")),m(void 0!==e?e:o)},currentLocationName:a},t)))},ne=a("2bzP"),ie=a("eR+e"),oe=a("sVMe"),le=a("akv8"),ce=function(e){var t=e.distributions,a=e.caption,r=Object(n.a)();if(0===Object.entries(t).length)return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:"pollen-card__day-summary-heading"},a),c.a.createElement("p",{className:"pollen-card__no-pollen"},r.get("components/pollenCard/distributions/none")));var i=function(e,t){var a=[];e.extreme&&a.push(ue("extreme",e.extreme,t));e.severe&&a.push(ue("severe",e.severe,t));e.moderate&&a.push(ue("moderate",e.moderate,t));e.low&&a.push(ue("low",e.low,t));return a}(t,r),o=[r.get("components/pollenCard/tableHeaders/pollenType"),r.get("components/pollenCard/tableHeaders/distribution")];return c.a.createElement(le.a,{caption:a,tableHeaders:o,rows:i})};function ue(e,t,a){return{heading:Object(i.e)(Object(oe.a)(a,t.pollenTypes.map((function(e){return e.name})))),key:t.pollenTypes.map((function(e){return e.id})).join("-"),value:c.a.createElement(X.a,{size:"medium",type:"pollen-".concat(e)},t.distributionName)}}var se=[4,6,7,8,13,15,17,19,21];function de(e){return Math.floor(Math.random()*Math.floor(e))}var me=function(){return[{key:"empty-row-1",heading:c.a.createElement(B.a,{type:"p",lengths:se,index:de(9)}),value:c.a.createElement(B.a,{type:"p",lengths:se,index:de(4)})},{key:"empty-row-2",heading:c.a.createElement(B.a,{type:"p",lengths:se,index:de(9)}),value:c.a.createElement(B.a,{type:"p",lengths:se,index:de(4)})}]},pe=function(){var e=Object(l.useMemo)(me,[]),t=Object(l.useMemo)(me,[]);return c.a.createElement(S.a,{type:"empty",renderFooter:!0},c.a.createElement(le.a,{caption:c.a.createElement(B.a,{type:"p",length:5}),tableHeaders:[],rows:e}),c.a.createElement("div",{className:"pollen-card__divider"}),c.a.createElement(le.a,{caption:c.a.createElement(B.a,{type:"p",length:5}),tableHeaders:[],rows:t}))},fe=function(e){var t=e.openedById,a=e.onClose,r=e.url,i=e.displayUrl,o=Object(n.a)();return c.a.createElement(te.a,{openedById:t,title:o.get("components/pollenCard/title"),onClose:a},o.get("components/pollenCard/infoPanel/textParagraphs").map((function(e,t){return c.a.createElement("p",{key:t},e)})),c.a.createElement("p",null,o.get("components/pollenCard/infoPanel/linkDescription"),c.a.createElement(ee.b,{className:"pollen-card__info-panel-link",isExternal:!0,href:r},i)))},ve=a("3Kvv"),ye=function(e){var t=e.pollen,a=e.currentLocationName,r=e.isError,i=Object(n.a)();return r||0===(null==t?void 0:t.pollenForecast.length)?c.a.createElement(S.a,{type:"error",errorMessage:i.get("components/pollenCard/errorMessage")},c.a.createElement(S.b,{title:i.get("components/pollenCard/title"),subtitle:a})):null==t?c.a.createElement(pe,null):c.a.createElement(S.a,{footer:c.a.createElement(S.c,{text:i.get("components/pollenCard/footerText"),link:{url:t.url,text:t.displayUrl}})},c.a.createElement(S.b,{title:i.get("components/pollenCard/title"),subtitle:t.regionName,renderInfoPanel:function(e,a){return c.a.createElement(fe,{openedById:e,onClose:function(){a()},url:t.url,displayUrl:t.displayUrl})},infoButtonId:"pollen-card__info-button"}),null==t?void 0:t.pollenForecast.map((function(e,t){return c.a.createElement(c.a.Fragment,{key:e.date},t>0&&c.a.createElement("div",{className:"pollen-card__divider"}),c.a.createElement(ce,{key:e.date,caption:Object(ve.a)({locale:i,date:e.date,type:"relativeDay",transform:"sentence-case"}),distributions:e.distributions}))})))},ge=a("RvxC"),he=function(e){var t=e.graphHeight;return c.a.createElement("defs",null,c.a.createElement("linearGradient",{id:"uv-gradients--none",x1:"0",y1:"0",x2:"0",y2:t,gradientUnits:"userSpaceOnUse",spreadMethod:"pad"},c.a.createElement("stop",{className:"uv-gradients__start-none",offset:"0"}),c.a.createElement("stop",{className:"uv-gradients__stop-none",offset:"1"})),c.a.createElement("linearGradient",{id:"uv-gradients--low",x1:"0",y1:"0",x2:"0",y2:t,gradientUnits:"userSpaceOnUse",spreadMethod:"pad"},c.a.createElement("stop",{className:"uv-gradients__start-low",offset:"0"}),c.a.createElement("stop",{className:"uv-gradients__stop-low",offset:"1"})),c.a.createElement("linearGradient",{id:"uv-gradients--moderate",x1:"0",y1:"0",x2:"0",y2:t,gradientUnits:"userSpaceOnUse",spreadMethod:"pad"},c.a.createElement("stop",{className:"uv-gradients__start-moderate",offset:"0"}),c.a.createElement("stop",{className:"uv-gradients__stop-moderate",offset:"1"})),c.a.createElement("linearGradient",{id:"uv-gradients--high",x1:"0",y1:"0",x2:"0",y2:t,gradientUnits:"userSpaceOnUse",spreadMethod:"pad"},c.a.createElement("stop",{className:"uv-gradients__start-high",offset:"0"}),c.a.createElement("stop",{className:"uv-gradients__stop-high",offset:"1"})),c.a.createElement("linearGradient",{id:"uv-gradients--severe",x1:"0",y1:"0",x2:"0",y2:t,gradientUnits:"userSpaceOnUse",spreadMethod:"pad"},c.a.createElement("stop",{className:"uv-gradients__start-severe",offset:"0"}),c.a.createElement("stop",{className:"uv-gradients__stop-severe",offset:"1"})),c.a.createElement("linearGradient",{id:"uv-gradients--extreme",x1:"0",y1:"0",x2:"0",y2:t,gradientUnits:"userSpaceOnUse",spreadMethod:"pad"},c.a.createElement("stop",{className:"uv-gradients__start-extreme",offset:"0"}),c.a.createElement("stop",{className:"uv-gradients__stop-extreme",offset:"1"})))},Ee=function(e){var t=e.uvData,a=e.onHover,r=e.xAxis,o=e.yAxis,u=e.defaultHighlight,s=e.currentLocationName,d=Object(n.a)(),m=Object(l.useRef)(null),p=K(null==m?void 0:m.current),f=Object(i.c)(d.get("statistics/graphLabel"),d.get("components/uvCard/title"),s);return c.a.createElement("div",{ref:m,className:"uv-card__graph"},c.a.createElement(W.a,{label:f,xAxis:r,yAxis:o,onHover:a,renderHoverOverlay:function(){return c.a.createElement(c.a.Fragment,null)},defaultHighlight:{index:u,type:"column"},containerSize:null==p?void 0:p.width},(function(e){var a=e.graphWidth,r=e.graphHeight;return c.a.createElement(c.a.Fragment,null,c.a.createElement(he,{graphHeight:r}),c.a.createElement(ge.a,{className:"uv-card__graph-bars",graphWidth:a,graphHeight:r,barWidthScale:.6,bars:t.map((function(e){return e.bar}))}))})))},be=function(e){var t=e.uvForecast,a=e.uvHoverIndex,r=Object(n.a)(),i=t[a],o=i.severity;return c.a.createElement("div",{className:"uv-card__index"},c.a.createElement("p",{className:"uv-card__index-time"},c.a.createElement($.a,{type:"relative-date-short",date:i.time,includeTimestamp:!0,datetimeNow:t[0].time,transform:"sentence-case"})),c.a.createElement("div",{className:"uv-card__index-severity-container"},c.a.createElement(X.a,{type:"uv-".concat(o),size:"medium"},c.a.createElement("span",{className:"uv-card__index-severity-display-value"},i.displayValue),r.get("components/uvCard/severities/".concat(o)))),c.a.createElement("div",{className:"uv-card__index-description-container"},c.a.createElement("p",{className:"uv-card__index-description"},r.get("components/uvCard/severityDescriptions/".concat(o)))))},xe=function(e){var t=e.openedById,a=e.onClose,r=Object(n.a)();return c.a.createElement(te.a,{openedById:t,title:r.get("components/uvCard/title"),onClose:a},r.get("components/uvCard/infoPanel/textParagraphs").map((function(e,t){return c.a.createElement("p",{key:t},e)})),c.a.createElement("p",null,r.get("components/uvCard/footerText")," ",c.a.createElement(ee.b,{className:"uv-card__info-panel-link","data-app-tracking-source":"uv-card_info_panel",isExternal:!0,href:U.a.external.uv.url},U.a.external.uv.displayUrl)))},_e=a("Wvx4"),Oe=function(e){var t=e.id,a=e.onClick,r=Object(n.a)();return c.a.createElement("div",{className:"uv-card__info-button-container"},c.a.createElement("p",{className:"uv-card__info-button-text"},r.get("components/uvCard/infoButtonText")),c.a.createElement(ee.a,{className:"uv-card__info-button",id:t,onClick:a,"aria-label":r.get("components/infoButton/ariaLabel")},c.a.createElement(_e.a,{className:"uv-card__info-button-icon",id:"icon-info",size:3})))},Ne=function(e){var t=e.currentLocationName,a=e.isError,r=e.uvGraphData,i=e.uvCardRef,o=Object(l.useState)(0),u=T()(o,2),s=u[0],d=u[1],m=Object(n.a)();return a?c.a.createElement(S.a,{type:"error",errorMessage:m.get("components/uvCard/errorMessage"),footer:c.a.createElement(S.c,{text:m.get("components/uvCard/footerText"),link:{url:U.a.external.uv.url,text:U.a.external.uv.displayUrl}})},c.a.createElement(S.b,{title:m.get("components/uvCard/title"),subtitle:t})):null==r?c.a.createElement(S.a,{type:"empty",renderFooter:!0},c.a.createElement(B.a,{className:"uv-card__index-time",type:"h3",length:10}),c.a.createElement("div",{className:"uv-card__index-severity-container"},c.a.createElement(B.a,{className:"uv-card__index-severity-text",type:"h3",length:6})),c.a.createElement(B.a,{className:"uv-card__index-description",type:"p",length:28}),c.a.createElement("div",{className:"uv-card__graph"},c.a.createElement("div",{className:"uv-card__graph--empty"}))):c.a.createElement(S.a,{ref:i,footer:c.a.createElement(S.c,{text:m.get("components/uvCard/footerText"),link:{url:U.a.external.uv.url,text:U.a.external.uv.displayUrl}})},c.a.createElement(S.b,{title:m.get("components/uvCard/title"),subtitle:t,renderInfoPanel:function(e,t){return c.a.createElement(xe,{openedById:e,onClose:function(){t()}})},renderCustomInfoButton:function(e){return c.a.createElement(Oe,{onClick:e,id:"uv-info-button"})},infoButtonId:"uv-info-button"}),c.a.createElement(be,{uvHoverIndex:s,uvForecast:r.uvData}),c.a.createElement(Ee,M()({defaultHighlight:s,onHover:function(e){d(void 0!==e?e:0)},currentLocationName:t},r)))},je=a("CkBp");a.d(t,"UnconnectedAirAroundLocationCards",(function(){return Ce})),a.d(t,"AirAroundLocationCards",(function(){return Qe}));var Ce=function(e){var t=e.airQuality,a=e.airQualityGraphData,r=e.currentLocationName,o=e.isAirQualityError,l=e.isPollenError,u=e.pollen,s=e.location,d=e.subpageId,m=e.uvGraphData,p=Object(n.a)();return null==d?null:c.a.createElement("div",{className:"air-around-location-cards"},c.a.createElement(ie.a,{level:"h2",typography:"header-2"},Object(i.c)(p.get("forecast/airAroundLocationCards/titleTemplate"),r)),c.a.createElement(ne.a,{length:3,equalHeight:!1,trackingId:"air-around-location-cards"},(null==s?void 0:s.hasPollen)&&c.a.createElement(ye,{currentLocationName:r,pollen:u,isError:l}),c.a.createElement(Ne,{currentLocationName:r,uvGraphData:m}),(null==s?void 0:s.hasAirQuality)&&c.a.createElement(re,{currentLocationName:r,airQuality:t,airQualityGraphData:a,isError:o})))},Qe=Object(r.a)(Object(u.b)((function(e,t){var a=t.currentPage,r=a.details.params.localeCode,n=Object(o.a)(a.details.params),i=a.details.params.subpageId,l=Object(w.g)(e,n),c=null==l?void 0:l.hasAirQuality,u=null==l?void 0:l.hasPollen;return{airQualityGraphData:c?Q(e,n,r):void 0,airQuality:c?N(e,n):void 0,isAirQualityError:c?C(e,n):void 0,pollen:u?A(e,n):void 0,isPollenError:u?I(e,n):void 0,currentLocationName:Object(w.h)(e,n),uvGraphData:Object(je.e)(e,n,r),location:l,subpageId:i}}))(Ce));t.default=Qe},KfNM:function(e,t){var a=Object.prototype.toString;e.exports=function(e){return a.call(e)}},Kz5y:function(e,t,a){var r=a("WFqU"),n="object"==typeof self&&self&&self.Object===Object&&self,i=r||n||Function("return this")();e.exports=i},NykK:function(e,t,a){var r=a("nmnc"),n=a("AP2z"),i=a("KfNM"),o="[object Null]",l="[object Undefined]",c=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?l:o:c&&c in Object(e)?n(e):i(e)}},QIyF:function(e,t,a){var r=a("Kz5y");e.exports=function(){return r.Date.now()}},Vfn7:function(e,t,a){var r;!function(){"use strict";function n(e,t,a){var r=t.x,n=t.y,i=a.x-r,o=a.y-n;if(0!==i||0!==o){var l=((e.x-r)*i+(e.y-n)*o)/(i*i+o*o);l>1?(r=a.x,n=a.y):l>0&&(r+=i*l,n+=o*l)}return(i=e.x-r)*i+(o=e.y-n)*o}function i(e,t){var a=e.length-1,r=[e[0]];return function e(t,a,r,i,o){for(var l,c=i,u=a+1;u<r;u++){var s=n(t[u],t[a],t[r]);s>c&&(l=u,c=s)}c>i&&(l-a>1&&e(t,a,l,i,o),o.push(t[l]),r-l>1&&e(t,l,r,i,o))}(e,0,a,t,r),r.push(e[a]),r}function o(e,t,a){if(e.length<=2)return e;var r=void 0!==t?t*t:1;return e=i(e=a?e:function(e,t){for(var a,r,n,i,o,l=e[0],c=[l],u=1,s=e.length;u<s;u++)a=e[u],n=l,i=void 0,o=void 0,i=(r=a).x-n.x,o=r.y-n.y,i*i+o*o>t&&(c.push(a),l=a);return l!==a&&c.push(a),c}(e,r),r)}void 0===(r=function(){return o}.call(t,a,t,e))||(e.exports=r)}()},WFqU:function(e,t,a){(function(t){var a="object"==typeof t&&t&&t.Object===Object&&t;e.exports=a}).call(this,a("yLpj"))},"eR+e":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a("q1tI"),n=a.n(r);function i(e){var t=e.level,a=e.typography,r=e.children;return n.a.createElement(t,{className:"heading heading--".concat(a)},r)}},nmnc:function(e,t,a){var r=a("Kz5y").Symbol;e.exports=r},sEfC:function(e,t,a){var r=a("GoyQ"),n=a("QIyF"),i=a("tLB3"),o="Expected a function",l=Math.max,c=Math.min;e.exports=function(e,t,a){var u,s,d,m,p,f,v=0,y=!1,g=!1,h=!0;if("function"!=typeof e)throw new TypeError(o);function E(t){var a=u,r=s;return u=s=void 0,v=t,m=e.apply(r,a)}function b(e){var a=e-f;return void 0===f||a>=t||a<0||g&&e-v>=d}function x(){var e=n();if(b(e))return _(e);p=setTimeout(x,function(e){var a=t-(e-f);return g?c(a,d-(e-v)):a}(e))}function _(e){return p=void 0,h&&u?E(e):(u=s=void 0,m)}function O(){var e=n(),a=b(e);if(u=arguments,s=this,f=e,a){if(void 0===p)return function(e){return v=e,p=setTimeout(x,t),y?E(e):m}(f);if(g)return clearTimeout(p),p=setTimeout(x,t),E(f)}return void 0===p&&(p=setTimeout(x,t)),m}return t=i(t)||0,r(a)&&(y=!!a.leading,d=(g="maxWait"in a)?l(i(a.maxWait)||0,t):d,h="trailing"in a?!!a.trailing:h),O.cancel=function(){void 0!==p&&clearTimeout(p),v=0,u=f=s=p=void 0},O.flush=function(){return void 0===p?m:_(n())},O}},tLB3:function(e,t,a){var r=a("GoyQ"),n=a("/9aa"),i=NaN,o=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(n(e))return i;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var a=c.test(e);return a||u.test(e)?s(e.slice(2),a?2:8):l.test(e)?i:+e}},zyn5:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a("yGI6"),n=a("GqVX"),i=a("FBcu"),o=a("q1tI"),l=a.n(o),c=a("mgGy");function u(e){var t=e.date,a=e.type,o=e.includeTimestamp,u=void 0!==o&&o,s=e.datetimeNow,d=e.transform,m=Object(i.a)(),p=Object(n.b)().isFirstRender,f=r.a.create(t).locale(m.get("time"));if(u){var v=f.format(c.a),y=Object(c.b)({time:f.format(c.a),type:a,localeCode:m.get("code"),datetimeNow:null!=s?s:r.a.now().format(c.a),transform:d,isFirstRender:p}),g=Object(c.b)({time:f.format(c.a),type:"time",localeCode:m.get("code")});return l.a.createElement("time",{dateTime:v},y," ",g)}var h=f.format("YYYY-MM-DD"),E=Object(c.b)({time:f.format("YYYY-MM-DDT12"),type:a,localeCode:m.get("code"),datetimeNow:null!=s?s:r.a.now().format(c.a),transform:d,isFirstRender:p});return l.a.createElement("time",{dateTime:h},E)}}}]);
//# sourceMappingURL=AirAroundLocationCards-AirAroundLocationCards-e3cb95bf77f00b8fcb7d.js.map