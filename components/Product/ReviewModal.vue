<template>
  <div>
    <Dialog
      :visible="props.visible"
      :modal="true"
      :style="{ width: '40vw' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
      :draggable="false"
      @update:visible="$emit('update:visible')"
    >
      <template #header>
        <div class="flex justify-content-center w-full">
          <h2>Write a review</h2>
        </div>
      </template>
      <template #footer></template>
    </Dialog>
  </div>
</template>
<script setup>
const props = defineProps({
  visible: Boolean,
});
</script>
