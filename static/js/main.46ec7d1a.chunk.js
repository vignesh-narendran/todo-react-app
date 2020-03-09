(this["webpackJsonpcode-todolist-react-app"]=this["webpackJsonpcode-todolist-react-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(16),o=a.n(c),r=(a(25),a(26),a(5)),s=a(7),i=a(4),m=l.a.createContext(),u=l.a.createContext(),d=function(e){var t=e.children,a=new Date,c=Object(n.useState)(a.getDate()+" "+["January","Febraury","March","April","May","June","July","August","September","October","November","December"][a.getMonth()]+", "+a.getFullYear()),o=Object(i.a)(c,1)[0],r=Object(n.useState)([]),s=Object(i.a)(r,2),d=s[0],p=s[1];return l.a.createElement(m.Provider,{value:[o]},l.a.createElement(u.Provider,{value:[d,p]},t))},p=a(8);function b(e){var t=Object(n.useContext)(u),a=Object(i.a)(t,2),c=a[0],o=a[1];return l.a.createElement("div",{className:"app-todolist",key:e.item.index},l.a.createElement(p.b,{className:"todo-btn check-btn",onClick:function(e){var t=e.target.nextSibling;null!==t&&(t.classList.contains("strike-through")?(t.classList.remove("strike-through"),e.target.classList.remove("green-tick")):(t.classList.add("strike-through"),e.target.classList.add("green-tick")))}}),l.a.createElement("p",{className:"task"},e.item),l.a.createElement(p.d,{className:"todo-btn delete-btn",onClick:function(e){var t=e.target.previousSibling.innerText;o(c.filter((function(e){return e!==t})))}}))}function E(){var e=Object(n.useContext)(u),t=Object(i.a)(e,1)[0];return l.a.createElement("div",{className:"app-todo"},t.map((function(e){return l.a.createElement(b,{item:e})})))}var h=a(19);function v(){var e=Object(n.useContext)(u),t=Object(i.a)(e,2)[1];return l.a.createElement("div",{className:"app-addtask"},l.a.createElement("div",{className:"task-ip"},l.a.createElement("input",{id:"new-task",type:"text",placeholder:"Add your task"})),l.a.createElement("div",null,l.a.createElement("input",{className:"add-btn",type:"button",onClick:function(){var e=document.getElementById("new-task").value;""===e||(t((function(t){return[].concat(Object(h.a)(t),[e])})),document.getElementById("new-task").value="")},value:"+"})))}function f(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement(E,null))}function k(){return l.a.createElement("div",{className:"app-about"},l.a.createElement("h1",null,"About To-Do List"),l.a.createElement("p",{style:{textAlign:"justify"}},"To-Do list is a web app created in React JS. It's a simple list app that accepts input from the user and adds it to the screen. When the user clicks on the check button, the task is stricken out to denote completion. When the user clicks on delete button, the task is deleted from the list."),l.a.createElement("h3",null,"Technologies used: "),l.a.createElement("p",null,"HTML, CSS, JavaScript, React JS and lots of persistence."),l.a.createElement("h3",null,"Add-ons in v2.0 (under development)"),l.a.createElement("ul",null,l.a.createElement("li",null,"Store tasks in memory so they can be accessed later."),l.a.createElement("li",null,"Ability to customize list name."),l.a.createElement("li",null,"Ability to edit a task."),l.a.createElement("li",null,"Dark mode.")),l.a.createElement("h1",null,"About the creator"),l.a.createElement("p",{style:{textAlign:"justify"}},"Hi, I am Vignesh Narendran. I am the creator of To-Do list. I've been into web development for more that two years now and I am loving it."),l.a.createElement("p",{style:{textAlign:"justify"}},"The source code for this web application is avaible in my ",l.a.createElement("a",{href:"https://github.com/vignesh-narendran",style:{fontWeight:"bold",color:"var(--SEC-COLOR)",textDecoration:"none"}},"GitHub")," along with lots of other cool projects."),l.a.createElement(r.b,{className:"home-button-desktop",to:"/todo-react-app"},"Back to Home"),l.a.createElement(r.b,{to:"/todo-react-app"},l.a.createElement(p.a,{className:"home-button-mobile"})))}function g(){return l.a.createElement("div",null,l.a.createElement("header",{className:"app-header"},l.a.createElement("h2",null,l.a.createElement(r.b,{to:"/todo-react-app"},"To-Do list")),l.a.createElement("p",null,"v1.0")))}function y(){var e=Object(n.useContext)(m),t=Object(i.a)(e,1)[0],a=t.split(" ");return l.a.createElement("div",{className:"app-banner"},l.a.createElement("div",{className:"date"},l.a.createElement("h3",{className:"date-desktop"},t),l.a.createElement("div",{className:"date-mobile"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"date-mobile-date-table",rowSpan:"2"},l.a.createElement("p",{className:"date-mobile-date"},a[0])),l.a.createElement("td",{className:"date-mobile-month-table"},l.a.createElement("p",{className:"date-mobile-month"},a[1].substr(0,3)))),l.a.createElement("tr",null,l.a.createElement("td",{className:"date-mobile-year-table"},l.a.createElement("p",{className:"date-mobile-year"},a[2]))))))),l.a.createElement("div",{className:"button"},l.a.createElement(r.b,{className:"about-desktop",to:"/todo-react-app/about"},"About"),l.a.createElement(r.b,{to:"/todo-react-app/about"},l.a.createElement(p.c,{className:"about-mobile"}))))}var N=function(){return l.a.createElement(d,null,l.a.createElement(r.a,null,l.a.createElement(g,null),l.a.createElement(y,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/todo-react-app",component:f}),l.a.createElement(s.a,{exact:!0,path:"/todo-react-app/about",component:k}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.46ec7d1a.chunk.js.map