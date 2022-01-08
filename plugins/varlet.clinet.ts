import { defineNuxtPlugin } from '#app'
import {AppBar,Button,Icon} from '@varlet/ui'
import Skeleton from '@varlet/ui/es/skeleton'
import '@varlet/ui/es/app-bar/style'
import '@varlet/ui/es/button/style'
import '@varlet/ui/es/icon/style'
import '@varlet/ui/es/skeleton/style'

export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp
    nuxtApp.vueApp.use(AppBar)
    nuxtApp.vueApp.use(Button)
    nuxtApp.vueApp.use(Icon)
    nuxtApp.vueApp.use(Skeleton)
})
