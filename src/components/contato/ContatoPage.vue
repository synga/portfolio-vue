<template>
  <div id="contato">
<<<<<<< HEAD
    <div class="links row" :class="size">
      <h4>Me encontre por ai</h4>
      <div>
        <a href="https://www.linkedin.com/in/gabrielapbarreto/" target="_blank">LinkedIn</a>
      </div>
      <div>
        <a href="https://stackoverflow.com/users/7325327/gabriel-barreto" target="_blank">Stack Overflow</a>
=======
    <div class="links">
      <h4>Me encontre por ai</h4>
      <div>
        <a href="https://www.linkedin.com/in/gabrielapbarreto/" target="_blank" class="btn">LinkedIn</a>
      </div>
      <div>
        <a href="https://stackoverflow.com/users/7325327/gabriel-barreto" title="Stack Overflow" target="_blank" class="btn">Stack</a>
      </div>
      <div>
        <a href="https://github.com/synga" target="_blank" class="btn">GitHub</a>
>>>>>>> cf3f83088fec850bb7561f3ab018586d042d7a2d
      </div>
    </div>

<<<<<<< HEAD
    <h4>Tem uma dúvida? Uma proposta? Uma ideia? Precisa que algo seja feito? Quer apenas bater um papo sobre qualquer assunto?<br>Deixe uma mensagem e te respondo ASAP.</h4>
    <form method="post" :class="size">
      <div class="label">
        <p>Eu sou</p>
=======
    <h4>Tem uma dúvida? Uma proposta? Uma ideia? Precisa que algo seja feito? Quer apenas bater um papo?<br>Deixe uma mensagem e te respondo ASAP.</h4>
    <br>
    <div class="row">
      <div class="col-sm-8 col-sm-offset-2">
        <form method="post">
          <div class="form-group">
            <label>Me chamo</label>
            <input class="form-control" type="text" name="nome" id="nome" v-model="formulario.nome" placeholder="Ex: XPTO">
          </div>
          <div class="form-group">
            <label>Quero</label>
            <input class="form-control" type="text" name="assunto" id="assunto" v-model="formulario.assunto" placeholder="Ex: Bater um papo">
          </div>
          <div class="form-group">
            <label>Me responda no</label>
            <input class="form-control" type="email" name="email" id="email" v-model="formulario.email">
          </div>
          <div class="form-group">
            <label>Ou pelo telefone </label>
            <input class="form-control" type="tel" name="telefone" id="telefone" v-model="formulario.phone" pattern="[0-9]*" inputmode="numeric" maxlength="11" placeholder="(XX)XXXXX-XXXX (opcional)">
          </div>
          <br>
          <div class="form-group botao">
            <button type="submit" class="btn btn-info" @click.prevent="submitForm">Enviar</button>
          </div>
        </form>
>>>>>>> cf3f83088fec850bb7561f3ab018586d042d7a2d
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
<<<<<<< HEAD
              this.formulario.tipo = "";
=======
>>>>>>> cf3f83088fec850bb7561f3ab018586d042d7a2d
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
<<<<<<< HEAD
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
=======
  display: flex;
  flex-wrap: wrap;
  h4 {
    flex: 1 1 100%;
  }

  & > div {
    text-align: center;
    flex: 1;
  }

  .btn {
    text-decoration: none;
    background-color: rgb(108, 149, 211);
    padding: 10px;
    color: white;
    border-radius: 10px;
  }

  .btn:hover {
    background-color: rgb(38, 103, 202);
>>>>>>> cf3f83088fec850bb7561f3ab018586d042d7a2d
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
      .form-group {
      display: flex;
      padding: 10px;
    }

  .botao {
    text-align: center;
    grid-column: 1 / span 2;
    .btn {
      font-size: 20px;
<<<<<<< HEAD
      padding: 10px 40px;
      background-color: transparent;
      border: 2px solid white;
      color: white;
      border-radius: 50px;
      cursor: pointer;
=======
      background-color: rgb(108, 149, 211);
      padding: 10px 20px;
      color: white;
      border-radius: 10px;
    }

    .btn:hover {
      background-color: rgb(38, 103, 202);
>>>>>>> cf3f83088fec850bb7561f3ab018586d042d7a2d
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
