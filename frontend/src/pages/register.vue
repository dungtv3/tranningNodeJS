<template>
  <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
      <div class="panel panel-info">
          <div class="panel-heading">
              <div class="panel-title">Sign In</div>
              <div style="float:right; font-size: 80%; position: relative; top:-10px">
                <router-link :to="{ name: 'login'}">Login</router-link>
              </div>
          </div>

          <div style="padding-top:30px" class="panel-body">
              <div id="login-alert" class="alert alert-danger col-sm-12" v-if="errors != ''">
                <p>{{ errors }}</p>
              </div>
              <form class="form-horizontal" @submit.prevent="submitForm" @keydown="form.onKeydown($event)">
                  <div style="margin-bottom: 25px" class="input-group">
                      <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                      <input v-model="form.username" id="login-username" type="text" class="form-control" name="username" value="" placeholder="username or email">
                       <has-error :form="form" field="username"></has-error>
                  </div>
                  <div style="margin-bottom: 25px" class="input-group">
                      <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                      <input v-model="form.password" id="login-password" type="password" class="form-control" name="password" placeholder="password">
                      <has-error :form="form" field="password"></has-error>
                  </div>
                  <div style="margin-top:10px" class="form-group">
                      <!-- Button -->
                      <div class="col-sm-12 controls">
                          <button id="btn-login" type="submit" class="btn btn-success"> Login  </button>
                      </div>
                  </div>
                  <div class="form-group">
                      <div class="col-md-12 control">
                          <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%">
                              Don't have an account!
                          </div>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
export default {
  name: "",
  data(){
      return {
        form : new Form({
          username : '',
          password : '',
        }),
        errors : ''
      }
  },
  methods: {
    submitForm() {
        this.form.post('http://127.0.0.2:3000/register').then((response) => {
            if(response.data.status){
              localStorage.setItem('token', response.data.token);
              this.$router.push({name : 'home'});
            }else{
              this.errors = response.data.message
            }
        });
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
