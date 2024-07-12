enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}


const isWeekend = (day: DayOfWeek): boolean => {
    return day > 4;
}

const day: boolean = isWeekend(DayOfWeek.Monday);
console.log(day);
