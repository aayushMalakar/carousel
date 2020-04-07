class Carousel {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.x = 0;
    this.moveLeft = true;
    this.moveRight = false;
    this.speed = 4;
  }

  init = () => {
    this.carouselContainer = document.createElement("div");
    this.carouselContainer.style.width = `${this.width}px`;
    this.carouselContainer.style.height = `${this.height}px`;
    this.carouselContainer.style.position = "relative";
    this.carouselContainer.style.overflow = "hidden";
    container.appendChild(this.carouselContainer);

    this.mainCarousel = document.createElement("div");
    this.mainCarousel.style.width = `${this.width}px`;
    this.mainCarousel.style.height = `${this.height}px`;
    this.mainCarousel.style.position = "absolute";
    this.mainCarousel.style.top = "0";
    this.mainCarousel.style.left = `${this.x}px`;
    this.carouselContainer.appendChild(this.mainCarousel);

    this.indicatorContainer = document.createElement("div");
    this.indicatorContainer.style.position = "absolute";
    this.indicatorContainer.style.bottom = "2%";
    this.indicatorContainer.style.left = "50%";
    this.indicatorContainer.style.transform = "translateX(-50%)";
    this.carouselContainer.appendChild(this.indicatorContainer);
  };

  move = (width) => {
    if (this.moveLeft) {
      if (this.x >= -width) {
        this.moveLeft = true;
      } else {
        this.moveLeft = false;
        this.moveRight = true;
      }
    }

    if (this.moveRight) {
      if (this.x >= 0) {
        this.moveLeft = true;
        this.moveRight = false;
      } else {
        this.moveRight = true;
      }
    }

    if (this.moveLeft) {
      this.x -= this.speed;
      this.mainCarousel.style.left = `${this.x}px`;
    }

    if (this.moveRight) {
      this.x += this.speed;
      this.mainCarousel.style.left = `${this.x}px`;
    }
  };
}
