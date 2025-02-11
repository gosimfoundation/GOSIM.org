<template>
  <footer class="relative">
    <div class="px-5 md:px-10">
      <div class="max-w-[80rem] mx-auto">
        <div class="py-6 md:py-12">
          <!-- Top Section -->
          <div class="pb-8 md:pb-16">
            <div class="flex flex-col md:flex-row md:justify-between md:items-center space-y-8 md:space-y-0">
              <!-- Logo -->
              <a href="/#home" class="flex justify-center md:inline-block">
                <img
                    src="@/assets/images/logo.svg"
                    loading="lazy"
                    width="119"
                    alt="GOSIM Logo"
                    class="h-8 md:h-10"
                />
              </a>

              <!-- Navigation Links -->
              <div class="flex-1">
                <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                  <a href="/#about" class="text-base text-black hover:text-primary transition-colors duration-200 no-underline">About</a>
                  <a href="/#founders" class="text-base text-black hover:text-primary transition-colors duration-200 no-underline">Founders</a>
                  <a href="/#events" class="text-base text-black hover:text-primary transition-colors duration-200 no-underline">Events</a>
                  <a href="https://blog.gosim.org/" class="text-base text-black hover:text-primary transition-colors duration-200 no-underline">Blog</a>
                  <router-link to="/privacy" class="text-base text-black hover:text-primary transition-colors duration-200 no-underline">Privacy</router-link>
                </div>
              </div>

              <!-- Social Media Icons -->
              <div class="flex justify-center md:justify-end space-x-4 w-[119px]">
                <a
                    href="https://twitter.com/gosimfoundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-black hover:text-primary transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Bottom Section -->
          <div class="flex justify-center border-t border-gray-200 pt-6 md:pt-8">
            <div class="text-sm text-[#aaadb0]">© www.gosim.org</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Blurred Circle -->
    <div class="absolute w-[25vw] h-[25vh] bg-secondary opacity-60 rounded-full blur-[140px] -z-10 bottom-[5%] right-[5%]"></div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent"
};
</script>

<style scoped>
.blur-[140px] {
  filter: blur(140px);
}
</style>