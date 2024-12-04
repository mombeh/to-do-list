const inputBox = document.getElementById('input-box')
const addTask = document.getElementById('click')
const emptyList = document.getElementById('list')

addTask.addEventListener('click', () => {
  const finishButton = inputBox.value.trim()
  if (finishButton === '') {
    alert('Please enter a task')
    return
  }

  const emptyButton = document.createElement('li')
  emptyButton.className = 'em'
  emptyButton.style.padding = '5px'
  emptyButton.style.listStyle = 'none'
  emptyButton.style.marginRight = '10px'
  emptyButton.style.fontSize = '20px'
  emptyButton.textContent = finishButton
  emptyList.append(emptyButton)
})
