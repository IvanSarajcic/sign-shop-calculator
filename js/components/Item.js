export default {
    template: `
    <tr class="p-2 flex justify-between items-center">
      <td>
        {{ item.type }} - {{ item.subtype }} ({{ item.unit }})
        <br>
        Price: {{ item.price }}
        <br>
        Largest Size: {{ item["largest-size"] }}
        <br>
        Color: {{ item.color }}
        <br>
        <input type="checkbox" v-model="item.added" class="ml-3">
        {{ item.added ? '✅' : 'x' }}
      </td>
    </tr>
  `,

    props: {
        item: Object
    }
}