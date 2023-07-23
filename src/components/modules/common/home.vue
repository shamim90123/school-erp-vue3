<template>
  <div class="card-container">
    <p v-t="'greeting'"></p>
    <Card v-for="card in cards" :key="card.id" :title="card.title" :description="card.description" />
  </div>
</template>

<script>
import Card from "@/components/common/Card.vue";

export default {
  name: 'HomePage',
  components: {
    Card,
  },
  data() {
    return {
      cards: [
        { id: 1, title: "Card 1", description: "This is the description for Card 1." },
        { id: 2, title: "Card 2", description: "This is the description for Card 2." },
        { id: 3, title: "Card 3", description: "This is the description for Card 3." },
        { id: 4, title: "Card 4", description: "This is the description for Card 4." },
        { id: 5, title: "Card 5", description: "This is the description for Card 5." },
      ],
    };
  },
  methods: {
  }
};
</script>

<style scoped>
.card-container {
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* display: grid; */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
</style>
