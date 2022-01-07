"use strict";(self.webpackChunkpipeline_ui_website=self.webpackChunkpipeline_ui_website||[]).push([[3466],{50056:function(t,e,n){n.d(e,{R:function(){return i}});var l=n(44547),i=function(t,e){return void 0===e&&(e=null),function(n){return(0,l.U2)(n.theme,t,e)}}},71541:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return k}});var l=n(87462),i=n(63366),a=(n(67294),n(3905)),r=n(55182),d=["components"],o={},s="Pipeline Class",u={unversionedId:"pipeline",id:"pipeline",isDocsHomePage:!1,title:"Pipeline Class",description:"Pipeline is a custom class to sign transactions with MyAlgo Connect, check balances and send transactions (via AlgoExplorer).",source:"@site/docs/pipeline.mdx",sourceDirName:".",slug:"/pipeline",permalink:"/docs/pipeline",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/pipeline.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The Lab",permalink:"/docs/lab"},next:{title:"Videos",permalink:"/docs/videos"}},p=[{value:"Use Example",id:"use-example",children:[],level:2},{value:"Fields/Properties",id:"fieldsproperties",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2},{value:"Arguments",id:"arguments",children:[{value:"Pipeline.balance()",id:"pipelinebalance",children:[],level:3},{value:"Pipeline.connect()",id:"pipelineconnect",children:[],level:3},{value:"Pipeline.send()",id:"pipelinesend",children:[],level:3},{value:"Pipeline.createAsa()",id:"pipelinecreateasa",children:[{value:"asaObject Fields",id:"asaobject-fields",children:[],level:4}],level:3}],level:2}],c={toc:p};function k(t){var e=t.components,n=(0,i.Z)(t,d);return(0,a.kt)("wrapper",(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pipeline-class"},"Pipeline Class"),(0,a.kt)("p",null,"Pipeline is a custom class to sign transactions with MyAlgo Connect, check balances and send transactions (via AlgoExplorer). "),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"We recommend using this class only for more advanced users who do not wish to use the Algo Components with hard-coded onClick functions. "))),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"WalletConnect and AlgoSigner are now supported in all Pipeline libraries!"))),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Pipeline Class now supports ASA creation / NFT minting!"))),(0,a.kt)("p",null,"Note: For faster loading, the codesandbox example below imports the Pipeline class from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pipeline-ui-2/pipeline"),". If you have installed ",(0,a.kt)("inlineCode",{parentName:"p"},"pipeline-ui"),", the class is bundled with it and can be imported like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Pipeline } from 'pipeline-ui';\n")),(0,a.kt)("p",null,"Note: ",(0,a.kt)("inlineCode",{parentName:"p"},"Pipeline.connect"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Pipeline.send")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Pipeline.balance")," are 'asyc' functions. They initally return a promise, so to get the returned data, the ",(0,a.kt)("inlineCode",{parentName:"p"},".then(data => doSomeThingwithData)")," notation must be used when calling them (if the returned data is needed.)"),(0,a.kt)("h2",{id:"use-example"},"Use Example"),(0,a.kt)("iframe",{src:"https://codesandbox.io/embed/github/headline-design/Pipeline/tree/main/example",width:"100%",height:"600px",title:"example",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The above example will send 1 micro Algo to the Headline Dev Team test account. We recommend changing the value ",(0,a.kt)("inlineCode",{parentName:"p"},"const recipient")," (currently on line 5) to your preferred testing addressing before sending a transaction. "))),(0,a.kt)("h2",{id:"fieldsproperties"},"Fields/Properties"),(0,a.kt)("p",null,"The Pipeline class has several fields or properties that developers can use to change several settings for Pipeline."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"Pipeline.main = false; //switch to testNet\n")),(0,a.kt)(r.Z,{mdxType:"Table"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Field"),(0,a.kt)("th",null,"Default"),(0,a.kt)("th",null,"Options"),(0,a.kt)("th",null,"Effect"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Pipeline.pipeConnector"),(0,a.kt)("td",null,'string "myAlgoWallet"'),(0,a.kt)("td",null,'"myAlgoWallet" or currently any other string'),(0,a.kt)("td",null,"Switch between MyAlgo and WalletConnect wallets")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Pipeline.main"),(0,a.kt)("td",null,"true"),(0,a.kt)("td",null,"Boolean"),(0,a.kt)("td",null,"Switch between mainNet and testNet")))),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)(r.Z,{mdxType:"Table"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Method"),(0,a.kt)("th",null,"Returns"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Pipeline.init()"),(0,a.kt)("td",null,"new instance of MyAlgo"),(0,a.kt)("td",null,"Must be called once before connect or send methods")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Pipeline.balance()"),(0,a.kt)("td",null,'string (balance + "Algos")'),(0,a.kt)("td",null,"Takes input string address. Pipeline.init not neccesary for use.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Pipeline.connect()"),(0,a.kt)("td",null,"string (address)"),(0,a.kt)("td",null,"Generates pop-up to sign in. Must be called before Pipeline.send")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Pipeline.send()"),(0,a.kt)("td",null,"string (transaction id) "),(0,a.kt)("td",null,"Can only be called after Pipeline.init and Pipeline.connect.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Pipeline.createAsa()"),(0,a.kt)("td",null,"string (transaction id) "),(0,a.kt)("td",null,"Should only be called after Pipeline.init and Pipeline.connect.")))),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"pipelinebalance"},"Pipeline.balance()"),(0,a.kt)(r.Z,{mdxType:"Table"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Argument"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"address"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"Algorand address")))),(0,a.kt)("h3",{id:"pipelineconnect"},"Pipeline.connect()"),(0,a.kt)(r.Z,{mdxType:"Table"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Argument"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"wallet"),(0,a.kt)("td",null,"reference"),(0,a.kt)("td",null,"instance of Pipeline.init() that is called once in app")))),(0,a.kt)("h3",{id:"pipelinesend"},"Pipeline.send()"),(0,a.kt)(r.Z,{mdxType:"Table"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Argument"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"address"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"recipient's Algorand address")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"amt"),(0,a.kt)("td",null,"integer"),(0,a.kt)("td",null,"amount to send in microAlgos")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"myNote"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"note")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"sendingAddress"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"senders's Algorand address")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"wallet"),(0,a.kt)("td",null,"reference"),(0,a.kt)("td",null,"instance of Pipeline.init() that is called once in app")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"index"),(0,a.kt)("td",null,"integer"),(0,a.kt)("td",null,"0 = Algorand, otherwise asset index number")))),(0,a.kt)("h3",{id:"pipelinecreateasa"},"Pipeline.createAsa()"),(0,a.kt)(r.Z,{mdxType:"Table"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Argument"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"asaObject "),(0,a.kt)("td",null,"object"),(0,a.kt)("td",null,"object containing parameters for the creation of an asset creation transaction ")))),(0,a.kt)("h4",{id:"asaobject-fields"},"asaObject Fields"),(0,a.kt)(r.Z,{mdxType:"Table"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Key"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Default value"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"creator"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"empty string")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"note"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"empty string")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"amount"),(0,a.kt)("td",null,"integer"),(0,a.kt)("td",null,"1")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"decimals"),(0,a.kt)("td",null,"integer"),(0,a.kt)("td",null,"0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"deafultFrozen"),(0,a.kt)("td",null,"boolean"),(0,a.kt)("td",null,"false")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"manager"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"undefined")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"clawback"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"undefined")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"reserve"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"undefined")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"freeze"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"undefined")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"assetName"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"empty string")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"assetUnit"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"assetName")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"assetURL"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"undefined")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"assetMetadataHash"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"undefined")))))}k.isMDXComponent=!0},55182:function(t,e,n){n.d(e,{Z:function(){return v}});var l=n(67294),i=n(45697),a=n.n(i),r=n(31096),d=n(32016),o=n(50056),s=n(13489),u=n(89855),p=((0,d.qC)(d.$_,d.Dh),(0,d.qC)(d.I8,d.JB,d.Ue,d.Nv,d.yd,d.rX));(0,d.qC)(d.jf,d.dp,d.bf,d.Cb,d.ih,d.jw,d.kk,d.kC,d.tx,d.Lo),(0,d.qC)(d.FK,d.W5,d.we,d.F2,d.I,d.t$),(0,d.qC)(d.Lz,d.tv,d.E0,d.Wn),(0,d.qC)(d.P_,d.Me,d.WO,d.Kv,d.cq,d.Kl,d.eY,d.fU,d.zo,d.uk,d.vm);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(){return h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},h.apply(this,arguments)}var g=(0,r.ZP)(u.Z).withConfig({displayName:"Table__StyledTable",componentId:"sc-1oazz9h-0"})(["&{border-collapse:collapse;}th,td{border:solid;border-width:1px 0;border-color:inherit;text-align:left;padding:0 2rem;}tbody tr{height:",";}thead tr,tfoot tr{height:",";}thead th{font-weight:",";text-transform:uppercase;}",""],(0,o.R)("height[3]","4rem"),(0,o.R)("height[2]","3rem"),(0,o.R)("fontWeights.3","bold"),p);g.defaultProps={theme:s.Z};var f=l.forwardRef((function(t,e){return l.createElement(g,h({className:"pipeline-table",ref:e},t,{forwardedAs:"table"}))}));f.defaultProps={width:1,border:1,borderColor:"grey",fontSize:1,fontWeight:2,fontFamily:"sansSerif",color:"dark-gray",boxShadow:1},f.propTypes=k(k({},u.Z.propTypes),{},{theme:a().object}),f.displayName="Table";var v=f}}]);