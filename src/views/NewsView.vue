<template>
  <div>
    <!-- <p v-for="news in this.$store.state.news" class="container">
        <a v-bind:href="news.url" class="title">{{ news.title }}</a>
        <small class="hour-user">
            {{ news.time_ago }} 
            <router-link :to="`/user/${news.user}`">| by. {{ news.user }}</router-link>
        </small>
    </p> -->
    <list-item></list-item>
    
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue"
import bus from "../utils/bus.js"

export default {
  components: { ListItem },
    created() {
        bus.$emit('start:spinner') // bus로 emit이벤트 (start:spinner) 보냄

        // 지연 test
        setTimeout(() => { 
        this.$store.dispatch('FETCH_NEWS')
        .then(() => {
            bus.$emit('end:spinner');
        })
        .catch((error) => {
            console.log(error)
        })
        }, 1500);


        // this.$store.dispatch('FETCH_NEWS')
        // .then(() => {
        //     console.log('spinner end')
        //     bus.$emit('end:spinner');
        // })
        // .catch((error) => {
        //     console.log(error)
        // })

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