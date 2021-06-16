(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.d({},{L:()=>f});var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.task=t,this.id=(new Date).getTime(),this.completed=!1,this.createdAt=new Date}var n,o,r;return n=e,r=[{key:"fromJsonList",value:function(t){return t.map((function(t){return e.fromJson(t)}))}},{key:"fromJson",value:function(t){var n=t.id,o=t.task,r=t.completed,a=t.createdAt,i=new e(o);return i.id=n,i.completed=r,i.createdAt=new Date(a),i}}],(o=null)&&t(n.prototype,o),r&&t(n,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.loadLocalStorage()}var t,r,a;return t=e,(r=[{key:"newTodo",value:function(e){console.log(e),this.todos.push(e),this.saveLocalStorage()}},{key:"deleteTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e})),this.saveLocalStorage()}},{key:"checkCompleted",value:function(e){console.log(e),this.todos.find((function(t){return t.id==e})).completed=!0,this.saveLocalStorage()}},{key:"unCheckCompleted",value:function(e){console.log(e),this.todos.find((function(t){return t.id==e})).completed=!1,this.saveLocalStorage()}},{key:"deleteCompleted",value:function(){this.todos=this.todos.filter((function(e){return!e.completed})),this.saveLocalStorage()}},{key:"saveLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"loadLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?this.todos=n.fromJsonList(JSON.parse(localStorage.getItem("todo"))):[]}}])&&o(t.prototype,r),a&&o(t,a),e}();function a(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,a=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw a}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var l=document.querySelector(".todo-list"),c=document.querySelector(".new-todo"),s=document.querySelector(".clear-completed"),d=document.querySelector(".filters"),u=function(e){var t='\n    <li class="'.concat(e.completed?"completed":"",'" data-id="').concat(e.id,'">\n        <div class="view">\n            <input class="toggle" type="checkbox" ').concat(e.completed?"checked":"",">\n            <label>").concat(e.task,'</label>\n            <button class="destroy"></button>\n        </div>\n        <input class="edit" value="Create a TodoMVC template">\n    </li>\n    '),n=document.createElement("div");return n.innerHTML=t,l.append(n.firstElementChild),n.firstElementChild};c.addEventListener("keyup",(function(e){var t=c.value.trim();if(13===e.keyCode&&""!==t){var o=new n(t);f.newTodo(o),u(o),c.value="",console.log(f)}})),l.addEventListener("click",(function(e){console.log(e);var t=e.target.localName,n=e.target.parentElement.parentElement,o=n.getAttribute("data-id");t.includes("input")&&(e.target.checked?f.checkCompleted(o):f.unCheckCompleted(o),n.classList.toggle("completed")),t.includes("button")&&(f.deleteTodo(o),l.removeChild(n))})),s.addEventListener("click",(function(e){f.deleteCompleted();for(var t=l.children.length-1;t>=0;t--){var n=l.children[t];n.classList.contains("completed")&&l.removeChild(n)}})),d.addEventListener("click",(function(e){var t=e.target.text;if(t){var n,o=a(l.children);try{var r=function(){var e=n.value;e.classList.remove("hidden");var o=e.classList.contains("completed"),r={Pendientes:function(){o&&e.classList.add("hidden")},Completados:function(){o||e.classList.add("hidden")}};r[t]&&r[t]()};for(o.s();!(n=o.n()).done;)r()}catch(e){o.e(e)}finally{o.f()}}}));var f=new r;f.todos.forEach((function(e){return u(e)}))})();