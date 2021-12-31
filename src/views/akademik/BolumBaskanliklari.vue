<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    >
      <div class="container">
           <h1 class="title">Ana Sayfa/Bölüm Başkanlıkları</h1>
      </div>
       </parallax>




    <div class="main main-raised">
      <div class="section profile-content">
      <h3 class="title text-center">BÖLÜM BAŞKANLIKLARI</h3>
      <hr>




 <div class="wrapper">
    <div id="navigation-pills">
      <div class="md-layout">
        <div class="md-layout-item md-size-100 md-small-size-100">
          <tabs
            :tab-name="['Atatürk İlkeleri',
             'Türk Dili']"
            :tab-icon="['dashboard', 'dashboard']"
            plain
            flex-column
            nav-pills-icons
            color-button="danger"
          >

            <template slot="tab-pane-1">
              <h4 class="title">Atatürk İlkeleri ve İnkılap Tarihi Bölümü</h4>
              <h5>
              Günümüzde okul ve üniversitelerde okutulan Atatürk İlkeleri ve İnkılap Tarihi Dersleri, hem Cumhuriyet tarihi kadar bir geçmişe sahiptir,
              hem de Atatürk’ün bizlere armağan ettiği kültür ve eğitim mirasıdır.
              <br><br>
              "Atatürk İlkeleri ve İnkılap Tarihi" derslerinin amacı; Türk Devriminin ruhunu ve hedeflerini kavrayarak geliştirecek yeni nesiller 
              yetiştirmektir. Böylece, Mustafa Kemal’in söylediği gibi; “Devrimin amacını kavramış olanlar sürekli olarak onu koruma gücüne sahip olacaklardır.”
              <br><br>
              Devrimin amacının kavranabilmesi için, Türk Bağımsızlık Savaşı, Atatürk Devrimleri ve Atatürkçü Düşünce Sistemi ile Türkiye 
              Cumhuriyeti Tarihi hakkında doğru bilgiler vermek Türk gençliğini Atatürkçü Düşünce Sistemi doğrultusunda yetiştirmek gereklidir. 
              Atatürk ilkeleri ve İnkılapları dersi, bu görevi üstlenmiştir. 
              <br><br>
              Cumhuriyet rejiminin sürekli olması, yeni kurumlar oluşturması, Atatürkçü Düşünce Sisteminin yaygınlaştırılıp geliştirilmesi ve
              ulusumuzun çağdaşlaşması için,  Atatürk İlkeleri ve İnkılap Tarihi dersleri, vazgeçilmez öneme sahiptir.  
              </h5>
              <br>
              <h4 class="title">Akademik Personel</h4>
              <br>
              <h5 class="title">Doçent</h5>
              <h5>İsmail YAŞAYANLAR</h5>
              <h5 class="title">Doktor Öğretim Üyesi</h5>
              <h5>Sibel KÜÇÜKKÜLAHLI</h5>
              <h5 class="title">Öğretim Görevlisi</h5>
              <h5>
              Tuğba AŞAN <br>
              Filiz TAPAN <br>
              Barış ÇATAL <br>
              </h5>
              <br>
              <h5><a href="http://ataturkilkeleri.duzce.edu.tr/iletisim-bilgileri">Detaylı bilgi ve iletişim için tıklayın</a></h5>
            </template>

            <template slot="tab-pane-2">
              <h4 class="title">Türk Dili Bölümü</h4>
              <br>
              <h4 class="title">Akademik Personel</h4>
              <br>
              <h5 class="title">Doktor Öğretim Üyesi</h5>
              <h5>İsmail Alper KUMSAR</h5>
              <h5 class="title">Öğretim Görevlisi</h5>
              <h5>
              AYŞE ULU <br>
              Nilgün BÜYÜKER GÜNGÖR <br>
              Mithat USTA <br>
              Çiğdem SÜTÇÜ <br>
              Hilal ZENGİN <br>
              Seval PIR <br>
              Aslıhan HAZNEDAROĞLU <br>
              </h5>
              <br>
              <h5><a href="http://turkdili.duzce.edu.tr/iletisim-bilgileri">Detaylı bilgi ve iletişim için tıklayın</a></h5>
            </template>


          </tabs>
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
    components : {
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


