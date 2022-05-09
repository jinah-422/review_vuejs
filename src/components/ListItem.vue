<template>
  <ul class="item-list">
    <li v-for="item in listItems" class="post">
          <div class="points">
              {{ item.points || "0" }} .
          </div>

        <div>
            
            <div class="item-title">
            <!-- case1. item.domain이 있을경우 link로 이동 (news, jobs) -->
            <template v-if="item.domain">
                <a :href="item.url">{{ item.title }}</a>
            </template> 

            <!-- case2. item.domain이 아닌 해당 id의 질문페이지로 이동할 경우(ask) -->
            <template v-else>
                <router-link :to="`/item/${item.id}`">  {{ item.title }}</router-link>
            </template> 
            </div>

            
            <!-- caseA. item.user 경우 (by.~~~ /news, ask) -->
            <small v-if="item.user" class="small-link-text">  {{ item.time_ago }}
                <router-link :to="`/user/${item.user}`"> | by. {{ item.user }}</router-link>
            </small>

            <!-- caseB. item.url 경우 (from.~~~ /jobs ) -->
            <small v-else class="small-link-text">  {{ item.time_ago }}
                <a :href="item.url"> | from. {{ item.domain }}</a>
            </small>
        </div>

    </li>
  </ul>
</template>

<script>
export default {
    computed: {
        listItems() {
            if(this.$route.path === "/news") {
                return this.$store.state.news;
            } else if (this.$route.path === "/ask") {
                return this.$store.state.ask;
            } else if (this.$route.path === "/jobs") {
                return this.$store.state.jobs;
            } else {
                return console.log("else");
            }
        }
    }
}
</script>

<style scoped>
a {
    text-decoration-line: none;
    color: #34495e;
}

a:hover {
    color:red;
}

.item-title {
    align-items: center;
    display: flex;
    font-size: medium;
    font-weight: bold;
}

.item-list {
    padding: 0;
    margin: 0;
}

.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 2.5px solid #eee;
}

.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
    font-size: medium;
    font-family: fantasy;
}

.small-link-text {
    font-style: italic;
    color: #828282;
}

</style>