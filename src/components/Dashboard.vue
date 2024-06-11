<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <div class="w-1/5 bg-gray-100 p-5">
      <div class="text-lg font-bold mb-8">CRUD OPERATIONS</div>
      <nav>
        <ul>
          <li class="mb-5">
            <a href="#" class="flex items-center p-2 bg-yellow-400 rounded-md">
              <span class="material-icons mr-2">home</span>
            </a>
          </li>
          <li class="mb-5">
            <a href="#" class="flex items-center p-2">
              <span class="material-icons mr-2">book</span>
            </a>
          </li>
          <li class="mb-5">
            <a href="#" class="flex items-center p-2">
              <span class="material-icons mr-2">school</span>
            </a>
          </li>
          <li class="mb-5">
            <a href="#" class="flex items-center p-2">
              <span class="material-icons mr-2">payment</span>
            </a>
          </li>
          <li class="mb-5">
            <a href="#" class="flex items-center p-2">
              <span class="material-icons mr-2">bar_chart</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2">
              <span class="material-icons mr-2">settings</span>
              Settings
            </a>
          </li>
        </ul>
      </nav>
      <div class="mt-auto">
        <a href="#" class="flex items-center p-2">
          <span class="material-icons mr-2">logout</span>
        </a>
      </div>
    </div>
    <!-- Main Content -->
    <div class="w-4/5 p-10">
      <div class="grid grid-cols-4 gap-4">
        <div class="bg-blue-100 p-5 rounded-md">
          <div class="flex items-center">
            <span class="material-icons text-4xl text-blue-600">school</span>
            <div class="ml-auto text-3xl font-bold">243</div>
          </div>
          <div class="mt-3">Students</div>
        </div>
        <div class="bg-pink-100 p-5 rounded-md">
          <div class="flex items-center">
            <span class="material-icons text-4xl text-pink-600">bookmark</span>
            <div class="ml-auto text-3xl font-bold">13</div>
          </div>
          <div class="mt-3">Course</div>
        </div>
        <div class="bg-yellow-100 p-5 rounded-md">
          <div class="flex items-center">
            <span class="material-icons text-4xl text-yellow-600"
              >payments</span
            >
            <div class="ml-auto text-3xl font-bold">INR 556,000</div>
          </div>
          <div class="mt-3">Payments</div>
        </div>
        <div class="bg-orange-100 p-5 rounded-md">
          <div class="flex items-center">
            <span class="material-icons text-4xl text-orange-600">person</span>
            <div class="ml-auto text-3xl font-bold">3</div>
          </div>
          <div class="mt-3">Users</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style scoped>
/* Add your styles here */
</style>
