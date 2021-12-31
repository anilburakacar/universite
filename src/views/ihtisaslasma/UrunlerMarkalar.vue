<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    >
      <div class="container">
           <h1 class="title">Ana Sayfa/Ürünler ve Markalar</h1>
      </div>
       </parallax>




    <div class="main main-raised">
      <div class="section profile-content">
      <h3 class="title text-center">ÜRÜNLER VE MARKALAR</h3>
      <hr>


<mdb-jumbotron class="mb-0 hoverable p-4">


    <mdb-row>
      <mdb-col md="4" offsetMd="1" class="m-3">
        <mdb-view src="" alt="">
        <img src="../../assets/düzce-img/urunler/urunler1.png"> 
          <a><mdb-mask waves overlay="white-slight"/></a>
        </mdb-view>
      </mdb-col>
      <mdb-col md="7" class="text-md-left ml-3 mt-3">

        <h5>
        Düzce Üniversitesi, ihtisaslaşma sürecinin başında 4 adet markayı Türk Patent Kurumu'na tescil ettirmiştir. Bu markalar;
        <br><br>
        DuLife (Çatı Marka)
        <br><br>
        Herbynia (Bitkisel Ürünler)
        <br><br>
        Apidevera (Arı Ürünleri)
        <br><br>
        Melenis (Kozmetik Ürünleri)
        <br><br>
        şeklindedir. Adı geçen bu markalar, 14 Şubat 2020 tarihinde imzalanan Marka Lisans Sözleşmesi ile, İlimiz girişimcilerinin kurduğu
        Formlife Sağlıklı Yaşam Ürünleri A.Ş. firmasına 3 yıllığına lisanslanmıştır.
        <br><br>
        </h5>

      </mdb-col>
    </mdb-row>


     <mdb-row>
      <mdb-col md="12" class="text-md-left ml-3 mt-3 ">
        <h5>
        Değer üreten Üniversitemizin yeni değeri Univera da tıpkı daha önce tescillediğimiz markalarımız gibi Üniversitemize özgü bir felsefeyi barındırıyor.
        Neredeyse tüm kadim dil ailelerinde bir anlamı olan “Vera”, Latincede “Doğru”, Slav dillerinde “Gerçek”, Arapçada ise “Günahtan/Kusurdan/Hatadan Kaçınan”
        anlamlarını taşır. Bir üniversiteye ve onun uzman personeline ilişkin vurguyla Univera, “bilimin doğru ve gerçekçi süzgecinden geçmiş, kusur ve
        aldatmacadan uzak” ürün grubunu temsil eden bir marka olarak, bu felsefesini somut ürünlere yansıtıyor.
        <br><br>
        5 ayrı logo ile temsil edilen Ünivera’nın yeşil logosu bitkisel ürünlerimizi, kırmızı logosu kozmetik ürünlerimizi, bal rengi logosu arıcılık ürünlerimizi,
        mavi renkli logosu tarımsal atıklardan elde edilen ürünlerimizi barındırırken, siyah logo ise markanın çatı logo vasfı teşkil ediyor. 
        <br><br>
        Dezenfektan, krem, kolonya, tıbbi bitki yağı, tıbbi bitki ekstraktı, tıbbi mantar, kefir, bal, propolis, arı zehri, arı sütü, saç bakım ürünleri, 
        cilt bakım ürünleri, tarımsal atıklardan elde edilmiş sanatsal kağıt, kompost, malç, odun sirkesi gibi oldukça geniş bir portföye sahip Ünivera 
        markalı ürünlerimiz, hiçbir şekilde fason üretim yaptırılmaksızın tamamen Doğu Marmara Kalkınma Ajansı (MARKA) desteği ile kurulan Düzce Üniversitesi
        Üretim Merkezi (DÜ-ÜM) bünyesinde üretilip, yeni satış ofisinde tüketicinin beğenisine sunulmaktadır.
                
          </h5>
      </mdb-col>
    </mdb-row>


      <mdb-row>
      <mdb-col md="11" offsetMd="1" class="m-3">
        <mdb-view src="" alt="">
        <img src="../../assets/düzce-img/urunler/urunler2.png"> 
          <a><mdb-mask waves overlay="white-slight"/></a>
        </mdb-view>
      </mdb-col>
    </mdb-row>

</mdb-jumbotron>


      </div>
    </div>
  </div>
</template>

<script>
 import { mdbJumbotron, mdbRow, mdbCol, mdbView, mdbMask  } from 'mdbvue';
  export default {
    name: 'JumbotronPage, CarouselPage',
    components: {
      mdbJumbotron,
      mdbRow,
      mdbView,
      mdbMask,
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


