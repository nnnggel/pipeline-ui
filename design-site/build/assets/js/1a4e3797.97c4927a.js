"use strict";(self.webpackChunkpipeline_ui_website=self.webpackChunkpipeline_ui_website||[]).push([[7920],{6060:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(15861),r=n(87757),c=n.n(r),u=n(67294),l=n(39962),s=n(55321),o=n(54384),i=n(83699),m=n(76775),h=n(36136);var f=function(){var e=(0,m.k6)(),t=(0,m.TH)(),n=(0,l.Z)().siteConfig.baseUrl;return{searchValue:h.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},p=n(5202),d=n(76654),_=n(21523),E=n(77976),g=n(79395),v=n(64056),w=n(5901);function y(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,(function(e,n){return Object.prototype.hasOwnProperty.call(t,n)?String(t[n]):e}))}var I="searchQueryInput_CFBF",S="searchResultItem_U687",b="searchResultItemPath_uIbk",k="searchResultItemSummary_oZHr";function C(e){var t=e.searchResult,n=t.document,a=t.type,r=t.page,c=t.tokens,l=t.metadata,s=0===a,o=2===a,m=(s?n.b:r.b).slice(),h=o?n.s:n.t;return s||m.push(r.t),u.createElement("article",{className:S},u.createElement("h2",null,u.createElement(i.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:o?(0,_.C)(h,c):(0,E.o)(h,(0,g.m)(l,"t"),c,100)}})),m.length>0&&u.createElement("p",{className:b},m.join(" \u203a ")),o&&u.createElement("p",{className:k,dangerouslySetInnerHTML:{__html:(0,E.o)(n.t,(0,g.m)(l,"t"),c,100)}}))}var Z=function(){var e=(0,l.Z)().siteConfig.baseUrl,t=f(),n=t.searchValue,r=t.updateSearchPath,i=(0,u.useState)(n),m=i[0],h=i[1],_=(0,u.useState)(),E=_[0],g=_[1],S=(0,u.useState)(),b=S[0],k=S[1],Z=(0,u.useMemo)((function(){return m?y(w.Iz.search_results_for,{keyword:m}):w.Iz.search_the_documentation}),[m]);(0,u.useEffect)((function(){r(m),E&&(m?E(m,(function(e){k(e)})):k(void 0))}),[m,E]);var R=(0,u.useCallback)((function(e){h(e.target.value)}),[]);return(0,u.useEffect)((function(){n&&n!==m&&h(n)}),[n]),(0,u.useEffect)((function(){function t(){return(t=(0,a.Z)(c().mark((function t(){var n,a,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.w)(e);case 2:n=t.sent,a=n.wrappedIndexes,r=n.zhDictionary,g((function(){return(0,d.v)(a,r,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),u.createElement(s.Z,{title:Z},u.createElement(o.Z,null,u.createElement("meta",{property:"robots",content:"noindex, follow"})),u.createElement("div",{className:"container margin-vert--lg"},u.createElement("h1",null,Z),u.createElement("input",{type:"search",name:"q",className:I,"aria-label":"Search",onChange:R,value:m,autoComplete:"off",autoFocus:!0}),!E&&m&&u.createElement("div",null,u.createElement(v.Z,null)),b&&(b.length>0?u.createElement("p",null,y(1===b.length?w.Iz.count_documents_found:w.Iz.count_documents_found_plural,{count:b.length})):u.createElement("p",null,w.Iz.no_documents_were_found)),u.createElement("section",null,b&&b.map((function(e){return u.createElement(C,{key:e.document.i,searchResult:e})})))))}}}]);