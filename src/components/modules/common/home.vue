<template>
  <div class="card-container">
    <!-- <p v-t="'student_management'"></p> -->
    {{ homeData }}
    <Card v-for="card in cards" :key="card.id" :title="card.title" :description="card.description" />
  </div>
</template>

<script>
import Card from "@/components/common/Card.vue";
import axios from 'axios'

export default {
  name: 'HomePage',
  components: {
    Card,
  },
  data() {
    return {
      homeData: {},
      cards: [
        { id: 1, title: this.$t('student_management'), description:  "This is the student management description." },
        { id: 2, title: this.$t('teacher_management'), description: "This is the description for teacher management." },
        { id: 3, title: this.$t('parent_management'), description: "This is the description for parent management." },
        { id: 4, title: this.$t('class_management'), description: "This is the description for class management." },
        { id: 5, title: this.$t('section_management'), description: "This is the description for section management." },
      ],
    };
  },
  created() {
    console.log('HomePage created');
    this.loadData()
  },
  methods: {
    async loadData() {
        // Make the API call using Axios
        axios.get('http://127.0.0.1:8001/get-components')
        .then(response => {
          // Handle the successful response
          this.homeData = response.data;
        })
        .catch(error => {
          // Handle errors from the API
          console.error('Failed to fetch data:', error);
        });
  }
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
