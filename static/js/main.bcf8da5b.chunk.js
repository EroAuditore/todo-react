(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{17:function(e,t,n){e.exports={item:"TodoItem_item__2hqLh",checkbox:"TodoItem_checkbox__20xfF",textInput:"TodoItem_textInput__3awhp"}},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n(1),a=n.n(o),i=n(23),s=n.n(i),r=n(8),l=n(22),d=n(11),u=n(9),j=n(3),b=function(){return Object(c.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(c.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},h=n(15),p=n(16),x=function(e){var t=Object(o.useState)({title:""}),n=Object(u.a)(t,2),a=n[0],i=n[1];return Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a.title.trim()?(e.addTodoProps(a.title),i({title:""})):alert("Please write item")},className:"form-container",children:[Object(c.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:a.title,name:"title",onChange:function(e){i(Object(d.a)(Object(d.a)({},a),{},Object(h.a)({},e.target.name,e.target.value)))}}),Object(c.jsx)("button",{className:"input-submit",children:Object(c.jsx)(p.a,{style:{color:"darkcyan",fontSize:"20px",marginTop:"2px"}})})]})},O=n(17),f=n.n(O),m=function(e){var t=Object(o.useState)(!1),n=Object(u.a)(t,2),a=n[0],i=n[1];Object(o.useEffect)((function(){return function(){console.log("Cleaning up...")}}),[]);var s=e.todo,r=s.completed,l=s.id,d=s.title,j={},b={};return a?j.display="none":b.display="none",Object(c.jsxs)("li",{className:f.a.item,children:[Object(c.jsxs)("div",{onDoubleClick:function(){i(!0)},style:j,children:[Object(c.jsx)("input",{type:"checkbox",className:f.a.checkbox,checked:r,onChange:function(){return e.handleChangeProps(l)}}),Object(c.jsx)("button",{onClick:function(){return e.deleteTodoProps(l)},children:Object(c.jsx)(p.b,{style:{color:"orangered",fontSize:"16px"}})}),Object(c.jsx)("span",{style:r?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:d})]}),Object(c.jsx)("input",{type:"text",style:b,className:f.a.textInput,value:d,onChange:function(t){e.setUpdate(t.target.value,l)},onKeyDown:function(e){"Enter"===e.key&&i(!1)}})]})},g=function(e){return Object(c.jsx)("ul",{children:e.todos.map((function(t){return Object(c.jsx)(m,{todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProps:e.deleteTodoProps,setUpdate:e.setUpdate},t.id)}))})},y=n(43),v=function(){var e=Object(j.f)().slug,t=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Ibas Majid, a self taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic."}].find((function(t){return t.slug===e})),n=t.title,o=t.description;return Object(c.jsxs)("div",{className:"main__content",children:[Object(c.jsx)("h1",{children:n}),Object(c.jsx)("p",{children:o})]})},N=function(){var e=Object(j.g)(),t=e.url,n=e.path;return Object(c.jsxs)("div",{className:"about__content",children:[Object(c.jsxs)("ul",{className:"about__list",children:[Object(c.jsx)("li",{children:Object(c.jsx)(r.b,{to:"".concat(t,"/about-app"),children:"About App"})}),Object(c.jsx)("li",{children:Object(c.jsx)(r.b,{to:"".concat(t,"/about-author"),children:"About Author"})})]}),Object(c.jsx)(j.a,{path:"".concat(n,"/:slug"),children:Object(c.jsx)(v,{})})]})},w=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h3",{children:"No match for this page"})})},k=n(25),S=n(26),T=function(){var e=Object(o.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("nav",{className:"navBar",children:[Object(c.jsx)("button",{onClick:function(){a(!n)},children:n?Object(c.jsx)(k.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(c.jsx)(S.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(c.jsx)("ul",{className:"menuNav ".concat(n?" showMenu":""),children:[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}].map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(r.c,{to:e.path,activeClassName:"active-link",onClick:function(){a(!1)},exact:!0,children:e.text})},e.id)}))})]})},_=function(){var e=Object(o.useState)(function(){var e=localStorage.getItem("todos");return JSON.parse(e)||[]}()),t=Object(u.a)(e,2),n=t[0],a=t[1];Object(o.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("todos",e)}),[n]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(T,{}),Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{exact:!0,path:"/",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"inner",children:[Object(c.jsx)(b,{}),Object(c.jsx)(x,{addTodoProps:function(e){var t={id:Object(y.a)(),title:e,completed:!1};a([].concat(Object(l.a)(n),[t]))}}),Object(c.jsx)(g,{todos:n,handleChangeProps:function(e){a((function(t){return t.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{completed:!t.completed}):t}))}))},deleteTodoProps:function(e){a(Object(l.a)(n.filter((function(t){return t.id!==e}))))},setUpdate:function(e,t){a(n.map((function(n){return n.id===t&&(n.title=e),n})))}})]})})}),Object(c.jsx)(j.a,{path:"/about",children:Object(c.jsx)(N,{})}),Object(c.jsx)(j.a,{path:"*",children:Object(c.jsx)(w,{})})]})]})};n(40);s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(r.a,{basename:"/todo-react",children:Object(c.jsx)(_,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.bcf8da5b.chunk.js.map