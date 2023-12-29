<template>
  <div class="card">
    <Menubar :model="items" class="border-noround pr-3 pl-3">
      <template #start>
        <Image class="cursor-pointer" src="/logo.svg" alt="Image" width="60" />
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <a
          v-ripple
          :class="['flex align-items-center', { 'pt-2 pb-2': !root }]"
          v-bind="props.action"
        >
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
          <i
            v-if="hasSubmenu"
            :class="[
              'pi pi-angle-down text-primary',
              { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root },
            ]"
          ></i>
        </a>
      </template>
      <template #end>
        <div class="flex flex-wrap align-items-center gap-6">
          <div class="flex align-items-center gap-2">
            <span class="p-input-icon-left">
              <i class="pi pi-search cursor-pointer" />
              <InputText
                placeholder="Search"
                type="text"
                class="w-8rem sm:w-auto"
            /></span>
          </div>
          <div class="flex flex-wrap align-items-center gap-2">
            <Button
              icon="pi pi-shopping-cart"
              outlined
              label="Cart"
              aria-label="Cart"
              badge="2"
              badgeSeverity="danger"
              plain
            />
            <router-link to="/auth/signin">
              <Button
                type="button"
                icon="pi pi-user"
                outlined
                label="Sign in"
                aria-label="Sign in"
                plain
              />
            </router-link>
          </div>
        </div>
      </template>
    </Menubar>
  </div>
</template>
<script setup>
const items = ref([
  {
    label: "Categories",
    icon: "pi pi-list",
  },
  {
    label: "Brands",
    icon: "pi pi-microsoft",
    items: [
      {
        label: "Core",
        icon: "pi pi-bolt",
      },
      {
        separator: true,
      },
      {
        label: "Blocks",
        icon: "pi pi-server",
      },
      {
        separator: true,
      },
      {
        label: "UI Kit",
        icon: "pi pi-pencil",
      },
      {
        separator: true,
      },
      {
        label: "Templates",
        icon: "pi pi-palette",
        items: [
          {
            label: "Apollo",
            icon: "pi pi-palette",
          },
          {
            label: "Ultima",
            icon: "pi pi-palette",
          },
        ],
      },
    ],
  },
]);
</script>
