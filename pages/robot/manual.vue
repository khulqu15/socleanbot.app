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
        <div class="w-full grid grid-cols-2 p-8 justify-between gap-4 items-center rounded-2xl backdrop-blur-2xl bg-black/30">
          <button class="btn w-full" @click="mode = 'map'" :class="{'bg-gradient-to-l from-cyan-400 to-blue-500 text-black px-12': mode === 'map'}">Waypoint Map</button>
          <button class="btn w-full" @click="mode = 'remote'" :class="{'bg-gradient-to-l from-cyan-400 to-blue-500 text-black px-12': mode === 'remote'}">Virtual Remote</button>
        </div>

        <div v-if="mode === 'map'" class="w-full overflow-auto mt-6 h-96 rounded-2xl backdrop-blur-2xl bg-black/30">
          <img src="~/assets/img/mapping.png" class="w-full object-cover object-center " alt="Mapping Auto">
        </div>

        <div v-else class="w-full overflow-auto mt-6 p-8 space-y-6 rounded-2xl backdrop-blur-2xl bg-black/30">
          <div class="grid grid-cols-1 text-center">
            <button @click="current_move = 'Forward'" class="btn w-20 h-20 mx-auto active:btn-primary">
              <Icon class="text-2xl" icon="akar-icons:chevron-up"/>
            </button>
          </div>
          <div class="grid grid-cols-3 text-center">
            <button @click="current_move = 'Left'" class="btn w-20 h-20 mx-auto active:btn-primary">
              <Icon class="text-2xl" icon="akar-icons:chevron-left"/>
            </button>
            <button @click="cleaning = !cleaning" class="btn w-20 h-20 mx-auto active:btn-primary" :class="{'btn-primary': cleaning}">
              <Icon class="text-2xl" icon="carbon:clean"/>
            </button>
            <button @click="current_move = 'Right'" class="btn w-20 h-20 mx-auto active:btn-primary">
              <Icon class="text-2xl" icon="akar-icons:chevron-right"/>
            </button>
          </div>
          <div class="grid grid-cols-1 text-center">
            <button @click="current_move = 'Backward'" class="btn w-20 h-20 mx-auto active:btn-primary">
              <Icon class="text-2xl" icon="akar-icons:chevron-down"/>
            </button>
          </div>
          <div class="flex justify-between items-center">
            <div>Current Move : {{ current_move }}</div>
            <div>Cleaning : {{ cleaning ? 'On' : 'Off' }}</div>
          </div>
        </div>

        <div class="w-full p-8 flex mt-6 justify-between items-center rounded-2xl backdrop-blur-2xl bg-black/30">
          <div>
            <h2 class="text-2xl font-bold">Robot Status</h2>
          </div>
          <div class="bg-blue-500/20 p-2 px-4 rounded text-blue-400">
            Waiting
          </div>
        </div>

        <div class="w-full p-8 rounded-2xl backdrop-blur-2xl bg-black/30">
          <div class="flex w-full justify-between items-center">
            <div>
              <h3 class="text-2xl font-bold">Position</h3>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="mt-3">
              <p>X</p>
              <h1 class="text-5xl font-bold text-green-500">10</h1>
            </div>
            <div class="mt-3">
              <p>Y</p>
              <h1 class="text-5xl font-bold text-green-500">10</h1>
            </div>
            <div class="mt-3">
              <p>Z</p>
              <h1 class="text-5xl font-bold text-green-500">10</h1>
            </div>
            <div class="mt-3">
              <p>Degree</p>
              <h1 class="text-5xl font-bold text-green-500">40</h1>
            </div>
            <div class="mt-3">
              <p>Velocity</p>
              <h1 class="text-5xl font-bold text-green-500">15</h1>
            </div>
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
store.header = 'Robot Manual'
defineProps({
  mode: {
    type: String,
    default: 'map'
  },
  cleaning: {
    type: Boolean,
    default: false,
  },
  current_move: {
    type: String
  }
})
</script>

<style scoped>

</style>