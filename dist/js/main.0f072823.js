(self["webpackChunkvuue"]=self["webpackChunkvuue"]||[]).push([[179],{8085:function(t,e,o){"use strict";o.d(e,{Z:function(){return u}});var n=function(){var t=this,e=t._self._c;return e("v-btn",{staticClass:"px-0 text-none text-h6",attrs:{to:"/",text:"",plain:""}},[t._v(t._s(t.title))])},r=[],s=o(629),i={name:"SiteTitle",computed:{...(0,s.rn)({title:t=>t.config.title})}},a=i,l=o(1001),c=(0,l.Z)(a,n,r,!1,null,null,null),u=c.exports},9804:function(t,e,o){"use strict";var n=o(144),r=function(){var t=this,e=t._self._c;return e("v-app",[e("v-navigation-drawer",{attrs:{app:"",width:t.drawerWidth},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e("site-navi",{on:{close:t.toggleDrawer}})],1),e("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":""}},[e("v-app-bar-nav-icon",{on:{click:t.toggleDrawer}}),e("site-title"),e("v-spacer"),e("site-user")],1),e("v-main",[e("router-view")],1),e("site-footer"),e("vue-progress-bar")],1)},s=[],i=function(){var t=this,e=t._self._c;return e("v-footer",{staticClass:"justify-center",attrs:{app:"",dark:"",absolute:""}},[t._v(" © "+t._s((new Date).getFullYear())+" "+t._s(t.footer)+" ")])},a=[],l=o(629),c={name:"SiteFooter",computed:{...(0,l.rn)({footer:t=>t.config.footer})}},u=c,p=o(1001),m=(0,p.Z)(u,i,a,!1,null,null,null),d=m.exports,v=function(){var t=this,e=t._self._c;return e("div",[t.isLg?t._e():e("v-app-bar",{attrs:{dark:"",color:"primary"}},[e("v-app-bar-title",[e("site-title")],1),e("v-spacer"),e("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$emit("close")}}},[e("v-icon",[t._v("mdi-close")])],1)],1),e("v-list",[e("nested-menu",{attrs:{items:t.items}})],1)],1)},f=[],h=function(){var t=this,e=t._self._c;return e("div",{style:{"padding-left":2*t.depth+"px"}},t._l(t.items,(function(o,n){return e("div",{key:`${n}${o.title}`},[o.subItems&&o.subItems.length>0?e("v-list-group",{attrs:{"prepend-icon":0===t.depth?o.icon:"","no-action":"","sub-group":t.depth>0,"append-icon":""},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-item-title",[t._v(t._s(o.title))]),e("v-btn",{attrs:{icon:"",plain:"",disabled:!o.to},on:{click:function(e){return e.stopPropagation(),t.goUrl(o)}}},[e("v-icon",[t._v("mdi-arrow-top-right")])],1),e("v-icon",{style:t.activeStyle(o.active)},[t._v("mdi-chevron-down")])]},proxy:!0}],null,!0),model:{value:o.active,callback:function(e){t.$set(o,"active",e)},expression:"item.active"}},[e("nested-menu",{attrs:{items:o.subItems,depth:t.depth+1}})],1):e("v-list-item",t._b({},"v-list-item",t.getLink(o),!1),[0===t.depth?e("v-list-item-icon",[e("v-icon",[t._v(t._s(o.icon))])],1):t._e(),e("v-list-item-title",{style:{"padding-left":1==t.depth?"16px":"0px"}},[e("div",[t._v(t._s(o.title))])])],1)],1)})),0)},b=[],_=(o(7658),{name:"NestedMenu",props:{items:{type:Array,required:!0},depth:{type:Number,default:0}},methods:{getLink(t){return t.newTap?{href:t.to,target:"_blank"}:{to:t.to}},activeStyle(t){return{transform:t?"rotate(180dep)":"rotate(360dep)"}},goUrl(t){t.newTap?window.open(t.to,"_blank"):t.to!=this.$route.path&&this.$route.push(t.to)}}}),y=_,g=(0,p.Z)(y,h,b,!1,null,null,null),k=g.exports,w=o(1676),T=o(8085),x={components:{NestedMenu:k,SiteTitle:T.Z},name:"SiteNavi",data(){return{items:[]}},computed:{...(0,l.rn)({menu:t=>t.config.menu}),isLg(){const{lg:t,xl:e}=this.$vuetify.breakpoint;return t||e}},created(){this.initMenu()},methods:{initMenu(){const t=(0,w.deepCopy)(this.menu);this.findActiveItem(t,null),this.items=t},findActiveItem(t,e){e&&(e.active=!1);for(const o of t)o.subItems&&o.subItems.length>0?this.findActiveItem(o.subItems,o):e&&this.$route.path.startsWith(o.to)&&(o.active=!0),e&&o.active&&(e.active=!0)}}},$=x,E=(0,p.Z)($,v,f,!1,null,null,null),M=E.exports,I=function(){var t=this,e=t._self._c;return t.isLoading?e("v-progress-circular",{attrs:{indeterminate:""}}):e("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:o,attrs:n}){return[e("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),o),[e("display-avatar",{attrs:{member:t.member}})],1)]}}])},[e("v-card",[e("v-card-text",[e("v-switch",{attrs:{label:"Dark Theme","input-value":t.darkMode},on:{change:function(e){return t.setDarkMode(e)}}})],1),[t.member?e("member-menu",{attrs:{member:t.member}}):e("no-member-menu")]],2)],1)},S=[],P=function(){var t=this,e=t._self._c;return e("v-avatar",{attrs:{color:"accent",size:"32"}},[t.member?[t.hasImage?e("v-img",{attrs:{src:`/upload/memberPhoto/${t.member.mb_id}.jpg?w=32&h=32`},on:{error:t.imageError}}):e("div",[t._v(t._s(t.member.mb_name[0]))])]:e("v-icon",[t._v("mdi-account")])],2)},A=[],C={name:"DisplayAvatar",props:{member:{type:Object,default:null}},data(){return{hasImage:!0}},methods:{imageError(){this.hasImage=!1}}},O=C,Z=(0,p.Z)(O,P,A,!1,null,null,null),N=Z.exports,j=function(){var t=this,e=t._self._c;return e("div",[e("v-card-actions",[e("v-btn",{attrs:{color:"primary",block:""}},[t._v("회원정보수정")])],1),e("v-card-actions",[e("v-btn",{attrs:{color:"secondary",block:""},on:{click:t.logout}},[t._v("로그아웃")])],1)],1)},D=[],L={name:"MemberMenu",props:{member:{type:Object,default:null}},methods:{...(0,l.nv)("user",["signOut"]),async logout(){const t=await this.signOut();t&&(this.$toast.info(`${t}님 로그아웃 하였습니다.`),"Home"!=this.$route.name&&this.$router.push("/"))}}},R=L,U=(0,p.Z)(R,j,D,!1,null,null,null),H=U.exports,B=function(){var t=this,e=t._self._c;return e("div",[e("v-card-actions",[e("v-btn",{attrs:{to:"/login",color:"primary",block:""}},[t._v("로그인")])],1),e("v-card-actions",[e("v-btn",{attrs:{to:"/join",color:"secondary",block:""}},[t._v("회원가입")])],1)],1)},F=[],K={name:"NoMemberMenu"},W=K,X=(0,p.Z)(W,B,F,!1,null,null,null),Y=X.exports,q={components:{DisplayAvatar:N,NoMemberMenu:Y,MemberMenu:H},name:"SiteUser",data(){return{isLoading:!1}},computed:{...(0,l.rn)({member:t=>t.user.member}),darkMode(){return this.$vuetify.theme.dark}},mounted(){this.getDarkMode()},methods:{setDarkMode(t){this.$vuetify.theme.dark=t,localStorage.setItem("darkMode",t?"dark":"light")},getDarkMode(){const t="dark"===localStorage.getItem("darkMode");this.$vuetify.theme.dark=t}}},z=q,G=(0,p.Z)(z,I,S,!1,null,null,null),J=G.exports,Q={name:"App",components:{SiteTitle:T.Z,SiteFooter:d,SiteNavi:M,SiteUser:J},data(){return{drawer:!1}},computed:{drawerWidth(){return this.$vuetify.breakpoint.xs?"100%":"360"}},methods:{toggleDrawer(){this.drawer=!this.drawer}}},V=Q,tt=(0,p.Z)(V,r,s,!1,null,null,null),et=tt.exports,ot=o(8345),nt=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("토스트 테스트")]),e("div",[e("v-btn",{on:{click:t.toastTest1}},[t._v("토스트 Info")]),e("v-btn",{on:{click:t.toastTest2}},[t._v("토스트 Success")]),e("v-btn",{on:{click:t.toastTest3}},[t._v("토스트 Error")]),e("v-btn",{on:{click:t.toastTest4}},[t._v("토스트 Warning")]),e("v-btn",{on:{click:t.toastTest5}},[t._v("전역 Error")])],1),e("h1",[t._v("프로그레스 테스트")]),e("div",[e("v-btn",{on:{click:t.barTest1}},[t._v("start")]),e("v-btn",{on:{click:t.barTest2}},[t._v("finish")]),e("v-btn",{on:{click:t.barTest3}},[t._v("fail")])],1),e("h1",[t._v("Notify Test")]),e("div",[e("v-btn",{on:{click:t.notifyTest1}},[t._v("Alert")]),e("v-btn",{on:{click:t.notifyTest2}},[t._v("Confirm")]),e("v-btn",{on:{click:t.notifyTest3}},[t._v("Prompt")])],1),e("h1",[t._v("axios test")]),e("v-btn",{on:{click:t.axiosTest1}},[t._v(" test")]),e("v-btn",{on:{click:t.axiosTest2}},[t._v(" error")])],1)},rt=[],st={name:"Home",data(){return{title:"My App"}},title(){return"My home"},serverPrefetch(){return new Promise(((t,e)=>{t()}))},beforeCreate(){},created(){},beforeMount(){},mounted(){},methods:{toastTest1(){this.$toast.info("Hello Info")},toastTest2(){this.$toast.success("Hello success")},toastTest3(){this.$toast.error("Hello error")},toastTest4(){this.$toast.warning("Hello warning")},toastTest5(){try{throw new Error("전역 에러")}catch(t){this.$toast.error(t.message)}},barTest1(){this.$Progress.start()},barTest2(){this.$Progress.finish()},barTest3(){this.$Progress.fail()},async notifyTest1(){const t=await this.$notify.alert("테스트 내용입니다.","안내",{icon:"mdi-video-4k-box"});console.log(t)},async notifyTest2(){const t=await this.$notify.confirm("테스트 내용입니다.","");console.log(t)},async notifyTest3(){const t=await this.$notify.prompt("테스트 내용입니다.","프롬프트",{width:200});console.log(t)},async axiosTest1(){const t=await this.$axios.get("/api/member/test");console.log(t)},async axiosTest2(){const t=await this.$axios.get("/api/error");console.log(t)}}},it=st,at=(0,p.Z)(it,nt,rt,!1,null,null,null),lt=at.exports;const ct=[{path:"/",name:"home",component:lt},{path:"/about",name:"about",component:()=>Promise.all([o.e(736),o.e(443)]).then(o.bind(o,972))},{path:"/login",name:"NoAuthLogin",component:()=>Promise.all([o.e(736),o.e(443)]).then(o.bind(o,2040))},{path:"/join",name:"NoAuthJoin",component:()=>Promise.all([o.e(736),o.e(443)]).then(o.bind(o,657))},{path:"/*",name:"Error",component:()=>Promise.all([o.e(736),o.e(443)]).then(o.bind(o,9107))}];var ut=ct,pt=o(640);n["default"].use(l.ZP);const mt=new l.ZP.Store({state:{appReady:!1,config:{title:"DOGFLIX",footer:"DOGFLIX all right reserved.",menu:[{title:"Home",icon:"mdi-home",to:"",grant:0,newTab:!1,subItems:[{title:"Menu1",icon:"",to:"/menu1",grant:0,newTab:!1,subItems:[{title:"Menu1-1",icon:"",to:"/menu1-1",grant:0,newTab:!1,subItems:[]},{title:"Menu1-2",icon:"",to:"/menu1-2",grant:0,newTab:!1,subItems:[]}]},{title:"Menu2",icon:"",to:"/menu2",grant:0,newTab:!1,subItems:[]}]},{title:"About",icon:"mdi-help",to:"/about",grant:0,newTab:!1,subItems:[]}]}},mutations:{SET_APP_READY(t){t.appReady=!0}},actions:{async appInit({dispatch:t,commit:e},o){o?(e("user/SET_MEMBER",o.member),e("user/SET_TOKEN",o.token)):await t("user/initUser"),e("SET_APP_READY")}},modules:pt["default"]});function dt(){return mt}var vt=mt;function ft(){const t=new ot.ZP({mode:"history",base:"/",routes:ut});return t.beforeEach((async(t,e,o)=>{const{$Progress:r,$toast:s}=n["default"].prototype;r&&r.start(),"object"==typeof window&&(vt.state.appReady||(window.__INITIAL_STATE__?vt.replaceState(window.__INITIAL_STATE__):await vt.dispatch("appInit"))),r&&r.finish(),o()})),t.afterEach(((t,e)=>{})),t}n["default"].use(ot.ZP);var ht=o(3678),bt=o(5464),_t=o.n(bt),yt=(o(8556),o(6562));n["default"].use(_t());var gt=new(_t())({lang:{locales:{ko:yt.ko,en:yt.en},current:"ko"}}),kt=o(9669),wt=o.n(kt);let Tt={baseURL:"/",timeout:6e4,proxy:{host:"localhost",port:"4000"}};const xt=wt().create(Tt);xt.interceptors.request.use((function(t){const{$Progress:e}=n["default"].prototype;return e&&e.start(),t}),(function(t){return Promise.reject(t)})),xt.interceptors.response.use((function(t){const{$Progress:e,$toast:o}=n["default"].prototype,{data:r,status:s}=t;let i="";return console.log("AJAX",t),200!=s&&(i="서버접속 실패"),r&&r.err&&(i=r.err),i?(o&&o.error(i),e&&e.fail(),console.warn(i),!1):(e&&e.finish(),r)}),(function(t){return Promise.reject(t)})),n["default"].prototype.$axios=xt;o(6981);function $t(t){const{title:e}=t.$options;if(e)return"function"===typeof e?e.call(t):e}const Et={mounted(){const t=$t(this);t&&(document.title=t)}};var Mt=Et;function It(t){const e=ft(),o=dt();(0,ht.Z)(o,e),n["default"].mixin(Mt);const r=new n["default"]({data:{url:t?t.url:""},router:e,store:o,vuetify:gt,render:t=>t(et)});return{app:r,router:e,store:o}}n["default"].config.productionTip=!1;var St=o(1151);const Pt={position:"bottom-center",timeout:3e3};n["default"].config.errorHandler=t=>{console.error(t),n["default"].$toast&&n["default"].$toast.error(t.message)},n["default"].use(St.ZP,Pt);var At=o(5334),Ct=o.n(At);const Ot={color:"rgb(143, 255, 199)",failedColor:"red",thickness:"3px"};n["default"].use(Ct(),Ot);var Zt=function(){var t=this,e=t._self._c;return e("div",[e("notify-component",{ref:"notify",attrs:{opt:t.options}})],1)},Nt=[],jt=function(){var t=this,e=t._self._c;return e("v-dialog",{attrs:{"max-width":t.options.width},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",[t.title?e("v-toolbar",{attrs:{color:"primary",dark:""}},[e("v-toolbar-title",[t._v(t._s(t.title))])],1):t._e(),e("v-card-text",{staticClass:"pt-4"},[t.options.icon?e("v-icon",{staticClass:"mr-4",attrs:{large:"",color:t.options.iconColor}},[t._v(t._s(t.options.icon))]):t._e(),t._v(" "+t._s(t.content)+" "),"prompt"===t.options.type?e("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("v-text-field",{attrs:{rules:[t=>!!t||"필수입력입니다."]},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1):t._e()],1),e("v-card-actions",{staticClass:"justify-end"},["alert"!==t.options.type?e("v-btn",{on:{click:t.cancle}},[t._v("취소")]):t._e(),e("v-btn",{attrs:{color:"primary"},on:{click:t.ok}},[t._v("확인")])],1)],1)],1)},Dt=[],Lt={name:"notifyComponent",props:["opt"],data(){return{dialog:!1,title:"",content:"내용입니다",text:"사용자 답변",valid:!0,options:this.opt,promise:null}},methods:{show(t,e,o){return new Promise(((n,r)=>{this.dialog&&this.close(),this.$nextTick((()=>{this.promise={resolve:n,reject:r},this.content=t,this.title=e,this.options=o,this.text=o.text,this.dialog=!0}))}))},close(t){this.promise.resolve(t),this.dialog=!1,this.promise=null,this.content="",this.title="",this.text="",this.valid=!0,this.options=this.opt},ok(){"prompt"===this.options.type?(this.$refs.form.validate(),this.$nextTick((()=>{this.valid&&this.close(this.text)}))):this.close(!0)},cancle(){this.close(!1)}}},Rt=Lt,Ut=(0,p.Z)(Rt,jt,Dt,!1,null,null,null),Ht=Ut.exports,Bt={components:{notifyComponent:Ht},name:"notifyInterface",methods:{alert(t,e="",o={}){return this.$refs.notify.show(t,e,{...this.options,...o,type:"alert"})},confirm(t,e="",o={}){return this.$refs.notify.show(t,e,{...this.options,...o,type:"confirm"})},prompt(t,e="",o={}){return this.$refs.notify.show(t,e,{...this.options,...o,type:"prompt"})}}},Ft=Bt,Kt=(0,p.Z)(Ft,Zt,Nt,!1,null,null,null),Wt=Kt.exports;const Xt={width:400,icon:"",iconColor:"orange",type:"alert",text:""};var Yt={install(t,e,o){const n=t.extend(Wt),r=new n({vuetify:e,data:{options:Object.assign(Xt,o)}});t.prototype.$nextTick((()=>{t.prototype.$notify=r.$mount(),document.getElementById("app").appendChild(r.$el)}))}};const qt={iconColor:"red"};n["default"].use(Yt,gt,qt);const{app:zt,router:Gt,store:Jt}=It();Gt.onReady((()=>{zt.$mount("#app")}))},640:function(t,e,o){"use strict";o.r(e);var n=o(8929),r=o.n(n);const s=o(6372),i={};s.keys().forEach((t=>{if("./index.js"!==t){const e=r()(t.replace(/(\.\/|\.js)/g,""));i[e]={namespaced:!0,...s(t)}}})),e["default"]=i},854:function(t,e,o){"use strict";o.r(e),o.d(e,{actions:function(){return a},getters:function(){return i},mutations:function(){return s},state:function(){return r}});var n=o(144);const r=()=>({member:null,token:null}),s={SET_MEMBER(t,e){t.member=e},SET_TOKEN(t,e){t.token=e}},i={},a={async initUser({commit:t}){const{$axios:e}=n["default"].prototype,o=await e.get("api/member/auth");o&&(t("SET_MEMBER",o.member),t("SET_TOKEN",o.token))},async duplicateCheck(t,{field:e,value:o}){const{$axios:r}=n["default"].prototype,s=await r.get(`/api/member/duplicateCheck/${e}/${o}`);return s},async createMember(t,e){const{$axios:o}=n["default"].prototype,r=await o.post("/api/member",e);return r},async signInLocal({commit:t},e){const{$axios:o}=n["default"].prototype,r=await o.post("/api/member/loginLocal",e);return r&&(t("SET_MEMBER",r.member),t("SET_TOKEN",r.token)),r},async initUser({commit:t}){const{$axios:e}=n["default"].prototype,o=await e.get("api/member/auth");return o&&(t("SET_MEMBER",o.member),t("SET_TOKEN",o.token)),!!o},async signOut({commit:t,state:e}){const{$axios:o}=n["default"].prototype,r=e.member.mb_name;await o.get("/api/member/signOut");return t("SET_MEMBER",null),t("SET_TOKEN",null),r}}},1676:function(t){const e={deepCopy(t){if(null===t||"object"!==typeof t)return t;const o=Array.isArray(t)?[]:{};for(const n of Object.keys(t))o[n]=e.deepCopy(t[n]);return o},async modelCall(t,...e){try{const o=await t(...e);return o}catch(o){return console.trace(o),{err:o.message}}},getIp(t){return t.ip.replace("::ffff:","")}};t.exports=e},6372:function(t,e,o){var n={"./index.js":640,"./user.js":854};function r(t){var e=s(t);return o(e)}function s(t){if(!o.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=s,t.exports=r,r.id=6372}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[736],(function(){return e(9804)}));t.O()}]);
//# sourceMappingURL=main.0f072823.js.map