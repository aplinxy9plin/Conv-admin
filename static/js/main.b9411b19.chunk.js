(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,n){"use strict";n.r(t);n(60),n(85);var a=n(0),l=n.n(a),r=n(29),i=n.n(r),o=n(53),c=n.n(o),u=n(54),s=n(55),m=n(57),d=n(56),h=n(58),p=n(1),f=(n(109),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).add=function(e){fetch("https://conversation-list.herokuapp.com/good?id="+e.currentTarget.id).then(function(e){return e.json()}).then(function(e){window.location.reload()})},n.remove=function(e){fetch("https://conversation-list.herokuapp.com/remove?id="+e.currentTarget.id).then(function(e){return e.json()}).then(function(e){window.location.reload()})},n.state={activePanel:"home",fetchedUser:null},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://conversation-list.herokuapp.com/get_all").then(function(e){return e.json()}).then(function(t){e.setState({data:t.filter(function(e){return 1===e.status})})})}},{key:"render",value:function(){var e=this;return l.a.createElement(p.View,{activePanel:"home"},l.a.createElement(p.Panel,{id:"home"},l.a.createElement(p.PanelHeader,null,"\u0411\u0435\u0441\u0435\u0434\u044b"),this.state.data&&this.state.data.map(function(t){return l.a.createElement(p.Group,null,l.a.createElement(p.List,null,l.a.createElement(p.Cell,{before:l.a.createElement("img",{src:t.photo,style:{marginRight:"20px"},width:"40px"})},t.name),l.a.createElement(p.Cell,null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432: ",t.count),l.a.createElement(p.Cell,{multiline:!0},t.description),l.a.createElement(p.Cell,null,"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0431\u0435\u0441\u0435\u0434\u0443: ",l.a.createElement("a",{target:"_blank",href:-1!==t.link.indexOf("https://")?t.link:"https://"+t.link},t.link)),l.a.createElement(p.Cell,null,"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0441\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044f: ",l.a.createElement("a",{target:"_blank",href:-1!==t.admin.indexOf("https://")?t.admin:"https://"+t.admin},t.admin)),l.a.createElement(p.Cell,null,l.a.createElement(p.Div,null,l.a.createElement(p.Button,{stretched:!0,id:t._id,onClick:e.add,level:"commerce",style:{marginRight:8}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),l.a.createElement(p.Button,{stretched:!0,id:t._id,onClick:e.remove,style:{background:"tomato"}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))))})))}}]),t}(l.a.Component));c.a.send("VKWebAppInit",{}),i.a.render(l.a.createElement(f,null),document.getElementById("root"))},59:function(e,t,n){e.exports=n(110)}},[[59,1,2]]]);
//# sourceMappingURL=main.b9411b19.chunk.js.map