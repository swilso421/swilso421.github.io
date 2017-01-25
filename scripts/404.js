images = new Array(5);

images[0] = 'resources/404-1.jpg';
images[1] = 'resources/404-2.jpg';
images[2] = 'resources/404-3.jpg';
images[3] = 'resources/404-4.png';
images[4] = 'resources/404-5.png';

function getImage() {
    n = Math.floor(Math.random() * images.length);
    document.write("<img src=" + images[n] + ">");
}