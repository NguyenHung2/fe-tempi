document.addEventListener('DOMContentLoaded', function () {
    const dealsContainer = document.querySelector('.deals-container');
    const dealItems = document.querySelectorAll('.deal-item');
    const totalItems = dealItems.length;
    const visibleItems = 3;
    let currentIndex = 0;
    const itemWidth = dealItems[0].offsetWidth + 16; // Chiều rộng của mỗi item cộng với margin-right
    const containerWidth = itemWidth * (totalItems - 1); // Chiều rộng của container với 4 item

    function slideNext() {
        currentIndex = (currentIndex + 1) % (totalItems - visibleItems + 1);
        dealsContainer.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
    }

    setInterval(slideNext, 3000); // Di chuyển slider mỗi 3 giây
});
