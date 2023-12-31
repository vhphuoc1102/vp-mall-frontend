<template>
  <div class="w-full">
    <h1 class="m-0">Name of Product</h1>
    <p class="mt-1 mb-2">By Brand</p>
    <div class="flex flex-column gap-3">
      <div class="flex align-items-center gap-4">
        <div class="flex gap-1 relative">
          <nuxt-link to="#reviews" class="absolute w-full z-1 opacity-0">
          </nuxt-link>
          <Rating :modelValue="3" :cancel="false" />
          <div>(100)</div>
        </div>
        <div>|</div>
        <div>Sold: 120 products</div>
      </div>
      <div class="flex align-items-center gap-4">
        <h2>199.000đ</h2>
        <h2 class="line-through text-300">299.000đ</h2>
        <h4 class="text-red-600">-50%</h4>
      </div>
      <div class="flex flex-column gap-3 pb-1">
        <div>
          <div class="flex gap-3 flex-wrap pb-1">
            <h4 class="m-0 font-normal inline-block">Attribute :</h4>
            <div class="font-semibold">Blue</div>
          </div>
          <div class="flex flex-wrap gap-2">
            <CommonAttributeButton />
            <CommonAttributeButton />
            <CommonAttributeButton />
          </div>
        </div>
        <div>
          <div class="flex gap-3 flex-wrap pb-1">
            <h4 class="m-0 font-normal inline-block">Attribute :</h4>
            <div class="font-semibold">Blue</div>
          </div>
          <div class="flex flex-wrap gap-2">
            <CommonAttributeButton />
            <CommonAttributeButton />
            <CommonAttributeButton />
          </div>
        </div>
      </div>

      <div class="flex align-content-start flex-wrap gap-4">
        <InputNumber
          v-model="value"
          inputId="horizontal-buttons"
          showButtons
          buttonLayout="horizontal"
          :step="1"
          inputClass="p-0 w-3rem text-center"
          :incrementButtonProps="{
            class: 'p-2 w-2rem',
          }"
          :decrementButtonProps="{
            class: 'p-2 w-2rem',
          }"
        >
          <template #incrementbuttonicon>
            <span class="pi pi-plus" />
          </template>
          <template #decrementbuttonicon>
            <span class="pi pi-minus" />
          </template>
        </InputNumber>
        <div class="flex align-items-center">18 products avaible</div>
      </div>
      <div class="flex gap-3">
        <Button label="Add to cart" icon="pi pi-cart-plus" outlined />
        <Button label="Buy now" icon="pi pi-shopping-bag" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const value = ref(1);
</script>
