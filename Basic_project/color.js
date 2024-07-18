const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const color = this.id;
        changeBackgroundColor(color); 
    });
});

function changeBackgroundColor(color) {
    switch(color) {
        case 'grey':
            document.body.style.backgroundColor = '#9e9e9e';
            break;
        case 'white':
            document.body.style.backgroundColor = '#ffffff';
            break;
        case 'blue':
            document.body.style.backgroundColor = '#2196f3';
            break;
        case 'yellow':
            document.body.style.backgroundColor = '#ffeb3b';
            break;
        default:
            document.body.style.backgroundColor = '#ffffff'; // Default to white if no matching color
            break;
    }
}
