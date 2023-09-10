const popup = document.querySelector('.popup');

popup.addEventListener('click', () => {
    setTimeout(() => {
        slideUpAndHide(popup);
    }, 500); // Delay for 0.5 seconds before sliding up
});

function slideUpAndHide(element) {
    const initialHeight = element.clientHeight;
    const targetHeight = initialHeight * 0.9; // Move up by 10%
    const interval = setInterval(() => {
        const currentHeight = element.clientHeight;
        if (currentHeight > targetHeight) {
            element.style.height = currentHeight - 10 + 'px'; // Adjust the decrement value for faster animation
            element.style.transform = `translateY(-${initialHeight - currentHeight}px)`; // Move the element upward
        } else {
            clearInterval(interval);
            element.style.display = 'none';
        }
    }, 10); // Adjust the interval duration for faster animation
}

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  /* Close/hide the sidenav */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
