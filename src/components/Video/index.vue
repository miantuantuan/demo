<template>
  <div class="sq-player-wrap">
    <div :style="{width:width,height:height}" :class="{'kplayer': playerClass,'aplayer': !playerClass}"  :ref="playerName"></div>
  </div>
</template>
<script>
  export default {
    name: 'YPlayer',
    props: {
      immediate: {
        type: Boolean,
        default: false,
      },
      width: {
        type: String,
        default: '800px',
      },
      height: {
        type: String,
        default: '450px',
      },
      playerName: {
        type: String,
        default: 'yplayer',
      },
      options: {
        type: Object,
        default: {}
      },
      customEventName: {
        type: String,
        default: 'statechanged'
      },
    },
    methods: {
    },
    created: function ()  {
    },
    mounted: function () {
      const DEFAULT_EVENTS = [
        'loadeddata',
        'canplay',
        'canplaythrough',
        'play',
        'pause',
        'waiting',
        'playing',
        'ended',
        'error'
      ]
      const emitPlayerState = (event, value, player) => {
        if (event) {
          this.$emit(event, player)
        }
        if (value) {
          this.$emit(this.customEventName, { [event]: value })
        }
      }
      const self = this
      this.options.container = this.$refs[`${this.playerName}`];
      this.yplayer = new window.YPlayer(this.options, function () {
        // events
        const events = DEFAULT_EVENTS.concat(self.events)
        // watch events
        const onEdEvents = {}
        for (let i = 0; i < events.length; i++) {
          if (typeof events[i] === 'string' && onEdEvents[events[i]] === undefined) {
            (event => {
              onEdEvents[event] = null
              this.on(event, () => {
                emitPlayerState(event, true, this)
              })
            })(events[i])
          }
        }
        self.$emit('ready', this)
      });
    },
    computed: {
      playerClass (){
        return this.playerName == 'knowledge';
      }
    },
    beforeDestroy: function () {
      // console.log(this)
      // this.yplayer && this.yplayer.destroy();
    }
  }
</script>
<style>
</style>
