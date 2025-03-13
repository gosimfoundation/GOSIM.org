<template>
  <div class="page-wrapper">
    <Navbar />

    <HomeHeader />

    <!-- <Supporters /> -->

    <Pillars />

    <Founders />

    <EventsUpcoming />

    <EventsPast />

    <FooterComponent />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import HomeHeader from "../components/HomeHeader.vue";
import Supporters from "../components/Supporters.vue";
import Founders from "../components/Founders.vue";
import Pillars from "../components/Pillars.vue";
import EventsUpcoming from "../components/EventsUpcoming.vue";
import EventsPast from "../components/EventsPast.vue";
import FooterComponent from "../components/Footer.vue";

export default {
  name: "MainApp",
  components: {
    Navbar,
    HomeHeader,
    Supporters,
    Founders,
    Pillars,
    EventsUpcoming,
    EventsPast,
    FooterComponent,
  },
};
</script>