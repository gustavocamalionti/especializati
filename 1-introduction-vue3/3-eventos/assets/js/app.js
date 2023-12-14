const app = {
    data() {
        return {
            nameCourse: 'Vue3',
            nameTeacher: 'Carlos',
            lastNameTeacher: 'Ferreira',
            products: [
                {
                    title: 'Filme 01',
                    description: 'Filme muito legal',
                    image: './assets/images/filme01.jpg',
                    stars: 3
                },
                {
                    title: 'Filme 02',
                    description: 'Filme TOP',
                    image: './assets/images/filme02.jpg',
                    stars: 0
                }
            ],
            cart: []
        }
    },

    methods: {
        addCart(product) {
            this.cart.push(product);
        },

        removeCart(product) {
            //retorna todos os produtos do carrinho que não seja product
            this.cart = this.cart.filter((prod, index) => {
                return product != prod;
            });
        },

        inCart(product) {
            return this.cart.indexOf(product) != -1;
        }
    }
}

Vue.createApp(app).mount('#app') //mount -> a onde irá montar o conteúdo do VueJS