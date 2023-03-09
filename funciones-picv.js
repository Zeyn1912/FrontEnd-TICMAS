const hideButton = document.getElementById('hide-button');
hideButton.addEventListener('click', () =>{
    let hideImage = document.getElementById('columna2');
    let currentDisplay = columna2.style.display;
    if (currentDisplay === 'none'){
        hideImage.style.display = 'block';
    } else {
        hideImage.style.display = 'none';
    }
} )