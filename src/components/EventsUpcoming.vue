<template>
  <section id="tickets">
    <div id="events" class="px-5 md:px-10 pt-8 md:pt-16">
      <div class="max-w-[80rem] mx-auto">
        <div class="py-12 md:py-24">
          <!-- Header -->
          <div class="mb-8 md:mb-12">
            <div class="text-center">
              <div class="max-w-3xl mx-auto flex flex-col items-center">
                <div class="mb-4">
                  <h2 class="text-[2.5rem] md:text-[3.5rem] leading-[1.1]">Upcoming Events</h2>
                </div>
                <p class="text-base md:text-lg">
                  Come explore the world of open-source innovations with us!
                </p>
              </div>
            </div>
          </div>

          <!-- Events Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center w-full max-w-[1300px] mx-auto">
            <!-- Event Card 1 -->
            <div class="bg-grey rounded-lg p-6 md:p-8">
              <div class="flex flex-col h-full">
                <!-- Top Content -->
                <div>
                  <div class="mb-4">
                    <div class="inline-block px-4 py-1 bg-[#006d873b] text-primary rounded-2xl text-sm font-medium">
                      Coming in September, 2025
                    </div>
                  </div>

                  <div class="mb-6 md:mb-8">
                    <div class="text-xl md:text-2xl font-medium">2025 GOSIM CHINA Beijing</div>
                    <div class="my-2">
                      <div class="text-[3rem] font-medium leading-none">Conference + Workshop</div>
                    </div>
                    <p class="text-sm md:text-base leading-relaxed">
                      GOSIM Conference is for Users, Engineers, Strategists, Business Executives,
                      Architects and Open-Source Experts. With 2025 GOSIM China, you'll have
                      the opportunity to network with industry experts, collaborate with
                      fellow open source enthusiasts, and gain invaluable insights from pioneers
                      in their respective fields. Our conference is driven by volunteers who share
                      a passion for open source and believe in its potential to shape a better future.
                    </p>
                  </div>

                  <!-- Features List -->
                  <div class="space-y-4">
                    <EventFeatureItem text="Insights: Illuminate emerging technological paradigms" />
                    <EventFeatureItem text="Connections: Engage with the luminaries of the industry" />
                    <EventFeatureItem text="Collaborations: Forge alliances with open-source leaders" />
                    <EventFeatureItem text="Investments: Discover open-source sponsorship opportunities" />
                    <EventFeatureItem text="Participations: Immerse oneself in the vibrant community" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Event Card 2 - RustWeek -->
            <div class="bg-grey rounded-lg p-6 md:p-8">
              <div class="flex flex-col h-full">
                <div>
                  <div class="mb-4">
                    <div class="inline-block px-4 py-1 bg-[#006d873b] text-primary rounded-2xl text-sm font-medium">
                      RustWeek 2025
                    </div>
                  </div>

                  <div class="mb-6 md:mb-8">
                    <div class="text-xl md:text-2xl font-medium">2025 GOSIM Spotlight</div>
                    <div class="my-2">
                      <div class="text-[3rem] font-medium leading-none">Showcasing Exceptional Rust Open-Source Projects</div>
                    </div>
                    <p class="text-sm md:text-base leading-relaxed">
                      Welcome to GOSIM Spotlight, the program dedicated to celebrating the
                      brilliance and creativity of open-source projects developed with the Rust
                      programming language. At GOSIM, we believe in empowering innovators and
                      amplifying the voices of up-and-coming developers and under-represented
                      projects. With the GOSIM Spotlight program, we aim to put these projects in
                      the spotlight they deserve. Are you ready to discover the future of Rust
                      development?
                    </p>
                  </div>

                  <!-- More Information Button -->
                  <a
                      href="https://spotlight.gosim.org/"
                      target="_blank"
                      class="inline-flex items-center px-6 md:px-8 py-2 mt-8 md:mt-12 bg-primary hover:bg-secondary text-white rounded font-medium transition-colors duration-300 no-underline"
                  >
                    More Information
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EventFeatureItem from "./EventFeatureItem.vue";

export default {
  name: "EventsUpcoming",
  components: {
    EventFeatureItem,
  },
};
</script>