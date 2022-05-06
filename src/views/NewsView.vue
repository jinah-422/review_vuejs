<template>
  <div>
    <p v-for="news in this.$store.state.news" class="container">
        <a v-bind:href="news.url" class="title">{{ news.title }}</a>
        <small class="hour-user">
            {{ news.time_ago }} 
            <router-link :to="`/user/${news.user}`">| by. {{ news.user }}</router-link>
        </small>
    </p>
    
  </div>
</template>

<script>

export default {
    created() {
        this.$store.dispatch('FETCH_NEWS')
        .then(() => console.log('fetch success'))
        .catch(() => console.log('fetch failed'))       
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