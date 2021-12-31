<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    >
      <div class="container">
           <h1 class="title">Ana Sayfa/İdari Birimler</h1>
      </div>
       </parallax>




    <div class="main main-raised">
      <div class="section profile-content">
         <h3 class="title ms-4 text-center">İDARİ BİRİMLER</h3>
         <hr>
         <br>



<mdb-jumbotron class="mb-0 hoverable p-4">
    <mdb-row>
      <mdb-col md="6" class="text-md-left ml-3 mt-3 ms-4">
     
          <h4 class="title">Rektörlük</h4>
          <ul>
            <li><a href="#">İç Denetim Birimi</a></li>
            <li><a href="#">Özel Kalem</a></li>
            <li><a href="#" rel="noopener" target="_blank">Genel Sekreterlik</a>
            <ul style="margin-left:20px; margin-right:20px">
              <li><a href="#" rel="noopener" target="_blank">Döner Sermaye İşletme Müdürlüğü</a></li>
              <li><a href="#" rel="noopener" target="_blank">Bilgi İşlem D.B.</a></li>
              <li><a href="#" rel="noopener" target="_blank">Hukuk Müşavirliği</a></li>
              <li><a href="#" rel="noopener" target="_blank">İdari ve Mali İşler D.B.</a></li>
              <li><a href="#" rel="noopener" target="_blank">Kütüphane ve Dok. D.B.</a></li>
              <li><a href="#" rel="noopener" target="_blank">Öğrenci İşleri D.B.</a></li>
              <li><a href="#" rel="noopener" target="_blank">Personel D.B.</a></li>
              <li><a href="#" rel="noopener" target="_blank">Sağlık Kültür ve Spor D.B.</a></li>
              <li><a href="#" rel="noopener" target="_blank">Strateji Geliştirme D.B.</a></li>
              <li><a href="#" rel="noopener" target="_blank">Yapı İşleri ve Tek. D.B.</a></li>
            </ul>
            </li>
          </ul>
           </mdb-col>
    <mdb-col md="5" class="text-md-left ml-3 mt-3 ">
          <h4 class="title">Koordinatörlükler</h4>

          <ul>
            <li><a href="#">BAP-Bilimsel Araştırma Projeleri Koordinatörlüğü</a></li>
            <li><a href="#" rel="noopener" target="_blank">Dış İlişkiler Koordinatörlüğü</a></li>
            <li><a href="#" rel="noopener" target="_blank">Çevre ve Sağlık Teknolojilerinde İhtisaslaşma Koordinatörlüğü</a></li>
            <li><a href="#">Sürekli İyileştirme Koordinatörlüğü</a></li>
            <li><a href="#">Teknoloji Transfer Ofisi Koordinatörlüğü</a></li>
            <li><a href="#">Eğitim Koordinatörlüğü</a></li>
            <li><a href="#" rel="noopener" target="_blank">İletişim ve Tanıtım Koordinatörlüğü</a></li>
            <li><a href="#">Öğretim Üyesi Yetiştirme Programı Koordinatörlüğü</a></li>
            <li><a href="#">İş Sağlığı ve İş Güvenliği Koordinatörlüğü</a></li>
            <li><a href="#">Teknopark Koordinatörlüğü</a></li>
            <li><a href="#">Bilgi İzleme ve Raporlama Koordinatörlüğü</a></li>
            <li><a href="#">YLSY Burs Programı Koordinatörlüğü</a></li>
          </ul>

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


