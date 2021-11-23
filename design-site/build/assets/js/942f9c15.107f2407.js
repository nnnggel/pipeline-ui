(self.webpackChunkpipeline_ui_website=self.webpackChunkpipeline_ui_website||[]).push([[5032],{14604:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return m},BrowserOnlyButton:function(){return k},toc:function(){return h},default:function(){return v}});var l,o=e(87462),i=e(63366),a=(e(67294),e(3905)),r=(e(35666),e(10748)),s=e(55182),d=e(25108),u=["components"],p={},c="AlgoSendButton",m={unversionedId:"AlgoComponents/AlgoSendButton",id:"AlgoComponents/AlgoSendButton",isDocsHomePage:!1,title:"AlgoSendButton",description:"Clicking the AlgoSend button will open a new MyAlgo window prompting the user to confirm the transaction.",source:"@site/docs/AlgoComponents/AlgoSendButton.mdx",sourceDirName:"AlgoComponents",slug:"/AlgoComponents/AlgoSendButton",permalink:"/docs/AlgoComponents/AlgoSendButton",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/AlgoComponents/AlgoSendButton.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AlgoFetch",permalink:"/docs/AlgoComponents/AlgoFetch"},next:{title:"AlgoSignerButton",permalink:"/docs/AlgoComponents/AlgoSignerButton"}},k=function(t){return(0,a.kt)(r.Z,{mdxType:"BrowserOnly"},(function(){var t=e(68125).xh;return(0,a.kt)(t,{mdxType:"AlgoSendButton"})}))},h=[{value:"Accessing returned txID",id:"accessing-returned-txid",children:[],level:2},{value:"Use Example",id:"use-example",children:[{value:"Props",id:"props",children:[],level:3}],level:2}],g=(l="AlgoSendButton",{BrowserOnlyButton:k,toc:h});function v(t){var n=t.components,e=(0,i.Z)(t,u);return(0,a.kt)("wrapper",(0,o.Z)({},g,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"algosendbutton"},"AlgoSendButton"),(0,a.kt)("p",null,"Clicking the AlgoSend button will open a new MyAlgo window prompting the user to confirm the transaction. "),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The rendered AlgoSend button below is nonfunctional. To see it in action, check out the ",(0,a.kt)("a",{parentName:"p",href:"../Demos/transaction"},"Transaction Demo!")))),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The AlgoSend button executes transactions on the MainNet by default. To switch to TestNet, check out ",(0,a.kt)("a",{parentName:"p",href:"./SwitchNet"},"SwitchNet Component")))),(0,a.kt)("p",null,"Upon confirmation, it returns the transaction id to the context and key specified. This component has the largest number of mandatory props. Failing to set them, or setting them incorrectly will result in a transaction not executing."),(0,a.kt)(k,{mdxType:"BrowserOnlyButton"}),(0,a.kt)("h2",{id:"accessing-returned-txid"},"Accessing returned txID"),(0,a.kt)("p",null,"The returned transaction ID can be accessed several different ways. Setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," prop to ",(0,a.kt)("inlineCode",{parentName:"p"},"{this}")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"returnTo")," prop to a ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," key (as string) will return the txID directly to your parent component's state without the need for additional callback or event handler code. The txID can also be accessed with ",(0,a.kt)("inlineCode",{parentName:"p"},"Pipeline.txID"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"componentDidMount() {\n      this.interval = setInterval(() => this.setState({txID: Pipeline.txID}), 1000);\n    }\n")),(0,a.kt)("p",null,"or with an ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange")," handler:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"handleChange = (value) =>{\n    this.setState({txID: value})\n  }\n\n  render(){\n    return <AlgoSendButton \n              onChange={this.handleChange} \n              wallet={myAlgoWallet}\n              index={this.state.index}\n              recipient={this.state.recipient}\n              amount={this.state.amount}\n              note={this.state.note}\n            />\n  }\n")),(0,a.kt)("h2",{id:"use-example"},"Use Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import {AlgoButton, AlgoSendButton, Pipeline} from 'pipeline-ui'\n\nconst myAlgoWallet = Pipeline.init();\n\n<AlgoSendButton\n      index={this.state.index}\n      recipient={this.state.recipient}\n      amount={this.state.amount}\n      note={this.state.note}\n      wallet={myAlgoWallet} \n      context={this}\n      returnTo={\"txID\"}\n      />\n")),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)(s.Z,{mdxType:"Table"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Prop"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Default"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"index"),(0,a.kt)("td",null,"integer"),(0,a.kt)("td",null,"0"),(0,a.kt)("td",null,"If Algorand, must be 0. If ASA, must be numeric index value")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"recipient"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null),(0,a.kt)("td",null,"Address of recipient")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"amount"),(0,a.kt)("td",null,"integer"),(0,a.kt)("td",null,"1"),(0,a.kt)("td",null,"amount to send in micro Algos")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"note"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,'"note"'),(0,a.kt)("td",null,"Any data up to 1000 bytes.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"wallet"),(0,a.kt)("td",null,"reference"),(0,a.kt)("td",null),(0,a.kt)("td",null,"reference to an instance of Pipeline.init(); that is called ONCE when the app is initialized")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"context"),(0,a.kt)("td",null,"reference"),(0,a.kt)("td",null),(0,a.kt)("td",null,"Recommended value: this")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"returnTo"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null),(0,a.kt)("td",null,"string value of state key to return the transaction id")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onChange"),(0,a.kt)("td",null,"function"),(0,a.kt)("td",null),(0,a.kt)("td",null,"Enables callback (see example above)")))))}v.isMDXComponent=!0},36563:function(){}}]);