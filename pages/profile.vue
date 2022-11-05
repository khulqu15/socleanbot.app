<template>
  <div>
    <div class="min-h-screen fixed top-0 left-0 w-full bottom-0 overflow-hidden">
      <img src="~/assets/img/pattern.png" class="md:inline-block inline-block w-1/2 absolute md:right-0 md:top-0 blur-3xl opacity-50" alt="socleanbot">
      <img src="~/assets/img/pattern.png" class="inline-block md:w-1/2 w-full absolute md:left-0 md:-bottom-48 md:rotate-90 -right-24 md:blur-3xl blur-lg opacity-60 bottom-0" alt="socleanbot">
    </div>
    <div class="container relative mx-auto md:px-12 px-8">
      <div class="max-w-4xl mx-auto space-y-8">
        <NuxtLink class="btn" href="/dashboard">
          <Icon icon="akar-icons:chevron-left"/> Back
        </NuxtLink>
        <div class="w-full p-8 rounded-2xl backdrop-blur-2xl bg-black/30">
          <div class="w-28 h-28 flex justify-center items-center rounded-xl cursor-pointer bg-gradient-to-tl from-cyan-500 to-blue-600">
            <img src="~/assets/img/avatar.png" class="w-1/2" alt="Avatar">
          </div>
          <div class="info-profile mt-6 space-y-3">
            <h2 class="text-2xl font-bold">Siderobotion Indonesia</h2>
            <p>dev@siderobot.id</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import {useHeaderStore} from "@/composables/view";
const store = useHeaderStore()
store.header = 'Profile'
</script>

<style scoped>

</style>