<template>
   <div class="w-full p-4 m-2 rounded bg-slate-50">
      <AnnotatedBlock type="title-block" text="Présentation du système nerveux">
         <AnnotatedBlock type="span" text="Le système nerveux est constitué de deux parties distinctes : le système nerveux central (" />
         <AnnotatedBlock type="lexicon" text="cerveau" />
         <AnnotatedBlock type="span" text=" et " />
         <AnnotatedBlock type="lexicon" text="moelle épinière" />
         <AnnotatedBlock type="span" text=") et le " />
         <AnnotatedBlock type="lexicon" text="système nerveux périphérique" />
         <AnnotatedBlock type="span" text=" (nerfs sortant du cerveau et de la moelle épinière)." />

         <ul class="list-disc">
            <li class="ml-8">
               <AnnotatedBlock type="bold-span" text="Axone :" /> <AnnotatedBlock type="span" text="fibre nerveuse longue et mince" />
            </li>
            <li class="ml-8">
               <AnnotatedBlock type="bold-span" text="Dendrites :" /> <AnnotatedBlock type="span" text="branches des " /> <AnnotatedBlock type="lexicon" text="cellules" link="cell" /> <AnnotatedBlock type="span" text="nerveuses" />
            </li>
         </ul>
      </AnnotatedBlock>
   </div>
</template>

<script setup>
import AnnotatedBlock from '/src/components/AnnotatedBlock.vue'
</script>