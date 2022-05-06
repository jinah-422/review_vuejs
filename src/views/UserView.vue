<template>
  <div class="user-container">
    <div class="user-icon"><i class="fas fa-user-circle"></i></div>
      <div class="user-description">
        <div class="user-name">{{ fetchedUser.id }}</div>
        <div class="time">{{ fetchedUser.created }}</div>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName)

        console.log(userName)
    },
    computed: {
        ...mapGetters(['fetchedUser'])
    }


}
</script>

<style>
.user-container {
    display: flex;
    align-items: center;
}

.user-name {
    font-size: 20px;
    font-weight: bold;
}

.user-description {
    padding-left: 15px;
}

.user-icon {
    font-size: 4rem;
}

.time {
    font-size: 0.8rem;
}

</style>