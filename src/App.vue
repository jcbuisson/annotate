<template>
   <div class="w-full p-4 m-2 rounded bg-slate-50">
      <!-- <AnnotatedBlock type="title-block" text="Présentation du système nerveux">
         <AnnotatedBlock type="span" text="Le système nerveux est constitué de deux parties distinctes : le système nerveux central (" />
         <AnnotatedBlock type="lexicon" text="cerveau" />
         <AnnotatedBlock type="span" text=" et " />
         <AnnotatedBlock type="lexicon" text="moelle épinière" />
         <AnnotatedBlock type="span" text=") et le " />
         <AnnotatedBlock type="lexicon" text="système nerveux périphérique" />
         <AnnotatedBlock type="span" text=" (nerfs sortant du cerveau et de la moelle épinière)." />

         <ul class="list-disc">
            <li class="ml-8">
               <AnnotatedBlock type="bold-span" text="Axone :" /> <AnnotatedBlock type="span" text="fibre nerveuse longue et mince qui sort d’une cellule nerveuse et peut envoyer des messages sous forme d’impulsions électriques à d’autres cellules nerveuses et muscles" />
            </li>
            <li class="ml-8">
               <AnnotatedBlock type="bold-span" text="Dendrites :" /> <AnnotatedBlock type="span" text="branches des " /> <AnnotatedBlock type="lexicon" text="cellules" link="cell" /> <AnnotatedBlock type="span" text=" nerveuses qui reçoivent les impulsions électriques" />
            </li>
         </ul>
      </AnnotatedBlock>

      <AnnotatedBlock type="block" text="En général, les fibres nerveuses transmettent les influx électriques dans un seul sens : de l’axone d’une cellule nerveuse (également appelée neurone) vers les dendrites d’une autre cellule nerveuse. Au niveau du point de contact entre cellules nerveuses (synapses), l’axone sécrète de petites quantités de messagers chimiques (neurotransmetteurs). Les neurotransmetteurs stimulent les récepteurs des dendrites de la cellule nerveuse suivante pour produire un nouveau courant électrique. Les neurotransmetteurs qui transportent l’influx à travers des synapses diffèrent selon le type de fibres nerveuses. Certaines impulsions stimulent la cellule nerveuse suivante, tandis que d’autres l’inhibent." /> -->

      <AnnotatedBlock type="block" text="Les fibres nerveuses transmettent les influx électriques dans un seul sens" />
   </div>
</template>

<script setup>
import AnnotatedBlock from '/src/components/AnnotatedBlock.vue'
</script>