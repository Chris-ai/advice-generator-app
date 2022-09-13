<template>
  <div class="container">
    <p class="advice">Advice #{{ adviceId }}</p>
    <p class="quote">"{{ advice }}"</p>

    <svg
      v-show="!mobile"
      width="444"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fill-rule="evenodd">
        <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
        <g transform="translate(212)" fill="#CEE3E9">
          <rect width="6" height="16" rx="3" />
          <rect x="14" width="6" height="16" rx="3" />
        </g>
      </g>
    </svg>

    <svg
      v-show="mobile"
      width="295"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fill-rule="evenodd">
        <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
        <g transform="translate(138)" fill="#CEE3E9">
          <rect width="6" height="16" rx="3" />
          <rect x="14" width="6" height="16" rx="3" />
        </g>
      </g>
    </svg>

    <div class="advice-btn">
      <button @click="getAdvice">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import ApiService from "@/services/apiService.js";

export default {
  data() {
    return {
      adviceId: 131,
      advice: "",
      mobile: false,
    };
  },
  methods: {
    getAdvice() {
      ApiService.getAdvice()
        .then((res) => {
          //   console.log(res.data.slip);
          this.adviceId = res.data.slip.id;
          this.advice = res.data.slip.advice;
        })
        .catch((e) => {
          console.log(e);
          alert("Ups, something went wrong :/");
        });
    },
    checkScreenWidth() {
      let width = document.body.clientWidth;

      if (width > 500) {
        this.mobile = false;
      } else {
        this.mobile = true;
      }
    },
  },
  mounted() {
    this.getAdvice();
    window.addEventListener("resize", this.checkScreenWidth);
  },
};
</script>

<style lang="scss">
.container {
  width: 100%;
  max-width: 500px;
  height: 300px;
  background: var(--dark-grayish-blue);
  padding: 1rem;
  text-align: center;
  border-radius: 1rem;
  position: relative;

  .advice {
    font-size: 12px;

    color: var(--neon-green);
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .quote {
    font-size: 20px;
    margin: 2rem 0;
    height: 40%;
    color: var(--light-cyan);
  }

  .advice-btn {
    button {
      height: 50px;
      width: 50px;
      border-radius: 50em;
      background: var(--neon-green);
      border: none;
      outline: none;
      // text-align: center;
      display: grid;
      place-items: center;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -25px;
      margin: auto;
      cursor: pointer;
      transition: 0.2s ease all;
      &:hover {
        box-shadow: 0 0 12px 2px var(--neon-green);
      }
    }
  }
}
</style>