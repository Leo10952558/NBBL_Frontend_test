<script lang="ts">
import axios from '@axios';
import { defineComponent } from 'vue';
import PlaidLink from "vue-plaid-link2";

export default defineComponent({
  name: 'Counter',
  components: { PlaidLink },
  setup() {
    const linkToken = ref('')

    const createLinkToken = async () =>{
      var response = await axios.post("http://localhost:8080/api/create_link_token")
      linkToken.value = response.data["link_token"]
    }

    const handleOnSuccess = async (public_token: string, metadata: any) => {
      // send token to client server
      var data = {
        public_token: public_token
      }
      var response = await axios.post("/api/exchange_public_token", data);
      console.log(response)
      //to do set accessToken into sessionStorage then move onto UI calls in other components.
      sessionStorage.setItem("accessToken", response.data["access_token"]);
    }

    const onLoad = () => {
      console.log("onLoad");
    }
    
    const onSuccess = (public_token, metadata) => {
      console.log("onSuccess", public_token, metadata);
    }

    const onExit = (err, metadata) => {
      console.log("onExit", err, metadata);
    }

    const onEvent = (eventName, metadata) => {
      console.log("onEvent", eventName, metadata);
    }

    watchEffect(createLinkToken)

    return {
      linkToken: linkToken,
      handleOnSuccess: handleOnSuccess,
      onLoad: onLoad,
      onSuccess: onSuccess,
      onExit: onExit,
      onEvent: onEvent
    };
  },
});
</script>

<template>
  <div>
    <PlaidLink
      v-if="linkToken.toString() !== ''"
      env="sandbox"
      public_key="f7b497c001d227931dafa8f0aee86f"
      clientName="Test App"
      :link_token="linkToken.toString()"
      :products="['auth', 'transactions']"
      :onLoad="onLoad"
      :onSuccess="handleOnSuccess"
      :onExit="onExit"
      :onEvent="onEvent"

    >
      <button>Open Link Slot</button>
    </PlaidLink>
  </div>
</template>

