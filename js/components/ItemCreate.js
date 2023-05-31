export default {
    template: `
    <form @submit.prevent="add">
      <div class="border border-gray-600 text-black">
        <input v-model="newItem.type" placeholder="Type" class="p-2" />
        <input v-model="newItem.unit" placeholder="Unit" class="p-2" />
        <input v-model="newItem.subtype" placeholder="Subtype" class="p-2" />
        <input v-model="newItem.price" placeholder="Price" class="p-2" />
        <input v-model="newItem['largest-size']" placeholder="Largest Size" class="p-2" />
        <input v-model="newItem.color" placeholder="Color" class="p-2" />
      </div>
      <button type="submit" class="bg-white p-2 border-l">Add</button>
    </form>
  `,

  data() {
    return {
      newItem: {
        type: "",
        unit: "",
        subtype: "",
        price: 0,
        "largest-size": "",
        color: ""
      }
    };
  },

    methods: {
        add() {
          this.$emit("add", this.newItem);
    
          this.newItem = {
            type: "",
            unit: "",
            subtype: "",
            price: 0,
            "largest-size": "",
            color: ""
          };
        }
      }
}