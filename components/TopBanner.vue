<template>
  <div
    class="bg-bluegray-700 text-gray-100 p-1 flex justify-content-between lg:justify-content-center align-items-center flex-wrap"
  >
    <div class="font-bold mr-8">🔥 Hot Deals!</div>
    <div class="align-items-center hidden lg:flex mr-5">
      <span class="line-height-3">
        Libero voluptatum atque exercitationem praesentium provident odit.
      </span>
      <a class="flex align-items-center ml-5">
        <a class="text-white" href="#">
          <span class="underline font-bold">Learn More</span>
        </a>
      </a>
    </div>
    <a
      v-ripple
      class="flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150 p-ripple"
      style="width: 1rem; height: 1rem"
    >
      <i class="pi pi-times"></i>
    </a>
  </div>
</template>
