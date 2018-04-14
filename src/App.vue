<template>
  <div class="container-fluid">
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
    <app-loading v-if="isLoading"></app-loading>
  </div>
</template>

<script>
import { eventBus } from "./main";
import Loading from "./components/shared/Loading.vue";
export default {
  data() {
    return {
      isLoading: false
    };
  },
  components: {
    appLoading: Loading
  },
  mounted(){
    
  },
  created() {
    eventBus.$on("loading", load => {
      this.isLoading = load;
    });
  }
};
</script>

<style lang="scss">
html,
body,
.container-fluid {
  height: 100%;
  min-width: 100%;
  margin: 0;
}

.row {
  margin: 0;
}

.container-fluid {
  padding-left: 0;
  padding-right: 0;
}

.page-enter {
  opacity: 0;
}

.page-enter-active {
  animation: flip-in 0.3s ease-in;
}

.page-leave {
  opacity: 1;
}

.page-leave-active {
  animation: flip-out 0.3s ease-in;
}

@keyframes flip-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes flip-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
