<template>
  <section class="py-8 px-5 md:px-10">
    <div class="max-w-[80rem] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Left Hero Section with Sticky Positioning -->
        <div class="relative lg:sticky lg:top-[80px] lg:h-[calc(100vh-160px)]">
          <div class="relative h-[40vh] md:h-[60vh] lg:h-full flex items-end p-8 rounded-lg overflow-hidden">
            <!-- Background Image -->
            <div class="absolute inset-0">
              <img
                  src="@assets/images/past-events-one.webp"
                  alt="Agenda Image"
                  class="w-full h-full object-cover rounded-lg"
                  srcset="@assets/images/past-events-two.webp 500w, @assets/images/past-events-three.webp 800w, @assets/images/past-events-four.webp 1200w"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, (max-width: 1439px) 46vw, 624px"
              />
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#016d87e6]/90 rounded-lg"></div>
            </div>

            <!-- Hero Text -->
            <div class="relative text-white max-w-sm">
              <h1 class="text-4xl md:text-5xl lg:text-[4.3rem] font-medium leading-tight">Past Events</h1>
            </div>
          </div>
        </div>

        <!-- Right Content Section -->
        <div class="space-y-4">
                     <div class="bg-grey rounded-lg p-6 md:p-8 w-full md:w-[630px] mx-auto">
            <div class="mb-6">
              <div class="text-[#333] mb-2">May 13-17, 2025</div>
              <h3 class="text-3xl mb-4">2025 GOSIM Rust Spotlight: Paris, France</h3>
              <p class="text-sm leading-relaxed mb-6">Welcome to GOSIM Rust Spotlight, the program dedicated to celebrating the brilliance and creativity of open-source projects developed with the Rust programming language.</p>
              <a href="https://spotlight.gosim.org/rust2025" target="_blank" class="inline-flex items-center px-6 md:px-8 py-2 mt-8 md:mt-12 bg-primary hover:bg-secondary text-white rounded font-medium transition-colors duration-300 no-underline">Conference Website</a>
            </div>
          </div>
           <div class="bg-grey rounded-lg p-6 md:p-8 w-full md:w-[630px] mx-auto">
            <div class="mb-6">
              <div class="text-[#333] mb-2">May 6-7, 2025</div>
              <h3 class="text-3xl mb-4">GOSIM AI 2025: Paris, France</h3>
              <p class="text-sm leading-relaxed mb-6">A confluence of minds from various spheres of the open-source domain, offering a deep dive into the world of open source AI technology trends, strategies, governance, and best practices.</p>
              <a href="https://paris2025.gosim.org/" target="_blank" class="inline-flex items-center px-6 md:px-8 py-2 mt-8 md:mt-12 bg-primary hover:bg-secondary text-white rounded font-medium transition-colors duration-300 no-underline">Conference Website</a>
            </div>
          </div>
          <div class="bg-grey rounded-lg p-6 md:p-8 w-full md:w-[630px] mx-auto">
            <div class="mb-6">
              <div class="text-[#333] mb-2">May 6-7, 2025</div>
              <h3 class="text-3xl mb-4">GOSIM AI Spotlight: Paris, France</h3>
              <p class="text-sm leading-relaxed mb-6">Welcome to GOSIM AI Spotlight, the program dedicated to celebrating the brilliance and creativity of open-source projects developed with the Rust programming language.</p>
              <a href="https://spotlight.gosim.org/ai2025" target="_blank" class="inline-flex items-center px-6 md:px-8 py-2 mt-8 md:mt-12 bg-primary hover:bg-secondary text-white rounded font-medium transition-colors duration-300 no-underline">Conference Website</a>
            </div>
          </div>
          <!-- Event Card 1 -->
          <div class="bg-grey rounded-lg p-6 md:p-8 w-full md:w-[630px] mx-auto">
            <div class="mb-6">
              <div class="text-[#333] mb-2">October 17-18, 2024</div>
              <h3 class="text-3xl mb-4">2024 GOSIM Conference & Workshop: Beijing, China</h3>
              <p class="text-sm leading-relaxed mb-6">A confluence of minds from various spheres of the open-source domain, offering a deep dive into the world of open source technology trends, strategies, governance, and best practices.</p>
              <a href="https://china2024.gosim.org/" target="_blank" class="inline-flex items-center px-6 md:px-8 py-2 mt-8 md:mt-12 bg-primary hover:bg-secondary text-white rounded font-medium transition-colors duration-300 no-underline">Conference Website</a>
            </div>
          </div>

          <!-- Event Card 2 -->
          <div class="bg-grey rounded-lg p-6 md:p-8 w-full md:w-[630px] mx-auto">
            <div class="mb-6">
              <div class="text-[#333] mb-2">May 6, 2024</div>
              <h3 class="text-3xl mb-4">2024 GOSIM Conference: Europe</h3>
              <p class="text-sm leading-relaxed mb-6">Held in Delft, GOSIM Europe 2023 is an exciting conference with 3 major tracks of focus: AI & Agents, App & Web, and Fedverse.</p>
              <a href="https://europe2024.gosim.org/" target="_blank" class="inline-flex items-center px-6 md:px-8 py-2 mt-8 md:mt-12 bg-primary hover:bg-secondary text-white rounded font-medium transition-colors duration-300 no-underline">Conference Website</a>
            </div>
          </div>

          <!-- Event Card 3 -->
          <div class="bg-grey rounded-lg p-6 md:p-8 w-full md:w-[630px] mx-auto">
            <div class="mb-6">
              <div class="text-[#333] mb-2">September 26, 2023</div>
              <h3 class="text-3xl mb-4">2023 GOSIM Conference: Shanghai, China</h3>
              <p class="text-sm leading-relaxed mb-6">With GOSIM 2023, you'll have the opportunity to network with industry experts, collaborate with fellow open source enthusiasts, and gain invaluable insights from pioneers in their respective fields.</p>
              <a href="https://conference2023.gosim.org/" target="_blank" class="inline-flex items-center px-6 md:px-8 py-2 mt-8 md:mt-12 bg-primary hover:bg-secondary text-white rounded font-medium transition-colors duration-300 no-underline">Conference Website</a>
            </div>
          </div>

          <!-- Event Card 4 -->
          <div class="bg-grey rounded-lg p-6 md:p-8 w-full md:w-[630px] mx-auto">
            <div class="mb-6">
              <div class="text-[#333] mb-2">September 23-24, 2023</div>
              <h3 class="text-3xl mb-4">2023 GOSIM Workshop: Shanghai, China</h3>
              <p class="text-sm leading-relaxed mb-6">The essence of the GOSIM workshop revolves around championing and enhancing open-source contributions and utilization. 5 developer-focused Tracks. Join 30+ global open source leaders and 700 Developers.</p>
              <a href="https://workshop2023.gosim.org/" target="_blank" class="inline-flex items-center px-6 md:px-8 py-2 mt-8 md:mt-12 bg-primary hover:bg-secondary text-white rounded font-medium transition-colors duration-300 no-underline">Workshop Website</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EventsPast'
}
</script>