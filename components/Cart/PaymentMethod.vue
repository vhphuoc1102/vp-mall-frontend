<template>
  <div>
    <div class="grid">
      <div class="col-12">
        <h2 class="m-0">Payment method</h2>
      </div>
      <div class="col-12 w-full">
        <div class="flex flex-column flex-wrap gap-3">
          <div class="flex align-items-center">
            <RadioButton
              v-model="method"
              inputId="method1"
              name="method"
              value="COD"
            />
            <label for="method1" class="ml-2 text-sm">COD</label>
          </div>
          <div class="flex align-items-center">
            <RadioButton
              v-model="method"
              inputId="method2"
              name="method"
              value="Momo"
            />
            <label for="method2" class="ml-2 text-sm">Momo</label>
          </div>
          <div class="flex align-items-center">
            <RadioButton
              v-model="method"
              inputId="method3"
              name="method"
              value="ZaloPay"
            />
            <label for="method3" class="ml-2 text-sm">ZaloPay</label>
          </div>
          <div class="flex align-items-center">
            <RadioButton
              v-model="method"
              inputId="method4"
              name="method"
              value="ShoppeePay"
            />
            <label for="method4" class="ml-2 text-sm">ShoppeePay</label>
          </div>
          <div class="flex align-items-center">
            <RadioButton
              v-model="method"
              inputId="method5"
              name="method"
              value="VNPay"
            />
            <label for="method5" class="ml-2 text-sm">VNPay</label>
          </div>
          <div class="flex align-items-center">
            <RadioButton
              v-model="method"
              inputId="method6"
              name="method"
              value="QRCode"
            ></RadioButton>
            <label for="method6" class="ml-2 text-sm">QRCode</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const method = ref('');
</script>

<style></style>
