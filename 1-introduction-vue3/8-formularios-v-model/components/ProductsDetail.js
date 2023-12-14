const productDetail = {
    template: `
    <h2>Título: {{ product.title }}</h2>
    <img :src="product.image" :alt="product.description" style="max-width:100px">
    <strong v-if="product.stars > 0"> Nota: {{ product.stars }}</strong>
    <a href="#" v-on:click.prevent="nameCourse= 'JavaScript'"><br> Alterar Nome Curso</a> <br>

    <button @click.prevent="addCart(product)" :disabled="productInCart"
    :class="['color-text', [ productInCart ? 'button-disabled' : 'teste']]">ADD CARRINHO</button>
    `,

    //declaração dos eventos que o componente pai estará observando
    emits: ['addProdCart'],

    props: {
        product: {
            type: Object,
            required: true,
            default: true
        },

        productInCart: {
            type: Boolean,
            required: true,
            default: false
        }
    },

    data() {
        return {
            example: 123
        }
    },

    methods: {
        addCart(product) {
            console.log('Add Cart in component');
            //disparar um evento
            this.$emit('addProdCart', product);
        }
    }
};

app.component('product-detail', productDetail);