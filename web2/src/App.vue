<script setup>
// import Login from "./page/Login.vue";
// import DY from "./page/DeviceY.vue";
// import Fail from "./page/FailPage.vue";
// import CameraPage from "./page/CameraPage.vue";
// import Confirm from "./page/Confirm.vue";
// import Camera from "./page/Camera.vue";

import { useRoute, useRouter } from "vue-router";

const allowedIPs = ["120.112.17.20"];

const route = useRoute();
const router = useRouter();

router.beforeEach((to, from, next) => {
  const clientIP = getClientIP();

  if (allowedIPs.includes(clientIP)) {
    next();
  } else {
    router.push({ name: "error" });
  }
});

function getClientIP() {
  return "120.112.17.20";
}
</script>

<template>
  <div class="h-screen w-screen overflow-x-hidden bg-[#FFFAF0]">
    <nav>
      <div>
        <router-link to="/"></router-link>
        <router-link to="/camerapage"></router-link>
        <router-link to="/dy"></router-link>
        <router-link to="/fail"></router-link>

        <router-view />
      </div>
    </nav>

    <!-- 登入按鈕 -->
    <!-- <Login /> -->

    <!-- 自拍 -->
    <!-- <CameraPage /> -->

    <!-- 拍照畫面 -->
    <!-- <Camera /> -->

    <!-- 確認照片是否可以 -->
    <!-- <Confirm /> -->

    <!-- 點名成功、有借設備 -->
    <!-- <DY /> -->

    <!-- 點名失敗 -->
    <!-- <Fail /> -->
  </div>
</template>
