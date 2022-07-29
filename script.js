// Click on a close button to hide the current list item
let close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = 'none';
  }
}

// Add a 'checked' symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the 'Add' button
function newElement() {
  let li = document.createElement('li');
  li.classList.add('rounded-xl', 'items-center')
  let inputValue = document.getElementById('todoValue').value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert('You must write something!');
  } else {
    document.getElementById('tasksList').appendChild(li);
  }
  document.getElementById('todoValue').value = '';

  let span = document.createElement('button');
  let txt = document.createTextNode('\u00D7');
  span.classList.add('close', 'ransition', 'ease-in-out', 'delay-150', 'duration-300', 'absolute', 'right-0', 'top-0', 'p-3')
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = 'none';
    }
  }
}
