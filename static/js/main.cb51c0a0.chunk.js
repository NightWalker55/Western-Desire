(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{44:function(e,t,a){},46:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),s=a(38),i=a.n(s),r=(a(44),a(19)),o=a.n(r),l=a(21),d=a(24),u=a(14),j=a(15),h=a(17),m=a(16),b=a(35),p=(a(46),a(23)),g=a(28),f=a(34),O=f.a.initializeApp({apiKey:"AIzaSyASng3B7QOlp_8YECdmXgdhD4bdWCjHlPA",authDomain:"western-desire.firebaseapp.com",projectId:"western-desire",storageBucket:"western-desire.appspot.com",messagingSenderId:"16470919477",appId:"1:16470919477:web:9c3dfe4b4092a45702a47c"}),x=function(){var e=Object(d.a)(o.a.mark((function e(t,a){var n,c,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=w.doc("users/".concat(v.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return c=t.email,s=t.displayName,i=new Date,e.prev=9,e.next=12,n.set(Object(l.a)({displayName:s,email:c,createdAt:i},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("Error");case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}(),v=O.auth(),w=O.firestore(),y=new f.a.auth.GoogleAuthProvider,k=function(){return v.signInWithPopup(y)},S=(a(52),a(2)),N=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,c=t.value;n.setState(Object(p.a)({},a,c))},n.handleSubmit=function(){var e=Object(d.a)(o.a.mark((function e(t){var a,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,c=a.email,s=a.password,e.next=4,v.signInWithEmailAndPassword(c,s);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={email:"",password:""},n}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props.closeLog;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{className:"header",children:[Object(S.jsx)("h1",{children:"Log In"}),Object(S.jsx)(g.a,{className:"close",onClick:e})]}),Object(S.jsxs)("form",{children:[Object(S.jsx)("label",{htmlFor:"email",children:"Email"}),Object(S.jsx)("input",{type:"email",required:!0,name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Email..",className:"input-form"}),Object(S.jsx)("label",{htmlFor:"password",children:"Password"}),Object(S.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password..",className:"input-form"}),Object(S.jsx)("button",{className:"btn",type:"submit",onClick:this.handleSubmit,children:"Submit"}),Object(S.jsx)("button",{className:"btn",onClick:k,children:"Sign In with Google"})]})]})}}]),a}(c.a.Component),C=(a(54),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,c=t.value;n.setState(Object(p.a)({},a,c))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.email,c=t.password;if(c===t.confirmPassword){var s=v.createUserWithEmailAndPassword(a,c).user;x(s),console.log(s),n.setState({email:"",password:"",confirmPassword:""})}else alert("Password doesn't match")},n.state={email:"",password:"",confirmPassword:""},n}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props.closeSign;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{className:"header",children:[Object(S.jsx)("h1",{children:"Sign In"}),Object(S.jsx)(g.a,{className:"close",onClick:e})]}),Object(S.jsxs)("form",{children:[Object(S.jsx)("label",{htmlFor:"email",children:"Email"}),Object(S.jsx)("input",{type:"email",name:"email",required:!0,value:this.state.email,onChange:this.handleChange,placeholder:"Email..",className:"input-form"}),Object(S.jsx)("label",{htmlFor:"password",children:"Password"}),Object(S.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password..",className:"input-form"}),Object(S.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),Object(S.jsx)("input",{type:"password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.handleChange,placeholder:"Password..",className:"input-form"}),Object(S.jsx)("button",{className:"btn",type:"submit",onClick:this.handleSubmit,children:"Submit"})]})]})}}]),a}(c.a.Component));var U=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),i=Object(b.a)(s,2),r=i[0],o=i[1];return Object(S.jsxs)("div",{className:"welcome-page",children:[Object(S.jsxs)("div",{className:"welcome-part",children:[Object(S.jsxs)("h1",{children:["Welcome ",Object(S.jsx)("br",{})," To ",Object(S.jsx)("br",{})," Western Desire"]}),Object(S.jsx)("h1",{children:"New user?"}),Object(S.jsx)("button",{className:"btn",onClick:function(){c(!0)},children:"Sign in"}),Object(S.jsx)("h1",{children:"Already have an account"}),Object(S.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Log in"})]}),Object(S.jsx)("div",{className:"logIn-part",style:r?{transform:"translateX(0)"}:{transform:"translateX(-450px)"},children:Object(S.jsx)(N,{closeLog:function(){o(!1)}})}),Object(S.jsx)("div",{className:"signIn-part",style:a?{transform:"translateX(0)"}:{transform:"translateX(450px)"},children:Object(S.jsx)(C,{closeSign:function(){c(!1)}})})]})},W=(a(55),a.p+"static/media/1.6080c0b2.jpg"),P=a.p+"static/media/2.adf4ebaf.jpg",L=a.p+"static/media/3.20f84e1a.jpg",A=a.p+"static/media/4.e1f46a2c.jpg",B=a.p+"static/media/5.3a4ad502.jpg",D=a.p+"static/media/6.5c461c9b.jpg",I=a.p+"static/media/7.3fc19598.jpg",_=a.p+"static/media/8.dff75b0a.jpg",T=a(9);var E=Object(T.f)((function(e){var t=e.id,a=e.title,n=e.url,c=e.history,s=e.match,i=e.linkUrl;return Object(S.jsxs)("div",{onClick:function(){return c.push("".concat(s.url).concat(i))},children:[Object(S.jsx)("h1",{children:a}),Object(S.jsxs)("div",{className:"card",children:[Object(S.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(n,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}),Object(S.jsx)("button",{className:"card-button",children:"Shop Now"})]},t)]})})),F=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={collection:[{id:1,title:"Vintage Shirts",url:W,linkUrl:"Shirt"},{id:2,title:"Vintage Tops",url:P,linkUrl:"Tops"},{id:3,title:"Mom Jeans",url:L,linkUrl:"MomJeans"},{id:4,title:"Baggy Jeans",url:A,linkUrl:"BaggyJeans"},{id:5,title:"Bags",url:B,linkUrl:"Bags"},{id:6,title:"Crop-Tops",url:D,linkUrl:"CropTops"},{id:7,title:"T-shirts",url:I,linkUrl:"T-shirts"},{id:8,title:"Watches",url:_,linkUrl:"Watches"}]},e}return Object(j.a)(a,[{key:"render",value:function(){return Object(S.jsx)("div",{className:"card-section",children:this.state.collection.map((function(e){var t=e.id;return Object(S.jsx)(E,Object(l.a)({},e),t)}))})}}]),a}(n.Component);a(60);function q(e){e.history;return Object(S.jsx)("div",{className:"homepage",children:Object(S.jsxs)("div",{className:"main-section",children:[Object(S.jsxs)("nav",{className:"navbar",children:[Object(S.jsx)("div",{className:"nav-header",children:Object(S.jsx)("h1",{className:"title-name",children:"Western Desire"})}),Object(S.jsxs)("div",{className:"nav-footer",children:[Object(S.jsx)("h3",{children:"Contact Us"}),Object(S.jsx)("h3",{onClick:function(){v.signOut()},children:"Sign Out"})]})]}),Object(S.jsxs)("div",{className:"body-section",children:[Object(S.jsxs)("h1",{children:["Hey there ",Object(S.jsx)("br",{}),"Welcome To our Page"]}),Object(S.jsxs)("div",{className:"collections",children:[Object(S.jsx)("h1",{children:"Collections"}),Object(S.jsx)(F,{})]})]})]})})}a(61);var M=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={collection:[{id:1,imgUrl:"https://cdn.shopify.com/s/files/1/0245/5152/2356/products/Women-Vintage-Shirt-Long-Sleeve-Loose-Flower-Print-Woman-2019-Spring-Loose-Blouses_061c4a74-121a-4048-8427-ba0ec851eb50_2000x.jpg?v=1569462617"},{id:2,imgUrl:"https://us03-imgcdn.ymcart.com/63559/2021/06/04/1/a/1aaac66fbc4a7572.jpg?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_650,h_975/format,webp"},{id:3,imgUrl:"https://i.pinimg.com/564x/6c/14/58/6c1458ff54077a0747c51cb773bf0edd.jpg"},{id:4,imgUrl:"https://i.pinimg.com/564x/3b/fc/ce/3bfcceda12cc2285a5a49089f27e30ac.jpg"},{id:5,imgUrl:"https://i.pinimg.com/236x/5e/7a/86/5e7a86fd63933b41d300036b32152427.jpg"},{id:6,imgUrl:"https://ae01.alicdn.com/kf/H2fd687c60a5944d2b39c2433c2469c4cW/2019-OL-Style-Office-Ladies-Chain-Print-Blouses-Autumn-Long-Sleeve-Chiffon-Blouse-Women-Lace-Up.jpg_q50.jpg"},{id:7,imgUrl:"https://ae01.alicdn.com/kf/H8033505c44354ebb96c74bc9640e846fT/Autumn-Blouses-Women-Long-Sleeve-Print-Shirts-Blouse-Designer-Runway-Tops-2021-Women-High-Quality-Fashion.jpg"},{id:8,imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAKyhbNcMBJSrG0MtW_D1VWIaNUEM9-vLnQ&usqp=CAU"}]},e}return Object(j.a)(a,[{key:"render",value:function(){return Object(S.jsx)("div",{className:"vintage",children:this.state.collection.map((function(e){var t=e.id,a=e.imgUrl;return Object(S.jsx)("div",{className:"card",children:Object(S.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(a,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}})},t)}))})}}]),a}(n.Component),H=(a(62),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={collection:[{id:1,imgUrl:"https://cdn.shopify.com/s/files/1/0245/5152/2356/products/Women-Vintage-Shirt-Long-Sleeve-Loose-Flower-Print-Woman-2019-Spring-Loose-Blouses_061c4a74-121a-4048-8427-ba0ec851eb50_2000x.jpg?v=1569462617"},{id:2,imgUrl:"https://us03-imgcdn.ymcart.com/63559/2021/06/04/1/a/1aaac66fbc4a7572.jpg?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_650,h_975/format,webp"},{id:3,imgUrl:"https://i.pinimg.com/564x/6c/14/58/6c1458ff54077a0747c51cb773bf0edd.jpg"},{id:4,imgUrl:"https://i.pinimg.com/564x/3b/fc/ce/3bfcceda12cc2285a5a49089f27e30ac.jpg"},{id:5,imgUrl:"https://i.pinimg.com/236x/5e/7a/86/5e7a86fd63933b41d300036b32152427.jpg"},{id:6,imgUrl:"https://ae01.alicdn.com/kf/H2fd687c60a5944d2b39c2433c2469c4cW/2019-OL-Style-Office-Ladies-Chain-Print-Blouses-Autumn-Long-Sleeve-Chiffon-Blouse-Women-Lace-Up.jpg_q50.jpg"},{id:7,imgUrl:"https://ae01.alicdn.com/kf/H8033505c44354ebb96c74bc9640e846fT/Autumn-Blouses-Women-Long-Sleeve-Print-Shirts-Blouse-Designer-Runway-Tops-2021-Women-High-Quality-Fashion.jpg"},{id:8,imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAKyhbNcMBJSrG0MtW_D1VWIaNUEM9-vLnQ&usqp=CAU"}]},e}return Object(j.a)(a,[{key:"render",value:function(){return Object(S.jsx)("div",{className:"tops",children:this.state.collection.map((function(e){var t=e.id,a=e.imgUrl;return Object(S.jsx)("div",{className:"card",children:Object(S.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(a,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}})},t)}))})}}]),a}(n.Component));function J(){return Object(S.jsx)("div",{children:Object(S.jsx)("h1",{children:"Hi from Watches"})})}var z=a(27),Q=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).unsubscribe=null,e.state={currentUser:null},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribe=v.onAuthStateChanged(function(){var t=Object(d.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(a);case 2:n=t.sent,a&&n.onSnapshot((function(t){e.setState({currentUser:Object(l.a)({id:t.id},t.data())})})),e.setState({currentUser:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){return Object(S.jsx)("div",{className:"app",children:Object(S.jsx)(z.a,{children:this.state.currentUser?Object(S.jsxs)(T.c,{children:[Object(S.jsx)(T.a,{exact:!0,path:"/Western-Desire/",render:function(e){return Object(S.jsx)(q,Object(l.a)({},e))}}),Object(S.jsx)(T.a,{exact:!0,path:"/Western-Desire/Shirt",children:Object(S.jsx)(M,{})}),Object(S.jsx)(T.a,{exact:!0,path:"/Western-Desire/Tops",children:Object(S.jsx)(H,{})}),Object(S.jsx)(T.a,{exact:!0,path:"/Western-Desire/Watches",children:Object(S.jsx)(J,{})})]}):Object(S.jsx)(T.a,{exact:!0,path:"/Western-Desire",children:Object(S.jsx)(U,{})})})})}}]),a}(c.a.Component);i.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(Q,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.cb51c0a0.chunk.js.map