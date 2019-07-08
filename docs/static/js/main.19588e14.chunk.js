(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(35)},29:function(e,t,a){},30:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n,s=a(5),r=a(6),o=a(8),i=a(7),l=a(9),c=a(0),u=a(20),d=a(10),m=a(23),h=a(13);!function(e){e.None="None",e.Today="Today",e.Yesterday="Yesterday",e.SevenDaysAgo="7 Days ago",e.ThirtyDaysAgo="30 Days ago",e.SixtyDaysAgo="60 Days ago",e.NinetyDaysAgo="90 Days ago",e.SixMonthsAgo="6 Months ago",e.OneYearAgo="1 Year ago"}(n||(n={}));var g=Object.keys(n).map(function(e){return n[e]});var p=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={adjust:!1,configured:!1,datepart:"days",no_params:!1,num:0,parameter:"",parameters:[]},a.onDatePartChangeWrapper=function(e){return function(t){var n=a.state.parameters,s=n.find(function(t){return t.name===e});s&&(s.selectedDate=t.target.value,a.setState({parameters:n}))}},a.adjustChange=function(e){a.setState({adjust:e.target.checked})},a.populateParams=function(){var e=window.tableau.extensions.settings.getAll();window.tableau.extensions.dashboardContent.dashboard.getParametersAsync().then(function(t){var s,r=[],o=e.parameters?JSON.parse(e.parameters):[],i=!0,l=!1,c=void 0;try{for(var u,d=function(){var t=u.value,a=void 0;if("true"===e.configured&&(a=o.find(function(e){return e.name===t.name})),"all"===t.allowableValues.type&&("date"===t.dataType||"date-time"===t.dataType)){var s=a?a.selectedDate:n.None;r.push({name:t.name,selectedDate:s})}},m=t[Symbol.iterator]();!(i=(u=m.next()).done);i=!0)d()}catch(h){l=!0,c=h}finally{try{i||null==m.return||m.return()}finally{if(l)throw c}}r.sort((s="name",function(e,t){return e[s]>t[s]?1:e[s]<t[s]?-1:0})),a.setState({no_params:0===Object.keys(r).length,parameters:r})})},a.submit=function(){window.tableau.extensions.settings.set("configured","true"),window.tableau.extensions.settings.set("parameters",JSON.stringify(a.state.parameters)),window.tableau.extensions.settings.set("adjust",a.state.adjust),window.tableau.extensions.settings.saveAsync().then(function(){window.tableau.extensions.ui.closeDialog(a.state.parameter)})},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=this;window.tableau.extensions.initializeDialogAsync().then(function(){var t=window.tableau.extensions.settings.getAll();"true"===t.configured&&e.setState({adjust:"true"===t.adjust||!1}),e.populateParams()})}},{key:"render",value:function(){var e=this;return c.createElement("div",{className:"container"},c.createElement("div",{className:"header"},"Date Updater Configuration"),c.createElement("div",null,c.createElement("p",{className:"text"},"Choose the date for the parameters you want to automatically update."),c.createElement("div",{className:"scrolly"},c.createElement("p",{className:"error",style:{display:!0===this.state.no_params?"inline":"none"}},"No open input date parameters found."),this.state.parameters.map(function(t){return c.createElement("div",{className:"dateset",key:"dataset-".concat(t.name)},c.createElement("div",{className:"pleft"},t.name),c.createElement("div",{className:"pright"},c.createElement(h.DropdownSelect,{className:"dropdown-select",kind:"line",onChange:e.onDatePartChangeWrapper(t.name),onSelect:e.onDatePartChangeWrapper(t.name),value:t.selectedDate},g.map(function(e){return c.createElement("option",{key:e},e)}))))}))),c.createElement("div",{className:"footer"},c.createElement("div",{className:"btncluster"},c.createElement(h.Checkbox,{checked:this.state.adjust,onChange:this.adjustChange,style:{width:"200px"}},"Adjust for timezone."),c.createElement(h.Button,{kind:"filledGreen",onClick:this.submit},"OK"))))}}]),t}(c.Component),y=(a(29),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={mode:"authoring"},a.configure=function(){var e="".concat(window.location.origin).concat("/extension-date-updater","/#/config");window.tableau.extensions.ui.displayDialogAsync(e,"",{height:250,width:375}).then(function(){var e=window.tableau.extensions.settings.getAll();a.updateParameters(e.parameters)}).catch(function(e){switch(e.errorCode){case window.tableau.ErrorCodes.DialogClosedByUser:console.log("Dialog was closed by user.");break;default:console.error(e.message)}})},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"updateParameters",value:function(e){var t=window.tableau.extensions.settings.getAll();e=JSON.parse(e);var a=!0,s=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var l=o.value;if(l.selectedDate)break;if(l.update){switch(l.update){case"today":l.selectedDate=n.Today;break;case"yesterday":l.selectedDate=n.Yesterday;break;case"week":l.selectedDate=n.SevenDaysAgo;break;case"month":l.selectedDate=n.ThirtyDaysAgo;break;default:l.selectedDate=n.None}delete l.update,delete l.dates}}}catch(c){s=!0,r=c}finally{try{a||null==i.return||i.return()}finally{if(s)throw r}}window.tableau.extensions.settings.set("parameters",JSON.stringify(e)),window.tableau.extensions.settings.saveAsync(),window.tableau.extensions.dashboardContent.dashboard.getParametersAsync().then(function(a){a.forEach(function(a){if("all"===a.allowableValues.type&&("date"===a.dataType||"date-time"===a.dataType)){var s=e.find(function(e){return e.name===a.name});if(s){var r=new Date;switch(s.selectedDate){case n.Yesterday:r.setDate(r.getDate()-1);break;case n.SevenDaysAgo:r.setDate(r.getDate()-7);break;case n.ThirtyDaysAgo:r.setDate(r.getDate()-30);break;case n.SixtyDaysAgo:r.setDate(r.getDate()-60);break;case n.NinetyDaysAgo:r.setDate(r.getDate()-90);break;case n.SixMonthsAgo:r.setMonth(r.getMonth()-6);break;case n.OneYearAgo:r.setMonth(r.getMonth()-12)}s.selectedDate!==n.None&&("true"===t.adjust&&r.setHours(r.getHours()-r.getTimezoneOffset()/60),a.changeValueAsync(r))}}})})}},{key:"componentWillMount",value:function(){var e=this;window.tableau.extensions.initializeAsync({configure:this.configure}).then(function(){e.setState({mode:window.tableau.extensions.environment.mode});var t=window.tableau.extensions.settings.getAll();"true"!==t.configured?e.configure():e.updateParameters(t.parameters)})}},{key:"render",value:function(){return c.createElement("div",{className:"cog "+this.state.mode,title:"This cog will not show in viewer mode."},c.createElement("svg",{className:"svg-inline--fa fa-cog fa-w-16 fa-2x click",onClick:this.configure,"aria-labelledby":"svg-inline--fa-title-1","data-prefix":"fas","data-icon":"cog",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512","data-fa-i2svg":"true"},c.createElement("path",{fill:"currentColor",d:"M444.788 291.1l42.616 24.599c4.867 2.809 7.126 8.618 5.459 13.985-11.07 35.642-29.97 67.842-54.689 94.586a12.016 12.016 0 0 1-14.832 2.254l-42.584-24.595a191.577 191.577 0 0 1-60.759 35.13v49.182a12.01 12.01 0 0 1-9.377 11.718c-34.956 7.85-72.499 8.256-109.219.007-5.49-1.233-9.403-6.096-9.403-11.723v-49.184a191.555 191.555 0 0 1-60.759-35.13l-42.584 24.595a12.016 12.016 0 0 1-14.832-2.254c-24.718-26.744-43.619-58.944-54.689-94.586-1.667-5.366.592-11.175 5.459-13.985L67.212 291.1a193.48 193.48 0 0 1 0-70.199l-42.616-24.599c-4.867-2.809-7.126-8.618-5.459-13.985 11.07-35.642 29.97-67.842 54.689-94.586a12.016 12.016 0 0 1 14.832-2.254l42.584 24.595a191.577 191.577 0 0 1 60.759-35.13V25.759a12.01 12.01 0 0 1 9.377-11.718c34.956-7.85 72.499-8.256 109.219-.007 5.49 1.233 9.403 6.096 9.403 11.723v49.184a191.555 191.555 0 0 1 60.759 35.13l42.584-24.595a12.016 12.016 0 0 1 14.832 2.254c24.718 26.744 43.619 58.944 54.689 94.586 1.667 5.366-.592 11.175-5.459 13.985L444.788 220.9a193.485 193.485 0 0 1 0 70.2zM336 256c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80z"})))}}]),t}(c.Component)),f=(a(30),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.createElement(c.Fragment,null,c.createElement("link",{rel:"stylesheet",type:"text/css",media:"screen",href:"home.css"}),c.createElement("div",{className:"icontainer"},c.createElement("div",{className:"box"},c.createElement("div",{className:"left"},c.createElement("h1",{className:"iheader"},"Date Updater"),c.createElement("span",{className:"tagline"},"Automatically update your date parameters to today's date.")),c.createElement("div",{className:"right"},c.createElement("h4",{className:"big"},"What is it?"),c.createElement("p",null,"With this extension, no longer will you need to employ crazy hacks or manually update your date parameters. This extension allows you to refresh any date parameter to today's date whenever a workbook is opened."),c.createElement("h4",{className:"big"},"Using the Extension"),c.createElement("ol",null,c.createElement("li",null,"Bring in the extension"),c.createElement("li",null,"In the configuration window, choose the date parameter to update"),c.createElement("li",null,"Click OK")),c.createElement("p",null,c.createElement("b",null,"Note:")," You can add as many instances of this extension as you like!"),c.createElement("div",{className:"gh"},"Get this extension and more in the ",c.createElement("a",{href:"https://extensiongallery.tableau.com/"},"Extension Gallery"),".")))))}}]),t}(c.Component)),w=function(){return c.createElement(c.Fragment,null,c.createElement(d.a,{path:"/",exact:!0,component:f}),c.createElement(d.a,{path:"/dateupdate",component:y}),c.createElement(d.a,{path:"/config",component:p}))},b=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.createElement(m.a,null,c.createElement(w,null))}}]),t}(c.Component);u.render(c.createElement(b,null),document.getElementById("container"))}},[[24,1,2]]]);
//# sourceMappingURL=main.19588e14.chunk.js.map