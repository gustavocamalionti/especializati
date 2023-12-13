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
            cart: [],
            textColor: '#000',
            bgColor: 'grey',
            styles: {
                backgroundColor: 'green',
                color: '#fff'
            },
            themeGreen: true
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
        },

        toggleTheme(){
            this.themeGreen = !this.themeGreen;

            if(this.themeGreen) {
                this.styles.backgroundColor = 'green';
                this.styles.color = '#fff';
            } else {
                this.styles.backgroundColor = '#fff';
                this.styles.color = '#000';
            }
        }
    },

    computed: {
        fullName() {
            return (this.nameTeacher + ' ' + this.lastNameTeacher).toUpperCase();
        }
    }
}

Vue.createApp(app).mount('#app')