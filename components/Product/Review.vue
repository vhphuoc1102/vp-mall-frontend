<template>
  <div>
    <div class="flex flex-column gap-1">
      <div>
        <Card
          class="w-full shadow-none border-1 border-300"
          :pt="{
            content: {
              class: 'p-0',
            },
            body: {
              class: 'pb-0',
            },
          }"
        >
          <template #header>
            <div class="flex flex-wrap gap-3 px-3 pt-3">
              <Avatar
                icon="pi pi-user"
                style="background-color: #9c27b0; color: #ffffff"
                size="large"
                shape="circle"
              />
              <div class="flex flex-column gap-1">
                <div class="text-sm font-bold">Advanced Card</div>
                <div>
                  <Rating :modelValue="3" readonly :cancel="false" />
                </div>
                <div class="mt-1 flex flex-wrap gap-2 text-xs">
                  <div>12:00:00 27-11-2023</div>
                  <div>|</div>
                  <div>Black - 24GB</div>
                </div>
              </div>
            </div>
          </template>
          <template #content>
            <div class="flex flex-wrap gap-2 pb-2">
              <Image
                src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg"
                alt="Image"
                imageClass="w-4rem h-4rem "
                preview
              />
              <Image
                src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg"
                alt="Image"
                imageClass="w-4rem h-4rem"
                preview
              />
            </div>
            <div class="m-0 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </div>
          </template>
          <template #footer>
            <div class="flex gap-2 pb-3">
              <i class="pi pi-thumbs-up" style="font-size: 1rem"></i>
              <div>17</div>
            </div>
          </template>
        </Card>
      </div>
      <div class="flex justify-content-end">
        <Card
          class="w-full shadow-none border-1 border-300 w-9 align-content-end surface-100"
          :pt="{
            content: {
              class: 'p-0',
            },
            body: {
              class: 'pb-0',
            },
          }"
        >
          <template #header>
            <div class="flex flex-wrap gap-3 px-3 pt-3">
              <Avatar
                icon="pi pi-user"
                style="background-color: #10b981; color: #ffffff"
                shape="circle"
              />
              <div class="flex flex-column gap-1">
                <div class="text-sm font-bold">Admin</div>
                <div class="mt-1 flex flex-wrap gap-2 text-xs">
                  <div>12:00:00 27-11-2023</div>
                </div>
              </div>
            </div>
          </template>
          <template #content>
            <div class="m-0 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </div>
          </template>
          <template #footer></template>
        </Card>
      </div>
    </div>
  </div>
</template>
