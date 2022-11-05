<template>
  <div>
    <div class="flex justify-between items-center relative z-30 p-6 bg-root-color/0">
      <div class="flex items-center gap-4">
        <img src="~/assets/img/fav.png" class="w-12 inline-block" alt="Logo SoCleanBot">
        <h3 class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-400">
          {{ store.header ? store.header : 'SoCleanBot' }}
        </h3>
      </div>
      <div class="flex">
        <div class="dropdown dropdown-hover dropdown-end">
          <label tabindex="0">
            <div class="w-12 h-12 flex justify-center items-center rounded-xl cursor-pointer bg-gradient-to-tl from-cyan-500 to-blue-600">
              <img src="~/assets/img/avatar.png" class="w-1/2" alt="Avatar">
            </div>
          </label>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-black/70 backdrop-blur-2xl rounded-box w-52">
            <li><NuxtLink href="/profile">Profile</NuxtLink></li>
            <li><NuxtLink href="/">Logout</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useHeaderStore} from "@/composables/view";
const store = useHeaderStore()

</script>