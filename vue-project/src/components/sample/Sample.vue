<template>
<div>
    <div v-if="loading === false">
        <ul>
            <h3>{{$route.params.country}}</h3>
            <li v-for="info in result" :key="info.Date">
                <p> 일자 : {{info.Date}}</p>
                <p> 확진 : {{info.Confirmed}}</p>
                <p> 완치 : {{info.Recovered}}</p>
                <p> 사망 : {{info.Deaths}}</p>
            </li>
        </ul>
    
    <button @click="fetchCountry()">REFRESH</button>
    </div>

    <div v-else>
        로딩중 ...
    </div>
</div>
</template>


<script>
import { SERVER_URL, GET_COUNTRY } from "@/common/api.js"

export default {
    name : 'Sample',
    data() {
        return {
            result : [],
            loading : true
        }
    },
    created() {
        const country = this.$route.params.country;
        this.fetchCountry(country)
    },
    methods : {
        fetchCountry : function(country) {
            this.$axios({
                method: 'GET',
                url : SERVER_URL + GET_COUNTRY + country
            }).then((response) => {
                console.log(response);
                this.result = response.data.reverse();
            }).catch((ex)=> {
                console.log("error : ", ex)
            }).finally(() => {
                this.loading = false;
            })
        }
    }
}
</script>