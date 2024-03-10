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

      <!-- <div class="border rounded px-2 pt-2 fixed right-2 top-10 bg-gray-300">
         <label class="swap swap-flip text-9xl">
            <input type="checkbox" v-model="highlight" />
            <div class="swap-on">
               <svg width="32" height="32" viewBox="0 0 12.7 15.875" version="1.1" x="0px" y="0px"><g transform="translate(0,-284.29998)"><path style="background-color: yellow;" d="m 10.032413,284.90066 a 0.52383499,0.52383499 0 0 0 -0.3813971,0.14366 l -7.547848,7.18044 a 3.9088925,3.9088925 0 0 1 -0.8743686,2.94091 l -0.69969058,0.6997 0.97202628,0.53433 0.46355,-0.46354 a 5.2938727,5.2938727 0 0 1 2.9915378,-1.00097 l 7.0703812,-7.43159 a 0.52383499,0.52383499 0 0 0 0,-0.72192 l -1.635575,-1.71927 a 0.52383499,0.52383499 0 0 0 -0.358616,-0.16175 z m -0.01773,0.19741 a 0.3256272,0.3256272 0 0 1 0.232568,0.10077 l 1.636051,1.71927 a 0.3256272,0.3256272 0 0 1 0,0.44907 l -0.07284,0.076 -2.1978147,-2.09031 0.1746779,-0.16485 a 0.3256272,0.3256272 0 0 1 0.2273568,-0.0899 z m -0.5451743,0.39222 2.2045083,2.09651 -6.7644432,7.11016 -2.5589971,-2.43447 z m -7.1447818,7.02076 2.3523046,2.23862 a 5.4920805,5.4920805 0 0 0 -0.471805,0.0538 l -1.8918766,-1.80041 a 4.1071003,4.1071003 0 0 0 0.011377,-0.49196 z m -0.039264,0.74001 1.6779345,1.59576 a 5.4920805,5.4920805 0 0 0 -2.0510499,0.88367 l -0.4779963,-0.50281 a 4.1071003,4.1071003 0 0 0 0.8511117,-1.97662 z m -0.9849644,2.1239 0.4609571,0.4842 -0.2955925,0.29559 -0.6097852,-0.33589 z" fill="#000000" stroke="none"/></g></svg>
            </div>
            <div class="swap-off">
               <svg width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
            </div>
         </label>
      </div> -->

      <ul class="menu bg-base-200 rounded-box h-36 fixed right-2 top-10">
         <li>
            <a :class="{ active: highlight === 'yellow' }" @click="highlight = 'yellow'">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="#dddd00" viewBox="0 0 24 24" stroke="#dddd00">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="mdiPencil" />
               </svg>
            </a>
         </li>
         <li>
            <a :class="{ active: highlight === 'orange' }" @click="highlight = 'orange'">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="orange" viewBox="0 0 24 24" stroke="orange">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="mdiPencil" />
               </svg>
            </a>
         </li>
         <li>
            <a :class="{ active: highlight === 'purple' }" @click="highlight = 'purple'">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="purple" viewBox="0 0 24 24" stroke="purple">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="mdiPencil" />
               </svg>
            </a>
         </li>
      </ul>

   </div>
</template>

<script setup>
import { ref } from 'vue'
import { mdiPencil } from '@mdi/js'

import AnnotatedBlock from '/src/components/AnnotatedBlock.vue'

const highlight = ref('orange')
</script>