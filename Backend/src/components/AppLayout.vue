<template>

    <div class="flex min-h-full  bg-gray-200">
        <!-- Sidebar -->
        
        <Sidebar :class="{'-ml-[200px]' : !openSidebar}"/>

        <!-- end Sidebar -->
        <div class="flex-1 ">

            <!-- header -->
             <TopHeader @toggleSidebar="toggle_sidebar"/>

            <!-- End Header -->

            <!-- Main section -->
            <main class=" p-3">
                <div class="p-4 rounded bg-white">

                    <router-view></router-view>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import {  ref, onMounted, onUnmounted } from "vue";
import TopHeader from "./TopHeader.vue";
import Sidebar from "./Sidebar.vue";
const { title } = defineProps({
    title: String
})

const openSidebar = ref(true)

function toggle_sidebar(){

    openSidebar.value = !openSidebar.value
    
}

// for responsive
onMounted ( () => {
    HandleSidebarOpen();
    window.addEventListener('resize', HandleSidebarOpen)
})

onUnmounted ( () => {
    window.removeEventListener('resize', HandleSidebarOpen)
})

function HandleSidebarOpen(){
    if (window.outerWidth < 768) {
        openSidebar.value = false
    } else {
        openSidebar.value = true
        
    }
}


//  const emit = defineEmits(['submit'])
</script>
