<template>
  <div>
    <Toast />
    <Dialog
      v-model:visible="deleteProductDialog"
      :style="{ width: '30rem' }"
      header="Confirm"
      :modal="true"
    >
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
        <span v-if="product"
          >Are you sure you want to delete <b>{{ product.name }}</b
          >?</span
        >
      </div>
      <template #footer>
        <Button
          label="No"
          icon="pi pi-times"
          text
          @click="deleteProductDialog = false"
        />
        <Button label="Yes" icon="pi pi-check" text @click="deleteProduct" />
      </template>
    </Dialog>
    <Dialog
      v-model:visible="deleteProductsDialog"
      :style="{ width: '30rem' }"
      header="Confirm"
      :modal="true"
    >
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
        <span>Are you sure you want to delete the selected products?</span>
      </div>
      <template #footer>
        <Button
          label="No"
          icon="pi pi-times"
          text
          @click="deleteProductsDialog = false"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          text
          @click="deleteSelectedProducts"
        />
      </template>
    </Dialog>
    <DataTable
      ref="dt"
      v-model:selection="selectedProducts"
      size="small"
      :value="products"
      scrollable
      scrollHeight="23rem"
      dataKey="id"
      :pt="{
        headercontent: {
          class: 'text-xs',
        },
      }"
    >
      <Column
        selectionMode="multiple"
        style="width: 1rem"
        :exportable="false"
      ></Column>
      <Column field="name" header="Name" :pt="ptColumn"></Column>
      <Column header="Image" :pt="ptColumn">
        <template #body="slotProps">
          <img
            :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`"
            :alt="slotProps.data.image"
            class="w-4rem shadow-2 border-round max-h-4rem"
          />
        </template>
      </Column>
      <Column field="unitPrice" header="Unit Price" :pt="ptColumn">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.price) }}
        </template>
      </Column>
      <Column field="quantity" header="Quantity" :pt="ptColumn">
        <template #body="slotProps">
          <InputNumber
            v-model="slotProps.data.quantity"
            inputId="horizontal-buttons"
            showButtons
            :step="1"
            inputClass="p-0 w-2rem text-center text-xs"
            :incrementButtonProps="{
              class: 'p-2 w-2rem',
            }"
            :decrementButtonProps="{
              class: 'p-2 w-2rem',
            }"
          >
            <template #incrementbuttonicon>
              <i class="pi pi-plus" style="font-size: 0.5rem"></i>
            </template>
            <template #decrementbuttonicon>
              <i class="pi pi-minus" style="font-size: 0.5rem"></i>
            </template>
          </InputNumber>
        </template>
      </Column>
      <Column field="price" header="Price" :pt="ptColumn">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.price) }}
        </template>
      </Column>
      <Column :exportable="false" :pt="ptColumn">
        <template #body="slotProps">
          <Button
            icon="pi pi-trash"
            outlined
            rounded
            severity="danger"
            @click="confirmDeleteProduct(slotProps.data)"
          />
        </template>
      </Column>
      <template #footer>
        <div class="flex flex-column">
          <div>
            In total there are {{ products ? products.length : 0 }} products.
          </div>
          <div class="flex justify-content-end">
            <Button
              label="Delete"
              icon="pi pi-trash"
              severity="danger"
              @click="confirmDeleteSelected"
              :disabled="!selectedProducts || !selectedProducts.length"
              class="text-sm"
            />
          </div>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script lang="ts" setup>
const toast = useToast();
const products = ref();
const product = ref();
const selectedProducts = ref();
const deleteProductDialog = ref(false);
const deleteProductsDialog = ref(false);
const dt = ref();
onMounted(() => {
  products.value = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'INSTOCK',
      rating: 4,
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'INSTOCK',
      rating: 4,
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'INSTOCK',
      rating: 4,
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'INSTOCK',
      rating: 4,
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'INSTOCK',
      rating: 4,
    },
  ];
});
const formatCurrency = (value: any) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const getSeverity = (product: any) => {
  switch (product.inventoryStatus) {
    case 'INSTOCK':
      return 'success';

    case 'LOWSTOCK':
      return 'warning';

    case 'OUTOFSTOCK':
      return 'danger';

    default:
      return undefined;
  }
};

const ptColumn = {
  headertitle: {
    class: 'text-sm',
  },
  bodycell: {
    class: 'text-xs',
  },
};
const confirmDeleteProduct = (prod: any) => {
  product.value = prod;
  deleteProductDialog.value = true;
};
const confirmDeleteSelected = () => {
  deleteProductsDialog.value = true;
};
const deleteSelectedProducts = () => {
  products.value = products.value.filter(
    (val: any) => !selectedProducts.value.includes(val)
  );
  deleteProductsDialog.value = false;
  selectedProducts.value = null;
  toast.add({
    severity: 'success',
    summary: 'Successful',
    detail: 'Products Deleted',
    life: 3000,
  });
};
const deleteProduct = () => {
  products.value = products.value.filter(
    (val: any) => val.id !== product.value.id
  );
  deleteProductDialog.value = false;
  product.value = {};
  toast.add({
    severity: 'success',
    summary: 'Successful',
    detail: 'Product Deleted',
    life: 3000,
  });
};
</script>

<style></style>
