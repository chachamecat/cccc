<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      You have to login first :)
    </p>
     <v-layout column>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h2>Don't have yet?</h2>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3 mt-3>
      <form>
        <v-layout column>
          <v-flex>
            <v-text-field
              name="email"
              label="Email"
              id="email"
              type="email"
              required></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              name="password"
              label="Password"
              id="password"
              type="password"
              required></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              name="confirmPassword"
              label="Confirm Password"
              id="confirmPassword"
              type="password"
              ></v-text-field>
          </v-flex>
          <v-flex class="text-xs-center" mt-5>
            <v-btn primary type="submit">Sign Up</v-btn>
          </v-flex>
        </v-layout>
      </form>
    </v-flex>
  </v-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SingUp',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 65px 0 0;
}
ul {
  list-style-type: none;
  padding: 0
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
