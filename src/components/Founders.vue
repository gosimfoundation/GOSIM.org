<template>
  <section>
    <div class="px-5 md:px-10">
      <div class="max-w-[80rem] mx-auto">
        <div id="founders" class="py-8 md:py-12 pt-0">
          <!-- Section Header -->
          <div class="max-w-3xl mb-6 md:mb-10">
            <div class="mb-4">
              <h2 class="text-3xl md:text-5xl font-medium">Our Founders</h2>
            </div>
          </div>

          <div class="space-y-6 md:space-y-8">
            <!-- Founder 1 -->
            <div class="grid grid-cols-1 md:grid-cols-[0.5fr_1fr_1fr] gap-4 md:gap-8">
              <!-- Image -->
              <div class="w-full h-[200px] md:h-[230px]">
                <img
                    loading="lazy"
                    alt="Michael Yuan"
                    src="@assets/images/m-yuan.jpeg"
                    class="w-full h-full object-cover rounded-lg"
                />
              </div>
              <!-- Content -->
              <div class="col-span-1 md:col-span-2 bg-grey rounded-lg p-6 md:p-12 flex flex-col justify-center">
                <div class="mb-3 md:mb-4">
                  <h2 class="text-2xl md:text-[2.8rem] leading-tight">Michael Yuan</h2>
                </div>
                <p class="text-base md:text-lg font-normal">
                  Dr. Michael Yuan is an American entrepreneur and venture investor. He started and exited 3 software companies, and served as a board director for over 10 companies. Michael is the founder and maintainer of Linux Foundation’s open source project, WasmEdge Runtime. He is also the author of 6 books on software engineering published by Prentice Hall, Addison-Wesley, O’Reilly, and Manning. His latest book is Manning’s “Open source LLMs on your own computer”.
                </p>
                <p class="text-base md:text-lg font-normal my-5">
                  In 2022, he co-founded the GOSIM community and series of conferences, based in Singapore, to foster open source collaboration across culture and language barriers.
                </p>
                <p class="text-base md:text-lg font-normal">
                  Michael received a PhD in Astrophysics from the University of Texas at Austin. He lives in Austin with his family.
                </p>
              </div>
            </div>

            <!-- Founder 2 -->
            <div class="grid grid-cols-1 md:grid-cols-[0.5fr_1fr_1fr] gap-4 md:gap-8">
              <!-- Image -->
              <div class="w-full h-[200px] md:h-[230px]">
                <img
                    loading="lazy"
                    alt="Jiang Tao"
                    src="@assets/images/j-tao.png"
                    class="w-full h-full object-cover rounded-lg"
                />
              </div>
              <!-- Content -->
              <div class="col-span-1 md:col-span-2 bg-grey rounded-lg p-6 md:p-12 flex flex-col justify-center">
                <div class="mb-3 md:mb-4">
                  <h2 class="text-2xl md:text-[2.8rem] leading-tight">Jiang Tao</h2>
                </div>
                <p class="text-base md:text-lg font-normal">
                  Mr. Jiang Tao is the Founder & Chairman of CSDN, the premier professional developers community in China. With a dynamic career spanning 30 years, he has melded expertise in software, the internet, and the entrepreneurial realm. He's has led projects like the Giant Handwriting Computer, Kingsoft Ciba, and Haojie Super Software.
                </p>
                <p class="text-base md:text-lg font-normal my-5">
                  In addition to founding CSDN, Mr. Tao Jiang also founded Programmer Magazine, ITCAST Education, and Geek Founders Ventures. As an astute investor, Jiang has strategically anchored in over 80 high-tech startups.
                </p>
                <p class="text-base md:text-lg font-normal">
                  Deeply rooted in championing software and open-source advances in China, Mr. Jiang Tao served as executive member of the Open Source Development Committee of the Chinese Computer Society, the deputy secretary general of the Chinese Computer Society, the member of the Intelligent Application Branch of the Chinese Software Association, and the executive director of the Chinese Inventors Association.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Founders"
};
</script>