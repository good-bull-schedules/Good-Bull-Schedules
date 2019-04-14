(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(65)},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),s=n(2),i=n(3),l=n(6),u=n(4),d=n(5),h=n(1),p=n(13),m=n.n(p),b=n(7),f=n.n(b),E=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{open:this.props.open},r.a.createElement(b.DialogTitle,null,"Add Course"),r.a.createElement(b.DialogContent,null),r.a.createElement(b.DialogFooter,null,r.a.createElement(b.DialogButton,{action:"dismiss"},"Dismiss"),r.a.createElement(b.DialogButton,{action:"accept",isDefault:!0},"Accept")))}}]),t}(a.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{open:this.props.open},r.a.createElement(b.DialogTitle,null,"Add Schedule"),r.a.createElement(b.DialogContent,null),r.a.createElement(b.DialogFooter,null,r.a.createElement(b.DialogButton,{action:"dismiss"},"Dismiss"),r.a.createElement(b.DialogButton,{action:"accept",isDefault:!0},"Accept")))}}]),t}(a.Component),O=n(18),C=n(10),y=n.n(C),k=n(25),j=n.n(k),g=n(16),S=n.n(g),D=n(26),w=n.n(D),N=n(27),_="ADD_SECTION",x="REMOVE_SECTION",A="ADD_COURSE",I="REMOVE_COURSE",L="ADD_SCHEDULE",T="REMOVE_SCHEDULE",H="SELECT_SCHEDULE",B="LOAD_SCHEDULES";var M=n(9),R={A:"#00BCD4",B:"#A5D6A7",C:"#FFEE58",D:"#E57373",F:"#90A4AE",Q:"#D1C4E9"},F=function(e){var t=e.historical_performance;if(null===t.A)return r.a.createElement("div",null);var n=[],a=0;for(var c in R){var o=t[c];a+=o||0}for(var s in R){var i=t[s];i&&n.push(r.a.createElement("div",{key:s,style:{backgroundColor:R[s],width:"".concat((i/a*100-.1).toFixed(2),"%"),display:"inline-block",border:"1px solid white",boxSizing:"border-box",height:20}}))}return r.a.createElement("div",{style:{width:"40%",marginLeft:"auto"}},n)},U=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).checkboxClickHandler=n.checkboxClickHandler.bind(Object(h.a)(Object(h.a)(n))),n.isChecked=n.isChecked.bind(Object(h.a)(Object(h.a)(n))),n.checkboxClickHandler=n.checkboxClickHandler.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"isChecked",value:function(){return!!this.props.selectedCrns&&this.props.selectedCrns.has(this.props.section.crn)}},{key:"checkboxClickHandler",value:function(){this.isChecked()?this.props.removeSection(this.props.section.crn):this.props.addSection(this.props.section.crn)}},{key:"render",value:function(){var e=this.props.section,t=e.section_num,n=e.instructor,a=e.historical_performance;return r.a.createElement(C.ListItem,null,r.a.createElement(N.Checkbox,{initRipple:function(){},checked:this.isChecked(),onChange:this.checkboxClickHandler}),r.a.createElement(C.ListItemText,{primaryText:t,secondaryText:n}),r.a.createElement(C.ListItemGraphic,{graphic:r.a.createElement(F,{historical_performance:a})}))}}]),t}(r.a.Component),V=Object(M.b)(function(e){var t=new Set;if(e.currScheduleName){var n=e.schedules.get(e.currScheduleName);n&&(t=n.selectedCrns)}return{selectedCrns:t}},function(e){return{addSection:function(t){return e(function(e){return{type:_,payload:e}}(t))},removeSection:function(t){return e(function(e){return{type:x,payload:e}}(t))}}})(U),J=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={checked:!1,indeterminate:!1},n.handleDeleteClick=n.handleDeleteClick.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleDeleteClick",value:function(){this.props.removeCourse(this.props.dept,this.props.course_num)}},{key:"render",value:function(){var e=r.a.createElement(C.ListItem,{className:"course-list-item"},r.a.createElement(C.ListItemText,{primaryText:"".concat(this.props.dept,"-").concat(this.props.course_num),secondaryText:this.props.name}),r.a.createElement(C.ListItemMeta,{meta:r.a.createElement(j.a,{onClick:this.handleDeleteClick},r.a.createElement(S.a,{icon:"delete"}))}));return r.a.createElement(w.a,{trigger:e,transitionTime:250},r.a.createElement(y.a,{twoLine:!0,className:"course-sections"},this.props.sections.map(function(e,t){var n=e.section;return r.a.createElement(V,{key:t,section:n})})))}}]),t}(r.a.Component),W=Object(M.b)(null,function(e){return{removeCourse:function(t,n){return e(function(e,t){return{type:I,payload:{dept:e,course_num:t}}}(t,n))}}})(J),z=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=[];for(var t in this.props.courses){var n=this.props.courses[t],a=n.dept,c=n.name,o=n.course_num,s=n.sections.map(function(e){return{section:e}});e.push(r.a.createElement(W,{key:"".concat(a,"-").concat(o),name:c,dept:a,course_num:o,sections:s}))}return r.a.createElement(y.a,{twoLine:!0,avatarList:!0},e)}}]),t}(r.a.Component),G=Object(M.b)(function(e){var t={};if(e.currScheduleName){var n=e.schedules.get(e.currScheduleName);n&&(t=Object(O.a)({},n.courses))}return{courses:t}})(z),Q=n(29),$=n.n(Q),q=n(30),K=n.n(q),P=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSelectionChange=n.handleSelectionChange.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.currScheduleName||this.props.scheduleNames.length>0&&this.props.selectSchedule(this.props.scheduleNames[0])}},{key:"handleSelectionChange",value:function(e){e.target?this.props.selectSchedule(e.target.value):console.log("Event target is undefined?")}},{key:"render",value:function(){return 0===this.props.scheduleNames.length?null:r.a.createElement(K.a,{className:"schedule-select",onChange:this.handleSelectionChange,options:this.props.scheduleNames})}}]),t}(r.a.Component),X=Object(M.b)(function(e){return{currScheduleName:e.currScheduleName}},function(e){return{selectSchedule:function(t){return e(function(e){return{type:H,payload:e}}(t))}}})(P),Y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={addCourseDialogIsOpen:!1,addScheduleDialogIsOpen:!1},n.handleClick=n.handleClick.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/schedules/").then(function(e){return e.json()}).then(function(t){e.props.loadSchedules(t)}).catch(function(e){return console.log(e)})}},{key:"handleClick",value:function(e){this.props.anySchedulesCreated?this.setState({addCourseDialogIsOpen:!0}):this.setState({addScheduleDialogIsOpen:!0})}},{key:"render",value:function(){var e=this.props,t=e.schedules,n=e.currScheduleName;t.get(n);return console.log("Rendering currSchedule"),r.a.createElement("div",{className:"drawer-container"},r.a.createElement(m.a,{className:"drawer"},r.a.createElement(p.DrawerHeader,null,r.a.createElement(X,{scheduleNames:Array.from(t.keys())})),r.a.createElement(p.DrawerContent,{className:"drawer-content"},r.a.createElement(G,null))),r.a.createElement(p.DrawerAppContent,{className:"drawer-app-content"},r.a.createElement($.a,{className:"fab",icon:r.a.createElement(S.a,{icon:"add"}),onClick:this.handleClick})),r.a.createElement(v,{open:this.state.addScheduleDialogIsOpen}),r.a.createElement(E,{open:this.state.addCourseDialogIsOpen}))}}]),t}(a.Component),Z=Object(M.b)(function(e){return{anySchedulesCreated:0!==Array.from(e.schedules.keys()).length,schedules:e.schedules,currScheduleName:e.currScheduleName}},function(e){return{loadSchedules:function(t){return e(function(e){return{type:B,payload:e}}(t))}}})(Y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=n(17),te=n(31),ne={schedules:new Map,currScheduleName:void 0},ae=function(e){var t=e.split(":").map(function(e){return Number.parseInt(e)}),n=Object(te.a)(t,3);return n[0]*(60+n[1])+n[2]/60};n(55),n(56),n(57),n(58),n(59),n(60),n(61),n(62),n(63),n(64);var re=Object(ee.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0,n=Object(O.a)({},e),a=n.currScheduleName;if(t.type===H&&(n.currScheduleName=t.payload),a){var r=n.schedules.get(a);if(r)switch(t.type){case _:r.selectedCrns.add(t.payload);break;case x:r.selectedCrns.delete(t.payload);break;case A:r.courses["".concat(t.payload.dept,"-").concat(t.payload.course_num)]=t.payload;break;case I:var c=t.payload,o=c.dept,s=c.course_num;delete r.courses["".concat(o,"-").concat(s)],n.schedules.set(a,r);break;case T:n.schedules.delete(t.payload)}else{if(t.type!==L)throw Error("The schedule attempting to be accessed does not exist.");var i={name:t.payload.name,term_code:t.payload.term_code,courses:{},selectedCrns:new Set};n.schedules.set(t.payload.name,i)}}else if(t.type===B)for(var l in t.payload){var u=t.payload[l];for(var d in u.courses){var h=u.courses[d],p=!0,m=!1,b=void 0;try{for(var f,E=h.sections[Symbol.iterator]();!(p=(f=E.next()).done);p=!0){var v=f.value;v.start_time&&(v.start_time=ae(v.start_time)),v.end_time&&(v.end_time=ae(v.end_time))}}catch(C){m=!0,b=C}finally{try{p||null==E.return||E.return()}finally{if(m)throw b}}}u.selectedCrns=new Set(u.sections.map(function(e){return Number.parseInt(e.split("_")[0])})),delete u.sections,n.schedules.set(l,u)}return console.log(n),n});o.a.render(r.a.createElement(M.a,{store:re},r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.332da5e5.chunk.js.map