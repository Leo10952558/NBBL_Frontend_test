<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '../stores/user';



export default defineComponent({
  name: 'Counter',
  setup() {
    const userStore = useUserStore()

    return {
      userStore: userStore,
      increment: userStore.increment,
      decrement: userStore.decrement,
      reset: userStore.reset,
    };
  },
});
</script>

<template>
  <div>
    <div>
      <p>Token Balance: {{ userStore.token_amount || 0 }}</p>
      <button id="decrement_button" variant="text"  @click="userStore.decreaseBalance">
        Decrement
      </button>
      <button id="decrement_error_button" variant="text"  @click="userStore.decreaseToken()">
        Error Decrement
      </button>
    </div>
    <p v-if="userStore.errorVisible">
      Not enough token
    </p>
  </div>
</template>

