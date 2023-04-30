<template>
  <DefaultLayout>
    <section id="hero_section" class="bg-no-repeat bg-cover md:bg-center xl:bg-bottom w-screen fill_screen_hight ">
      <div class="container mx-auto px-4 py-10 h-full">
          <img class="w-28 sm:w-36  " src="/images/veriphy_logo.png" alt="veriphy_logo">
          <h1 class="font-Garet-Heavy font-extrabold text-5xl mt-2 max-w-xs
                      sm:text-6xl">
                      Asset Verification </h1>
          <h2 class="font-Garet-Heavy font-extrabold text-xl mt-4 max-w-sm
                      xs:text-2xl
                      sm:text-3xl">
                      Livestock Model</h2>
      </div>
      
    </section>
    
  </DefaultLayout>
    
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
  components: {
    DefaultLayout
  }
}
</script>
<style scoped>
    #hero_section{
        background-image: url('/images/hero_section_background.png');
    }
</style>