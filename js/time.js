// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/31/ca/2b/31ca2bcf105003bf97be1aaf9e564df6.jpg')";
    greeting.textContent = 'Good Morning, ';
		document.body.style.color = 'white';

  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('https://images5.alphacoders.com/382/382894.jpg')";
    greeting.textContent = 'Good Afternoon, ';
    document.body.style.color = 'white';
  } else {
    // Evening
    document.body.style.backgroundImage = "url('https://www.popsci.com/uploads/2018/12/12/A6CPB4I4X46PGDQFXZIINNFOUE.jpg?auto=webp')";
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  }
}

showTime();