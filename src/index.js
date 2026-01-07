import "./styles.css";
import { projects } from "./projects";
const sidebar=document.querySelector(".sidebar");
const content=document.querySelector(".content");
function clear(element){
    while(element.childElementCount){
        element.removeChild(element.firstElementChild);
    }
}
function displayProject(projectInfo){
    const project=document.createElement("div");
    const viewButton=document.createElement("button");
    viewButton.textContent="View";
    const heading=document.createElement("h2");
    heading.textContent=projectInfo.heading;
    project.appendChild(heading);
    project.appendChild(viewButton);
    sidebar.appendChild(project);
    viewButton.addEventListener("click",(event)=>{
        clear(content);
        for(let i=0;i<projectInfo.todoList.length;i++){
            const todoItem=document.createElement("div");
            const title=document.createElement("h2");
            title.textContent=projectInfo.todoList[i].title;
            const editButton=document.createElement("button");
            editButton.textContent="See/Edit";
            let formDisplayed=false;
            editButton.addEventListener("click",(event)=>{
                if(formDisplayed==false){
                    displayTodo(projectInfo.todoList[i]);
                }
            });
            todoItem.appendChild(title);
            todoItem.appendChild(editButton);
            content.appendChild(todoItem);
            function displayTodo(){
                formDisplayed=true;
                const form=document.createElement("form");
                const titleLabel=document.createElement("label");
                const descriptionLabel=document.createElement("label");
                const dateLabel=document.createElement("label");
                const priorityLabel=document.createElement("label");
                const titleForm=document.createElement("input");
                const descriptionForm=document.createElement("textarea");
                const dueDateForm=document.createElement("input");
                const priorityForm=document.createElement("input");
                titleLabel.textContent="Title:";
                titleForm.value=projectInfo.todoList[i].title;
                descriptionLabel.textContent="Description:";
                descriptionForm.value=projectInfo.todoList[i].description;
                dateLabel.textContent="Date:";
                dueDateForm.value=projectInfo.todoList[i].dueDate;
                priorityLabel.textContent="Priority:";
                priorityForm.type="number";
                priorityForm.value=projectInfo.todoList[i].priority;
                const saveButton=document.createElement("button");
                saveButton.textContent="Save";
                saveButton.addEventListener("click",(event)=>{
                    event.preventDefault();
                    formDisplayed=false;
                    projectInfo.todoList[i].title=title.textContent=titleForm.value;
                    projectInfo.todoList[i].description=descriptionForm.value;
                    console.log(descriptionForm.value);
                    projectInfo.todoList[i].dueDate=dueDateForm.value;
                    projectInfo.todoList[i].priority=priorityForm.value;
                    todoItem.removeChild(form);
                    console.log(JSON.stringify(projects));
                    localStorage.setItem("projects",JSON.stringify(projects));
                });
                form.appendChild(titleLabel);
                form.appendChild(titleForm);
                form.appendChild(descriptionLabel);
                form.appendChild(descriptionForm);
                form.appendChild(dateLabel);
                form.appendChild(dueDateForm);
                form.appendChild(priorityLabel);
                form.appendChild(priorityForm);
                form.appendChild(saveButton);
                todoItem.appendChild(form);
            }
        }
    });
}
function displayProjects(){
    for(let i=0;i<projects.length;i++){
        console.log(projects[i].heading);
        displayProject(projects[i]);
    }
}
displayProjects();