<template>
  <div class="mt-4">
    <div>
      <h2>Цирюльня "Светлана"</h2>
      <h3>Здравствуйте !</h3>
      <p>Любишь быть в центре внимания?</p>
      <p>Держи себя в форме, создавай лучшие впечатления о себе!</p>
      <p>Для этого заходи почаще в салон красоты "Светлана" - это территория стиля, комфорта и хорошего настроения.</p>
      <p>Что, с последним проблемы?</p>
      <p>Тогда ты реально по адресу!</p>
      <p>Ведь самый приятный и эффективный способ добавить
      своему имиджу крутых "фишек" - это удачно изменить внешность.</p>
    </div>

    <b-container class="bv-example-row">
      <b-row class="justify-content-md-center">
        <b-col sm="6">
          <div>
            <b-button v-b-modal.modal-1 block pill size="lg" variant="dark">Запись на услуги</b-button>

            <b-modal id="modal-1" title="Запись на услуги">
              <b-form @submit.stop.prevent>
                <label for="FIO">Имя, Фамилия</label>
                <b-input id="FIO"></b-input>
                <label for="Masters">Выберите мастера</label>
                <b-form-select v-model="selected" :options="masters" id="Masters"></b-form-select>
                <label for="Services">Выберите услугу</label>
                <b-form-select v-model="selected" :options="services" id="Services" ></b-form-select>
                <label for="example-datepicker">Выберите дату</label>
                <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
              </b-form>
            </b-modal>
          </div>
        </b-col>
        <b-col sm="6">
          <b-button block pill size="lg" href="/#/about" variant="dark">Наши работы</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="6">
          <b-button block pill size="lg" href="/#/service" variant="dark">Наши услуги</b-button>
        </b-col>

        <b-col sm="6">
          <b-button block pill size="lg" href="/#/contact" variant="dark">Контакты</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    msg: String
  },
  data(){
    return {
      selected: null,
      masters: [
        {value: null, text: 'Выберите мастера'},
        {value: 'a', text:'Светлана'},
        {value: 'b', text:'Шамиль'}
      ],
      services: [
        {value: null, text: 'Выберите услугу'},
        {value: 'a', text:'Стрижка'},
        {value: 'b', text:'Маникюр'},
        {value: 'c', text:'Мэйкап'},
        {value: 'd', text:'Окраска'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p{
    font-size: 80%;
  }
</style>
