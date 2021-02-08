(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{158:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var o=t(2),i=t(9),r=(t(0),t(177)),a={title:"Koin Components"},c={id:"start/getting-started/koin-components",isDocsHomePage:!1,title:"Koin Components",description:"Sometimes you can't declare only components via Koin. Dependening on your runtime technology, you might need to retrieve instances from Koin in a class that was not created with Koin (e.g. Flutter Widgets)",source:"@site/docs/start/getting-started/koin-components.md",permalink:"/docs/start/getting-started/koin-components",editUrl:"https://github.com/pbissonho/koin.dart/tree/master/website/docs/start/getting-started/koin-components.md",sidebar:"docs",previous:{title:"Modules Definitions",permalink:"/docs/start/getting-started/modules-definitions"},next:{title:"Testing",permalink:"/docs/start/getting-started/testing"}},l=[{value:"The KoinComponent interface",id:"the-koincomponent-interface",children:[]},{value:"Bridge with Koin instance",id:"bridge-with-koin-instance",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Sometimes you can't declare only components via Koin. Dependening on your runtime technology, you might need to retrieve instances from Koin in a class that was not created with Koin (e.g. Flutter Widgets)"),Object(r.b)("h2",{id:"the-koincomponent-interface"},"The KoinComponent interface"),Object(r.b)("p",null,"Tag your class with the ",Object(r.b)("inlineCode",{parentName:"p"},"KoinComponent")," interface to unlock Koin injection features:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"inject()")," - lazy inject an instance"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"get()")," - retrieve an instance")),Object(r.b)("p",null,"We can inject the module above into class properties:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-dart"}),"// Tag class with KoinComponent\nclass HelloApp extends KoinComponent{\n  // lazy inject dependency\n  Lazy<HelloServiceImpl> helloService;\n  \n  HelloApp() {\n    helloService = inject<HelloServiceImpl>();\n  }\n\n  void sayHello() {\n    helloService.value.sayHello();\n  }\n}\n")),Object(r.b)("p",null,"If the class already inherits another one you can use KoinComponentMixin instead of\ninheriting KoinComponent."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-dart"}),"// Tag class with KoinComponentMixin\nclass HelloApp extends App with KoinComponentMixin { \n  // lazy inject dependency\n  Lazy<HelloServiceImpl> helloService;\n\n  HelloApp() {\n    helloService = inject<HelloServiceImpl>();\n  }\n\n  void sayHello() {\n    helloService.value.sayHello();\n  }\n}\n")),Object(r.b)("p",null,"And we just need to start Koin and run our class:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-dart"}),"// a module with our declared Koin dependencies \nfinal helloModule = module()..single((s) => HelloServiceImpl());\n\nvoid main() {\n\n    // Start Koin\n    startKoin((app){\n      app.module(helloModule);\n    });\n    \n    // Run our Koin component\n    HelloApp().sayHello();\n}\n")),Object(r.b)("h4",{id:"bootstrapping"},"Bootstrapping"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"KoinComponent")," interface is also used to help you bootstrap an application from outside of Koin. Also, you can bring  ",Object(r.b)("inlineCode",{parentName:"p"},"KoinComponent")," feature by extension functions directly on some target classes. The koin_flutter pachage use extensions to provide the Koin API for Flutter Widgets.")),Object(r.b)("h2",{id:"bridge-with-koin-instance"},"Bridge with Koin instance"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"KoinComponent")," interface brings the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-dart"}),"abstract class KoinComponent {\n\n    /**\n     * Get the associated Koin instance\n     */\n    Koin getKoin() => KoinContextHandler.get();\n}\n")),Object(r.b)("p",null,"It opens the following possibilties:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can then redefine then ",Object(r.b)("inlineCode",{parentName:"p"},"getKoin()")," function to redirect to a local custom Koin instance")))}p.isMDXComponent=!0},177:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var o=t(0),i=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||r;return t?i.a.createElement(m,c(c({ref:n},s),{},{components:t})):i.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<r;s++)a[s]=t[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);