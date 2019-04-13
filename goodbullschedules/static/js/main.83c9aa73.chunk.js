(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(64)},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),l=n(1),s=n(2),i=n(5),u=n(3),d=n(4),h=n(9),m=n(13),p=n.n(m),E=n(6),b=n.n(E),f=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{open:this.props.open},r.a.createElement(E.DialogTitle,null,"Add Course"),r.a.createElement(E.DialogContent,null),r.a.createElement(E.DialogFooter,null,r.a.createElement(E.DialogButton,{action:"dismiss"},"Dismiss"),r.a.createElement(E.DialogButton,{action:"accept",isDefault:!0},"Accept")))}}]),t}(a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{open:this.props.open},r.a.createElement(E.DialogTitle,null,"Add Schedule"),r.a.createElement(E.DialogContent,null),r.a.createElement(E.DialogFooter,null,r.a.createElement(E.DialogButton,{action:"dismiss"},"Dismiss"),r.a.createElement(E.DialogButton,{action:"accept",isDefault:!0},"Accept")))}}]),t}(a.Component),y=n(8),C=n.n(y),g=n(24),j=n.n(g),v=n(16),D=n.n(v),S=n(25),k=n.n(S),w=n(26),N=[{letter:"A",color:"#00BCD4"},{letter:"B",color:"#A5D6A7"},{letter:"C",color:"#FFEE58"},{letter:"D",color:"#E57373"},{letter:"F",color:"#90A4AE"},{letter:"Q",color:"#D1C4E9"}],A=function(e){var t=e.ABCDFQ;return console.log(t),null===t?null:r.a.createElement("div",{style:{marginLeft:"auto",width:"40%"}},t.map(function(e,t){return 0===e?null:r.a.createElement("div",{key:t,style:{backgroundColor:N[t].color,width:"".concat((e-.1).toFixed(2),"%"),display:"inline-block",border:"1px solid white",boxSizing:"border-box",height:20}})}))},_=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.section,t=e.section_num,n=e.instructor,a=e.ABCDFQ;return r.a.createElement(y.ListItem,null,r.a.createElement(w.Checkbox,{initRipple:function(){}}),r.a.createElement(y.ListItemText,{primaryText:t,secondaryText:n}),r.a.createElement(y.ListItemGraphic,{graphic:r.a.createElement(A,{ABCDFQ:a})}))}}]),t}(r.a.Component),I=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={checked:!1,indeterminate:!1},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=r.a.createElement(y.ListItem,{className:"course-list-item"},r.a.createElement(y.ListItemText,{primaryText:"".concat(this.props.dept,"-").concat(this.props.course_num),secondaryText:this.props.name}),r.a.createElement(y.ListItemMeta,{meta:r.a.createElement(j.a,null,r.a.createElement(D.a,{icon:"delete"}))}));return r.a.createElement(k.a,{trigger:e,transitionTime:250},r.a.createElement(C.a,{twoLine:!0,className:"course-sections"},this.props.sections.map(function(e,t){var n=e.section;return r.a.createElement(_,{key:t,section:n})})))}}]),t}(r.a.Component),L=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(C.a,{twoLine:!0,avatarList:!0},this.props.courses.map(function(e,t){var n=e.dept,a=e.name,c=e.course_num,o=e.sections;return console.log(n,c,a,o),r.a.createElement(I,{key:t,dept:n,name:a,course_num:c,sections:o})}))}}]),t}(r.a.Component),T=n(27),x=n.n(T),B=n(28),F=n.n(B),M="ADD_SECTION",R="REMOVE_SECTION",U="ADD_COURSE",H="REMOVE_COURSE",Q="ADD_SCHEDULE",V="REMOVE_SCHEDULE",J="SELECT_SCHEDULE",W="LOAD_SCHEDULES";var z=n(11),G=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSelectionChange.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleSelectionChange",value:function(e){e.target&&this.props.selectSchedule(e.target.value)}},{key:"render",value:function(){return 0===this.props.scheduleNames.length?null:r.a.createElement(F.a,{label:"Choose schedule",className:"schedule-select",value:this.props.currScheduleName||void 0,onChange:this.handleSelectionChange,options:this.props.scheduleNames})}}]),t}(r.a.Component),$=Object(z.b)(function(e){return{currScheduleName:e.currScheduleName}},function(e){return{selectSchedule:function(t){return e(function(e){return{type:J,payload:e}}(t))}}})(G),q=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={addCourseDialogIsOpen:!1,addScheduleDialogIsOpen:!1},n.handleClick=n.handleClick.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/schedules/").then(function(e){return e.json()}).then(function(t){e.props.loadSchedules(t)}).catch(function(e){return console.log(e)})}},{key:"handleClick",value:function(e){this.props.anySchedulesCreated?this.setState({addCourseDialogIsOpen:!0}):this.setState({addScheduleDialogIsOpen:!0})}},{key:"render",value:function(){var e=this.props,t=e.schedules,n=e.currScheduleName,a=t.get(n);return a&&a.courses.map(function(e){return{dept:e.dept,course_num:e.course_num,name:e.name,sections:e.sections.map(function(e){return{section:e}})}}),r.a.createElement("div",{className:"drawer-container"},r.a.createElement(p.a,{className:"drawer"},r.a.createElement(m.DrawerHeader,null,r.a.createElement($,{scheduleNames:Array.from(t.keys())})),r.a.createElement(m.DrawerContent,{className:"drawer-content"},r.a.createElement(L,{courses:[]}))),r.a.createElement(m.DrawerAppContent,{className:"drawer-app-content"},r.a.createElement(x.a,{className:"fab",icon:r.a.createElement(D.a,{icon:"add"}),onClick:this.handleClick})),r.a.createElement(O,{open:this.state.addScheduleDialogIsOpen}),r.a.createElement(f,{open:this.state.addCourseDialogIsOpen}))}}]),t}(a.Component),K=Object(z.b)(function(e){return{anySchedulesCreated:0!==Array.from(e.schedules.keys()).length,schedules:e.schedules,currScheduleName:e.currScheduleName}},function(e){return{loadSchedules:function(t){return e(function(e){return{type:W,payload:e}}(t))}}})(q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=n(17),X=n(30),Y={schedules:new Map,currScheduleName:null};n(54),n(55),n(56),n(57),n(58),n(59),n(60),n(61),n(62),n(63);var Z=Object(P.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0,n=Object(X.a)({},e),a=n.currScheduleName;if(console.log(t.type),null!==a){var r=n.schedules.get(a);if(r)switch(t.type){case M:r.selectedCrns.add(t.payload);break;case R:r.selectedCrns.delete(t.payload);break;case U:case H:r.courses.push(t.payload);break;case V:n.schedules.delete(t.payload)}else{if(t.type!==Q)throw Error("The schedule attempting to be accessed does not exist.");var c={name:t.payload.name,term_code:t.payload.term_code,courses:[],selectedCrns:new Set};n.schedules.set(t.payload.name,c)}}else if(console.log("The current schedule hasn't been selected."),t.type===J)n.currScheduleName=t.payload;else if(t.type===W)for(var o in t.payload){var l=t.payload[o];l.selectedCrns=l.sections.map(function(e){return Number.parseInt(e.split("_")[0])}),delete l.sections,n.schedules.set(o,l)}return n});o.a.render(r.a.createElement(z.a,{store:Z},r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.83c9aa73.chunk.js.map