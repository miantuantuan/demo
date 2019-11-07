<template>
  <div id="ddd" ref="app">
    <VueDragResize :isActive="true" :w="200" :h="minHeight" :minh="minHeight" v-on:resizing="resize" v-on:dragging="resize" axis="x" :isDraggable="false">
      <h3>Hello World!</h3>
      <p>{{ top }} х {{ left }} </p>
      <p>{{ width }} х {{ height }}</p>
    </VueDragResize>
  </div>
</template>

<script>
  import VueDragResize from 'vue-drag-resize';

  export default {
    name: 'app',

    components: {
      VueDragResize
    },

    data() {
      return {
        width: 0,
        height: 0,
        top: 0,
        left: 0
      }
    },

    methods: {
      resize(newRect) {
        this.width = newRect.width;
        this.height = this.minHeight;
        this.top = newRect.top;
        this.left = newRect.left;
      }
    },
    mounted () {
      console.log(this.$refs)
    },
    computed: {
      minHeight () {
        return  Number(`${document.documentElement.clientHeight}`)
      }
    },
  }
</script>
