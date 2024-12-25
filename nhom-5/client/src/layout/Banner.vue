<template>
  <div class="relative h-[435px] flex items-center justify-center text-white">
    <div
      class="absolute inset-0 bg-cover bg-center image-banner"
      style="
        background-image: url('https://s3-alpha-sig.figma.com/img/acee/2e78/87d12368bef93dfc7b5f89b9927a3239?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ns6YouRVNfEAfJhHQjCpO4NIvFXaqj4FZJhMbCbrty3G-wLORXYLBbTm9xMUkKFK65NvL0AePuMAU8wPgJgwcJXKe1cFIiNnMBO9lVRNu1-i8d9lYDkhlwz1Dk1Un11SabiZi5JLxlJ9rSVx10rahOjhu4IO1CK1f8-VDLhJlbfu5xJe7ZVdAcCdPZHYU-MeLmDvUd-tMkJl-nyMQrsP11yLhSYjfsYKIT9NthFAZk~IKktJFh7f784vGG4ROERdXDQTSwTnWzldU3PeLJ~Xaunj8~8Zrqm~2rRU1p0pg3VmMpTUdN0~SUCRDTyUK7x9293GnbeQO95MhygpcGjdGQ__');
        background-position: top center;
        background-size: 100% 155%;
        height: 100%;
      "
    ></div>

    <div class="absolute inset-0 bg-black opacity-50"></div>

    <!-- Nội dung phía trước -->
    <div class="relative flex flex-col items-center gap-[24px]">
      <!-- Tiêu đề -->
      <h1
        class="text-[48px] font-bold m-0 w-[876px] flex items-center justify-center"
      >
        Tìm kiếm việc làm cùng Rikkei Jobs!
      </h1>

      <!-- Khung tìm kiếm -->
      <div class="flex items-center gap-[24px] p-2 rounded-lg w-full">
        <!-- Ô tìm kiếm vị trí -->
        <div class="gap-[12px] flex">
          <div
            class="flex items-center bg-gray-100 p-2 rounded-lg w-[458px] h-[48px]"
          >
            <SearchOutlined class="text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Vị trí ứng tuyển"
              class="bg-gray-100 text-gray-700 outline-none ml-2"
              v-model="positionQuery"
            />
          </div>

          <!-- Dropdown chọn địa điểm -->
          <div
            class="relative flex bg-gray-100 p-2 rounded-lg w-[234px] h-[48px] items-center justify-between"
          >
            <div class="flex items-center w-[190px] h-[24px]">
              <EnvironmentOutlined class="text-gray-500 w-5 h-5" />
              <p class="text-gray-700 ml-2 mt-4">
                {{ selectedProvince || "Tất cả địa điểm" }}
              </p>
            </div>
            <DownOutlined
              class="text-gray-800 mr-3 cursor-pointer"
              @click="toggleDropdown"
            />
          </div>

          <!-- Danh sách tỉnh thành -->
          <ul
            v-if="showDropdown"
            class="absolute top-[160px] left-0 bg-white text-black w-full shadow-lg rounded-lg z-10 overflow-y-auto max-h-[120px]"
          >
            <input
              type="text"
              placeholder="Tìm kiếm "
              class="w-[70%] ml-3 outline-none"
              v-model="searchQuery"
            />
            <li
              v-for="(item, index) in filteredProvinces"
              :key="index"
              class="p-2 hover:bg-gray-200 cursor-pointer"
              @click="selectProvince(item.name)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>

        <!-- Nút tìm kiếm -->
        <button
          @click="searchPosition"
          class="bg-red-600 text-white px-6 py-2 rounded-lg w-[140px] h-[48px] hover:bg-red-700"
        >
          Tìm kiếm
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  SearchOutlined,
  EnvironmentOutlined,
  DownOutlined,
} from "@ant-design/icons-vue";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

// Lấy danh sách tỉnh thành từ Vuex store
const province = computed(() => store.state.provinces.provinces);

// Các state
const showDropdown = ref(false);
const selectedProvince = ref("");
const searchQuery = ref("");
const positionQuery = ref(""); // Từ khóa vị trí ứng tuyển

// Hàm toggle dropdown
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

// Hàm chọn tỉnh thành
const selectProvince = (provinceName) => {
  selectedProvince.value = provinceName;
  showDropdown.value = false;
  searchQuery.value = ""; // Reset ô tìm kiếm
};

// Hàm tìm kiếm danh sách tỉnh thành
const filteredProvinces = computed(() =>
  province.value.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

// Hàm gửi dữ liệu tìm kiếm
const searchPosition = () => {
  const query = {
    position: positionQuery.value, // Dùng ref thay vì querySelector
    province: selectedProvince.value,
  };
  console.log(query);
  router.push({ name: "listJob", query }); // Chuyển hướng với query
};

// Fetch danh sách tỉnh thành khi component được mount
onMounted(() => {
  store.dispatch("getAllProvince");
});
</script>

<style scoped>
.image-banner {
  background-image: linear-gradient(
      to bottom,
      rgba(25, 16, 58, 0.7),
      rgba(25, 16, 58, 0.4)
    ),
    url("https://s3-alpha-sig.figma.com/img/acee/2e78/87d12368bef93dfc7b5f89b9927a3239?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ns6YouRVNfEAfJhHQjCpO4NIvFXaqj4FZJhMbCbrty3G-wLORXYLBbTm9xMUkKFK65NvL0AePuMAU8wPgJgwcJXKe1cFIiNnMBO9lVRNu1-i8d9lYDkhlwz1Dk1Un11SabiZi5JLxlJ9rSVx10rahOjhu4IO1CK1f8-VDLhJlbfu5xJe7ZVdAcCdPZHYU-MeLmDvUd-tMkJl-nyMQrsP11yLhSYjfsYKIT9NthFAZk~IKktJFh7f784vGG4ROERdXDQTSwTnWzldU3PeLJ~Xaunj8~8Zrqm~2rRU1p0pg3VmMpTUdN0~SUCRDTyUK7x9293GnbeQO95MhygpcGjdGQ__");
}
</style>
