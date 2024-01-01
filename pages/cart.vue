<template>
  <div>
    <div class="grid grid-nogutter">
      <div class="col-6 p-0">
        <CartTransaction />
      </div>
      <div class="col-6 p-0">
        <CartBill />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'main',
});
</script>
