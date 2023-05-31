import ItemList from "./ItemList.js";
import ItemCreate from "./ItemCreate.js";

export default {
    components: { ItemList, ItemCreate },

    template: `
        <section class="space-y-6">
            <item-list :items="filters.inProgress" title="In Progress"></item-list>
            <item-list :items="filters.completed" title="Completed"></item-list>
            
            <item-create @add="add"></item-create> 
        </section>
    `,

    data() {
        return {
            items: [
                { name: 'Finish project', complete: false, id: 1 },
                { name: 'Read Chapter 4', complete: false, id: 2 },
                { name: 'Turn in Homework', complete: false, id: 3 },
            ],
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.items.filter(item => ! item.complete),
                completed: this.items.filter(item => item.complete)
            };
        }
    },

    methods: {
        add(name) {
            this.items.push({
                name: name,
                completed: false,
                id: this.items.length + 1
            });
        }
    }
}