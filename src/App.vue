<script setup>
  import Header from './components/Header.vue'
  import IconHamburger from './components/icons/IconHamburger.vue';
</script>

<template>
  <div class="mainLayout">
    <div class="sidebarLayout">
      <Header></Header>
    </div>
    <div class="mainContent">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
  .mainLayout {
    display: flex;
    flex-shrink: 1;
  }

  .sidebarLayout{
    display: flex;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.73);
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    min-width: 240px;
    background: var(--middleground);
  }

  .mainContent {
    padding: 1rem;
  }

  footer {
    text-align: center;
    padding: 0.5rem;
    font-size: 14px;
    
    background-color: var(--semimiddleground);
}

@media (max-width: 700px) {
  .sidebarLayout {
    min-width: fit-content;
  }
}
</style>
