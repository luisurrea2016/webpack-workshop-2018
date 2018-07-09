const makeImage = url => {
    const image = document.createElement('img');
    image.width = '100';
    image.height = '100';
    image.src = url;
    return image;
};

export default makeImage;