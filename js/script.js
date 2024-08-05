document.addEventListener('DOMContentLoaded', function () {
    const dealsContainer = document.querySelector('.deals-container');
    const dealItems = document.querySelectorAll('.deal-item');
    const totalItems = dealItems.length;
    const visibleItems = 3;
    let currentIndex = 0;
    const itemWidth = dealItems[0].offsetWidth + 16;
    const containerWidth = itemWidth * totalItems;

    const prevBtn = document.querySelector('#prev-btn');
    const nextBtn = document.querySelector('#next-btn');

    // Hàm cập nhật trạng thái của các nút
    function updateButtons() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= totalItems - visibleItems;
    }

    // Hàm cuộn tới item tiếp theo
    function slideNext() {
        if (currentIndex < totalItems - visibleItems) {
            currentIndex++;
            dealsContainer.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
            updateButtons();
        }
    }

    // Hàm cuộn tới item trước đó
    function slidePrev() {
        if (currentIndex > 0) {
            currentIndex--;
            dealsContainer.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
            updateButtons();
        }
    }

    prevBtn.addEventListener('click', slidePrev);
    nextBtn.addEventListener('click', slideNext);

    // Khởi tạo trạng thái nút
    updateButtons();

    setInterval(slideNext, 5000); // Di chuyển slider mỗi 3 giây
});
