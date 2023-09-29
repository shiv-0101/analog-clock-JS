const dialLines = document.getElementsByClassName('clock-dial-lines');
const clockEl = document.getElementsByClassName('analog-clock')[0];

for (let i = 1; i < 60; i++) {
  clockEl.innerHTML += "<div class='clock-dial-lines'></div>";
  dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function clock() {
  const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      d = new Date(),
      h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds(),
      date = d.getDate(),
      month = d.getMonth() + 1,
      year = d.getFullYear(),
           
      hDeg = h * 30 + m * (360/720),
      mDeg = m * 6 + s * (360/3600),
      sDeg = s * 6,
      
      hEl = document.querySelector('.clock-hour'),
      mEl = document.querySelector('.clock-minute'),
      sEl = document.querySelector('.clock-second'),
      dateEl = document.querySelector('.clock-date'),
      dayEl = document.querySelector('.clock-day');
  
      const day = weekday[d.getDay()];
  
  if(month < 9) {
    month = "0" + month;
  }
  
  hEl.style.transform = "rotate("+hDeg+"deg)";
  mEl.style.transform = "rotate("+mDeg+"deg)";
  sEl.style.transform = "rotate("+sDeg+"deg)";
  dateEl.innerHTML = date+"/"+month+"/"+year;
  dayEl.innerHTML = day;
}

setInterval("clock()", 100);
