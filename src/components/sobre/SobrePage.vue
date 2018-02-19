<template>
  <div id="sobre">
    <h1>Sobre</h1>
    <div class="row">
      <h2>Quem sou</h2>
      <p>
        Gabriel A. S. Barreto, desenvolvedor Web e Mobile (principalmente), nascido em 1991 e apresentado a tecnologia em 1995 (a um querido Dynavision).<br> Entusiasta
        por novas tecnologias e sempre me atualizando (quem trabalha com JavaScript sabe que não pode parar 1 semaninha que BOOM lá vem coisa nova). Com uma paixão enorme pelo front-end e tudo que possa envolver criatividade, imagens, idéias, usabilidade, interfaces, cores, formas, animações e melhorar a vida do usuário. Com um bom entendimento de inglês e conhecimento básico em
        francês (básico de pelo menos não morrer de fome se visitar o país).
      </p>
    </div>
    <div class="row">
      <h2>Conhecimentos</h2>
      <p>
        Sem especificação de nível, possuo conhecimento em: <br>
        HTML5, CSS3, JavaScript, SCSS, JQuery, Bootstrap 3, TypeScript, VueJS, Angular, Ionic Framework, SQL Server, FireBase, Azure Mobile Services, UX/UI, C#, NodeJS (MEAN Stack), PHP.
      </p>
    </div>
    <div class="row">
      <h2>Por que T.I.</h2>
      <p>
        Quando ganhei meu primeiro video-game achava o máximo tudo aquilo, saber que tudo não era real e que algo "vivo" cabia em um cartucho.<br>
        Como aquilo funcionava? Como as balas acertavam o alvo? Como o tempo corria? Como uma arma de plástico conectada a um fio poderia mexer a mira na tela? A curiosidade sempre me instigou a buscar isso.<br>
        Vi como a tecnologia era poderosa, cada área existente nela, cada coisa que surgia e por que não usar isso para o bem do ser humano? Por que não fazer uma casa IoT que ajudasse um cego ou uma pessoa com Alzheimer? Por que não fazer com que as pessoas usem um smartphone para melhorar seu exterior? Por que não ajudar a cuidar de alguém? Tudo isso é possivel e tudo isso me motiva.
      </p>
    </div>
    <div class="row">
      <h2>Gabriel no pessoal</h2>
      <p>
        Essa é uma pergunta bem RH, mas acho legal que tenham uma base já que isso é um portfólio e as pessoas irão mais cedo ou mais tarde me conhecer.<br>
        Peguei um gosto imenso por estudar, meter a cara nos estudos é otimo, mas sem cair nessa cultura degradante de que uma pessoa para ser boa em T.I. ela deve viver, respirar e se alimentar dela.<br>
        Jogo video-game a anos e meu gênero favorito sempre foi RPG e Estratégia. Desenhar e escrever são meu modo de escape do mundo. Na leitura tenho preferência por classicos e romance policial (como Crime e Castigo) e ficção (Deuses Americanos). Fã de pedaladas, caminhadas e trilhas.<br>
        Animal friendly, sempre amigável, formal ou informal, sem estresse, sem pressão, com boa comunicação e expressão.
      </p>
    </div>
    <div class="row">
      <h2>O que espero da área</h2>
      <p>
        Num futuro espero poder ser referência em algo, espero que alguém pense em alguma tecnologia, framework, linguagem e logo venha a cabeça "Vou ver o que o Gabriel Barreto tem pra ensinar".<br>
        Vivo no Stack Overflow, fóruns, grupos de Facebook, Twitter, Medium e qualquer lugar onde possa aprender e ajudar com o que sei. Quero ser grande, quero ser bom, quero aprender cada dia com pessoas diferentes, quero ajudar e sentir esse sentimento de dever cumprido
        que T.I. sempre tem a oferecer. <br>
        Nos estudos pretendo me especializar cada vez mais em front-end, estou aprendendo a criar e trabalhar com ChatBots, estou melhorando meu back-end também e futuramente aprender algo em design.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    window.scrollTo(0, 0);
  }
};
</script>
<style lang="scss" scoped>
#sobre {
  background-image: url("../../assets/img/patterns/intersection.png");
  background-repeat: repeat;
  display: flex;
  flex-direction: column;

  .row {
    padding: 0 15px;
  }
}
* {
  font-family: "Chau Philomene One";
}

h2 {
  text-align: center;
}

h1 {
  text-align: center;
  margin-top: 0;
  padding-top: 20px;
}
</style>
