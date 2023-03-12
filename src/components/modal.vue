<template>
  <div v-show="$store.state.modal">
    <div id="open-modal" class="modal-window">
      <div>
        <a href="#" title="Close" class="modal-close" @click="$store.state.modal = false">Закрыть</a>
        <h1>Пожалуйста</h1>
        <div>Введите код который мы отправили на Вашу почту</div>
        <br>
        <div><small>Ваш код 👇</small></div>
        <input class="form__input" v-model="$store.state.login.password" type="password" placeholder="Код">
        <button class="form__button button submit" @click="signIn()">ВОЙТИ</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  mounted() {
    setTimeout(() => {
      this.$store.state.login.password = ''
    }, 200)
  },
  methods: {
    signIn() {
      this.$store.state.login.username = this.$store.state.register.personalNumber
      this.$store.dispatch('login', this.$store.state.login)
    }
  }
}
</script>

<style scoped lang="scss">
.form__input {
  width: 350px;
  height: 40px;
  margin: 4px 0;
  padding-left: 25px;
  font-size: 13px;
  letter-spacing: 0.15px;
  border: none;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  background-color: #ecf0f3;
  transition: 0.25s ease;
  border-radius: 8px;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
}
.button {
  cursor: pointer;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  margin-top: 10px;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 1px;
  background-color: #4b70e2;
  color: #f9f9f9;
  box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
  border: none;
  outline: none;
}
.modal-window {
  position: fixed;
  background-color: rgba(56, 50, 50, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  opacity: 1;
  pointer-events: auto;
  transition: all 0.3s;
& > div {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: white;
  }
header {
  font-weight: bold;
}
h1 {
  font-size: 150%;
  margin: 0 0 15px;
}
}

.modal-close {
  color: #aaa;
  line-height: 50px;
  font-size: 80%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 70px;
  text-decoration: none;
&:hover {
   color: black;
 }
}
a {
  color: inherit;
  text-decoration: none;
}

.container {
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.modal-window {
  & > div {
    border-radius: 1rem;
  }
}

.modal-window div:not(:last-of-type) {
  margin-bottom: 15px;
}

.logo {
  max-width: 150px;
  display: block;
}

small {
  color: lightgray;
}

.btn {
  width: 100%;
  max-width: 250px;
  height: 50px;
  border-radius: 25px;
  margin-top: 50px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1.15px;
  background-color: #4b70e2;
  color: #f9f9f9;
  box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
  border: none;
  outline: none;
  i {
    padding-right: 0.3em;
  }
}
</style>
