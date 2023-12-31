<template>
  <div class="w-full">
    <h3>Product Specification</h3>
    <ul class="striped-list text-sm">
      <li>Apples</li>
      <li>Oranges</li>
      <li>Bananas</li>
      <li>Pears</li>
      <li>Plums</li>
    </ul>
  </div>
</template>
<style scoped>
ul.striped-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
}
ul.striped-list > li {
  border-bottom: 1px solid rgb(221, 221, 221);
  padding: 6px;
}
ul.striped-list > li:nth-of-type(odd) {
  background-color: #e9e9f9;
}
ul.striped-list > li:last-child {
  border-bottom: none;
}
</style>
