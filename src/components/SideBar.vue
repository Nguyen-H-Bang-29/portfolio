<template>
  <div>
    <div v-for="tab in tabs" :key="tab.name">
      <NuxtLink class="side-bar-item" :to="tab.link" :class="tab.link === current_tab ? 'is_selected' : ''">
        <div v-if="tab.link === current_tab" class="current-tab-background"/>
        <i class="fas" :class="tab.icon"></i>
        <p>{{ tab.name }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "SideBar",
  computed: {
    tabs() {
      return this.$store.state.pages.list
    },
    current_tab() {
      return this.$route.path;
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/layouts/styles/variables";
@import 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css';

.side-bar {
  display: flex;
  background-color: $prim-color;
  overflow: hidden;
  width: $side-bar--width;
  flex-direction: column;
  transition: width 200ms ease-in;

  &:hover {
    width: 200px;

    .side-bar-item .current-tab-background {
      width: calc(200px - 1rem);
    }
  }

  .side-bar-item {
    z-index: 2;
    white-space: nowrap;
    align-content: center;
    padding: 1rem 0;
    &.is_selected {
      p, .fas {
        opacity: 1;
      }
    }

    &:hover {
      cursor: pointer;

      i, p {
        opacity: 1;
      }
    }

    * {
      width: min-content;
      margin: 0;
    }

    display: flex;
    text-decoration: none;

    .current-tab-background {
      z-index: 1;
      position: absolute;
      background-color: white;
      transform: translate(0.5rem, -0.5rem);
      opacity: 0.15;
      height: 2.5rem;
      width: 3rem;
      border-radius: 0.5rem;
      transition: width 200ms ease-in;
    }

    .fas {
      z-index: 2;
      opacity: 0.7;
      aspect-ratio: 2;
      font-size: $side-bar--icon-font-size;
      height: 1rem;
      text-align: center;
      padding: 0 1rem;
      color: $light-text-color;
    }

    p {
      z-index: 2;
      opacity: 0.7;
      font-family: $main-font-family;
      font-weight: 700;
      color: $light-text-color;
    }

    color: $light-text-color;
  }
}
</style>
