(this["webpackJsonp01-react-project"]=this["webpackJsonp01-react-project"]||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return c}));var r=n(58),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"ab73fc98-562a-4a12-b515-e46758dbe317"}}),i={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getChangePage:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},deleteSubscription:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},postSubscription:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))}},s={getUserProfile:function(e){return a.get("profile/"+e).then((function(e){return e.data}))},getUserStatus:function(e){return a.get("profile/status/"+e).then((function(e){return e.data}))},updateUserStatus:function(e){return a.put("profile/status",{status:e}).then((function(e){return e.data}))}},c={getAuthData:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},logout:function(){return a.delete("auth/login").then((function(e){return e.data}))}}},24:function(e,t,n){e.exports={input:"Login_input__1YUtO",inputEffect:"Login_inputEffect__20HOa",errorApi:"Login_errorApi__1M4sM"}},27:function(e,t,n){e.exports={friend:"FriendsIcon_friend__2QrcG",friendsItem:"FriendsIcon_friendsItem__2T49e",friendUserAvatar:"FriendsIcon_friendUserAvatar__2Dx6l",friendUserName:"FriendsIcon_friendUserName__3zeQQ"}},36:function(e,t,n){e.exports={friendsIcon:"Friends_friendsIcon__ULMT8"}},37:function(e,t,n){e.exports={header:"Header_header__1Sjq4",loginBlock:"Header_loginBlock__2RXYb"}},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return O}));var r=n(4),a=n.n(r),i=n(15),s=n(23),c=n(2),u=n(12),o="ADD_POST",d="SET_USER_PROFILE",l="SET_USER_STATUS",f="UPDATE_USER_STATUS",p="DELETE_POST",j={posts:[{id:1,message:"\u0414\u0430\u0432\u0430\u0439 \u0434\u0440\u0443\u0436\u0438\u0442\u044c!",likesCount:50},{id:2,message:"\u042d\u0442\u043e \u043c\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0441\u0442 :)",likesCount:10}],profile:null,status:""},b=function(e){return{type:o,text:e}},m=function(e){return{type:f,status:e}},h=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getUserProfile(e);case 2:r=t.sent,n({type:d,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getUserStatus(e);case 2:r=t.sent,n({type:l,status:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateUserStatus(e);case 2:0===t.sent.resultCode&&n(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[{id:3,message:t.text,likesCount:0}])});case d:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case l:case f:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case p:return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}},44:function(e,t,n){"use strict";var r=n.p+"static/media/preloader.1c72b15f.gif",a=n(1);t.a=function(){return Object(a.jsx)("span",{children:Object(a.jsx)("img",{src:r})})}},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(23),a=n(2),i="ADD-MESSAGE",s={messages:[{id:1,message:"\u0413\u0430\u0432 \u0413\u0430\u0432!"},{id:2,message:"\u0425\u043e\u0447\u0443 \u043a\u0443\u0441\u0430\u0442\u044c \u0441\u0435\u0431\u044f \u0437\u0430 \u0445\u0432\u043e\u0441\u0442!"},{id:3,message:"\u041f\u043e\u0440\u0430 \u0433\u0440\u044b\u0437\u0442\u044c \u0442\u0430\u043f\u043a\u0438"},{id:4,message:"\u041f\u043e\u0448\u043b\u0438 \u0433\u0443\u043b\u044f\u0442\u044c"},{id:5,message:"\u041e\u0431\u043d\u0438\u043c\u0438 \u043c\u0435\u043d\u044f"}],dialogs:[{id:1,name:"\u041a\u043e\u0440\u0433\u0438",img:"https://porodisobak.ru/wp-content/uploads/2021/07/velsh-korgi-pembrok-11.jpg"},{id:2,name:"\u041e\u0432\u0447\u0430\u0440\u043a\u0430",img:"https://nekusaka.com/wp-content/uploads/2017/02/german_shepherd14.jpg"},{id:3,name:"\u041b\u043e\u0431\u0440\u0430\u0434\u043e\u0440",img:"https://38.img.avito.st/image/1/c2sm17ax34IQYF2PTI4wD9h034aadtWA"},{id:4,name:"\u0414\u043e\u0431\u0435\u0440\u043c\u0430\u043d",img:"https://sun9-41.userapi.com/impg/n-tSBou1cVzoRXJKjMRf9VElWsnynsTsl1kT7A/e65NXEbZjLQ.jpg?size=604x585&quality=96&sign=7c6849290d6c120693b6882694602e88&type=album"},{id:5,name:"\u0428\u043f\u0438\u0446",img:"https://sun9-9.userapi.com/impf/Rc_cafcy2i0gvFB_D93VZuJWEQO6kr-KAhp4Zw/uF6JVyDWbCY.jpg?size=604x604&quality=96&sign=dde08087567a35f8cf516e2b14f7775c&type=album"}]},c=function(e){return{type:i,dialogsNewMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;return t.type===i?Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:t.dialogsNewMessageBody}])}):e}},54:function(e,t,n){"use strict";n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return w})),n.d(t,"e",(function(){return N})),n.d(t,"d",(function(){return S}));var r=n(4),a=n.n(r),i=n(15),s=n(23),c=n(2),u=n(12),o="FOLLOW",d="UNFOLLOW",l="SET_USERS",f="SET_CURRENT_PAGE",p="SET_TOTAL_COUNT",j="TOGGLE_IS_FETCHING",b="TOGGLE_IS_FOLLOWING_PROGRESS   ",m={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},h=function(e){return{type:o,userId:e}},g=function(e){return{type:d,userId:e}},O=function(e){return{type:l,users:e}},v=function(e){return{type:j,isFetching:e}},x=function(e,t){return{type:b,isFetching:e,userId:t}},_=function(e,t){return function(){var n=Object(i.a)(a.a.mark((function n(r){var i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(v(!0)),n.next=3,u.c.getUsers(e,t);case 3:i=n.sent,r(v(!1)),r(O(i.items)),r((a=i.totalCount,{type:p,totalUsersCount:a}));case 7:case"end":return n.stop()}var a}),n)})));return function(e){return n.apply(this,arguments)}}()},w=function(e,t){return function(){var n=Object(i.a)(a.a.mark((function n(r){var i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:f,currentPage:e}),r(v(!0)),n.next=4,u.c.getChangePage(e,t);case 4:i=n.sent,r(v(!1)),r(O(i.items));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(x(!0,e)),t.next=3,u.c.deleteSubscription(e);case 3:0==t.sent.resultCode&&n(g(e)),n(x(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(x(!0,e)),t.next=3,u.c.postSubscription(e);case 3:0==t.sent.resultCode&&n(h(e)),n(x(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(c.a)(Object(c.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(c.a)(Object(c.a)({},e),{},{followed:!0}):e}))});case d:return Object(c.a)(Object(c.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(c.a)(Object(c.a)({},e),{},{followed:!1}):e}))});case l:return Object(c.a)(Object(c.a)({},e),{},{users:t.users});case f:return Object(c.a)(Object(c.a)({},e),{},{currentPage:t.currentPage});case p:return Object(c.a)(Object(c.a)({},e),{},{totalUsersCount:t.totalUsersCount});case j:return Object(c.a)(Object(c.a)({},e),{},{isFetching:t.isFetching});case b:return Object(c.a)(Object(c.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(s.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}}},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},7:function(e,t,n){e.exports={nav:"Navbar_nav__MS0Ji",item:"Navbar_item__17KiI",activeLink:"Navbar_activeLink__1HVzC",friendsIconBlock:"Navbar_friendsIconBlock__3nBkK",friendsIconTitle:"Navbar_friendsIconTitle___HfRT"}},90:function(e,t,n){},91:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,113)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),i(e),s(e)}))},a=n(25),i=n(4),s=n.n(i),c=n(15),u=n(2),o=n(12),d="SET_USER_DATA",l={id:null,email:null,login:null,isAuth:!1},f=function(e,t,n,r){return{type:d,data:{id:e,email:t,login:n,isAuth:r}}},p=function(){return function(){var e=Object(c.a)(s.a.mark((function e(t){var n,r,a,i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.getAuthData();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,i=r.login,c=r.email,t(f(a,i,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;return t.type===d?Object(u.a)(Object(u.a)({},e),t.data):e},b=n(53),m={friends:[{id:1,name:"\u041a\u043e\u0440\u0433\u0438",img:"https://porodisobak.ru/wp-content/uploads/2021/07/velsh-korgi-pembrok-11.jpg"},{id:2,name:"\u041e\u0432\u0447\u0430\u0440\u043a\u0430",img:"https://nekusaka.com/wp-content/uploads/2017/02/german_shepherd14.jpg"},{id:3,name:"\u041b\u043e\u0431\u0440\u0430\u0434\u043e\u0440",img:"https://38.img.avito.st/image/1/c2sm17ax34IQYF2PTI4wD9h034aadtWA"},{id:4,name:"\u0414\u043e\u0431\u0435\u0440\u043c\u0430\u043d",img:"https://sun9-41.userapi.com/impg/n-tSBou1cVzoRXJKjMRf9VElWsnynsTsl1kT7A/e65NXEbZjLQ.jpg?size=604x585&quality=96&sign=7c6849290d6c120693b6882694602e88&type=album"},{id:5,name:"\u0428\u043f\u0438\u0446",img:"https://sun9-9.userapi.com/impf/Rc_cafcy2i0gvFB_D93VZuJWEQO6kr-KAhp4Zw/uF6JVyDWbCY.jpg?size=604x604&quality=96&sign=dde08087567a35f8cf516e2b14f7775c&type=album"}]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;return e},g=n(43),O=n(54),v=n(59),x="ININTIALIZED_SUCCESS",_={initialized:!1},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;return t.type===x?Object(u.a)(Object(u.a)({},e),{},{initialized:!0}):e},N=Object(a.b)({dialogsPage:b.b,profilePage:g.b,friendsSideBar:h,usersPage:O.a,auth:j,app:w}),S=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.c,y=Object(a.d)(N,S(Object(a.a)(v.a)));window.store=y;var k=y,I=n(0),E=n.n(I),T=n(30),A=n.n(T),C=(n(90),n(91),n(8)),L=n(17),U=n(27),R=n.n(U),P=n(1),F=function(e){var t="/friends/"+e.id;return Object(P.jsx)("div",{className:R.a.friend,children:Object(P.jsx)(C.b,{to:t,children:Object(P.jsxs)("div",{className:R.a.friendsItem,children:[Object(P.jsx)("div",{className:R.a.friendUserAvatar,children:Object(P.jsx)("img",{src:e.img})}),Object(P.jsx)("div",{className:R.a.friendUserName,children:e.name})]})})})},D=n(36),z=n.n(D),B=function(e){var t=e.friendsSideBar.friends.map((function(e){return Object(P.jsx)(F,{name:e.name,id:e.id,img:e.img},e.id)}));return Object(P.jsx)("div",{className:z.a.content,children:Object(P.jsx)("div",{className:z.a.friendsIcon,children:t})})},M=Object(L.b)((function(e){return{friendsSideBar:e.friendsSideBar}}))(B),W=n(7),G=n.n(W),V=function(e){return Object(P.jsxs)("nav",{className:G.a.nav,children:[Object(P.jsx)("div",{className:G.a.item,children:Object(P.jsx)(C.b,{to:"/profile",activeClassName:G.a.activeLink,children:"Profile"})}),Object(P.jsx)("div",{className:G.a.item,children:Object(P.jsx)(C.b,{to:"/dialogs",activeClassName:G.a.activeLink,children:"Messages"})}),Object(P.jsx)("div",{className:G.a.item,children:Object(P.jsx)(C.b,{to:"/news",activeClassName:G.a.activeLink,children:"News"})}),Object(P.jsx)("div",{className:G.a.item,children:Object(P.jsx)(C.b,{to:"/music",activeClassName:G.a.activeLink,children:"Music"})}),Object(P.jsx)("div",{className:G.a.item,children:Object(P.jsx)(C.b,{to:"settings",activeClassName:G.a.activeLink,children:"Settings"})}),Object(P.jsx)("div",{className:G.a.item,children:Object(P.jsx)(C.b,{to:"users",activeClassName:G.a.activeLink,children:"Users"})}),Object(P.jsx)("div",{className:G.a.item,children:Object(P.jsxs)("div",{className:G.a.friendsIconBlock,children:[Object(P.jsx)("div",{className:G.a.friendsIconTitle,children:Object(P.jsx)(C.b,{to:"friends",activeClassName:G.a.activeLink,children:"Friends"})}),Object(P.jsx)(M,{store:e.store})]})})]})},Z=n(5),J=n(62),Q=n.n(J),q=function(e){return Object(P.jsx)("div",{className:Q.a.content,children:"News Test"})},K=n(63),X=n.n(K),Y=function(e){return Object(P.jsx)("div",{className:X.a.content,children:"Music Test"})},H=n(64),$=n.n(H),ee=function(e){return Object(P.jsx)("div",{className:$.a.content,children:"Settings Test"})},te=n(38),ne=n(39),re=n(41),ae=n(40),ie=n(37),se=n.n(ie),ce=function(e){return Object(P.jsxs)("header",{className:se.a.header,children:[Object(P.jsx)("img",{src:"http://assets.centralindex.com/W/48/db08933953349172c3dea48efd3ce906.png"}),Object(P.jsx)("div",{className:se.a.loginBlock,children:e.isAuth?Object(P.jsxs)("div",{children:[e.login," ",Object(P.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(P.jsx)(C.b,{to:"/login",children:"LOGIN"})})]})},ue=function(e){Object(re.a)(n,e);var t=Object(ae.a)(n);function n(){return Object(te.a)(this,n),t.apply(this,arguments)}return Object(ne.a)(n,[{key:"render",value:function(){return Object(P.jsx)(ce,Object(u.a)({},this.props))}}]),n}(E.a.Component),oe=Object(L.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(c.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.logout();case 2:0===e.sent.resultCode&&t(f(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ue),de=n(20),le=n(24),fe=n.n(le),pe=n(57),je=function(e){return Object(P.jsx)(de.d,{initialValues:{email:"",password:""},onSubmit:function(t,n){var r=n.setSubmitting,a=n.setStatus;e.login(t.email,t.password,t.rememberMe,a),r(!1)},validate:function(e){var t={};return e.password||(t.password="Required"),e.password||(t.password="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},children:function(e){var t=e.isSubmitting,n=e.touched,r=e.errors,a=e.status;return Object(P.jsxs)(de.c,{children:[Object(P.jsxs)("div",{children:[a?Object(P.jsx)("div",{className:fe.a.errorApi,children:a}):null,Object(P.jsx)(de.b,{className:fe.a.input,id:n.email&&r.email?fe.a.inputEffect:null,type:"email",name:"email",placeholder:"email"}),Object(P.jsx)(de.a,{name:"email",component:"div"})]}),Object(P.jsx)(de.b,{className:fe.a.input,id:n.password&&r.password?fe.a.inputEffect:null,type:"password",name:"password",placeholder:"password"}),Object(P.jsx)(de.a,{name:"password",component:"div"}),Object(P.jsx)(de.b,{type:"checkbox",name:"rememberMe"}),Object(P.jsx)("button",{type:"submit",disabled:t,children:"Submit"})]})}})},be=Object(L.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(c.a)(s.a.mark((function a(i){var c;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.login(e,t,n);case 2:0===(c=a.sent).resultCode?i(p()):r(c.messages);case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(P.jsx)(pe.Redirect,{to:"/profile"}):Object(P.jsxs)("div",{children:[Object(P.jsx)("h1",{children:"Login"}),Object(P.jsx)(je,{login:e.login})]})})),me=n(44),he=function(e){return function(t){return Object(P.jsx)(I.Suspense,{fallback:Object(P.jsx)("div",{children:"Loading.."}),children:Object(P.jsx)(e,Object(u.a)({},t))})}},ge=E.a.lazy((function(){return n.e(4).then(n.bind(null,116))})),Oe=E.a.lazy((function(){return n.e(3).then(n.bind(null,115))})),ve=E.a.lazy((function(){return n.e(5).then(n.bind(null,114))})),xe=Object(L.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(p());Promise.all([t]).then((function(){e({type:x})}))}}})((function(e){return Object(I.useEffect)((function(){e.initializeApp()})),e.initialized?Object(P.jsxs)("div",{className:"app-wrapper",children:[Object(P.jsx)(oe,{}),Object(P.jsx)(V,{}),Object(P.jsxs)("div",{className:"app-wrapper-content",children:[Object(P.jsx)(Z.Route,{path:"/profile/:userId?",render:he(Oe)}),Object(P.jsx)(Z.Route,{path:"/dialogs",render:he(ge)}),Object(P.jsx)(Z.Route,{path:"/users",render:he(ve)}),Object(P.jsx)(Z.Route,{path:"/news",component:q}),Object(P.jsx)(Z.Route,{path:"/music",component:Y}),Object(P.jsx)(Z.Route,{path:"/settings",component:ee}),Object(P.jsx)(Z.Route,{path:"/login",component:be})]})]}):Object(P.jsx)(me.a,{})}));A.a.render(Object(P.jsx)(E.a.StrictMode,{children:Object(P.jsx)(C.a,{children:Object(P.jsx)(L.a,{store:k,children:Object(P.jsx)(xe,{})})})}),document.getElementById("root")),r()}},[[98,1,2]]]);
//# sourceMappingURL=main.3b91748f.chunk.js.map