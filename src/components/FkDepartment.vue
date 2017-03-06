<template>
  <ol class="dd-list">
    <li class="dd-item">
      <button
        :data-action="collapsedType"
        type="button"
        @click="departmentData.isCollapsed = !departmentData.isCollapsed"
        v-if="departmentData.children.length"
      >
        Collapse


      </button>
      <div class="dd-handle" @click="chooseDepartment(departmentData)">
        {{departmentData.name}}


      </div>
      <div v-if="departmentData.children.length && !departmentData.isCollapsed">
        <draggable :list="departmentData.children" @change="onEnd">
          <fk-department
            :department-data="dept"
            v-for="dept in departmentData.children"
            :event-bus="eventBus"
            :level="level+1"
          >
          </fk-department>
        </draggable>
      </div>
    </li>
  </ol>
</template>

<script>
  import draggable from 'vuedraggable'
  export default {
    name: 'fk-department',
    props: ['departmentData', 'eventBus', 'level'],
    components: {
      draggable
    },
    computed: {
      collapsedType(){
        return this.departmentData.isCollapsed ? 'expand' : 'collapse'
      }
    },
    mounted(){
    },
    methods: {
      chooseDepartment(group){
        this.eventBus.$emit('group:chosen', group)
      },
      onEnd(evt){
        console.log(evt)
        this.eventBus.$emit('drag:end', evt)
      }
    }
  }
</script>
