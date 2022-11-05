<template>
  <div class="overflow-hidden">
    <div class="min-h-screen fixed top-0 left-0 w-full bottom-0 overflow-hidden">
      <img src="~/assets/img/pattern.png" class="md:inline-block inline-block w-1/2 absolute md:right-0 md:top-0 blur-3xl opacity-50" alt="socleanbot">
      <img src="~/assets/img/pattern.png" class="inline-block md:w-1/2 w-full absolute md:left-0 md:-bottom-48 md:rotate-90 -right-24 md:blur-3xl blur-lg opacity-60 bottom-0" alt="socleanbot">
    </div>
    <div class="container mx-auto md:px-12 px-8 relative">
      <div class="max-w-4xl mx-auto space-y-8">

        <div class="w-full p-8 flex backdrop-blur-2xl justify-between items-center rounded-2xl bg-black/30">
          <div>
            <h2 class="text-2xl font-bold">ProtoRobotOne</h2>
            <div class="badge gap-2 mt-3 py-3 px-6" :class="{'badge-error': !form.status, 'badge-success': form.status}">
              {{ form.status ? 'Active' : 'Shutdown' }}
            </div>
          </div>
          <div class="form-control">
            <label class="cursor-pointer label">
              <input type="checkbox" v-model="form.status" class="toggle toggle-accent" />
            </label>
          </div>
        </div>

        <div v-if="!form.status" class="w-full p-8 backdrop-blur-2xl rounded-2xl bg-black/30 text-center space-y-4">
          <img src="~/assets/img/robot-shutdown.png" class="md:w-1/4 w-1/2 inline-block" alt="Robot Shutdown">
          <div>
            <h2 class="text-2xl font-bold">Robot was offline</h2>
            <p>Please Turn On The Robot</p>
            <button @click="form.status = true" class="btn bg-gradient-to-l from-cyan-400 to-blue-500 text-black px-12 mt-4 font-normal">Turn On Robot</button>
          </div>
        </div>

        <div v-else>
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div class="w-full p-8 rounded-2xl backdrop-blur-2xl bg-black/30">
              <div class="flex w-full justify-between items-center">
                <div>
                  <h3 class="text-lg">Battery</h3>
                </div>
                <div class="bg-green-500/20 p-2 px-4 rounded text-green-500">
                  Charging...
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <Icon icon="bi:battery-charging" class="text-6xl mt-8 text-green-500" />
                </div>
                <div>
                  <h2 class="text-4xl text-green-500 mt-8 font-bold">87%</h2>
                </div>
              </div>
            </div>

            <div class="w-full p-8 rounded-2xl backdrop-blur-2xl bg-black/30">
              <div class="flex w-full justify-between items-center">
                <div>
                  <h3 class="text-lg">Position</h3>
                </div>
                <select class="select w-auto">
                  <option>Linear</option>
                  <option>Angular</option>
                </select>
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
              </div>
            </div>
          </div>

          <div class="w-full p-8 flex mt-6 justify-between items-center rounded-2xl backdrop-blur-2xl bg-black/30">
            <div>
              <h2 class="text-2xl font-bold">Robot Mode</h2>
            </div>
            <div class="form-control">
              <select class="select w-auto">
                <option>Cleaner</option>
                <option>Carry</option>
              </select>
            </div>
          </div>

          <div class="grid lg:grid-cols-3 grid-cols-1 gap-6">
            <div class="w-full p-8 mt-6 rounded-2xl backdrop-blur-2xl bg-black/30">
              <div>
                <div class="w-24 h-24 rounded-xl bg-cyan-500 flex justify-center items-center">
                  <Icon class="text-6xl text-white" icon="fluent:brain-circuit-24-regular" />
                </div>
              </div>
              <div class="mt-4">
                <h4 class="text-xl font-bold">Start Auto Cleaning Robot</h4>
                <NuxtLink href="/robot/auto" class="btn bg-gradient-to-l from-cyan-400 to-blue-500 text-black px-8 mt-4 font-normal">Start Now</NuxtLink>
              </div>
            </div>

            <div class="w-full p-8 mt-6 rounded-2xl backdrop-blur-2xl bg-black/30">
              <div>
                <div class="w-24 h-24 rounded-xl bg-blue-600 flex justify-center items-center">
                  <Icon class="text-6xl text-white" icon="carbon:audio-console" />
                </div>
              </div>
              <div class="mt-4">
                <h4 class="text-xl font-bold">Start Manual Cleaning Robot</h4>
                <NuxtLink href="/robot/manual" class="btn bg-gradient-to-l from-cyan-400 to-blue-500 text-black px-8 mt-4 font-normal">Start Now</NuxtLink>
              </div>
            </div>

            <div class="w-full p-8 mt-6 rounded-2xl backdrop-blur-2xl bg-black/30">
              <div>
                <div class="w-24 h-24 rounded-xl bg-violet-600 flex justify-center items-center">
                  <Icon class="text-6xl text-white" icon="mdi:robot-industrial-outline" />
                </div>
              </div>
              <div class="mt-4">
                <h4 class="text-xl font-bold">Check Any Component Robot</h4>
                <NuxtLink href="/robot/component" class="btn bg-gradient-to-l from-cyan-400 to-blue-500 text-black px-8 mt-4 font-normal">Start Now</NuxtLink>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue'
export default {
  components: {
    Icon
  },
  data() {
    return {
      form: {
        status: true
      }
    }
  }
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: none !important;
  filter: blur(1rem);
}
</style>