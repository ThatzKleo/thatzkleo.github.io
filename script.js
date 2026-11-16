const fronter_text = document.querySelector('#Fronter_Text');

fronter_text.addEventListener('mouseenter', () => {
  fronter_text.textContent = 'Hello! 👋';
});

fronter_text.addEventListener('mouseleave', () => {
  fronter_text.textContent = 'Projects';
});


function handleClick(GoTo) {
    if(GoTo == "Go-to-site-updates"){
      window.location.href = "/site-update";
    }
}