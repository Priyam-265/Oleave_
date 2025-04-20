document.querySelectorAll('.faq').forEach(faq => {
    faq.addEventListener('click', () => {
        // Toggle the 'active' class on the clicked FAQ container
        faq.classList.toggle('active');
        
        // Change the plus/minus sign when the FAQ is active/inactive
        const sign = faq.querySelector('.faq-question span');
        if (faq.classList.contains('active')) {
            sign.textContent = '−'; // Change to minus when open
        } else {
            sign.textContent = '+'; // Change back to plus when closed
        }
    });
});