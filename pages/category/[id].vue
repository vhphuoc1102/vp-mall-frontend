<template>
  <div class="p-3">
    <CategoryFilterBar />
    <div class="card">
      <DataView :value="products" :layout="layout">
        <template #list="slotProps">
          <div class="grid grid-nogutter">
            <div
              v-for="(item, index) in slotProps.items"
              :key="index"
              class="col-12"
            >
              <div
                class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4"
                :class="{ 'border-top-1 surface-border': index !== 0 }"
              >
                <img
                  class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
                  :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`"
                  :alt="item.name"
                />
                <div
                  class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4"
                >
                  <div
                    class="flex flex-column align-items-center sm:align-items-start gap-3"
                  >
                    <div class="text-2xl font-bold text-900">
                      {{ item.name }}
                    </div>
                    <Rating
                      :modelValue="item.rating"
                      readonly
                      :cancel="false"
                    ></Rating>
                    <div class="flex align-items-center gap-3">
                      <span class="flex align-items-center gap-2">
                        <i class="pi pi-tag"></i>
                        <span class="font-semibold">{{ item.category }}</span>
                      </span>
                      <Tag
                        :value="item.inventoryStatus"
                        :severity="getSeverity(item)"
                      ></Tag>
                    </div>
                  </div>
                  <div
                    class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2"
                  >
                    <span class="text-2xl font-semibold"
                      >${{ item.price }}</span
                    >
                    <Button
                      icon="pi pi-shopping-cart"
                      rounded
                      :disabled="item.inventoryStatus === 'OUTOFSTOCK'"
                    ></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>

        <template #grid="slotProps">
          <div class="grid grid-nogutter">
            <div
              v-for="(item, index) in slotProps.items"
              :key="index"
              class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2"
            >
              <div
                class="p-4 border-1 surface-border surface-card border-round"
              >
                <div
                  class="flex flex-wrap align-items-center justify-content-between gap-2"
                >
                  <div class="flex align-items-center gap-2">
                    <i class="pi pi-tag"></i>
                    <span class="font-semibold">{{ item.category }}</span>
                  </div>
                  <Tag
                    :value="item.inventoryStatus"
                    :severity="getSeverity(item)"
                  ></Tag>
                </div>
                <div class="flex flex-column align-items-center gap-3 py-5">
                  <img
                    class="w-9 shadow-2 border-round"
                    :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`"
                    :alt="item.name"
                  />
                  <div class="text-2xl font-bold">{{ item.name }}</div>
                  <Rating
                    :modelValue="item.rating"
                    readonly
                    :cancel="false"
                  ></Rating>
                </div>
                <div class="flex align-items-center justify-content-between">
                  <span class="text-2xl font-semibold">${{ item.price }}</span>
                  <Button
                    icon="pi pi-shopping-cart"
                    rounded
                    :disabled="item.inventoryStatus === 'OUTOFSTOCK'"
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </template>
      </DataView>
    </div>
    <ScrollTop />
  </div>
</template>

<script setup>
onMounted(() => {
  products.value = [
    {
      id: "1000",
      code: "f230fh0g3",
      name: "Bamboo Watch",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      id: "1001",
      code: "nvklal433",
      name: "Black Watch",
      description: "Product Description",
      image: "black-watch.jpg",
      price: 72,
      category: "Accessories",
      quantity: 61,
      inventoryStatus: "INSTOCK",
      rating: 4,
    },
    {
      id: "1002",
      code: "zz21cz3c1",
      name: "Blue Band",
      description: "Product Description",
      image: "blue-band.jpg",
      price: 79,
      category: "Fitness",
      quantity: 2,
      inventoryStatus: "LOWSTOCK",
      rating: 3,
    },
    {
      id: "1003",
      code: "244wgerg2",
      name: "Blue T-Shirt",
      description: "Product Description",
      image: "blue-t-shirt.jpg",
      price: 29,
      category: "Clothing",
      quantity: 25,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      id: "1004",
      code: "h456wer53",
      name: "Bracelet",
      description: "Product Description",
      image: "bracelet.jpg",
      price: 15,
      category: "Accessories",
      quantity: 73,
      inventoryStatus: "INSTOCK",
      rating: 4,
    },
    {
      id: "1005",
      code: "av2231fwg",
      name: "Brown Purse",
      description: "Product Description",
      image: "brown-purse.jpg",
      price: 120,
      category: "Accessories",
      quantity: 0,
      inventoryStatus: "OUTOFSTOCK",
      rating: 4,
    },
    {
      id: "1006",
      code: "bib36pfvm",
      name: "Chakra Bracelet",
      description: "Product Description",
      image: "chakra-bracelet.jpg",
      price: 32,
      category: "Accessories",
      quantity: 5,
      inventoryStatus: "LOWSTOCK",
      rating: 3,
    },
    {
      id: "1007",
      code: "mbvjkgip5",
      name: "Galaxy Earrings",
      description: "Product Description",
      image: "galaxy-earrings.jpg",
      price: 34,
      category: "Accessories",
      quantity: 23,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      id: "1008",
      code: "vbb124btr",
      name: "Game Controller",
      description: "Product Description",
      image: "game-controller.jpg",
      price: 99,
      category: "Electronics",
      quantity: 2,
      inventoryStatus: "LOWSTOCK",
      rating: 4,
    },
    {
      id: "1009",
      code: "cm230f032",
      name: "Gaming Set",
      description: "Product Description",
      image: "gaming-set.jpg",
      price: 299,
      category: "Electronics",
      quantity: 63,
      inventoryStatus: "INSTOCK",
      rating: 3,
    },
  ].slice(0, 9);
});

const products = ref();
const layout = ref("grid");

const getSeverity = (product) => {
  switch (product.inventoryStatus) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warning";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return null;
  }
};
definePageMeta({
  layout: "main",
});
</script>
