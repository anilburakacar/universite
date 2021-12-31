<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    >
      <div class="container">
           <h1 class="title">Ana Sayfa/Tarımsal Atıkların Geri Kazanımı Faaliyetleri</h1>
      </div>
       </parallax>




    <div class="main main-raised">
      <div class="section profile-content">
      <h3 class="title text-center">TARIMSAL ATIKLARIN GERİ KAZANIMI FAALİYETLERİ</h3>
      <hr>



<mdb-jumbotron class="mb-0 hoverable p-4">

    <mdb-row>
      <mdb-col md="7" class="text-md-left ml-3 mt-3 ">
          <h3 class="title mb-4">2021</h3>
          <table class="full-bordered-table" width="955" cellspacing="0" cellpadding="0"><colgroup><col width="104"> <col width="189"> <col width="255"> <col width="407"> </colgroup>
          <tbody>
          <tr>
          <td colspan="4" height="36">
          <p>DÜTAGAM FAALİYETLER</p>
          </td>
          </tr>
          <tr>
          <td height="21">
          <p>TARİH</p>
          </td>
          <td>
          <p>FAALİYET</p>
          </td>
          <td>
          <p>KATILAN PERSONEL</p>
          </td>
          <td>
          <p>KONU</p>
          </td>
          </tr>
          <tr>
          <td height="60">
          <p>15.01.2021</p>
          </td>
          <td>
          <p>KOSGEB AR-GE Projesi</p>
          </td>
          <td>
          <p>Öğr. Gör. Recai ARSLAN        </p>
          </td>
          <td>
          <p>Performansı Artırılmış Lamine Kompozit Malzemelerin Geliştirilmesi ve Karakterizasyonu  (Proje Bütçesi: 154.358,70 TL)</p>
          </td>
          </tr>
          </tbody>
          </table>
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


