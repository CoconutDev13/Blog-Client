import { defineStore } from "pinia";

export const authStore =  defineStore({
  id: 'auth',
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
  }
});
