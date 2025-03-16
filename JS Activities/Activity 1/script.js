const countParagraph = document.getElementById('count');
const countButton = document.getElementById('countButton');

let count = 0;

countButton.addEventListener('click', function() {
    count++; 
    countParagraph.textContent = count; 
});
