const date = new Date("2025-6-12");
const [month, day, year] = [
  date.getMonth() + 1,
  date.getDate(),
  date.getFullYear(),
];

const formattedDate = `${year}年${month}月${day}日`;
console.log(formattedDate);  

