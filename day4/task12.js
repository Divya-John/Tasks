function getWeekNumber(date){
  const d= new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate()))
  console.log(d)
  const yearStart=new Date(Date.UTC(date.getFullYear(),0,1))
  console.log(yearStart)
  const dayOfYear=Math.floor((d-yearStart))/(24*60*60*1000)+1
  console.log(dayOfYear);

  console.log(Math.ceil(dayOfYear / 7)); 
  return Math.ceil(dayOfYear / 7);
}

function birthdaysByWeek(dates){
  const weekMap=new Map();

  for(const date of dates){
    const week=getWeekNumber(date);
    weekMap.set(week,(weekMap.get(week)||0)+1)
  }

  const result=[]
  for (const [weekNumber, birthdays] of weekMap.entries()) {
    result.push({ weekNumber, birthdays });
  }
  return result;
}

const input = [
  new Date(2025, 0, 4),
  // new Date(2025, 2, 8),
  // new Date(2025, 5, 23),
];
console.log(birthdaysByWeek(input));