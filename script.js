const changeColorBtn= document.getElementById('changeColor');
const box= document.querySelector('.box');

changeColorBtn.addEventListener('click', ()=> {
    if(box.style.backgroundColor === "purple") {
        box.style.backgroundColor= "blue";
        return;
    }else{
        box.style.backgroundColor= "purple";
        return;
    }
    
});

// declaring variables for the list
const itemList= document.querySelector('#itemList');
const addItemBtn= document.getElementById('addItem');
const inputHolder= document.getElementById('itemInput');

// adding event listener to the button
addItemBtn.addEventListener('click', ()=> {
    if(inputHolder.value === "") {        //if the placeholder is empty,dont add anything
        return;
    }
    const item= document.createElement('li'); //create a new list itme
    item.innerHTML= inputHolder.value; //take the value in the input field and add it to the list
    itemList.appendChild(item); //append the new item from the input field to our list
    inputHolder.value= ""; //then clear the input field
});

