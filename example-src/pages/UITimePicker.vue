<template>
    <div>
        <label for="picker1"
               class="col-sm-3 control-label">
            选择时间:
        </label>
        <ui-time-picker>
        </ui-time-picker>
        <p class="form-control-static">
            <span class="vue-result1">{{result1}}</span>
        </p>
    </div>
</template>
<script>
export default {
    props: {
        result1: {

            default: null
        }
    },
    components: {

    },
    methods: {

    }
}

</script>