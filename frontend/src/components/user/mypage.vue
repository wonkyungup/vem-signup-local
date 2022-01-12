<template>
  <v-app id="inspire">
    <v-main class="blue-grey lighten-4">
      <v-container style="max-width: 450px" fill-height>
        <v-layout align-center row wrap>
          <v-flex xs12>
            <v-card>
              <div class="pa-10">
                <h1 style="text-align: center" class="mb-10">Welcome MyPage</h1>
                <form>
                  <v-text-field
                      label="Email"
                      prepend-inner-icon="mdi-email"
                      v-model="$route.query.email"
                      disabled
                  />
                  <v-text-field
                      label="profile Name"
                      prepend-inner-icon="mdi-account"
                      v-model="$route.query.profileName"
                      disabled
                  />
                  <v-text-field
                      prepend-inner-icon="mdi-lock"
                      type="password"
                      label="Password"
                      v-model="$route.query.password"
                      disabled
                  />
                  <v-btn
                      @click="onLogout"
                      color="blue lighten-1 text-capitalize"
                      depressed
                      large
                      dark
                      block
                      class="mb-3 mt-4"
                  >
                    Logout
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
  name: 'mypage',
  methods: {
    onLogout () {
      this.$router.push('/login')
    }
  }
}
</script>
