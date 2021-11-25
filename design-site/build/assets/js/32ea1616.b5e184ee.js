(self.webpackChunkpipeline_ui_website=self.webpackChunkpipeline_ui_website||[]).push([[6191],{48093:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return p},BrowserOnlyButton:function(){return k},toc:function(){return h},default:function(){return C}});var l=n(87462),a=n(63366),o=(n(67294),n(3905)),r=(n(35666),n(10748)),s=n(96086),i=n(25108),u=["components"],d={},c="MultiWalletConnect",p={unversionedId:"AlgoComponents/MultiWalletConnect",id:"AlgoComponents/MultiWalletConnect",isDocsHomePage:!1,title:"MultiWalletConnect",description:"A select component with button. Clicking on the button will prompt the user to connect to the selected wallet.",source:"@site/docs/AlgoComponents/MultiWalletConnect.mdx",sourceDirName:"AlgoComponents",slug:"/AlgoComponents/MultiWalletConnect",permalink:"/docs/AlgoComponents/MultiWalletConnect",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/AlgoComponents/MultiWalletConnect.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AsaList",permalink:"/docs/AlgoComponents/AsaList"},next:{title:"SwitchNet",permalink:"/docs/AlgoComponents/switchnet"}};function k(){return(0,o.kt)(r.Z,{fallback:(0,o.kt)("p",null,"Some Fallback Content"),mdxType:"BrowserOnly"},(function(){var e=n(81379).MultiWalletConnect,t=n(81379).B_;return(0,o.kt)(e,{wallet:t.init(),mdxType:"MultiWalletConnect"})}))}var m,h=[{value:"Example usage",id:"example-usage",children:[]},{value:"Accessing returned address",id:"accessing-returned-address",children:[]},{value:"Use Example",id:"use-example",children:[{value:"Props",id:"props",children:[]}]}],g=(m="MultiWalletConnect",{BrowserOnlyButton:k,toc:h});function C(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,l.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"multiwalletconnect"},"MultiWalletConnect"),(0,o.kt)("p",null,"A select component with button. Clicking on the button will prompt the user to connect to the selected wallet. "),(0,o.kt)(k,{mdxType:"BrowserOnlyButton"}),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"example-usage"},"Example usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<MultiWalletConnect wallet={myWallet}/>\n")),(0,o.kt)("h2",{id:"accessing-returned-address"},"Accessing returned address"),(0,o.kt)("p",null,"The returned address can be accessed several different ways. Setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," prop to ",(0,o.kt)("inlineCode",{parentName:"p"},"{this}")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"returnTo")," prop to a ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," key (as string) will return the address directly to your parent component's state without the need for additional callback or event handler code. The address can also be accessed with ",(0,o.kt)("inlineCode",{parentName:"p"},"Pipeline.address"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"componentDidMount() {\n      this.interval = setInterval(() => this.setState({address: Pipeline.address}), 1000);\n    }\n")),(0,o.kt)("p",null,"or with an ",(0,o.kt)("inlineCode",{parentName:"p"},"onChange")," handler:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"handleChange = (value) =>{\n    this.setState({myAddress: value})\n  }\n\n  render(){\n    return <MultiWalletConnect onChange={this.handleChange} wallet={myWallet}/>\n  }\n")),(0,o.kt)("h2",{id:"use-example"},"Use Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react';\nimport { MultiWalletConnect, Pipeline} from 'pipeline-ui';\n\n\nclass TestButton extends Component {\n\n  constructor(props) {\n    super(props);\n    this.state = {\n      Algaddress: \"\"\n    }\n  }\n  \n  myWallet = Pipeline.init();\n\n  render() {\n    return <div>\n      <MultiWalletConnect \n            wallet={this.myWallet} \n            context={this} \n            returnTo={\"Algaddress\"} \n            />\n      <h1>{this.state.Algaddress}</h1>\n    </div>\n  }\n}\n\nexport default TestButton;\n")),(0,o.kt)("h3",{id:"props"},"Props"),(0,o.kt)(s.Z,{mdxType:"Table"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Prop"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Default"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"wallet"),(0,o.kt)("td",null,"reference"),(0,o.kt)("td",null),(0,o.kt)("td",null)),(0,o.kt)("tr",null,(0,o.kt)("td",null,"context"),(0,o.kt)("td",null,"reference"),(0,o.kt)("td",null),(0,o.kt)("td",null)),(0,o.kt)("tr",null,(0,o.kt)("td",null,"returnTo"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"empty string"),(0,o.kt)("td",null,"key in state to return fetched address")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"onChange"),(0,o.kt)("td",null,"function"),(0,o.kt)("td",null),(0,o.kt)("td",null,"enables callback (see example above)")))))}C.isMDXComponent=!0},36563:function(){}}]);