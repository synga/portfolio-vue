<template>
  <div id="contato">
    <div class="links row" :class="size">
      <h4>Me encontre por ai</h4>
      <div>
        <a href="https://www.linkedin.com/in/gabrielapbarreto/" target="_blank">LinkedIn</a>
      </div>
      <div>
        <a href="https://stackoverflow.com/users/7325327/gabriel-barreto" target="_blank">Stack Overflow</a>
      </div>
    </div>

    <h4>Tem uma dúvida? Uma proposta? Uma ideia? Precisa que algo seja feito? Quer apenas bater um papo sobre qualquer assunto?<br>Deixe uma mensagem e te respondo ASAP.</h4>
    <form method="post" :class="size">
      <div class="label">
        <p>Eu sou</p>
      </div>
      <div class="input">
        <input type="text" name="tipo" id="tipo" v-model="formulario.tipo" placeholder="Ex: Empresa">
        <label></label>
      </div>
      <div class="label">
        <p>E me chamo</p>
      </div>
      <div class="input">
        <input type="text" name="nome" id="nome" v-model="formulario.nome" placeholder="Ex: XPTO">
        <label></label>
      </div>
      <div class="label">
        <p>Quero</p>
      </div>
      <div class="input">
        <input type="text" name="assunto" id="assunto" v-model="formulario.assunto" placeholder="Ex: Bater um papo">
        <label></label>
      </div>
      <div class="label">
        <p>Me contate pelo e-mail</p>
      </div>
      <div class="input">
        <input type="email" name="email" id="email" v-model="formulario.email">
        <label></label>
      </div>
      <div class="label">
        <p>Ou pelo telefone</p>
      </div>
      <div class="input">
          <input type="tel" name="telefone" id="telefone" v-model="formulario.phone" pattern="[0-9]*" inputmode="numeric"
         maxlength="11" placeholder="(XX)XXXXX-XXXX (opcional)">
         <label></label>
      </div>
      <div class="botao">
        <button type="submit" class="btn btn-info" @click.prevent="submitForm">Enviar</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formulario: {
        tipo: "",
        nome: "",
        assunto: "",
        email: "",
        phone: ""
      },
      size: window.outerWidth < 768 ? "phone" : "pc"
    };
  },
  created() {
    window.scrollTo(0, 0);
    // EVENT LISTENER PARA ALTERAR A CLASSE CONFORME A TELA É ALTERADA RESPONSIVAMENTE
    window.addEventListener("resize", e => {
      if (e.target.outerWidth < 768) this.size = "phone";
      else this.size = "pc";
    });
  },
  methods: {
    submitForm() {
      // VAI VALIDAR OS CAMPOS
      if (this.formulario.tipo == "") {
        alert("Preencha quem você é!");
      }
      if (this.formulario.nome == "") {
        alert("Preencha seu nome!");
      }
      if (this.formulario.assunto == "") {
        alert("Preencha do que se trata o contato!");
      }
      if (this.formulario.email == "") {
        alert("Preencha o e-mail!");
      }
      // VAI ENVIAR O FORM PRO FIREBASE
      if (
        this.formulario.tipo != "" &&
        this.formulario.nome != "" &&
        this.formulario.assunto != "" &&
        this.formulario.email != ""
      ) {
        let headers = { "Content-Type": "application/json" };

        this.$http
          .post(
            "https://portfolio-gabriel-barreto.firebaseio.com/Contato.json",
            this.formulario,
            headers
          )
          .then(
            res => {
              this.formulario.tipo = "";
              this.formulario.nome = "";
              this.formulario.assunto = "";
              this.formulario.email = "";
              this.formulario.phone = "";
              alert("Contato enviado. Em breve responderei! ;)");
            },
            rej => {
              console.log(rej);
              alert("Algo deu errado, tente novamente!");
            }
          );
      }
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  font-family: "Baloo Bhaijaan";
}

// GRIDS DEPENDENDO DO TAMANHO DO VIEWPORT, SENDO PC OU PHONE

form.phone {
  display: grid;
  grid-template: repeat(11, auto) / 1fr;

  .label {
    grid-column: 1 / span 2;
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 1.2rem;

    p {
      margin: 2px 0;
    }
  }

  .input {
    grid-column: 1 / span 2;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      width: 100%;
      height: 40px;
      margin: 2px 0;
    }
  }

  .botao {
    .btn {
      margin-top: 20px;
    }
  }
}

form.pc {
  display: grid;
  grid-template: repeat(6, 1fr) / 30% 70%;

  .label {
    display: flex;
    justify-content: flex-end;
    align-content: center;
    font-size: 1.2rem;
    margin-right: 10px;
  }

  .input {
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      width: 100%;
      height: 40px;
    }
  }
}

.links {
  text-align: center;
  h4 {
    margin-top: 0; 
  }
  a {
    letter-spacing: 2px;
    text-decoration: none;
    color: #f17c7c;
    cursor: pointer;
    transition: all 0.4s;
  }

  a:hover {
    letter-spacing: 5px;
    color: #f33f3f;
    transition: all 0.4s;
  }
}

h4 {
  color: white;
  text-align: center;
}

form {
  margin: 0 20px;
  padding: 0 20px;

  p {
    color: white;
  }

  .botao {
    text-align: center;
    grid-column: 1 / span 2;
    .btn {
      font-size: 20px;
      padding: 10px 40px;
      background-color: transparent;
      border: 2px solid white;
      color: white;
      border-radius: 50px;
      cursor: pointer;
    }
  }
}

input {
  border: none;
  background-color: whitesmoke;
  color: #333;
  padding: 0 20px;
  border-radius: 15px;
}

input:focus {
  outline: none;
}

#contato {
  background-image: url("../../assets/img/patterns/dark-triangles.png");
  background-repeat: repeat;
  height: 100%;
}
</style>
