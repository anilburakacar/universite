<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    >
      <div class="container">
           <h1 class="title">Ana Sayfa/Kuruluş</h1>
      </div>
       </parallax>




    <div class="main main-raised">
      <div class="section profile-content">


   <mdb-jumbotron class="mb-0 hoverable p-4">
    <mdb-row>
     
      <mdb-col md="12" class="text-md-left ml-3 mt-3 ">
        <h3 class="title ms-4 text-center">KURULUŞ</h3>
        <hr>
        <br>
        <h5>Düzce Üniversitesi’nin temelleri, 1976 yılında İstanbul Teknik Üniversitesi Sakarya Mühendislik
          Fakültesi’ne bağlı olarak Düzce Meslek Yüksekokulu’nun açılışına kadar dayanmaktadır.
          <br><br>
          1992 yılında Bolu Abant İzzet Baysal Üniversitesi’nin kurulması ile farklı bir boyuta dönüşen Düzce Üniversitesi’nin üniversiteleşme süreci; 
          Düzce Meslek Yüksekokulu’nun dışında Orman Fakültesi, Teknik Eğitim Fakültesi, Tıp Fakültesi,  Sağlık Yüksekokulu, Akçakoca Turizm İşletmeciliği
          ve Otelcilik Yüksekokulu ile Akçakoca Meslek Yüksekokulu’nun bu üniversiteye bağlı olarak açılmasıyla birlikte daha da hızlanmıştır.
          Sonrasında 17 Mart 2006 tarih ve 26111 sayılı Resmi Gazete'de yayınlanan 5467 sayılı yasa ile Abant İzzet Baysal Üniversitesi’nden ayrılarak
          kuruluşu gerçekleştirilen Düzce Üniversitesi, değer üretme felsefesi ile eğitim-öğretim faaliyetlerine başlamıştır.
          <br><br>
          İlk kurulduğu yıllarda 3 fakültesi ve 5700 öğrencisi olan Düzce Üniversitesi; bugün 30 bini aşkın öğrencisi, 12 Fakültesi,
          4 Enstitüsü, 2 Yüksekokulu, 10 Meslek Yüksekokulu, 30’dan fazla araştırma merkezi, Teknopark’ı, Araştırma ve Uygulama Hastanesi 
          ile saygın ve tercih edilen bir yükseköğretim kurumu olarak dikkat çekmektedir.
          <br><br>
          Kurulduğu 17 Mart 2006 tarihinden günümüze değer üretme felsefesi ışığında; bilimsel araştırmaları,
          katma değerli çalışmaları, bölgesel kalkınmaya katkıları ile bir fidandan bir çınara dönüşen
          Düzce Üniversitesi, girişimci, yenilikçi ve şeffaf yönetim kültürü ile faaliyetlerini başarıyla sürdürmektedir.
          <br><br>
          Toplum için bilim anlayışını ilke edinen Düzce Üniversitesi, modern eğitim programları, teknolojik imkânları, nitelikli ve donanımlı
          akademik kadrosuyla yeni değerler üretmeye azimle devam etmektedir.
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


