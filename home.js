let list = document.getElementById('list');
let count = document.getElementById('count');
let textInput = document.getElementById('text');
let button = document.getElementById('button');
let item = '';

button.addEventListener('click', () => {
  // Here I check if input is not empty
  textInput.value == '' ? alert('ENTER VALUE!') : addElement();
});

textInput.addEventListener('change', (e) => {
  item = e.target.value;
});

textInput.addEventListener('keyup', (e) => {
  // Listen for Enter press
  if (e.keyCode == 13) {
    addElement();
  }
});

function addElement() {
  let li = document.createElement('li');
  li.textContent = item;
  list.append(li);
  textInput.value = '';
}