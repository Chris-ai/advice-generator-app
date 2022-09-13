<template>
  <main>
    <Advice />
  </main>
</template>

<script>
import Advice from "@/components/Advice.vue";

export default {
  name: "App",
  components: { Advice },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  --light-cyan: hsl(193, 38%, 86%);
  --neon-green: hsl(150, 100%, 66%);

  --grayish-blue: hsl(217, 19%, 38%);
  --dark-grayish-blue: hsl(217, 19%, 24%);
  --dark-blue: hsl(218, 23%, 16%);

  font-family: "Manrope", sans-serif;
  font-weight: 800;
}

body {
  background-color: var(--dark-blue);
  width: 100vw;
  height: 100vh;
}

#app {
  width: 100%;
  height: 100%;
  main {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    padding: 1rem;
  }
}

@keyframes shake {
  0% {
    transform: translateX(-5px);
  }

  10% {
    transform: translateX(5px);
  }

  20% {
    transform: translateX(-5px);
  }

  100% {
    transform: translateX(5px);
  }
}
</style>