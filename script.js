
const clear =document.querySelector(".clear");
clear.addEventListener('click',function(){
    localStorage.clear();
    location.reload();
});

const dateElement =document.getElementById("date");
let options= {weekday:'long', month:'short',day:'numeric'};
let today =new Date();
dateElement.innerHTML =today.toLocaleDateString("en-US",options);
 
const CHECK="fa-check-circle";
const UNCHECK="fa-circle-thin";
const LINE_THROUGH="lineThrough";
//select Element
const list =document.getElementById("list");
function addToDo(todos,id,done,trash){
    if(trash){return;}

    const DONE =done ? CHECK: UNCHECK;
    const LINE = done ? LINE_THROUGH: "";

    const text = <li class="item">
                    <i class="fa ${DONE} complete" job="complete" id="${id}"></i>
                    <p class="text ${LINE}"> ${todos} </p>
                    <i class="fa fa-trash-o delete" job="delete" id="${id}"></i>
                </li>
    const position ="beforeend";
    //insertAdjacentHTML()
    list.insertAdjacentHTML(position,text);

}

const input=document.getElementById("input");
document.addEventListener("keyup",function(event){
    if(event.keyCode == 13){
        const todos =input.value;
        if(todos){
            addToDo(todos,id,false,false);
            LIST.push(
                {
                    name: todods,
                    id: id,
                    done: false,
                    trash:false
                }
            );
        }
        input.value(" ");
        id++;

    }
});

function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    LIST[element.id].done= LIST[element.id].done ? false:true;
}


function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash=true;
}

list.addEventListener("click", function(event)
{
    let element= event.target;
    const elementJOB=event.target.attributes.job.value;
    if(elementJOB == "complete"){
        completeToDo(element);
    }else if(elementJOB == "delete"){
        removeToDo();
    }
});
let LIST,id;
let data=localStorage.getItem("TODO");
if(data){
    LIST =JSON.parse(data);
    loadToDo(LIST);
    id=LIST.length; 

}
else{
    LIST = [];
    id=0;
}

function loadToDo(array){
    array.forEach(function(item){
        addToDo(item.name,item.id,idem.done,item.trash);

    });
}




