//Declaring new variables to take the values of the different HTML id's so they can have functionality.
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');


//Adding an even listener so the add button can be clicked to add new items to the list.
addToDoButton.addEventListener('click', function(){


    //Creating a paragrpah varible to store the inputs from the user. 
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');


    //Settign the paragraph and input values as the same so that what is inserted in the list of to dos is the same as what is inputted by the user.
    paragraph.innerText = inputField.value;


    //Adding the paragraph into the list of to dos below.
    toDoContainer.appendChild(paragraph);


    //Resetting the inputfield so that the user does not have to erase previouse to do before inputting another. 
    inputField.value = "";


    //Adding an event listner to the paragraphs which are th to dos. 
    paragraph.addEventListener('click', function(){
        

        //Changing the text decoration so that clicking a to do crosses it out. Clicking once more removes the cross out. 
        paragraph.style.textDecoration = paragraph.style.textDecoration === "line-through" ? "none":"line-through"
        
    })

    
    //Adding an event listner so that if the to do items are double clicked, they will be removed from the list of to dos.
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
    
})