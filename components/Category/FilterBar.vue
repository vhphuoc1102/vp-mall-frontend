<template>
  <div class="px-2 pb-3">
    <div class="flex justify-content-start flex-wrap gap-3 pb-3">
      <CategoryBigFilter />
      <CategoryFilterAttribute />
      <CategoryFilterAttribute />
      <CategoryFilterAttribute />
      <CategoryFilterAttribute />
      <CategoryFilterAttribute />
    </div>

    <div class="flex justify-content-between flex-wrap">
      <span class="flex align-items-center font-bold text-sm"
        >Found 100 results</span
      >
      <CategorySorter />
    </div>
  </div>
</template>
