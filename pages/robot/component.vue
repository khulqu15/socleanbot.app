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
            <h2 class="text-2xl font-bold">Select Component</h2>
          </div>
          <div>
            <div class="form-control">
              <select class="select w-auto">
                <option>Sensor: Camera</option>
                <option>Sensor: Lidar</option>
              </select>
            </div>
          </div>
        </div>

        <div class="w-full p-8 flex mt-6 justify-between items-center rounded-2xl backdrop-blur-2xl bg-black/30">
          <div>
            <h2 class="text-2xl font-bold">Camera Active</h2>
          </div>
          <div>
            <button class="btn bg-gradient-to-l from-cyan-400 to-blue-500 text-black px-12 font-normal">Turn On</button>
          </div>
        </div>

        <div class="w-full overflow-auto rounded-2xl backdrop-blur-2xl bg-black/30">
          <img src="~/assets/img/cam.png" class="w-full object-cover object-center " alt="Mapping Auto">
        </div>

        <div class="w-full p-8 flex mt-6 justify-between items-center rounded-2xl backdrop-blur-2xl bg-black/30">
          <div>
            <h2 class="text-2xl font-bold">Doesn't Realtime ? </h2>
          </div>
          <div>
            <button class="btn bg-gradient-to-l from-cyan-400 to-blue-500 text-black px-12 font-normal">
              <Icon icon="charm:refresh" class="text-xl"/>
            </button>
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
store.header = 'Component'
</script>

<style scoped>

</style>