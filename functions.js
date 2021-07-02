const local = window.localStorage;

function addTask(obj, table) {
  //add object to the local storage
  local.setItem(obj.id, JSON.stringify(obj));

  //Number of task
  const numCol = document.createElement('td');
  numCol.innerText = obj.id;

  //Title
  const titleCol = document.createElement("td");
  titleCol.innerText = obj.title;

  //Description
  const descriptionCol = document.createElement("td");
  descriptionCol.innerText = obj.description;

  //Checkbox
  const checkCol = document.createElement("td");
  const check = document.createElement("input");
  check.type = "checkbox";
  check.checked = obj.checked;
  check.onclick = () => {
    obj.checked = !obj.checked;
    local.setItem(obj.id, JSON.stringify(obj));
  };
  checkCol.appendChild(check);

  const bttnsCol = document.createElement("td");
  
  //Edit button
  const edit = document.createElement("button");
  edit.innerText = "Edit";
  edit.onclick = () => {
    titleCol.contentEditable = true;
    descriptionCol.contentEditable = true;
    done.style.display = "block";
  };
  bttnsCol.appendChild(edit);
  
  //Delete button
  const del = document.createElement("button");
  del.innerText = "Delete";
  del.onclick = () => {
    local.removeItem(obj.id);
    window.location.href = "/";
  };
  bttnsCol.appendChild(del);
  
  //Done button
  const done = document.createElement("button");
  done.innerText = "Done";
  done.style.display = "none";
  done.onclick = () => {
    obj.title = titleCol.innerText;
    obj.description = descriptionCol.innerText;
    local.setItem(obj.id, JSON.stringify(obj));
    done.style.display = "none";
  };
  bttnsCol.appendChild(done);

  //Row
  const row = document.createElement("tr");
  row.appendChild(numCol);
  row.appendChild(titleCol);
  row.appendChild(descriptionCol);
  row.appendChild(checkCol);
  row.appendChild(bttnsCol);
  row.id = obj.id;

  //Add row to the table
  table.appendChild(row);
}

function createTask(id, title, description) {
  let obj = {
    id,
    title,
    description,
    checked: false,
  };

  return obj;
}

function readTasks(table) {
  for (let key of Object.keys(local).sort()) {
    addTask(JSON.parse(local[key]), table);
  }
}
