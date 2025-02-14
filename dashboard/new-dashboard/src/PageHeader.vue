<template>
  <div class="flex justify-between pt-5 px-7 items-center">
    <div class="font-semibold">
      <span
        v-if="isSubMenuExists"
        class="text-xl"
      >
        Tests on
      </span>
      <button
        class="text-primary px-1 py-1 inline-flex text-xl items-center"
        type="button"
        @click="toggle"
      >
        {{ product.label }}
        <div class="pi pi-chevron-down text-sm ml-1" />
      </button>
      <Menu
        ref="menu"
        :model="items"
        :popup="true"
      />
      <span
        v-if="isSubMenuExists"
        class="text-xl"
      >
        aggregated for
      </span>
      <button
        v-if="isSubMenuExists"
        class="text-primary px-1 py-1 inline-flex text-xl items-center"
        type="button"
        @click="toggleSubMenu"
      >
        {{ selectedSubMenu.label }}
        <div class="pi pi-chevron-down text-sm ml-1" />
      </button>

      <Menu
        v-if="isSubMenuExists"
        ref="subMenu"
        :model="subItems"
        :popup="true"
      />
    </div>
    <div class="flex">
      <a
        href="https://youtrack.jetbrains.com/articles/IJPL-A-226/IJ-Perf-Manual"
        target="_blank"
        rel="noopener noreferrer"
      >
        <QuestionMarkCircleIcon class="w-7 h-7 text-primary" />
      </a>
      <img
        v-if="userPicture"
        :src="userPicture"
        class="w-7 h-7 ml-3"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from "primevue/menu"
import { computed, ref, useTemplateRef } from "vue"
import { useRouter } from "vue-router"
import { getNavigationElement, PRODUCTS } from "./routes"
import { useUserStore } from "./shared/useUserStore"

const currentPath = useRouter().currentRoute
const products = PRODUCTS.map((product) => ({ ...product, url: product.children[0].tabs[0].url })) //default to the first element in the first subproject
const items = ref(products)
const menu = useTemplateRef<Menu>("menu")
const product = computed(() => {
  return getNavigationElement(currentPath.value.path)
})

function toggle(event: MouseEvent) {
  menu.value?.toggle(event)
}

const isSubMenuExists = computed(() => product.value.children.length > 1)
const subItems = computed(() => product.value.children.map((child) => ({ ...child, url: child.tabs[0].url })))
const subMenu = useTemplateRef<Menu>("subMenu")

const selectedSubMenu = computed(() => {
  return (
    product.value.children.find((child) => {
      return child.url == currentPath.value.path.slice(0, Math.max(0, currentPath.value.path.lastIndexOf("/")))
    }) ?? product.value.children[0]
  )
})

const userPicture = computed(() => useUserStore().user?.picture)

function toggleSubMenu(event: MouseEvent) {
  subMenu.value?.toggle(event)
}
</script>
