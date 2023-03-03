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
const formBtn = itemForm.querySelector('button');

let isEditMode = false;
/**
 * display all items from localStorage while loading page
 */
function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => addItemToDom(item));
  checkUI();
}

function checkIfItemExists(item) {
  const itemsFromStorage = getItemsFromStorage();
  return itemsFromStorage.includes(item);
}

/**
 * create a new text node 
 * @param {string} textContent - the content of the text 
 * @returns {object} textNode - the object of textNode
 */
function createTextNode(textContent) {
  return document.createTextNode(textContent);
}

/**
 * create a new button 
 * @param {string} classes - the className for a new button 
 * @returns {object} button - the object of the new button
 */
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

/**
 * cteate a new icon with class names
 * 
 * @param {string} classes - set the attribue of className
 * @returns {object} icon - the object of <i></i>
 */
//classes: fa-solid fa-xmark
function createIcon(classes) {
  // create image tag and set attribute in the image
  const icon = document.createElement('i');

  //set attributes of the icon
  icon.setAttribute('class', classes);
  
  //return icon object
  return icon;
}

/**
 * create a new <li></li>
 * @param {string} textContent - the text content of <li></li>  
 * @returns {object} - the object of <li></li>
 */
function createItem(textContent) {
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

/**
 * add a new item when user sumbit an item name
 * @param {object} e - event object 
 * @returns none - when user's input is empty or all whitespaces
 */
function addItemSubmit(e) {
  e.preventDefault();

  //Validate Input
  const userInput = itemInput.value.trim();
  if (!userInput) {
    alert('Please add an item');
    return;
  }
  // check for edit mode
  // true
  // 1 find li with class name of edit - mode
  // 2 remove the li from the localStorage
  // 3 remove the li
  // 4 set isEditMode to false
  if (isEditMode) {
    const itemToEdit = itemList.querySelector('.edit-mode');
    removeItemFromStorage(itemToEdit.textContent);
    itemToEdit.remove();
  } else {
    if (checkIfItemExists(userInput)) {
      alert('That item already exists!');
      return;
    }
  } 

  //add item when user submit the input
  addItemToDom(userInput); 
  
  //add item into localStorage
  addItemToStorage(userInput);

  //call check UI
  checkUI();

}

function getItemsFromStorage() {
  //get items' string from localStorage
  const stringItemsFromStorage = localStorage.getItem('items');
  //check the data in localStorage is null or not
  //if null - the means of no data in localStorage and then create a new array and return it
  //otherwise - use JSON to convert data from localStorage and return it
  // let itemsFromStorage;
  // if (stringItemsFromStorage === null) {
  //   itemsFromStorage = [];
  // } else {
  //   itemsFromStorage = JSON.parse(stringItemsFromStorage);
  // }
  // return itemsFromStorage;
  return stringItemsFromStorage === null? new Array(): JSON.parse(stringItemsFromStorage);
}

/**
 * add item into localStorage
 * 
 * @param {string} item - the name of the item 
 */
function addItemToStorage(item) {
  
  
  //create a variable to store an array from localStorage
  //check the data in localStorage is null or not
  //if null - the mean of no data in localStorage and create a new array
  //otherwise - use JSON to convert data fron localStorage and store into itemsFromStorage
  let itemsFromStorage = getItemsFromStorage();

  //push item into the array of itemFromStorage
  itemsFromStorage.push(item);
  
  //Update data in the localStorage by stringifying the array and storing into localStorage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));

}
/**
 * remove the item from the array by given item content
 * @param {string} itemContent - the item that should be removed from the array 
 */
function removeItemFromStorage(itemContent) {
  //get items fron the localStorage
  let items = getItemsFromStorage();

  //first way: find index of matched item content and then call array.splice(index, elementCount)
    //const indexOfFoundItem = items.findIndex(item => item === textContentOfLi);
    
  //delete the element from the array
  //items.splice(indexOfFoundItem, 1);
    
  //second way: filter out the matched item
  items = items.filter((item) => item !== itemContent);

  //set items into localStorage
  localStorage.setItem('items', JSON.stringify(items));

}


/**
 * create a new item and  append it into item's list
 * 
 * @param {string} userInput - new item's name 
 */
function addItemToDom(userInput) {
  //console.log(document.__proto__);
  // create a new li
  const li = createItem(userInput);
  
  // append li into item list
  itemList.appendChild(li);
}

/**
 * check if users click the cross button
 * @param {object} e - Event of clicking the cross button 
 */
function onClickItem(e) {
  const nodeName = e.target.nodeName;
  if (nodeName === 'I') {
    //if (confirm('Are you sure?')) {
    removeItem(e.target.parentElement.parentElement);
    //}
  } else if (nodeName === 'LI') {
    console.log(nodeName);
    setItemToEdit(e.target);
  }
}

function removeAllChildNodes(givenObject) {
  while (givenObject.hasChildNodes()) {
    formBtn.removeChild(givenObject.firstChild);
  };
  return givenObject;
}

function setItemToEdit(item) {
  //enable isEditMode from false to true
  isEditMode = true;

  itemList.querySelectorAll('li').forEach(i => i.classList.remove('edit-mode'));

   
  //add class named 'edit-mode' into classList
  item.classList.add('edit-mode');
  formBtn.innerHTML = '<i class="fa-solid fa-pen"></i>  Update Item';
  formBtn.style.backgroundColor = '#228B22';
  itemInput.value = item.textContent;

  /*
  while (formBtn.hasChildNodes()) {
    formBtn.removeChild(formBtn.firstChild);
  };
  formBtn.style.backgroundColor = '#228B22';
  formBtn.appendChild(createIcon('fa-solid fa-pen'));
  formBtn.appendChild(createTextNode('Update Item'));
  */
  
}


/**
 * remove the item by clicking the cross button of the item
 * @param {object} e - Event of clicking the cross button 
 */
function removeItem(item) {
  
  if (confirm('Are you sure?')) {
    //get item's text content
    const textContentOfLi = item.firstChild.textContent;

    //remove item fron localStorage
    removeItemFromStorage(textContentOfLi);

    //remove li
    item.remove();

    //check ui
    checkUI();
  }
}

/**
 * clear all items fron the item list
 */

function clearItems() {
  if (confirm('Are you sure?')) {
    while (itemList.hasChildNodes()) {
      itemList.removeChild(itemList.firstChild);
    }
    localStorage.removeItem('items');
    checkUI();
  }
}

/**
 * check item list is empty or not
 * if empty - block clear button and the input of item filter
 * otherwise - display clear button and the input of item filter
 */
function checkUI() {
  

  //check the number of items
  //if the number is 0, then block clear button and item filter
  const items = itemList.querySelectorAll('li');
  if (items.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }
  //reset itemInput
  itemInput.value = '';
  isEditMode = false;
  formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
  formBtn.style.backgroundColor = '#333';
  
  
}


/**
 * filter keyword-matched items by given user's input
 * @param {object} e - Event object  
 */

function filterItems(e) {
  /** flow chart
   *  1 get user input and convert with lower case
   *  2 get all items from itemList
   *  3 check each item content is matched with user's input -
   *    index >= 0: item's style display is equal to 'flex'
   *    index < 0: item's style display is equal to 'block' 
   * 
  */ 

  //Get user input
  const userInput = e.target.value.trim().toLocaleLowerCase();

  //Get all li elements
  const items = itemList.querySelectorAll('li');

  //Check each item content with user's input
  items.forEach((item) => item.firstChild.textContent.toLocaleLowerCase().indexOf(userInput) >= 0 ?
    item.style.display = 'flex': item.style.display = 'none');
}

/**
 * initialise addEventListener and functions while loading page at first time
 */

function init() {
  //addEventListioner
  itemForm.addEventListener('submit', addItemSubmit);
  //itemList.addEventListener('click', removeItem);
  itemList.addEventListener('click', onClickItem);
  clearBtn.addEventListener('click', clearItems);

  //use 'input' keyword to check user's typeing
  itemFilter.addEventListener('input', filterItems);

  //add document addEvenListener to load items from localStorage
  document.addEventListener('DOMContentLoaded', displayItems)

  checkUI();
}

//store 'name': 'Jung'
//localStorage.setItem('name', 'Jung');

//get 'name' by using localstorage.getItem('name')
//const getName = localStorage.getItem('name');
//console.log(getName);

//remove 'name': 'Jung' from local storage
//localStorage.removeItem('name');

//remove all items from local storage
//localStorage.clear();

//use json

init();