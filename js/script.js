document.addEventListener('DOMContentLoaded', function() {
  const ratingContainer = document.querySelector('.rating');
  const thankYouContainer = document.querySelector('.thankyou');
  const ratingButtons = document.querySelectorAll('.rating__button');
  const submitButton = document.querySelector('.rating__submit');
  const ratingResult = document.getElementById('rating-result');
  let selectedRating = null;
  
  // Handle rating button clicks
  ratingButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove selected class from all buttons
      ratingButtons.forEach(btn => btn.classList.remove('rating__button--selected'));
      
      // Add selected class to clicked button
      this.classList.add('rating__button--selected');
      
      // Store the selected rating
      selectedRating = this.value;
    });
  });
  
  // Handle submit button click
  submitButton.addEventListener('click', function() {
    // Check if a rating was selected
    if (selectedRating) {
      // Update the rating result text
      ratingResult.textContent = selectedRating;
      
      // Hide rating container and show thank you container
      ratingContainer.style.display = 'none';
      thankYouContainer.style.display = 'block';
    } else {
      // Apply shake animation if no rating selected
      const ratingCard = document.querySelector('.rating__card');
      ratingCard.classList.add('shake');
      
      // Remove the animation class after it completes
      setTimeout(() => {
        ratingCard.classList.remove('shake');
      }, 300);
    }
  });
});