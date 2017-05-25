<template>
    <div>
        <ui-grid-group class="grid-group-demo">
            <ui-grid-item space="3">
                最基本用法：
            </ui-grid-item>
            <ui-grid-item space="9">
                <ui-time-picker></ui-time-picker>
            </ui-grid-item>
        </ui-grid-group>
    
        <ui-grid-group class="grid-group-demo">
            <ui-grid-item space="3">
                不同大小：
            </ui-grid-item>
            <ui-grid-item space="3">
                <ui-time-picker size="large"></ui-time-picker>
            </ui-grid-item>
            <ui-grid-item space="3">
                <ui-time-picker></ui-time-picker>
            </ui-grid-item>
            <ui-grid-item space="3">
                <ui-time-picker size="small"></ui-time-picker>
            </ui-grid-item>
        </ui-grid-group>
        <ui-grid-group class="grid-group-demo">
            <ui-grid-item space="3">
                受控组件：
            </ui-grid-item>
            <ui-grid-item space="4">
                <ui-time-picker v-model="value"></ui-time-picker>
            </ui-grid-item>
            <ui-grid-item space="5">
                {{value}}
            </ui-grid-item>
        </ui-grid-group>
        <ui-grid-group class="grid-group-demo">
            <ui-grid-item space="3">
                禁用：
            </ui-grid-item>
            <ui-grid-item space="9">
                <ui-time-picker disabled></ui-time-picker>
            </ui-grid-item>
        </ui-grid-group>
        <ui-grid-group class="grid-group-demo">
            <ui-grid-item space="3">
                只显示时分：
            </ui-grid-item>
            <ui-grid-item space="9">
                <ui-time-picker format="HH:mm"></ui-time-picker>
            </ui-grid-item>
        </ui-grid-group>
        <ui-grid-group class="grid-group-demo">
            <ui-grid-item space="3">
                禁止选择某些值：
            </ui-grid-item>
            <ui-grid-item space="9">
                <ui-time-picker :disabled-hours="disabledHours"
                                :disabled-minutes="disabledMinutes"
                                :disabled-seconds="disabledSeconds"></ui-time-picker>
            </ui-grid-item>
        </ui-grid-group>
        <ui-grid-group class="grid-group-demo">
            <ui-grid-item space="3">
                添加自定义内容：
            </ui-grid-item>
            <ui-grid-item space="9">
                <ui-time-picker>
                    <template slot="addon"
                              scope="props">
                        <button @click="props.panel.close()">OK</button>
                    </template>
                </ui-time-picker>
            </ui-grid-item>
        </ui-grid-group>
    </div>
</template>
<script>
export default {
    data: function (params) {
        return {
            value: '08:30:00'
        }
    },
    components: {

    },
    methods: {
        range(start, end) {
            const result = [];
            for (let i = start; i < end; i++) {
                result.push(i);
            }
            return result;
        },
        disabledHours(h) {
            const hours = this.range(0, 60);
            hours.splice(20, 4);
            return hours.includes(h);
        },
        disabledMinutes(m) {
            return this.range(0, 31).includes(m);
        },
        disabledSeconds(s) {
            return this.range(30, 60).includes(s);
        }
    }
}
</script>

<style>
.grid-group-demo {
    background-color: #f7fafc;
}
</style>