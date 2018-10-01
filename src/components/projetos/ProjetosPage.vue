<template>
  <div id="projetos">
    <div class="controls">
      <button id="voltar" class="btn btn-voltar" @click="retornaProjeto"> &lt; </button>
      <h2 v-if="projetoAtual != null">{{projetoAtual.nome}}</h2>
      <button id="avancar" class="btn btn-avancar" @click="avancaProjeto"> > </button>
    </div>
    <app-projeto-card :projeto="projetoAtual" v-if="projetoAtual != null"></app-projeto-card>
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
    appProjetoCard: ProjetoCard
  },
  created() {
    // AO ENTRAR JOGA A TELA PRO TOPO
    window.scrollTo(0, 0);

    // ACIONA O LOADING
    eventBus.loading(true);

    fetch("https://portfolio-gabriel-barreto.firebaseio.com/Projeto.json", {
      method: "GET"
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        for (let key in response) {
          this.projetos.push(response[key]);
        }
        this.projetoAtual = this.projetos[this.numeroProjeto];
        eventBus.loading(false);
      });
  },
  methods: {
    avancaProjeto() {
      window.scrollTo(0, 0);
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

.controls {
  display: grid;
  grid-template: 80px / 50px 1fr 50px;
  margin-bottom: 10px;
  padding-top: 5px;
}

h2 {
  text-align: center;
  align-self: center;
  margin: 0;
  line-height: 1em;
  padding: 0 5px;
}

.btn {
  font-size: 30px;
  font-family: monospace;
  transition: all 0.8s ease-out;
  border: none;
  box-sizing: border-box;
  padding: 20px 10px;
}

.btn:hover {
  cursor: pointer;
}

.btn-voltar {
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
}

.btn-avancar {
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
}

#projetos {
  background-image: url("../../assets/img/patterns/swirl_pattern.png");
  height: auto;
}
</style>
