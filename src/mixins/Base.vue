<script type="text/babel">
  import classNames from 'classnames';

  export default {
    methods: {
      '$mergeClass'(){
        return classNames.call(null, arguments)
      }
    }
  }
</script>