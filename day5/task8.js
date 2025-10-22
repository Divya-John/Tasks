// 1
// let date= new Date()
// console.log(date.toLocaleDateString('en-US'));
// console.log(date.toLocaleDateString("en-GB"));


// 2
// const now=new Date()

// const options={
//   weekday:'long',
//   year:'numeric',
//   month:'long',
//   day:'numeric',
//   hour:'2-digit',
//   minute:'2-digit',
//   second:'2-digit',
//   timeZoneName:'short'
// }

// const indiaTime = new Intl.DateTimeFormat("en-US", {
//   ...options,
//   timeZone: "Asia/Kolkata",
// }).format(now);

// const newYorkTime = new Intl.DateTimeFormat("en-US", {
//   ...options,
//   timeZone: "America/New_York",
// }).format(now);

// console.log(indiaTime);
// console.log(newYorkTime)


// 3
// const now=new Date()

// const formatted=new Intl.DateTimeFormat('en-us',{
//   dateStyle:'long',
//   timeStyle:'short'
// }).format(now)
// console.log(formatted)


// 4
function formatTimeZone(date,zone){
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year:'numeric',
    month:'long',
    day:'numeric',
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit',
    timeZone:zone,
    timeZoneName:'short'
  }).format(new Date(date))
}

const now=new Date();
console.log(formatTimeZone(now, "Asia/Kolkata"));