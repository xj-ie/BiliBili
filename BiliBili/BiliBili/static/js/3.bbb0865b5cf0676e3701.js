webpackJsonp([3],{"4WyJ":function(e,t,s){e.exports=s.p+"static/img/rl_top.35edfde.png"},BHNi:function(e,t){},EC14:function(e,t,s){"use strict";var r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"popup-mask"},[s("div",{staticClass:"popup-box"},[s("div",{staticClass:"popup-titleBar"},[s("div",{staticClass:"popup-title"},[s("i",{staticClass:"topIcon"}),e._v(e._s(e.title)+"\n      ")]),e._v(" "),s("a",{staticClass:"popup-close",attrs:{href:"javascript:;"},on:{click:e.deleteFn}})]),e._v(" "),s("div",{staticClass:"popup-main"},[s("div",{staticClass:"popup-content"},[s("img",{staticClass:"popup-captchaImg",attrs:{src:e.src?e.src:e.captchaSrc},on:{click:e.refreshCaptcha}}),e._v(" "),s("p",{staticClass:"popup-change"},[s("a",{attrs:{href:"javascript:;",id:"changeCaptcha"},on:{click:e.refreshCaptcha}},[e._v("换一张")])]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.cacheImage,expression:"cacheImage"}],class:{"popup-text":!0,"popup-error":e.popupError},attrs:{placeholder:"请输入图片中的内容",type:"text"},domProps:{value:e.cacheImage},on:{focus:e.clearErr,input:function(t){t.target.composing||(e.cacheImage=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"popup-buttons"},[s("input",{staticClass:"popup-btn popup-btn-primary",attrs:{type:"button",value:e.yesBtn},on:{click:e.checkSmsCaptcha}}),e._v(" "),s("input",{staticClass:"popup-btn",attrs:{type:"button",value:e.cancelBtn},on:{click:e.deleteFn}})])])])])},staticRenderFns:[]};var n=s("VU/8")({data:function(){return{captchaSrc:"/captcha",popupError:!1,cacheImage:"",sonShow:this.show}},props:["show","title","yesBtn","cancelBtn","src"],watch:{show:function(e){this.sonShow=e}},methods:{refreshCaptcha:function(){this.$emit("refresh-event")},checkSmsCaptcha:function(){this.popupError=!1,this.$emit("dataFlag",{_status:!0,yzm:this.cacheImage,check:!0,event:"yes"})},clearErr:function(){this.popupError=!1},deleteFn:function(){this.$emit("dataFlag",{_status:!0,check:!1,event:"hide"})}},created:function(){this.refreshCaptcha()}},r,!1,function(e){s("VpqJ")},null,null);t.a=n.exports},EXyj:function(e,t,s){"use strict";var r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title-line"},[t("span",{staticClass:"tit",style:{fontSize:this.title.length>=10?"28px":"38px"}},[this._v(this._s(this.title))])])},staticRenderFns:[]};var n=s("VU/8")({props:["title"]},r,!1,function(e){s("T9AS")},null,null);t.a=n.exports},"Hzw/":function(e,t,s){"use strict";var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"top-banner"},[t("img",{attrs:{src:s("4WyJ")}})])}]};var n=s("VU/8")(null,r,!1,function(e){s("cZLh")},null,null);t.a=n.exports},J0iV:function(e,t){},JRNG:function(e,t){},Ouqr:function(e,t,s){"use strict";var r={props:["keyValue","width","top","left"],data:function(){return{emails:[],currentSelectIndex:0,emailSource:["qq.com","163.com","126.com","gmail.com","foxmail.com","sina.com","yeah.net","sohu.com","outlook.com","aliyun.com","yahoo.com"]}},watch:{keyValue:function(){for(var e=0;e<this.emails.length;e++)if(this.emails[e]===this.keyValue)return void(this.emails=[]);this.keyValue.search("@")<=0&&(this.emails=[]);var t=[],s=[];if(this.keyValue.search("@")>0&&2===this.keyValue.split("@").length){for(var r=0;r<this.emailSource.length;r++)t[r]=this.keyValue.split("@")[0]+"@"+this.emailSource[r];for(var n=0;n<t.length;n++)-1!==t[n].indexOf(this.keyValue)&&s.push(t[n]);this.emails=s}}},methods:{resetAutoData:function(){this.$emit("cb-value",{value:this.emails[this.currentSelectIndex]}),this.currentSelectIndex=0,this.emails[this.currentSelectIndex]===this.keyValue&&(this.emails=[])},selectEmail:function(e){this.currentSelectIndex=e,this.resetAutoData()},bindEvent:function(e){var t=this.emails.length;13===e.keyCode&&t&&this.resetAutoData(),38===e.keyCode&&t&&(this.currentSelectIndex--,this.currentSelectIndex<0&&(this.currentSelectIndex=t-1),this.username=this.emails[this.currentSelectIndex]),40===e.keyCode&&t&&(this.currentSelectIndex++,this.currentSelectIndex>t-1&&(this.currentSelectIndex=0),this.username=this.emails[this.currentSelectIndex])}},mounted:function(){document.addEventListener("keydown",this.bindEvent)}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return 0!=e.emails.length?s("div",{staticClass:"autocomplete",style:{width:e.width,left:e.left,top:e.top}},[s("ul",e._l(e.emails,function(t,r){return s("li",{key:r,class:r===e.currentSelectIndex?"on":"",on:{click:function(t){e.selectEmail(r)}}},[e._v(e._s(t))])}))]):e._e()},staticRenderFns:[]};var a=s("VU/8")(r,n,!1,function(e){s("oIHz")},"data-v-715fe70a",null);t.a=a.exports},T9AS:function(e,t){},VT3b:function(e,t,s){"use strict";var r=s("//Fk"),n=s.n(r);t.a=function(e,t){return new n.a(function(s,r){var n="",a="";if(t&&(n=t.params||{},a=t.cbName||"cb",e)){var i="jsonp_"+Math.random();i=i.replace(".",""),window[i]=function(e){s(e),c.removeEventListener("error",r,!1),o.removeChild(c)};var c=document.createElement("script");c.addEventListener("error",r,!1),n[a]=i,c.src=e+"?"+function(e){var t=[];for(var s in e)t.push(s+"="+e[s]);return t.join("&")}(n);var o=document.getElementsByTagName("head")[0];o.appendChild(c)}})}},VpqJ:function(e,t){},YBja:function(e,t,s){"use strict";var r=s("//Fk"),n=s.n(r),a=s("mtWM"),i=s.n(a),c=s("mw3O"),o={url:"",baseURL:"",method:"get",transformRequest:[function(e){return c.stringify(e)}],timeout:3e3,withCredentials:!0};s("VT3b");s.d(t,"f",function(){return p}),s.d(t,"c",function(){return h}),s.d(t,"j",function(){return d}),s.d(t,"i",function(){return f}),s.d(t,"d",function(){return m}),s.d(t,"h",function(){return v}),s.d(t,"g",function(){return g}),s.d(t,"a",function(){return _}),s.d(t,"e",function(){return b}),s.d(t,"b",function(){return w});var l=i.a.create(o);l.interceptors.response.use(function(e){return-101===e.data.code&&(window.location.href="https://passport.bilibili.com/login?gourl="+encodeURIComponent(location.href)),e},function(e){return n.a.reject(e)});var u={passport:{checkUname:"/web/generic/check/nickname",countryList:"/web/generic/country/list",checkTel:"/register/checkTelFormat",sendTel:"/web/sms/general/v2/send",sendMail:"/web/mail/general/send",regTel:"/web/reg/tel",regMail:"/web/reg/mail",getGeeTest:"/web/captcha/combine",checkUser:"/web/reset/check/user",sendSms:"/web/reset/msg/send",checkPassword:"/web/generic/check/leak/pwd",checkTelPost:"/web/generic/check/tel/format",resetPwd:"/web/reset/pwd",fastReg:"/web/reg/generic/fast"},base:{checkLogin:"//api.bilibili.com/nav"}},p=function(e){return l.get(u.passport.getGeeTest,{params:e})},h=function(e){return l.get(u.passport.checkUname,{params:e})},d=function(e){return l.post(u.passport.sendTel,e)},f=function(e){return l.post(u.passport.sendMail,e)},m=function(){return l.get(u.passport.countryList)},v=function(e){return l.post(u.passport.regTel,e)},g=function(e){return l.post(u.passport.regMail,e)},_=function(e){return l.post(u.passport.checkPassword,e)},b=function(e){return l.post(u.passport.fastReg,e)},w=function(e){return l.post(u.passport.checkTelPost,e)}},cZLh:function(e,t){},"lkP/":function(e,t){},m87x:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("woOf"),n=s.n(r),a=s("//Fk"),i=s.n(a),c=(s("fLxU"),s("mtWM")),o=s.n(c),l=s("EC14"),u={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"popup-mask"},[s("div",{staticClass:"popup-box"},[s("div",{staticClass:"popup-titleBar"},[s("div",{staticClass:"popup-title"},[s("i",{staticClass:"topIcon"}),e._v(e._s(e.title)+"\n      ")]),e._v(" "),s("a",{staticClass:"popup-close",attrs:{href:"javascript:;"},on:{click:e.closeFn}})]),e._v(" "),s("div",{staticClass:"popup-main"},[s("div",{staticClass:"popup-content"},[s("p",{staticClass:"popup-message"},[e._v(e._s(e.contentText))])]),e._v(" "),s("div",{staticClass:"popup-buttons"},[e.yesBtn?s("input",{staticClass:"popup-btn popup-btn-primary",attrs:{type:"button",value:e.yesBtn},on:{click:e.yesFn}}):e._e(),e._v(" "),e.cancelBtn?s("input",{staticClass:"popup-btn",attrs:{type:"button",value:e.cancelBtn},on:{click:e.deleteFn}}):e._e()])])])])},staticRenderFns:[]};var p=s("VU/8")({props:["show","title","contentText","yesBtn","cancelBtn"],methods:{yesFn:function(){this.$emit("yes-event",{show:!1})},deleteFn:function(){this.$emit("cancel-event",{show:!1})},closeFn:function(){this.$emit("close-event",{show:!1})}}},u,!1,function(e){s("lkP/")},"data-v-5b30ea74",null).exports,h=s("Hzw/"),d=s("EXyj"),f=s("xXit"),m=s("Ouqr"),v=s("jeMz"),g=s("YBja"),_={components:{PopupApp:l.a,AlertVue:p,TopBanner:h.a,TitleLine:d.a,Checkbox:f.a,EmailSelection:m.a},data:function(){return{loginFlag:!0,uname:"",userpwd:"",code:"",info:"",country_code:"",successIcon:"none",maskFlag:!1,safeFlag:"none",captcha:"",checkIsPass:!1,canGetCaptch:60,reqCHtml:"点击获取",errorArr:{unameError:"",userpwdError:"",captchErr:"",infoErr:""},countryArr:[],isAgree:!1,alertComponets:{alertFlag:!1,title:"系统提示",content:"",yesBtn:"确定"},passwordLv:{showFlag:!1,text:"",yesBtn:"修改密码",cancelBtn:"继续注册"},urlKey:"",goUrl:"",type:0,captchaObj:null,key:"",imgPc:"//passport.bilibili.com/web/captcha/img",randomNumber:Math.random(),geeTestResult:null,hasVerify:null,isBan:!1,hasMail:!0}},watch:{$route:function(){this.testFn()}},methods:{urlGetJson:function(e){for(var t=e.substring(e.indexOf("?")+1,e.length).split("&"),s={},r=0;r<t.length;r++){var n=t[r].split("=");s[n[0]]=n[1]}return s},checkPassword:function(e){var t,s,r=this.userpwd,n=r.length;if(this.errorArr.userpwdError=n<6?"密码不能小于6个字符":n>16?"密码不能大于16个字符":"",0===n)return 1;if(/.*[\u4e00-\u9fa5]+.*$/.test(r))return-1;var a,i,c=(t=/\d/.test(r))+(s=/[a-z]/.test(r))+(a=/[A-Z]/.test(r))+(i=this.corpses(e));return n<6?1:1==c?2:c>=3&&i&&t&&(s||a)?5:t&&(s||a)?3:i&&(t||s||a)?4:void 0},checkUname:function(){var e=this;return new i.a(function(t){e.uname.trim().length?Object(g.c)({nickName:e.uname}).then(function(s){t();var r=s.data;Object(v.k)("register_checkUname_success",r.status),0!==r.code?e.errorArr.unameError=r.message:e.errorArr.unameError=""}).catch(function(){t(),e.errorArr.unameError="服务器出错"}):(e.errorArr.unameError="请告诉我你的昵称吧",t())})},checkNeedPc:function(){this.checkIsPass||(this.errorArr.infoErr="",this.info?-1===this.info.indexOf("@")&&"mail"===this.$route.path.split("/")[1]?this.errorArr.infoErr="邮箱格式不正确":0===this.type?this.maskFlag=!0:this.captchaObj.verify():"phone"===this.$route.path.split("/")[1]?this.errorArr.infoErr="请输入手机号":this.errorArr.infoErr="亲，请填写邮箱号")},sendHandle:function(){var e=this,t=this.$route.path.split("/")[1],s={},r={key:this.key,captchaType:6};"phone"===t?(r.type=1,r.cid=this.country_code,r.tel=this.info):(r.type=16,r.email=this.info),1===this.type?s=n()({},r,this.geeTestResult):0===this.type&&(r.captcha=this.captcha,s=n()({},r)),"phone"===t?Object(g.j)(s).then(function(t){return e.sendCb(t)}):Object(g.i)(s).then(function(t){return e.sendCb(t)})},sendCb:function(e){var t=this,s=e.data;if(Object(v.k)("register_sendSms_success",s.code),2400===s.code)this.checkIsPass=!1,this.initFn();else if(0!==s.code)this.checkIsPass=!1,this.reqCHtml="重新获取验证码",this.errorArr.captchErr=s.message;else{this.checkIsPass=!0,this.errorArr.captchErr="验证码已发送，5分钟内有效","phone"===this.$route.path.split("/")[1]&&(this.hasVerify=this.country_code);var r=null;r=setInterval(function(){if(t.canGetCaptch--,t.canGetCaptch<=0)return clearInterval(r),t.reqCHtml="重新获取验证码",t.canGetCaptch=60,t.checkIsPass=!1,!1;t.reqCHtml=t.canGetCaptch+"秒后重新获取"},1e3)}},refreshFn:function(){this.randomNumber=Math.random()},checkPass:function(){var e=this.checkPassword(this.userpwd);this.safeFlag="block",e<1?this.Weak():e>0&&e<2?this.Weak():2==e?this.Medium1():3==e?this.Medium2():4==e?this.Medium3():5==e&&this.Tough()},Weak:function(){$(".a_pw").empty(),$(".a_pw").append("<div class='safe_line bc0001'></div><div class='safe_line e7e7e7e'></div><div class='safe_line e7e7e7e'></div><div class='safe_line e7e7e7e'></div><div class='safe_line e7e7e7e'></div><span style='color:#bc0001'>弱</span>")},Medium1:function(){$(".a_pw").empty(),$(".a_pw").append("<div class='safe_line bc0001'></div><div class='safe_line ff9537'></div><div class='safe_line e7e7e7e'></div><div class='safe_line e7e7e7e'></div><div class='safe_line e7e7e7e'></div><span style='color:#ff9537'>中</span>")},Medium2:function(){$(".a_pw").empty(),$(".a_pw").append("<div class='safe_line bc0001'></div><div class='safe_line ff9537'></div><div class='safe_line ffd800'></div><div class='safe_line e7e7e7e'></div><div class='safe_line e7e7e7e'></div><span style='color:#ffd800'>中</span>")},Medium3:function(){$(".a_pw").empty(),$(".a_pw").append("<div class='safe_line bc0001'></div><div class='safe_line ff9537'></div><div class='safe_line ffd800'></div><div class='safe_line b5dc05'></div><div class='safe_line e7e7e7e'></div><span style='color:#ffd800'>中</span>")},Tough:function(){$(".a_pw").empty(),$(".a_pw").append("<div class='safe_line bc0001'></div><div class='safe_line ff9537'></div><div class='safe_line ffd800'></div><div class='safe_line b5dc05'></div><div class='safe_line c519'></div><span>安全</span>")},corpses:function(){for(var e=/./g,t=this.userpwd.match(e),s=0;s<t.length;s++){var r=(e=/\d/).test(t[s]),n=(e=/[a-z]/).test(t[s]),a=(e=/[A-Z]/).test(t[s]);if(!r&&!n&&!a)return!0}return!1},registerFn:function(){var e=this,t=this.$route.path.split("/")[1],s={nickName:this.uname,code:this.code,pwd:this.userpwd,gourl:this.goUrl};"phone"===t?(s.tel=this.info,s.cid=this.country_code,s.plat=0,Object(g.h)(s).then(function(t){e.registerCb(t)})):(s.mail=this.info,Object(g.g)(s).then(function(t){e.registerCb(t)}))},registerCb:function(e){var t=e.data;0===t.code?("phone"===this.$route.path.split("/")[1]?Object(v.k)("register_phone_success"):Object(v.k)("register_mail_success"),window.location.href=t.data.redirectUrl):1005===t.code||1006===t.code||1007===t.code||1206===t.code||1208===t.code||1207===t.code?this.errorArr.captchErr=t.message:-618===t.code||-619===t.code||-645===t.code||2001===t.code?this.errorArr.unameError=t.message:(this.$msgbox({title:"提示",type:"error",context:t.message}),this.showRegisterResponce())},showMaskFlag:function(e){this.maskFlag=!e._status,this.checkIsPass=e.check,e.yzm&&(this.captcha=e.yzm),this.checkIsPass&&this.sendHandle(),"yes"===e.event?this.yesCodePopup():this.hideCodePopup()},submitAll:function(){var e=this;if(this.isAgree){for(var t in Object(v.k)("register_pc_submit"),this.errorArr)this.errorArr[t]="";this.checkUname().then(function(){for(var t in e.checkPass(),e.info?-1===e.info.indexOf("@")&&"mail"===e.$route.path.split("/")[1]&&(e.errorArr.infoErr="邮箱格式不正确"):"phone"===e.$route.path.split("/")[1]?e.errorArr.infoErr="请输入手机号":e.errorArr.infoErr="亲，请填写邮箱号",e.code||(e.errorArr.captchErr="请输入验证码"),"phone"===e.$route.path.split("/")[1]&&null!==e.hasVerify&&e.hasVerify!==e.country_code&&(e.errorArr.captchErr="信息不一致，请重新确认"),e.errorArr)if(e.errorArr[t])return;Object(g.a)({user:e.uname+","+e.info,password:e.userpwd}).then(function(t){var s=t.data;Object(v.k)("register_checkUser_success",s.code),0===s.code?e.registerFn():(e.passwordLv.text=s.message,e.passwordLv.showFlag=!0,e.showWeakPopup(),Object(v.k)("registerpassword_riskalert_web_phone_popup"))})})}},getAlertFn:function(e){this.alertComponets.alertFlag=e.show,this.hideRegisterResponce()},getMessageFn:function(e){this.alertComponets.alertFlag=e.show,this.yesRegisterResponce()},setpwdPc:function(e){Object(v.k)("registerpassword_riskalert_web_phone_quitclick","modify"),this.passwordLv.text="",this.passwordLv.showFlag=e.show,this.fixKeyWeakPopup()},cancelPc:function(e){this.passwordLv.text="",this.passwordLv.showFlag=e.show;Object(v.k)("registerpassword_riskalert_web_phone_passclick"),this.registerFn(),this.registerWeakPopup()},closepwd:function(e){Object(v.k)("registerpassword_riskalert_web_phone_passclick","close"),this.passwordLv.text="",this.passwordLv.showFlag=e.show,this.hideWeakPopup()},initFn:function(){var e=this;Object(g.f)({plat:6}).then(function(t){var s=t.data;0===s.code&&(e.key=s.data.result.key,1===s.data.type?(Object(v.k)("register_confirm_geetest"),window.initGeetest({gt:s.data.result.gt,challenge:s.data.result.challenge,offline:!s.data.result.success,new_captcha:!0,product:"bind"},function(t){e.captchaObj=t,e.type=1,t.onSuccess(function(){var s=t.getValidate();e.geeTestResult={challenge:s.geetest_challenge,validate:s.geetest_validate,seccode:s.geetest_seccode},e.sendHandle(),setTimeout(function(){t.reset()},1e3)}).onError(function(){})})):0===s.data.type&&(Object(v.k)("register_confirm_captcha"),e.type=0))}).catch(function(){e.$msgbox({title:"提示",type:"error",context:"服务器错误，请刷新页面重试"})})},getNewUname:function(e){this.info=e.value},focusName:function(){Object(v.k)("register_focus_uname",(new Date).getTime())},blurName:function(){Object(v.k)("register_blur_uname",(new Date).getTime())},focusPassword:function(){Object(v.k)("register_focus_password",(new Date).getTime())},blurPassword:function(){Object(v.k)("register_blur_password",(new Date).getTime())},focusTel:function(){Object(v.k)("register_focus_tel",(new Date).getTime())},blurTel:function(){Object(v.k)("register_blur_tel",(new Date).getTime())},focusCode:function(){Object(v.k)("register_focus_code",(new Date).getTime())},blurCode:function(){Object(v.k)("register_blur_code",(new Date).getTime())},changeCountry:function(){Object(v.k)("register_change_country",(new Date).getTime())},changeAgree:function(){Object(v.k)("register_change_agree",(new Date).getTime())},showCodePopup:function(){Object(v.k)("register_show_codePopup",(new Date).getTime())},yesCodePopup:function(){Object(v.k)("register_yes_codePopup",(new Date).getTime())},hideCodePopup:function(){Object(v.k)("register_hide_codePopup",(new Date).getTime())},showRegisterResponce:function(){Object(v.k)("register_show_responce",(new Date).getTime())},yesRegisterResponce:function(){Object(v.k)("register_yes_responce",(new Date).getTime())},hideRegisterResponce:function(){Object(v.k)("register_hide_responce",(new Date).getTime())},showWeakPopup:function(){Object(v.k)("register_show_weakPopup",(new Date).getTime())},fixKeyWeakPopup:function(){Object(v.k)("register_fixKey_weakPopup",(new Date).getTime())},registerWeakPopup:function(){Object(v.k)("register_register_weakPopup",(new Date).getTime())},hideWeakPopup:function(){Object(v.k)("register_hide_weakPopup",(new Date).getTime())},testFn:function(){this.hasMail=!1,this.hasMail||"mail"!==this.$route.path.split("/")[1]||this.$router.replace("/phone")}},created:function(){var e=this;this.testFn(),o.a.get("//s1.hdslb.com/bfs/seed/jinkela/short/switch.json").then(function(t){var s=t.data;s&&(e.isBan=Boolean(s.disable))})},mounted:function(){var e=this;this.initFn(),Object(g.d)().then(function(t){var s=t.data;if(Object(v.k)("countryList_init",s.code),0===s.code){s.data.common.push({id:"",cname:"--其它--",country_id:"",disabled:!0});for(var r=s.data.common.concat(s.data.others),n=0;n<r.length;n++)e.$set(e.countryArr,n,r[n]);e.country_code=e.countryArr[0].id}});var t=window.location.toString();"game"===this.urlGetJson(t).type&&this.isMobile&&(this.loginFlag=!1,this.urlKey="?type=game");var s=this.$route.query.gourl;this.goUrl=s?decodeURIComponent(s):document.referrer||"",$.ajax({url:"//api.bilibili.com/nav",type:"get",dataType:"jsonp",data:{type:"jsonp"}}).done(function(e){e&&e.data&&e.data.isLogin&&(window.location.href="//www.bilibili.com")})}},b={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("top-banner"),e._v(" "),s("title-line",{attrs:{title:"注册"}}),e._v(" "),s("div",{staticClass:"register-container"},[s("form",{staticClass:"report-wrap-module",attrs:{id:"registerForm",method:"post",onsubmit:"return false;"}},[s("div",{staticClass:"form-group"},[s("el-input",{attrs:{disabled:e.isBan,name:"uname",placeholder:e.isBan?"系统升级中，敬请谅解":"昵称"},on:{focus:e.focusName,blur:e.blurName,input:e.checkUname},model:{value:e.uname,callback:function(t){e.uname=t},expression:"uname"}}),e._v(" "),s("p",{staticClass:"error-message"},[e._v(e._s(e.errorArr.unameError))])],1),e._v(" "),s("div",{staticClass:"register-hidden-gruop"},[s("div",{staticClass:"safe_window",style:{display:e.safeFlag}},[s("p",[e._v("安全系数")]),e._v(" "),s("div",{staticClass:"a_pw"})])]),e._v(" "),s("div",{staticClass:"form-group"},[s("el-input",{attrs:{disabled:e.isBan,type:"password",name:"userpwd",placeholder:e.isBan?"系统升级中，敬请谅解":"密码（6-16个字符组成，区分大小写）"},on:{focus:e.focusPassword,blur:e.blurPassword,input:e.checkPass},model:{value:e.userpwd,callback:function(t){e.userpwd=t},expression:"userpwd"}}),e._v(" "),s("p",{staticClass:"error-message"},[e._v(e._s(e.errorArr.userpwdError))])],1),e._v(" "),s("div",{staticClass:"register-hidden-gruop"}),e._v(" "),s("div",{staticClass:"form-group"},["phone"===e.$route.path.split("/")[1]?s("el-input",{staticClass:"input-with-select",attrs:{disabled:e.isBan,name:"tel",placeholder:e.isBan?"系统升级中，敬请谅解":"填写常用手机号"},on:{focus:e.focusTel,blur:e.blurTel},model:{value:e.info,callback:function(t){e.info=t},expression:"info"}},[s("el-select",{attrs:{slot:"prepend",name:"country_code",placeholder:"请选择国家"},on:{change:e.changeCountry},slot:"prepend",model:{value:e.country_code,callback:function(t){e.country_code=t},expression:"country_code"}},e._l(e.countryArr,function(e){return s("el-option",{key:e.id,attrs:{label:e.cname,value:e.id,disabled:e.disabled}})}))],1):e._e(),e._v(" "),"mail"===e.$route.path.split("/")[1]?s("el-input",{attrs:{disabled:e.isBan,name:"mail",placeholder:e.isBan?"系统升级中，敬请谅解":"填写常用邮箱"},model:{value:e.info,callback:function(t){e.info=t},expression:"info"}}):e._e(),e._v(" "),"mail"===e.$route.path.split("/")[1]?s("email-selection",{attrs:{keyValue:e.info,top:"48px"},on:{"cb-value":e.getNewUname}}):e._e(),e._v(" "),s("p",{staticClass:"error-message"},[e._v(e._s(e.errorArr.infoErr))])],1),e._v(" "),s("div",{staticClass:"form-group register-hidden-gruop text-right"},["phone"===e.$route.path.split("/")[1]&&e.hasMail?s("router-link",{attrs:{to:{path:"/mail"}}},[e._v("用邮箱注册>")]):e._e(),e._v(" "),"phone"!==e.$route.path.split("/")[1]&&e.hasMail?s("router-link",{attrs:{to:{path:"/phone"}}},[e._v("用手机注册>")]):e._e()],1),e._v(" "),s("div",{staticClass:"form-group yzm yzm_buttom_a back-fff"},[s("el-input",{staticClass:"code-input",attrs:{disabled:e.isBan,placeholder:"phone"===e.$route.path.split("/")[1]?e.isBan?"系统升级中，敬请谅解":"请输入短信验证码":e.isBan?"系统升级中，敬请谅解":"请输入邮件验证码",name:"code"},on:{focus:e.focusCode,blur:e.blurCode},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),e._v(" "),s("div",{staticClass:"check",style:{display:e.successIcon},attrs:{id:"captchCheck"}}),e._v(" "),s("el-button",{staticClass:"yzm-buttom",attrs:{disabled:e.checkIsPass||e.isBan,type:"primary"},on:{click:e.checkNeedPc}},[e._v(e._s(e.reqCHtml))]),e._v(" "),s("p",{staticClass:"error-message"},[e._v(e._s(e.errorArr.captchErr))])],1),e._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"register-agree"},[s("checkbox",{staticClass:"check-box",attrs:{name:"agree"},on:{change:e.changeAgree},model:{value:e.isAgree,callback:function(t){e.isAgree=t},expression:"isAgree"}}),e._v("\n          我已同意"),s("a",{attrs:{target:"_blank",href:"https://www.bilibili.com/protocal/licence.html"}},[e._v("《哔哩哔哩弹幕网用户使用协议》")]),e._v("和"),s("a",{attrs:{target:"_blank",href:"https://www.bilibili.com/blackboard/privacy-pc.html"}},[e._v("《哔哩哔哩隐私政策》")])],1)]),e._v(" "),s("div",{staticClass:"form-group"},[s("el-button",{staticClass:"btn-full",attrs:{disabled:!e.isAgree||e.isBan,type:"primary"},on:{click:e.submitAll}},[e._v("注册")])],1),e._v(" "),e._m(0)]),e._v(" "),e.maskFlag?s("popup-app",{attrs:{title:"请输入验证码","yes-btn":"确定","cancel-btn":"取消",src:e.imgPc+"?t="+e.randomNumber+"&key="+e.key},on:{"refresh-event":e.refreshFn,dataFlag:e.showMaskFlag}}):e._e(),e._v(" "),e.alertComponets.alertFlag?s("alert-vue",{attrs:{title:e.alertComponets.title,"content-text":e.alertComponets.content,"yes-btn":e.alertComponets.yesBtn},on:{"close-event":e.getAlertFn,"yes-event":e.getMessageFn}}):e._e(),e._v(" "),e.passwordLv.showFlag?s("alert-vue",{attrs:{title:"密码强度提示","content-text":e.passwordLv.text,"yes-btn":e.passwordLv.yesBtn,"cancel-btn":e.passwordLv.cancelBtn},on:{"yes-event":e.setpwdPc,"cancel-event":e.cancelPc,"close-event":e.closepwd}}):e._e()],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"register-hidden-gruop text-right",attrs:{id:"register_pc_direct_login"}},[t("a",{attrs:{href:"/login"}},[this._v("已有账号，直接登录>")])])}]};var w=s("VU/8")(_,b,!1,function(e){s("J0iV"),s("JRNG")},"data-v-258c41ba",null);t.default=w.exports},oIHz:function(e,t){},xXit:function(e,t,s){"use strict";var r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{class:{"checkbox-bwxr":"mobile"!=e.type,"checkbox-m-bwxr":"mobile"==e.type,active:e.flag}},[s("input",{attrs:{name:e.name,type:"checkbox"},domProps:{checked:e.flag},on:{change:function(t){e.getValueFn(e.flag)}}})])},staticRenderFns:[]};var n=s("VU/8")({name:"checkbox",model:{prop:"flag",event:"change"},props:["flag","type","name"],methods:{getValueFn:function(e){var t=!e;this.$emit("change",t)}}},r,!1,function(e){s("BHNi")},"data-v-5641f300",null);t.a=n.exports}});