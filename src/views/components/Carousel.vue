<template>
  <mdb-carousel :items="videoCarousel" indicators></mdb-carousel>
</template>

<script>
  import { mdbCarousel } from "mdbvue";
  export default {
    name: "VideoCarouselPage",
    components: {
      mdbCarousel
    },
    data() {
      return {
        videoCarousel: [
          {
            video: true,
            src: "https://duzce.edu.tr/Content/theme-v2/video/intro.mp4",
            loop: true,
            auto: true,
            muted: true
          }
        ]
      };
    }
  };
</script>