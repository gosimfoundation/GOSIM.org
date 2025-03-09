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
              <div class="flex justify-center md:justify-end space-x-4 w-[160px]">
                <a
                  href="https://www.linkedin.com/company/gosim-foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-black hover:text-primary transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                  </svg>
                </a>
                <a
                  href="https://mastodon.social/@gosim"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-black hover:text-primary transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/>
                  </svg>
                </a>

                <a
                  href="https://x.com/gosimfoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-black hover:text-primary transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@gosimfoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-black hover:text-primary transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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