<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    >
      <div class="container">
           <h1 class="title">Ana Sayfa/Yayınlar</h1>
      </div>
       </parallax>




    <div class="main main-raised">
      <div class="section profile-content">
      <h3 class="title text-center">YAYINLAR</h3>
      <hr>



<div class="container-fluid">
        <div class="wrapper">
            <div id="navigation-pills">
              <div class="md-layout">
                <div class="md-layout-item md-size-75 md-small-size-100">
                  <tabs
                    :tab-name="['Hakemli Dergiler', 'Sürekli Yayınlar', 'Kataloglar', 'E-Bülten']"
                    :tab-icon="['list', 'list', 'list','list']"
                    plain
                    nav-pills-icons
                    color-button="info"
                  >
                  
                    <template slot="tab-pane-1">

                      <div class="container-fluid">
                        <div class="row row-cols-1 row-cols-md-4 g-4">
                        <div class="col">
                          <div class="card">
                          <img src="../assets/düzce-img/duyayinlar/hakemli1.jpg" class="card-img-top">
                          <p class="card-title text-center"><a href="https://dergipark.org.tr/tr/pub/dtfd">Düzce Tıp Fakültesi Dergisi</a></p>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card">
                          <img src="../assets/düzce-img/duyayinlar/hakemli2.jpg" class="card-img-top">
                          <p class="card-title text-center"><a href="https://dergipark.org.tr/tr/pub/duifad">İlahiyat Dergisi</a></p>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card">
                          <img src="../assets/düzce-img/duyayinlar/hakemli3.jpg" class="card-img-top">
                          <p class="card-title text-center"><a href="https://dergipark.org.tr/tr/pub/duzcesbed">Orman Fakültesi Dergisi</a></p>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card">
                          <img src="../assets/düzce-img/duyayinlar/hakemli4.jpg" class="card-img-top">
                          <p class="card-title text-center"><a href="https://dergipark.org.tr/tr/pub/dtfd">Sağlık Bilimleri Enstitüsü Dergisi</a></p>
                          </div>
                        </div>
                        </div>
                      </div>

                    </template>

                    <template slot="tab-pane-2">
                      
                      <div class="container-fluid">
                        <div class="row row-cols-1 row-cols-md-4 g-4">
                        <div class="col">
                          <div class="card">
                          <img src="../assets/düzce-img/duyayinlar/sureli1.jpg" class="card-img-top">
                          <p class="card-title text-center"><a href="https://duzce.edu.tr/Content/edergi/S12-01/html5forpc.html">Son 12 - Sayı 01 - AR-GE</a></p>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card">
                          <img src="../assets/düzce-img/duyayinlar/sureli2.jpg" class="card-img-top">
                          <p class="card-title text-center"><a href="https://duzce.edu.tr/Content/edergi/S12-01-IH/html5forpc.html">Son 12 - Sayı 1 - İHTİSASLAŞMA</a></p>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card">
                          <img src="../assets/düzce-img/duyayinlar/sureli3.jpg" class="card-img-top">
                          <p class="card-title text-center"><a href="https://duzce.edu.tr/Content/edergi/S6-01/html5forpc.html">SON 6 AY - 1</a></p>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card">
                          <img src="../assets/düzce-img/duyayinlar/sureli4.jpg" class="card-img-top">
                          <p class="card-title text-center"><a href="https://duzce.edu.tr/Content/edergi/S6-02/html5forpc.html">SON 6 AY - 2</a></p>
                          </div>
                        </div>
                        </div>
                      </div>

                    </template>

                    <template slot="tab-pane-3">

                      <div class="container-fluid">
                        <div class="row row-cols-1 row-cols-md-4 g-4">
                        <div class="col">
                          <div class="card">
                          <img src="../assets/düzce-img/duyayinlar/katalog1.jpg" class="card-img-top">
                          <p class="card-title text-center"><a href="https://duzce.edu.tr/Content/katalog/duzcedeger/html5forpc.html">Düzce'ye Değer</a></p>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card">
                          <img src="../assets/düzce-img/duyayinlar/katalog2.jpg" class="card-img-top">
                          <p class="card-title text-center"><a href="https://duzce.edu.tr/Content/edergi/2015-2019/html5forpc.html">2015-2019</a></p>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card">
                          <img src="../assets/düzce-img/duyayinlar/katalog3.jpg" class="card-img-top">
                          <p class="card-title text-center"><a href="https://duzce.edu.tr/Content/katalog/urunkatalog/html5forpc.html">Laboratuvar Envanteri</a></p>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card">
                          <img src="../assets/düzce-img/duyayinlar/katalog4.png" class="card-img-top">
                          <p class="card-title text-center"><a href="https://duzce.edu.tr/Content/katalog/laboratuvarenvanter/html5forpc.html">Tıp Fakültesi ve Hastanesi Tanıtım2</a></p>
                          </div>
                        </div>
                        </div>
                      </div>

                    </template>

                    <template slot="tab-pane-4">

                      <div class="container-fluid">
                        <div class="row row-cols-1 row-cols-md-4 g-4">
                        <div class="col">
                          <div class="card">
                          <img src="../assets/düzce-img/duyayinlar/ebulten1.jpg" class="card-img-top">
                          <p class="card-title text-center"><a href="https://duzce.edu.tr/Content/ebulten/S1-IH.pdf">İHTİSASLAŞMA: Yıl: 1 Özel Sayı: 1 / Nisan 2021</a></p>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card">
                          <img src="../assets/düzce-img/duyayinlar/ebulten2.jpg" class="card-img-top">
                          <p class="card-title text-center"><a href="https://duzce.edu.tr/Content/ebulten/S1.pdf">Yıl: 1 Sayı: 1 / Nisan 2021</a></p>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card">
                          <img src="../assets/düzce-img/duyayinlar/ebulten3.jpg" class="card-img-top">
                          <p class="card-title text-center"><a href="https://duzce.edu.tr/Content/ebulten/S2.pdf">Yıl: 1 Sayı: 2 / Nisan 2021</a></p>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card">
                          <img src="../assets/düzce-img/duyayinlar/ebulten4.jpg" class="card-img-top">
                          <p class="card-title text-center"><a href="https://duzce.edu.tr/Content/ebulten/S3.pdf">Yıl: 1 Sayı: 3 / Mayıs 2021</a></p>
                          </div>
                        </div>
                        </div>
                      </div>

                    </template>

                  </tabs>
                </div>
              </div>
            </div>
          </div>
</div>

  
      </div>
    </div>




  </div>
</template>

<script>
import { Tabs } from "@/components";
  export default {
      components: {
    Tabs
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


