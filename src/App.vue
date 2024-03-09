<template>
   <div class="m-2">
      <div class="w-full p-4">
         <AnnotatedBlock :text="text" />
      </div>
      <p class="mt-5">{{ state }}</p>
   </div>
</template>

<script setup>
import { ref } from 'vue'
import AnnotatedBlock from '/src/components/AnnotatedBlock.vue'

const text = "Le processus d'inflammation aiguë est initié par les cellules immunitaires résidentes déjà présentes dans le tissu impliqué, principalement les macrophages résidents, les cellules dendritiques, les histiocytes, les cellules de Kupffer et les mastocytes."

</script>