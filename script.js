document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-image');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const closeBtn = document.querySelector('.close');

    images.forEach(image => {
        image.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImage.src = this.src;
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.stopPropagation();
            const imageContainer = btn.parentElement;
            const image = imageContainer.querySelector('.gallery-image');
            imageContainer.remove();
        });
    });
});
