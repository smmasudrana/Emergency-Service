document.addEventListener("DOMContentLoaded", function () {
    

  // heart icon event
  const heartIcons = document.getElementsByClassName('heart-icon');
  for (const heartIcon of heartIcons) {
    heartIcon.addEventListener('click', function () {
      const heartNumber = parseInt(document.getElementById('heart-number').innerText);
      const heartNumberAfterClick = Number(heartNumber) + Number(1);

      const updateHeartNumber = document.getElementById('heart-number');
      updateHeartNumber.innerText = heartNumberAfterClick;
    });
  }

  










});