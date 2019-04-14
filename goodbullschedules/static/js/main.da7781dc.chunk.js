(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(65)},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(15),o=n.n(r),l=n(30),s=n(1),i=n(2),u=n(5),d=n(3),h=n(4),m=n(9),p=n(13),E=n.n(p),b=n(6),f=n.n(b),O=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(f.a,{open:this.props.open},c.a.createElement(b.DialogTitle,null,"Add Course"),c.a.createElement(b.DialogContent,null),c.a.createElement(b.DialogFooter,null,c.a.createElement(b.DialogButton,{action:"dismiss"},"Dismiss"),c.a.createElement(b.DialogButton,{action:"accept",isDefault:!0},"Accept")))}}]),t}(a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(f.a,{open:this.props.open},c.a.createElement(b.DialogTitle,null,"Add Schedule"),c.a.createElement(b.DialogContent,null),c.a.createElement(b.DialogFooter,null,c.a.createElement(b.DialogButton,{action:"dismiss"},"Dismiss"),c.a.createElement(b.DialogButton,{action:"accept",isDefault:!0},"Accept")))}}]),t}(a.Component),y=n(8),C=n.n(y),j=n(24),v=n.n(j),D=n(16),S=n.n(D),k=n(25),w=n.n(k),N=n(26),A=[{letter:"A",color:"#00BCD4"},{letter:"B",color:"#A5D6A7"},{letter:"C",color:"#FFEE58"},{letter:"D",color:"#E57373"},{letter:"F",color:"#90A4AE"},{letter:"Q",color:"#D1C4E9"}],I=function(e){var t=e.ABCDFQ;return console.log(t),null===t?null:c.a.createElement("div",{style:{marginLeft:"auto",width:"40%"}},t.map(function(e,t){return 0===e?null:c.a.createElement("div",{key:t,style:{backgroundColor:A[t].color,width:"".concat((e-.1).toFixed(2),"%"),display:"inline-block",border:"1px solid white",boxSizing:"border-box",height:20}})}))},_=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.section,t=e.section_num,n=e.instructor,a=e.ABCDFQ;return c.a.createElement(y.ListItem,null,c.a.createElement(N.Checkbox,{initRipple:function(){}}),c.a.createElement(y.ListItemText,{primaryText:t,secondaryText:n}),c.a.createElement(y.ListItemGraphic,{graphic:c.a.createElement(I,{ABCDFQ:a})}))}}]),t}(c.a.Component),L=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={checked:!1,indeterminate:!1},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=c.a.createElement(y.ListItem,{className:"course-list-item"},c.a.createElement(y.ListItemText,{primaryText:"".concat(this.props.dept,"-").concat(this.props.course_num),secondaryText:this.props.name}),c.a.createElement(y.ListItemMeta,{meta:c.a.createElement(v.a,null,c.a.createElement(S.a,{icon:"delete"}))}));return c.a.createElement(w.a,{trigger:e,transitionTime:250},c.a.createElement(C.a,{twoLine:!0,className:"course-sections"},this.props.sections.map(function(e,t){var n=e.section;return c.a.createElement(_,{key:t,section:n})})))}}]),t}(c.a.Component),T=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(C.a,{twoLine:!0,avatarList:!0},this.props.courses.map(function(e,t){var n=e.dept,a=e.name,r=e.course_num,o=e.sections;return console.log(n,r,a,o),c.a.createElement(L,{key:t,dept:n,name:a,course_num:r,sections:o})}))}}]),t}(c.a.Component),x=n(27),B=n.n(x),F=n(28),M=n.n(F),R="ADD_SECTION",U="REMOVE_SECTION",H="ADD_COURSE",Q="REMOVE_COURSE",V="ADD_SCHEDULE",J="REMOVE_SCHEDULE",W="SELECT_SCHEDULE",z="LOAD_SCHEDULES";var G=n(11),$=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleSelectionChange.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleSelectionChange",value:function(e){e.target&&e.target.value}},{key:"render",value:function(){return console.log("In render of ScheduleSelect, scheduleNames =",this.props.scheduleNames),0===this.props.scheduleNames.length?(console.log("The schedulena"),null):c.a.createElement(M.a,{label:"Choose schedule",className:"schedule-select",value:this.props.currScheduleName||void 0,onChange:this.handleSelectionChange,options:this.props.scheduleNames})}}]),t}(c.a.Component),q=Object(G.b)(function(e){return{currScheduleName:e.currScheduleName}})($),K=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={addCourseDialogIsOpen:!1,addScheduleDialogIsOpen:!1},n.handleClick=n.handleClick.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/schedules/").then(function(e){return e.json()}).then(function(t){console.log("Dispatching!"),e.props.loadSchedules(t)}).catch(function(e){return console.log(e)})}},{key:"handleClick",value:function(e){this.props.anySchedulesCreated?this.setState({addCourseDialogIsOpen:!0}):this.setState({addScheduleDialogIsOpen:!0})}},{key:"render",value:function(){var e=this.props,t=e.schedules,n=e.currScheduleName;console.log(t.keys());var a=Object(l.a)(t.keys());console.log("In App.tsx",a);var r=t.get(n);return r&&r.courses.map(function(e){return{dept:e.dept,course_num:e.course_num,name:e.name,sections:e.sections.map(function(e){return{section:e}})}}),c.a.createElement("div",{className:"drawer-container"},c.a.createElement(E.a,{className:"drawer"},c.a.createElement(p.DrawerHeader,null,c.a.createElement(q,{scheduleNames:a})),c.a.createElement(p.DrawerContent,{className:"drawer-content"},c.a.createElement(T,{courses:[]}))),c.a.createElement(p.DrawerAppContent,{className:"drawer-app-content"},c.a.createElement(B.a,{className:"fab",icon:c.a.createElement(S.a,{icon:"add"}),onClick:this.handleClick})),c.a.createElement(g,{open:this.state.addScheduleDialogIsOpen}),c.a.createElement(O,{open:this.state.addCourseDialogIsOpen}))}}]),t}(a.Component),P=Object(G.b)(function(e){return{anySchedulesCreated:0!==Array.from(e.schedules.keys()).length,schedules:e.schedules,currScheduleName:e.currScheduleName}},function(e){return{loadSchedules:function(t){return e(function(e){return{type:z,payload:e}}(t))}}})(K);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=n(17),Y=n(31),Z={schedules:new Map,currScheduleName:null};n(55),n(56),n(57),n(58),n(59),n(60),n(61),n(62),n(63),n(64);var ee=Object(X.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0,n=Object(Y.a)({},e),a=n.currScheduleName;if(console.log(t.type),null!==a){var c=n.schedules.get(a);if(c)switch(t.type){case R:c.selectedCrns.add(t.payload);break;case U:c.selectedCrns.delete(t.payload);break;case H:case Q:c.courses.push(t.payload);break;case J:n.schedules.delete(t.payload)}else{if(t.type!==V)throw Error("The schedule attempting to be accessed does not exist.");var r={name:t.payload.name,term_code:t.payload.term_code,courses:[],selectedCrns:new Set};n.schedules.set(t.payload.name,r)}}else if(console.log("The current schedule hasn't been selected."),t.type===W)n.currScheduleName=t.payload;else if(t.type===z)for(var o in t.payload){var l=t.payload[o];l.selectedCrns=l.sections.map(function(e){return Number.parseInt(e.split("_")[0])}),delete l.sections,n.schedules.set(o,l)}return n});o.a.render(c.a.createElement(G.a,{store:ee},c.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.da7781dc.chunk.js.map