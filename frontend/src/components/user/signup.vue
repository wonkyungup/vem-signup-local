<template>
  <v-app id="inspire">
    <v-main class="blue-grey lighten-4">
      <!-- Login Component -->
      <v-container style="max-width: 450px" fill-height>
        <v-layout align-center row wrap>
          <v-flex xs12>
            <v-card>
              <div class="pa-10">
                <h1 style="text-align: center" class="mb-10">Login</h1>
                <form>
                  <v-text-field
                      label="Email"
                      prepend-inner-icon="mdi-account"
                      v-model="email"
                  />
                  <v-text-field
                      prepend-inner-icon="mdi-lock"
                      type="password"
                      label="Password"
                      v-model="password"
                  />
                  <v-text-field
                      prepend-inner-icon="mdi-alert-circle-check"
                      type="password"
                      label="Confirm Password"
                      v-model="confirm"
                  />
                  <v-btn
                      @click="onCreateAccount"
                      color="blue lighten-1 text-capitalize"
                      depressed
                      large
                      dark
                      block
                      class="mb-3"
                  >
                    Sign Up
                  </v-btn>
                </form>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'signup',
  data: () => ({
    email: '',
    password: '',
    confirm: ''
  }),
  methods: {
    clearValue () {
      this.email = ''
      this.password = ''
      this.confirm = ''
    },
    onCreateAccount() {
      console.log(this.email, this.password, this.confirm)
      this.clearValue()
    }
  }
}
</script>
