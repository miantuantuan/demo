<template>
  <div class="v3-video" ref="domVideo">
    <video-player class="video-player-box"
                   ref="videoPlayer"
                   :options="defautOptions"
                   :playsinline="true"
                  @play="onPlayerPlay($event)"
                  @pause="onPlayerPause($event)"
                  @ended="onPlayerEnded($event)"
                  @waiting="onPlayerWaiting($event)"
                  @playing="onPlayerPlaying($event)"
                  @loadeddata="onPlayerLoadeddata($event)"
                  @timeupdate="onPlayerTimeupdate($event)"
                  @canplay="onPlayerCanplay($event)"
                  @canplaythrough="onPlayerCanplaythrough($event)"

                  @statechanged="playerStateChanged($event)"
                  @ready="playerReadied"
                   customEventName="customstatechangedeventname"
    >
    </video-player>
  </div>
</template>

<script>
  import 'videojs-contrib-hls';
  import 'videojs-flash';
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.yplayer App',
        playerOptions: {
//          // videojs options
//          playbackRates: [0.7, 1.0, 1.5, 2.0],
//          sources: [{
//            type: "video/mp4",
//            src: "./static/oceans.mp4"
//          }],
          autoplay: 'muted',
          controls: true,
          aspectRatio: '16:9',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: 'application/x-mpegURL',
            // type: '',
            // type: 'video/mp4',
            src: 'https://m3u8-video.classba.cn/xplus-media/jczs_zy_7_4z_720.m3u8'
          }],
        }
      }
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      },
      defautOptions () {
        return {
//          // videojs options
//          playbackRates: [0.7, 1.0, 1.5, 2.0],
//          sources: [{
//            type: "video/mp4",
//            src: "./static/oceans.mp4"
//          }],
          autoplay: 'muted',
          controls: true,
          aspectRatio: '16:9',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: 'application/x-mpegURL',
            // type: '',
            // type: 'video/mp4',
            src: 'https://m3u8-video.classba.cn/xplus-media/jczs_zy_7_4z_720.m3u8'
          }],
        }
      }
    },
    mounted () {
        let vm = this
        this.$nextTick(() => {
        })
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
//          player.muted(false)
          player.volume(0.5);
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
          console.log('player Loadeddata!', player)
//          player.play()
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        // console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
//        console.log('player play!', player)
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        // seek to 10s
        console.log('example player 1 readied', player)
        // console.log('example 01: the player is readied', player)
      }
    }
  }
</script>

<style>
</style>
