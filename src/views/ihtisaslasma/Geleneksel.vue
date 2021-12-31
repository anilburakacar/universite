<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    >
      <div class="container">
           <h1 class="title">Ana Sayfa/Geleneksel ve Tamamlayıcı Tıp Faaliyetleri</h1>
      </div>
       </parallax>




    <div class="main main-raised">
      <div class="section profile-content">
      <h3 class="title text-center">GELENEKSEL VE TAMAMLAYICI TIP FAALİYETLERİ</h3>
      <hr>


<mdb-jumbotron class="mb-0 hoverable p-4">

    <mdb-row>
      <mdb-col md="7" class="text-md-left ml-3 mt-3 ">

          <h4 class="title mb-2">2021 YILI FAALİYETLERİ</h4>

          <p><a href="https://cdn.duzce.edu.tr/File/GetFile/9b9d49f4-06a3-443c-acfe-57fb64f56e7f">Larva Uygulamaları Kursu (13-20 Aralık)</a></p>

          <p><a href="https://cdn.duzce.edu.tr/File/GetFile/70f44edd-60d4-4d0b-888a-867a315921bb">Ozon Uygulamaları Kursu-3 (12 Kasım-12 Aralık)</a></p>

          <p><a href="https://cdn.duzce.edu.tr/File/GetFile/1dd96773-0b54-4ab5-aec5-9d7d66d9cf53">Kupa Uygulamaları Eğitimi -4 (6-10 Aralık)</a></p>

          <p><a href="https://cdn.duzce.edu.tr/File/GetFile/a79dc8d4-df61-4033-9b1b-f0d0836e3836">Sülük Uygulamaları Kursu-2 (22 Kasım - 2 Aralık)</a></p>

          <p><a href="https://cdn.duzce.edu.tr/File/GetFile/324a4652-a5dd-4d11-8ea9-de234950a519" target="_blank">Tıbbi Mantarları Tanıyalım Doğa Yürüyüşü-2 (8 Ekim)</a></p>

          <p><a href="https://cdn.duzce.edu.tr/File/GetFile/969597e4-4e1c-489f-8f40-22b570cfe72c" target="_blank">Tıbbi Mantar Miseli Üretim Teknikleri Kursu (6 Ekim)</a></p>

          <p><a href="https://cdn.duzce.edu.tr/File/GetFile/03a1647a-a997-4e90-9317-faf5f7aa2518" target="_blank">Tıbbi Mantar Yetiştiriciliği Kursu-8 (04-05 Ekim)</a></p>

          <p><a href="https://cdn.duzce.edu.tr/File/GetFile/de71b5ea-7768-49de-adf8-4aea4fa80338" target="_blank">Tıbbi Mantarları Tanıyalım Doğa Yürüyüşü (1 Ekim)</a></p>

          <p><a href="https://cdn.duzce.edu.tr/File/GetFile/9906c3b9-40a5-44ac-a458-dc9bda24d7cf">Kupa Uygulamaları Eğitimi-3 (17-26 Eylül)</a></p>

          <p><a href="https://cdn.duzce.edu.tr/File/GetFile/ddb7bd3b-14c0-464e-b695-9f306c571f6a">Ozon Uygulaması Kursu-2 (16-27 Ağustos)</a></p>

          <p><a href="https://cdn.duzce.edu.tr/File/GetFile/4a486825-23b5-4b8e-8d02-bbc578348213" target="_blank">Online Tıbbi Mantar Yetiştiriciliği Kursu-7 (01-02 Temmuz)</a></p>

          <p><a href="https://cdn.duzce.edu.tr/File/GetFile/f1c322e8-f111-46b2-b09e-81308534f0d6" target="_blank">Online Tıbbi Mantar Yetiştiriciliği Kursu-6 (27-28 Nisan)</a></p>

          <p><a href="https://cdn.duzce.edu.tr/File/GetFile/6767876a-b9ef-47f6-866c-6c19d340ae92">Online Tıbbi Mantar Yetiştiriciliği Kursu-5 (24-25 Mart)</a></p>

          <p><a href="https://cdn.duzce.edu.tr/File/GetFile/d981b0dc-8f0e-4c1f-bc45-dc88d8d41d5d">Online Tıbbi Mantar Yetiştiriciliği Kursu-4 (25-26 Şubat)</a></p>

          <p><a href="https://duzce.edu.tr/duyuru/8f26/getat-toplulugumuzdan-mantarlarin-tipta-kullanimi-mikoterapi-konferansi" target="_blank">GETAT Topluluğumuzdan “Mantarların Tıpta Kullanımı: Mikoterapi Konferansı” (23 Şubat)</a></p>

          <p><a href="https://cdn.duzce.edu.tr/File/GetFile/ef47d666-1337-4aec-b51b-d32964c9625e">Online Tıbbi Mantar Yetiştiriciliği Kursu-3 (17-19 Şubat)</a></p>

          <p><a href="https://dugetam.duzce.edu.tr/Duyuru/e7a6/tibbi-mantar-yetistiriciligi-ve-mikoterapi-kursu" target="_blank">Online Tıbbi Mantar Yetiştiriciliği Kursu-2 (10-11 Şubat)</a></p>

          <p><a href="https://cdn.duzce.edu.tr/File/GetFile/4e62fa07-a00e-4f71-9f68-357598f6e85b">Online Tıbbi Mantar Yetiştiriciliği ve Mikoterapi Kursu (26-27 Ocak)</a></p>

      </mdb-col>
    </mdb-row>

</mdb-jumbotron>


      </div>
    </div>
  </div>
</template>

<script>
 import { mdbJumbotron, mdbRow, mdbCol  } from 'mdbvue';
  export default {
    name: 'JumbotronPage, CarouselPage',
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
  },

   data() {
      return {
        items: [
          {
            img: true,
            src:
              require("@/assets/düzce-img/tibbi/tibbi1.jpg")
          },
          {
            img: true,
            src:
              require("@/assets/düzce-img/tibbi/tibbi2.jpg")
          },
          {
            img: true,
            src:
              require("@/assets/düzce-img/tibbi/tibbi3.jpg")
          },
          {
            img: true,
            src:
              require("@/assets/düzce-img/tibbi/tibbi4.jpg")
          },
          {
            img: true,
            src:
              require("@/assets/düzce-img/tibbi/tibbi5.jpg")
          },
        ]
      };
   }
};
</script>


