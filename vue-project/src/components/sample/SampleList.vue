<template>
<div>
    <div v-if="loading === false">
        <ul>
            <li v-for="info in result" :key="info.Country">
                <router-link :to="`/covid/${info.Country}`">{{ info.Country }}</router-link>
            </li>
        </ul>
    
    <button @click="fetchAll()">REFRESH</button>
    </div>
    <div v-else>
        로딩중 ...
    </div>
</div>   
</template>


<script>
import { SERVER_URL, GET_COUNTRIES } from "@/common/api.js"

export default {
    name : 'SampleList',
    data() {
        return {
            result: [],
            loading : true
        }
    },
   created() {
         this.fetchAll()
    },
    methods : {
        fetchAll : function() {
            this.$axios({
                method: 'GET',
                url : SERVER_URL + GET_COUNTRIES
            }).then((response) => {
                console.log(response);
                this.result = response.data;
            }).catch((ex)=> {
                console.log("error : ", ex)
            }).finally(() => {
                this.loading = false;
            })
        }
    }
}
</script>