<template>
  <!-- Navigation Bar -->
  <nav class="flex items-center justify-between bg-orange-500 h-[60px]">
    <div
      class="flex items-center space-x-4 h-full pl-[120px] pt-[12px] pb-[12px]"
    >
      <img src="/location.png" alt="Location" />
      <span class="text-white text-base">
        г Ташкент, р<br />Чиланзар, Гавхар 52
      </span>
    </div>
    <div
      class="ml-auto flex items-center space-x-4 h-full pr-[120px] gap-[30px]"
    >
      <div class="flex items-center space-x-2">
        <img src="/mail.png" alt="Mail" />
        <span class="text-white text-base">info@tujjor.uz</span>
      </div>
      <div class="flex items-center space-x-2">
        <img src="/phone.png" alt="Phone" />
        <span class="text-white text-base">+998 (90) 123 45 67</span>
      </div>
    </div>
  </nav>

  <!-- Second Div -->
  <div class="secondDiv flex items-center justify-between shadow-xl">
    <img src="/Logo.png" alt="Logo" class="pl-[120px] p-3" />

    <!-- Search Bar -->

    <!-- Right Side Icons -->
    <div class="ml-auto flex gap-[30px] items-center pr-[120px]">
      <div class="flex items-center space-x-2 pr-2">
        <div class="relative pl-[345px]">
          <button
            class="flex items-center justify-between px-2 py-1 border border-orange-400 text-orange-500 rounded w-[133px] h-[34px]"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="3"
                height="3"
                rx="1.5"
                fill="#FB8500"
                stroke="#F7931E"
              />
              <rect
                x="6.49902"
                y="0.5"
                width="3"
                height="3"
                rx="1.5"
                fill="#FB8500"
                stroke="#F7931E"
              />
              <rect
                x="0.5"
                y="6.5"
                width="3"
                height="3"
                rx="1.5"
                fill="#FB8500"
                stroke="#F7931E"
              />
              <rect
                x="6.49902"
                y="6.5"
                width="3"
                height="3"
                rx="1.5"
                fill="#FB8500"
                stroke="#F7931E"
              />
            </svg>
            Категории
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="#F7931E"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <!-- Input with Search Button -->
      </div>
      <div class="relative flex justify-between w-[435px] h-[36px] pt-[1px]">
        <input
          type="text"
          class="p-2 border border-orange-500 rounded-md focus:outline-none w-full h-[34px] pr-[40px]"
          placeholder="Поиск..."
        />
        <button
          class="absolute right-0 top-[1px] bg-orange-500 text-white rounded-r w-[36px] h-[34px] flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <button class="text-white w-[27px] h-[27px]">
        <img src="/star.png" alt="Star" />
      </button>
      <button class="text-white relative w-[27px] h-[27px]">
        <img src="/cart.png" alt="Cart" />
      </button>
      <button class="text-white w-[27px] h-[27px]">
        <img src="/qrcode.png" alt="QR Code" />
      </button>
      <button class="text-white w-[27px] h-[27px]">
        <img src="/person.png" alt="Person" />
      </button>
      <button class="text-black h-[27px] flex justify-between">
        <img src="/russia.png" alt="Russian Flag" />
        py
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Additional styling if needed */
</style>
