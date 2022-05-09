<template>
  <div class="user-container">
      <div class="user-icon"><i class="fas fa-user-circle"></i></div> 

      <div class="user-description">
          <div class="userName">
             <slot name="userName">
                 <router-link :to="`/user/${info.user}`">{{ info.user }}</router-link>
              <!-- 상위 컴포넌트에서 정의할 영역 div slot= userName ~  -->
             </slot>
          </div>

        <div class="time">
          <slot name="time">
              <!-- {{ info.time_ago || 'Joined ' + info.created | ',' }} -->
              <span v-if="info.points">, ({{ info.points }}) points</span>
              <!-- <slot name="time"> -->
                  <!-- 상위 컴포넌트에서 정의할 영역 -->
              <!-- </slot> -->

              <slot name="userKarma">
                  <!-- 상위 컴포넌트에서 정의할 영역(NewsView, AskView ...etc) -->
              </slot>
          </slot>
      </div>
          <!-- <router-link :to="`/user/${userInfo.user}`">{{  }}</router-link> -->
      </div>
  </div>
</template>


<script>
export default {
    // 상위 컴포넌트에서 내려받은 props data
    props: {
        info: {type: Object}
    }
}
</script>

<style scoped>
.user-container {
    display: inline-flex;
    align-items: center;
    padding: 1rem;
}

.user-description {
    padding-left: 15px;
}

.user-icon {
    font-size: 3.5rem;
}

.userName {
    font-size: 20px;
    font-weight: bold;
}

.time {
    font-size: 0.8rem;
}

h2 {
    margin-bottom: 0.5rem;
    margin-left: 0.2rem;
    padding-left: 0.5rem;
}

</style>