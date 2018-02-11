<template>
  <div id="projetos">
    <app-projeto-card :projeto="projetoAtual" v-if="projetoAtual != null"></app-projeto-card>
    <button id="voltar" :class="classLeft" @click="retornaProjeto"> &lt; </button>
    <button id="avancar" :class="classRight" @click="avancaProjeto"> > </button>
  </div>
</template>
<script>
import ProjetoCard from "./ProjetoCard.vue";
import { eventBus } from "../../main";

export default {
  data() {
    return {
      projetos: [],
      projetoAtual: null,
      numeroProjeto: 0
    };
  },
  components: {
    appProjetoCard: ProjetoCard,
    classLeft: "",
    classRight: ""
  },
  created() {
    // MANIPULA AS CLASSES DOS BOTÕES
    if (window.outerWidth < 768) {
      this.classLeft = "btn-voltar-mobile";
      this.classRight = "btn-avancar-mobile";
    } else {
      this.classLeft = "btn-voltar-desk";
      this.classRight = "btn-avancar-desk";
    }
    // AO ENTRAR JOGA A TELA PRO TOPO
    window.scrollTo(0, 0);

    // ACIONA O LOADING
    eventBus.loading(true);

    this.$http
      .get("https://portfolio-gabriel-barreto.firebaseio.com/Projeto.json")
      .then(res => {
        console.log(res);
        for (let key in res.body) {
          this.projetos.push(res.body[key]);
        }
        this.projetoAtual = this.projetos[this.numeroProjeto];
      });
  },
  mounted() {
    if (window.outerWidth < 768) {
      let voltar = document.getElementById("voltar");
      let avancar = document.getElementById("avancar");
      // ADICIONA O LISTENER DA TELA PARA MANIPULAR O BOTÃO
      window.addEventListener("scroll", e => {
        let height = window.outerHeight;
        let scrollTop = e.target.scrollingElement.scrollTop;
        console.log(scrollTop);
        voltar.style.bottom = `-${scrollTop}px`;
        avancar.style.bottom = `-${scrollTop}px`;
      });
    }
  },
  methods: {
    avancaProjeto() {
      window.scrollTo(0, 0);
      eventBus.loading(true);
      this.numeroProjeto++;
      if (this.numeroProjeto > this.projetos.length - 1) {
        this.numeroProjeto = 0;
        this.projetoAtual = this.projetos[this.numeroProjeto];
      } else {
        this.projetoAtual = this.projetos[this.numeroProjeto];
      }
    },
    retornaProjeto() {
      window.scrollTo(0, 0);
      eventBus.loading(true);
      this.numeroProjeto--;
      if (this.numeroProjeto < 0) {
        this.numeroProjeto = this.projetos.length - 1;
        this.projetoAtual = this.projetos[this.numeroProjeto];
      } else {
        this.projetoAtual = this.projetos[this.numeroProjeto];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  font-family: "Bungee";
}

button:focus {
  outline: 0;
}

button:active {
  background-color: gray;
}

.btn-voltar-desk {
  transition: all 0.8s ease-out;
  position: absolute;
  top: 50vh;
  left: 0;
  border: none;
  box-sizing: border-box;
  padding: 20px 10px;
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
  font-size: 30px;
  font-family: monospace;
}

.btn-avancar-desk {
  transition: all 0.8s ease-out;
  position: absolute;
  top: 50vh;
  right: 0;
  border: none;
  box-sizing: border-box;
  padding: 20px 10px;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  font-size: 30px;
  font-family: monospace;
}

.btn-voltar-mobile {
  transition: all 0.8s ease-out;
  position: absolute;
  bottom: 0;
  left: 0;
  border: none;
  box-sizing: border-box;
  padding: 10px 25px 5px 10px;
  border-top-right-radius: 50px;
  font-size: 30px;
  font-family: monospace;
}

.btn-avancar-mobile {
  transition: all 0.8s ease-out;
  position: absolute;
  bottom: 0;
  right: 0;
  border: none;
  box-sizing: border-box;
  padding: 10px 10px 5px 25px;
  border-top-left-radius: 50px;
  font-size: 30px;
  font-family: monospace;
}

#projetos {
  background-image: url("../../assets/img/patterns/swirl_pattern.png");
  height: auto;
}
</style>
