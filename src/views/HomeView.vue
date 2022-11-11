<template lang="">
  <div>
    <div v-for="pet in pets" :key="pet.id">
      <div>
        type: {{pet.type}}
      </div>
      <div>
        name: {{pet.name}}
      </div>
      <div>
        age: {{pet.age}}
      </div>
      <div v-if="pet.isVaccinated">
        hello
      </div>
    </div>
  </div>
</template>

<script>
import { usePetsStore } from '../stores/pets';

export default {
  data() {
    return {
      pets: [],
    };
  },
  async mounted() {
    await usePetsStore().fetchPets();
    this.pets = usePetsStore().getPets;
  },
}
</script>

<style lang="">
  
</style>