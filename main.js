const getActualSleepHours = () => 6 + 7 + 8 + 9 + 8 + 5 + 10 + 11;

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDept = () => {
let actualSleepHours = getActualSleepHours();
let idealSleepHours = getIdealSleepHours();

if (actualSleepHours === idealSleepHours) {
  console.log('You have the perfect amount of sleep time! 😌')
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You had more ${actualSleepHours - idealSleepHours} hours in bed than what you needed! 😂`)
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`You need more sleep than that, my friend... 😴 You slept less ${idealSleepHours - actualSleepHours} hours this week.`)
}
}
calculateSleepDept();
