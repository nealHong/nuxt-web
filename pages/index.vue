<script setup lang="ts">
const { t, n } = useI18n();
const online = useOnline()
console.log(t('Popular Movies'))
</script>

<template>
  <div p-5>
    <Logos mb-6 />
    {{ t('Popular Movies') }}

    <ClientOnly>
      <Suspense>
        <PageView v-if="online" />
        <div v-else text-gray:80>
          You're offline
        </div>
        <template #fallback>
          <div italic op50>
            <span animate-pulse>Loading...</span>
          </div>
        </template>
      </Suspense>
      <template #fallback>
        <div op50>
          <span animate-pulse>...</span>
        </div>
      </template>
    </ClientOnly>
    <NuxtLink class="m-3 text-sm btn" to="/about">
      关于我们
    </NuxtLink>
  </div>
</template>
