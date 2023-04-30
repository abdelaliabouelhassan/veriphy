<template>
        <!-- menu items list -->
        <div class=" bg-white flex items-center gap-x-2">
            <!-- list item -->
            <div class="group">
                <router-link  :to="{name: 'home'}" :class="{'text-light-green':routeName == 'home'}"  class="block px-4 py-6 text-lg group-hover:text-light-green">Home</router-link>
            </div>
            <div class="group">
                <router-link  :to="{name: 'about'}" :class="{'text-light-green':routeName == 'about'}"  class="block px-4 py-6 text-lg group-hover:text-light-green">About</router-link>
            </div>
            <div class="group">
                <router-link  :to="{name: 'services'}" :class="{'text-light-green':routeName == 'services'}"  class="block px-4 py-6 text-lg group-hover:text-light-green">Services</router-link>
            </div>
            <div class="group">
                <router-link  :to="{name: 'pricing'}" :class="{'text-light-green':routeName == 'pricing'}"   class="block px-4 py-6 text-lg group-hover:text-light-green">Pricing</router-link>
            </div>
            <div class="group">
                <router-link  :to="{name: 'clients'}" :class="{'text-light-green':routeName == 'clients'}"  class="block px-4 py-6 text-lg group-hover:text-light-green">Clients</router-link>
            </div>
            <div class="group">
                <router-link  :to="{name: 'contact'}" :class="{'text-light-green':routeName == 'contact'}"  class="block px-4 py-6 text-lg group-hover:text-light-green">Contact</router-link>
            </div>
           
        </div>
</template>

<script>
export default {
    computed:{
        //route name
        routeName(){
            return this.$route.name
        }
    }
}
</script>