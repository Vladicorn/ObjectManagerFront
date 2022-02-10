<template>
Объекты
  <div class="pt-3 pb-2 mb-3 border-bottom">
        <a href="http://localhost:8000/api/Createobject" class="btn btn-sm btn-outline-secondary"> add </a>

     </div>
      <div class="table-responsive">
        З
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
export default {
    name: "obj"
}
</script>
<style>

</style>