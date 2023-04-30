<template>
    <DefaultLayout>
        <!--service offering section -->
        <section class=" bg-primary relative text-white">
            <div class="flex flex-col md:flex-row lg:container lg:mx-auto  fill_screen_hight">
                <!--service offering section image -->
                <div id="service_offering_section_image_container" class="w-full h-[25rem]   md:h-full bg-cover bg-no-repeat
                            md:absolute md:w-[40%] md:left-0 "> </div>

                <!-- service offering section image space allocater -->
                <div class="hidden md:block w-[40%]"></div>

                <!--service offering section text content -->
                <div class="flex flex-col  md:justify-center  py-8 px-4  md:w-[60%] md:pl-6">
                    <div class="flex flex-col space-y-6 lg:items-start lg:text-start ">
                        <h1 class="font-bold self-center text-3xl md:text-4xl">Service Offering</h1>
                        <p class="font-semibold text-lg text-justify">
                            The platform is capable of counting and verifying open fields, backgrounding as well as feeding pens. In addition, the models are adaptive to other asset classes and we continuously expand the service offering. As part of the analytics we provide an estimated net asset value calculation and can run more advanced behavioral analytics when needed. We are currently working on automating feeding trough inspection and hope to include the service as a value-add soon.

                        </p>
                        <p class="font-bold text-lg text-justify">
                            We also partner with financial institutions to use the technology to help secure financing and beneficial insurance for both corporates and individuals.
                        </p>
                    </div>
                    
                </div>

            </div>
        </section>

        <!--accuracy section -->
        <section class="bg-primary relative text-white">
            <div class="flex flex-col md:flex-row lg:container lg:mx-auto fill_screen_hight">
                <!--accuracy section text content -->
                <div class="flex flex-col  md:justify-center  py-8 px-4  md:w-[60%] md:pl-6">
                    <div class="flex flex-col space-y-6 lg:items-start lg:text-start ">
                        <h1 class="font-bold self-center text-3xl md:text-4xl">Accuracy</h1>
                        <p class="font-semibold text-lg text-justify">
                            The platform has been extensively tested and proven to be more accurate than human counts, and is now used by a number of the largest meat producers in Africa.

                        </p>
                        <p class="font-bold text-lg text-justify">
                            During validation and testing we typically differ with less than 60 individuals per 100,000 resulting in a 99.9% accuracy.
                        </p>
                    </div>
                    
                </div>

                <!--accuracy section image -->
                <div id="accuracy_section_image_container" class="w-full h-[25rem]  md:h-full bg-cover bg-center bg-no-repeat 
                            md:absolute md:w-[40%] md:left-[60%] "> </div>
               
                <!-- accuracy  section image space allocater -->
                <div class="hidden md:block w-[40%]"></div>
                
            </div>
        </section>


        <!--Benefits section -->
        <section class="container mx-auto bg-white text-primary py-8 px-4 flex flex-col items-center space-y-6 md:space-y-10">
            <!--Benefits section header-->
            <h1 class="font-bold text-center text-3xl md:text-4xl">Benefits</h1>

            <!--Benefits items list container-->
            <div class="flex flex-col gap-y-6 py-6 md:flex-row md:gap-x-4">
                <!--Benefits items left list -->
                <div class="flex flex-col gap-y-6  ">

                    <!--Benefits item -->
                    <div class="flex  items-start gap-x-4 md:h-36">
                        <div class="bg-light-green mt-1 p-4 shrink-0">
                            <img class="w-16 h-16 " src="/images/accuracy_image.png" alt="">
                        </div>
                        <div >
                            <div class="text-lg   font-semibold ">Capture images</div>
                            <div class="mt-2 text-sm">The platform averages 99.92% alignment with physical counts and on investigation of differences proved to be more accurate than manual counts.</div>
                        </div>
                    </div>

                    <!--Benefits item -->
                    <div class="flex  items-start gap-x-4 md:h-36">
                        <div class="bg-light-green mt-1 p-4 shrink-0">
                            <img class="w-16 h-16 " src="/images/animal_welfare_image.png" alt="">
                        </div>
                        <div >
                            <div class="text-lg   font-semibold ">Animal Welfare</div>
                            <div class="mt-2 text-sm">The animals are not aware that they are being counted and therefore there is no chance of stress, injury or physical inconvenience.</div>
                        </div>
                    </div>

                    <!--Benefits item -->
                    <div class="flex  items-start gap-x-4 md:h-36">
                        <div class="bg-light-green mt-1 p-4 shrink-0">
                            <img class="w-16 h-16" src="/images/finance_and_insurance_image.png" alt="">
                        </div>
                        <div >
                            <div class="text-lg   font-semibold ">Financing & Insurance</div>
                            <div class="mt-2 text-sm">Use independent verification to secure or negotiate better terms for financing and insurance.</div>
                        </div>
                    </div>

                    <!--Benefits item -->
                    <div class="flex  items-start gap-x-4 md:h-36">
                        <div class="bg-light-green mt-1 p-4 shrink-0">
                            <img class="w-16 h-16 " src="/images/integration_image.png" alt="">
                        </div>
                        <div >
                            <div class="text-lg   font-semibold ">Integration</div>
                            <div class="mt-2 text-sm">Easily integrate results into existing systems and processes such as food allocation.</div>
                        </div>
                    </div>
                </div>

                <!--Benefits items right list -->
                <div class="flex flex-col gap-y-6 ">
                    <!--Benefits item -->
                    <div class="flex  items-start gap-x-4 md:h-36">
                        <div class="bg-light-green mt-1 p-4 shrink-0">
                            <img class="w-16 h-16 " src="/images/cost_and_time_image.png" alt="">
                        </div>
                        <div>
                            <div class="text-lg   font-semibold ">Cost and Time Efficient</div>
                            <div class="mt-2 text-sm">Using AI and drones is more cost and time efficient and less disruptive to operations than manual verification.</div>
                        </div>
                    </div>

                    <!--Benefits item -->
                    <div class="flex  items-start gap-x-4 md:h-36">
                        <div class="bg-light-green mt-1 p-4 shrink-0">
                            <img class="w-16 h-16 " src="/images/health_benefits_image.png" alt="">
                        </div>
                        <div >
                            <div class="text-lg   font-semibold ">Health Benefits</div>
                            <div class="mt-2 text-sm">Human foot traffic is reduced in camps, potentially reducing the spread of diseases such as foot and mouth.</div>
                        </div>
                    </div>

                    <!--Benefits item -->
                    <div class="flex  items-start gap-x-4 md:h-36">
                        <div class="bg-light-green mt-1 p-4 shrink-0">
                            <img class="w-16 h-16" src="/images/audit_image.png" alt="">
                        </div>
                        <div >
                            <div class="text-lg   font-semibold ">Audit</div>
                            <div class="mt-2 text-sm">Independent photographic and geo-located evidence is available on a web platform to assist audits with the interrogation and substantiation of assets.</div>
                        </div>
                    </div>

                    <!--Benefits item -->
                    <div class="flex  items-start gap-x-4 md:h-36">
                        <div class="bg-light-green mt-1 p-4 shrink-0">
                            <img class="w-16 h-16 " src="/images/analytics_image.png" alt="">
                        </div>
                        <div >
                            <div class="text-lg   font-semibold ">Advanced Analytics and Continuous Development</div>
                            <div class="mt-2 text-sm">Total herd value estimate and behavioral model used to identify abnormal behavior (e.g. clustering around water or feeding trough).</div>
                        </div>
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
    #service_offering_section_image_container{
        background-image: url('/images/fourth_section_image.jpg');
        background-position-x: 65%;
        background-position-y: center;
    }

    #accuracy_section_image_container{
        background-image: url('/images/fifth_section_image.jpg');
    }
</style>