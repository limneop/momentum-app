// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Add quote
function getAddquote() {
  if (localStorage.getItem('addquote') === null) {
    addquote.textContent = 'Add Quote';
  } else {
    addquote.textContent = localStorage.getItem('addquote');
  }
}

// Set Add quote
function setAddquote(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('addquote', e.target.innerText);
      addquote.blur();
    }
  } else {
    localStorage.setItem('addquote', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
addquote.addEventListener('keypress', setAddquote);
addquote.addEventListener('blur', setAddquote);

// Run

setBgGreet();
getName();
getAddquote();
