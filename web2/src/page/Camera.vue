<template>
  <video id="video" width="640" height="480" autoplay></video>
</template>

<script setup>
import { onMounted, ref } from "vue";

const video = ref(null);
const videoObj = { video: true, audio: true };

const errBack = (error) => {
  console.log("Video capture error: ", error.code);
};

onMounted(() => {
  if (navigator.mediaDevices.getUserMedia) {
    // 使用标准API
    navigator.mediaDevices
      .getUserMedia(videoObj)
      .then((stream) => {
        video.value.srcObject = stream;
        video.value.play();
      })
      .catch(errBack);
  } else if (navigator.webkitGetUserMedia) {
    // WebKit-prefixed
    navigator.webkitGetUserMedia(
      videoObj,
      (stream) => {
        video.value.src = window.webkitURL.createObjectURL(stream);
        video.value.play();
      },
      errBack
    );
  } else if (navigator.mozGetUserMedia) {
    // Firefox-prefixed
    navigator.mozGetUserMedia(
      videoObj,
      (stream) => {
        video.value.src = window.URL.createObjectURL(stream);
        video.value.play();
      },
      errBack
    );
  } else if (navigator.msGetUserMedia) {
    navigator.msGetUserMedia(
      videoObj,
      (stream) => {
        video.value.src = window.URL.createObjectURL(stream);
        video.value.play();
      },
      errBack
    );
  }
});
</script>
