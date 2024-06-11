<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-yellow-500"
  >
    <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-[475px] h-[550px]">
      <h1 class="text-4xl font-semibold mb-6 text-center">CRUD OPERATIONS</h1>
      <h2 class="text-lg font-semibold text-center">SIGN IN</h2>
      <p class="text-center mb-[50px] text-gray-600">
        Enter your credentials to access your account
      </p>
      <form>
        <div class="mb-[20px]">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            type="email"
            id="email"
            class="mt-1 p-2 w-full border rounded-md focus:ring focus:border-yellow-500"
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-[30px]">
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            type="password"
            id="password"
            class="mt-1 p-2 w-full border rounded-md focus:ring focus:border-yellow-500"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          class="w-full mb-[27px] py-2 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-600"
        >
          SIGN IN
        </button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-sm text-slate-500 hover:underline">
          Forgot your password?
          <span class="font-semibold text-yellow-500">Reset Password</span></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
