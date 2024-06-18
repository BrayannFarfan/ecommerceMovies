const closeButton_cart = document.getElementsByClassName('close_cart')[0];


closeButton_cart.addEventListener('click', function() {
  modal_cart.style.display = 'none';
  });
  

  window.addEventListener('click', function(event) {
  
    if (event.target == modal_cart) {
      modal_cart.style.display = 'none';
    }
  });