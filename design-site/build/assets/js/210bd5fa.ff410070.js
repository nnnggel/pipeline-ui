"use strict";(self.webpackChunkpipeline_ui_website=self.webpackChunkpipeline_ui_website||[]).push([[4973],{2735:function(e,n,t){function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!o(e)}t.d(n,{b:function(){return o},Z:function(){return i}})},79524:function(e,n,t){t.d(n,{C:function(){return a},Z:function(){return r}});var o=t(39962),i=t(2735);function a(){var e=(0,o.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,o){var a=void 0===o?{}:o,r=a.forcePrependBaseUrl,s=void 0!==r&&r,c=a.absolute,d=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,i.b)(t))return t;if(s)return n+t;var l=t.startsWith(n)?t:n+t.replace(/^\//,"");return d?e+l:l}(a,t,e,n)}}}function r(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},46149:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var o=t(87462),i=t(63366),a=(t(67294),t(3905)),r=t(79524),s=["components"],c={},d="Basics",l={unversionedId:"Solutions/common",id:"Solutions/common",isDocsHomePage:!1,title:"Basics",description:"Tips and tricks for common issues.",source:"@site/docs/Solutions/common.mdx",sourceDirName:"Solutions",slug:"/Solutions/common",permalink:"/docs/Solutions/common",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/Solutions/common.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transaction Demo",permalink:"/docs/Demos/transaction"},next:{title:"Developer API (Sandbox)",permalink:"/docs/api"}},p=[{value:"How do I make a blank React app?",id:"how-do-i-make-a-blank-react-app",children:[]},{value:"setState or this is not defined",id:"setstate-or-this-is-not-defined",children:[]},{value:"How to trigger other actions after connecting to MyAlgo or sending a transaction",id:"how-to-trigger-other-actions-after-connecting-to-myalgo-or-sending-a-transaction",children:[]}],u={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basics"},"Basics"),(0,a.kt)("p",null,"Tips and tricks for common issues."),(0,a.kt)("h2",{id:"how-do-i-make-a-blank-react-app"},"How do I make a blank React app?"),(0,a.kt)("p",null,"In command prompt, enter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app myApp\n")),(0,a.kt)("p",null,'Running this command generates a new folder called "myApp" (or whichever custom name you specify). Inside this folder you will find several pre-configured files. The primary file that you will be working with is App.js that is found in the src folder.'),(0,a.kt)("img",{alt:"Docusaurus with Keytar",width:"100%",height:"400px",src:(0,r.Z)("/img/pipeline_vectilla_5.svg")}),(0,a.kt)("h2",{id:"setstate-or-this-is-not-defined"},"setState or this is not defined"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Make sure that your app is written as a class rather than as a function if you are using the ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"returnTo")," props (used by ",(0,a.kt)("inlineCode",{parentName:"p"},"AlgoButton")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"AlgoSendButton"),"). If you want to write your app as a function, used the ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange")," prop instead, along with a callback/handler function. "))),(0,a.kt)("p",null,"Your code in App.js should look like this (when writing a React app as a class):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, {Component} from 'react';\n\nclass App extends Component{\n    constructor(props) {\n        super(props);\n        this.state = {\n            myValue: \"\", //your values go here\n\n        };\n    }\n\n    //your function and lifecycle code goes here\n\n    render(){\n        return ( //your jsx code goes between the <div> tags below:\n            <div>\n            </div>\n        )\n    }\n}\n\nexport default App;\n")),(0,a.kt)("h2",{id:"how-to-trigger-other-actions-after-connecting-to-myalgo-or-sending-a-transaction"},"How to trigger other actions after connecting to MyAlgo or sending a transaction"),(0,a.kt)("p",null,"Add the following code just above the ",(0,a.kt)("inlineCode",{parentName:"p"},"render()")," call:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"}," componentDidUpdate(_prevProps, prevState) {\n    if (prevState.address !== this.state.address){ // note: address can be replaced with any state key\n        //do something\n    }\n }\n")),(0,a.kt)("p",null,"In order to avoid an inifinite loop and browser crashing, setState (or functions that setState) should only be called in ",(0,a.kt)("inlineCode",{parentName:"p"},"componentDidUpdate")," in a conditional block."))}m.isMDXComponent=!0}}]);