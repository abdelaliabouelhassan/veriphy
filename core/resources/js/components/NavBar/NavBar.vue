<template>
    <nav class="fixed top-0 bg-white w-full h-20 sm:h-24">
        <div class=" h-full container mx-auto px-4 py-2 flex items-center justify-between">
            <!-- navbar logo  -->
            <router-link :to="{name: 'home'}" class="h-full">
                <img class="object-contain h-full" src="/images/veriphy_logo.png" alt="veriphy_logo">
            </router-link>
            <!-- menue toggle button -->
            <button @click="toggleMenu" class="w-12 h-12 p-2 rounded-md border-2 md:hidden" :style="{borderColor:button_color}"
                    @mouseenter="mouseEnter" @mouseleave="mouseLeave">
                <svg class="w-full h-full" version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
                    <path :fill="button_color" d="M78,23.5H14c-3.6,0-6.5-2.9-6.5-6.5s2.9-6.5,6.5-6.5h64c3.6,0,6.5,2.9,6.5,6.5S81.6,23.5,78,23.5z M84.5,46
                        c0-3.6-2.9-6.5-6.5-6.5H14c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h64C81.6,52.5,84.5,49.6,84.5,46z M84.5,75c0-3.6-2.9-6.5-6.5-6.5
                        H14c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h64C81.6,81.5,84.5,78.6,84.5,75z"/>
                </svg>
            </button>
            <NavBarMenuWideScreen class="hidden md:flex"/>         
        </div>
        <!-- side menu for small screens-->
        <NavBarMenuSmallScreen @toggle-menu="toggleMenu" :hidden="menuHidden" class="absolute top-20 sm:top-24 fill_screen_hight h-full md:hidden"/>         
    </nav>
</template>
<script >
import NavBarMenuSmallScreen from './NavBarMenuSmallScreen.vue'
import NavBarMenuWideScreen from './NavBarMenuWideScreen.vue'
export default {
    components:{
        NavBarMenuSmallScreen,NavBarMenuWideScreen
    },
    data() {
        return {
            button_color:'#9e9e9e',
            menuHidden:true,
        }
    },
   
    methods:{
        mouseEnter(){
            this.button_color = '#07F3BD'
        },
        mouseLeave(){
            if(this.menuHidden){
                this.button_color = '#9e9e9e'
            }
        },
        toggleMenu(){
            this.menuHidden = ! this.menuHidden
            if(this.menuHidden){
                this.button_color = '#9e9e9e'
            }else{
                this.button_color = '#07F3BD'
            }
        }
    }
}
</script>
