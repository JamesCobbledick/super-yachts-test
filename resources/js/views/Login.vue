<template>
    <div>
        <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div class="relative px-4 py-5 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <h1 class="text-2xl text-center">Login</h1>
                    <div class="max-w-md mx-auto">
                        <div class="overflow-hidden sm:rounded-md">

                            <div class="px-4 py-5 bg-white sm:p-6">
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-12">
                                        <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
                                        <input v-model="username" type="text" name="email" id="username" autocomplete="email" class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow sm:text-sm border-gray-300 rounded-md">
                                    </div>

                                    <div class="col-span-12">
                                        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                                        <input v-model="password" type="password" name="password" id="password" class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow sm:text-sm border-gray-300 rounded-md">
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <router-link :to="{ name: 'register'}">Don't have an account?</router-link>
                                <button @click="login" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Login
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
    name: 'login',
    data(){
        return {
            username: null,
            password: null,
        }
    },
    methods:{
        login(){
            let vue = this;
            axios.post('/api/user/login',{
                email: this.username,
                password: this.password
            }).then(response =>{
                localStorage.setItem('api_key', JSON.stringify(response.data.api_token));
                window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.api_token;
                vue.$router.push({name:'contacts'})
            }).catch(errors =>{
                this.$swal(_.toArray(errors.response.data.errors).join('<br>'));
            })
        }
    }
}
</script>
