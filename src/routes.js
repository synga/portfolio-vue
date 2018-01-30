import Home from './components/home/HomePage.vue';

const Contato = resolve => {
    require.ensure(['./components/contato/ContatoPage.vue'], () => {
        resolve(require('./components/contato/ContatoPage.vue'));
    });
};

const Projetos = resolve => {
    require.ensure(['./components/projetos/ProjetosPage.vue'], () => {
        resolve(require('./components/projetos/ProjetosPage.vue'));
    });
};

const Sobre = resolve => {
    require.ensure(['./components/sobre/SobrePage.vue'], () => {
        resolve(require('./components/sobre/SobrePage.vue'));
    });
};

export const routes = [
    { path: '', component: Home, name: 'home' },
    { path: 'contato', component: Contato, name: 'contato' },
    { path: 'sobre', component: Sobre, name: 'sobre' },
    { path: 'projetos', component: Projetos, name: 'projetos' },
    { path: '*', redirect: '/' },
];