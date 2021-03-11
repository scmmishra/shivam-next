<template>
  <div class="grid grid-cols-1 md:grid-cols-6 gap-4">
  <div class="md:col-span-3 md:-mb-5 -my-8">
    <!-- <h3>Line Chart</h3> -->
    <img alt="Line Chart" src="/charts/line.png" class="bg-white rounded-lg shadow-md overflow-hidden px-2 py-4 my-2">
  </div>

  <div class="md:col-span-3 md:-mb-5 -my-8">
    <!-- <h3>Bar Chart</h3> -->
    <img alt="Bat Chart" src="/charts/bar.png" class="bg-white rounded-lg shadow-md overflow-hidden px-2 py-4 my-2">
  </div>

  <div class="md:col-span-2 md:-my-10 -my-8">
    <!-- <h3>Donut Chart</h3> -->
    <img alt="Donut Chart" src="/charts/donut.png" class="bg-white rounded-lg shadow-md overflow-hidden transform md:-rotate-1 px-2 py-4 my-2">
  </div>

  <div class="md:col-span-2 md:-my-10 -my-8">
    <!-- <h3>Pie Charts</h3> -->
    <img alt="Pie Chart" src="/charts/pie.png" class="bg-white rounded-lg shadow-md overflow-hidden px-2 py-4 my-2">
  </div>

  <div class="md:col-span-2 md:-my-10 -my-8">
    <!-- <h3>Percentage Charts</h3> -->
    <img alt="Percentage Chart" src="/charts/percentage.png" class="bg-white rounded-lg shadow-md transform md:rotate-1 overflow-hidden px-2 py-4 my-2">
  </div>

  <div class="md:col-span-6 md:-mt-5 -my-8">
    <!-- <h3>Heatmap</h3> -->
    <img alt="Heatmap" src="/charts/heatmap-v2.png" class="bg-white rounded-lg shadow-md overflow-hidden px-2 py-4 my-2">
  </div>
</div>
</template>

<script>
export default {
  name: "ChartGrid",
};
</script>