function showMessage(type) {
  const msgBox = document.getElementById('home-message');
  msgBox.style.display = 'block';

  if (type === 'learn') {
    msgBox.innerText = "We use hand-picked beans and sustainable brewing techniques to deliver perfection.";
  } else if (type === 'order') {
    msgBox.innerText = "Your order is just a click away. We're preparing something special for you!";
  }
}
let timeoutId;

function showMessage(type) {
  const msgBox = document.getElementById('home-message');

  // Show the box
  msgBox.style.display = 'block';
  msgBox.style.opacity = '1';

  // Set the message content
  if (type === 'learn') {
    msgBox.innerText = "We use hand-picked beans and sustainable brewing techniques to deliver perfection.";
  } else if (type === 'order') {
    msgBox.innerText = "Your order is just a click away. We're preparing something special for you!";
  }

  // Clear any previous timeout if button clicked again quickly
  clearTimeout(timeoutId);

  // Hide after 4 seconds
  timeoutId = setTimeout(() => {
    msgBox.style.opacity = '0';
    setTimeout(() => {
      msgBox.style.display = 'none';
    }, 500); // wait for fade-out animation
  }, 1000); // show for 4 seconds
}