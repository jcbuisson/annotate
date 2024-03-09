<template>
   <div class="w-full p-4 m-2">
      <AnnotatedTitleBlock key="k1" text="Le système nerveux" />
      <AnnotatedBlock key="k2" text="Le système nerveux est constitué de deux parties distinctes">
         <ul>
            <li class="list-disc">
               <AnnotatedBoldSpan key="k3" text="Axone fibre nerveuse" /> <AnnotatedSpan key="k4" text="longue et mince" />
            </li>
            <li class="list-disc">
               <AnnotatedSpan key="k5" text="Dendrites : branches des cellules nerveuses" />
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
</script>