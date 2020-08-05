<template>
<div id="wrap">
    <div id="header">
        <img class="chr_img" src="https://menu.orderpick.kr/resource/menu/img/bridge_chr.png?ver=20200417" alt="야구장캐릭터">
        <p class="main_txt">지금 음식 주문하고 <br>알림톡으로 확인하세요.</p>
        <!--200414수정-->
        <button type="button" class="btn_location_find"><img src="https://menu.orderpick.kr/resource/menu/img/btn_location_ani.gif" alt="매장 위치찾기"></button>
        <!--//200414수정-->
    </div>
    <div id="container">
        <ul class="foodtype_list" id="food_type_list">

            <li v-for="(foodType, index) in foodTypeList">
                <a href="javascript:void(0);">
                    <span class="thumbnail">
                        <img :src="foodType.foodImg" alt="음식종류">
                    </span>
                    <span class="foodtype">
                        <span class="type">{{foodType.name}}</span>
                        <span class="sub">{{foodType.brandNames}}</span>
                    </span>
                </a>

                <ul class="store_list">
                    <li v-for="store in foodType.locationList">
                        <a href="javascript:void(0);">
                            <span class="thumbnail">
                                <img :src="store.storeImg" alt="매장로고">
                            </span>
                            <span class="store_name">{{store.name}}</span>
                        </a>

                        <ul class="location_list">
                            <li v-for="shop in store.shopList">
                                <a href="javascript:" @click="goShop()" :shop="shop"  >
                                    <span class="location" v-html="shop.name"></span>
                                    <span class="ordertype">{{shop.serviceType}}</span>
                                    <span class="btn_go">GO</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    <!--200414추가-->
    <p class="copyright">Powered by PAYCO</p>
    <!--//200414추가-->
</div>
</template>

<script>
let jsonData = [
    {
      "name": "치킨 / 피자",
      "brandNames": "BHC",
      "foodImg": "https://menu.orderpick.kr/resource/menu/img/bridge_ctg_chipi.jpg",
      "locationList": [
        {
          "name": "BHC",
          "storeImg": "https://menu.orderpick.kr/resource/menu/img/logo/bridge_logo_bhc.jpg",
          "shopList": [
            {
              "name": "<strong>1루 3층 16번</strong> BHC",
              "serviceType": "#픽업 #배달",
              "shopId": "S200003633"
            },
            {
              "name": "<strong>1루 3층 10번</strong> BHC",
              "serviceType": "#픽업 #배달",
              "shopId": "S200003632"
            },
            {
              "name": "<strong>1루 5층 22번</strong> BHC",
              "serviceType": "#픽업 #배달",
              "shopId": "S200003647"
            },
            {
              "name": "<strong>3루 3층 5번</strong> BHC",
              "serviceType": "#픽업 #배달",
              "shopId": "S200003635"
            },
            {
              "name": "<strong>3루 3층 9번</strong> BHC",
              "serviceType": "#픽업 #배달",
              "shopId": "S200003634"
            }
          ]
        }
      ]
    },
    {
      "name": "패스트푸드",
      "brandNames": "광주제일햄버고, 스테이크펍",
      "foodImg": "https://menu.orderpick.kr/resource/menu/img/bridge_ctg_fastfood.jpg",
      "locationList": [
        {
          "name": "광주제일햄버고",
          "storeImg": "https://menu.orderpick.kr/resource/menu/img/logo/bridge_logo_guangjuhamburger.jpg",
          "shopList": [
            {
              "name": "<strong>1루 4층 19번</strong> 광주제일햄버고",
              "serviceType": "#픽업 #배달",
              "shopId": "S200003645"
            },
            {
              "name": "<strong>3루 3층 3번</strong> 광주제일햄버고",
              "serviceType": "#픽업 #배달",
              "shopId": "S200003651"
            },
            {
              "name": "<strong>3루 4층 18번</strong> 광주제일햄버고",
              "serviceType": "#픽업 #배달",
              "shopId": "S200003644"
            }
          ]
        },
        {
          "name": "스테이크펍",
          "storeImg": "https://menu.orderpick.kr/resource/menu/img/logo/bridge_logo_steak.jpg",
          "shopList": [
            {
              "name": "<strong>1루 3층 15번</strong> 스테이크펍",
              "serviceType": "#픽업 #배달",
              "shopId": "S200004239"
            },
            {
              "name": "<strong>3루 3층 1번</strong> 스테이크펍",
              "serviceType": "#픽업 #배달",
              "shopId": "S200003648"
            }
          ]
        }
      ]
    },
    {
      "name": "한식",
      "brandNames": "K닭발막창, 도야족발",
      "foodImg": "https://menu.orderpick.kr/resource/menu/img/bridge_ctg_korean.jpg",
      "locationList": [
        {
          "name": "K닭발막창",
          "storeImg": "https://menu.orderpick.kr/resource/menu/img/logo/bridge_logo_kDakbal.jpg",
          "shopList": [
            {
              "name": "<strong>1루 3층 14번</strong> K닭발막창",
              "serviceType": "#픽업",
              "shopId": "S200003642"
            },
            {
              "name": "<strong>1루 5층 23번</strong> K닭발막창",
              "serviceType": "#픽업",
              "shopId": "S200003643"
            },
            {
              "name": "<strong>3루 3층 4번</strong> K닭발막창",
              "serviceType": "#픽업",
              "shopId": "S200003641"
            }
          ]
        },
        {
          "name": "도야족발",
          "storeImg": "https://menu.orderpick.kr/resource/menu/img/logo/bridge_logo_doya.jpg",
          "shopList": [
            {
              "name": "<strong>3루 3층 2번</strong> 도야족발",
              "serviceType": "#픽업 #배달",
              "shopId": "S200004238"
            }
          ]
        }
      ]
    },
    {
      "name": "분식/스낵",
      "brandNames": "마성떡볶이, 아자부펍",
      "foodImg": "https://menu.orderpick.kr/resource/menu/img/bridge_ctg_bunsik.jpg",
      "locationList": [
        {
          "name": "마성떡볶이",
          "storeImg": "https://menu.orderpick.kr/resource/menu/img/logo/bridge_logo_masung.jpg",
          "shopList": [
            {
              "name": "<strong>1루 3층 12번</strong> 마성떡볶이",
              "serviceType": "#픽업",
              "shopId": "S200003636"
            },
            {
              "name": "<strong>3루 3층 7번</strong> 마성떡볶이",
              "serviceType": "#픽업",
              "shopId": "S200003637"
            },
            {
              "name": "<strong>3루 5층 20번</strong> 마성떡볶이",
              "serviceType": "#픽업",
              "shopId": "S200003638"
            }
          ]
        },
        {
          "name": "아자부펍",
          "storeImg": "https://menu.orderpick.kr/resource/menu/img/logo/bridge_logo_azabu.jpg",
          "shopList": [
            {
              "name": "<strong>3루 3층 8번</strong> 아자부펍",
              "serviceType": "#픽업",
              "shopId": "S200003639"
            },
            {
              "name": "<strong>1루 3층 11번</strong> 아자부펍",
              "serviceType": "#픽업",
              "shopId": "S200003640"
            }
          ]
        }
      ]
    },
    {
      "name": "안주류",
      "brandNames": "비스트로펍",
      "foodImg": "https://menu.orderpick.kr/resource/menu/img/bridge_ctg_snack.jpg",
      "locationList": [
        {
          "name": "비스트로펍",
          "storeImg": "https://menu.orderpick.kr/resource/menu/img/logo/bridge_logo_bistro.jpg",
          "shopList": [
            {
              "name": "<strong>1루 4층 19번</strong> 비스트로펍",
              "serviceType": "#픽업 #배달(스카이박스에 한함)",
              "shopId": "S200003650"
            },
            {
              "name": "<strong>3루 4층 18번</strong> 비스트로펍",
              "serviceType": "#픽업 #배달(스카이박스에 한함)",
              "shopId": "S200003649"
            }
          ]
        }
      ]
    }
  ];

    var vm = new Vue({
        el: '#food_type_list',
        data: {
            foodTypeList: jsonData
        },
        props: {
            shop: {
                type: Object,
                required: true
            }
        },
        methods: {
        }
    });
</script>
<style>

</style>