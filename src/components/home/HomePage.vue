<template>
  <div class="row">
    <div @click="sendToPage({id: 'projetos', class: 'primeiro'})" id="projetos" :class="colunas" class="container-link">
      <div class="primeiro">
        <p>PROJETOS</p>
      </div>
    </div>
    <div @click="sendToPage({id: 'contato', class: 'segundo'})" id="contato" :class="colunas" class="container-link">
      <div class="segundo">
        <p>CONTATO</p>
      </div>
    </div>
    <div @click="sendToPage({id: 'sobre', class: 'terceiro'})" id="sobre" :class="colunas" class="container-link">
      <div class="terceiro">
        <p>SOBRE</p>
      </div>
    </div>
    <div :class="colunas" class="quarto container-link"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colunas: window.outerWidth < 768 ? "phone" : "pc"
    };
  },
  created() {
    window.scrollTo(0, 0);
    // EVENT LISTENER PARA ALTERAR A CLASSE CONFORME A TELA É ALTERADA RESPONSIVAMENTE
    window.addEventListener("resize", e => {
      if (e.target.outerWidth < 768) this.colunas = "phone";
      else this.colunas = "pc";
    });
  },
  methods: {
    sendToPage(page) {
      this.$router.push({ name: page.id });
    }
  }
};
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
}

.phone {
  flex: 1 1 100%;
  height: 100%;

  &.quarto {
    background-size: cover;
    background-position-x: -70vh;
  }
}

.pc {
  flex: 1 1 50%;
  height: 50%;
}

.container-link {
  padding: 0;
  background-position: 0 0;
  background-repeat: repeat;
  overflow: hidden;
  position: relative;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    p {
      font-size: 3.6rem;
    }
  }
}

// PRIMEIRO CONTAINER
.primeiro {
  background-image: url("../../assets/img/patterns/swirl_pattern.png");
  transition: all 1s ease-in-out;
  cursor: pointer;

  p {
    font-family: "Bungee";
    transition: all 0.8s ease-in-out;
    color: #75524d;
    text-shadow: 0px 5px 0px #f4ebd0, -5px 0px 0px #f4ebd0, 0px -5px 0px #f4ebd0,
      5px 0px 0px #f4ebd0, 5px 5px 0px #f4ebd0, -5px -5px 0px #f4ebd0,
      5px -5px 0px #f4ebd0, -5px 5px 0px #f4ebd0;
  }
}

.primeiro:hover {
  transform: scale(1.5) rotate(-15deg);
  p {
    transform: rotate(25deg) scale(1.3);
  }
}

// SEGUNDO CONTAINER
.segundo {
  background-image: url("../../assets/img/patterns/dark-triangles.png");
  transition: all 0.7s ease-in-out;
  cursor: pointer;

  p {
    font-family: "Baloo Bhaijaan";
    transition: all 0.9s ease;
    color: #98bfd0;
    text-shadow: 0px 5px 0px #f4efdb, -5px 0px 0px #f4efdb, 0px -5px 0px #f4efdb,
      5px 0px 0px #f4efdb, 5px 5px 0px #f4efdb, -5px -5px 0px #f4efdb,
      5px -5px 0px #f4efdb, -5px 5px 0px #f4efdb;
  }
}

.segundo:hover {
  transform: scale(1.7) rotate(21deg);
  p {
    transform: rotate(-30deg) scale(1.2);
  }
}

// TERCEIRO CONTAINER
.terceiro {
  background-image: url("../../assets/img/patterns/intersection.png");
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  p {
    font-family: "Chau Philomene One";
    transition: all 0.8s ease;
    color: #e6c2bf;
    text-shadow: 0px 5px 0px #9b948a, -5px 0px 0px #9b948a, 0px -5px 0px #9b948a,
      5px 0px 0px #9b948a, 5px 5px 0px #9b948a, -5px -5px 0px #9b948a,
      5px -5px 0px #9b948a, -5px 5px 0px #9b948a;
  }
}

.terceiro:hover {
  transform: scale(2);
  p {
    transform: rotate(-30deg);
  }
}

// QUARTO CONTAINER
.quarto {
  background-image: url("../../assets/img/patterns/cartao.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
