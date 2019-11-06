<template>
  <div class="wp-content">
    <router-link :to="{ name: 'create' }" class="btn btn-success btn-add"> THÊM </router-link>
    <table class="table table-bordered">
      <thead>
        <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Gioi tinh</th>
            <th>Địa chỉ</th>
            <th>Sửa</th>
            <th>Xóa</th>
        </tr>
      </thead>
       <tbody>
        <tr v-for="(emloy,index) in employee" :key="emloy.id">
          <td>{{ index + 1  }}</td>
          <td>{{ emloy.name }}</td>
          <td>{{ emloy.age }}</td>
          <td>{{ emloy.sex == 0 ? 'Name' : 'Nữ' }}</td>
          <td>{{ emloy.address }}</td>
          <td>
            <router-link :to="{ name: 'edit', params: { id: emloy._id}}" class="btn btn-warning btn-xs">Sửa</router-link>
          </td>
          <td>
            <button @click="itemAction(emloy._id)" class="btn btn-danger btn-xs">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script type="text/javascript">
  import axios from 'axios'

  export default {
     name: 'home',
     data () {
       return {
         employee : [],
       }
     },
     created() {
      axios.get('http://127.0.0.2:3000/emplyee')
        .then((response) => {
          this.employee = response.data
        })
     },
     methods: {
       itemAction(id) {
         axios.delete('http://127.0.0.2:3000/employee/delete/' + id).then((response) => {
           if(response.data.status){
             const index = this.employee.findIndex(employ => employ._id == id);
             if(index){
               this.employee.splice(index,1);
             }
           }
         })
       }
     }
  }
</script>
<style lang="css" scoped>
  .wp-content{
    margin-top: 30px;
  }
  .btn-add{
    margin-bottom: 20px;
  }
</style>
