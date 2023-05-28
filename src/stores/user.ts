import { decreaseToken, decreaseTokenBalance } from "@/api";
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    id: 0,
    username: '',
    email: '',
    role: '',
    token_amount: 100,
    balance_amount: 0,
    errorVisible: false
  }),
  actions: {
    set(id: number, username:string, email:string, role: string, token_amount:number, balance_amount: number) {
      this.id = id
      this.username = username
      this.email = email
      this.role = role
      this.token_amount = token_amount
      this.balance_amount = balance_amount
    },

    setBalance(token_amount:number) {
      this.token_amount = token_amount
    },

    increment() {
      this.token_amount += 10
    },

    decrement() {
      this.token_amount -= 10
    },

    reset() {
      this.id = 0
      this.username = ''
      this.email = ''
      this.role = ''
      this.token_amount = 0
      this.balance_amount = 0
    },

    async decreaseBalance() {
      await decreaseTokenBalance();
      this.token_amount--;
    },

    async decreaseToken() {
      const res = await decreaseToken(this.token_amount, 10000);

      if(!res) this.errorVisible = true
      else this.errorVisible = false
    },
  },
});