<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    >
      <div class="container">
           <h1 class="title">Ana Sayfa/Bilimsel Yayınlar</h1>
      </div>
       </parallax>




    <div class="main main-raised">
      <div class="section profile-content">
      <h3 class="title text-center">BİLİMSEL YAYINLAR</h3>
      <hr>


   <mdb-jumbotron class="mb-0 hoverable p-4">

    <mdb-row>
      <mdb-col md="5" class="text-md-left ml-3 mt-3 ">

           <h5>İhtisaslaşma alanında yapılan yayınlara ilişkin sayısal veriler aşağıda listelenmiştir.</h5>
           <br>
          <table border="1" class="full-bordered-table" cellspacing="0" cellpadding="0" align="left">
          <tbody>
          <tr>
          <td valign="top" width="402">
          <p> </p>
          </td>
          <td valign="top" width="91">
          <p align="center">2017</p>
          </td>
          <td valign="top" width="96">
          <p align="center">2018</p>
          </td>
          <td valign="top" width="96">
          <p align="center">2019</p>
          </td>
          </tr>
          <tr>
          <td valign="top" width="402">
          <p>İhtisaslaşma alanında alan indeksli yayın sayısı</p>
          </td>
          <td valign="top" width="91">
          <p align="center">4</p>
          </td>
          <td valign="top" width="96">
          <p align="center">7</p>
          </td>
          <td valign="top" width="96">
          <p align="center">28</p>
          </td>
          </tr>
          <tr>
          <td valign="top" width="402">
          <p>İhtisaslaşma alanında SCI, SCI-EXP, SSCI, AHCI yayın sayısı</p>
          </td>
          <td valign="top" width="91">
          <p align="center">18</p>
          </td>
          <td valign="top" width="96">
          <p align="center">11</p>
          </td>
          <td valign="top" width="96">
          <p align="center">16</p>
          </td>
          </tr>
          <tr>
          <td valign="top" width="402">
          <p>İhtisaslaşma alanında diğer üniversiteler ile ortak SCI, SCI-EXP, SSCI, AHCI yayın sayısı</p>
          </td>
          <td valign="top" width="91">
          <p align="center">10</p>
          </td>
          <td valign="top" width="96">
          <p align="center">10</p>
          </td>
          <td valign="top" width="96">
          <p align="center">21</p>
          </td>
          </tr>
          <tr>
          <td valign="top" width="402">
          <p>İhtisaslaşma alanında yapılan toplam yayın sayısı</p>
          </td>
          <td valign="top" width="91">
          <p align="center">22</p>
          </td>
          <td valign="top" width="96">
          <p align="center">18</p>
          </td>
          <td valign="top" width="96">
          <p align="center">44</p>
          </td>
          </tr>
          <tr>
          <td valign="top" width="402">
          <p>Üniversite bünyesinde yapılan yayın sayısı</p>
          </td>
          <td valign="top" width="91">
          <p align="center">410</p>
          </td>
          <td valign="top" width="96">
          <p align="center">403</p>
          </td>
          <td valign="top" width="96">
          <p align="center">504</p>
          </td>
          </tr>
          </tbody>
          </table>
          <h5 class="mt-3">Yayınlar, alan indeksine göre yıl bazında ayrı ayrı dosyalanarak gösterilmektedir.</h5>
          <br>
          <h5><strong>2019 Yayınları </strong></h5>
          <p><a href="https://panel.duzce.edu.tr//Dosya/GetFile/4aee5e51-ffe7-4726-b172-e69ab20ec25b" target="_blank">Alan Index</a></p>
          <p><a href="https://panel.duzce.edu.tr//Dosya/GetFile/94d2f3e8-e4ca-4603-9971-21f208717df5" target="_blank">Ortak Yayınlar</a></p>
          <p><a href="https://panel.duzce.edu.tr//Dosya/GetFile/aaa983c4-6c63-436b-9c19-86abc27e1372" target="_blank">SCI-SCI_EXP</a></p>
          <h5><strong>2018 Yayınları </strong></h5>
          <p><a href="https://panel.duzce.edu.tr//Dosya/GetFile/47e05641-9f5e-445b-81ad-3f8a57be54fc" target="_blank">Alan Index</a></p>
          <p><a href="https://panel.duzce.edu.tr//Dosya/GetFile/055ed55b-db00-41ca-9234-e5f8882506b2" target="_blank">Ortak Yayınlar</a></p>
          <p><a href="https://panel.duzce.edu.tr//Dosya/GetFile/3bf92285-571d-4a37-9c66-74313b5f0ef6" target="_blank">SCI-SCI_EXP</a></p>
          <h5><strong>2017 Yayınları </strong></h5>
          <p><a href="https://panel.duzce.edu.tr//Dosya/GetFile/9d562acd-b0b0-4d46-929d-86af54805254" target="_blank">Alan Index</a></p>
          <p><a href="https://panel.duzce.edu.tr//Dosya/GetFile/df771cdd-d8ff-40af-bc4a-d95309fed439" target="_blank">Ortak Yayınlar</a></p>
          <p><a href="https://panel.duzce.edu.tr//Dosya/GetFile/241f1950-cef5-478c-8ca9-7d616e77f331" target="_blank">SCI-SCI_EXP</a><br><br><br></p>

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


