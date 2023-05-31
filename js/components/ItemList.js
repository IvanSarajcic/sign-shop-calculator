import Item from "./Item.js";

export default {
    components: { Item },

    template: `
        <section v-show="items.length">
            <h2 class="font-bold mb-2">{{ title }}</h2>
            <table class="border border-gray-600 divide-y divide-gray-600">
               <item 
                    v-for="item in items"
                    :key="item.id" 
                    :item="item"
                ></item>
            </table>
        </section> 
    `,

    props: {
        items: Array,
        title: String
    }
}