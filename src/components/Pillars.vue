<template>
  <section id="location" class="relative">
    <div id="mission" class="px-5 md:px-10">
      <div class="max-w-[80rem] mx-auto">
        <div class="py-6 md:py-8 pt-0">
          <div class="grid md:grid-cols-2 gap-8 md:gap-20">
            <!-- Content Side -->
            <div class="mt-8 md:mt-16 order-2 md:order-1">
              <div class="mb-4">
                <h2 class="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] leading-[1.1] font-medium">
                  Three Pillars of GOSIM
                </h2>
              </div>
              <div class="mb-6 md:mb-8">
                <div class="text-base md:text-lg space-y-6 md:space-y-8">
                  <div>
                    <span class="font-bold">1. GOSIM Conference:</span> Held annually, this conference is a confluence of minds from various spheres of the open-source domain. Whether you're a strategist, an architect, a researcher, or simply an enthusiast, the GOSIM Conference offers a deep dive into the world of open source technology trends, strategies, governance, and best practices.
                  </div>

                  <div>
                    <span class="font-bold">2. GOSIM Workshop:</span> This is where the rubber meets the road. Also an annual event, the GOSIM Workshop is all about action – open-source project design, code development, hackathons, competitions, and discussions. It's tailor-made for project leaders, developers, and maintainers who wish to actively shape the future of open-source.
                  </div>

                  <div>
                    <span class="font-bold">3. GOSIM Spotlight:</span> Beyond the annual gatherings, the heart of GOSIM beats year-round through its Spotlight program. It's an ongoing initiative supporting open-source project development, generously backed by sponsorship and grants.
                  </div>

                  <div>
                    <div class="font-bold mb-2">A Call to Embrace the Open Source Revolution</div>
                    In the digital age, where barriers are constantly being broken and horizons expanded, GOSIM stands as a beacon for all open-source enthusiasts. It's more than just a meetup; it's a revolution. By fostering global collaboration, diversifying the tech ecosystem, and sharing unparalleled knowledge, GOSIM is not just shaping the present of open source; it's forging its future. For those who believe in the power of open source, in its potential to redefine the contours of technology, GOSIM beckons. Join the movement. Be a part of the open-source revolution.
                  </div>
                </div>
              </div>
            </div>

            <!-- Image Side -->
            <div class="lg:mt-20 h-[300px] md:h-auto order-1 md:order-2">
              <img
                  src="@assets/images/nasa.jpg"
                  loading="lazy"
                  alt="NASA"
                  class="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Blurred Circle -->
    <div class="absolute w-[40vw] h-[40vh] md:w-[40vw] md:h-[40vh] bg-secondary opacity-60 rounded-full blur-[140px] -z-10 -bottom-[10%] -left-[10%] md:bottom-[-20%] md:left-[-19%]"></div>
  </section>
</template>

<script>
export default {
  name: "Pillars"
};
</script>

<style scoped>
.blur-[140px] {
  filter: blur(140px);
}
</style>