
<script>
export default {
    data() {
        return {
            menuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
    },
};</script>

<template>
    <svg id="humburger" xmlns="http://www.w3.org/2000/svg" fill="white" width="48" height="48" viewBox="0 0 24 24" @click="toggleMenu">
        <path
            :d="menuOpen ? 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' : 'M3 18h13v-2H3v2zm0-5h13v-2H3v2zm0-7v2h13V6H3z'" />
    </svg>
</template>
<style scoped>
#humburger {
    display: none;
}
@media (max-width: 700px) {
    #humburger {
        display: block;
    }
}
</style>