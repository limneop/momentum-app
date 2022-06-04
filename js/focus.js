var focusTask = document.querySelector('[data_todays_input]')
var focusInput = document.querySelector('div.focus_container_entry input[type=text')
var focusText = document.querySelector('[data_text]')
var focusRemoveBtn = document.querySelector('div.focus_container_entry button')
var focusLocalStorageKey = 'focus'

focusInput.addEventListener('keypress', (e) => {
  let focusInputValue = focusInput.value

  if (e.key === 'Enter') {
    localStorage.setItem(focusLocalStorageKey, focusInputValue)
    getFocus(focusLocalStorageKey)
  }
})

var getFocus = (itemKey) => {
  let focusItem = localStorage.getItem(itemKey)

  if (focusItem !== null) {
    focusElementsToggle()
    focusText.textContent = focusItem
    focusTask.textContent = 'TASK'
  }
}

focusRemoveBtn.addEventListener('click', () => {
  localStorage.removeItem(focusLocalStorageKey)
  focusElementsToggle()
  focusTask.textContent = 'What is your main focus for today?'
  focusInput.value = ''
})

var focusElementsToggle = () => {
  focusInput.classList.toggle('hide')
  focusText.classList.toggle('hide')
  focusRemoveBtn.classList.toggle('hide')
}

getFocus(focusLocalStorageKey)
