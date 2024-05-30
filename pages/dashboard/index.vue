<script setup lang="ts">
import Dropdown from "~/components/Dropdown.vue";

definePageMeta({
  layout: "dashboard",
});

const token = useCookie("token").value;
const rows = await useFetch("https://recruitment-api.vercel.app/get-table", {
  headers: {
    Authorization: ` ${token}`,
  },
});

const infos = await useFetch("https://recruitment-api.vercel.app/get-info", {
  headers: {
    Authorization: ` ${token}`,
  },
});

function printNumberOfIP(ipcount: number) {
  console.log(`Number of IP: ${ipcount}`);
}
</script>

<template>
  <div class="container relative w-full mx-auto px-[35px]">
    <div
      class="flex absolute w-full my-4 items-center justify-between bg-blue-300 py-5 px-4 rounded text-sm font-medium"
    >
      <p>
        Special Offer! Get Complete Free Proxy 10 MB Proxy, without credit card.
        <a href="" class="underline"> Start Free Trial </a>
      </p>
      <button>
        <svg
          width="24"
          height="24"
          viewBox="0 0 512 512"
          fill="none"
          color="#7E868C"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M289.94 255.999L384.94 160.999C389.448 156.498 391.984 150.39 391.99 144.02C391.996 137.649 389.47 131.537 384.97 127.029C380.469 122.52 374.361 119.984 367.991 119.978C361.62 119.973 355.508 122.498 351 126.999L256 221.999L161 126.999C156.491 122.49 150.376 119.957 144 119.957C137.623 119.957 131.508 122.49 127 126.999C122.491 131.507 119.958 137.622 119.958 143.999C119.958 150.375 122.491 156.49 127 160.999L222 255.999L127 350.999C122.491 355.507 119.958 361.622 119.958 367.999C119.958 374.375 122.491 380.49 127 384.999C131.508 389.507 137.623 392.04 144 392.04C150.376 392.04 156.491 389.507 161 384.999L256 289.999L351 384.999C355.508 389.507 361.623 392.04 368 392.04C374.376 392.04 380.491 389.507 385 384.999C389.508 380.49 392.041 374.375 392.041 367.999C392.041 361.622 389.508 355.507 385 350.999L289.94 255.999Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  </div>

  <div class="container mx-auto">
    <div class="mt-[105px] px-[35px] h-20 flex items-center">
      <h1 class="font-bold text-xl">Proxies & Scraping Infrastructure</h1>
    </div>
  </div>

  <div
    class="relative before:absolute before:top-[calc(100%-10px)] before:w-full before:border-t before:content-[''] before:pl-4"
  >
    <div class="container mx-auto">
      <div
        class="mt-6 px-[35px] flex gap-7 items-center py-2 text-xl font-medium"
      >
        <button class="h-10">My Proxies</button>
        <button
          class="h-10 relative z-10 text-[#0C6DFC] border-b-[3px] border-[#0C6DFC]"
        >
          Dashboard
        </button>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="grid grid-cols-4 gap-7 pb-10 pt-16">
      <div class="info-card">
        <h6>Subscription expires on</h6>

        <p>
          {{ infos.data.value.expireTime }}
        </p>
      </div>
      <div class="info-card">
        <h6>Last charge</h6>
        <p>
          {{ infos.data.value.lastChargeAmount }}
          {{ infos.data.value.lastCharge }}
        </p>
      </div>
      <div class="info-card">
        <h6>Total Usage Data</h6>
        <p>{{ (infos.data.value.totalDataUsage / 1000).toFixed(3) }} GB</p>
      </div>

      <div class="info-card">
        <h6>Daily Usage Data</h6>
        <p>{{ (infos.data.value.dailyUsage / 1000).toFixed(3) }} GB</p>
      </div>
    </div>
  </div>

  <div class="container pb-10">
    <div class="bg-white py-5 px-4 grid gap-4 rounded-2xl">
      <h2 class="text-sm font-bold">Data usage per network</h2>
      <DataUsageChart />
    </div>
  </div>

  <div class="container mt-10">
    <div class="rounded-2xl bg-white px-10 py-9 grid gap-5">
      <h5 class="text-xl">Transactions History</h5>
      <div class="overflow-auto">
        <table class="w-full">
          <thead>
            <tr class="text-center">
              <th>Type</th>
              <th>Location</th>
              <th>Rental Period</th>
              <th>Number of IP</th>
              <th>SpesificPurpose</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows.data.value.data">
              <td>
                {{ row.type }}
              </td>
              <td>
                {{ row.location }}
              </td>
              <td>
                {{ row.rental }}
              </td>
              <td>
                {{ row.ipcount }}
              </td>
              <td>
                {{ row.purpose }}
              </td>

              <td>
                {{
                  new Date(row.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                }}
              </td>

              <td>
                <Dropdown>
                  <template v-slot:button> Actions </template>
                  <template v-slot:content>
                    <button @click="printNumberOfIP(row.ipcount)">
                      Processing
                    </button>
                    <button @click="printNumberOfIP(row.ipcount)">
                      In Progress
                    </button>
                    <button @click="printNumberOfIP(row.ipcount)">
                      Completed
                    </button>
                  </template>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="postcss"></style>
