<template>
  <body class="text-center">
    
<main class="form-signin">
  <form @submit.prevent = "submit">
    <img class="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
    <h1 class="h3 mb-3 fw-normal">Добавить объект</h1>

    <div class="form-floating">
      <input v-model="data.Name" class="form-control" name="Name">
      <label for="floatingInput">Название объекты</label>
    </div>

    <div class="form-floating">
      <input v-model="data.PriceSum"  type="number" class="form-control" name="PriceSum">
      <label for="floatingPassword">Стоимость</label>
    </div>


    <button class="w-100 btn btn-lg btn-primary" type="submit">Добавить</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </form>
</main>


    
  </body>
</template>


<script>
import { reactive } from '@vue/reactivity'
import {useRouter} from 'vue-router'
import axios from 'axios';
export default {
    name: "CreateObject",
    setup() {
        const router = useRouter();
        const data = reactive ({
            Name: '',
            PriceSum: ' '
        });
        const submit = async() =>{
            await axios.post('http://192.168.0.67:8000/api/object',data);
            await router.push('/');
        }
        return{
            data,
            submit
            }
    }
}
</script>
<style>

</style>