class Indicator {
  constructor(parent, index) {
    this.carousel = parent;
    this.width = 15;
    this.height = 15;
    this.margin = 5;
    this.index = index;
  }

  init = () => {
    this.imageIndicator = document.createElement("span");
    this.imageIndicator.style.display = "inline-block";
    this.imageIndicator.style.width = `${this.width}px`;
    this.imageIndicator.style.height = `${this.height}px`;
    this.imageIndicator.style.margin = `${this.margin}px`;
    this.imageIndicator.style.borderRadius = "50%";
    this.imageIndicator.style.border = "1px solid white";
    this.imageIndicator.style.zIndex = "10000";
    this.imageIndicator.addEventListener("click", this.moveCarouselToPosition);
    this.carousel.indicatorContainer.appendChild(this.imageIndicator);
  };

  createIndicator = () => {};

  moveCarouselToPosition = () => {
    this.carousel.x = -this.index * this.carousel.width;
    this.carousel.mainCarousel.style.left = `${this.carousel.x}px`;
  };

  updateCurrentPosition = () => {
    if (-this.carousel.x === this.index * this.carousel.width) {
      this.imageIndicator.style.backgroundColor = "white";
    } else {
      this.imageIndicator.style.backgroundColor = "transparent";
    }
  };
}
