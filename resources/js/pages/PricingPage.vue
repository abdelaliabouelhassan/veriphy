<template>
  <DefaultLayout>
    <!-- pricing section -->
    <section class=" bg-primary relative text-white">
        <div class="flex flex-col md:flex-row lg:container lg:mx-auto fill_screen_hight">
            <!--pricing section image -->
            <div id="pricing_section_image_container" class="w-full h-[25rem]   md:h-full bg-cover bg-center bg-no-repeat
                        md:absolute md:w-[40%] md:left-[60%] "> </div>
            <!-- pricing section image space allocater -->
            <div class="hidden md:block w-[40%] order-2"></div>

            <!--pricing section text content -->
            <div class="flex flex-col  md:justify-center  py-8 px-4  md:w-[60%] md:pr-6 md:order-1">
                <div class="flex flex-col space-y-6 lg:items-start lg:text-start ">
                    <h1 class="font-bold self-center text-3xl md:text-4xl">Pricing</h1>
                    <p class="font-semibold text-lg text-justify">
                        Platform pricing is based on the number of animals counted and also depends on whether the animals are in feedlots or in open grazing.
                    </p>
                    <p class="font-bold text-lg text-justify">
                        There are no fixed-term contracts and clients can use the service as often as they’d like, it is essentially a pay-as-you-go approach.
                    </p>
                </div>
                
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
<style scoped>
    #pricing_section_image_container{
        background-image: url('/images/seventh_section_image.jpg');
    }
</style>