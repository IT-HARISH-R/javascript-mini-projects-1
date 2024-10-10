const sumit1 = document.getElementById('addTaskBtn');
const deleteall3 = document.getElementById('deleteTaskBtn');
const tasklist1 = document.getElementById('taskList');
let listgetdata=[];

function addData(){
    tasklist1.innerHTML='';

    listgetdata.forEach((getin, index)=>{
        const newli = document.createElement('li');
        newli.innerHTML=`${getin.task} ${getin.status1} <button id="deleteTaskBtn" onClick="deleteone(${(index)})" >Delete</button>`
        tasklist1.appendChild(newli);
    })
}

sumit1.addEventListener('click',()=>{
    const taskdisplayvalue = document.getElementById('taskInput');

    const ststus = document.getElementById('taskStatus');
    console.log(taskdisplayvalue.value);
    console.log(ststus.value);

    listgetdata.unshift({task: taskdisplayvalue.value, status1: ststus.value });
    
    addData();

    taskdisplayvalue.value = '';
    ststus.value = "Completed";
})

deleteall3.addEventListener('click',() =>{
    listgetdata =[];
    console.log(listgetdata);
    addData();

})

window.deleteone = (index)=>{
    listgetdata.splice(index,1);
    addData();
}

