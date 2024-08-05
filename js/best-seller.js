document.addEventListener('DOMContentLoaded', function () {
    const bestSellersContainer = document.querySelector('.best-sellers-container');
    const bestSellerItems = document.querySelectorAll('.best-seller-item');
    const totalItems = bestSellerItems.length;
    const visibleItems = 3;
    let currentIndex = 0;
    
    // Kích thước phần tử và khoảng cách giữa các phần tử
    const itemWidth = 411.333 + 16; // Kích thước phần tử + khoảng cách giữa các phần tử
    const containerWidth = itemWidth * totalItems;

    const bestPrevBtn = document.querySelector('#best-prev-btn');
    const bestNextBtn = document.querySelector('#best-next-btn');

    // Hàm cập nhật trạng thái của các nút
    function updateButtons() {
        bestPrevBtn.disabled = currentIndex === 0;
        bestNextBtn.disabled = currentIndex >= totalItems - visibleItems;
    }

    // Hàm cuộn tới item tiếp theo
    function slideNext() {
        if (currentIndex < totalItems - visibleItems) {
            currentIndex++;
            bestSellersContainer.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
            updateButtons();
        }
    }

    // Hàm cuộn tới item trước đó
    function slidePrev() {
        if (currentIndex > 0) {
            currentIndex--;
            bestSellersContainer.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
            updateButtons();
        }
    }

    bestPrevBtn.addEventListener('click', slidePrev);
    bestNextBtn.addEventListener('click', slideNext);

    // Khởi tạo trạng thái nút
    updateButtons();

    // Di chuyển slider mỗi 5 giây
    setInterval(slideNext, 5000); 
});
