<template>
  <div class="head">
    <div class="person avatar">
      <div class="online">
        <img src="https://cdn-icons-png.flaticon.com/512/2021/2021646.png" alt="" class="img">
      </div>
    </div>
    <h3 class="person-name">Актан</h3>
    <div class="buttons">
<!--      <svg title="Call" class="audio-call icon" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg">-->
<!--        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>-->
<!--      </svg>-->
<!--      <svg title="Video-call" class="video-call icon" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg">-->
<!--        <polygon points="23 7 16 12 23 17 23 7"></polygon>-->
<!--        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>-->
<!--      </svg>-->
      <svg id="button-options" class="button-option icon"  stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.img {
  width: 100%;
  height: 100%;
}
</style>
