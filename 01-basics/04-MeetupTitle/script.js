import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

createApp({
  data() {
    return {
      meetupTitle: null,
      meetupId: null,
    }
  },

  methods: {
    handleCheckboxChange(meetupId) {
      fetchMeetupById(meetupId);
    },
  },

  watch: {

  }
}).mount("#app");
