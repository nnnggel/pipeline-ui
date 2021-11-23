"use strict";(self.webpackChunkpipeline_ui_website=self.webpackChunkpipeline_ui_website||[]).push([[2277],{83699:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(63366),o=t(67294),u=t(73727),i=t(39962),a=t(2735),c=t(36136),s=(0,o.createContext)({collectLink:function(){}}),l=t(79524),f=t(63905),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var n,t,v=e.isNavLink,g=e.to,m=e.href,p=e.activeClassName,h=e.isActive,b=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,y=void 0===w||w,E=(0,r.Z)(e,d),L=(0,i.Z)().siteConfig,P=L.trailingSlash,C=L.baseUrl,k=(0,l.C)().withBaseUrl,S=(0,o.useContext)(s),A=g||m,R=(0,a.Z)(A),x=null==A?void 0:A.replace("pathname://",""),D=void 0!==x?(t=x,y&&function(e){return e.startsWith("/")}(t)?k(t):t):void 0;D&&R&&(D=(0,f.applyTrailingSlash)(D,{trailingSlash:P,baseUrl:C}));var O=(0,o.useRef)(!1),M=v?u.OL:u.rU,I=c.Z.canUseIntersectionObserver,T=(0,o.useRef)();(0,o.useEffect)((function(){return!I&&R&&null!=D&&window.docusaurus.prefetch(D),function(){I&&T.current&&T.current.disconnect()}}),[T,D,I,R]);var V=null!==(n=null==D?void 0:D.startsWith("#"))&&void 0!==n&&n,_=!D||!R||V;return D&&R&&!V&&!b&&S.collectLink(D),_?o.createElement("a",Object.assign({href:D},A&&!R&&{target:"_blank",rel:"noopener noreferrer"},E)):o.createElement(M,Object.assign({},E,{onMouseEnter:function(){O.current||null==D||(window.docusaurus.preload(D),O.current=!0)},innerRef:function(e){var n,t;I&&e&&R&&(n=e,t=function(){null!=D&&window.docusaurus.prefetch(D)},T.current=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.current.unobserve(n),T.current.disconnect(),t())}))})),T.current.observe(n))},to:D||""},v&&{isActive:h,activeClassName:p}))}},97325:function(e,n,t){t.d(n,{Z:function(){return f},I:function(){return l}});var r=t(67294),o=(t(25108),/{\w+}/g),u="{}";function i(e,n){var t=[],i=e.replace(o,(function(e){var o=e.substr(1,e.length-2),i=null==n?void 0:n[o];if(void 0!==i){var a=r.isValidElement(i)?i:String(i);return t.push(a),u}return e}));return 0===t.length?e:t.every((function(e){return"string"==typeof e}))?i.split(u).reduce((function(e,n,r){var o;return e.concat(n).concat(null!==(o=t[r])&&void 0!==o?o:"")}),""):i.split(u).reduce((function(e,n,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},n,t[o])])}),[])}var a=t(57529),c=t(25108);function s(e){var n,t,r=e.id,o=e.message;if(void 0===r&&void 0===o)throw new Error("Docusaurus translation declarations must have at least a translation id or a default translation message");return null!==(t=null!==(n=a[null!=r?r:o])&&void 0!==n?n:o)&&void 0!==t?t:r}function l(e,n){return i(s({message:e.message,id:e.id}),n)}function f(e){var n=e.children,t=e.id,r=e.values;if(n&&"string"!=typeof n)throw c.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");return i(s({message:n,id:t}),r)}},6875:function(e,n,t){t.d(n,{m:function(){return r}});var r="default"},2735:function(e,n,t){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return o}})},45094:function(e,n,t){t.r(n),t.d(n,{BrowserRouter:function(){return r.VK},HashRouter:function(){return r.UT},Link:function(){return r.rU},MemoryRouter:function(){return r.VA},NavLink:function(){return r.OL},Prompt:function(){return r.NL},Redirect:function(){return r.l_},Route:function(){return r.AW},Router:function(){return r.F0},StaticRouter:function(){return r.gx},Switch:function(){return r.rs},generatePath:function(){return r.Gn},matchPath:function(){return r.LX},useHistory:function(){return r.k6},useLocation:function(){return r.TH},useParams:function(){return r.UO},useRouteMatch:function(){return r.$B},withRouter:function(){return r.EN}});var r=t(73727)},79524:function(e,n,t){t.d(n,{C:function(){return u},Z:function(){return i}});var r=t(39962),o=t(2735);function u(){var e=(0,r.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,u=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var u=void 0===r?{}:r,i=u.forcePrependBaseUrl,a=void 0!==i&&i,c=u.absolute,s=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(a)return n+t;var l=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+l:l}(u,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,u().withBaseUrl)(e,n)}},31610:function(e,n,t){t.r(n),t.d(n,{default:function(){return u},useAllPluginInstancesData:function(){return i},usePluginData:function(){return a}});var r=t(39962),o=t(6875);function u(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function i(e){var n=u()[e];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return n}function a(e,n){void 0===n&&(n=o.m);var t=i(e)[n];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+n+'".');return t}},33167:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.getDocVersionSuggestions=n.getActiveDocContext=n.getActiveVersion=n.getLatestVersion=n.getActivePlugin=void 0;var r=t(45094);n.getActivePlugin=function(e,n,t){void 0===t&&(t={});var o=Object.entries(e).find((function(e){e[0];var t=e[1];return!!(0,r.matchPath)(n,{path:t.path,exact:!1,strict:!1})})),u=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!u&&t.failfast)throw new Error("Can't find active docs plugin for \""+n+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(e).map((function(e){return e.path})).join(", "));return u};n.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};n.getActiveVersion=function(e,t){var o=(0,n.getLatestVersion)(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!(0,r.matchPath)(t,{path:e.path,exact:!1,strict:!1})}))};n.getActiveDocContext=function(e,t){var o,u,i=(0,n.getActiveVersion)(e,t),a=null==i?void 0:i.docs.find((function(e){return!!(0,r.matchPath)(t,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:a,alternateDocVersions:a?(o=a.id,u={},e.versions.forEach((function(e){e.docs.forEach((function(n){n.id===o&&(u[e.name]=n)}))})),u):{}}};n.getDocVersionSuggestions=function(e,t){var r=(0,n.getLatestVersion)(e),o=(0,n.getActiveDocContext)(e,t);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},43256:function(e,n,t){n.Jo=n.Iw=n.zu=n.yW=n.gB=n.gA=n.zh=n._r=void 0;var r=t(70655),o=t(45094),u=(0,r.__importStar)(t(31610)),i=t(33167),a={};n._r=function(){var e;return null!==(e=(0,u.default)()["docusaurus-plugin-content-docs"])&&void 0!==e?e:a};n.zh=function(e){return(0,u.usePluginData)("docusaurus-plugin-content-docs",e)};n.gA=function(e){void 0===e&&(e={});var t=(0,n._r)(),r=(0,o.useLocation)().pathname;return(0,i.getActivePlugin)(t,r,e)};n.gB=function(e){return(0,n.zh)(e).versions};n.yW=function(e){var t=(0,n.zh)(e);return(0,i.getLatestVersion)(t)};n.zu=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getActiveVersion)(t,r)};n.Iw=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getActiveDocContext)(t,r)};n.Jo=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getDocVersionSuggestions)(t,r)}},24175:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(67294),o=t(54384),u=t(1627),i=t(79524);function a(e){var n=e.title,t=e.description,a=e.keywords,c=e.image,s=e.children,l=(0,u.pe)(n),f=(0,i.C)().withBaseUrl,d=c?f(c,{absolute:!0}):void 0;return r.createElement(o.Z,null,n&&r.createElement("title",null,l),n&&r.createElement("meta",{property:"og:title",content:l}),t&&r.createElement("meta",{name:"description",content:t}),t&&r.createElement("meta",{property:"og:description",content:t}),a&&r.createElement("meta",{name:"keywords",content:Array.isArray(a)?a.join(","):a}),d&&r.createElement("meta",{property:"og:image",content:d}),d&&r.createElement("meta",{name:"twitter:image",content:d}),s)}},17849:function(e,n,t){t.d(n,{Iw:function(){return r.Iw},gA:function(){return r.gA},zu:function(){return r.zu},_r:function(){return r._r},Jo:function(){return r.Jo},zh:function(){return r.zh},yW:function(){return r.yW},gB:function(){return r.gB}});var r=t(43256)},93301:function(e,n,t){var r=t(67294),o=t(36136),u="desktop",i="mobile",a="ssr";function c(){return o.Z.canUseDOM?window.innerWidth>996?u:i:a}n.Z=function(){var e=(0,r.useState)((function(){return c()})),n=e[0],t=e[1];return(0,r.useEffect)((function(){function e(){t(c())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),n}},1627:function(e,n,t){t.d(n,{pl:function(){return Ee},zF:function(){return W},HX:function(){return p},PO:function(){return ee},L5:function(){return fe},Cv:function(){return ue},Cn:function(){return te},OC:function(){return Ve},kM:function(){return me},WA:function(){return l},os:function(){return h},Fx:function(){return je},Mg:function(){return y},_f:function(){return f},PZ:function(){return Se},bc:function(){return m},MA:function(){return ke},l5:function(){return v},nT:function(){return Le},uR:function(){return Z},J:function(){return ge},Rb:function(){return Ae},be:function(){return Pe},SL:function(){return M},g8:function(){return oe},c2:function(){return R},D9:function(){return O},RF:function(){return Ue},DA:function(){return Ie},Si:function(){return Oe},LU:function(){return o},pe:function(){return E}});var r=t(39962);function o(){return(0,r.Z)().siteConfig.themeConfig}var u=t(25108),i="localStorage";function a(e){if(void 0===e&&(e=i),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(t){return n=t,c||(u.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",n),c=!0),null}var n}var c=!1;var s={get:function(){return null},set:function(){},del:function(){}};var l=function(e,n){if("undefined"==typeof window)return function(e){function n(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:n,set:n,del:n}}(e);var t=a(null==n?void 0:n.persistence);return null===t?s:{get:function(){return t.getItem(e)},set:function(n){return t.setItem(e,n)},del:function(){return t.removeItem(e)}}};function f(e){void 0===e&&(e=i);var n=a(e);if(!n)return[];for(var t=[],r=0;r<n.length;r+=1){var o=n.key(r);null!==o&&t.push(o)}return t}var d=t(76775);function v(){var e=(0,r.Z)(),n=e.siteConfig,t=n.baseUrl,o=n.url,u=e.i18n,i=u.defaultLocale,a=u.currentLocale,c=(0,d.TH)().pathname,s=a===i?t:t.replace("/"+a+"/","/"),l=c.replace(t,"");return{createUrl:function(e){var n=e.locale;return""+(e.fullyQualified?o:"")+function(e){return e===i?""+s:""+s+e+"/"}(n)+l}}}var g=/title=(["'])(.*?)\1/;function m(e){var n,t;return null!==(t=null===(n=null==e?void 0:e.match(g))||void 0===n?void 0:n[2])&&void 0!==t?t:""}var p="default";function h(e,n){return"docs-"+e+"-"+n}var b=t(17849),w=!!b._r,y=function(e,n){var t=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return t(e)===t(n)},E=function(e){var n=(0,r.Z)().siteConfig,t=n.title,o=n.titleDelimiter;return e&&e.trim().length?e.trim()+" "+o+" "+t:t},L=t(67294),P=t(25108),C=["zero","one","two","few","many","other"];function k(e){return C.filter((function(n){return e.includes(n)}))}var S={locale:"en",pluralForms:k(["one","other"]),select:function(e){return 1===e?"one":"other"}};function A(){var e=(0,r.Z)().i18n.currentLocale;return(0,L.useMemo)((function(){if(!Intl.PluralRules)return P.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),S;try{return n=e,t=new Intl.PluralRules(n),{locale:n,pluralForms:k(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(r){return P.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n'),S}var n,t}),[e])}function R(){var e=A();return{selectMessage:function(n,t){return function(e,n,t){var r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&P.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms+"), but the message contains "+r.length+" plural forms: "+e+" ");var o=t.select(n),u=t.pluralForms.indexOf(o);return r[Math.min(u,r.length-1)]}(t,n,e)}}}var x="undefined"!=typeof window?L.useLayoutEffect:L.useEffect;function D(e){var n=(0,L.useRef)(e);return x((function(){n.current=e}),[e]),(0,L.useCallback)((function(){return n.current.apply(n,arguments)}),[])}function O(e){var n=(0,L.useRef)();return x((function(){n.current=e})),n.current}function M(e){var n=(0,d.TH)(),t=O(n),r=D(e);(0,L.useEffect)((function(){r({location:n,previousLocation:t})}),[r,n,t])}var I=t(63366),T=t(36136),V=["collapsed"],_=["lazy"];function Z(e){var n=e.initialState,t=(0,L.useState)(null!=n&&n),r=t[0],o=t[1],u=(0,L.useCallback)((function(){o((function(e){return!e}))}),[]);return{collapsed:r,setCollapsed:o,toggleCollapsed:u}}var U={display:"none",overflow:"hidden",height:"0px"},j={display:"block",overflow:"visible",height:"auto"};function B(e,n){var t=n?U:j;e.style.display=t.display,e.style.overflow=t.overflow,e.style.height=t.height}function N(e){var n=e.collapsibleRef,t=e.collapsed,r=e.animation,o=(0,L.useRef)(!1);(0,L.useEffect)((function(){var e,u=n.current;function i(){var e,n,t=u.scrollHeight,o=null!==(e=null==r?void 0:r.duration)&&void 0!==e?e:function(e){var n=e/36;return Math.round(10*(4+15*Math.pow(n,.25)+n/5))}(t);return{transition:"height "+o+"ms "+(null!==(n=null==r?void 0:r.easing)&&void 0!==n?n:"ease-in-out"),height:t+"px"}}function a(){var e=i();u.style.transition=e.transition,u.style.height=e.height}if(!o.current)return B(u,t),void(o.current=!0);return u.style.willChange="height",e=requestAnimationFrame((function(){t?(a(),requestAnimationFrame((function(){u.style.height=U.height,u.style.overflow=U.overflow}))):(u.style.display="block",requestAnimationFrame((function(){a()})))})),function(){return cancelAnimationFrame(e)}}),[n,t,r])}function H(e){if(!T.Z.canUseDOM)return e?U:j}function z(e){var n=e.as,t=void 0===n?"div":n,r=e.collapsed,o=e.children,u=e.animation,i=e.onCollapseTransitionEnd,a=e.className,c=e.disableSSRStyle,s=(0,L.useRef)(null);return N({collapsibleRef:s,collapsed:r,animation:u}),L.createElement(t,{ref:s,style:c?void 0:H(r),onTransitionEnd:function(e){"height"===e.propertyName&&(B(s.current,r),null==i||i(r))},className:a},o)}function F(e){var n=e.collapsed,t=(0,I.Z)(e,V),r=(0,L.useState)(!n),o=r[0],u=r[1];(0,L.useLayoutEffect)((function(){n||u(!0)}),[n]);var i=(0,L.useState)(n),a=i[0],c=i[1];return(0,L.useLayoutEffect)((function(){o&&c(n)}),[o,n]),o?L.createElement(z,Object.assign({},t,{collapsed:a})):null}function W(e){var n=e.lazy,t=(0,I.Z)(e,_),r=n?F:z;return L.createElement(r,Object.assign({},t))}var q=t(51048),J=t(86010),X="details_Q743",Y="isBrowser_rWTL",K="collapsibleContent_K5uX",Q=["summary","children"];function G(e){return!!e&&("SUMMARY"===e.tagName||G(e.parentElement))}function $(e,n){return!!e&&(e===n||$(e.parentElement,n))}var ee=function(e){var n,t=e.summary,r=e.children,o=(0,I.Z)(e,Q),u=(0,q.Z)(),i=(0,L.useRef)(null),a=Z({initialState:!o.open}),c=a.collapsed,s=a.setCollapsed,l=(0,L.useState)(o.open),f=l[0],d=l[1];return L.createElement("details",Object.assign({},o,{ref:i,open:f,"data-collapsed":c,className:(0,J.Z)(X,(n={},n[Y]=u,n),o.className),onMouseDown:function(e){G(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;G(n)&&$(n,i.current)&&(e.preventDefault(),c?(s(!1),d(!0)):s(!0))}}),t,L.createElement(W,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){s(e),d(!e)}},L.createElement("div",{className:K},r)))};var ne=(0,L.createContext)(null);function te(e){var n=e.children;return L.createElement(ne.Provider,{value:(0,L.useState)(null)},n)}function re(){var e=(0,L.useContext)(ne);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function oe(){var e=re()[0];if(e){var n=e.component;return function(t){return L.createElement(n,Object.assign({},e.props,t))}}return function(){}}function ue(e){var n,t=e.component,r=e.props,o=re()[1],u=(n=r,(0,L.useMemo)((function(){return n}),[].concat(Object.keys(n),Object.values(n))));return(0,L.useEffect)((function(){o({component:t,props:u})}),[o,t,u]),(0,L.useEffect)((function(){return function(){return o(null)}}),[o]),null}var ie=function(e){return"docs-preferred-version-"+e},ae={save:function(e,n,t){l(ie(e),{persistence:n}).set(t)},read:function(e,n){return l(ie(e),{persistence:n}).get()},clear:function(e,n){l(ie(e),{persistence:n}).del()}};function ce(e){var n=e.pluginIds,t=e.versionPersistence,r=e.allDocsData;var o={};return n.forEach((function(e){o[e]=function(e){var n=ae.read(e,t);return r[e].versions.some((function(e){return e.name===n}))?{preferredVersionName:n}:(ae.clear(e,t),{preferredVersionName:null})}(e)})),o}function se(){var e=(0,b._r)(),n=o().docs.versionPersistence,t=(0,L.useMemo)((function(){return Object.keys(e)}),[e]),r=(0,L.useState)((function(){return function(e){var n={};return e.forEach((function(e){n[e]={preferredVersionName:null}})),n}(t)})),u=r[0],i=r[1];return(0,L.useEffect)((function(){i(ce({allDocsData:e,versionPersistence:n,pluginIds:t}))}),[e,n,t]),[u,(0,L.useMemo)((function(){return{savePreferredVersion:function(e,t){ae.save(e,n,t),i((function(n){var r;return Object.assign({},n,((r={})[e]={preferredVersionName:t},r))}))}}}),[n])]}var le=(0,L.createContext)(null);function fe(e){var n=e.children;return w?L.createElement(de,null,n):L.createElement(L.Fragment,null,n)}function de(e){var n=e.children,t=se();return L.createElement(le.Provider,{value:t},n)}var ve=t(6875);function ge(e){void 0===e&&(e=ve.m);var n=(0,b.zh)(e),t=function(){var e=(0,L.useContext)(le);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}(),r=t[0],o=t[1],u=r[e].preferredVersionName;return{preferredVersion:u?n.versions.find((function(e){return e.name===u})):null,savePreferredVersionName:(0,L.useCallback)((function(n){o.savePreferredVersion(e,n)}),[o,e])}}var me={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated",backToTopButton:"theme-back-to-top-button"},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:function(e){return"theme-doc-sidebar-item-category-level-"+e},docSidebarItemLinkLevel:function(e){return"theme-doc-sidebar-item-link-level-"+e}},blog:{}},pe=l("docusaurus.announcement.dismiss"),he=l("docusaurus.announcement.id"),be=function(){return"true"===pe.get()},we=function(e){return pe.set(String(e))},ye=(0,L.createContext)(null),Ee=function(e){var n=e.children,t=function(){var e=o().announcementBar,n=(0,q.Z)(),t=(0,L.useState)((function(){return!!n&&be()})),r=t[0],u=t[1];(0,L.useEffect)((function(){u(be())}),[]);var i=(0,L.useCallback)((function(){we(!0),u(!0)}),[]);return(0,L.useEffect)((function(){if(e){var n=e.id,t=he.get();"annoucement-bar"===t&&(t="announcement-bar");var r=n!==t;he.set(n),r&&we(!1),!r&&be()||u(!1)}}),[e]),(0,L.useMemo)((function(){return{isActive:!!e&&!r,close:i}}),[e,r,i])}();return L.createElement(ye.Provider,{value:t},n)},Le=function(){var e=(0,L.useContext)(ye);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function Pe(){var e=(0,r.Z)().siteConfig.baseUrl;return(0,d.TH)().pathname.replace(e,"/")}var Ce=t(97325),ke=function(){return(0,Ce.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function Se(e){var n={};return Object.values(e).forEach((function(e){var t,r=function(e){return e[0].toUpperCase()}(e.name);n[r]=null!==(t=n[r])&&void 0!==t?t:[],n[r].push(e)})),Object.entries(n).sort((function(e,n){var t=e[0],r=n[0];return t.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,n){return e.name.localeCompare(n.name)}))}}))}function Ae(e){!function(e){var n=(0,d.k6)().block,t=(0,L.useRef)(e);(0,L.useEffect)((function(){t.current=e}),[e]),(0,L.useEffect)((function(){return n((function(e,n){return t.current(e,n)}))}),[n,t])}((function(n,t){if("POP"===t)return e(n,t)}))}function Re(e){var n=e.getBoundingClientRect();return n.top===n.bottom?Re(e.parentNode):n}function xe(e,n){var t,r=n.anchorTopOffset,o=e.find((function(e){return Re(e).top>=r}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(Re(o))?o:null!==(t=e[e.indexOf(o)-1])&&void 0!==t?t:null:e[e.length-1]}function De(){var e=(0,L.useRef)(0),n=o().navbar.hideOnScroll;return(0,L.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}var Oe=function(e){var n=(0,L.useRef)(void 0),t=De();(0,L.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,o=e.linkActiveClassName,u=e.minHeadingLevel,i=e.maxHeadingLevel;function a(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),a=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,r=[],o=n;o<=t;o+=1)r.push("h"+o+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:u,maxHeadingLevel:i}),c=xe(a,{anchorTopOffset:t.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){var r;t?(n.current&&n.current!==e&&(null===(r=n.current)||void 0===r||r.classList.remove(o)),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===s)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,t])};function Me(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return n.flatMap((function(e){var n=Me({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[Object.assign({},e,{children:n})]:n}))}function Ie(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,L.useMemo)((function(){return Me({toc:n,minHeadingLevel:t,maxHeadingLevel:r})}),[n,t,r])}var Te=(0,L.createContext)(void 0);function Ve(e){var n,t=e.children;return L.createElement(Te.Provider,{value:(n=(0,L.useRef)(!0),(0,L.useMemo)((function(){return{scrollEventsEnabledRef:n,enableScrollEvents:function(){n.current=!0},disableScrollEvents:function(){n.current=!1}}}),[]))},t)}function _e(){var e=(0,L.useContext)(Te);if(null==e)throw new Error('"useScrollController" is used but no context provider was found in the React tree.');return e}var Ze=function(){return T.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};function Ue(e,n){void 0===n&&(n=[]);var t=_e().scrollEventsEnabledRef,r=(0,L.useRef)(Ze()),o=D(e);(0,L.useEffect)((function(){var e=function(){if(t.current){var e=Ze();o&&o(e,r.current),r.current=e}},n={passive:!0};return e(),window.addEventListener("scroll",e,n),function(){return window.removeEventListener("scroll",e,n)}}),[o,t].concat(n))}function je(e,n){return void 0!==e&&void 0!==n&&new RegExp(e,"gi").test(n)}},84136:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var o,u=e.split(/[#?]/)[0],i="/"===u||u===r?u:(o=u,t?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(u,i)}},63905:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var o=t(84136);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var u=t(93509);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(u).default}})},93509:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},86010:function(e,n,t){function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:function(){return o}})}}]);