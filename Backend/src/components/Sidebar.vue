<template>

    <div class=" w-[200px] transition-all bg-indigo-600 text-gray-200 p-4">
        <router-link :to="{ name: 'app.dashboard'}" class=" flex items-center 
        p-2 rounded transition-colors hover:bg-black/20 hover:text-gray-400 ">
            <span class=" mr-2">
                <HomeIcon class=" w-4"/>
            </span>
            <span>Dashboard</span>
        </router-link>

        <router-link :to="{ name: 'app.products'}" class=" flex items-center 
        p-2 rounded transition-colors hover:bg-black/20 hover:text-gray-400">
            <span class=" mr-2">
                <ViewListIcon class=" w-4"/>
            </span>
            <span>Products</span>
        </router-link>

        <router-link :to="{ name: 'app.dashboard'}" class=" flex items-center 
        p-2 rounded transition-colors hover:bg-black/20 hover:text-gray-400">
            <span class=" mr-2">
                <UsersIcon class=" w-4"/>
            </span>
            <span>Users</span>
        </router-link>
        <router-link :to="{ name: 'app.dashboard'}" class=" flex items-center 
        p-2 rounded transition-colors hover:bg-black/20 hover:text-gray-400">
            <span class=" mr-2">
                <ChartBarIcon class=" w-4"/>
            </span>
            <span>Reports</span>
        </router-link>
    </div>

</template>

<script setup>
import { HomeIcon, UsersIcon, ViewListIcon, ChartBarIcon } from '@heroicons/vue/outline';


</script>
