<template>
  <div class="head">
    <div class="person avatar">
      <div class="online">
        <img src="https://media.discordapp.net/attachments/997271616234995782/1084067040735797279/IOrozobaev_image_of_a_face_of_a_happy_kyrgyz_boy_who_is_a_robot_17d38f60-764a-4b19-bc98-b8478b7367e1.png?width=1279&height=1279" alt="" class="img">
      </div>
    </div>
    <h3 class="person-name">Актан</h3>
    <div class="buttons">
      <svg class="refresh" @click="refresh()" fill="#000000" height="1.25em" width="1.25em" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 489.698 489.698" xml:space="preserve">
        <g>
          <g>
            <path d="M468.999,227.774c-11.4,0-20.8,8.3-20.8,19.8c-1,74.9-44.2,142.6-110.3,178.9c-99.6,54.7-216,5.6-260.6-61l62.9,13.1
              c10.4,2.1,21.8-4.2,23.9-15.6c2.1-10.4-4.2-21.8-15.6-23.9l-123.7-26c-7.2-1.7-26.1,3.5-23.9,22.9l15.6,124.8
              c1,10.4,9.4,17.7,19.8,17.7c15.5,0,21.8-11.4,20.8-22.9l-7.3-60.9c101.1,121.3,229.4,104.4,306.8,69.3
              c80.1-42.7,131.1-124.8,132.1-215.4C488.799,237.174,480.399,227.774,468.999,227.774z"/>
            <path d="M20.599,261.874c11.4,0,20.8-8.3,20.8-19.8c1-74.9,44.2-142.6,110.3-178.9c99.6-54.7,216-5.6,260.6,61l-62.9-13.1
              c-10.4-2.1-21.8,4.2-23.9,15.6c-2.1,10.4,4.2,21.8,15.6,23.9l123.8,26c7.2,1.7,26.1-3.5,23.9-22.9l-15.6-124.8
              c-1-10.4-9.4-17.7-19.8-17.7c-15.5,0-21.8,11.4-20.8,22.9l7.2,60.9c-101.1-121.2-229.4-104.4-306.8-69.2
              c-80.1,42.6-131.1,124.8-132.2,215.3C0.799,252.574,9.199,261.874,20.599,261.874z"/>
          </g>
        </g>
      </svg>
      <svg @click="logout1()" width="1.6em" height="1.6em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 7.63636L14 4.5C14 4.22386 13.7761 4 13.5 4L4.5 4C4.22386 4 4 4.22386 4 4.5L4 19.5C4 19.7761 4.22386 20 4.5 20L13.5 20C13.7761 20 14 19.7761 14 19.5L14 16.3636" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 12L21 12M21 12L18.0004 8.5M21 12L18 15.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<script>
import {logOut} from "@/helpers/helpers";

export default {
  name: "Header",
  methods: {
    refresh() {
      this.$store.state.messages = []
      this.$store.dispatch('getButtonMessages', 1)
          .then(r => {
            this.$store.state.messages.push({
              author: 'bot',
              text: r.message,
              conversationMessages: r.conversationMessages
            })
          })
    },
    logout1() {
      logOut()
    }
  }
}
</script>

<style scoped>
.img {
  width: 100%;
  height: 100%;
}
.refresh {
  cursor: pointer;
}
</style>
