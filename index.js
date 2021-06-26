document.addEventListener('DOMContentLoaded', function(){
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const add = document.getElementById('add');
    const table = document.getElementById('tableBody');
 
    add.onclick = function(){

        //ask for empty text inputs
        if(title.value === '' || description.value === ''){
            //show error
            console.error("Empty task");
        }

        //theres no empty text inputs, so add the task
        else{
            //declare object
            let obj;

            //if the actual register is not in the local storage, creates the task
            if(!(++regs in local)){
                console.log("is not in local")
                obj = createTask(regs, title.value, description.value);
                console.log(regs);
            }
            //if the actual register is in the local storage, udate it and creates the task
            else{
                console.log("is in local")
                obj = createTask(++regs, title.value, description.value);
            }

            addTask(obj, table);    
        }
    };

    readTasks(table);
});