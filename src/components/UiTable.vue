<template>
  <table :class="tableClass">
    <thead>
      <tr>
        <th v-for="v in orderList.schema">
          {{v}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orderList.values">
        <td v-for="(v, k) in orderList.schema">
          {{order[k]}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script type='text/babel'>
	import classNames from 'classnames'
	export default {
		props: {
			type: {
				type: [String, Array],
				default: 'default'
			},
      orderList:{
				type: Object,
        required:true
      }
		},
		computed: {
			tableClass() {
				const tableClasses = (typeof this.type === 'string' ? this.type.split(' ') : this.type);
				return classNames('table', tableClasses.map(cls => 'table-' + cls))
			}
		}
	}
</script>



<style lang='stylus' rel='stylesheet/stylus'>

</style>
