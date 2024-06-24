let dayCounter = 0;

function incrementDayCounter() {
  dayCounter += 1;
  document.getElementById('dayCounter').innerText = dayCounter;
}

function goBackToPreviousDay() {
  if (dayCounter > 0) {
    dayCounter -= 1;
    document.getElementById('dayCounter').innerText = dayCounter;
  }
}
