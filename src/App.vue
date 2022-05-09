<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <spinner v-bind:loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import Spinner from '../src/components/Spinner.vue'
import bus from './utils/bus.js'

export default {
  data() {
    return {
      loadingStatus: false
    }
  },
  components: {
    ToolBar,
    Spinner
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner)
    bus.$on('end:spinner', this.endSpinner)
  },
  deforeDestroy() {
    bus.$off('start:spinner', this.startSpinner)
    bus.$off('off:spinner', this.endSpinner)
  }
}
</script>

<style>
/* body {
  padding: 0;
  margin: 0;
} */

a {
  color: #34495e;
  text-decoration: none;
  text-decoration-line: none;
}

/* 링크에 커서 올라갔을 때 */
a:hover { 
  color: blueviolet;
  /* color: #42b883; */
  text-decoration: underline;
}

a .router-link-exact-active {
  text-decoration: none;
}

.fade-enter-active .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter .fade-leave-to {
  opacity: 0;
}


</style>