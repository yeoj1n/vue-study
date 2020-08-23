<template>
    <div id="main">
        // <span>{{ title }}</span><br/>
        <router-link to="`/covid/all`"><button id="moveBtn">COVID 19</button></router-link>
    </div>
</template>

<script>
export default {
    name: 'Main',
    data() {
        return {
            title: '안녕하세요',
            count : 1,
            country1 : 'usa'
        }
    },
    computed : {
        reverseMsg : function() {
            return this.title.split('').reverse().join('')
        }
    }
}
</script>

<style>
    #moveBtn {
        height: 20px;
        color: #fff;
        background-color: blueviolet;
        border-color: transparent;
    }

</style>