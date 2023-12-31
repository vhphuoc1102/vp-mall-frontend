<template>
  <div>
    <Dropdown
      v-model="sortKey"
      :options="sortOptions"
      optionLabel="label"
      placeholder="Sort By Price"
      @change="onSortChange($event)"
      size="small"
      inputClass="text-xs p-2"
      panelClass="text-xs"
      class="sorter"
      :pt="{
        item: { class: 'p-2' },
        list: { class: 'p-0' },
      }"
    />
  </div>
</template>

<script lang="ts" setup>
const sortKey = ref();
const sortOrder = ref();
const sortField = ref();
const sortOptions = ref([
  { label: "Price High to Low", value: "!price" },
  { label: "Price Low to High", value: "price" },
]);
const onSortChange = (event: any) => {
  const value = event.value.value;
  const sortValue = event.value;

  if (value.indexOf("!") === 0) {
    sortOrder.value = -1;
    sortField.value = value.substring(1, value.length);
    sortKey.value = sortValue;
  } else {
    sortOrder.value = 1;
    sortField.value = value;
    sortKey.value = sortValue;
  }
};
</script>
<style scoped>
.sorter ::v-deep(.p-dropdown-trigger) {
  width: 2rem !important;
}
</style>
