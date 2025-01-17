<template>
  <footer class="relative">
    <div class="px-5 md:px-10">
      <div class="max-w-[80rem] mx-auto">
        <div class="py-12 md:py-20">
          <!-- Top Section -->
          <div class="pb-8 md:pb-16">
            <div class="flex flex-col md:flex-row md:justify-between md:items-center space-y-8 md:space-y-0">
              <!-- Logo -->
              <a href="#" class="flex justify-center md:inline-block">
                <img
                    src="@assets/images/logo.svg"
                    loading="lazy"
                    width="119"
                    alt="GOSIM Logo"
                    class="h-8 md:h-10"
                />
              </a>

              <!-- Navigation Links -->
              <div class="flex-1">
                <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                  <a href="#about" class="text-base text-black hover:text-primary transition-colors duration-200 no-underline">About</a>
                  <a href="#founders" class="text-base text-black hover:text-primary transition-colors duration-200 no-underline">Founders</a>
                  <a href="#tickets" class="text-base text-black hover:text-primary transition-colors duration-200 no-underline">Events</a>
                </div>
              </div>

              <!-- Empty div for flex spacing - hidden on mobile -->
              <div class="hidden md:block w-[119px]"></div>
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