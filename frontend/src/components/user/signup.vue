<template>
  <v-app id="inspire">
    <v-main class="blue-grey lighten-4">
      <v-container style="max-width: 450px" fill-height>
        <v-layout align-center row wrap>
          <v-flex xs12>
            <v-card>
              <div class="pa-10">
                <h1 style="text-align: center" class="mb-10">Sign Up</h1>
                <form>
                  <v-text-field
                      label="Email"
                      prepend-inner-icon="mdi-email"
                      v-model="email"
                  />
                  <v-text-field
                      label="Profile Name"
                      prepend-inner-icon="mdi-account"
                      v-model="profileName"
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
                      class="mb-3 mt-4"
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
    profileName: '',
    password: '',
    confirm: ''
  }),
  methods: {
    async onCreateAccount() {
      if (this.email.length < 1 || this.password.length < 1 || this.profileName.length < 1) {
        alert('Signup Form Input')
        return
      }

      if (this.password !== this.confirm) {
        alert('Password Is Wrong')
        this.password = ''
        this.confirm = ''
        return
      }

      const res = await this.$http.post('/login/signup', { email: this.email, profileName: this.profileName, password: this.password })

      if (res.data) {
        const _msg = res.data.msg
        switch (_msg) {
          case 'signup':
            alert(_msg)
            this.$router.push('/login')
            break
          case 'ChangeEmail':
          case 'ChangeProfileName':
            alert(_msg)
            break
          default:
            break
        }
      }
    }
  }
}
</script>
