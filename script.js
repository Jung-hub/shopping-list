// const itemForm = document.getElementById('item-form');
// const itemInput = document.getElementById('item-input');
// const itemList = document.getElementById('item-list');
// const clearBtn = document.getElementById('clear');
// const itemFilter = document.getElementById('filter');
// const formBtn = itemForm.querySelector('button');
// let isEditMode = false;

// function displayItems() {
//   const itemsFromStorage = getItemsFromStorage();
//   itemsFromStorage.forEach((item) => addItemToDOM(item));
//   checkUI();
// }

// function onAddItemSubmit(e) {
//   e.preventDefault();

//   const newItem = itemInput.value;

//   // Validate Input
//   if (newItem === '') {
//     alert('Please add an item');
//     return;
//   }

//   // Check for edit mode
//   if (isEditMode) {
//     const itemToEdit = itemList.querySelector('.edit-mode');

//     removeItemFromStorage(itemToEdit.textContent);
//     itemToEdit.classList.remove('edit-mode');
//     itemToEdit.remove();
//     isEditMode = false;
//   } else {
//     if (checkIfItemExists(newItem)) {
//       alert('That item already exists!');
//       return;
//     }
//   }

//   // Create item DOM element
//   addItemToDOM(newItem);

//   // Add item to local storage
//   addItemToStorage(newItem);

//   checkUI();

//   itemInput.value = '';
// }

// function addItemToDOM(item) {
//   // Create list item
//   const li = document.createElement('li');
//   li.appendChild(document.createTextNode(item));

//   const button = createButton('remove-item btn-link text-red');
//   li.appendChild(button);

//   // Add li to the DOM
//   itemList.appendChild(li);
// }

// function createButton(classes) {
//   const button = document.createElement('button');
//   button.className = classes;
//   const icon = createIcon('fa-solid fa-xmark');
//   button.appendChild(icon);
//   return button;
// }

// function createIcon(classes) {
//   const icon = document.createElement('i');
//   icon.className = classes;
//   return icon;
// }

// function addItemToStorage(item) {
//   const itemsFromStorage = getItemsFromStorage();

//   // Add new item to array
//   itemsFromStorage.push(item);

//   // Convert to JSON string and set to local storage
//   localStorage.setItem('items', JSON.stringify(itemsFromStorage));
// }

// function getItemsFromStorage() {
//   let itemsFromStorage;

//   if (localStorage.getItem('items') === null) {
//     itemsFromStorage = [];
//   } else {
//     itemsFromStorage = JSON.parse(localStorage.getItem('items'));
//   }

//   return itemsFromStorage;
// }

// function onClickItem(e) {
//   if (e.target.parentElement.classList.contains('remove-item')) {
//     removeItem(e.target.parentElement.parentElement);
//   }else if (e.target.closest("li")) {
//     setItemToEdit(e.target);
//   }
// }

// function checkIfItemExists(item) {
//   const itemsFromStorage = getItemsFromStorage();
//   return itemsFromStorage.includes(item);
// }

// function setItemToEdit(item) {
//   isEditMode = true;

//   itemList
//     .querySelectorAll('li')
//     .forEach((i) => i.classList.remove('edit-mode'));

//   item.classList.add('edit-mode');
//   formBtn.innerHTML = '<i class="fa-solid fa-pen"></i>   Update Item';
//   formBtn.style.backgroundColor = '#228B22';
//   itemInput.value = item.textContent;
// }

// function removeItem(item) {
//   if (confirm('Are you sure?')) {
//     // Remove item from DOM
//     item.remove();

//     // Remove item from storage
//     removeItemFromStorage(item.textContent);

//     checkUI();
//   }
// }

// function removeItemFromStorage(item) {
//   let itemsFromStorage = getItemsFromStorage();

//   // Filter out item to be removed
//   itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

//   // Re-set to localstorage
//   localStorage.setItem('items', JSON.stringify(itemsFromStorage));
// }

// function clearItems() {
//   while (itemList.firstChild) {
//     itemList.removeChild(itemList.firstChild);
//   }

//   // Clear from localStorage
//   localStorage.removeItem('items');

//   checkUI();
// }

// function filterItems(e) {
//   const items = itemList.querySelectorAll('li');
//   const text = e.target.value.toLowerCase();

//   items.forEach((item) => {
//     const itemName = item.firstChild.textContent.toLowerCase();

//     if (itemName.indexOf(text) != -1) {
//       item.style.display = 'flex';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// }

// function checkUI() {
//   itemInput.value = '';

//   const items = itemList.querySelectorAll('li');

//   if (items.length === 0) {
//     clearBtn.style.display = 'none';
//     itemFilter.style.display = 'none';
//   } else {
//     clearBtn.style.display = 'block';
//     itemFilter.style.display = 'block';
//   }

//   formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
//   formBtn.style.backgroundColor = '#333';

//   isEditMode = false;
// }

// // Initialize app
// function init() {
//   // Event Listeners
//   itemForm.addEventListener('submit', onAddItemSubmit);
//   itemList.addEventListener('click', onClickItem);
//   clearBtn.addEventListener('click', clearItems);
//   itemFilter.addEventListener('input', filterItems);
//   document.addEventListener('DOMContentLoaded', displayItems);

//   checkUI();
// }

// init();

//Get item's form, item's input, and item's list element
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

function createTextNode(textContent) {
  return document.createTextNode(textContent);
}
//classes: remove-item btn-link text-red
function createButton(classes) {
  //create a new button
  const button = document.createElement('button');

  //set attributes of the button
  button.setAttribute('class', classes);
  
  //create a new icon with its class
  const icon = createIcon('fa-solid fa-xmark');
  
  //append icon into button
  button.appendChild(icon);

  //return button
  return button;
}

//classes: fa-solid fa-xmark
function createIcon(classes) {
  // create image tag and set attribute in the image
  const icon = document.createElement('i');

  //set attributes of the icon
  icon.setAttribute('class', classes);
  
  //return icon
  return icon;
}


function createItem(textContent) {
  // creation of li
  // create a new li
  const li = document.createElement('li');
  
  // create text node of li
  const textNode = createTextNode(textContent);
  
  // append textNode into li
  li.appendChild(textNode);
  
  // create a new button 
  const button = createButton('remove-item btn-link text-red');

  // append the button into li 
  li.appendChild(button);
  
  //return new item
  return li;
}

function addItem(e) {
  e.preventDefault();

  //Validate Input
  const userInput = itemInput.value.trim();
  if (!userInput) {
    alert('Please add an item');
    return;
  }

  //console.log(document.__proto__);
  // create a new li
  const li = createItem(userInput);
  
  // append li into item list
  itemList.appendChild(li);
  
  //call check UI
  checkUI();

  // reset itemInput.value = ''
  itemInput.value = '';
  
}

function removeItem(e) {
  if (e.target.nodeName === 'I') {
    //console.log(`user click ${e.target.nodeName}`);
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
      checkUI();
    }
  } else {
    console.log(`user clicked ${e.target.nodeName}`);
  }
  //e.target.remove();
}

function clearItems() {
  if (confirm('Are you sure?')) {
    while (itemList.hasChildNodes()) {
      itemList.removeChild(itemList.firstChild);
    }
    checkUI();
  }
}

function checkUI() {
  const items = itemList.querySelectorAll('li');
  if (items.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }
}

//addEventListioner
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);

checkUI();