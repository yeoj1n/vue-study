<template>
    <div>
        Completed Todos : {{ numberOfCompletedTodo }}
        {{ todos }}
    </div>
</template>

<script>

export default {
    computed : {
        todos() {
            return this.$store.state.todo;
        },
        numberOfCompletedTodo() {
            return this.todos.filter(todo => todo.checked).length;
        }
    }
}
</script>