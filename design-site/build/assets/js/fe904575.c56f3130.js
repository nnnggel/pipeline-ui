(self.webpackChunkpipeline_ui_website=self.webpackChunkpipeline_ui_website||[]).push([[9069],{33701:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return m},BrowserOnlyButton:function(){return h},toc:function(){return g},default:function(){return f}});var o,i=e(87462),a=e(63366),r=(e(67294),e(3905)),l=(e(35666),e(10748)),p=e(55182),s=e(25108),c=["components"],d={},u="AlgoOpt",m={unversionedId:"AlgoComponents/AlgoOpt",id:"AlgoComponents/AlgoOpt",isDocsHomePage:!1,title:"AlgoOpt",description:"Clicking the AlgoOpt button will assemble an app opt-in transaction and open a new window prompting the user to confirm the transaction.",source:"@site/docs/AlgoComponents/AlgoOpt.mdx",sourceDirName:"AlgoComponents",slug:"/AlgoComponents/AlgoOpt",permalink:"/docs/AlgoComponents/AlgoOpt",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/AlgoComponents/AlgoOpt.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AlgoMint",permalink:"/docs/AlgoComponents/AlgoMint"},next:{title:"AlgoReadAppGlobal",permalink:"/docs/AlgoComponents/AlgoReadAppGlobal"}},h=function(t){return(0,r.kt)(l.Z,{mdxType:"BrowserOnly"},(function(){var t=e(81688).gQ;return(0,r.kt)(t,{mdxType:"AlgoOpt"})}))},g=[{value:"Accessing returned transaction id",id:"accessing-returned-transaction-id",children:[{value:"Props",id:"props",children:[],level:3}],level:2}],k=(o="AlgoOpt",{BrowserOnlyButton:h,toc:g});function f(t){var n=t.components,e=(0,a.Z)(t,c);return(0,r.kt)("wrapper",(0,i.Z)({},k,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"algoopt"},"AlgoOpt"),(0,r.kt)("p",null,"Clicking the ",(0,r.kt)("inlineCode",{parentName:"p"},"AlgoOpt")," button will assemble an app opt-in transaction and open a new window prompting the user to confirm the transaction. "),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The rendered AlgoOpt button below is nonfunctional. To see it in action, check out the ",(0,r.kt)("a",{parentName:"p",href:"../Demos/demo"},"Component Demo!")))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The AlgoOpt button executes transactions on the MainNet by default. To switch to TestNet, check out ",(0,r.kt)("a",{parentName:"p",href:"./SwitchNet"},"SwitchNet Component")))),(0,r.kt)("p",null,"Upon confirmation, it returns the transaction id to the context and key specified. Failing to include to correct object parameters, or setting them incorrectly will result in a transaction not executing."),(0,r.kt)(h,{mdxType:"BrowserOnlyButton"}),(0,r.kt)("h2",{id:"accessing-returned-transaction-id"},"Accessing returned transaction id"),(0,r.kt)("p",null,"The returned id can be accessed several different ways. Setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," prop to ",(0,r.kt)("inlineCode",{parentName:"p"},"{this}")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"returnTo")," prop to a ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," key (as string) will return the number directly to your parent component's state without the need for additional callback or event handler code, but can also be accessed with an ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," handler:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"handleChange = (value) =>{\n    this.setState({txId: value})\n  }\n\n  render(){\n    return \n    <AlgoOpt\n      appId={123456}\n    />\n  }\n")),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(p.Z,{mdxType:"Table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Prop"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Default"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"appId"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null),(0,r.kt)("td",null,"index of app to opt-in to")))))}f.isMDXComponent=!0},36563:function(){},80950:function(){},46601:function(){},89214:function(){},8623:function(){},7748:function(){},85568:function(){},56619:function(){},77108:function(){},52361:function(){},94616:function(){}}]);