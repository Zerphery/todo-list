function createTodo(title, description, dueDate, priority){
    return {title,description,dueDate,priority};
}
function createProject(heading){
    const todoList=[];
    function addTodo(title, description, dueDate, priority){
        todoList.push(createTodo(title,description,dueDate,priority))
    }
    return {todoList,addTodo,heading};
}
let projects=[];
if(!localStorage.getItem("projects")){
    projects.push(createProject("Study"));
    projects.push(createProject("Play"));
    projects[0].addTodo("DAA","Study DAA for 2 hours",new Date(2026,1,9),10);
    projects[0].addTodo("FA","Study FA for 2 hours",new Date(2026,1,8),10);
    projects[1].addTodo("Football","Play Football for 40 mins tomorrow",new Date(2026,1,10),5);
}else{
    console.log(localStorage.getItem("projects"));
    projects=JSON.parse(localStorage.getItem("projects"));
}
export {projects};