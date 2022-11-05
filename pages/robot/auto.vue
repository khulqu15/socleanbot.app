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
        <div class="w-full p-8 flex justify-between items-center rounded-2xl backdrop-blur-2xl bg-black/30">
          <div>
            <h2 class="text-2xl font-bold">Autonomous</h2>
          </div>
          <div>
            <div class="form-control">
              <select class="select w-auto">
                <option>Auto</option>
                <option>Square</option>
                <option>Spiral</option>
                <option>Circle</option>
              </select>
            </div>
          </div>
        </div>

        <div class="w-full overflow-auto mt-6 h-96 rounded-2xl backdrop-blur-2xl bg-black/30">
          <img src="~/assets/img/mapping.png" class="w-full object-cover object-center " alt="Mapping Auto">
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
store.header = 'Robot Auto'
</script>

<style scoped>

</style>