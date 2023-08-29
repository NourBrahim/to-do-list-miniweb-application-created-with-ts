"use strict";
const newTask = document.getElementById("newtask");
const newTaskButton = document.getElementById("addbutton");
let idDel = -1;
let tasks = [];
let delets = [];
if (newTask) {
    newTask.addEventListener("keypress", (keypressed) => {
        if (keypressed.key === "Enter") {
            let task = newTask.value;
            if (task != "") {
                idDel += 1;
                tasks.push(task);
                newTask.value = "";
                const listOftasks = document.getElementById("myList");
                const tasksCreated = document.createElement("input");
                const deleteButton = document.createElement("button");
                deleteButton.id = `${idDel}`;
                const lableTask = document.createElement("label");
                const breakline = document.createElement("br");
                if (tasksCreated) {
                    tasksCreated.classList.add("checkboxStyle");
                    tasksCreated.type = "checkbox";
                    tasksCreated.name = "elementsOfTheList";
                }
                lableTask.style.textDecoration = "none";
                delets.push(idDel);
                lableTask.textContent = `${task}`;
                deleteButton.textContent = " delete task ";
                listOftasks === null || listOftasks === void 0 ? void 0 : listOftasks.append(tasksCreated);
                listOftasks === null || listOftasks === void 0 ? void 0 : listOftasks.append(lableTask);
                listOftasks === null || listOftasks === void 0 ? void 0 : listOftasks.append(deleteButton);
                listOftasks === null || listOftasks === void 0 ? void 0 : listOftasks.append(breakline);
                deleteButton.addEventListener("click", () => {
                    tasksCreated.remove();
                    lableTask.remove();
                    breakline.remove();
                    deleteButton.remove();
                });
                tasksCreated.addEventListener("click", () => {
                    if (lableTask.style.textDecoration === "none") {
                        lableTask.style.textDecoration = "line-through";
                    }
                    else {
                        lableTask.style.textDecoration = "none";
                    }
                });
            }
        }
    });
    // newTaskButton.addEventListener("click" , () => {
    //     let task:string = newTask.value ;
    //     if(task != "" ){
    //         tasks.unshift(task);
    //     newTask.value = "";
    //     const listOftasks = document.getElementById("myList");
    //     const tasksCreated = document.createElement("input");
    //     const deleteButton = document.createElement("button");
    //     const lableTask = document.createElement("label");
    //     const breakline = document.createElement("br");
    //     if (tasksCreated) {
    //         tasksCreated.classList.add("checkboxStyle");
    //         tasksCreated.type = "checkbox";
    //         tasksCreated.name = "elementsOfTheList";
    //     }
    //     lableTask.textContent = `${task}`;
    //     deleteButton.textContent = " delete task ";
    //     listOftasks?.append(tasksCreated);
    //     listOftasks?.append(lableTask);
    //     listOftasks?.append(deleteButton);
    //     listOftasks?.append(breakline);
    // }
    // });
}
