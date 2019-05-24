<template>
  <div class="v3-video">
    <video-player class="video-player-box"
                   ref="videoPlayer"
                   :options="playerOptions"
                   :playsinline="true"
                   customEventName="customstatechangedeventname"
    >
    </video-player>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        playerOptions: {
          // videojs options
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          controlBar: {
            fullscreenToggle: true
          },
          poster: "",
        }
      }
    },
    mounted () {
      console.log(this.XVideoPlayer)
    }
  }
</script>

<style>
</style>
