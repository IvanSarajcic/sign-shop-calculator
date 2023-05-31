import ItemList from "./ItemList.js";
import ItemCreate from "./ItemCreate.js";

export default {
    components: { ItemList, ItemCreate },

    template: `
        <section class="space-y-6">
            <item-list :items="filters.inProgress" title="In Progress"></item-list>
            <item-list :items="filters.added" title="Added"></item-list>
            
            <item-create @add="add"></item-create> 
        </section>
    `,

    computed: {
        filters() {
          if (!this.items) {
            return {
              inProgress: [],
              added: []
            };
          }
          return {
            inProgress: this.items.filter(item => !item.added),
            added: this.items.filter(item => item.added)
          };
        }
      },

    data() {
        return {
          items: []
        };
      },
    
      async created() {
        try {
          const response = await fetch('/json/materials.json');
          const data = await response.json();
    
          // Assuming the JSON file has a top-level property called "materials"
          this.items = data.materials;
        } catch (error) {
          console.error('Error loading data:', error);
        }
      },

    methods: {
        add(newItem) {
            this.items.push(newItem);
        }
    }
}