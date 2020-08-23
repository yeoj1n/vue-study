<template>
    <div>
        <span v-for="todo in todos"
        :key = "todo.id"
        >
        {{ todo.text }}
        </span>
    </div>
</template>

<script>
//import Todo from '@/components/Todo';

export default {
    components: {
  //      Todo
    },
    computed: {
        todos() {
            return this.$store.state.todos;
        }
    },
    methods: {
    }
}
</script>