<script>
  export let name, description;
</script>

<div class=" col-span-1">
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">{name}</h5>
    <p class="text-gray-700 text-base mb-4">
      {description}
    </p>
  </div>
</div>