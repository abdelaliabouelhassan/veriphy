<template>
    <!-- small screen menu -->
    <!-- this container is the back drop -->
    <div @click.self="toggleMenu" class="bg-black/30 w-full  flex-col gap-y-4 " :class="backdropToggleClass"> <!-- flex is in animation keyframe -->
        <!-- menu items list -->
        
        <div class="w-full h-full max-w-[15rem] bg-white overflow-y-auto" :class="menuToggleClass">
            <!-- list item -->
            <div class="group">
                <router-link  :to="{name: 'home'}"  class="block px-4 py-6 text-lg group-hover:text-light-green">Home</router-link>
            </div>
            <div class="group">
                <router-link  :to="{name: 'about'}"  class="block px-4 py-6 text-lg group-hover:text-light-green">About</router-link>
            </div>
            <div class="group">
                <router-link  :to="{name: 'services'}"  class="block px-4 py-6 text-lg group-hover:text-light-green">Services</router-link>
            </div>
            <div class="group">
                <router-link  :to="{name: 'pricing'}"  class="block px-4 py-6 text-lg group-hover:text-light-green">Pricing</router-link>
            </div>
            <div class="group">
                <router-link  :to="{name: 'clients'}"  class="block px-4 py-6 text-lg group-hover:text-light-green">Clients</router-link>
            </div>
            <div class="group">
                <router-link  :to="{name: 'contact'}"  class="block px-4 py-6 text-lg group-hover:text-light-green">Contact</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['toggle-menu'],
    props: {
        hidden:Boolean
    },
    computed:{
        backdropToggleClass(){
            if(this.hidden){
                return 'hide-backdrop hidden'
            }
            return 'show-backdrop'
        },
        menuToggleClass(){
            if(this.hidden){
                return 'hide-menu'
            }
            return 'show-menu'
        },
        toggleMenu(){
            this.$emit('toggle-menu')
        }

    }
}
</script>

<style scoped>
    .show-backdrop{
        animation-name: showBackdrop;
        animation-duration: 0.25s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
    }
    .hide-backdrop{
        animation-name: hideBackdrop;
        animation-duration: 0.4s;
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;

    }
    @keyframes showBackdrop{
        from {
            opacity: 0%;
            display: none;
        }

        to {
            opacity: 100%;
            display: flex;
        }
    }
    @keyframes hideBackdrop{
        from {
            display: flex;
           opacity: 100%;
        }

        to {
           opacity: 0%;
            display: none;

        }
    }



/* ----------------------------------- */

    .show-menu{
        animation-name: showMenu;
        animation-duration: 0.3s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
    }
    .hide-menu{
        animation-name: hideMenu;
        animation-duration: 0.3s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
    }
    @keyframes showMenu{
        from {
            display: none;
            transform:translateX(-16rem);
        }

        to {
            transform:translateX(0);
            display: block;
        }
    }
    @keyframes hideMenu{
        from {
            display: block;
            transform:translateX(0);
        }

        to {
            display: none;
            transform:translateX(-16rem);
        }
    }
</style>