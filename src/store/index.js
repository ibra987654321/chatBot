import Vue from 'vue'
import Vuex from 'vuex'
import {decodeJWT, getAxios, postAxios, setToken} from "@/helpers/helpers";
import axios from "axios";
import router from "@/router";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [],
    loading: false,
    modal: false,
    login: {
      username: '',
      password: ''
    },
    register: {
      personalNumber: "",
      email: ""
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    login(store, payload) {
      store.state.loading = true
      return axios(`http://176.126.164.43:88/chatbot/api/user/login`, {
        method: 'POST',
        data: payload,
      })
          .then(res => {
            store.state.loading = false
            if (res.data.token) {
              setToken(res.data.token)
              router.push({ name: 'home' })
            }
          })
    },
    register(store, payload) {
      store.state.loading = true
      return axios(`http://176.126.164.43:88/chatbot/api/user/registration`, {
        method: 'POST',
        data: payload,
      })
          .then(() => {
            store.state.loading = false
            store.state.modal = true
          })
    },
    getButtonMessages(_, payload) {
      const data = {
        "messageResponse_id": payload,
        "personal_number": Number(decodeJWT().sub)
      }
      return postAxios('http://176.126.164.43:88/chatbot/api/conversation_message/get/conversationMessage', data)
    },
    searchKeyWords(_, payload) {
      return postAxios('http://176.126.164.43:88/chatbot/api/conversation_message/get/keyWords', payload)
    },
  },
  modules: {
  }
})
