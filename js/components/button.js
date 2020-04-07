class Button {
  constructor(parent, main) {
    this.carousel = parent;
    this.moveLeft = parent.moveLeft;
    this.moveRight = parent.moveRight;
    this.main = main;
    this.widthOffset;
    this.timeout;
  }

  init = () => {
    this.leftButton = document.createElement("button");
    this.leftButton.innerText = "<";
    this.leftButton.style.position = "absolute";
    this.leftButton.style.top = "50%";
    this.leftButton.style.transform = "translateY(-50%)";
    this.leftButton.style.marginLeft = "10px";
    this.leftButton.classList.add("btn");
    this.leftButton.addEventListener("click", this.changeDirection2);
    this.carousel.carouselContainer.appendChild(this.leftButton);

    this.rightButton = document.createElement("button");
    this.rightButton.innerText = ">";
    this.rightButton.style.position = "absolute";
    this.rightButton.style.top = "50%";
    this.rightButton.style.transform = "translateY(-50%)";
    this.rightButton.style.right = "0";
    this.rightButton.style.marginRight = "10px";
    this.rightButton.classList.add("btn");
    this.rightButton.addEventListener("click", this.changeDirection);
    this.carousel.carouselContainer.appendChild(this.rightButton);
  };

  changeDirection = () => {
    if (-this.carousel.x <= this.main.carouselWidth - this.carousel.width) {
      if (!this.carousel.moveRight) {
        if (-this.carousel.x % this.carousel.width === 0) {
          if (this.timeout) {
            clearTimeout(this.timeout);
          }
          this.carousel.x -= this.carousel.width;
        } else {
          this.carousel.x -= this.carousel.width - this.widthOffset - 4;
          if (this.timeout) {
            clearTimeout(this.timeout);
          }
        }
      } else {
        if (-this.carousel.x % this.carousel.width === 0) {
          if (this.timeout) {
            clearTimeout(this.timeout);
          }
          this.carousel.x -= this.carousel.width;
        } else {
          if (this.timeout) {
            clearTimeout(this.timeout);
          }
          this.carousel.x -= this.widthOffset;
        }
      }

      this.carousel.mainCarousel.style.left = `${this.carousel.x}px`;

      this.main.pauseCarousel = false;
      this.carousel.moveLeft = true;
      this.carousel.moveRight = false;
    }
  };

  changeDirection2 = () => {
    //prevents scrolling past the last left image
    if (this.carousel.x !== 0) {
      // checks if the carousel if moving left
      if (this.carousel.moveLeft) {
        if (this.carousel.x % this.carousel.width === 0) {
          if (this.timeout) {
            clearTimeout(this.timeout);
          }
          this.carousel.x += this.carousel.width;
        } else {
          this.carousel.x += this.widthOffset;
          if (this.timeout) {
            clearTimeout(this.timeout);
          }
        }
      } else {
        if (-this.carousel.x % this.carousel.width === 0) {
          if (this.timeout) {
            clearTimeout(this.timeout);
          }
          this.carousel.x += this.carousel.width;
        } else {
          if (this.timeout) {
            clearTimeout(this.timeout);
          }
          this.carousel.x += this.carousel.width - this.widthOffset - 4;
        }
      }

      this.carousel.mainCarousel.style.left = `${this.carousel.x}px`;

      this.main.pauseCarousel = false;
      this.carousel.moveLeft = false;
      this.carousel.moveRight = true;
    }
  };

  updateWidthOffset = (widthOffset, timeout) => {
    this.widthOffset = widthOffset;
    this.timeout = timeout;
  };
}
