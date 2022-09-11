
// контроль даты yyyy-MM-dd
function useDate(timeElapsed){
  const today = new Date(timeElapsed);
  return [ today.toDateString() ];
}

function CreateDate(){
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const day = date.getDate();
  
  const currentMonth = month < 10 ? `0${month}` : month;
  const currentDay = day < 10 ? `0${day}` : day;
  
  return `${year}-${currentMonth}-${currentDay}`;
}

function useShowDate(value){
  const date = new Date(value);

  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const weekDay = week[date.getDay()];

  const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = monthArray[date.getMonth()];

  const day = date.getDate();
  const currentDay = day < 10 ? `0${day}` : day;

  return `${weekDay}, ${currentDay} ${month}`
}

export { useDate, CreateDate, useShowDate };