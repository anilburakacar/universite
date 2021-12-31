<template>
  <div class="wrapper">
     <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    >
      <div class="container">
           <h1 class="title">Ana Sayfa/Tanıtım Filmleri</h1>
      </div>
       </parallax>



    <div class="main main-raised">
      <div class="section profile-content">
        <br><br>
        <h3 class="title text-center">FOTOĞRAF GALERİSİ</h3>
        <hr>
        
<div class="container">
           <div class="profile-tabs">
            <tabs
              :tab-name="['DÜ', 'Z', 'CE']"
              :tab-icon="['palette', 'palette', 'palette']"
              plain
              nav-pills-icons
              color-button="success"
            >

              <template slot="tab-pane-1">
                <div class="md-layout">
                  <div class="md-layout-item md-size-50 ml-auto">
                    <img :src="tabPane1[0].image" class="rounded" />
                    <img :src="tabPane1[1].image" class="rounded" />
                      <img :src="tabPane1[2].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-50 mr-auto">
                    <img :src="tabPane1[3].image" class="rounded" />
                    <img :src="tabPane1[4].image" class="rounded" />
                      <img :src="tabPane1[5].image" class="rounded" />
                  </div>
             
                </div>
              </template>
              <template slot="tab-pane-2">
                <div class="md-layout">
                  <div class="md-layout-item md-size-50 ml-auto">
                    <img :src="tabPane2[0].image" class="rounded" />
                    <img :src="tabPane2[1].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-50 mr-auto">
                    <img :src="tabPane2[2].image" class="rounded" />
                    <img :src="tabPane2[3].image" class="rounded" />
                  </div>
                </div>
              </template>
              <template slot="tab-pane-3">
                <div class="md-layout">
                  <div class="md-layout-item md-size-50 ml-auto">
                    <img :src="tabPane3[0].image" class="rounded" />
                    <img :src="tabPane3[1].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-50 mr-auto">
                    <img :src="tabPane3[2].image" class="rounded" />
                    <img :src="tabPane3[3].image" class="rounded" />
                  </div>
                </div>
              </template>
            </tabs>
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
  data() {
    return {
      tabPane1: [
        { image: require("@/assets/düzce-img/tanitim/dü1.jpg") },
        { image: require("@/assets/düzce-img/tanitim/dü2.jpg") },
        { image: require("@/assets/düzce-img/tanitim/dü3.jpg") },
        { image: require("@/assets/düzce-img/tanitim/dü4.jpg") },
        { image: require("@/assets/düzce-img/tanitim/dü5.jpg") },
        { image: require("@/assets/düzce-img/tanitim/dü6.jpg") }
      ],
      tabPane2: [
        { image: require("@/assets/düzce-img/tanitim/dü-gece1.jpg") },
        { image: require("@/assets/düzce-img/tanitim/dü-gece2.jpg") },
        { image: require("@/assets/düzce-img/tanitim/dü-gece3.jpg") },
        { image: require("@/assets/düzce-img/tanitim/dü-gece4.jpg") }
      ],
      tabPane3: [
        { image: require("@/assets/düzce-img/tanitim/dü-kar1.jpg") },
        { image: require("@/assets/düzce-img/tanitim/dü-kar2.jpg") },
        { image: require("@/assets/düzce-img/tanitim/dü-kar3.jpg") },
        { image: require("@/assets/düzce-img/tanitim/dü-kar4.jpg") }
      ]
    };
  },
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

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
