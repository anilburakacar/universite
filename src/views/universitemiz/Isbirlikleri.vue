<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    >
      <div class="container">
           <h1 class="title">Ana Sayfa/İşbirlikleri</h1>
      </div>
       </parallax>




    <div class="main main-raised">
      <div class="section profile-content">
          <h3 class="title ms-4 text-center">İŞBİRLİKLERİ</h3>
          <hr>
          <br>



   <mdb-jumbotron class="mb-0 hoverable p-4">
    <mdb-row>
     
      <mdb-col md="12" class="text-md-left ml-3 mt-3 ">

          <h5 class="title ">PROTOKOL İMZALANAN FİRMALAR</h5>
          <h5>
          AKSUVİTAL DOĞAL ÜRÜNLER A.Ş.
          <br>
          DİVAPAN ENTEGRE A.Ş.
          <br>
          GP-AMG YENİLENEBİLİR ENERJİ LTD. ŞTİ.
          <br>
          KMK PAPER KAHRAMANMARAŞ KAĞIT SANAYI VE TIC. A.Ş
          <br>
          AYMNET BITKISEL VE TEMIZLIK ÜRÜNLERI İTHALAT İHRACAT DANIŞMANLIK TIC. LTD. ŞTI.
          <br>
          SBS BILIMSEL BIO ÇÖZÜMLER SAN. VE TIC. A.Ş.
          <br>
          NATURIN DOĞAL ÜRÜNLER
          <br>
          BEZMIALEM VAKIF ÜNIVERSITESI
          <br>
          FIBROBETON YAPI ELEMANLARI İNŞAAT SAN. TIC. A.Ş.
          <br>
          ÇAYLI ORGANIK TARIM LIMITED ŞIRKETI
          <br>
          ANATOLIA HARAMAIN İÇ VE DIŞ TIC. LTD. ŞTI.
          <br>
          BOTAFARMA İLAÇ SAN. TIC. LTD. ŞTI.
          <br>
          APIMAYE ARICILIK
          <br>
          MIKROM ENERJI İNŞAAT TARIM VE HAYVANCILIK SAN. TIC. A.Ş.
          <br>
          STANDARD PROFIL OTOMOTIV SANAYI A.Ş
          <br>
          DÜZCE İLI ARI YETIŞTRICILERI BIRLIĞI
          <br>
          MEZOPOTAMYA TARIM A.Ş
          <br>
          PROGIDA TARIM ÜRÜNLERİ SANAYİ VE TİC. A.Ş
          <br>
          MADAME SEDA KOZMETOLOJI ARŞ. GEL. SAN. TIC. A.Ş
          <br>
          MELISA DEFNE TARIM HAY. İNŞ. ENERJI İHR. İTH. SAN. TIC. LTD. ŞTI.
          <br>
          NOVANUTRICA
          <br>
          CHR DOĞAL YAŞAM VE SAĞLIK ÜRÜNLERI TURIZM SAN. TIC. LTD. ŞTI. (IMMUNFLEX)
          <br>
          BOLU ORMAN BÖLGE MÜDÜRLÜĞÜ
          <br>
          KORU SAĞLIK GRUBU
          <br>
          YIĞILCA BALKÖY KOOPERATİFİ
          <br>
          SAKARYA İLI ARI YETIŞTIRICILERI BIRLIĞI
          <br>
          NOVANUTRICA – EFTENİ BAL (Düzce Üniversitesi aracılığı ile)
          <br>
          GP-AMG – KANATLI HAYVAN YETİŞTİRİCİLERİ DERNEĞİ (Düzce Üniversitesi aracılığı ile)
          <br>
          İhtisaslaşma Marka Lisans Sözleşmesi
          <br>
          Formlıfe Sağlıklı Yaşam Ürünleri Anonim Şirketi
          <br>
          HumHum Bees Restaurant
          <br>
          Düzce İl Tarım ve Orman Müdürlüğü – GP-TECH – Düzce Üniversitesi
                    
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


