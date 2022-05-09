<template>
  <div>
      <!-- <p v-for="ask in this.$store.state.ask" class="container">
       <router-link v-bind:to="`item/${ask.id}`" class="title">{{ ask.title }}</router-link> -->
          <!-- ask에서는 title누르면 해당id의 질문페이지로 이동 -->
          <!-- ItemView로 route -->
          <!-- <small class="hour-user">
            <div>
              {{ask.time_ago}}
              | by. {{ ask.user }}
            </div>
          </small>
      </p> -->

      <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import bus from '../utils/bus.js'

export default {
  components: { ListItem },
  created() {
    bus.$emit('start:spinner')

    setTimeout(() => {
    this.$store.dispatch('FETCH_ASK')
    .then(() => {
      bus.$emit('end:spinner');
    })
    .catch((error) => {
      console.log(error)
    })
    }, 1500);

  }
}
</script>

<style scoped>
a {
    text-decoration-line: none;
    color: #34495e;
}

.title {
  align-items: center;
  display: flex;
}

.container {
  border-bottom: 2.5px solid #eee;
}

.hour-user {
  font-style: italic;
}

</style>