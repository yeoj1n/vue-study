
<template>
    <div>
       <MenuList/>
       <RatingList/>
       <ShopInfo/>
    </div>
  </template>

<script>
import MenuList from '@/components/shop/MenuList';
import RatingList from '@/components/shop/RatingList';
import ShopInfo from '@/components/shop/ShopInfo';

export default {
    name : 'Shop',
    components: {
        MenuList,
        RatingList,
        ShopInfo
    },
    methods: {
        isActive (menuItem) {
            return this.activeItem === menuItem
        },
        setActive (menuItem) {
            this.activeItem = menuItem
        }
    }
}
</script>