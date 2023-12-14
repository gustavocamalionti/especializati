const app = {
    data() {
        return {
            name: 'Carlos',
            lastName: 'Ferreira',
            number: '0',
            product: {
                title: 'Filme 01',
                description: 'Filme muito legal',
                image: './assets/images/filme01.jpg',
                stars: 3
            },
            product2: {
                title: 'Filme 02',
                description: 'Filme TOP',
                image: './assets/images/filme02.jpg',
                stars: 0
            },
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
            ]
        }
    }
}

Vue.createApp(app).mount('#app') //mount -> a onde irá montar o conteúdo do VueJS