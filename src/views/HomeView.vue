<script setup>
import HomeMembers from "../components/HomeMembers.vue"
</script>

<template>
  <header
    class="header-img"
    :style="{ backgroundPosition: `50% ${header_scroll}` }"
  ></header>
  <section class="my-2">
    <div class="container w-[95vw] mx-auto pt-5">
      <h1 class="main-title text-slate-800 pl-5">Members</h1>
    </div>
    <HomeMembers />
  </section>
  <section class="my-2 bg-parallax py-16">
    <h1 class="main-title pb-8 center">About</h1>
    <p>
      Re:Memories adalah agensi independen yang melahirkan Virtual Youtuber
      sebagai teman atau bahkan keluarga. Kami berfokus memberikan sensasi
      hiburan baru yang tidak hanya menonton secara satu arah, tetapi juga
      memperhatikan komunikasi dua arah dengan konsep virtual.
    </p>

    <p>
      Tujuan kami adalah membuat memori yang nyata dengan menggunakan media
      virtual untuk berinteraksi dengan dunia.
    </p>
  </section>
  <section class="my-2 container w-[95vw] mx-auto text-slate-800 py-5">
    <h1 class="main-title pb-8 text-slate-800 pl-5">Partner</h1>
    <p></p>
  </section>
  <section class="my-2 bg-parallax py-6">
    <div class="container w-[95vw] mx-auto">
      <h1 class="main-title pl-5 pb-8">News</h1>
    </div>
  </section>
  <section
    class="my-2 container w-[95vw] mx-auto text-slate-800 py-6"
    id="contact"
  >
    <h1 class="main-title text-slate-800 center pb-8">Contact</h1>
    <p>
      Jika ada pertanyaan, kolaborasi, atau projek terkait dengan Re:Memories,
      silahkan hubungi kami melalui form di samping atau dapat langsung
      mengirimkan email ke
      <a
        href="mailto:contact@rememories.id"
        class="text-sky-500 hover:text-sky-700"
        >contact@rememories.id</a
      >
    </p>
    <form method="post" class="contact-form">
      <div class="contact-form-group">
        <input
          type="text"
          name="name"
          id="name"
          class="contact-form-input"
          placeholder=" "
        />
        <label for="name" class="contact-form-label required">Name</label>
        <small class="contact-form-error">
          Please enter your name (min. 3 characters)
        </small>
      </div>
      <div class="contact-form-group">
        <input
          type="text"
          name="company"
          id="company"
          class="contact-form-input"
          placeholder=" "
        />
        <label for="company" class="contact-form-label"
          >Company / Organization</label
        >
      </div>
      <div class="contact-form-group">
        <input
          type="text"
          name="email"
          id="email"
          class="contact-form-input"
          placeholder=" "
        />
        <label for="email" class="contact-form-label required">Email</label>
        <small class="contact-form-error">
          Please enter a valid email address
        </small>
      </div>
      <div class="contact-form-group__area">
        <textarea
          name="message"
          id="message"
          class="contact-form-input"
          placeholder=" "
        ></textarea>
        <label for="message" class="contact-form-label required">Message</label>
        <small class="contact-form-error">
          Please enter your message (min. 10 characters)
        </small>
      </div>
      <div class="contact-form-group">
        <button type="submit" class="contact-form-button">Send</button>
      </div>
    </form>
  </section>
</template>

<script>
import { isEmail } from "validator"

export default {
  data() {
    return {
      header_scroll: "0",
    }
  },
  mounted() {
    document.title = "Re:Memories - Indepedent Virtual YouTuber Agency"
    window.addEventListener("scroll", () => {
      // when media query min-width: 1024px
      if (window.innerWidth > 1024) {
        // when scroll down, scroll background image to up
        if (window.scrollY > 0) {
          this.header_scroll = `${Math.min(
            250,
            50 + Math.round(window.scrollY / 3)
          )}%`
        } else {
          this.header_scroll = "50%"
        }
      } else {
        // when scroll down, scroll background image to up
        if (window.scrollY > 0) {
          this.header_scroll = `${Math.max(
            -60,
            0 - Math.round(window.scrollY / 10)
          )}%`
        } else {
          this.header_scroll = "0%"
        }
      }
    })

    const contactInputs = document.querySelectorAll(".contact-form-input")
    const contactButton = document.querySelector(".contact-form-button")

    contactButton.disabled = true

    contactInputs.forEach((input) => {
      input.addEventListener("blur", (e) => {
        const requiredTarget =
          e.target.name !== "company" && e.target.value === ""
        const nameTarget = e.target.name === "name" && e.target.value.length < 3
        const emailTarget =
          e.target.name === "email" && !isEmail(e.target.value)
        const messageTarget =
          e.target.name === "message" && e.target.value.length < 10

        if (requiredTarget || nameTarget || emailTarget || messageTarget)
          e.target.parentElement.classList.add("is-invalid")
      })

      // when input add text
      input.addEventListener("input", (e) => {
        const requiredTarget =
          e.target.name !== "company" && e.target.value === ""
        const nameTarget = e.target.name === "name" && e.target.value.length < 3
        const emailTarget =
          e.target.name === "email" && !isEmail(e.target.value)
        const messageTarget =
          e.target.name === "message" && e.target.value.length < 10

        if (requiredTarget || nameTarget || emailTarget || messageTarget)
          e.target.parentElement.classList.add("is-invalid")
        else e.target.parentElement.classList.remove("is-invalid")

        contactButton.disabled = !![...contactInputs].find((i) => {
          const required = i.name !== "company" && i.value === ""
          const name = i.name === "name" && i.value.length < 3
          const email = i.name === "email" && !isEmail(i.value)
          const message = i.name === "message" && i.value.length < 10

          return required || name || email || message
        })
      })
    })
  },
}
</script>

<style lang="scss" scoped>
.header-img {
  background-image: url("/src/assets/web-banner.jpg");
  @apply lg:h-screen w-screen bg-fixed bg-contain lg:bg-cover bg-no-repeat bg-top lg:bg-center;

  // resize height to 59 : 36 ratio
  aspect-ratio: 59 / 36;
  @media (min-width: 1024px) {
    aspect-ratio: auto;
  }
}

p {
  @apply w-[95vw] sm:w-[85vw] lg:w-[75vw] xl:w-[70vw] text-center font-semibold mb-[1.5vmax] mx-auto;
  font-size: clamp(0.8rem, 1.4vmax, 1.4vmax);
}

// make form like android
.contact-form {
  @apply flex flex-col items-center justify-center container mx-auto rounded-lg shadow-md px-4 py-2;

  &-group {
    @apply relative w-full /*h-16*/ h-12 my-2 transition-all duration-200 ease-in-out;

    &__area {
      @apply relative w-full /*h-52*/ h-48 my-2;

      .contact-form-input {
        @apply h-48;
      }

      .contact-form-error {
        @apply mt-48;
      }
    }

    &.is-invalid,
    &__area.is-invalid {
      @apply mb-5;

      .contact-form-error {
        @apply opacity-100;
      }

      .contact-form-input {
        @apply border-red-500;

        & + .contact-form-label {
          @apply text-red-300;
        }

        &:focus {
          & + .contact-form-label {
            @apply text-red-600;
          }
        }
      }

      .contact-form-input:not(:placeholder-shown).contact-form-input:not(:focus)
        + .contact-form-label {
        @apply text-red-400;
      }
    }
  }

  &-label {
    @apply absolute left-4 top-2 p-1 bg-white text-gray-500 transition-all duration-300;

    &.required {
      @apply after:content-['*'] after:text-red-500 after:pl-0.5;
    }
  }

  &-error {
    @apply mt-12 ml-2 block opacity-0 text-red-500 transition-all duration-200 ease-in-out;
  }

  &-input {
    @apply absolute top-0 left-0 w-full h-12 border-[1px] resize-none rounded-md outline-none p-4 bg-transparent z-[1];

    &:focus {
      @apply border-[1.5px] border-blue-500;

      & + .contact-form-label {
        @apply -top-[.825rem] left-[.8rem] text-blue-500 text-xs z-[4] font-semibold;
      }
    }
  }

  .contact-form-input:not(:placeholder-shown).contact-form-input:not(:focus) {
    & + .contact-form-label {
      @apply -top-[.825rem] left-[.8rem] text-gray-500 text-xs z-[4] font-semibold;
    }
  }

  &-button {
    @apply bg-sky-500 text-white px-6 py-2 text-lg shadow-md -translate-y-0.5 rounded-md hover:shadow-none hover:translate-y-0 transition duration-200 font-semibold disabled:opacity-50
    disabled:hover:shadow-md disabled:hover:-translate-y-0.5;
  }
}
</style>
