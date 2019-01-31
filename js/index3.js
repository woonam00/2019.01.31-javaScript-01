/* const log = console.log;
log( $("#box-wrap"));
//반복문
//i++ => i = i + 1;
//for(초기값; 조건; 증가값) {

$("#bt-ok").click(function(){
    for(var i=1; i<=100; i++) {
        $("#box-wrap").append('<div>'+i+'</div>');
     }
});
 */

const log = console.log;
       
var btok = document.getElementById("bt-ok");
var btinit = document.getElementById("bt-init");
var boxwrap = document.getElementById("box-wrap");

btok.addEventListener("click", function(){
    for(var i=1; i<=100; i++) {boxwrap.innerHTML +='<div>'+i+'</div>'}
});

btinit.addEventListener("click", function(){boxwrap.innerHTML = '';});

//$("#boxwrap").html('');
//$("#boxwrap").empty();
