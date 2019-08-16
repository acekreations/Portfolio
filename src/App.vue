<template>
  <div id="app" class="mainContainer">
    <Header />
    <router-view v-bind:data="data" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import data from "./data.json";

export default {
  name: "app",
  components: {
    Header,
    Footer
  },
  data: function() {
    return {
      data: data
    };
  }
};
</script>

<style>
body {
  background: #181818;
}

::selection {
  background: #c898ff; /* WebKit/Blink Browsers */
}

h1,
h2,
h3,
h4,
h5,
p,
a {
  color: #eaeaea;
  font-family: "Roboto Mono", monospace;
  font-size: 17px;
}

h3,
h4,
h5 {
  font-size: 15px;
  font-weight: 400;
}

.mainContainer {
  max-width: 600px;
  margin: 0px auto;
}

h1 {
  position: relative;
  display: inline-block;
  padding: 20px 0 18px;
  margin: 0;
  overflow: hidden;
}

h1::after {
  content: "====================================================================================================";
  position: absolute;
  bottom: 0px;
  left: 0;
}

h2 {
  margin: 10px 0px 5px 0px;
  text-transform: capitalize;
}

h2::before {
  content: "## ";
}

h3 {
  margin: 5px 0px;
  color: rgba(244, 244, 244, 0.5);
}

h4 {
  margin: 10px 0px 30px 0px;
  color: rgba(244, 244, 244, 0.5);
}

h4::before {
  content: url(assets/code.svg) " ";
}

h5 {
  margin: 30px 0px 0px 0px;

  position: relative;
  display: inline-block;
  padding: 20px 0 18px;
  overflow: hidden;
}

h5::before {
  content: "====================================================================================================";
  position: absolute;
  top: 0px;
  left: 0;
}

nav a {
  color: #ff9300;
}

a {
  margin-right: 14px;
  text-decoration: none;
  border-bottom: 1px solid #a75afe;
}

a::after {
  content: " " url(assets/link.svg);
}

a:hover {
  background: #a75afe;
}

a:focus {
  outline: none;
  background: #a75afe;
}

p {
  margin-top: 30px;
}

img {
  max-width: 100%;
  margin-top: 30px;
  max-height: 400px;
}
</style>
