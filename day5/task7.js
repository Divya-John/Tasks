// 1
// const now=new Date()
// console.log(now.toString());
// console.log(now.toUTCString())


// 2
// let date = new Date("2025-01-01T00:00:00Z");
// console.log(date.toISOString())
// console.log(date.toLocaleString())


// 3
// function daysBetween(date1,date2){
//   const oneday=1000*60*60*24;
//   const d1=new Date(date1);
//   const d2=new Date(date2);
//   const diff=Math.abs(d1-d2)
//   return Math.round(diff/oneday)
// }
// console.log(daysBetween("2025-01-01", "2025-01-10"));



// 4
// function addDays(date,n){
//   const newDate= new Date(date);
//   newDate.setDate(newDate.getDate()+n)
//   return newDate;
// }
// const date=new Date('2025-01-01')
// const newDate=addDays(date,8)
// console.log(date.toISOString());
// console.log(newDate.toISOString())


// 5
function countdown(targetDate){
  const target=new Date(targetDate);
  const timer=setInterval(()=>{
    const now=new Date();
    const diff=target-now;
    if(diff<=0){
      console.log("Countdown completed")
      clearInterval(timer)
      return;
    }
    const days=Math.floor(diff/(1000*60*60*24))
    const hours = Math.floor((diff / (1000 * 60 * 60 ))%24);
    const minutes = Math.floor((diff / (1000 * 60))%60);
    const seconds = Math.floor((diff / 1000)%60);

    console.log(`${days}d ${hours}h ${minutes}m ${seconds}s remaining`);
  },1000)
}
countdown("2025-10-23T00:00:00Z");