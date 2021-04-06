<template>
  <div class="slider">
    <!-- <img src="../assets/banner_Sandra.jpg" alt=""> -->
    <img class="only-mobile" src="../assets/bannerSam3_mobile.jpg" alt="">
    <div class="icons">
      <div><b-icon icon="grip-vertical"></b-icon></div>
      <div><b-icon icon="grip-vertical"></b-icon></div>
      <div><b-icon icon="grip-vertical"></b-icon></div>
    </div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <!-- <b-carousel-slide
        caption="Sandra Martínez"
        text="Soy Desarrolladora Front-end"
        img-src="img/back_blue.81ab57db.jpg"
      ></b-carousel-slide> -->

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="/img/bannerSam3.3f875365.png">
        <div class="info">
          <h1>Sandra Martínez</h1>
          <p>Soy Desarrolladora <strong>Front-end</strong> </p>
        </div>
      </b-carousel-slide>
      <!-- <b-carousel-slide img-src="/img/banner_Sandra.5e6a66a0.jpg">
        <div class="info">
          <h1>Sandra Martínez</h1>
          <p>Soy Desarrolladora <strong>Front-end</strong> </p>
        </div>
      </b-carousel-slide> -->
      <!-- <b-carousel-slide img-src="img/back_blue.81ab57db.jpg">
        <div class="info">
          <h1>Sandra Martínez2</h1>
          <p>Soy Desarrolladora <strong>Front-end</strong> </p>
        </div>
      </b-carousel-slide> -->

      <!-- Slides with image only -->
      <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide> -->

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <!-- <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide> -->

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->
    </b-carousel>


    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>