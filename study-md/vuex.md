### Modules
1) module 파일 생성
store > modules > user.js, todos.js 
```
export default {
    namespaced: true, // 다음과 같이 선언해야 module의 namespace를 사용할 수 있다.
    state: {
    },
    mutations: {
    },
    actions: {

    },
    getters: {

    }
}
```
2) store.js
```
import Vue from 'vue';
import Vuex from 'vuex';
import todo from './modules/todo.js'
import users from './modules/todo.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules : {
        todo,
        users
    }
})
```
3) module에서 불러오기 위해서는 
this.$store.state.모듈이름.state이름
this.$store.getters(모듈이름/함수)
this.$store.dispatch(모듈이름/함수)

```
모듈로 분리 전
this.$store.state.todos;
this.$store.getters('completedTodo');
this.$store.dispatch('getTodos');

todos 모듈로 분리 후 (모듈/함수명)
this.$store.state.todo.todos;
this.$store.getters('todo/completedTodo');
this.$store.dispatch('todo/getTodos');

mapHelper
1) mapState - module명/state명
...mapState({
    todos : state => state.todo.todos; 
})

2) mapState - module명을 앞에 선언하고 시작 ('module명', [ 'state명' ])
2-1) object return
...mapState('todo', {
    todos : state => state.todos;
})
2-2) array return
...mapState('todo', ['todos'])

3) mapActions - module명을 앞에 선언하고 시작 ('module명', [ '함수명' ])
...mapActions('todo', ['getTodos']);
```