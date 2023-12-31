<template>
  <div class="surface-50 pt-3">
    <div class="grid mx-5">
      <ProductTopBreadcrumb class="col-12" />
      <div class="col-12">
        <div
          class="flex py-3 px-5 border-1 border-200 bg-white border-round-md"
          id=""
        >
          <ProductMainGalleria />
          <ProductMainInformation class="pl-5" />
        </div>
      </div>
      <div class="col-8">
        <div class="grid">
          <div class="col-12">
            <div
              class="flex py-3 px-5 border-1 border-200 bg-white border-round-md"
            >
              <ProductGeneralDescription />
            </div>
          </div>
          <div class="col-12">
            <div
              class="flex py-3 px-5 border-1 border-200 bg-white border-round-md"
              id="reviews"
            >
              <ProductCustomerReview />
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="grid">
          <div class="col-12">
            <div
              class="flex py-3 px-5 border-1 border-200 bg-white border-round-md"
            >
              <ProductSpecification />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "main",
});
</script>
