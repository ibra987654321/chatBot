<template>
  <div class="main">
    <div class="container a-container" id="a-container">
      <form class="form" id="a-form" method="" action="">
        <h2 class="form_title title">Создать аккаунт</h2>
        <input class="form__input" v-model="$store.state.register.personalNumber" type="text" placeholder="ИНН">
        <input class="form__input" v-model="$store.state.register.email" type="text" placeholder="Почта">
        <div v-if="$store.state.loading" class="loader loader--style3" title="2">
          <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
            <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
              <animateTransform attributeType="xml"
                                attributeName="transform"
                                type="rotate"
                                from="0 25 25"
                                to="360 25 25"
                                dur="0.6s"
                                repeatCount="indefinite"/>
            </path>
          </svg>
        </div>
        <button v-if="!$store.state.loading" class="form__button button submit" @click="getButtons($event, 'sign-up')">ЗАРЕГИСТРИРОВАТЬСЯ</button>
      </form>
    </div>
    <div class="container b-container" id="b-container">
      <form class="form" id="b-form" method="" action="">
        <h2 class="form_title title">Войти в систему</h2>
        <input class="form__input" v-model="$store.state.login.username" type="text" placeholder="ИНН">
        <input class="form__input" v-model="$store.state.login.password" type="password" placeholder="Пароль">
        <a class="form__link">Забыли пароль?</a>
        <div v-if="$store.state.loading" class="loader loader--style3" title="2">
          <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
            <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
              <animateTransform attributeType="xml"
                              attributeName="transform"
                              type="rotate"
                              from="0 25 25"
                              to="360 25 25"
                              dur="0.6s"
                              repeatCount="indefinite"/>
            </path>
          </svg>
        </div>
        <button v-if="!$store.state.loading" class="form__button button submit" @click="getButtons($event, 'sign-in')">ВОЙТИ</button>
      </form>
    </div>
    <div class="switch" id="switch-cnt">
      <div class="switch__circle"></div>
      <div class="switch__circle switch__circle--t"></div>
      <div class="switch__container" id="switch-c1">
        <h2 class="switch__title title">Добро пожаловать !</h2>
        <p class="switch__description description">Если у Вас уже есть аккаунт, пожалуйста, войдите</p>
        <button class="switch__button button switch-btn" @click="changeForm()">ВОЙТИ</button>
        <modal/>
      </div>
      <div class="switch__container is-hidden" id="switch-c2">
        <h2 class="switch__title title">Привет, друг ! </h2>
        <p class="switch__description description">Введите в свои личные аккаунт и начните путешествие с нами</p>
        <button class="switch__button button switch-btn" @click="changeForm()">ЗАРЕГИСТРИРОВАТЬСЯ</button>
      </div>
    </div>
  </div>
</template>

<script>
import modal from "@/components/modal";
export default {
  name: "login",
  components: {
    modal
  },
  data:() => ({
    login: {
      username: '',
      password: ''
    },
    register: {
      personalNumber: "",
      email: ""
    }
  }),
  mounted() {

  },
  methods: {
    getButtons(e, type) {
      e.preventDefault()
      if (type === 'sign-in') {
        this.$store.dispatch('login', this.$store.state.login)
      } else {
        this.$store.dispatch('register', this.$store.state.register)
      }
    },
    changeForm() {
      let switchCtn = document.querySelector("#switch-cnt");
      let switchC1 = document.querySelector("#switch-c1");
      let switchC2 = document.querySelector("#switch-c2");
      let switchCircle = document.querySelectorAll(".switch__circle");
      let switchBtn = document.querySelectorAll(".switch-btn");
      let aContainer = document.querySelector("#a-container");
      let bContainer = document.querySelector("#b-container");
      let allButtons = document.querySelectorAll(".submit");
      switchCtn.classList.add("is-gx");
      setTimeout(function () {
        switchCtn.classList.remove("is-gx");
      }, 1500)

      switchCtn.classList.toggle("is-txr");
      switchCircle[0].classList.toggle("is-txr");
      switchCircle[1].classList.toggle("is-txr");

      switchC1.classList.toggle("is-hidden");
      switchC2.classList.toggle("is-hidden");
      aContainer.classList.toggle("is-txl");
      bContainer.classList.toggle("is-txl");
      bContainer.classList.toggle("is-z200");
    }
  }
}
</script>

<style scoped>
.main {
  position: relative;
  width: 1000px;
  min-width: 1000px;
  min-height: 600px;
  height: 600px;
  padding: 25px;
  background-color: #ecf0f3;
  box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
  border-radius: 12px;
  overflow: hidden;
}

@media (max-width: 1200px) {
  .main {
    transform: scale(0.7);
  }
}

@media (max-width: 1000px) {
  .main {
    transform: scale(0.6);
  }
}

@media (max-width: 800px) {
  .main {
    transform: scale(0.5);
  }
}

@media (max-width: 600px) {
  .main {
    transform: scale(0.4);
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 600px;
  height: 100%;
  padding: 25px;
  background-color: #ecf0f3;
  transition: 1.25s;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.form__icon {
  object-fit: contain;
  width: 30px;
  margin: 0 5px;
  opacity: 0.5;
  transition: 0.15s;
}

.form__icon:hover {
  opacity: 1;
  transition: 0.15s;
  cursor: pointer;
}

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

.form__input:focus {
  box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
}

.form__span {
  margin-top: 30px;
  margin-bottom: 12px;
}

.form__link {
  color: #181818;
  font-size: 15px;
  margin-top: 25px;
  border-bottom: 1px solid #a0a5a8;
  line-height: 2;
}

.title {
  font-size: 34px;
  font-weight: 700;
  color: #181818;
}

.description {
  font-size: 14px;
  letter-spacing: 0.25px;
  text-align: center;
  line-height: 1.6;
}

.button {
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
}

/**/
.a-container {
  z-index: 100;
  left: calc(100% - 600px);
}

.b-container {
  left: calc(100% - 600px);
  z-index: 0;
}

.switch {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 400px;
  padding: 50px;
  z-index: 200;
  transition: 1.25s;
  background-color: #ecf0f3;
  overflow: hidden;
  box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #f9f9f9;
}

.switch__circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background-color: #ecf0f3;
  box-shadow: inset 8px 8px 12px #d1d9e6, inset -8px -8px 12px #f9f9f9;
  bottom: -60%;
  left: -60%;
  transition: 1.25s;
}

.switch__circle--t {
  top: -30%;
  left: 60%;
  width: 300px;
  height: 300px;
}

.switch__container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 400px;
  padding: 50px 55px;
  transition: 1.25s;
}

.switch__button {
  cursor: pointer;
}

.switch__button:hover {
  box-shadow: 6px 6px 10px #d1d9e6, -6px -6px 10px #f9f9f9;
  transform: scale(0.985);
  transition: 0.25s;
}

.switch__button:active, .switch__button:focus {
  box-shadow: 2px 2px 6px #d1d9e6, -2px -2px 6px #f9f9f9;
  transform: scale(0.97);
  transition: 0.25s;
}

/**/
.is-txr {
  left: calc(100% - 400px);
  transition: 1.25s;
  transform-origin: left;
}

.is-txl {
  left: 0;
  transition: 1.25s;
  transform-origin: right;
}

.is-z200 {
  z-index: 200;
  transition: 1.25s;
}

.is-hidden {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: 1.25s;
}

.is-gx {
  animation: is-gx 1.25s;
}

@keyframes is-gx {
  0%, 10%, 100% {
    width: 400px;
  }
  30%, 50% {
    width: 500px;
  }
}
</style>
