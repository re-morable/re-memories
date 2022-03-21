import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

if (import.meta.hot) {
  import.meta.hot.accept("./../posts/test.md", () => {
    console.log("hot reloading posts")
  })
}

const app = createApp(App)

app.use(router)

app.mount("#app")
