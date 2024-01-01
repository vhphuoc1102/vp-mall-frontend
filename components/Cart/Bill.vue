<template>
  <div class="pr-4 py-4 flex flex-column">
    <div>
      <h2 class="mt-0">Cart</h2>
    </div>
    <div class="mb-4">
      <CartItemList />
    </div>
    <div class="flex flex-wrap gap-3 mb-2">
      <span class="p-float-label flex flex-column gap-2 flex-grow-1">
        <InputText id="coupon" size="small" />
        <label for="coupon" class="text-sm">Coupon</label>
      </span>
      <Button label="Enter coupon" size="small" class="text-sm" />
      <Button
        label="Voucher"
        icon="pi pi-ticket"
        outlined
        size="small"
        class="text-sm"
      />
    </div>
    <div class="flex flex-wrap gap-2">
      <Tag rounded>
        <div class="flex align-items-center gap-2">
          <span class="text-xs">AK47</span>
          <i class="pi pi-times text-xs"></i>
        </div>
      </Tag>
      <Tag rounded>
        <div class="flex align-items-center gap-2">
          <span class="text-xs">AK47</span>
          <i class="pi pi-times text-xs"></i>
        </div>
      </Tag>
    </div>
    <CommonDivider class="my-3" />
    <div class="flex flex-column gap-2 text-sm">
      <div class="flex justify-content-between">
        <div>Total merchandise amount</div>
        <div>100000đ</div>
      </div>
      <div class="flex justify-content-between">
        <div>Total shipping fee</div>
        <div>100000đ</div>
      </div>
      <div class="flex justify-content-between">
        <div>Shipping fee discount</div>
        <div>100000đ</div>
      </div>
      <div class="flex justify-content-between">
        <div>Total discount vouchers</div>
        <div>100000đ</div>
      </div>
      <CommonDivider />
      <div class="flex justify-content-between text-base font-bold">
        <div>Total payment</div>
        <div>100000đ</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
