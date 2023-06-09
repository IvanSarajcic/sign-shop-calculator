export default {
    template: `
        <tr class="p-2 flex justify-between items-center">
            <td>
                {{ item.name }}
                <input type="checkbox" v-model="item.added" class="ml-3">
                {{ item.added ? '✅' : 'x' }}
            </td>
        </tr> 
    `,

    props: {
        item: Object
    }
}