const fronter_text = document.querySelector('#Fronter_Text');

fronter_text.addEventListener('mouseenter', () => {
  fronter_text.textContent = 'Hello! 👋';
});

fronter_text.addEventListener('mouseleave', () => {
  fronter_text.textContent = 'Projects';
});


function handleClick(boxName) {
    alert("You clicked " + boxName + "!");
}