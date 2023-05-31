export default {
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black">
                <input v-model="newItem" placeholder="New item..." class="p-2" /> 

            </div>
            <button type="submit" class="bg-white p-2 border-l">Add</button>
        </form> 
    `,

    data() {
        return {
            newItem: ''
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newItem);

            this.newItem = '';
        }
    }
}