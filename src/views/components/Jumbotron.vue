<template>
<div>
  <mdb-card class="card-image" style="background-image: url(https://mdbcdn.b-cdn.net/img/Photos/Others/gradient1.jpg)">
    <div class="text-white text-center py-5 px-4 my-5">
      <div>
        <h2 class="card-title h1-responsive pt-3 mb-5 font-bold text-light">
          <strong>KENTİMİZ VE SANAYİ ELELE ÜRETEN ÜNİVERSİTE</strong></h2>
        <p class="mx-5 mb-5">
          Sanayi ve iş dünyası ile üniversiteyi ortak akıl, ortak hedef ve ortak başarı ilkeleri 
          doğrultusunda ortak projelerle biraraya getirerek üniversitenin ve sanayinin gelişmesine katkıda bulunmaktır.
        </p>
       <mdb-btn color="primary" size="lg" > <a class="text-light" href="#/duduyurular">Duyurular için tıklayın</a></mdb-btn>
      </div>
    </div>
  </mdb-card>
  </div>
</template>

<script>
 import { mdbCard, mdbBtn } from 'mdbvue';
  export default {
    name: 'JumbotronPage',
    components: {
      mdbCard,
      mdbBtn
    }
  }
</script>