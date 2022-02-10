<template>
  <div class="pt-3 pb-2 mb-3 border-bottom">
        <router-link to="/api/Createobject" class="btn btn-sm btn-outline-secondary"> Добавить объект </router-link>

     </div>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col"> # </th>
              <th scope="col"> Объект </th>
              <th scope="col"> Дата </th>
              <th scope="col"> Стоимость </th>

            </tr>
          </thead>
         
          <tbody>
            <tr v-for="obj in objs" :key="obj.Id">
              <td> {{obj.Id}} </td>
              <td> {{obj.Name}} </td>
              <td> {{obj.PriceSum}}  рублей</td>
              <td> {{obj.Start}} </td>
              <td>
              <a class="btn btn-sm btn-outline-secondary" @click="del(obj.Id)"> удалить </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
</template>


<script>

import axios from "axios";
import { onMounted,onUpdated, ref } from '@vue/runtime-core';

export default {
    name: "dashboard",
     setup() {
    const objs = ref([])
    onMounted( async() => {
      const {data} = await axios.get(`http://192.168.0.67:8000/api/objects`);
      objs.value = data;
    });
        onUpdated( async() => {
      const {data} = await axios.get(`http://192.168.0.67:8000/api/objects`);
      objs.value = data;
    });
    const del = async (id) => {
      if (confirm('Are you sure?')){
        
        await axios.delete(`http://192.168.0.67:8000/api/object/${id}`);
      }
    }
    return {
      objs,
      del
    }
  }
}
</script>

<script>



</script>


<style>


</style>