<template>
  <div class="grid" style="grid-row-gap: 0.4rem">
    <div class="col-6">
      <h2 class="m-0">Freight</h2>
    </div>
    <div class="col-6 flex justify-content-end align-items-center">
      <a class="text-xs">
        <i class="pi pi-book text-blue-500"></i>
        Select address
      </a>
    </div>
    <div class="col-6">
      <span class="p-float-label flex flex-column gap-2">
        <InputText id="name" size="small" class="w-full" />
        <label for="name" class="text-sm">Name</label>
      </span>
    </div>
    <div class="col-6">
      <span class="p-float-label">
        <InputText id="phone" size="small" class="w-full" />
        <label for="phone" class="text-sm">Phone</label>
      </span>
    </div>
    <div class="col-12">
      <span class="p-float-label">
        <InputText id="email" size="small" class="w-full" />
        <label for="email" class="text-sm">Email</label>
      </span>
    </div>
    <div class="col-4">
      <Dropdown
        v-model="selectedCountry"
        :options="countries"
        filter
        optionLabel="name"
        placeholder="Province / City"
        class="w-full"
        :pt="{
          panel: {
            class: 'min-w-min max-w-13rem',
          },
          wrapper: {
            class: 'text-sm',
          },
        }"
      >
        <template #value="slotProps">
          <div class="text-sm">
            <div v-if="slotProps.value" class="flex align-items-center">
              <div>{{ slotProps.value.name }}</div>
            </div>
            <span v-else>
              {{ slotProps.placeholder }}
            </span>
          </div>
        </template>
        <template #option="slotProps">
          <div class="flex align-items-center">
            <div>{{ slotProps.option.name }}</div>
          </div>
        </template>
      </Dropdown>
    </div>
    <div class="col-4">
      <Dropdown
        v-model="selectedCountry"
        :options="countries"
        filter
        optionLabel="name"
        placeholder="District"
        class="w-full"
        :pt="{
          panel: {
            class: 'min-w-min max-w-13rem',
          },
          wrapper: {
            class: 'text-sm',
          },
        }"
      >
        <template #value="slotProps">
          <div class="text-sm">
            <div v-if="slotProps.value" class="flex align-items-center">
              <div>{{ slotProps.value.name }}</div>
            </div>
            <span v-else>
              {{ slotProps.placeholder }}
            </span>
          </div>
        </template>
        <template #option="slotProps">
          <div class="flex align-items-center">
            <div>{{ slotProps.option.name }}</div>
          </div>
        </template>
      </Dropdown>
    </div>
    <div class="col-4">
      <Dropdown
        v-model="selectedCountry"
        :options="countries"
        filter
        optionLabel="name"
        placeholder="Ward"
        class="w-full"
        :pt="{
          panel: {
            class: 'min-w-min max-w-13rem',
          },
          wrapper: {
            class: 'text-sm',
          },
        }"
      >
        <template #value="slotProps">
          <div class="text-sm">
            <div v-if="slotProps.value" class="flex align-items-center">
              <div>{{ slotProps.value.name }}</div>
            </div>
            <span v-else>
              {{ slotProps.placeholder }}
            </span>
          </div>
        </template>
        <template #option="slotProps">
          <div class="flex align-items-center">
            <div>{{ slotProps.option.name }}</div>
          </div>
        </template>
      </Dropdown>
    </div>
    <div class="col-12">
      <span class="p-float-label flex flex-column gap-2">
        <InputText id="address" size="small" class="w-full" />
        <label for="address" class="text-sm">Detailed address</label>
      </span>
    </div>
    <div class="col-12">
      <span class="p-float-label flex flex-column gap-2">
        <Textarea rows="2" class="w-full" id="note" />
        <label for="note" class="text-sm">Note</label>
      </span>
    </div>
    <div class="col-12">
      <div class="flex align-items-center">
        <Checkbox
          v-model="isSaved"
          inputId="isSaved"
          name="isSaved"
          value="isSaved"
        />
        <label for="isSaved" class="ml-2 text-sm"> Save to address book </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const selectedCountry = ref();
const countries = ref([
  { name: 'Australia', code: 'AU' },
  { name: 'Brazil', code: 'BR' },
  { name: 'China', code: 'CN' },
  { name: 'Egypt', code: 'EG' },
  { name: 'France', code: 'FR' },
  { name: 'Germany', code: 'DE' },
  { name: 'India', code: 'IN' },
  { name: 'Japan', code: 'JP' },
  { name: 'Spain', code: 'ES' },
  { name: 'United States', code: 'US' },
]);
const isSaved = ref();
</script>
