<template>
  <div class="chat">
    <div id="messages" class="messages">
      <div class="time">Сегодня</div>
      <div
          v-for="(message, idx) in $store.state.messages"
          :key="idx"
          class="msg-text"
          :class="message.author === 'owner' ? 'owner' : '' || message.conversationMessages > 0 ? 'button_choice' : ''"
      >
        <span class="text" v-if="message.text">{{message.text}}</span>
        <div style="margin-top: 20px" v-if="message.conversationMessages">
          <button class="btn"  v-for="(item, idx) in message.conversationMessages" :key="idx" @click="getNextMessage(item.id)">{{item.title}}</button>
        </div>
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
    messages: [],
    messageText: ''
  }),
  mounted() {
    this.$store.dispatch('getButtonMessages', 1)
        .then(r => {
          this.$store.state.messages.push({
            author: 'bot',
            text: r.message,
            conversationMessages: r.conversationMessages
          })
        })
  },
  methods: {
    async sendMessage() {
      this.$store.state.messages.push(
          {author: 'owner', text: this.messageText},
      )
      await this.$store.dispatch('searchKeyWords', { keyWords: this.messageText})
          .then(r => {
            this.$store.state.messages.push({
              author: 'bot',
              text: '',
              conversationMessages: r
            })
            this.messageText = ''
          })
    },
    getNextMessage(id) {
       this.$store.state.messages.map(i => {
         if (i.conversationMessages) {
           const item = i.conversationMessages.find(r => r.id === id)
           if (item !== undefined) {
             this.$store.state.messages.push({author: 'owner', text: item.title})
           }
         }
        delete i.conversationMessages
      })
      this.$store.dispatch('getButtonMessages', id)
          .then(r => {
            this.$store.state.messages.push({author: 'bot', text: r.message, conversationMessages: r.conversationMessages})
          })
    }
  }
}
</script>

<style scoped>
.chat {
  display: flex;
  flex-direction: column;
}
.position {
  position: absolute;
  top: 55px;
}
.btn {
  cursor: pointer;
  padding:0.75em;
  border-radius:0.75em 0.75em 0.75em 0.75em;
  background: #09db84;
  color: white;
  border: none;
  margin-right: 10px;
  box-shadow:0 2px 0 #00000020;
}
</style>
