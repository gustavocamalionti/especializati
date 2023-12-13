const exampleForm = {
    template: `
    <form action="#" method="post" @submit.prevent="saveData">
   <label>
    Nome:
    <input type="text" name="name" v-model="formData.name" placeholder="Nome">
    <div v-if="formData.errors.name">{{ formData.errors.name }}</div>
   </label>

   <label>
    Sexo:
    <select name="sexo" v-model="formData.sexo">
        <option value="">Escolha</option>
        <option value="M">Masculino</option>
        <option value="F">Feminino</option>
    </select>
   </label>

   <label>
    Descrição
    <textarea name="description" v-model="formData.description" placeholder="Descrição"></textarea>
   </label>

   <label>
    <input type="checkbox" v-model="formData.agree" name="agree">
    Concordo
   </label>

   <button type="submit">Enviar</button>
</form>
    `,
    data() {
        return {
            formData: {
                name: '',
                sexo: '',
                description: '',
                agree: true,

                errors: {
                    name: ''
                }
            }
        }
    },

    methods: {
        saveData() {
            this.reset();
            if (this.formData.name === '') this.formData.errors.name = 'Informe um valor para o nome'
            console.log('objetoFormData' + this.formData);
            console.log(this.formData.name);
            console.log(this.formData.sexo);
            console.log(this.formData.description);
            console.log(this.formData.agree);

            //Nessa parte, podemos fazer validações, requisição axios, retornos api etc etc


        },

        reset() {
            this.formData.errors = {
                name: ''
            }
        }
    }
}

app.component('example-form', exampleForm)