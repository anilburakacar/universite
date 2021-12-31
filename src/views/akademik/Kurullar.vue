<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    >
      <div class="container">
           <h1 class="title">Ana Sayfa/Kurullar</h1>
      </div>
       </parallax>




    <div class="main main-raised">
      <div class="section profile-content">
      <h3 class="title text-center">KURULLAR</h3>
      <hr>

      

<mdb-jumbotron class="mb-0 hoverable p-4">
    <mdb-row>
     
      <mdb-col md="12" class="text-md-left ml-3 mt-3 ">
        <h5>
          Senato
          <br><br>
          Üniversite Yönetim Kurulu
          <br><br>
          Üniversite Disiplin Kurulu
          <br><br>
          Reklam Tanıtım Kurulu
          <br><br>
          Akademik Değerlendirme Kurulu
          <br><br>
          Yetkili Kurul
          <br><br>
          Bilimsel Araştırma ve Yayın Etik Kurulu
          <br><br>
          Geleneksel ve Tamamlayıcı Tıp Uygulamaları Klinik Arş.Etik Kurulu
          <br><br>
          Girişimsel Olmayan Sağlık Araştırma Etik Kurulu
          <br><br>
          Hayvan Deneyleri Yerel Etik Kurulu
          <br><br>
          Klinik Araştırma Etik Kurulu
        </h5>
      </mdb-col>

    </mdb-row>
</mdb-jumbotron>

  
    </div>
  </div>
</div>
</template>

<script>
 import { mdbJumbotron, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'JumbotronPage',
    components: {
      mdbJumbotron,
      mdbRow,
      mdbCol,
    },
 
  bodyClass: "profile-page",

  props: {
    header: {
      type: String,
      default: require("@/assets/düzce-img/2.jpg")
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>


