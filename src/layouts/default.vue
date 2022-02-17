<template>
  <div class="screen">
    <div class="navigation">
      <SideBar class="side-bar"/>
    </div>
    <div class="content">
      <Nuxt class="main-content"/>
      <Note class="note-site"/>
    </div>
  </div>
</template>
<script>
import SideBar from "../components/SideBar";
import Note from "../components/Note";

export default {
  components: {Note, SideBar}
}
</script>

<style lang="scss">
@import "src/layouts/styles/variables";

html, body {
  margin: 0;
  padding: 0 !important;
}

.screen {
  height: 100vh;
  width: 100vw;

  .navigation {
    position: absolute;
    height: 100vh;
    display: flex;
    flex-direction: column;

    .side-bar {
      flex: 1;
    }
  }

  .content {
    overflow-y: hidden;
    display: flex;
    margin-left: $side-bar--width;

    .main-content {
      flex: 1;
      overflow-y: scroll;
      height: 100vh;
    }

    .note-site {
      overflow-y: scroll;
      width: 30vw;
      height: 100vh;
      background-image: var(--gradient);
    }
  }
}
</style>
