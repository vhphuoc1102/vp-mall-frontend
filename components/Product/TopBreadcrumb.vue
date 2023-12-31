<template>
  <div class="card">
    <Breadcrumb :home="home" :model="items" />
  </div>
</template>

<script lang="ts" setup>
const home = ref({
  icon: "pi pi-home",
});
const items = ref([
  { label: "Electronics" },
  { label: "Computer" },
  { label: "Accessories" },
  { label: "Keyboard" },
  { label: "Wireless" },
]);
</script>

<style></style>
