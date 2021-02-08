(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{137:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var i=t(2),o=t(9),a=(t(0),t(177)),r={title:"Koin Components"},c={id:"reference/koin-core/koin-component",isDocsHomePage:!1,title:"Koin Components",description:"Koin Components",source:"@site/docs/reference/koin-core/koin-component.md",permalink:"/docs/reference/koin-core/koin-component",editUrl:"https://github.com/pbissonho/koin.dart/tree/master/website/docs/reference/koin-core/koin-component.md",sidebar:"docs",previous:{title:"Start Koin",permalink:"/docs/reference/koin-core/start-koin"},next:{title:"Injection Parameter",permalink:"/docs/reference/koin-core/injection-parameters"}},l=[{value:"Koin Components",id:"koin-components",children:[]},{value:"Create a Koin Component",id:"create-a-koin-component",children:[]},{value:"Unlock the Koin API with KoinComponent",id:"unlock-the-koin-api-with-koincomponent",children:[]},{value:"Retrieving definitions with get &amp; inject",id:"retrieving-definitions-with-get--inject",children:[]},{value:"Resolving instance from its name",id:"resolving-instance-from-its-name",children:[]},{value:"No inject() or get() in your API?",id:"no-inject-or-get-in-your-api",children:[]}],p={rightToc:l};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"koin-components"},"Koin Components"),Object(a.b)("p",null,"Koin is a DSL to help describe your modules & definitions, a container to make definition resolution. What we need now is\nan API to retrieve our instances outside of the container. That's the goal of Koin components."),Object(a.b)("h2",{id:"create-a-koin-component"},"Create a Koin Component"),Object(a.b)("p",null,"To give a class the capacity to use Koin features, we need to tag it with ",Object(a.b)("inlineCode",{parentName:"p"},"KoinComponent")," interface. Let's take an example."),Object(a.b)("p",null,"A module to define MyService instance"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-dart"}),"class MyService {}\n// Define a singleton for MyService\nvar myModule = module()..single((s) => MyService());\n")),Object(a.b)("p",null,"we start Koin before using definition."),Object(a.b)("p",null,"Start Koin with myModule"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-dart"}),"void main(vararg args : String){\n    // Start Koin\n    startKoin((app){\n        app.module(myModule);\n    });\n\n    // Create MyComponent instance and inject from Koin container\n    MyComponent();\n}\n")),Object(a.b)("p",null,"Here is how we can write our ",Object(a.b)("inlineCode",{parentName:"p"},"MyComponent")," to retrieve instances from Koin container."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"get()")," & by ",Object(a.b)("inlineCode",{parentName:"p"},"inject()")," to inject MyService instance."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-dart"}),"class MyComponent extends View with KoinComponentMixin {\n  MyService myService;\n  Lazy<MyService> myServiceLazy;\n  \n  MyComponent() {\n    // lazy inject Koin instance\n    myServiceLazy = inject<MyService>();\n    // or\n    // eager inject Koin instance\n    myService = get<MyService>();\n  }\n}\n")),Object(a.b)("h2",{id:"unlock-the-koin-api-with-koincomponent"},"Unlock the Koin API with KoinComponent"),Object(a.b)("p",null,"Once you have tagged your class as ",Object(a.b)("inlineCode",{parentName:"p"},"KoinComponent"),", you gain access to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"inject()")," - lazy evaluated instance from Koin container"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"get()")," - eager fetch instance from Koin container")),Object(a.b)("h2",{id:"retrieving-definitions-with-get--inject"},"Retrieving definitions with get & inject"),Object(a.b)("p",null,"Koin offers two ways of retrieving instances from the Koin container:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Lazy<T> t = inject<T>()")," - lazy evaluated delegated instance"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"T t = get<T>()")," - eager access for instance")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-dart"}),"// is lazy evaluated\nLazy<MyService> myService = inject();\n\n// retrieve directly the instance\nMyService myService = get();\n")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The lazy inject form is better to define property that need lazy evaluation."))),Object(a.b)("h2",{id:"resolving-instance-from-its-name"},"Resolving instance from its name"),Object(a.b)("p",null,"If you need you can specify the following parameter with ",Object(a.b)("inlineCode",{parentName:"p"},"get()")," or ",Object(a.b)("inlineCode",{parentName:"p"},"by inject()")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"qualifier")," - name of the definition (when specified name parameter in your definition)")),Object(a.b)("p",null,"Example of module using definitions names:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-dart"}),'class ComponentA {}\n\nclass ComponentB {\n  final ComponentA componentA;\n\n  ComponentB(this.componentA);\n}\n\nfinal myModule = module()\n  ..single((s) => ComponentA(), qualifier: named("A"))\n  ..single((s) => ComponentB(s.get()), qualifier: named("B"));\n')),Object(a.b)("p",null,"We can make the following resolutions:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-dart"}),'// retrieve from given module\nvar a = get<ComponentA>(named("A"))\n')),Object(a.b)("h2",{id:"no-inject-or-get-in-your-api"},"No inject() or get() in your API?"),Object(a.b)("p",null,"If your are using an API and want to use Koin inside it, just tag the desired class with ",Object(a.b)("inlineCode",{parentName:"p"},"KoinComponent")," interface."))}s.isMDXComponent=!0},177:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var i=t(0),o=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=i,d=m["".concat(r,".").concat(u)]||m[u]||b[u]||a;return t?o.a.createElement(d,c(c({ref:n},p),{},{components:t})):o.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var p=2;p<a;p++)r[p]=t[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);