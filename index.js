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
            let reg = 1;
            while(reg in local){
                reg++;
            }
            let obj = createTask(reg, title.value, description.value);
            addTask(obj, table);    
        }
    };

    readTasks(table);
});