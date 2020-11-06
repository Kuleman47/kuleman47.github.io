let imagestoLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
      image.removeAttribute('data-src');
    };
};

const imageOptionss = {
    threshold:0.5
};

if("IntersectionObserver" in window){
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) =>{
            if(item.isIntersecting){
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imageOptionss);
    imagestoLoad.forEach((img) =>{
        imgObserver.observe(img);
    });
}

else 
imagestoLoad.forEach((img) => {
        loadImages(img);
    });