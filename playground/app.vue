<template>
  <div>
    Nuxt module playground!
    <Paystack :paystackkey="'pk_test_6df9dc2a9985f8ce09f09a436a7a5ddbe4b72b80'" :email="'naem@ga.cd'" :amount="3400" :reference="'eri9234j2h3489'"/>
  </div>
</template>

<script setup>
import Paystack from '../src/runtime/components/paystack.vue';

</script>
