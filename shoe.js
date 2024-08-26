// JavaScript for Pop-up/Modal
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');

    setTimeout(() => {
        modal.style.display = 'flex';
    }, 2000); // Display the modal after 2 seconds

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
