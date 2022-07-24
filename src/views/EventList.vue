<template>
  <div class="events">
    <h1>Events For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
// import axios from 'axios' // We don't need that anymore
import EventService from '@/services/EventService.js'

export default {
  name: 'Home',
  components: {
    EventCard
  },
  data() {
    return {
      events: null
    }
  },

  //  Now in order to trigger that API call,
  //  we're going to use a view component lifecycle hook : 'created'.
  //  As the name suggests, a component has a lifecycle, with different hooks or methods.
  //  We're focused on this 'created' hook here.
  //  When our component is created, we want to e calling out to our server for those events.

  created() {
    // It's important to note here that 'Axios' is proms-based and asynchronous.
    // In other words, if we need to be doing something with the response we get back from this 'Axios' get request,
    // we need to make sure that we're waiting for that response to resolve.

    EventService.getEvents()
      .then(response => {
        // console.log('events : ', response.data)
        this.events = response.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
