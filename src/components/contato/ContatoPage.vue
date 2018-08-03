<template>
  <div id="contato" :class="size">
    <p>Esta precisando de algo? Querendo conversar? Quer trocar ideias? Tem alguma proposta? Precisando de alguma ajuda? Então me chame e vamos conversar. Se está com um pouco mais de pressa pode me chamar no meu número <a href="tel:+5511995274098">(11)99527-4098</a>. Não está com tanta pressa? Pode me chamar no <a href="https://www.linkedin.com/in/gabrielapbarreto/" target="_blank">LinkedIn</a>. Se estiver com menos pressa ainda me mande um <a href="mailto:gabriel-gdr@hotmail.com">email</a>.<br>
    Quer ver mais do meu trabalho além dos projetos aqui? De uma olhada no meu <a href="https://github.com/synga" target="_blank">GitHub</a> e veja no que estou trabalhando, além de contribuições. Uma outra alternativa é meu perfil no <a href="https://stackoverflow.com/users/7325327/gabriel-barreto" title="Stack Overflow" target="_blank">Stack Overflow</a> onde você poderá ver algumas respostas e contribuições.<br>
    Gostou e quer aprender comigo? Veja meus cursos na <a href="https://www.udemy.com/user/gabrielbarreto2/" title="Udemy" target="_blank">Udemy</a>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
  }
};
</script>
<style lang="scss" scoped>
* {
  font-family: "Baloo Bhaijaan";
}

p {
  color: white;
  margin: auto;
  text-align: center;
  a {
    color: #f33131c7;
    text-decoration: none;
  }
}

.phone {
  padding: 10px;
  font-size: 1.3em;
}

.pc {
  padding: 25px;
  font-size: 1.5em;
  display: grid;
}

#contato {
  background-image: url("../../assets/img/patterns/dark-triangles.png");
  background-repeat: repeat;
  height: 100%;
}
</style>
