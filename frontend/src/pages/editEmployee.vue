<template>
  <div class="row">
     <div class="col-md-9 col-md-offset-2 mt-create">
       <div class="panel panel-default">
         <div class="panel-heading">
           <h3 class="panel-title">Edit Employee</h3>
       </div>
         <div class="panel-body">
           <form @submit.prevent="submitForm" @keydown="form.onKeydown($event)">
             <div class="form-group">
               <label>Name</label>
               <input v-model="form.name" type="text" name="name" class="form-control"  placeholder="Nhap ten.... " :class="{ 'is-invalid': form.errors.has('name') }">
               <has-error :form="form" field="username"></has-error>
             </div>

             <div class="form-group">
               <label>Age</label>
               <input v-model="form.age" type="text" name="age" class="form-control" placeholder="Nhap tuoi.... " :class="{ 'is-invalid': form.errors.has('age') }">
               <has-error :form="form" field="age"></has-error>
             </div>

             <div class="form-group">
               <label>Sex</label>
                <select class="form-control" v-model="form.sex">
                  <option value="0">Nam</option>
                  <option value="1">Nữ</option>
                </select>
             </div>

             <div class="form-group">
               <label>Address</label>
               <input v-model="form.address" type="text" name="address" class="form-control" placeholder="Nhap dia chi.... " :class="{ 'is-invalid': form.errors.has('address') }">
               <has-error :form="form" field="address"></has-error>
             </div>

             <button :disabled="form.busy" type="submit" class="btn btn-success">Submit</button>
             <router-link :to="{ name: 'home' }" class="btn btn-info btn-cancel">Cancel</router-link>
           </form>
         </div>
     </div>
   </div>
 </div>
</template>
<script type="text/javascript">
  import axios from 'axios'
  import Vue from 'vue'
  import { Form, HasError, AlertError } from 'vform'

  Vue.component(HasError.name, HasError)
  Vue.component(AlertError.name, AlertError)
  export default {
     name: 'editEmployee',
     data () {
       return {
         form: new Form({
              name: '',
              age: '',
              address: '',
              sex : 0
          }),
       }
     },
     created() {
       //do something after creating vue instance
       axios.put('http://127.0.0.2:3000/employee/edit/' + this.$route.params.id).then((response) => {
          this.form.name = response.data.name
          this.form.age = response.data.age
          this.form.address = response.data.address
          this.form.sex = response.data.sex
       })

     },
     methods: {
       submitForm() {
         this.form.put('http://127.0.0.2:3000/employee/edit/' + this.$route.params.id).then((response) => {
           if(!response.data.status){
             this.$router.push({name : 'home'});
           }
         })
       }
     }
  }
</script>
<style lang="css" scoped>
  .mt-create{
    margin-top: 30px;
  }
  .btn-cancel{
    margin-left: 10px;
  }
</style>
