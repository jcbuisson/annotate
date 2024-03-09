<template>
   <div class="w-full p-4 m-2 rounded bg-slate-50">
      <AnnotatedTitleBlock cle="k1" text="Présentation du système nerveux" />
      <AnnotatedBlock cle="k2" text="Le système nerveux est constitué de deux parties distinctes">
         <ul class="list-disc">
            <li class="ml-8">
               <AnnotatedBoldSpan cle="k3" text="Axone :" /> <AnnotatedSpan cle="k4" text="fibre nerveuse longue et mince" />
            </li>
            <li class="ml-8">
               <AnnotatedBoldSpan cle="k33" text="Dendrites :" /> <AnnotatedSpan cle="k5" text="branches des " /> <AnnotatedLexicon cle="k6" text="cellules" link="cell" /> <AnnotatedSpan cle="k7" text="nerveuses" />
            </li>
         </ul>
      </AnnotatedBlock>
   </div>
</template>

<script setup>
import AnnotatedBlock from '/src/components/AnnotatedBlock.vue'
import AnnotatedTitleBlock from '/src/components/AnnotatedTitleBlock.vue'
import AnnotatedBoldSpan from '/src/components/AnnotatedBoldSpan.vue'
import AnnotatedSpan from '/src/components/AnnotatedSpan.vue'
import AnnotatedLexicon from '/src/components/AnnotatedLexicon.vue'
</script>