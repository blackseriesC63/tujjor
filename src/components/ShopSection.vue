<template>
  <section class="p-6">
    <div class="flex justify-center items-center">
      <div class="flex w-full gap-4 ml-[70px] mr-[70px]">
        <img src="/main-2.png" alt="Main 2" class="object-cover w-3/4" />
        <img src="/main.png" alt="Main" class="w-1/4" />
      </div>
    </div>
    <!-- Banner Slider -->

    <!-- Title -->
    <h2 class="text-orange-500 text-3xl font-bold mb-6 pl-[70px] mt-9">
      Ваши магазины
    </h2>

    <!-- Shops Grid -->
    <div class="flex flex-wrap justify-center gap-4 w-full">
      <div class="border rounded-lg p-4 sm:w-auto cursor-pointer w-full">
        <div class="flex items-center justify-between mb-4">
          <img src="/radiusLogo.png" alt="Radius Logo" class="w-20" />
          <div class="text-yellow-500">★ 4.5</div>
        </div>
        <div class="text-gray-700 mb-2">
          Товары из категории Акции и скидки Товары из <br />
          категории....
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <img
            src="/radiusPhone.png"
            alt="Product 1"
            class="w-full sm:w-[180px] h-[210px] object-cover"
          />
          <div class="flex flex-col space-y-2 w-full sm:w-auto">
            <img
              src="/radiusTv.png"
              alt="Product 2"
              class="w-full sm:w-[160px] h-[100px] object-cover"
            />
            <img
              src="/radiusRef.png"
              alt="Product 3"
              class="w-full sm:w-[160px] h-[100px] object-cover"
            />
          </div>
        </div>
      </div>

      <div class="border rounded-lg p-4 w-full sm:w-auto cursor-pointer">
        <div class="flex items-center justify-between mb-4">
          <img src="/texnomartLogo.png" alt="Radius Logo" class="w-20" />
        </div>
        <div class="text-gray-700 mb-2">
          Товары из категории Акции и скидки Товары из <br />
          категории....
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <img
            src="/TexnoWash.png"
            alt="Product 1"
            class="w-full sm:w-[180px] h-[210px] object-cover"
          />
          <div class="flex flex-col space-y-2 w-full sm:w-auto">
            <img
              src="/texnoMic.png"
              alt="Product 2"
              class="w-full sm:w-[160px] h-[100px] object-cover"
            />
            <img
              src="/texnoPhone.png"
              alt="Product 3"
              class="w-full sm:w-[160px] h-[100px] object-cover"
            />
          </div>
        </div>
      </div>

      <div class="border rounded-lg p-4 w-full sm:w-auto cursor-pointer">
        <div class="flex items-center justify-between mb-4">
          <img src="/clozLogo.png" alt="Radius Logo" class="w-20" />
          <div class="text-yellow-500">★ 4.5</div>
        </div>
        <div class="text-gray-700 mb-2">
          Товары из категории Акции и скидки Товары из <br />
          категории....
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <img
            src="/cloz1.png"
            alt="Product 1"
            class="w-full sm:w-[180px] h-[210px] object-cover"
          />
          <div class="flex flex-col space-y-2 w-full sm:w-auto">
            <img
              src="/cloz2.png"
              alt="Product 2"
              class="w-full sm:w-[160px] h-[100px] object-cover"
            />
            <img
              src="/cloz3.png"
              alt="Product 3"
              class="w-full sm:w-[160px] h-[100px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- View All Shops Button -->
    <div class="text-center">
      <a href="/magazine">
        <button class="bg-orange-500 text-white px-4 py-2 rounded-md mt-2">
          Все магазины
        </button>
      </a>
    </div>
  </section>

  <div class="text-center">
    <a href="/reviews" class="pulsing-link">
      <button class="bg-orange-500 text-white px-4 py-2 rounded-md m-5">
        Review page ga otish
      </button>
    </a>
  </div>
</template>

<script setup>
// Add any setup code if necessary
</script>

<style scoped>
/* Define the pulsing animation */
@keyframes pulse {
  0% {
    transform: scale(10);
    box-shadow: 0 0 0 0 rgba(255, 190, 0, 0.7);
  }
  70% {
    transform: scale(10);
    box-shadow: 0 0 0 10px rgba(255, 190, 0, 0);
  }
  100% {
    transform: scale(10);
    box-shadow: 0 0 0 0 rgba(255, 190, 0, 0);
  }
}

/* Apply the pulsing animation to the link when hovered */
.pulsing-link:hover {
  animation: pulse 1s infinite;
}

/* Add any scoped styles if necessary */
</style>
