<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-white px-5">
    <div class="max-w-3xl text-center">
      <h1 class="mb-6 font-clashdisplay text-6xl font-medium tracking-tight text-black">404</h1>
      <h2 class="mb-8 font-clashdisplay text-3xl font-medium tracking-tight text-black">Page Not Found</h2>
      <p class="mb-10 text-lg text-gray-600">The page you're looking for may have moved, been deleted, or never existed.</p>
      <router-link
          to="/"
          class="inline-flex items-center rounded-lg bg-[#006d87] px-8 py-3 text-base font-medium text-white transition-colors hover:bg-[#84e6f8] hover:text-black"
      >
        Back to Homepage
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>