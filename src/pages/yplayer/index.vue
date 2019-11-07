<template>
  <div class="v3-video" ref="domVideo">
    <y-player id="video_box" ref="player" :options="options"
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
    ></y-player>
  </div>
</template>

<script>
  import YPlayer from '@/components/Video'
  export default {
    name: 'app',
    data () {
      return {
        options:{
          container: document.getElementById('video_box'),
          preload: 'metadata',

          screenshot: true,
          video: {
            url: 'http://media1.classba.cn/ec_2018qj_9_y_8.mp4',

            // url: 'http://media1.classba.cn/el_tb_r_8au9_b_2.2.mp3',
            // url: 'https://api.dogecloud.com/player/get.m3u8?vcode=5ac682e6f8231991&userId=17&ext=.m3u8',
            // url: 'http://m3u8-video-tx.classba.cn/xplus-media/t160603_3_720.m3u8',
            // url: 'http://uploads.classba.cn/temp/cc_r_8b_7.m3u8',
            // url: './socket/1566555026744460.mp4',
            pic: 'https://file1.classba.cn/homepage.png',
            thumbnails: './socket/montage.jpg'
          },
          theme: "#FDB550",
          setting: false,
          autoplay: true,
          quality: true,
          // playbackRates: [0.75, 1, 1.25, 1.5], // speed
          playbackRates: [1.5, 1.25, 1, 0.75], // speed
          pictureinpicture: true,
          highlight: [
            {
              time: 20,
              text: '这是第 20 秒',
            },
            {
              time: 120,
              text: '这是 2 分钟',
            },
          ],
          vertical:true,
          fullscreen: {
            full: true,
            fullweb: false
          },
          light: true,
          // endpanel: true,
          endpanel: {
            feedbackBtn: true,
            replayBtn:true
          },
          feedback: {
            teacher_id: "3002",
            module_type: 1116871278059341,
            batch_num: 1,
            rs_sys_ver: 'v3',
            video_id: "VIDEO",
            token: 'p07pTuKWUk4SPWVORHboSEXpuE+rHRbJg6icJQDmxZYXwU2NLv6lmkP1PyarnRJXwOUNuQeEWhZu1DDP6rJPTaJRDnPctNF7UmweKCasK9p4TA3J+/nwd8Nu9FsttYK0KEk58I1LKfi0Nj/EyYmb4bFha7Aqlwv+iyZCIGWCGO6zfrUUXVZ36rl3gv00VCLM7uydJrd53XGHumIjECbFwBWy1Q7r/43+wZ7uNOQnXJz7u8aal69cKF9VN+UJa+0+sTsKGZdm9dt1iZqdPbw+6i/UnSFpb3Jwz8YBFKi9uI6pEtTkU2PybYqEdnn5XlERWIWmtFMvB2pEn+GaDZcgImiRXBoscDDip9cRR5OWGivquIHO6DsCQAsYCRllqbY11YZUmpw3nzf5h+HZLIwTrYIoVcD3SXLtP7sDHZDISApqj8/zCZrLdpiTDey/nSicvL9OpZAJGMCC41Ij3v26AGpksgBxd5cuwaiwK9rv4XZZM2TFkE5GpHDdwCZKr2aT8j34oy/bZKZyxolB7X3t0hg59SRW6falpXvURWC0zB5RoQmshEcKzCzU713IlAlE5/gUap8gJxRPnk7V2oK6Sjv5q+wv5Chn47aMaE0V+SueU42l8CINJD0jVvUIwN85Efi5/Zwsq/DeWz9/th+kwz14VUMCx5KHou0zLH3x44NcKw3y/AszTzWsAnztHOJ1jRjgvj+LAMvJGqPUq6WogJvnkxCWyTPfkQn3ILYMRW/0swKbs5/pxyizjZCHFzWUtCGxWnd9Qg9eBcB7w7sv78uIxHvsKE0PxxpErw+HX5Be84pS8MEvDzetV8KIxRcoHD30vyhZqFQsbZ0BjOOpT7oekP+knDuP3nwfaQIsdXvNgy5dpv2wsOA2iGZJTBsy9IUdveLkSdhs+IhZYxWh8iAvYpxoXo/8MXXUZHdDtrDSHRNzrIIt4CODo1AfrhJDdV9dBe3rdpdveaYjOydycx0MndD6qjX9cV5RmwG3EGzQ0py6Vcjmg9s84L15xmvOVrCwFBsFsJzOVPxQF8wQJLLHR6ToauxsJ+f0ObVB/BzVxcijeOedlEi01tTcCO/Pmug20xC4uNsl9DVlFO5WmO2WvcQAk4sa5USPXi6jHL6MEvCMPEWS2TGvJ17wD/00HPcg8wkG0Kpdd498C9WTB3DN/Uy+QP2lt2QDpeJ0iTtUGVn+C9eYh8YAcSAUORth5aj0IO3Dlr/MvXvp9IJ7o9NyMIlxZQV43ui5Dznxh5VSLDh2a654NmJiKLP+FAgmEja4JNmLXSBy8Xedkwb8ItZG9UyBxdURf1D+eBptbJwhug0RqI2ijD3YOO0qT7PeF7diu9zHfKBRvbCyOR2mvSJppZ4Ed7J9rkdKRHELHhYH2BDVGRna',
            api: 'http://aiexchange.test.classba.cn/api/feedback'
          },
          userInfo: {
            account_id: 0,
            app_type: "2",
            client_ip: "58.246.15.250",
            course_id: 1062916029001968,
            event: "LOGIN",
            flow_id: "10",
            learning_version: 1,
            lesson_id: "1162916029001998",
            nick: "一大爷",
            role: "STUDENT",
            school_id: 128,
            stage: 30,
            subject_id: 2,
            teacher_id: "3002",
            topic_id: "19713",
            user_id: "6865656247730047",
            //必传
            "video_type": "QUESTION",
            "video_url": 'http://media1.classba.cn/ec_2018qj_9_y_8.mp4',
            //选填
            "module_type": 1116871278059341,
            "module_name": "高效学习",
            "submodule_type": 0,
            "submodule_name": "",
            //选填
            "tag_code": "t11150102_13",
            // "tag_code_relearn_cnt": 0,
            "main_code": "",
            "question_title_id": "",
            "question_ids": ["58c5e580f4aeb56eb2636481"],
            "video_id": "",
          },
          socket: false,
          contextmenu: [
          ]
        }
      }
    },
    components: {
      YPlayer
    },
    computed: {
    },
    mounted () {

    },
    methods: {
      // listen event
      onPlayerPlay(player) {
//          player.muted(false)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        console.log('player Loadeddata!', player)
        player.play()
      },
      onPlayerWaiting(player) {
        console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        console.log('example player 1 readied', player)
      }
    }
  }
</script>

<style>
</style>
