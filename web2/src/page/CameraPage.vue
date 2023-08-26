<template>
  <div class="bg-[#FAF7EF] h-screen">
    <div class="flex justify-between">
      <div>
        <div class="p-4"></div>
        <div class="border-t-4 rounded-full border-[#97AEB9] w-32"></div>
        <div class="p-2"></div>
        <div class="border-t-4 rounded-full border-[#97AEB9] w-28"></div>
        <div class="p-2"></div>
        <div class="border-t-4 rounded-full border-[#97AEB9] w-24"></div>
      </div>
      <div
        class="text-right text-[#97AEB9] font-semibold text-md leading-9 pr-7"
      >
        <div class="p-3"></div>
        復興高中<br />自主學習點名系統
      </div>
    </div>

    <div class="pt-10"></div>

    <div class="flex justify-center items-center flex-col">
      <div class="bg-white px-4 py-1">
        <video ref="video" class="w-64 h-56 autoplay"></video>
      </div>
      <div class="pt-5"></div>
      <div class="flex justify-center items-center">
        <button
          class="bg-[#698694] py-3 px-6 rounded-md text-center shadow-md"
          id="openCameraButton"
          @click="isCameraOpen ? takePhoto() : openCamera()"
        >
          <span class="text-white font-bold text-xl">
            {{ isCapturing ? "拍照中..." : isCameraOpen ? "拍照" : "開啟相機" }}
          </span>
        </button>
      </div>
      <!-- <a class="pt-6">
        <button @click="takePhoto" :disabled="isCapturing || !isCameraOpen">
          <span
            class="bg-[#698694] rounded-md text-center shadow-md text-white font-bold text-lg px-5 py-4"
          >
            {{ isCapturing ? "拍照中..." : "拍照" }}
          </span>
        </button>
      </a> -->
      <img v-if="capturedImage" :src="capturedImage" class="pt-6" />
      <router-link :to="{ name: 'confirm', params: { capturedImage } }">
      </router-link>
    </div>

    <div class="absolute flex flex-col items-end right-0">
      <div class="p-6"></div>
      <div class="border-t-4 rounded-full border-[#97AEB9] w-24"></div>
      <div class="p-2"></div>
      <div class="border-t-4 rounded-full border-[#97AEB9] w-28"></div>
      <div class="p-2"></div>
      <div class="border-t-4 rounded-full border-[#97AEB9] w-32"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const video = ref(null);
const capturedImage = ref(null);
const isCameraOpen = ref(false);
const isCapturing = ref(false);

const videoObj = { video: true, audio: true };

const errBack = (error) => {
  console.log("影像擷取錯誤: ", error.code);
};

const openCamera = () => {
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia(videoObj)
      .then((stream) => {
        video.value.srcObject = stream;
        video.value.play();
        isCameraOpen.value = true;
      })
      .catch(errBack);
  }
};

const takePhoto = () => {
  if (isCameraOpen.value) {
    isCapturing.value = true;

    const videoElement = video.value;
    const canvas = document.createElement("canvas");
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

    const imageDataUrl = canvas.toDataURL("image/jpeg");
    capturedImage.value = imageDataUrl;

    isCapturing.value = false;
  }
};
</script>
