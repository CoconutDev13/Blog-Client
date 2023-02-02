<script>
import { authStore } from '../stores/auth'

export default {
    setup() {
        console.log(authStore())
        const { user } = authStore();

        return {
            user,
        };
    }
}
</script>

<template>
    Profile View {{ JSON.stringify(user) }}
</template>

<style scoped>

</style>