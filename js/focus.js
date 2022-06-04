const focusTask = document.querySelector('[data_todays_input]')
const focusInput = document.querySelector('div.focus_container_entry input[type=text')
const focusText = document.querySelector('[data_text]')
const focusRemoveBtn = document.querySelector('div.focus_container_entry button')
const focusLocalStorageKey = 'focus'

focusInput.addEventListener('keypress', (e) => {
  let focusInputValue = focusInput.value

  if (e.key === 'Enter') {
    localStorage.setItem(focusLocalStorageKey, focusInputValue)
    getFocus(focusLocalStorageKey)
  }
})

focusRemoveBtn.addEventListener('click', () => {
  localStorage.removeItem(focusLocalStorageKey)
  focusElementsToggle()
  focusTask.textContent = 'What is your main focus for today?'
  focusInput.value = ''
})

const getFocus = (itemKey) => {
  let focusItem = localStorage.getItem(itemKey)

  if (focusItem !== null) {
    focusElementsToggle()
    focusText.textContent = focusItem
    focusTask.textContent = 'TODAY'
  }
}

const focusElementsToggle = () => {
  focusInput.classList.toggle('hide')
  focusText.classList.toggle('hide')
  focusRemoveBtn.classList.toggle('hide')
}

getFocus(focusLocalStorageKey)
