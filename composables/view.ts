import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', {
    state: () => ({
        header: 'Dashboard'
    }),
    getters: {
        getHeader: (state) => state.header
    },
    actions: {
        setHeader(payload) {
            this.header = payload
        }
    }
})