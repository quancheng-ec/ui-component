<script type="text/babel">
  export default {
    data(){
      return {
        collapsed: false
      }
    },
    props: {
      headerAction: {
        type: [String, Array],
        default: null
      }
    },
    methods: {
      collapse(){
        this.collapsed = !this.collapsed
      },
      close(){}
    },
    render(h){
      const action = (typeof this.headerAction === 'string' ? this.headerAction.split(' ') : this.headerAction)
      const panelAction = (action && action.length > 0) ? h('div', { class: 'panel-action' }) : null
      const panelHeader = this.$slots.header ? h('div', { class: 'panel-heading' }, [this.$slots.header, panelAction]) : null
      const panelFooter = this.$slots.footer ? h('div', { class: 'panel-footer' }, this.$slots.footer) : null
      const panelBody = h('div', { class: 'panel-wrapper collapse ' + !this.collapsed ? 'in' : '' }, [
          h('div', { class: 'panel-body' }, [
              this.$slots.default || 'panel-body'
            ]
          ),
          panelFooter
        ]
      )
      return h('div', { class: 'panel panel-default' }, [
          panelHeader,
          panelBody
        ]
      )
    }
  }
</script>
