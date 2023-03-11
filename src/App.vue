<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

import ChatBox from "@/components/ChatBox";
import Message from "@/components/Message";

export default {
  name: 'App',
  components: {
    ChatBox,
    Message
  },
  created() {
  },
  methods: {
  },
  data: () => ({
  })
}
</script>
<style>
@font-face {
  font-family: 'Georama';
}

@font-face {
  font-family: 'Georama';
  font-weight: bold;
}


</style>
