<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: 'heroicons-outline:exclamation'
  },
  type: {
    type: String,
    default: null
  }
})

console.log(props);
const colorType = {
  warning: ['text-gray-200', 'bg-amber-600'],
  info: ['text-gray-200', 'bg-sky-600'],
  success: ['text-gray-200', 'bg-teal-600'],
  error: ['text-gray-200', 'bg-rose-600']
}
const alertType = computed(()=>{
  return colorType[props.type] ?? ''
})
</script>

<template>
  <div class="alert shadow-2xl" :class="alertType">
    <div class="flex">
      <div v-if="icon" class="flex-shrink-0 mr-3">
        <Icon class="w-8 h-8" :class="alertType ? 'text-gray-200' : 'text-sky-500'" aria-hidden="true" :name="icon" />
      </div>
      <div>
        <div class="text-xl mb-2 font-semibold">
          <Markdown :use="$slots.title" unwrap="p" />
        </div>
        <div>
          <Markdown :use="$slots.default" unwrap="p" />
        </div>
      </div>
    </div>
  </div>

</template>
