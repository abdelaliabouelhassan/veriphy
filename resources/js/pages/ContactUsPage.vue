<template>
    <DefaultLayout>
        <!-- contact us section -->
        <section class="bg-primary text-white py-8">
            <div class="container mx-auto px-4 flex flex-col items-center">
                <!-- section title -->
                <h1 class="font-bold text-center  text-3xl md:text-4xl">Contact Us</h1>
                <!-- contact us card-->
                <div class="flex flex-col my-10 rounded-xl overflow-hidden w-full max-w-4xl
                            md:flex-row ">
                    <!-- reach us info part -->
                    <div class="flex flex-col bg-light-green w-full px-6 py-8 gap-y-4  font-semibold">
                        <h2 class="font-bold text-center text-2xl md:text-3xl">Reach Us</h2>
                        <div class="flex space-x-6 text-lg mt-2">
                            <div class="font-bold w-16">Email :</div>
                            <div>info@veriphy.tech</div>
                        </div>
                        <div class="flex space-x-6 text-lg">
                            <div class="font-bold w-16">phone : </div>
                            <div>082 944 7045</div>
                        </div>
                    </div>

                    <!-- request sending part -->
                    <div class="flex flex-col bg-white w-full  text-primary py-8 px-6 gap-y-4">
                        <!-- request sending title -->
                        <h2 class="font-bold text-center text-2xl md:text-3xl">Send Your Request</h2>
                        <!-- success failure messages -->
                        <div class="w-full">
                            <div v-if="message.content && message.success" class="w-full flex flex-col items-center">
                                <svg class="w-10 h-10" version="1.1"  xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                    viewBox="0 0 50 50"  >
                                    <circle style="fill:#25AE88;" cx="25" cy="25" r="25"/>
                                    <polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" points="
                                        38,15 22,33 12,25 "/>
                                </svg>
                                <div v-if="message" class="text-green-400">
                                {{ message.content}}
                                </div>
                            </div>
                            <div v-else-if="message.content && !message.success" class="w-full flex flex-col items-center">
                                <svg class="w-10 h-10" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" >
                                    <circle style="fill:#D75A4A;" cx="25" cy="25" r="25"/>
                                    <polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,34 25,25 34,16 
                                        "/>
                                    <polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,16 25,25 34,34 
                                        "/>
                                </svg>
                                <div v-if="message" class="text-red-400">
                                {{ message.content}}
                                </div>
                            </div>
                            
                        </div>
                        <!-- request form -->
                        <form @submit.prevent="submit" class="flex flex-col  gap-y-4 ">

                            <div class="flex flex-col gap-y-2 mt-2">
                                <label class="font-semibold">Full name</label>
                                <input class="py-2 px-4 text-black border focus:outline-0" type="text" placeholder="Enter your full name" v-model="formData.fullname" required>
                            </div>
                            <div class="flex flex-col gap-y-2 mt-2">
                                <label class="font-semibold">Email</label>
                                <input class="py-2 px-4 text-black border focus:outline-0" type="email" placeholder="Enter your full email" v-model="formData.email" required>
                            </div>
                            <div class="flex flex-col gap-y-2 mt-2">
                                <label class="font-semibold">Subject*</label>
                                <input class="py-2 px-4 text-black border focus:outline-0" type="text" placeholder="Enter the subject" v-model="formData.subject" >
                            </div>

                            <div class="flex flex-col gap-y-2 mt-2">
                                <label class="font-semibold">Message</label>
                                <textarea class="py-2 px-4 text-black border focus:outline-0"
                                placeholder="Enter your Message"  rows="5" v-model="formData.content" required></textarea>
                            </div>
                            <button type="submit" class="w-24 h-10 bg-light-green flex justify-center items-center  text-white rounded-full font-bold">
                                <!-- spinner -->
                                <svg v-if="loading" class="w-7 h-7 animate-spin" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" >
                                    <path fill="#083344" class="st1" d="M462,256c0,113.8-92.2,206-206,206S50,369.8,50,256S142.2,50,256,50v50.9c-85.63,0-155.1,69.46-155.1,155.1
                                        S170.37,411.1,256,411.1S411.1,341.63,411.1,256H462z"/>
                                    <path fill="#083344" style="opacity:0.5;" class="st3" d="M462,256h-50.9c0-85.63-69.46-155.1-155.1-155.1V50C369.8,50,462,142.2,462,256z"/>
                                </svg>
                                <span v-else>Send</span> 

                            </button>
                            

                        </form>
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
    },
    data() {
        return {
            formData:{
                fullname:null,
                email:null,
                subject:null,
                content:null,
            },
            message:{
                content:null,
                success:null //Boolean
            },
            loading:false
        }
    },
    methods: {
        async submit(){
            try {
                this.loading = true
                let response = await axios.post('/contact_us', this.formData)
                if(response.status === 200){
                    this.clearFormData()

                    this.message.content = 'your request was recieved' 
                    this.message.success = true 
                    this.loading = false
                    this.clearMessage()
                }
            } catch (error) {

                this.clearFormData()

                this.message.content = 'something went wrong!, try again later.' 
                this.message.success = false 
                this.loading = false

                this.clearMessage()
            }
            
        },
        clearFormData(){
            this.formData.fullname = null 
            this.formData.email = null 
            this.formData.subject = null 
            this.formData.content = null 
        },
        clearMessage(){
            setTimeout(() => {
                this.message.content =null
                this.message.success =null
            }, 6000);
        }
    }
}
</script>