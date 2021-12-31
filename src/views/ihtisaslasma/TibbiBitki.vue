<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    >
      <div class="container">
           <h1 class="title">Ana Sayfa/Tıbbi Bitki Yetiştiriciliği</h1>
      </div>
       </parallax>




    <div class="main main-raised">
      <div class="section profile-content">
      <h3 class="title text-center">TIBBİ BİTKİ YETİŞTİRİCİLİĞİ</h3>
      <hr>



<mdb-jumbotron class="mb-0 hoverable p-4">
  <mdb-row>
      <mdb-col md="12" class="text-md-left ml-3 mt-3">

        <h4 class="title mb-4">DÜZCE İLİNDE YÜRÜTÜLEN TIBBİ VE AROMATİK BİTKİ ÜRETİM ÇALIŞMALARI</h4>
        <h5>
        Düzce Üniversitesi, YÖK ve Kalkınma Bakanlığının işbirliğiyle 2015 Haziran ayında, üniversitelerin hem bulundukları bölgeye olan katkılarını arttırmak
        hem de belirli alanlarda ihtisaslaşmaya teşvik etmek amacıyla başlatmış olduğu "Bölgesel Kalkınma Odaklı Misyon Farklılaşması ve İhtisaslaşması’’
        projesine seçilen ilk 5 pilot üniversite içerisinde ‘’Çevre ve Sağlık alanında’’ seçilmiştir.
        <br><br>
        Çevre alanında tarımsal atıkların endüstriye geri kazanımı, sağlık alanında ise Geleneksel ve Tamamlayıcı Tıp Uygulama ve Araştırma Merkezi kurulması,
        bölgede gönüllü çiftçilerle Tıbbi ve Aromatik Bitkilerin yetiştiriciliği, Arıcılık, Mantar üretimi gibi faaliyetlerin yürütülmesi ve üretilen ham 
        maddelerin ürünlere dönüştürülmesi hedeflenmiştir.
        <br><br>
        Ülkemiz tıbbi ve aromatik bitkiler bakımından zengin bir floraya sahiptir. Tıbbi ve Aromatik bitkilerin, kullanım alanlarının geniş olması, ülke
        ekonomisine katkı sağlamaları ve yetiştirildiği bölgelerde yaşayanlara ek gelir sağlamalarından dolayı ülkemizde önemli bir yere sahiptirler. 
        Tıbbi ve aromatik bitkilerin farklı sanayi kollarında ham madde olarak kullanılmaktadır. Son yıllarda bu bitkilere ve bu bitkilerden üretilen
        ürünlere talep her geçen gün artmaktadır. Türkiye tıbbi bitkiler ticaretinde dünyada en önemli ülkeler arasında yer almaktadır. Ancak, tıbbi 
        ve aromatik bitkilerin ihracatında Türkiye’nin yüksek potansiyeli olmasına karşın henüz arzu edilen düzeye ulaşılamamıştır. Tıbbi ve aromatik
        bitkilerin ülke ekonomisi için önemli bir kazanç kaynağı olduğu göz önüne alınarak, tıbbi bitki ihracatında zengin bir potansiyele sahip olan
        Türkiye’nin dünya tıbbi bitki pazarında payının arttırılmasını sağlamak amacıyla, bu alanda çalışmaların (adaptasyon ve yetiştiricilik çalışmaları
        ve çiftçilere bu alanda eğitimlerin düzenlenmesi vb.) artırılması gerekmektedir.
        <br><br>
        Düzce, Karadeniz Bölgesi’nin kıyı kesimlerinde görülen nemli ve fazla sert olmayan iklimin etkisi altında olup, Akdeniz ve Karasal iklimleri arası 
        geçiş özelliği de göstermektedir. Yıllık sıcaklık ortalaması 13,0 C°, yıllık toplam yağışların ortalaması 823,7 kg/m² olup, ortalama nispi nem %75’dir. 
        Düzce ili, toplam tarım alanı 74.481 bin ha olup, 63.382 ha alanda fındık üretim yapılmaktadır.
        <br><br>
        Proje kapsamında gönüllü çiftçilerle (25 kişi) birlikte İzmir Kekiği, Tıbbi Adaçayı, Anadolu Adaçayı, Nane, Melisa, Aynısefa, Lavanta, Safran, 
        Salep, Kudret Narı ve Şeker Otu bitkilerin üretim denemeleri kurulmuştur. Üretim yapılırken çiftçilerin koşulları da (ekonomik, alet-ekipman) göz önünde
        bulundurulmuştur.
        </h5>
      </mdb-col>
  </mdb-row>
</mdb-jumbotron>



<div class="container">
            <mdb-carousel
    :interval="2000"
    slide
    :items="items"
    controlls
  ></mdb-carousel>
</div>



<div class="container">
 <mdb-row class="p-4">
      <mdb-col md="4" class="text-md-left ml-3 mt-3">
        <h5>
        <strong>2018 yılında;</strong>
        <br>
        120 kg Tıbbi Adaçayı (Salvia officinalis) kuru yaprak
        <br><br>
        150 kg Şeker Otu (Stevia) kuru yaprak
        <br><br>
        50 kg Mor Reyhan (Ocimum basilicum) kuru yaprak
        <br><br>
        200 kg Kudret Narı (Momordica charantia) tohum,
        <br><br>
        100 kg Meryemana Dikeni (Silybium marianum) tohum,
        <br><br>
        53 kg Hint Yağı Bitkisi (Ricinus communis) tohum,
        <br><br>
        45 kg Rezene  (Foeniculum vulgare) tohum elde edilmiştir.
        </h5>
      </mdb-col>

      <mdb-col md="4" class="text-md-left ml-3 mt-3">
        <h5>
        <strong>2019 yılında;</strong>
        <br>
        3300 kg Tıbbi Adaçayı (Salvia officinalis) yaş herba,
        <br><br>
        7355 kg Anadolu Adaçayı (Salvia triloba) yaş herba,
        <br><br>
        2690 kg İzmir Kekiği (Origanum onites) yaş herba,
        <br><br>
        350 kg Melisa (Melissa officinalis) yaş herba ürün hasat edilmiştir.
        </h5>
      </mdb-col>

      <mdb-col md="4" class="text-md-left ml-3 mt-3">
        <h5>
        <strong>2020 yılında;</strong>
        <br>
        4615 kg Anadolu Adaçayı yaş herba
        <br><br>
        525 kg Tıbbi Adaçayı yaş herba
        <br><br>
        680 kg İzmir Kekiği yaş herba
        <br><br>
        4975 kg Melisa yaş herba
        <br><br>
        100 kg Şeker Otu kuru yaprak
        <br><br>
        400 kg Lavanta taze çiçek
        <br><br>
        80 kg Aynısefa taze çiçek ürün hasat edilmiştir.
        </h5>
      </mdb-col>

  </mdb-row>
</div>



<mdb-jumbotron class="mb-0 hoverable p-4">
    <mdb-row>
      <mdb-col md="4" offsetMd="1" class="m-3">
        <mdb-view src="" alt="">
        <img src="../../assets/düzce-img/tibbi/tibbi6.jpg"> 
          <a><mdb-mask waves overlay="white-slight"/></a>
        </mdb-view>
      </mdb-col>
      <mdb-col md="7" class="text-md-left ml-3 mt-3 ">
        <h5>
        <strong>Üniversite bünyesinde ve farklı kurumlarla 2018-2020 yılları arasında;</strong>
        <br><br>
        Doğaya Dönüş Atölyesi (8-9 Aralık 2018)
        <br><br>
        Uygulamalı Tıbbi ve Aromatik Bitkiler Yetiştiriciliği Eğitimi (13-14 Nisan 2019)
        <br><br>
        Geleneksel Tıpta Kalite ve Standardizasyon’’ Çiftliğinde 23 Nisan Coşkusu (23 Nisan 2019)
        <br><br>
        Düzce Toprağının Sesini Dinle Çalıştayı (29 Nisan 2019)
        <br><br>
        Gümüşovalı Kadınlar Gölyakalı Çiftçi Kadınlar İle Buluştu (17 Temmuz 2019)
        <br><br>
        Gümüşovalı Çiftçi Kadınlar DÜBİT ve Teknopark Mycotech Doku Kültürü Laboratuvarını Ziyaret Ettiler (29 Temmuz 2019)
        <br><br>
        Düzceli Çiftçi Kadınlar Yalova Atatürk Bahçe Kültürleri Merkez Araştırma Enstitüsü ve Artemisia Tıbbi Bitki Bahçesinde (30 Temmuz 2019)
        <br><br>
        Tıbbi Çaylar ve Kokular Atölyesi Yalovalılarla Buluştu (11 Eylül 2019)
        <br><br>
        Üniversitemiz Kadın Çiftçilerle Buluştu (15 Ekim 2019)
        <br><br>
        Sancaklı Huzurevinde Tıbbi ve Aromatik Bitki Dikim Şenliği (6 Kasım 2019)
        <br><br>
        Düzce 1. Tarım Paneli 25 Şubat 2020
        <br><br>
        Düzce 2.Tarım Paneli  24 Şubat 2021 etkinlikler düzenlenmiştir.
        </h5>
      </mdb-col>
    </mdb-row>
</mdb-jumbotron>




      </div>
    </div>
  </div>
</template>

<script>
 import { mdbJumbotron, mdbRow, mdbCol, mdbCarousel, mdbView, mdbMask  } from 'mdbvue';
  export default {
    name: 'JumbotronPage, CarouselPage',
    components: {
      mdbJumbotron,
      mdbRow,
      mdbView,
      mdbMask,
      mdbCol,
      mdbCarousel
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


