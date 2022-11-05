import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', {
    state: () => ({
        content: '',
        color: '',
    }),
    getters: {
        getContent: (state) => state.content,
        getColor: (state) => state.color,
    },
    actions: {
        setContent(payload) {
            this.header = payload
        },
        setColor(payload) {
            this.header = payload
        }
    }
})