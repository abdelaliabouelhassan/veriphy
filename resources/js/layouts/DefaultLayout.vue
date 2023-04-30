<template>
    <div>
        <NavBar class="z-50" />
        <div class="mt-20 sm:mt-24 z-10">
            <slot/>
        </div>
    </div>
</template>
<script>
import NavBar from '@/components/NavBar/NavBar.vue'

export default {
    components: {
    NavBar
  }
}
</script>