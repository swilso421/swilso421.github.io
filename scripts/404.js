images = new Array(5);

images[0] = '/resources/images/404-1.jpg';
images[1] = '/resources/images/404-2.jpg';
images[2] = '/resources/images/404-3.jpg';
images[3] = '/resources/images/404-4.png';
images[4] = '/resources/images/404-5.png';

function getImage() {
    n = Math.floor(Math.random() * images.length);
    document.write("<img src=" + images[n] + ">");
}