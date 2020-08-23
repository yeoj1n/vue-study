<template>
    <div>
        <TodoList/>
        <CompleteTodo/>
    </div>
</template>

<script>
import TodoList from '@/components/Todo/TodoList'
import CompleteTodo from '@/components/Todo/CompleteTodo'

export default {
    components: {
        TodoList,
        CompleteTodo
    }

}
</script>