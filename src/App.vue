<template>
  <div id="app">
    <div id="nav">
      <!--
        When we navigate to that path, because of this route object here, Vue Router knows which component to load up.
        In this case, we're loading up the home component, but where do we put it ?
        That's where the 'router-view' comes in.
        This functions as a placeholder that is replaced by the route's actual component.
       -->

      <!-- 
        Our to-do list for this section includes :
        renaming Home.vue to EventList.vue
        Then customize the route for EventList,
        Update the 'About.vue',
        And reconfigure the About route.
      -->

      <router-link to="/">Events</router-link> |
      <router-link to="/aboutt">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size: 20px;
}
</style>
