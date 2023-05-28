<script lang="ts">
import { Product } from '@/@core/types';
import { loadStripe } from '@stripe/stripe-js';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Stripe',
  setup() {
    const product = ref<Product>({
      name: "Go FullStack with KnowledgeHut", 
      price: 1000, 
      productOwner: "KnowledgeHut", 
      description: 
        "This beginner-friendly Full-Stack Web Development Course is offered online in blended learning mode, and also in an on-demand self-paced format.", 
      quantity: 1, 
    })

    const makePayment = async () => { 
      const stripe = await loadStripe('pk_test_baNqhObwMgaMWrnQKEEbQ226'); 
      const body = {
        product: {
          name: "Go FullStack with KnowledgeHut", 
          price: 1000, 
          productOwner: "KnowledgeHut", 
          description: 
            "This beginner-friendly Full-Stack Web Development Course is offered online in blended learning mode, and also in an on-demand self-paced format.", 
          quantity: 1, 
        }
      }; 
      const headers = { 
        "Content-Type": "application/json", 
      }; 
  
      const response = await fetch( 
        "http://localhost:8080/api/create-checkout-session", 
        { 
          method: "POST", 
          headers: headers, 
          body: JSON.stringify(body), 
        } 
      ); 
  
      const session = await response.json(); 
  
      const result = stripe.redirectToCheckout({ 
        sessionId: session.id, 
      }); 
  
      if (result.error) { 
        console.log(result.error); 
      } 
    }

    return {
      product: product,
      makePayment: makePayment
    };
  },
});
</script>

<template>
  <div>
    <div>
      Name: {{ product.name }}
    </div>
    <div>
      Description: {{ product.description }}
    </div>
    <div>
      price: {{ product.price }}
    </div>
    <button @click="makePayment">
      Buy
    </button>
  </div>
</template>

