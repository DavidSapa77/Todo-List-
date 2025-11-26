const input = document.getElementById('inputNote');
const btnAdd = document.getElementById('btnAdd');
const display = document.getElementById('display');

// A place to store all the todos 
const storeList = [];


// add button action
btnAdd.addEventListener('click', () => {
    let enterText = input.value;
    storeList.push(enterText);
    input.value = "";
    render();
});


//the render function
function render() {

    display.innerHTML = "";

    storeList.forEach((list) => {
        const heading = document.createElement('h1');
        heading.textContent = list;
        display.appendChild(heading);

    });

};