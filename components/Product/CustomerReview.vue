<template>
  <div class="w-full">
    <h3>Customer Review</h3>
    <div class="grid">
      <div class="col-3">
        <div>
          <ProductRating />
        </div>
      </div>
      <div class="col-9 pl-3 flex flex-column gap-3">
        <ProductReview />
        <CommonDivider />
        <ProductReview />
        <CommonDivider />
        <Paginator
          :rows="10"
          :totalRecords="120"
          :pt="{
            root: {
              class: 'text-xs',
            },
          }"
        />
      </div>
    </div>
  </div>
</template>
