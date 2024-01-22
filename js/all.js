new Swiper('.swiper-container', {
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
});

gsap.registerPlugin(ScrollTrigger);

const numbers = {
  num1: 245,
  num2: 100,
  num3: 50,

}


gsap.to('a', {
  scrollTrigger: {
    trigger: '#section06',
    start: 'top center',
    end: 'bottom center',
    toggleActions: 'play none none reset',
    // markers: true,

  },
  onUpdate() {
    $('#aa').text((numbers.num1 * this.totalProgress()).toFixed(0))
    $('#bb').text((numbers.num2 * this.totalProgress()).toFixed(0))
    $('#cc').text((numbers.num3 * this.totalProgress()).toFixed(0))
  },
  duration: 1
})

// console.dir(document.querySelector('#aa'))