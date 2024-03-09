<template>
   <div>
      <template v-for="part of parts">
         <span :class="{ 'bg-yellow-200': part.highlighted }" @mouseup="onMouseUp(part)" v-html="part.text"></span>
      </template>
   </div>
   <slot></slot>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useLocalStorage } from '@vueuse/core'


const props = defineProps({
   cle: {
      type: String,
      required: true
   },
   text: {
      type: String,
      required: true
   },
})

const parts = useLocalStorage(props.cle, [
{
      text: props.text,
      start: 0,
      end: props.text.length,
      highlighted: false,
   }
])

function onMouseUp(part) {
   const selection = window.getSelection()
   // selection must not be empty
   if (!selection || selection.rangeCount === 0) return
   console.log('range count', selection.rangeCount)
   const range = selection.getRangeAt(0)
   if (range.startOffset === range.endOffset) return

   console.log('part', part)
   console.log('range', range)
   const partIndex = parts.value.indexOf(part)
   if (range.startOffset === part.start) {
      // replace part by 2 sub-parts, the left one being highlighted
   } else if (range.endOffset === part.end) {
      // replace part by 2 sub-parts, the right one being highlighted
   } else {
      // replace part by 3 sub-parts, the middle one being highlighted
      parts.value.splice(partIndex, 1, ...[
      {
            text: part.text.substring(0, range.startOffset),
            start: part.start,
            end: part.start + range.startOffset,
         },
         {
            text: part.text.substring(range.startOffset, range.endOffset),
            start: part.start + range.startOffset,
            end: part.start + range.endOffset,
            highlighted: true,
         },
         {
            text: part.text.substring(range.endOffset, part.end),
            start: part.start + range.endOffset,
            end: part.end,
         },
      ])
   }
}
</script>
