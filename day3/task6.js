function getQueue() {
  const results = [];
  return{
    enQueue(e) {
      results.push(e);
    },
    deQueue() {
      return results.shift();
    },
    peek() {
      return results[0];
    },
    isEmpty() {
      return results.length === 0;
    }
  }
}

const myQueue =getQueue();
myQueue.enQueue('1');
myQueue.enQueue('2');
console.log(myQueue.deQueue()); 
console.log(myQueue.peek()); 
console.log(myQueue.isEmpty());