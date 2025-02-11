<template>
  <nav class="fixed w-full h-16 md:h-[4.5rem] bg-white flex items-center z-50 px-5 md:px-8">
    <div class="w-full max-w-[80rem] mx-auto flex items-center justify-between">
      <!-- Logo -->
      <a
          href="/#home"
          class="flex items-center h-14 px-4 md:px-10 shrink-0"
      >
        <img
            src="@assets/images/logo.svg"
            loading="lazy"
            alt="GOSIM Logo"
            class="h-8 w-auto"
        />
      </a>

      <!-- Mobile Menu Button -->
      <button
          class="md:hidden relative z-50 p-2 -mr-2"
          @click="toggleMenu"
          aria-label="Toggle Menu"
      >
        <div class="flex flex-col justify-center items-center w-12 h-12">
          <span :class="[
            'w-6 h-0.5 bg-black transition-all duration-300 ease-out',
            isMenuOpen ? 'rotate-45 translate-y-2' : 'mb-1.5'
          ]"></span>
          <span :class="[
            'w-6 h-0.5 bg-black transition-all duration-300 ease-out mb-1.5',
            isMenuOpen ? 'opacity-0' : ''
          ]"></span>
          <span :class="[
            'w-6 h-0.5 bg-black transition-all duration-300 ease-out',
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          ]"></span>
        </div>
      </button>

      <!-- Navigation Menu -->
      <div :class="[
        'fixed md:relative top-0 left-0 w-full md:w-auto h-screen md:h-auto',
        'md:flex md:items-center transition-transform duration-300 ease-out bg-white md:bg-transparent',
        'transform md:transform-none',
        isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0',
        'z-40 md:z-auto pt-20 md:pt-0'
      ]">
        <div class="flex flex-col md:flex-row md:items-center px-5 md:px-0 space-y-4 md:space-y-0 md:space-x-10">
          <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              @click="closeMenu"
              class="text-base text-center md:text-left text-black hover:text-primary transition-colors duration-200 no-underline py-2"
          >
            {{ link.text }}
          </a>

          <!-- Mobile CTAs -->
          <div class="md:hidden pt-4">
            <a
                href="/#events"
                @click="closeMenu"
                class="block w-full text-center bg-primary hover:bg-secondary text-white rounded-lg py-3 px-6 font-medium transition-colors duration-300 no-underline"
            >
              Get ticket now
            </a>
          </div>
        </div>
      </div>

      <!-- Desktop CTA -->
      <a
          href="/#events"
          class="hidden md:inline-flex px-8 py-3 bg-primary hover:bg-secondary text-white font-medium rounded-lg transition-colors duration-300 no-underline"
      >
        Upcoming Events
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isMenuOpen: false,
      navLinks: [
        { href: "/#about", text: "About" },
        { href: "/#founders", text: "Founders" },
        { href: "/#events", text: "Events" },
        { href: "https://blog.gosim.org/", text: "Blog" },
        // { href: "https://spotlight.gosim.org/", text: "Spotlight" }
      ]
    }
  },
  mounted() {
    document.body.addEventListener('click', this.handleClickOutside)
  },
  beforeDestroy() {
    document.body.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : ''
    },
    closeMenu() {
      this.isMenuOpen = false
      document.body.style.overflow = ''
    },
    handleClickOutside(event) {
      const isOutside = !event.target.closest('nav')
      if (this.isMenuOpen && isOutside) {
        this.closeMenu()
      }
    }
  }
}
</script>