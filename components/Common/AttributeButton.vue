<template>
  <div>
    <ToggleButton
      v-model="checked"
      onLabel="Red"
      offLabel="Red"
      :pt="{
        root: {
          class: [
            { 'border-green-300': checked },
            { 'border-2': checked },
            'bg-white',
            'p-2',
            'w-5rem',
          ],
        },
        label: {
          class: ['font-medium', 'text-900'],
        },
      }"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const checked = ref(false);
</script>
