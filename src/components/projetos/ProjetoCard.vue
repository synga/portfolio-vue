<template>
  <div class="card">
    <div class="row">
      <div class="col-sm-10 col-sm-offset-1" id="img-container">
        <div class="row info">
          <div class="col-xs-6">Conclusão: {{projeto.duracao}}</div>
          <div class="col-xs-6">Realizado em {{projeto.ano}}</div>
          <br>
          <p>{{projeto.descricao}}</p>
        </div>
        <img :src="projeto.foto" :alt="projeto.nome" @load="imageLoaded">
        <div class="info">
          <h4>Tecnologias principais utilizadas:<br>
            <small>{{projeto.tecnologias}}</small>
          </h4>
        </div>
        <div class="row info links" v-if="projeto['links']">
          <h4>Links para o projeto</h4>
          <div :class="`col-xs-${12 / Object.keys(projeto['links']).length}`" v-for="(link, key, index) of projeto.links" :key="key">
            <a :href="link" class="btn btn-success" target="_blank">{{key}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { eventBus } from "../../main";

export default {
  props: ["projeto"],
  data() {
    return {
      show: true
    };
  },
  methods: {
    imageLoaded() {
      eventBus.loading(false);
    }
  }
};
</script>
<style lang="scss" scoped>

img {
  max-width: 100%;
}

#img-container {
  padding-bottom: 50px;
}

.info {
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px;
  line-height: 1.2em;

  a {
    line-height: 2em;
  }
}

.row.info.links {
  h4 {
    text-align: center;
  }

  div {
    text-align: center;
  }
}
</style>
