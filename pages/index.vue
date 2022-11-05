<template>
  <div class="bg-root-color text-white overflow-hidden min-h-screen">
    <div class="toast toast-top toast-end z-50">
      <div class="bg-white rounded-xl p-4 px-4 text-black" :class="{'hidden': !exception}">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 flex justify-center items-center rounded-lg inline-block bg-red-500">
            <Icon icon="bx:error" class="text-2xl text-white"/>
          </div>
          <span>Email or password is invalid</span>
          <div @click="exception = false" class="w-8 h-8 flex justify-center items-center cursor-pointer bg-black/20 rounded-full">
            <Icon icon="humbleicons:times"/>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full text-center absolute top-0 left-0 py-8">
      <img src="~/assets/img/logo.png" class="inline-block" alt="Logo soclean bot">
    </div>
    <div class="container md:px-12 px-8 mx-auto max-w-full">
      <div class="flex gap-4 min-h-screen relative items-center justify-center">
        <img src="~/assets/img/pattern.png" class="md:inline-block inline-block w-1/2 absolute md:right-0 md:top-0 blur-3xl opacity-50" alt="socleanbot">
        <img src="~/assets/img/pattern.png" class="inline-block md:w-1/2 w-full absolute md:left-0 md:-bottom-48 md:rotate-90 -right-24 md:blur-3xl blur-lg opacity-60 bottom-0" alt="socleanbot">
        <div class="text-center relative">
          <img src="~/assets/img/robot.png" class="inline-block md:w-3/4 w-full absolute md:-left-72 left-0 md:-top-24 -bottom-96 mt-24" alt="socleanbot">
          <form @submit.prevent="login($event)" class="rounded-xl md:w-3/4 w-full p-12 relative bg-black/40 shadow backdrop-blur-2xl md:left-32 md:top-0 text-left space-y-6">
            <div class="mb-6">
              <h1 class="text-4xl mb-4 font-bold">Login</h1>
              <p>Welcome to the soclean app</p>
            </div>
            <input v-model="form.email" required type="email" placeholder="Email or username" class="input bg-black/40 rounded-xl input-ghost w-full focus:bg-black" />
            <input v-model="form.password" required type="password" placeholder="Password" class="input bg-black/40 input-ghost px-4 w-full focus:bg-black" />
            <button class="btn bg-gradient-to-bl from-cyan-500 to-blue-600 text-black w-full">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
definePageMeta({
  layout: false
})

const exception = ref(false)

const form = {
  email: '',
  password: '',
}
const router = useRouter()
const login = (e) => {
  if(form.email === 'dev@siderobot.id' && form.password === 'password') {
    return navigateTo({
      path: '/connect'
    })
  }
  else
    exception.value = true

}
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: skew(40deg) scale(3) !important;
  filter: blur(1rem);
}
</style>