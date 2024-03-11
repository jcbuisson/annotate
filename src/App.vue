<template>
   <div class="flex justify-center">
      <div class="p-4 m-2 rounded bg-slate-50 max-w-[800px]">
         <AnnotatedBlock type="title-block" :highlight="highlight" text="Présentation du système nerveux">
            <AnnotatedBlock type="span" :highlight="highlight" text="Le système nerveux est constitué de deux parties distinctes : le système nerveux central (" />
            <AnnotatedBlock type="lexicon" :highlight="highlight" text="cerveau" />
            <AnnotatedBlock type="span" :highlight="highlight" text=" et " />
            <AnnotatedBlock type="lexicon" :highlight="highlight" text="moelle épinière" />
            <AnnotatedBlock type="span" :highlight="highlight" text=") et le " />
            <AnnotatedBlock type="lexicon" :highlight="highlight" text="système nerveux périphérique" />
            <AnnotatedBlock type="span" :highlight="highlight" text=" (nerfs sortant du cerveau et de la moelle épinière)." />

            <img class="md:float-right m-3 border" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Neurone.svg">

            <ul class="list-disc">
               <li class="ml-8 my-3">
                  <AnnotatedBlock type="bold-span" :highlight="highlight" text="Axone :" /> <AnnotatedBlock type="span" text="fibre nerveuse longue et mince qui sort d’une cellule nerveuse et peut envoyer des messages sous forme d’impulsions électriques à d’autres cellules nerveuses et muscles" />
               </li>

               <li class="ml-8 my-3">
                  <AnnotatedBlock type="bold-span" :highlight="highlight" text="Dendrites :" /> <AnnotatedBlock type="span" text="branches des " /> <AnnotatedBlock type="lexicon" text="cellules" link="cell" /> <AnnotatedBlock type="span" text=" nerveuses qui reçoivent les impulsions électriques" />
               </li>
            </ul>
         </AnnotatedBlock>

         <AnnotatedBlock type="block" :highlight="highlight" text="En général, les fibres nerveuses transmettent les influx électriques dans un seul sens : de l’axone d’une cellule nerveuse (également appelée neurone) vers les dendrites d’une autre cellule nerveuse. Au niveau du point de contact entre cellules nerveuses (synapses), l’axone sécrète de petites quantités de messagers chimiques (neurotransmetteurs). Les neurotransmetteurs stimulent les récepteurs des dendrites de la cellule nerveuse suivante pour produire un nouveau courant électrique. Les neurotransmetteurs qui transportent l’influx à travers des synapses diffèrent selon le type de fibres nerveuses. Certaines impulsions stimulent la cellule nerveuse suivante, tandis que d’autres l’inhibent." />

         <!-- <AnnotatedBlock type="block" :highlight="highlight" text="Les fibres nerveuses transmettent les influx électriques dans un seul sens" /> -->
      </div>

      <ul class="menu bg-base-200 rounded-box h-44 fixed right-2 top-10">
         <li>
            <a :class="{ active: highlight === 'yellow' }" @click="highlight = 'yellow'">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="yellow" viewBox="0 0 24 24" stroke="none">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="mdiPencil" />
               </svg>
            </a>
         </li>
         <li>
            <a :class="{ active: highlight === 'orange' }" @click="highlight = 'orange'">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="orange" viewBox="0 0 24 24" stroke="none">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="mdiPencil" />
               </svg>
            </a>
         </li>
         <li>
            <a :class="{ active: highlight === 'purple' }" @click="highlight = 'purple'">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="purple" viewBox="0 0 24 24" stroke="none">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="mdiPencil" />
               </svg>
            </a>
         </li>
         <li>
            <a :class="{ active: highlight === 'eraser' }" @click="highlight = 'eraser'">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="green" viewBox="0 0 24 24" stroke="none">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="mdiEraser" />
               </svg>
            </a>
         </li>
      </ul>

   </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { mdiPencil, mdiEraser } from '@mdi/js'
import { useRegisterSW } from 'virtual:pwa-register/vue'

import AnnotatedBlock from '/src/components/AnnotatedBlock.vue'

const highlight = ref('yellow')


/////////////////      PREVENT COPY EVERYWHERE     ////////////////

onMounted(() => {
   document.addEventListener('copy', (event) => {
      event.preventDefault()
   })
})

/////////////////      AUTOMATIC VERSION UPDATE     ////////////////

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
   immediate: true,
   onRegistered(r) {
      console.log(`SW onRegistered: ${r}`)
      r && setInterval(async() => {
         console.log('Checking for sw update')
         await r.update()
         console.log('needRefresh', needRefresh.value)
         if (needRefresh.value) {
            // update app
            console.log('updating app..!')
            updateServiceWorker()
         }

      }, 20000 /* check every 20s */)
   },
})

</script>
