let todo=[];

function render(){
let result='';
for(let i=0;i<todo.length;i++){
	let name=todo[i].name;
	let date=todo[i].date;
	result+=`<div>${name}</div><div>${date}</div><button class="del-button" onclick="todo.splice(${i},1);render();">Delete</button>`;
}
document.querySelector('#show').innerHTML=result;
}
function append(){
let inputtext=document.querySelector('#arr');
let name=inputtext.value;
let inputdate=document.querySelector('#date');
let date=inputdate.value;
todo.push({name,date});
render();
inputtext.value='';
inputdate.value='';
}
