
async function ParallelLimit(tasks:(()=>Promise<Response>)[], limit:number) {
  const results:object[] = [];
  let completedTasks = 0;
  let taskIndex = 0;

   async function runNextTask(){
    if (taskIndex >= tasks.length) return;
    const currentIndex = taskIndex++;

    try {
      const response = await tasks[currentIndex]();
      const data = await response.json();
      results[currentIndex]=data;
    } catch (error) {
      console.error(`Task failed:`, error);
    } finally {
      completedTasks++;
      if (completedTasks < tasks.length && taskIndex < tasks.length) {
        await runNextTask();
      }
    }
  };
  const workers = [];
  for (let i = 0; i < Math.min(limit, tasks.length); i++) {
    workers.push(runNextTask());
  }
  await Promise.all(workers);
  return results;
}
const tasks = [
  () => fetch("https://jsonplaceholder.typicode.com/todos/1"),
  () => fetch("https://jsonplaceholder.typicode.com/todos/2"),
  () => fetch("https://jsonplaceholder.typicode.com/todos/3"),
];

const output = await ParallelLimit(tasks, 2);
console.log(output);
