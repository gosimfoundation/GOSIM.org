<template>
  <section id="tickets">
    <div id="events" class="px-5 md:px-10 pt-8 md:pt-16">
      <div class="max-w-[80rem] mx-auto">
        <div class="py-6 md:py-8">
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
          <div class="grid grid-cols-1 lg:grid-cols-1 gap-6 justify-center w-full max-w-[1300px] mx-auto">
            <!-- Event Card 1 -->
            <!-- <div class="bg-grey rounded-lg p-6 md:p-8">
              <div class="flex flex-col h-full">
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

                  <div class="space-y-4">
                    <EventFeatureItem text="Insights: Illuminate emerging technological paradigms" />
                    <EventFeatureItem text="Connections: Engage with the luminaries of the industry" />
                    <EventFeatureItem text="Collaborations: Forge alliances with open-source leaders" />
                    <EventFeatureItem text="Investments: Discover open-source sponsorship opportunities" />
                    <EventFeatureItem text="Participations: Immerse oneself in the vibrant community" />
                  </div>
                </div>
              </div>
            </div> -->
            <!-- Event Card 1 -->
            <div class="bg-grey rounded-lg p-6 md:p-8">
              <div class="flex flex-col h-full">
                <div>
                  <div class="mb-4 text-center">
                    <div class="inline-block px-4 py-1 bg-[#006d873b] text-primary rounded-2xl font-medium">
                      October 16-17, 2026
                    </div>
                  </div>

                  <div class="mb-6 md:mb-8">
                    <div class="text-xl md:text-2xl font-medium"> </div>
                    <div class="text-center my-2 mb-3 md:mb-6">
                      <div class="text-[3rem] font-medium leading-none">GOSIM Shenzhen 2026</div>
                    </div>
                    <p class="text-sm md:text-base leading-relaxed">
                      GOSIM Shenzhen 2026 is a premier open-source technology conference taking place on
                      October 16-17, 2026 in Shenzhen, China's fastest-moving hardware city. The event
                      brings together developers, researchers, and industry leaders to explore open-source
                      AI, robotics, edge systems, and developer infrastructure. Leveraging Shenzhen's
                      unique ecosystem—where hardware sourcing, manufacturing, and software development
                      converge—the conference enables open-source projects to rapidly transition from code
                      repositories to working prototypes.
                    </p>
                    <p class="text-sm md:text-base leading-relaxed mt-4">
                      Building on previous successful GOSIM events
                      across Paris, Shanghai, Delft, Beijing, and Hangzhou that have collectively drawn
                      thousands of attendees, GOSIM Shenzhen 2026 offers a platform for collaboration,
                      knowledge sharing, and technological breakthroughs at the intersection of software
                      and hardware innovation.
                    </p>
                  </div>

                  <div class="space-y-4">
                    <EventFeatureItem text="Insights: Explore agentic AI systems, multi-agent platforms, and edge AI
  shaping the open-source landscape" />
                    <EventFeatureItem text="Connections: Engage with global open-source pioneers and robotics innovators in
  China's premier hardware ecosystem" />
                    <EventFeatureItem text="Collaborations: Forge alliances with leading open-source foundations,
  researchers, and embodied AI communities" />
                    <EventFeatureItem text="Investments: Discover sponsorship opportunities to reach thousands of developers and technology decision-makers" />
                    <EventFeatureItem text="Participations: Immerse yourself in hands-on workshops, hackathons, and
  spotlight sessions across two dynamic days in Shenzhen" />
                  </div>
                  <div class="text-center ">
                    <a
                      href="https://shenzhen2026.gosim.org/"
                      target="_blank"
                      class="inline-flex items-center px-6 md:px-8 py-2 mt-8 md:mt-12 bg-primary hover:bg-secondary text-white rounded font-medium transition-colors duration-300 no-underline"
                    >Conference Website</a>
                  </div>

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