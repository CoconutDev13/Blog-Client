<script>
export default {
    data() {
        return {
            username: "",
            password: "",
        }
    },
    methods: {
        async signup() {
            const user = await fetch('http://localhost:4000/api/signup', {
                method: 'POST',
                body: JSON.stringify({
                    username: this.username,
                    password: this.password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const body = await user.json()

            console.log(body)
        }
    }
}
</script>

<template>
    <form @submit.prevent="signup">
        <input v-model="username" type="text" placeholder="Username" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Signup</button>
    </form>
    <RouterLink to="/login">Login</RouterLink>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
</style>