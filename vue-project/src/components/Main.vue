<template>
    <div id="main">
        <h1>{{ reverseMsg }} </h1>
        <p>{{count}}</p>
        <button @click="add()">+</button>
        <button @click="sub()">-</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            title: '안녕하세요',
            count : 1
        }
    },
    methods: {
        add : function() {
            this.count ++
        },
        sub : function() {
            this.count --
        }
    },
    /*
    computed : 데이터 캐싱 기능, 참고하는 속성값(ex)title)이 있는 경우는 렌더링되며 값이 변경되지만 
    new Date() 등과 같이 참고할 속성값이 없는 경우 렌더링과 관련이 없어 캐싱된 값이 그대로 출력되기 때문에 값이 변하지 않는다. 
    */
    computed : {
        reverseMsg : function() {
            return this.title.split('').reverse().join('')
        }
    }
}

</script>