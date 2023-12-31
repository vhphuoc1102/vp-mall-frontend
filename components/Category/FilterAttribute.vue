<template>
  <div>
    <Toast />
    <ConfirmPopup
      :pt="{
        footer: {
          class: ['flex justify-content-center flex-wrap gap-1 py-1 text-xs'],
        },
      }"
      group="templating"
    >
      <template #message="slotProps">
        <div
          class="flex align-items-center w-full gap-3 border-bottom-1 surface-border p-2"
        >
          <p>{{ slotProps.message.message }}</p>
        </div>
      </template>
    </ConfirmPopup>
    <Button
      @click="showTemplate($event)"
      icon="pi pi-angle-down"
      label="Brand"
      iconPos="right"
      class="attribute text-sm px-2 text-900 border-400"
      outlined
    ></Button>
  </div>
</template>
<style scoped>
.attribute ::v-deep(.p-button-label) {
  font-weight: 500 !important;
}
</style>
<script setup>
const confirm = useConfirm();
const toast = useToast();
const showTemplate = (event) => {
  confirm.require({
    target: event.currentTarget,
    group: "templating",
    message: "Please confirm to proceed moving forward.",
    icon: "pi pi-exclamation-circle",
    acceptIcon: "pi pi-check",
    rejectIcon: "pi pi-times",
    rejectClass: "p-button-sm p-button-outlined ",
    acceptClass: "p-button-sm",
    rejectLabel: "Cancel",
    position: "right",
    accept: () => {
      toast.add({
        severity: "info",
        summary: "Confirmed",
        detail: "You have accepted",
        life: 3000,
      });
    },
    reject: () => {
      toast.add({
        severity: "error",
        summary: "Rejected",
        detail: "You have rejected",
        life: 3000,
      });
    },
  });
};
</script>
