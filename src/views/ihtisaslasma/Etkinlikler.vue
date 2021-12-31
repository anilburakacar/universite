<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    >
      <div class="container">
           <h1 class="title">Ana Sayfa/Etkinlikler</h1>
      </div>
       </parallax>




    <div class="main main-raised">
      <div class="section profile-content">
      <h3 class="title text-center">ETKİNLİKLER</h3>
      <hr>

<mdb-jumbotron class="mb-0 hoverable p-4">

    <mdb-row>
      <mdb-col md="7" class="text-md-left ml-3 mt-3 ">
          <h4 class="title">2017 Etkinlikleri</h4>
          <h5>Çevre ve Sağlık Alanlarında İhtisaslaşma Çalışmaları Tanıtım Programı 11.05.2017</h5>

          <h4 class="title">2018 Etkinlikleri</h4>
          <h5>
          Geleneksel Tıpta Kalite ve Standardizasyon 1.Çalıştayı 03.05.2018
          <br>
          Düzce Fındık Çalıştayı 08.05.2018
          <br>
          Türkiye’nin Sıfır Atık Yolculuğu: Düzce İli Çözüm Önerileri Çalıştayı 08.10.2018
          <br>
          Geleneksel Tıpta Kalite ve Standardizasyon 2.Çalıştayı 19.10.2018
          </h5>

          <h4 class="title">2019 Etkinlikleri</h4>
          <h5>
          Geleneksel ve Tamamlayıcı Tıpta Tıbbi Mantarlar Çalıştayı 09.01.2019
          <br>
          “Sağlıklı Yaşam İçin Kefir Tüketelim” Etkinliği 17.04.2019
          <br>
          Düzce ! Toprağının Sesini Dinle Çalıştayı 29.04.2019 
          <br>
          Tıbbi Bitkiler Kampı 04.05.2019
          <br>
          Açık Ders: Modern Arıcılığın Temel Prensipleri 12.06.2019
          <br>
          Tıbbi Çaylar ve Kokular Atölyesi 07.09.2019
          <br>
          Açık Ders: Ülkemizdeki Geleneksel ve Tamamlayıcı Tıp Uygulamaları ve Gelişim Süreci 11.09.2019
          <br>
          Tıbbi Bitkiler Eğitim Kampı 12.10.2019
          <br>
          GETAT İyi Klinik Uygulamaları Etik Yaklaşım Kursu 18.10.2019
          <br>
          Arı Zehri Çalıştayı ve Sertifikalı Üretim Kursu 25.10.2019
          <br>
          Tıbbi ve Aromatik Bitki Dikim Şenliği 05.11.2019
          <br>
          Kupa Uygulamaları Eğitimi - 1 13.12.2019
          </h5>

          <h4 class="title">2020 Etkinlikleri</h4>
          <h5>
          Hirudoterapi Kursu 08.02.2020
          <br>
          Kupa Uygulamaları Eğitimi - 2 15.02.2020
          <br>
          Düzce 1.Tarım Paneli 25.02.2020
          <br>
          Ozon Uygulamaları Kursu 09.03.2020
          <br>
          Mezoterapi Kursu 21.03.2020
          <br>
          Online Tıbbi Mantar Yetiştiriciliği Kursu - 1 16.12.2020
          </h5>

          <h4 class="title">2021 Etkinlikleri</h4>
          <h5>
          Online Tıbbi Mantar Yetiştiriciliği Kursu - 2 10.02.2021

          Online Tıbbi Mantar Yetiştiriciliği Kursu - 3 17.02.2021
          <br>
          Modern Tıpta Arı Ürünlerinin Yeri ve Önemi - Konferans 17.02.2021
          <br>
          Düzce 2. Tarım Paneli 24.02.2021
          <br>
          Online Tıbbi Mantar Yetiştiriciliği Kursu - 4 25.02.2021
          <br>
          Online Bal Arısı Zehri Paneli 10.03.2021
          </h5>


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


