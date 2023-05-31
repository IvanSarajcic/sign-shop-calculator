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

    data() {
        return {
            items: [
                { name: 'Forex', added: false, id: 1 },
                { name: 'Plexiglass', added: false, id: 2 },
                { name: 'Cutting', added: false, id: 3 },
            ],
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.items.filter(item => ! item.added),
                added: this.items.filter(item => item.added)
            };
        }
    },

    methods: {
        add(name) {
            this.items.push({
                name: name,
                added: false,
                id: this.items.length + 1
            });
        }
    }
}