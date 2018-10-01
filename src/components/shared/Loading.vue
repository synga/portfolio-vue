<template>
  <div id="loading">
    <h2>{{carregando}}</h2>
  </div>
</template>
<script>
import { eventBus } from "../../main";

export default {
  data() {
    return {
      carregando: "Carregando",
      pontos: 0,
      isLoading: false
    };
  },
  mounted() {
    setInterval(() => {
      if (this.carregando == "Carregando...") {
        this.carregando = "Carregando";
      } else {
        this.carregando = this.carregando + ".";
      }
    }, 250);
  },
  created() {
    eventBus.$on("loading", load => {
      this.isLoading = load;
    });
  }
};
</script>
<style lang="scss" scoped>
#loading {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  height: 120vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: white;
    font-family: "Bungee";
  }
}
</style>
