const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'Benvenuto in Vue.js',
            VueImg: './Logo-Vuejs.png'
        }
    }
}).mount('#myapp')