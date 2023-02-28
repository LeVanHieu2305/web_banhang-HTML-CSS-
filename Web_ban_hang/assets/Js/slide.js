var index = 1;

function chuyen() {
    var arr = [
        'assets/image/slide_show/HINH1.png',
        'assets/image/slide_show/HINH2.png',
        'assets/image/slide_show/HINH3.png',
        'assets/image/slide_show/HINH4.png',
    ];
    document.getElementById('hinh').src = arr[index]
    index++;
    if (index == 4) {
        index = 0;
    }
}
setInterval(chuyen, 5000);