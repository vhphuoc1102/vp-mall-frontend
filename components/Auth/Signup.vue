<template>
  <div class="flex justify-content-center flex-wrap py-3">
    <div class="surface-card py-4 px-4 shadow-2 border-round lg:w-6">
      <div class="text-center mb-2">
        <Image src="/logo.svg" alt="Image" imageClass="h-3rem mb-2" />
        <div class="text-900 text-xl font-medium mb-2">Create an account</div>
        <span class="text-600 font-medium line-height-3">
          Already have an account?
        </span>
        <nuxt-link
          to="/auth/signin"
          class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
        >
          Sign in
        </nuxt-link>
      </div>

      <div>
        <label for="email1" class="block text-900 font-medium mb-2"
          >Email</label
        >
        <InputText id="email1" type="text" class="w-full mb-3" />

        <label for="password1" class="block text-900 font-medium mb-2"
          >Enter your password</label
        >
        <InputText id="password1" type="password" class="w-full mb-3" />
        <label for="password1" class="block text-900 font-medium mb-2"
          >Re-enter your password</label
        >
        <InputText id="password1" type="password" class="w-full mb-3" />

        <Button
          label="Create account"
          icon="pi pi-user"
          class="w-full"
        ></Button>
        <Divider class="m-2 md:flex" type="solid"
          ><b class="text-xs text-600">OR</b></Divider
        >
        <div class="flex flex-wrap align-items-center gap-2">
          <Button
            label="Sign up with Facebook "
            icon="pi pi-facebook"
            class="flex-grow-1"
            outlined
          ></Button>
          <Button
            label="Sign up with Google"
            icon="pi pi-google"
            class="flex-grow-1"
            outlined
          ></Button>
        </div>
      </div>
    </div>
  </div>
</template>
