(function(t){function e(e){for(var r,o,s=e[0],u=e[1],c=e[2],p=0,f=[];p<s.length;p++)o=s[p],a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={"swagger-document-ui":0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0146":function(t,e,n){"use strict";var r=n("cfa6"),a=n.n(r);a.a},"0a8c":function(t,e,n){"use strict";var r=n("54a2"),a=n.n(r);a.a},4620:function(t,e,n){"use strict";var r=n("56b5"),a=n.n(r);a.a},"54a2":function(t,e,n){},"56b5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{attrs:{stype:"overflow-y:hide"}},[n("Header",{style:{padding:0,position:"fixed",width:"100%",zIndex:999}},[n("Menu",{attrs:{mode:"horizontal",theme:"dark"},on:{"on-select":t.headerAction}},[n("MenuItem",{attrs:{name:"1"}},[n("Icon",{attrs:{type:"md-menu",size:"24"},nativeOn:{click:function(e){return t.collapsedSider(e)}}})],1),n("MenuItem",{attrs:{name:"swaggerResources"}},[t._v("\n      "+t._s(t.infoTitle)+" \n      "),n("Icon",{attrs:{type:"md-repeat"}})],1)],1),n("SwaggerResources",{ref:"swaggerResources"})],1),n("Layout",{style:{height:"100vh",paddingTop:"64px",background:"#FFF"}},[n("Sider",{ref:"side1",style:{overflow:"auto"},attrs:{breakpoint:"md",width:270,"collapsed-width":0,"hide-trigger":"",collapsible:""},model:{value:t.isCollapsed,callback:function(e){t.isCollapsed=e},expression:"isCollapsed"}},[n("Menu",{attrs:{theme:"dark",width:"auto",accordion:""},on:{"on-select":t.menuItemAction}},[n("MenuItem",{attrs:{name:"Home"}},[n("Icon",{attrs:{type:"md-home"}}),t._v("\n        首页\n        ")],1),t._l(t.swaggerCollection,function(e,r,a){return n("Submenu",{key:a,attrs:{name:"m"+a}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-pricetags"}}),t._v("\n            "+t._s(r)+"\n          ")],1),t._l(e,function(e){return[n("MenuItem",{key:e.id,attrs:{name:e.id}},[n("MethodTag",{key:e.id,attrs:{method:e.method}}),t._v("\n            "+t._s(e.name)+"\n            ")],1)]})],2)})],2)],1),n("Content",{style:{background:"#fff"}},[n("router-view")],1)],1)],1)},i=[],o=(n("f559"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"http-method-tag",style:{color:t.actionColor(t.method)}},[t._v(t._s(t.simplifyMethod))])}),s=[],u={GET:"#18BE6B",POST:"#FF9901",PUT:"#2D8CF0",DELETE:"#ED4015"},c={DELETE:"DEL",OPTIONS:"OPT"},l={name:"MethodTag",computed:{simplifyMethod:function(){var t=c[this.$props.method];return t||this.$props.method}},props:{method:{type:String,default:""}},methods:{actionColor:function(t){var e=u[t];return e||"#EEEEEE"}}},p=l,f=(n("0146"),n("2877")),d=Object(f["a"])(p,o,s,!1,null,"0c5c28f3",null);d.options.__file="MethodTag.vue";var h=d.exports,m=n("f70c"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",{attrs:{title:"选择 Swagger API"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("CellGroup",{on:{"on-click":t.setCurrentSwaggerJsonAction}},t._l(t.swaggerResources,function(t){return n("Cell",{key:t.url,attrs:{title:t.name,label:t.url,name:t.url}})}))],1)},y=[],v=(n("ac6a"),n("bc3a")),w=n.n(v),_=n("2f62");r["default"].use(_["a"]);var k=new _["a"].Store({state:{swaggerResources:[],currentSwaggerJson:{}},mutations:{swaggerResources:function(t,e){t.swaggerResources=e},currentSwaggerJson:function(t,e){t.currentSwaggerJson=e}},actions:{}}),b=n("b51a"),E=n("2ef0"),S=n.n(E);function C(t,e){S.a.isArray(t)||(t=[t]);var n=[];w.a.all(t.map(function(t){return w.a.get(t).catch(function(t){302===t.response.status&&e.$Notice.warning({title:"API 获取被重定向",desc:"请检查是否未授权或登录",duration:10}),console.warn(t)})})).then(function(t){S.a.flatMap(t,function(t){return t?t.data:[]}).forEach(function(t){n.push(t)}),k.commit("swaggerResources",n),n[0]&&n[0].url&&x(n[0].url,e)})}function x(t,e,n){w.a.get(t).then(function(r){var a,i=r.data;if("string"===typeof i)try{a=JSON.parse(i)}catch(o){console.warn("[swagger-document-ui]: Parse swagger json error: "+o),e.$Notice.error({title:"API 初始化错误",desc:"path: ".concat(t,"\n").concat(o.toLocaleString()),duration:10})}else a=i;n&&n(),k.commit("currentSwaggerJson",b["a"].fixSwaggerJson(a))})}var T={initApi:C,setCurrentSwaggerJson:x},O={name:"SwaggerResources",data:function(){return{show:!1}},methods:{setCurrentSwaggerJsonAction:function(t){var e=this;T.setCurrentSwaggerJson(t,this,function(){e.show=!1,e.$router.push("/")})}},computed:{swaggerResources:function(){return this.$store.state.swaggerResources}}},M=O,A=Object(f["a"])(M,g,y,!1,null,null,null);A.options.__file="SwaggerResources.vue";var P=A.exports,$={name:"App",components:{EntityView:m["default"],SwaggerResources:P,MethodTag:h},data:function(){return{tagsKeyWord:"",isCollapsed:!1,httpEntity:{parameters:{props:[]},responseBean:{props:[]}},beanMap:{}}},computed:{infoTitle:function(){var t=this.$store.state.currentSwaggerJson;return t&&t.info&&t.info.title||""},swaggerCollection:function(){var t=this.$store.state.currentSwaggerJson;return t&&t.collection||{}}},methods:{collapsedSider:function(){this.$refs.side1.toggleCollapse()},headerAction:function(t){"swaggerResources"===t&&(this.$refs.swaggerResources.show=!0)},menuItemAction:function(t){"Home"!==t?t.startsWith("httpEntity")&&this.$router.push("/entity/".concat(t)):this.$router.push("/")}},beforeCreate:function(){T.initApi(["/swagger-resources","/swagger-resources.json"],this)}},B=$,I=(n("7c55"),Object(f["a"])(B,a,i,!1,null,null,null));I.options.__file="App.vue";var J=I.exports,j=n("8c4f"),R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"85vh",overflow:"auto",padding:"24px 24px 50px"}},[n("Divider",[t._v(t._s(t.apiTitle))]),n("Table",{attrs:{columns:t.apiInfoColumns,data:t.apiInfoItems,border:"","show-header":!1}}),n("div",{staticStyle:{margin:"0 auto","text-align":"center",position:"relative",top:"20px",color:"#a9a9a9"}},[t._v("\n    "+t._s(t.classicQuote)+"\n  ")])],1)},L=[],W=(n("7f7f"),["人生百态皆世间，歌尽年少行不欢。 谁将新樽乘旧月，那时浮华染流年。《永夜君王》—— 烟雨江南"]),q=function(){return W[S.a.random(W.length-1)]},K={name:"Home",data:function(){return{apiInfoColumns:[{title:"",key:"k1",width:110,align:"right"},{title:"",key:"k2",render:z}],classicQuote:""}},computed:{apiTitle:function(){return k.state.currentSwaggerJson&&k.state.currentSwaggerJson.info?k.state.currentSwaggerJson.info.title:""},apiInfoItems:function(){if(!k.state.currentSwaggerJson||!k.state.currentSwaggerJson.info)return[];var t=k.state.currentSwaggerJson.info;return[{k1:"描述:",k2:t.description},{k1:"版本:",k2:t.version},{k1:"许可证:",k2:t.license},{k1:"服务条款:",k2:t.termsOfService},{k1:"开发人员:",k2:t.contact.email},{k1:"host:",k2:t.host},{k1:"basePath:",k2:t.basePath}]}},created:function(){this.$data.classicQuote=q()}};function z(t,e){if("许可证:"===e.row.k1){var n=e.row.k2;return t("a",{attrs:{target:"_blank",href:n.url}},n.name)}return"服务条款:"===e.row.k1?t("a",{attrs:{target:"_blank",href:e.row.k2}},e.row.k2):"开发人员:"===e.row.k1?t("a",{attrs:{target:"_blank",href:"mailto:"+e.row.k2}},e.row.k2):t("span",{},e.row.k2)}var H=K,D=(n("cdab"),Object(f["a"])(H,R,L,!1,null,"5e7b8558",null));D.options.__file="Home.vue";var F=D.exports;r["default"].use(j["a"]);var G=new j["a"]({base:"/",routes:[{path:"/",name:"Home",component:F},{path:"/entity/:id",name:"EntityView",props:function(t){var e=b["a"].findHttpEntity(k.state.currentSwaggerJson.collection,t.params.id);if(!e)return{httpEntity:{paramBean:{props:[]},responseBean:{props:[]}},beanMap:{}};var n=k.state.currentSwaggerJson.beanMap;return{httpEntity:e,beanMap:n}},component:function(){return Promise.resolve().then(n.bind(null,"f70c"))}}]}),N=n("e069"),V=n.n(N);n("dcad");r["default"].use(V.a),r["default"].config.productionTip=!1,new r["default"]({router:G,store:k,render:function(t){return t(J)}}).$mount("#app")},"5c48":function(t,e,n){},"7c55":function(t,e,n){"use strict";var r=n("5c48"),a=n.n(r);a.a},b046:function(t,e,n){},b51a:function(t,e,n){"use strict";n("f559"),n("7514"),n("7f7f"),n("ac4d"),n("8a81"),n("ac6a"),n("f751"),n("cadf"),n("551c"),n("097d");var r=n("2ef0"),a=n.n(r);function i(t){var e={license:{}};Object.assign(e,t.info);var n={info:e,beanMap:o(t.definitions),definitions:t.definitions};n.info.host=t.host,n.info.basePath=t.basePath,n.info.schemes=t.schemes;var r=0,i=a.a.flatMap(t.paths,function(e,n){return a.a.flatMap(e,function(e,i){return a.a.map(e.tags,function(a){return{id:"httpEntity"+r++,tag:a,name:e.summary,path:n,method:i.toUpperCase(),produces:e.produces,consumes:e.consumes,description:e.description,paramBean:c(e.parameters,t.definitions),responseBean:l(e.responses,t.definitions)}})})});return n.collection=a.a.groupBy(i,"tag"),n}function o(t){var e={};return a.a.forOwn(t,function(n,r){var i=w();i.title=n.title||r,i.type=n.type,i.props=a.a.map(n.properties,function(e,n){return f({name:n,description:e.description},e,t)}),i.schemaKey=r,e[r]=i}),e}function s(t,e){var n=[];return u(t,e,n),n}function u(t,e,n){if(!t||!e||!t.props)return w();var r=!0,a=!1,i=void 0;try{for(var o,s=function(){var t=o.value;if(t.hasRef&&e.hasOwnProperty(t.schemaKey)){var r=e[t.schemaKey];r&&0===n.filter(function(e){return e.schemaKey===t.schemaKey}).length&&(n.push(r),u(r,e,n))}},c=t.props[Symbol.iterator]();!(r=(o=c.next()).done);r=!0)s()}catch(l){a=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}}function c(t,e){if(!t)return w();var n=w();return n.props=t.map(function(t){var n={};return n.name=t.name,n.description=t.description,n.in=t.in,n.required=t.required,f(n,t,e)}),n}function l(t,e){var n=w();return n.props=a.a.map(t,function(t,n){return f({status:n,description:t.description},t,e)}),n}function p(t,e){return a.a.flatMap(t).find(function(t){return t.id===e})}function f(t,e,n){t.type=d(e,n),t.format=h(e,n);var r=m(e);return t.hasRef=a.a.isString(r),t.schemaKey=g(r),t.constraint="",e.enum&&(t.constraint+=" enum: "+a.a.join(e.enum,", ")),e.minLength&&(t.constraint+=" minLength: "+e.minLength),e.maxLength&&(t.constraint+=" minLength: "+e.maxLength),e.pattern&&(t.constraint+=" pattern: "+e.pattern),t}function d(t,e){if("array"===t.type&&t.items&&t.items.type)return"["+t.items.type+"]";var n=g(m(t));return"array"===t.type&&n?"["+y(n,e)+"]":"array"===a.a.get(t,"schema.type")&&n?"["+y(n,e)+"]":n?y(n,e):a.a.get(t,"schema.type")?t.schema.type:t.type}function h(t,e){var n=m(t);if(n){var r=g(n),a=v(r,e);return a||r}return t.format}function m(t){return a.a.get(t,"$ref")||a.a.get(t,"schema.$ref")||a.a.get(t,"items.$ref")||a.a.get(t,"schema.items.$ref")}function g(t){var e="#/definitions/";if(t&&t.startsWith(e))return t.substring(e.length)}function y(t,e){if(e.hasOwnProperty(t))return e[t].type}function v(t,e){if(e.hasOwnProperty(t))return e[t].title}function w(){return{title:"",type:"",props:[]}}e["a"]={fixSwaggerJson:i,findAllBean:s,findHttpEntity:p}},cdab:function(t,e,n){"use strict";var r=n("b046"),a=n.n(r);a.a},cfa6:function(t,e,n){},f70c:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"24px 0 0 24px"}},[n("div",{staticClass:"divider-auto"},[n("Divider",[n("h2",[t._v(t._s(t.httpEntity.name))])])],1),n("div",{attrs:{id:"doc-content"}},[n("div",[n("ul",[t._m(0),n("li",{staticClass:"no-border"},[n("Table",{attrs:{columns:t.apiInfoColumns,data:t.apiInfo,"show-header":!1,size:"small"}})],1),t._m(1),n("li",[n("Table",{attrs:{columns:t.paramBeanColumns,data:t.httpEntity.paramBean.props,border:"",size:"small"}})],1),t._l(t.allChildParamBeans,function(e,r){return[n("li",{key:"Param:"+e.schemaKey},[n("ul",[n("li",[n("h3",{attrs:{id:"h3_param_"+r}},[t._v("类型\n                  "),n("Icon",{attrs:{type:"md-arrow-dropright",size:"20"}}),t._v("\n                  "+t._s(e.title)+"\n                ")],1)]),n("li",[n("Table",{attrs:{columns:t.beanColumns,data:e.props,border:"",size:"small"}})],1)])])]}),t._m(2),n("li",[n("Table",{attrs:{columns:t.responseBeanColumns,data:t.httpEntity.responseBean.props,border:"",size:"small"}})],1),t._l(t.allChildResponseBeans,function(e,r){return[n("li",{key:"Response:"+e.schemaKey},[n("ul",[n("li",[n("h3",{attrs:{id:"h3_response_"+r}},[t._v("类型\n                  "),n("Icon",{attrs:{type:"md-arrow-dropright",size:"20"}}),t._v("\n                  "+t._s(e.title)+"\n                ")],1)]),n("li",[n("Table",{attrs:{columns:t.beanColumns,data:e.props,border:"",size:"small"}})],1)])])]})],2)])]),n("div",{staticClass:"anchor-auto"},[n("Anchor",{attrs:{"show-ink":"",container:"#doc-content"}},[n("AnchorLink",{attrs:{href:"#h2_1",title:"接口说明"}}),n("AnchorLink",{attrs:{href:"#h2_2",title:"请求参数"}}),t._l(t.allChildParamBeans,function(t,e){return n("AnchorLink",{key:"h3_param_"+t.schemaKey,attrs:{href:"#h3_param_"+e,title:t.title}})}),n("AnchorLink",{attrs:{href:"#h2_3",title:"响应信息"}}),t._l(t.allChildResponseBeans,function(t,e){return n("AnchorLink",{key:"h3_response_"+t.schemaKey,attrs:{href:"#h3_response_"+e,title:t.title}})})],2)],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("h2",{attrs:{id:"h2_1"}},[t._v("接口说明")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("h2",{attrs:{id:"h2_2"}},[t._v("请求参数")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("h2",{attrs:{id:"h2_3"}},[t._v("响应信息")])])}],i=(n("7f7f"),n("cadf"),n("551c"),n("097d"),n("b51a")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Tooltip",{attrs:{content:"点击复制",placement:"right-start"}},[n("span",{staticClass:"copied-tag",on:{click:t.copiedToClipboard}},[t._t("default")],2)])},s=[],u=n("b311"),c=n.n(u),l={name:"CopiedTag",methods:{copiedToClipboard:function(){new c.a(".copied-tag",{text:function(t){return t.innerHTML}}),this.$Message.success("复制成功")}}},p=l,f=(n("4620"),n("2877")),d=Object(f["a"])(p,o,s,!1,null,"5f12357d",null);d.options.__file="CopiedTag.vue";var h=d.exports,m=n("2ef0"),g=n.n(m),y={name:"EntityView",components:{CopiedTag:h},data:function(){return{apiInfoColumns:[{title:"",key:"k1",width:110,align:"right",render:w},{title:"",key:"k2",render:_}],paramBeanColumns:[{title:"名称",key:"name",maxWidth:150,render:k},{title:"描述",key:"description"},{title:"位置",key:"in",maxWidth:100},{title:"类型",key:"type",maxWidth:100},{title:"格式",key:"format",maxWidth:150},{title:"约束",key:"constraint",maxWidth:250}],beanColumns:[{title:"名称",key:"name",maxWidth:150,render:_},{title:"描述",key:"description"},{title:"类型",key:"type",maxWidth:100},{title:"格式",key:"format",maxWidth:150},{title:"约束",key:"constraint",maxWidth:250}],responseBeanColumns:[{title:"状态",key:"status",maxWidth:62},{title:"描述",key:"description"},{title:"类型",key:"type",maxWidth:100},{title:"格式",key:"format",maxWidth:150},{title:"约束",key:"constraint",maxWidth:250}]}},computed:{apiInfo:function(){var t=[{k1:this.httpEntity.method,k2:this.httpEntity.path},{k1:"请求体类型",k2:this.httpEntity.consumes},{k1:"响应体类型",k2:this.httpEntity.produces},{k1:"描述",k2:this.httpEntity.description}];return"GET"===this.httpEntity.method&&t.splice(1,1),t},allChildParamBeans:function(){return i["a"].findAllBean(this.httpEntity.paramBean,this.beanMap)},allChildResponseBeans:function(){return i["a"].findAllBean(this.httpEntity.responseBean,this.beanMap)}},props:{httpEntity:{type:Object,required:!0,id:{type:String,required:!0},name:{type:String,required:!0},path:{type:String,required:!0},method:{type:String,required:!0},consumes:{type:Array},produces:{type:Array},paramBean:{type:Object,required:!0,props:{type:Array,required:!0}},responseBean:{type:Object,required:!0,props:{type:Array,required:!0}}},beanMap:{type:Object,required:!0}}},v={GET:"success",POST:"warning",PUT:"primary",DELETE:"error"};function w(t,e){if(0===e.index){var n=v[e.row.k1],r=n||"default";return t("Tag",{props:{color:r}},e.row.k1)}return t("span",e.row.k1)}function _(t,e){var n=e.row.name||e.row.k2;return g.a.isArray(n)?(n=n.map(function(e){return t(h,{style:"margin-right:10px"},e)}),t("span",{},n)):t(h,{},n)}function k(t,e){return e.row.required?t("span",{},[t(h,{},e.row.name),t("span",{style:"color:red;"},"*")]):t(h,{},e.row.name)}var b=y,E=(n("0a8c"),Object(f["a"])(b,r,a,!1,null,null,null));E.options.__file="EntityView.vue";e["default"]=E.exports}});
//# sourceMappingURL=swagger-document-ui.js.map