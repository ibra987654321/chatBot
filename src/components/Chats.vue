<template>
  <div class="chat">
    <div id="messages" class="messages">
      <div class="time">Сегодня</div>
      <div
          v-for="(message, idx) in messages"
          :key="idx"
          class="msg-text"
          :class="message.author === 'owner' ? 'owner' : ''"
      >
        <span class="text">{{message.text}}</span>
      </div>
    </div>
    <div class="field">
      <input v-model="messageText" @keydown.enter="sendMessage()" id="input-message" class="input-message" type="text" placeholder="Напишите что нибудь..." />
      <div class="icon plus">
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
        </svg>
      </div>
      <div @click="sendMessage()"  id="send-text" class="icon send text">
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </div>
      <div id="send-audio" class="icon send audio">
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chats",
  data:() => ({
    messages: [
      {author: 'bot', text: 'Hello'},
      {author: 'bot', text: 'How are you doing?'},
      {author: 'owner', text: 'Fine'},
      {author: 'owner', text: 'You?'},
      {author: 'bot', text: 'Good'},
    ],
    messageText: ''
  }),
  mounted() {
    this.$store.dispatch('getButtonMessages')
        .then(r => {
          console.log(r)
        })
  },
  methods: {
    sendMessage() {
      this.messages.push(
          {author: 'owner', text: this.messageText},
      )
      this.messageText = ''
    }
  }
}
</script>

<style scoped>
.chat {
  display: flex;
  flex-direction: column;
}
</style>
