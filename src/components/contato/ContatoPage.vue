<template>
  <div id="contato">
    <div class="links row">
      <h4>Me encontre por ai</h4>
      <div class="col-xs-6 col-md-4 col-md-offset-2">
        <a href="https://www.linkedin.com/in/gabrielapbarreto/" target="_blank" class="btn btn-info">LinkedIn</a>
      </div>
      <div class="col-xs-6 col-md-4">
        <a href="https://stackoverflow.com/users/7325327/gabriel-barreto" target="_blank" class="btn btn-info">Stack Overflow</a>
      </div>
    </div>
    <br>

    <h4>Tem uma dúvida? Uma proposta? Uma ideia? Precisa que algo seja feito? Quer apenas bater um papo sobre qualquer assunto?<br>Deixe uma mensagem e te respondo ASAP.</h4>
    <br>
    <div class="row">
      <div class="col-sm-8 col-sm-offset-2">
        <form method="post">
          <div class="form-group">
            <label>Eu sou</label>
            <input class="form-control" type="text" name="tipo" id="tipo" v-model="formulario.tipo" placeholder="Ex: Empresa">
          </div>
          <div class="form-group">
            <label>E me chamo</label>
            <input class="form-control" type="text" name="nome" id="nome" v-model="formulario.nome" placeholder="Ex: XPTO">
          </div>
          <div class="form-group">
            <label>Quero</label>
            <input class="form-control" type="text" name="assunto" id="assunto" v-model="formulario.assunto" placeholder="Ex: Bater um papo">
          </div>
          <div class="form-group">
            <label>Me responda em meu e-mail </label>
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
      </div>
    </div>
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
      }
    };
  },
  created() {
    window.scrollTo(0, 0);
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
        let headers = {'Content-Type': 'application/json'};

        this.$http
          .post(
            "https://portfolio-gabriel-barreto.firebaseio.com/Contato.json",
            this.formulario, headers
          )
          .then(res => {
            this.formulario.tipo = "";
            this.formulario.nome = "";
            this.formulario.assunto = "";
            this.formulario.email = "";
            this.formulario.phone = "";
            alert('Contato enviado. Em breve responderei! ;)');
          }, rej => {
            console.log(rej);
            alert('Algo deu errado, tente novamente!');
          });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  font-family: "Baloo Bhaijaan";
}

.links {
  text-align: center;
}

h4 {
  margin: 0;
  padding: 20px 10vw;
  text-align: center;
  color: white;
}

form {
  label {
    color: white;
  }

  .botao {
    text-align: center;
    .btn {
      font-size: 20px;
      padding: 10px 20px;
    }
  }
}

#contato {
  background-image: url("../../assets/img/patterns/dark-triangles.png");
  background-repeat: repeat;
}
</style>
