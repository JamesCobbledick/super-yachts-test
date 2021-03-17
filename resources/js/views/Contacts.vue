<template>
    <div>
        <div class="overflow-x-auto">
            <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                <div class="w-full lg:w-5/6">
                    <router-link :to="{ name: 'contacts.create'}" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Add Contact
                    </router-link>
                    <div class="col-span-12">
                        <select class="mt-4" @change="filterContacts($event)" v-model="filterFavourites">
                            <option :value="false">Showing All</option>
                            <option :value="true">Show Favourites Only</option>
                        </select>
                    </div>
                    <div class="col-span-12">
                        <label for="search" class="block text-sm font-medium text-gray-700">Search</label>
                        <input v-on:keyup.enter="searchContacts" type="text" id="search" v-model="search" class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow sm:text-sm border-gray-300 rounded-md">
                    </div>
                    <div class="bg-white shadow-md rounded my-6">
                        <table class="min-w-max w-full table-auto">
                            <thead>
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-left">Name</th>
                                <th class="py-3 px-6 text-left">Email</th>
                                <th class="py-3 px-6 text-left">Landline</th>
                                <th class="py-3 px-6 text-left">Mobile</th>
                                <th class="py-3 px-6 text-center">Favourite</th>
                                <th class="py-3 px-6 text-center">Actions</th>
                            </tr>
                            </thead>
                            <tbody class="text-gray-600 text-sm font-light">
                            <tr class="border-b border-gray-200 hover:bg-gray-100" v-for="contact in contacts">
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <div class="flex items-center">
                                        <span class="font-medium">{{ contact.name }}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <span>{{ contact.email }}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex items-center">
                                        <span>{{ contact.landline }}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex items-center">
                                        <span>{{ contact.mobile }}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs" v-if="contact.favourite">Favourite</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">

                                                <svg @click="favourite(contact)" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>

                                        </div>
                                        <div class="w-4 ml-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                            <router-link :to="{name: 'contact',params: {id: contact.id}}">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </router-link>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                            <router-link :to="{name: 'contacts.edit',params: {id: contact.id}}">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </router-link>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="destroy(contact.id)">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
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
            contacts: {},
            filterFavourites: null,
            search: null,
        }
    },
    mounted() {
       this.fetchContacts();
    },
    methods: {
        searchContacts(){
            axios.get('/api/contacts', {params: {search: this.search, filter_favourites: this.filterFavourites}}).then(response =>{
                this.contacts = response.data.data;
            }).catch(errors =>{
                this.$swal(_.toArray(errors.response.data.errors).join('<br>'));
            })
        },
        fetchContacts(){
            axios.get('/api/contacts').then(response =>{
                this.contacts = response.data.data;
            }).catch(errors =>{
                this.$swal(_.toArray(errors.response.data.errors).join('<br>'));
            })
        },
        filterContacts(event){

            let vue = this;
            if(this.filterFavourites){
                this.contacts = this.contacts.filter( function(contact) {
                    return contact.favourite === vue.filterFavourites;
                })
            }else{
                this.fetchContacts();
            }

        },
        favourite(contact){
            axios.put('/api/contacts/' + contact.id + '/favourite').then(response =>{
                this.$swal(response.data.message);
                contact.favourite = !contact.favourite;
            }).catch(errors =>{
                this.$swal(_.toArray(errors.response.data.errors).join('<br>'));
            })
        },
        destroy(id){
            axios.delete('/api/contacts/' + id).then(response =>{
                this.$swal(response.data.message);
                this.contacts = this.contacts.filter( function(contact) {
                    return contact.id !==id;
                })
            }).catch(errors => {
                this.$swal(_.toArray(errors.response.data.errors).join('<br>'));
            })
        }
    }
}
</script>
