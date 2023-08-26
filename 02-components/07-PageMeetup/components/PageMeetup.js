import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from '../../06-MeetupView/components/MeetupView.js';
import { fetchMeetupById } from '../meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  data() {
    return {
      isLoading: true,
      isError: false,
      meetup: null,
    };
  },

  methods: {
    async fetchMeetupData() {
      try {
        this.isLoading = true;
        this.meetup = await fetchMeetupById(this.meetupId);
        this.isError = false;
        this.error = '';
      } catch (error) {
        this.isError = true;
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },
  },

  watch: {
    meetupId: 'fetchMeetupData', // Вызов fetchMeetupData при изменении meetupId
  },

  created() {
    this.fetchMeetupData(); // Первоначальная загрузка данных
  },

  template: `
    <div class="page-meetup">
      <MeetupView v-if="!isLoading && !isError" :meetup="meetup" />

      <UiContainer v-if="isLoading">
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>

      <UiContainer v-else-if="isError">
        <UiAlert>{{ error }}</UiAlert>
      </UiContainer>
    </div>`,
});
