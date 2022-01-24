<template>
  <v-app id="inspire">
    <v-main class="blue-grey lighten-4">
      <v-container style="max-width: 450px" fill-height>
        <v-layout align-center row wrap>
          <v-flex xs12>
            <v-card>
              <div class="pa-10">
                <h1 style="text-align: center" class="mb-10">Login</h1>
                <form>
                  <v-text-field
                    label="Email"
                    prepend-inner-icon="mdi-email"
                    v-model="email"
                  />
                  <v-text-field
                    prepend-inner-icon="mdi-lock"
                    type="password"
                    label="Password"
                    v-model="password"
                  />

                  <v-btn
                    color="blue lighten-1 text-capitalize"
                    depressed
                    large
                    block
                    dark
                    class="mb-3"
                    @click="onLogin"
                  >
                    Login
                  </v-btn>
                  <v-btn
                    @click="onSignup"
                    color="blue lighten-1 text-capitalize"
                    depressed
                    large
                    block
                    dark
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
  const STR_LOGIN_ERROR = 'login_error'

  export default {
    name: 'login',
    data: () => ({
      email: '',
      password: '',
    }),
    methods: {
      async onLogin () {
        if (this.email.length < 1 || this.password.length < 1) {
          alert('email & password Input')
          return
        }

        const res = await this.$http.post('/login', { email: this.email, password: this.password })
        const data = res.data
        if (data) {
          switch (data.index) {
            case 0:
              alert(`Your email or password is incorrect - ${STR_LOGIN_ERROR}`)
              this.password = ''
              break
            case 1:
              this.$router.push({
                path: '/mypage',
                name: 'mypage',
                query: data.content[0]
              })
              break
            default:
              break
          }
        }
      },
      onSignup() {
        this.$router.push('/login/signup')
      }
    }
  }
</script>
