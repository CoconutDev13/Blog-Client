<script>
import {APIS} from '../config'
import { authStore } from '../stores/auth';

export default {
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        async login() {
            const res = await fetch(APIS.login, {
                method: 'POST',
                body: JSON.stringify({
                    username: this.username,
                    password: this.password
                }),
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if(res.status !== 200) return
            
            const { _links: links, redirect } = await res.json()
            
            const userDataResponse = await fetch(links.userData, {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const userData = await userDataResponse.json().catch(error => console.error(error))
            // console.log('Login view' + authStore().setUser)
            authStore().setUser(userData)

            this.$router.push(redirect)            
        }
    }
}
</script>

<template>
    <div class="wrapper">
        <form @submit.prevent="login">
            <input v-model="username" type="text" placeholder="Username" required />
            <input v-model="password" type="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
        <RouterLink to="/signup">Signup</RouterLink>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
}
form {
    max-width: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
}

form > * ~ * {
    margin-top: 1rem;
}

form input {
    border: 2px solid var(--middleground);
    padding: 0.5rem;
    font-size: 105%;
    color: var(--text);
    transition: border-color 0.25s ease-in-out;
}

form input:focus {
    border-color: var(--soft-highlight);
}

form button {
    border: none;
    padding: 0.5rem;
    font-size: 105%;
    color: var(--text);
    background: var(--highlight);
    transition: background 0.25s ease-in-out;
}

form button:hover {
    background: var(--soft-highlight);
}

</style>