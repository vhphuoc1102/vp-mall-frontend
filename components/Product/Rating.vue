<template>
  <div>
    <div class="flex justify-content-center flex-wrap gap-1">
      <h4 class="text-4xl m-0">4.8</h4>
      <Rating :modelValue="3" :stars="1" :cancel="false" />
    </div>
    <div class="text-xs text-center font-light text-500">
      Based on 2000 ratings
    </div>
    <div class="text-xs mt-3">
      <div class="grid">
        <div class="col-4 flex align-items-center">5 Stars</div>
        <div class="col-8">
          <ProgressBar :value="40" class="text-xs" :pt="passthough">
            {{ value }}</ProgressBar
          >
        </div>
      </div>
      <div class="grid">
        <div class="col-4 flex align-items-center">4 Stars</div>
        <div class="col-8">
          <ProgressBar :value="40" class="text-xs" :pt="passthough">
            {{ value }}</ProgressBar
          >
        </div>
      </div>
      <div class="grid">
        <div class="col-4 flex align-items-center">3 Stars</div>
        <div class="col-8">
          <ProgressBar :value="40" class="text-xs" :pt="passthough">
            {{ value }}</ProgressBar
          >
        </div>
      </div>
      <div class="grid">
        <div class="col-4 flex align-items-center">2 Stars</div>
        <div class="col-8">
          <ProgressBar :value="40" class="text-xs" :pt="passthough">
            {{ value }}</ProgressBar
          >
        </div>
      </div>
      <div class="grid">
        <div class="col-4 flex align-items-center">1 Stars</div>
        <div class="col-8">
          <ProgressBar :value="40" class="text-xs" :pt="passthough">
            {{ value }}</ProgressBar
          >
        </div>
      </div>
    </div>
    <div class="mt-2">
      <Button
        label="Write a review"
        icon="pi pi-pencil"
        class="text-sm w-full"
        @click="visible = true"
      />
    </div>
    <CommonDivider class="my-3"></CommonDivider>
    <div>
      <MultiSelect
        v-model="selectedStars"
        display="chip"
        :options="starsList"
        optionLabel="name"
        placeholder="Stars"
        :maxSelectedLabels="5"
        class="w-full text-xs"
        :pt="{
          option: {
            class: 'text-xs',
          },
        }"
      />
    </div>
    <div class="my-3">
      <MultiSelect
        v-model="selectedImages"
        display="chip"
        :options="imagesList"
        optionLabel="name"
        placeholder="Images"
        :maxSelectedLabels="5"
        class="w-full text-xs"
        :pt="{
          option: {
            class: 'text-xs',
          },
        }"
      />
    </div>
    <div class="mt-2">
      <Button
        label="Filter reviews"
        icon="pi pi-filter-fill"
        class="text-sm w-full"
      />
    </div>
    <ProductReviewModal :visible="visible" @update:visible="visible = false" />
  </div>
</template>
<script setup>
const value = ref(1000);
const passthough = {
  root: {
    class: 'h-1rem',
  },
};
const selectedStars = ref();
const starsList = ref([
  { name: '5 stars' },
  { name: '4 stars' },
  { name: '3 stars' },
  { name: '2 stars' },
  { name: '1 stars' },
]);
const selectedImages = ref();
const imagesList = ref([{ name: 'Have images' }, { name: 'No images' }]);
const visible = ref(false);
</script>
