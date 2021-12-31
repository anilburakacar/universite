<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    >
      <div class="container">
           <h1 class="title">Ana Sayfa/Yönetmelik ve Yönergeler</h1>
      </div>
       </parallax>




    <div class="main main-raised">
      <div class="section profile-content">
        <h3 class="title ms-4 text-center">YÖNETMELİK VE YÖNERGELER</h3>
          <hr>
          <br>

  <mdb-jumbotron class="mb-0 hoverable p-4">
    <mdb-row>
      <mdb-col md="10" class="text-md-left ml-3 mt-3">
        <div class="container-fluid text-center" >
           <iframe src="https://yyue.duzce.edu.tr/" style="width:100%;height:100vh;"></iframe>
        </div>
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


