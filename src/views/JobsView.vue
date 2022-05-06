<template>
  <div>
    <p v-for="job in this.$store.state.jobs" class="container">
      <a :href="job.url" class="title">{{ job.title }}</a>  
      <small class="hour-domain">
           <div>
              {{ job.time_ago }}
              <a :href="job.url">| from. {{ job.domain }}</a>
            </div>
      </small>   
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS')
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

.hour-domain {
  font-style: italic;
}

</style>