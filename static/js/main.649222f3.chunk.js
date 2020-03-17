(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports=n(18)},18:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(8),o=n.n(r),l=n(10),i=n(1),u=n(2),m=n(4),s=n(3),h=n(5),b=n(9),d=n(20),p=n(6),f=n.n(p),E=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(c)))).state={name:"",number:""},n.handleSubmit=function(t){t.preventDefault(),n.props.submitContact({name:n.state.name,number:n.state.number,id:Object(d.a)()}),n.setState({name:"",number:""})},n.handleChange=function(t){n.setState(Object(b.a)({},t.target.name,t.target.value))},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("h2",null,"NAME"),c.a.createElement("input",{type:"text",name:"name",placeholder:"Enter name",onChange:this.handleChange,value:this.state.name}),c.a.createElement("h2",null,"NUMBER"),c.a.createElement("input",{type:"tel",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",name:"number",placeholder:"Enter Number",onChange:this.handleChange,value:this.state.number}),c.a.createElement("button",{type:"submit"},"Add contact")))}}]),e}(a.Component);E.protoType={name:f.a.string,number:f.a.string};var g=E,C=function(t){var e=t.contact,n=e.id,a=e.name,r=e.number,o=t.deleteContact;return c.a.createElement("li",null,c.a.createElement("span",null,a," "),c.a.createElement("span",null,r," "),c.a.createElement("button",{type:"button",id:n,onClick:o},"DELETE"))},v=function(t){var e=t.contacts,n=t.deleteContact;return c.a.createElement("ul",null,e.map((function(t){return c.a.createElement(C,{contact:t,key:t.id,deleteContact:n})})))},y=function(t){var e=t.getName;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Find contact by name"),c.a.createElement("input",{type:"text",onChange:e}))},O=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(c)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.submitContact=function(t){n.state.contacts.some((function(e){return e.name===t.name}))?alert("".concat(t.name," is already in contact")):n.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[t])}}))},n.deleteContact=function(t){var e=t.target.id;n.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},n.getName=function(t){n.setState({filter:t.target.value})},n.filterContacts=function(){return n.state.contacts.filter((function(t){return t.name.toLocaleLowerCase().includes(n.state.filter)}))},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=null!==localStorage.getItem("contacts")?JSON.parse(localStorage.getItem("contacts")):[];this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(g,{submitContact:this.submitContact}),c.a.createElement("h2",null,"Contacts"),this.state.contacts.length>2&&c.a.createElement(y,{getName:this.getName}),c.a.createElement(v,{contacts:this.filterContacts(),deleteContact:this.deleteContact}))}}]),e}(a.Component);o.a.render(c.a.createElement(O,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.649222f3.chunk.js.map