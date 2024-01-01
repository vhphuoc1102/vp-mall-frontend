<template>
  <div class="card flex align-items-center justify-content-center h-screen">
    <Card class="w-30rem">
      <template #title> Payment Successful! </template>
      <template #subtitle>
        Your payment has been processed successfully.
      </template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <router-link to="/">
          <Button
            icon="pi pi-check"
            label="Back to home page"
            size="small"
            class="text-sm"
        /></router-link>
        <router-link to="/order">
          <Button
            icon="pi pi-times"
            label="View orders"
            style="margin-left: 0.5em"
            size="small"
            class="text-sm"
        /></router-link>
      </template>
    </Card>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'main',
});
</script>

<style></style>
