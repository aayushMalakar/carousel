class Image {
  constructor(parent, xPosition, imageSource) {
    this.parent = parent;
    this.width = parent.width;
    this.height = parent.height;
    this.y = 0;
    this.x = xPosition;
    this.imageSource = imageSource;
  }

  init = () => {
    this.newImage = document.createElement("img");
    this.newImage.style.width = `${this.width}px`;
    this.newImage.style.height = `${this.height}px`;
    this.newImage.style.position = "absolute";
    this.newImage.style.top = "0";
    this.newImage.style.left = `${this.x}px`;
    this.newImage.src = this.imageSource;
    this.newImage.style.objectFit = "cover ";
    this.parent.mainCarousel.appendChild(this.newImage);
  };
}
