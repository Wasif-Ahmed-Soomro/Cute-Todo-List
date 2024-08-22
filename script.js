
// // localStorage.setItem("hello", "tommy")
// let a =localStorage.getItem("hello");
// console.log(a);

let btn = document.getElementById('button');
let innertaskdiv = document.getElementById('innertaskdiv');
let rmvbtn = document.getElementById('rmvbutton')

let progressdropzone = document.getElementById('inprogress')
let taskdropzone = document.getElementById('todo')
let completeddropzone = document.getElementById('completed')
let heading1 = document.getElementById('heading1')
let heading2 = document.getElementById('heading2')
let heading3 = document.getElementById('heading3')
let userinput = document.getElementById('tasktype')
let addbtn = document.getElementById('addbtnid')
let box = document.getElementById('createbox')
let close = document.getElementById('close')
let mainheading = document.getElementById('mainheading')


setInterval(()=>{
    mainheading.style.fontStyle = 'italic';
},3000)
setInterval(()=>{
    mainheading.style.fontStyle = 'normal';
},4000)


let i=0;
createnewtask = () => {
    box.style.display= 'block'
    addbtn = () =>{

        const input = document.getElementById('tasktype');
        
        if(input){
        const value1 = input.value;
        input.value="";
       console.log(value1);
       
       
       
       if(value1){
        const added = document.getElementById('h5add')
           added.innerHTML=`${value1} was added`
       setTimeout(()=>{
           added.innerHTML="";
       },1000)
        localStorage.setItem(i, value1);
        const taskDiv = document.createElement('div');
        taskDiv.className = 'innertaskdivcss';
        taskDiv.draggable = true;
        taskDiv.textContent = localStorage.getItem(i);

        // Assign a unique ID to each taskDiv
        taskDiv.id = `task-${i}`;

        // Add event listeners to the new task div
        taskDiv.addEventListener('dragstart', (e) => {
            
            e.dataTransfer.setData('text/plain', e.target.id);
        });

        
        
        // Append the new div to the container
        innertaskdiv.appendChild(taskDiv);
        i++;
    }}}
};



clearall = () => {
    confirm("Do you want to clear all your tasks?")
    if(confirm){
    localStorage.clear();
    innertaskdiv.innerHTML="";
    progressdropzone.innerHTML="";
    completeddropzone.innerHTML="";
    
    }

}
function closed(){
    box.style.display='none'
}



function dragg(){
    progressdropzone.addEventListener('dragover', (e)=>{
        e.preventDefault();
        
        });
        
        progressdropzone.addEventListener('drop', (e)=>{
            const data1 = e.dataTransfer.getData('text/plain');
        const draggedElement1 = document.getElementById(data1);
        

    if (draggedElement1) {
        progressdropzone.appendChild(draggedElement1);
    }
    });

    
    taskdropzone.addEventListener('dragover', (e)=>{
        e.preventDefault();
        
        });
        
        taskdropzone.addEventListener('drop', (e)=>{
          const data2 = e.dataTransfer.getData('text/plain');
        const draggedElement2 = document.getElementById(data2);
        

    if (draggedElement2) {
        taskdropzone.appendChild(draggedElement2);
    }
    });

    completeddropzone.addEventListener('dragover', (e)=>{
        e.preventDefault();
        
        });
        
        completeddropzone.addEventListener('drop', (e)=>{
          const data3 = e.dataTransfer.getData('text/plain');
        const draggedElement3 = document.getElementById(data3);
        

    if (draggedElement3) {
        completeddropzone.appendChild(draggedElement3);
    }
    });

    
    }
    
    dragg();
    
    

