<template>
  <!-- 
  Our refactoring to do list includes he following items.
  First we'll want to move our events data to the parent(home.vue) in this case.
  Because we're gonna have a whole collection of events. 
  So we want the parent to have that collection and to be creating a new event card for each event.
  Which leads us to the second to do item, where we'll set up the parent to create our event card components
  based on that event data that it has feednig each of those event cards, its own event through a 'prop'.
  Then finally, to make things look good, we're gonna wrap all those event cards in a Flexbox container.

  -->
  <div class="event-card">
    <span>@ {{ eventt.time }} on {{ eventt.date }}</span>
    <h4>{{ eventt.title }}</h4>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    eventt: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Scoped attribute allows us to specify and isolate styles to our given component. -->

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
