export default {
    template: `
        <li>
            <label class="p-2 flex justify-between items-center">
                {{ item.name }}

                <input type="checkbox" v-model="item.complete" class="ml-3">
            </label>
        </li> 
    `,

    props: {
        item: Object
    }
}