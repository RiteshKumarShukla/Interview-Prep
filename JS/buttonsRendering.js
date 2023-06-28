// You've got the following date :

// let primary_buttons = [
//     {
//         text: '1',
//         text: '2',
//         text: '3',
//         text: '4',
//         text: '5',
//         text: '6',
//     }
// ]
// You need to render a list of buttons using above data , add it to a div with id='main'. Use JS to do this




let primary_buttons = [
    { text: '1' },
    { text: '2' },
    { text: '3' },
    { text: '4' },
    { text: '5' },
    { text: '6' },
];

// Get the container element with id 'main'
const container = document.getElementById('main');

// Create a new unordered list element
const ul = document.createElement('ul');

// Iterate over the primary_buttons array
primary_buttons.forEach((button) => {
    // Create a new list item element
    const li = document.createElement('li');

    // Create a button element
    const btn = document.createElement('button');

    // Set the button text
    btn.innerText = button.text;

    // Append the button to the list item
    li.appendChild(btn);

    // Append the list item to the unordered list
    ul.appendChild(li);
});

// Append the unordered list to the container
container.appendChild(ul);
