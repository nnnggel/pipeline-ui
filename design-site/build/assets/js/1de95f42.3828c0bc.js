(self.webpackChunkpipeline_ui_website=self.webpackChunkpipeline_ui_website||[]).push([[2180],{17851:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return m},BrowserOnlyButton:function(){return g},toc:function(){return h},default:function(){return f}});var a,o=e(87462),l=e(63366),i=(e(67294),e(3905)),r=(e(35666),e(10748)),s=e(55182),p=e(25108),d=["components"],c={},u="AlgoDeploy",m={unversionedId:"AlgoComponents/AlgoDeploy",id:"AlgoComponents/AlgoDeploy",isDocsHomePage:!1,title:"AlgoDeploy",description:"Clicking the AlgoDeploy button will assemble an app deployment transaction and open a new window prompting the user to confirm the transaction.",source:"@site/docs/AlgoComponents/AlgoDeploy.mdx",sourceDirName:"AlgoComponents",slug:"/AlgoComponents/AlgoDeploy",permalink:"/docs/AlgoComponents/AlgoDeploy",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/AlgoComponents/AlgoDeploy.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AlgoDeleteApp",permalink:"/docs/AlgoComponents/AlgoDeleteApp"},next:{title:"AlgoFetch",permalink:"/docs/AlgoComponents/AlgoFetch"}},g=function(t){return(0,i.kt)(r.Z,{mdxType:"BrowserOnly"},(function(){var t=e(81688).Fv;return(0,i.kt)(t,{mdxType:"AlgoDeploy"})}))},h=[{value:"Accessing returned app index",id:"accessing-returned-app-index",children:[{value:"Props",id:"props",children:[],level:3}],level:2}],k=(a="AlgoDeploy",{BrowserOnlyButton:g,toc:h});function f(t){var n=t.components,e=(0,l.Z)(t,d);return(0,i.kt)("wrapper",(0,o.Z)({},k,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"algodeploy"},"AlgoDeploy"),(0,i.kt)("p",null,"Clicking the ",(0,i.kt)("inlineCode",{parentName:"p"},"AlgoDeploy")," button will assemble an app deployment transaction and open a new window prompting the user to confirm the transaction. "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The rendered button below is nonfunctional. To see the action that it implements, check out: ",(0,i.kt)("a",{parentName:"p",href:"../Teal%20Contracts%20Lab/demo"},"Teal Contracts Lab")))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The AlgoDeploy button executes transactions on the MainNet by default. To switch to TestNet, check out ",(0,i.kt)("a",{parentName:"p",href:"./SwitchNet"},"SwitchNet Component")))),(0,i.kt)("p",null,"Upon signing, it returns app index (after 15 seconds) of the created App to the context and key specified. Failing to set props, or setting them incorrectly will result in a transaction not executing."),(0,i.kt)(g,{mdxType:"BrowserOnlyButton"}),(0,i.kt)("h2",{id:"accessing-returned-app-index"},"Accessing returned app index"),(0,i.kt)("p",null,"The returned app index can be accessed several different ways. Setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," prop to ",(0,i.kt)("inlineCode",{parentName:"p"},"{this}")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"returnTo")," prop to a ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," key (as string) will return the number directly to your parent component's state without the need for additional callback or event handler code, but can also be accessed with an ",(0,i.kt)("inlineCode",{parentName:"p"},"onChange")," handler:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'\nthis.state = {\n  program: "",\n  clearProgram:"",\n  appArgs: [],\n  bytesInts: [],\n  appIndex\n}\n\ngetContract = async () => {\n    let data = await fetch("teal/Permissionless_Voting.txt")\n    this.setState({program: data.text()})\n    let data2 = await fetch("teal/Permissionless_Voting_clear.txt")\n    this.setState({clearProgram: data2.text()})\n}\n\ncomponentDidMount(){\n  this.getContract()\n}\n\n\nhandleChange = (value) =>{\n    this.setState({appIndex: value})\n  }\n\n  render(){\n    return \n    \n    <AlgoDeploy\n      tealProgram={this.state.program}\n      tealClear={this.state.clearProgram}\n      bytesInts={this.state.bytesInts}\n      appArgs={this.state.appArgs}\n      onChange={this.handleChange}\n    />\n  }\n')),(0,i.kt)("h3",{id:"props"},"Props"),(0,i.kt)(s.Z,{mdxType:"Table"},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Prop"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Default"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"tealProgram"),(0,i.kt)("td",null,"string"),(0,i.kt)("td",null),(0,i.kt)("td",null,"Transaction Executional Approval Language program as string")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"tealClear"),(0,i.kt)("td",null,"string"),(0,i.kt)("td",null),(0,i.kt)("td",null,"Transaction Executional Approval Language clear program as string")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"bytesInts"),(0,i.kt)("td",null,"array"),(0,i.kt)("td",null),(0,i.kt)("td",null,"array of number of slots to allocate for program variables")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"appArgs"),(0,i.kt)("td",null,"array"),(0,i.kt)("td",null),(0,i.kt)("td",null,"array of strings and/or numbers.")))))}f.isMDXComponent=!0},36563:function(){},80950:function(){},46601:function(){},89214:function(){},8623:function(){},7748:function(){},85568:function(){},56619:function(){},77108:function(){},52361:function(){},94616:function(){}}]);