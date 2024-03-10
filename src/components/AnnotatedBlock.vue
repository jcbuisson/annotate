<template>
   <div class="my-2" v-if="type === 'block'">
      <template v-for="part of parts">
         <span :class="{ 'bg-yellow-200': part.highlighted }"
            @mouseup="onMouseUp(part)" @mousedown="onMouseDown(part)" v-html="part.text"
            @touchend="onMouseUp(part)" @touchstart="onMouseDown(part)"
         ></span>
      </template>
   </div>

   <div class="my-4" v-if="type === 'title-block'">
      <template v-for="part of parts">
         <span class="font-bold text-4xl" :class="{ 'bg-yellow-200': part.highlighted }"
            @mouseup="onMouseUp(part)" @mousedown="onMouseDown(part)" v-html="part.text"
            @touchend="onMouseUp(part)" @touchstart="onMouseDown(part)"
         ></span>
      </template>
   </div>

   <template v-if="type === 'bold-span'">
      <template v-for="part of parts">
         <span class="font-bold" :class="{ 'bg-yellow-200': part.highlighted }"
            @mouseup="onMouseUp(part)" @mousedown="onMouseDown(part)" v-html="part.text"
            @touchend="onMouseUp(part)" @touchstart="onMouseDown(part)"
         ></span>
      </template>
   </template>

   <template v-if="type === 'span'">
      <template v-for="part of parts">
         <span :class="{ 'bg-yellow-200': part.highlighted }"
            @mouseup="onMouseUp(part)" @mousedown="onMouseDown(part)" v-html="part.text"
            @touchend="onMouseUp(part)" @touchstart="onMouseDown(part)"
         ></span>
      </template>
   </template>

   <template v-if="type === 'lexicon'">
      <template v-for="part of parts">
         <span class="font-medium text-red-600 underline hover:cursor-pointer" :class="{ 'bg-yellow-200': part.highlighted }"
            @mouseup="onMouseUp(part)" @mousedown="onMouseDown(part)" v-html="part.text"
            @touchend="onMouseUp(part)" @touchstart="onMouseDown(part)"
         ></span>
      </template>
   </template>

   <slot></slot>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import stringHash from 'string-hash'


const props = defineProps({
   text: {
      type: String,
      required: true
   },
   type: {
      type: String,
      default: 'block'
   },
   highlight: {
      type: Boolean,
      default: false
   },
})

const hashValue = stringHash(props.text)

const parts = useLocalStorage(`part${hashValue}`, [
{
      text: props.text,
      start: 0,
      end: props.text.length,
      highlighted: false,
   }
])

let selectedPart

function onMouseUp(part) {
   if (!props.highlight) return
   if (selectedPart !== part) return

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
      console.log('first', partIndex)
      parts.value.splice(partIndex, 1, ...[
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
   } else if (range.endOffset === part.end) {
      // replace part by 2 sub-parts, the right one being highlighted
      console.log('last', partIndex)
      parts.value.splice(partIndex, 1, ...[
         {
            text: part.text.substring(0, range.startOffset),
            start: 0,
            end: part.start + range.startOffset,
         },
         {
            text: part.text.substring(range.startOffset, range.endOffset),
            start: part.start + range.startOffset,
            end: part.end,
            highlighted: true,
         },
      ])
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

function onMouseDown(part) {
   selectedPart = part
}
</script>
