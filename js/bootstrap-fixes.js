

/**
 * For some reasons, dismissing Bootstrap modal using HTML attributes 
 * isn't working, that's why I've written this script
 */
// JavaScript to dismiss modal on button click
const dismissButton = document.querySelector('.btn-bs-close');


dismissButton.addEventListener('click', () => {
    const modal = document.querySelector('.modal');

    /*
    - This doesn't work
    -------------------
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.hide();
    */


    /**
     * - Hidding the modal manually
     * (But it doesn't work properly as we need to click the trigger button twice to relaunch the modal a second time)
     */
    // Remove 'show' class
    modal.classList.remove('show');

    // Set display to 'none' after 200ms
    // Remove 'modal-open' class from body after 200ms
    // Remove the modal-backdrop element
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');

      // Remove the modal-backdrop element
      const backdrop = document.querySelector('.modal-backdrop');
      backdrop.parentNode.removeChild(backdrop);
    }, 200);

    // Remove 'aria-hidden' attribute
    modal.removeAttribute('aria-hidden');
});