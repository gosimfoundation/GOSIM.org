<template>
  <header class="relative min-h-screen">
    <div class="px-5 md:px-10 pt-16 md:pt-[72px]" id="home">
      <div class="max-w-[80rem] mx-auto">
        <div class="py-4 md:py-6">
          <!-- Header Component -->
          <div class="flex flex-col items-center">
            <div class="my-8 md:my-24">
              <div class="text-center">
                <div class="max-w-3xl mx-auto">
                  <!-- Subheading -->
                  <div class="mb-2">
                    <div class="text-primary text-base md:text-lg font-medium">GOSIM</div>
                  </div>
                  <!-- Main Title -->
                  <div class="mb-4 leading-[1.1]">
                    <h1 class="text-[2.5rem] sm:text-[3.5rem] md:text-[5.2rem] font-medium">
                      <span class="text-primary">G</span>lobal
                      <span class="text-primary">O</span>pen-
                      <span class="text-primary">S</span>ource
                      <span class="text-primary">I</span>nnovation
                      <span class="text-primary">M</span>eetup
                    </h1>
                  </div>
                  <!-- Info Wrapper -->
                  <div class="text-center my-2">
                    <h3 class="text-base md:text-lg font-normal">
                      Created by the Open-Source Community, For the Open-Source Community.
                    </h3>
                  </div>
                  <!-- Button -->
                  <div class="mt-8 md:mt-10">
                    <a
                        href="#events"
                        class="inline-block px-6 md:px-8 py-3 bg-primary hover:bg-secondary text-white rounded font-medium transition-colors duration-300 no-underline"
                    >
                      Upcoming Events
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- About Section -->
          <div id="about" class="grid md:grid-cols-2 gap-6 md:gap-8">
            <!-- Left Content -->
            <div class="bg-grey rounded-lg p-6 md:p-12">
              <h2 class="text-2xl md:text-3xl font-medium">
                <strong>A Global Nexus for Open Source Innovation</strong>
              </h2>
              <div class="mt-4">
                <p class="text-base md:text-lg">
                  The global tech landscape is replete with innovations, and much of its foundation is built upon the ethos of open source collaboration. At the forefront of championing this collaboration stands GOSIM, a platform dedicated to nurturing the brightest grassroots open-source projects from their inception to maturity.
                  <br /><br />
                  GOSIM emerged from the shared vision of a global open-source community. Organized by and for the community, this entirely volunteer-based endeavor has one prime objective: to provide a stage where innovative open-source projects can shine, collaborate, and evolve. It's not just a platform; it's a movement. One that wholeheartedly embraces an open, diverse, and inclusive culture. If a project is global, innovative, grass roots ,and open-source, it has found its home at GOSIM.
                </p>
              </div>

              <!-- Highlights -->
              <div class="mt-6 md:mt-8">
                <div class="space-y-4">
                  <div class="flex items-start gap-2">
                    <img
                        src="@assets/images/checkmark.svg"
                        loading="lazy"
                        alt=""
                        class="w-5 h-5 mt-1"
                    />
                    <p class="text-base md:text-lg">Organized by and created for the open-source community.</p>
                  </div>
                  <div class="flex items-start gap-2">
                    <img
                        src="@assets/images/checkmark.svg"
                        loading="lazy"
                        alt=""
                        class="w-5 h-5 mt-1"
                    />
                    <p class="text-base md:text-lg">Subscribes to an open, diverse, and inclusive culture.</p>
                  </div>
                  <div class="flex items-start gap-2">
                    <img
                        src="@assets/images/checkmark.svg"
                        loading="lazy"
                        alt=""
                        class="w-5 h-5 mt-1"
                    />
                    <p class="text-base md:text-lg">Volunteer based.</p>
                  </div>
                </div>
              </div>

              <a
                  href="#mission"
                  class="inline-flex items-center px-6 md:px-8 py-3 mt-8 md:mt-12 bg-primary hover:bg-secondary text-white rounded font-medium transition-colors duration-300 no-underline"
              >
                The Three Pillars of GOSIM
              </a>
            </div>

            <!-- Right Content -->
            <div
                class="bg-[url('@/assets/images/hero-img.jpg')] bg-cover bg-center rounded-lg h-[300px] md:h-full">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Blurred Circle -->
    <div class="absolute top-[14%] right-[4%] w-[50vw] max-w-[40rem] h-[50vh] max-h-[40rem] bg-secondary opacity-60 rounded-full blur-[140px] -z-10"></div>
  </header>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<style scoped>
.blur-[140px] {
  filter: blur(140px);
}
</style>