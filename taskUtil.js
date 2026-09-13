function addTask(tasks, title){
    
}// should return a new array with a new incomplete task added.

function completeTask(tasks, taskId){
    
}// should return a new array where only the matching task is completed.

function removeTask(tasks, taskId) {
    
}//should return a new array without the matching task.

function countIncompleteTasks(tasks) {
    
}//should return the number of incomplete tasks.


const tasks = [
  { id: 1, title: 'Review variables', completed: true },
  { id: 2, title: 'Practice functions', completed: false },
];
const withNewTask = addTask(tasks, 'Build task utilities');
console.log(withNewTask.map((task) => task.title));
const completed = completeTask(withNewTask, 2);
console.log(countIncompleteTasks(completed));
console.log(removeTask(completed, 1).map((task) => task.id));
console.log(tasks.length);
console.log(countIncompleteTasks(tasks));


/*
["Review variables", "Practice functions", "Build task utilities"]
1
[2, 3]
2
1
 */