<template>
    <div>
        <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div class="relative px-4 py-5 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <h1 class="text-2xl text-center">New Contact</h1>
                    <div class="max-w-md mx-auto">
                        <div class="overflow-hidden sm:rounded-md">

                            <div class="px-4 py-5 bg-white sm:p-6">
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-12">
                                        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                                        <input v-model="formData.name" type="text" name="name" id="name" autocomplete="given-name" class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow sm:text-sm border-gray-300 rounded-md">
                                    </div>
                                    <div class="col-span-12">
                                        <label for="email_address" class="block text-sm font-medium text-gray-700">Email address</label>
                                        <input v-model="formData.email" type="text" name="email_address" id="email_address" autocomplete="email" class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow sm:text-sm border-gray-300 rounded-md">
                                    </div>
                                    <div class="col-span-12">
                                        <label for="mobile" class="block text-sm font-medium text-gray-700">Mobile Number</label>
                                        <input v-model="formData.mobile" type="text" name="mobile" id="mobile" autocomplete="mobile" class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow sm:text-sm border-gray-300 rounded-md">
                                    </div>
                                    <div class="col-span-12">
                                        <label for="landline" class="block text-sm font-medium text-gray-700">Landline Number</label>
                                        <input v-model="formData.landline" type="text" name="landline" id="landline" autocomplete="landline" class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow sm:text-sm border-gray-300 rounded-md">
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <router-link :to="{ name: 'contacts'}" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Return to Contacts
                                </router-link>
                                <button @click="store" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'create-contact',
    data(){
        return {
            formData: {
                name: null,
                email: null,
                mobile: null,
                landline: null,
            }
        }
    },
    methods: {
        store(){
            axios.post('/api/contacts',{
                name: this.formData.name,
                email: this.formData.email,
                mobile: this.formData.mobile,
                landline: this.formData.landline
            }).then(response =>{
                this.$swal(response.data.message);
                this.$router.push({name: 'contacts'})
            }).catch(errors =>{
                this.$swal(_.toArray(errors.response.data.errors).join('<br>'));
            })
        }
    }
}
</script>
