<template>
  <DefaultLayout>
    <!-- about section -->
    <section class=" bg-primary relative text-white">
        <div class="flex flex-col w-full  md:flex-row lg:container lg:mx-auto  fill_screen_hight">
            <!--about section text content -->
            <div class="flex flex-col md:justify-center  py-8 px-4  md:w-[60%] md:pr-6">
                <div class="flex flex-col space-y-6 lg:items-start lg:text-start ">
                    <h1 class="font-bold self-center text-3xl md:text-4xl">About</h1>
                    <p class="font-semibold text-lg text-justify">
                        The Veriphy platform is a cloud-based Software as a Service (SaaS) offering that is used for livestock verification. The platform makes use of drone imagery and the latest in artificial intelligence to identify and count livestock. In addition to a count, the platform also provides detailed reporting, value-added insights and can be easily integrated into the client’s existing processes and systems.

                    </p>
                    <p class="font-bold text-lg text-justify">
                        Five of the largest feedlots in South Africa have already adopted the platform since its launch in August 2022.

                    </p>
                </div>
                
            </div>
            <!--about section image -->
            <div id="about_section_image_container" class="w-full h-[25rem]   md:h-full bg-no-repeat
                        md:absolute md:w-[40%] md:left-[60%] bg-cover z-10"> </div>
            <!-- about section image space allocater -->
            <div class="hidden md:block w-[40%]"></div>

        </div>
    </section>

    <!-- process section -->
    <section class="container mx-auto bg-white text-primary py-8 px-4 flex flex-col items-center space-y-10 md:space-y-0 fill_screen_hight">
        <!-- section title -->
        <h1 class="font-bold text-center text-3xl md:text-4xl ">Process</h1>
        <!-- process steps -->
        <div class="flex justify-center md:items-center md:grow">
            <div class="flex flex-col items-center  gap-y-6 
                    md:flex-row md:items-start md:gap-x-6 lg:gap-x-16">
                <div class="flex flex-col items-center">
                    <div class="bg-light-green p-4 w-fit">
                        <img class="w-28 h-28 lg:w-32 lg:h-32" src="/images/capture_image.png" alt="">
                    </div>
                    <div class="text-xl md:text-2xl text-center max-w-[10rem] font-semibold mt-2">Capture images</div>
                </div>
                
                <img class="rotate-90 md:rotate-0 md:mt-7" src="/images/arrow.png">

                <div class="flex flex-col items-center">
                    <div class="bg-light-green p-4 w-fit">
                        <img class="w-28 h-28 lg:w-32 lg:h-32" src="/images/cloud_upload_image.png" alt="">
                    </div>
                    <div class="text-xl md:text-2xl text-center max-w-[10rem] font-semibold mt-2">Upload to Veriphy platform</div>
                </div>

                <img class="rotate-90  md:rotate-0 md:mt-7" src="/images/arrow.png">

                <div class="flex flex-col items-center">
                    <div class="bg-light-green p-4 w-fit">
                        <img class="w-28 h-28 lg:w-32 lg:h-32" src="/images/document_image.png" alt="">
                    </div>
                    <div class="text-xl md:text-2xl text-center max-w-[10rem] font-semibold mt-2">Access report on Veriphy platform</div>
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
    #about_section_image_container{
        background-image: url('/images/second_section_image.jpg');
        background-position-x: 35%;
        background-position-y: center;
    }
</style>