<template>
  <div>
    <section
      class="py-16 dark:bg-red-800"
      style="
        background-image: url('https://s3-alpha-sig.figma.com/img/2250/f891/827ff07cd21ae1be104e11e1b601b7c4?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZRF-CVdNsIjOccdrj4zAv9fEkIPwQquUubzTYWbQPb6aqFdHWOK0lGq~nuCy6bT7kcNB6~zf40xGD~mvExkViSJx-7yGIlujAVQd-e13FzoF2JHLPGtepNfApgRXAwWX3LADNkmcrWyVjJr3z5z3-VUzrzKs1LH0C~gQHr6T5xmGHXToGmhoFc79PhfDLqIehHKY5BVtRWDpsnb8wPXs4BHKIgpSqP9a4oTqvW-sgHIniJTFWiltkKz2jorY31FIHulWQJA9-BKG80CseE2V41tNJixRMenv~r5vjFUcz8-iBohp5L0KVIrqz~KYnkDCHaGOtXu9ZHS1tR1wcwimYA__');
      "
    >
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-white mb-12">
          Tại sao chọn chúng tôi?
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            v-scroll-reveal="{ delay: 200 }"
            class="bg-white rounded-lg p-6 transform hover:-translate-y-1 transition-transform duration-300"
          >
            <p class="text-gray-600 text-sm mb-2">{{ stat.label }}</p>
            <p class="text-red-600 text-4xl font-bold">{{ stat.value }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Đối tác tuyển dụng</h2>

        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8"
        >
          <div
            v-for="(partner, index) in partners"
            :key="index"
            class="p-4 flex items-center justify-center hover:opacity-75 transition-opacity duration-300"
          >
            <img
              loading="lazy"
              :src="partner.logo"
              :alt="partner.name"
              class="max-h-12 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const stats = ref([
  {
    label: "Số năm kinh nghiệm",
    value: "10+",
  },
  {
    label: "Khách hàng quốc tế",
    value: "500+",
  },
  {
    label: "Dự án thành công",
    value: "1000+",
  },
  {
    label: "Văn phòng và chi nhánh",
    value: "10",
  },
  {
    label: "Top công ty Công nghệ tại Việt Nam",
    value: "Top 3",
  },
  {
    label: "Tỷ lệ khách hàng hài lòng",
    value: "97%",
  },
]);

const partners = ref([
  {
    name: "U.S.M.Holdings",
    logo: "https://s3-alpha-sig.figma.com/img/ba9b/90af/a95d4df69f56c7044cceaf8db38c3401?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SLEXMPyVWCJaX16qzvFSxEGVGpoUu1f4qzgS5u7jXQlIn5x13slZGPwTY9FDcwSnarEDumow9oQAw0cBc1rUoA-vrHrAAjav8LjfeBf7N-uvzjslTESoQlFikMDFUBhKsqgUZIbVqlEbmVey-VOJzCoKurlsBo2a04qdPCIBxFULHfsa-jFwdIH4yXE8fC344BroE2dQV3tkYIksdSqwRP2o4KK2Z4lqb-sV~MNnE7mzCUxq29DWkpYEia2Ku8lGrNtYnP69TWhcWh1u5fiDb604YzpfNF3HCSuVNbbAYuk4BwbztQZQSIGRMVBbYxyyAkmeMdj-0a2bhh39LDsNOw__",
  },
  {
    name: "Studio NE63",
    logo: "https://s3-alpha-sig.figma.com/img/99c1/4e9b/eaedef77670568d349ccd38810aca795?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OEW52IqV9hlY0G3RlnOjpxkczHXng7RjCEujaZPNQjX1IB3QXnDmnKsnlB9QM0vA6CvucohKMgLffhBq8OSa5Kgt1gNnqEZQ4zrz45Nb8UJCiFiGMU-aDaeuiyRL3Uxsd9h43pAUZqPTKKdkVkL3FP2IiPY8DWVb64ua4rnT9k5ouJwBlpR4rRFKyIvoLIZtjCvOi3r9LebyX5rTyvcYyGnJvJrXgvBEJwLg3y267de94kHaZOHgyllCCWze90R6dTT4LZ~AcMvSd3Fi9hHxaNC~dbhzeAOyKItMKefuo8jCasDyqnD6IBzdWmmiYq4BZf6lfFke8BdMARmuw3sVRQ__",
  },
  {
    name: "Sunloft",
    logo: "https://s3-alpha-sig.figma.com/img/62fb/741d/1029c644481ff6fdb28b781bad3418cc?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iIMhZOqU0Cey~wV~hjXkZje5GV1jRUKws~jIeCisfuWPcdeHyWVUyelmCRGSVZH3UvJfTAsl~f1BHqHplaJQQTyYtIjNUO9x2KPW32FczD-VFzGth-MF~S9RNWd1U9k0lkaZDdh0bRYDYhC2zB7BubNX9r9FVNcKJPrfy1pJEoEulK4MKj5YGXjrwgondJXuGzm-7UJLgml0qFaBrni2JWmDBH5u~ZXPoWut77Lesg3eRd~dIRePcMwwYkXwFa1XAGKAsryuvFQWnP6Ah2Ane2CGRrvDbHZGWGsRwhKKAk7SlHBjl-xLHMTWhmeEV8lYu2bkBmm7FpSCmS~NrVwDzg__",
  },
  {
    name: "Systena",
    logo: "https://s3-alpha-sig.figma.com/img/e5a7/d176/dccc4222da4aeb757c467033bca0f3c6?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p58yJeidKOTmsE0w~Ze0ERY6PLp0bLrnrVkTnOLeHQEMKhAw70UwBPCy0JkvMYmG8JUv~cd~bnwIXy5EtgkuFSrDB8ygtxJ73et~UY~SFbuqfX~f6pXZNInWR1nSQZ1z-FhKsH0TCt55HjvgFStnpphZC6Ph5W4De-StYsnj0bRwU93lj0jxEnhleJES-kYsbN0pDivGxygEnut-a0D3Py59KdGy4ejtsmir9eEkR6f~xz-5Qgra~ThFBRLsaXWf3~uErMBqGrqUgNjp2Lzo5r~R-sCCY5jQ9z1~MJE7HH2rdcIhiCABxnqN3XYkqwHhUEK44CNm7lwXeg7Fldn~Yg__",
  },
  {
    name: "Fujikin",
    logo: "https://s3-alpha-sig.figma.com/img/9e4f/caef/a8d37d5d334caf03894ca555fa238a0f?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mzSRueyKBt04N4MtvOljoZxrlXWq8N7UcJsbRb6ztll6NspR65vk0YzqET-I6Kfigc~ACmZ~FNGOuD1QYrgwwL0Zyp-MKRVRjwEbs8dohQu21ErOFR6x8KM0WJbqNCnWv3qwunspuG5cWOjYAUanWLpPWZkMqpMZ~9l3XTA9b8T8TMRFMpGeI8KxgnUl~cbtVaJWAbdEbDMM60G89ATIf5PhOWMEQVh8KJs9sY3xpwPswXEgA-A~3f4YPQbzpRC9R~P9y04gjX-lIzKqRInrt8W7n5VJm7hDFWnSZ18GFiFnm4y8ecl4SSYGO9LTjAdzzWHhNaiCeCI5sk5YIo7ZjQ__",
  },
  {
    name: "Cloud",
    logo: "https://s3-alpha-sig.figma.com/img/ba03/88f8/fae8c5e33ba402f5160697ee16424570?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gw-gjyUJg7dKsusPQ4x8bjk-m72f~l7nItyChCcgZob8PYruuMj5TukA2jDqft8EMagVpOXm8ahXsxRVusqZVX69HU-tQdsV0QQwsolGinlIq7jrl24ucsPCTikgtfCuvmM9rZD0jNcBFmXhXV4qvR1FEibNiFvilxUCpjIYe--SQMxiqwHJBB2IDuAmLDp4A0aU5-HorQysSkh47KpimNL-NgEkP~NHUkH00gY9nnlP7Gth8dmAUjlN8mgpuUFTPiXUrCuViXCo2t0dUIiGxtGN9eHR3gNRqg-Nn~Upv9N~wYpCFNSnlAXN9Y9mTIpbw5GOWcn-1vfbyfyBQ1YBDQ__",
  },
]);
</script>

<style scoped></style>
