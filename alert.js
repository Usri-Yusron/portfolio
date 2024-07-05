// alert("untuk pengalaman yg lebih baik, gunakan handphone anda!")

// mansory
document.addEventListener('DOMContentLoaded', function() {
    var elem = document.querySelector('.grid');
    var msnry = new Masonry(elem, {
        // options
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        percentPosition: true
    });
});
