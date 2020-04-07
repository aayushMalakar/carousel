class Start {
  constructor() {
    this.carouselWidth = 0;
    this.counter = 0;
    this.pauseCarousel = false;
    this.timeout;
    this.indicators = [];
  }

  init = () => {
    this.carousel = new Carousel(600, 300);
    this.carousel.init();

    for (let imageCount = 0; imageCount < IMAGES.length; imageCount++) {
      this.image = new Image(
        this.carousel,
        imageCount * this.carousel.width,
        IMAGES[imageCount]
      );

      this.indicator = new Indicator(this.carousel, this.carouselWidth);
      this.indicator.init();
      this.indicators.push(this.indicator);

      this.image.init();
      this.carouselWidth++;
    }

    this.carouselWidth = (this.carouselWidth - 1) * this.carousel.width;

    this.button = new Button(this.carousel, this);
    this.button.init();

    this.run = requestAnimationFrame(this.runCarousel);
  };

  runCarousel = () => {
    if (-this.carousel.x % this.carousel.width === 0 && !this.pauseCarousel) {
      this.counter += 4;
      this.pauseCarousel = true;
      this.timeout = setTimeout(() => {
        this.counter = 0;
        this.carousel.move(this.carouselWidth);
        this.pauseCarousel = false;
      }, 2000);
    }

    if (!this.pauseCarousel) {
      this.counter += 4;
      this.carousel.move(this.carouselWidth);
    }

    this.button.updateWidthOffset(this.counter, this.timeout);

    for (let i = 0; i < this.indicators.length; i++) {
      this.indicators[i].updateCurrentPosition();
    }

    this.run = requestAnimationFrame(this.runCarousel);
  };
}

const start = new Start();
start.init();
