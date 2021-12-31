<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    >
      <div class="container">
           <h1 class="title">Ana Sayfa/Arıcılık</h1>
      </div>
       </parallax>




    <div class="main main-raised">
      <div class="section profile-content">
      <h3 class="title text-center">ARICILIK VE ARI ÜRÜNLERİ</h3>
      <hr>



<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="../../assets/düzce-img/aricilik/aricilik1.png" class="card-img-top">
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="../../assets/düzce-img/aricilik/aricilik2.png" class="card-img-top">
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="../../assets/düzce-img/aricilik/aricilik3.png" class="card-img-top">
    </div>
  </div>
  <div class="col">
    <div class="card">
     <img src="../../assets/düzce-img/aricilik/aricilik4.png" class="card-img-top">
    </div>
  </div>
  <div class="col">
    <div class="card">
     <img src="../../assets/düzce-img/aricilik/aricilik5.png" class="card-img-top">
    </div>
  </div>
  <div class="col">
    <div class="card">
     <img src="../../assets/düzce-img/aricilik/aricilik6.png" class="card-img-top">
    </div>
  </div>
  <div class="col">
    <div class="card">
     <img src="../../assets/düzce-img/aricilik/aricilik7.png" class="card-img-top">
    </div>
  </div>
  <div class="col">
    <div class="card">
     <img src="../../assets/düzce-img/aricilik/aricilik8.png" class="card-img-top">
    </div>
  </div>
  <div class="col">
    <div class="card">
     <img src="../../assets/düzce-img/aricilik/aricilik9.png" class="card-img-top">
    </div>
  </div>
  <div class="col">
    <div class="card">
     <img src="../../assets/düzce-img/aricilik/aricilik10.png" class="card-img-top">
    </div>
  </div>

</div>



      </div>
    </div>
  </div>
</template>

<script>
  export default {
 
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
  },
};
</script>


