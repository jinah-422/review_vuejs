<template>
  <div>
    <section>
        <div class="user-container">
            <div class="user-icon"><i class="fas fa-user-circle"></i></div>

            <div class="user-description">
                <router-link :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
            
            ({{ fetchedItem.points }}) <br>
            <div class="time">
            {{ fetchedItem.time_ago }} </div>
            </div>
        </div>
    
        <div class="ques-mark">
            <h2 class="title">
                <i class="fa-solid fa-comment-question"></i>
                {{ fetchedItem.title }}
            </h2>
        </div>
        
        <div v-html="fetchedItem.content" class="content">
        <!-- {{ fetchedItem.content }} -->
        </div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    created() {
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', itemId)

        // console.log('itemID : '+itemId)
    },
    computed: {
        ...mapGetters(['fetchedItem'])
    }

}
</script>

<style scoped>
.user-icon {
    font-size: 3rem;
}

.user-container {
    display: flex;
    align-items: center;
}

.user-description {
    padding-left: 15px;
}

.time {
    font-size: 0.7rem;
}

h2 {
    margin-bottom: 0.5rem;
    margin-left: 0.2rem;
    padding-left: 0.5rem;
}

.content {
  border: ridge;
  padding: 0.5rem;
}

.ques-mark {
    align-items: center;
}

</style>