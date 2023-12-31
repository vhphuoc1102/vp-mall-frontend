<template>
  <div class="card">
    <Galleria
      :value="images"
      :responsiveOptions="responsiveOptions"
      :numVisible="100"
      :circular="true"
      :pt="{
        root: {
          // class: 'w-30rem',
          style: 'width: 30rem',
        },
        previousthumbnailbutton: {
          class: 'absolute z-1',
        },
        nextthumbnailbutton: {
          class: 'absolute z-1 right-0',
        },
        thumbnailcontainer: {
          class: 'relative py-1 px-0',
          style: 'background-color: transparent',
        },
        thumbnailitem: {
          class: 'opacity-100 ',
        },
        itemwrapper: {
          style: 'cursor: zoom-in',
        },
      }"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="width: 100%; display: block"
          class="border-round-sm"
        />
      </template>
      <template #thumbnail="slotProps">
        <img
          :src="slotProps.item.thumbnailImageSrc"
          :alt="slotProps.item.alt"
          class="w-7rem max-h-7rem border-round-sm border-3 border-transparent hover:border-green-400"
          style="display: block"
        />
      </template>
    </Galleria>
  </div>
</template>

<script setup>
onMounted(() => {
  images.value = [
    {
      itemImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg",
      thumbnailImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
    {
      itemImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg",
      thumbnailImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg",
      alt: "Description for Image 2",
      title: "Title 2",
    },
    {
      itemImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria3.jpg",
      thumbnailImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria3s.jpg",
      alt: "Description for Image 3",
      title: "Title 3",
    },
    {
      itemImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria4.jpg",
      thumbnailImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria4s.jpg",
      alt: "Description for Image 4",
      title: "Title 4",
    },
    {
      itemImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria5.jpg",
      thumbnailImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria5s.jpg",
      alt: "Description for Image 5",
      title: "Title 5",
    },
    {
      itemImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria6.jpg",
      thumbnailImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria6s.jpg",
      alt: "Description for Image 6",
      title: "Title 6",
    },
    {
      itemImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria7.jpg",
      thumbnailImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria7s.jpg",
      alt: "Description for Image 7",
      title: "Title 7",
    },
    {
      itemImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria8.jpg",
      thumbnailImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria8s.jpg",
      alt: "Description for Image 8",
      title: "Title 8",
    },
    {
      itemImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria9.jpg",
      thumbnailImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria9s.jpg",
      alt: "Description for Image 9",
      title: "Title 9",
    },
    {
      itemImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg",
      thumbnailImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria10s.jpg",
      alt: "Description for Image 10",
      title: "Title 10",
    },
    {
      itemImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria11.jpg",
      thumbnailImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria11s.jpg",
      alt: "Description for Image 11",
      title: "Title 11",
    },
    {
      itemImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria12.jpg",
      thumbnailImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria12s.jpg",
      alt: "Description for Image 12",
      title: "Title 12",
    },
    {
      itemImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria13.jpg",
      thumbnailImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria13s.jpg",
      alt: "Description for Image 13",
      title: "Title 13",
    },
    {
      itemImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria14.jpg",
      thumbnailImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria14s.jpg",
      alt: "Description for Image 14",
      title: "Title 14",
    },
    {
      itemImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria15.jpg",
      thumbnailImageSrc:
        "https://primefaces.org/cdn/primevue/images/galleria/galleria15s.jpg",
      alt: "Description for Image 15",
      title: "Title 15",
    },
  ];
});

const images = ref();
const responsiveOptions = ref([
  {
    breakpoint: "1300px",
    numVisible: 4,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
  },
]);
</script>
<style scoped></style>
