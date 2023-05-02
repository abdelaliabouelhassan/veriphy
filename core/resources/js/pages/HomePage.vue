<template>
  <DefaultLayout>
    <section class="bg-no-repeat bg-cover md:bg-center  w-screen fill_screen_hight overflow-hidden relative">
        <img src="/images/hero_section_background.png" alt="" 
        class="w-full h-full md:h-screen object-cover 2xl:object-top absolute">
        <div class="  px-4 w-full container mx-auto">
          <div class="absolute top-24">
              <h1 class="font-Garet-Heavy font-extrabold text-4xl mt-2 max-w-xs
                          xs:text-5xl">
                          Asset Verification </h1>
              <h2 class="font-Garet-Heavy font-extrabold text-xl mt-4 max-w-sm
                          xs:text-2xl
                          sm:text-3xl">
                          Livestock Model</h2>
          </div>
          
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
