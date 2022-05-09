<template>
    <div class="container">
        <h2> 🙋‍♀️ {{ fetchedUser.id }}'S PROFILE</h2>

        <user-profile :info="fetchedUser">
            <div slot="userName">{{ fetchedUser.id }}</div>
            <div slot="time">Joined {{ fetchedUser.created }}</div>
            <span slot="userKarma">({{ fetchedUser.karma }})</span>
        </user-profile>
    </div>
  <!-- <div class="user-container">
    <div class="user-icon"><i class="fas fa-user-circle"></i></div>
      <div class="user-description">
        <div class="user-name">{{ fetchedUser.id }}</div>
        <div class="time">{{ fetchedUser.created }}</div>
      </div>
  </div> -->
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import {mapGetters} from 'vuex';

export default {
  components: { UserProfile },
    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName)

        console.log(userName)
    },
    computed: {
        ...mapGetters(['fetchedUser']),

        userInfo() {
            return this.$store.state.user;
        }
    }
}
</script>

<style scoped>
.container {
    padding: 0 0.5rem;
}

/* .user-container {
    display: flex;
    align-items: center;
} */

/* .user-name {
    font-size: 20px;
    font-weight: bold;
} */

/* .user-description {
    padding-left: 15px;
} */

/* .user-icon {
    font-size: 3rem;
} */

/* .time {
    font-size: 0.8rem;
} */

</style>