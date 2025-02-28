<script setup lang="ts">
import "animate.css"
import { appName } from '~~/constants'
import Header from '~~/layouts/header.vue';
import Footer from '~~/layouts/footer.vue';
useHead({
  title: appName,
  htmlAttrs: {
    lang: 'en',
  }
})
</script>

<template>
  <NuxtLoadingIndicator />
  <VitePwaManifest />
  <div flex flex-col items-center justify-center h-full id="app">
    <Header></Header>
    <!-- <Transition name="fade" appear enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__bounceOut"
      appear-active-class="animate__animated animate__bounceInDown"> -->
      <div flex-1 id="app-scroller" w-full of-x-hidden of-y-auto relative>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    <!-- </Transition> -->
    <Footer></Footer>
  </div>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
}
html.dark {
  background: #222;
  color: white;
}
/* 过渡动画 */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
