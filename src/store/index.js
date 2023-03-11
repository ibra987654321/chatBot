import Vue from 'vue'
import Vuex from 'vuex'
import {getAxios} from "@/helpers/helpers";
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [],
    loading: false,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    getButtonMessages() {
      return axios(`http://10.16.230.114:8060/chatbot/api/conversation_message/get/1`, {
        method: 'GET',
      }).then(r => r)
      // return getAxios('http://10.16.230.114:8060/chatbot/api/conversation_message/get/1')
    }
  },
  modules: {
  }
})
