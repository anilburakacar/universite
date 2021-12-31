<template>
  <div class="wrapper">
         <!-- Header -->
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <img :src="leaf4" alt="leaf4" class="leaf4" v-show="leafShow" />
            <img :src="leaf3" alt="leaf3" class="leaf3" v-show="leafShow" />
            <img :src="leaf2" alt="leaf2" class="leaf2" v-show="leafShow" />
            <img :src="leaf1" alt="leaf1" class="leaf1" v-show="leafShow" />
            <div class="brand">
              <h1>Düzce Üniversitesi</h1>
              <h3>Değer Üreten Üniversite</h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>

    <div class="main main-raised">

     

      <div class="section">
        <div class="container">
          <tanitim></tanitim>
        </div>
      </div>



      <div class="section">
        <div class="container-fluid">
          <carousel></carousel>
        </div>
      </div>



       <div class="section">
        <div class="container-fluid">
          <jumbotron></jumbotron>
        </div>
      </div>

       

      <div class="section">
        <div class="container-fluid">
          <section-kart></section-kart>
        </div>
      </div>

  

      <div class="section">
        <div class="container text-center">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 ml-auto mr-auto text-center"
            >
              <h2>Üniversite Süreci</h2>
              <h4>
         1992 yılında Bolu Abant İzzet Baysal Üniversitesi’nin kurulması ile farklı bir boyuta dönüşen Düzce Üniversitesi’nin üniversiteleşme süreci; 
         Düzce Meslek Yüksekokulu’nun dışında Orman Fakültesi, Teknik Eğitim Fakültesi, Tıp Fakültesi,  Sağlık Yüksekokulu, Akçakoca Turizm İşletmeciliği 
         ve Otelcilik Yüksekokulu ile Akçakoca Meslek Yüksekokulu’nun bu üniversiteye bağlı olarak açılmasıyla birlikte daha da hızlanmıştır. 
              </h4>
            </div>
          </div>
        </div>
      </div>



      <div class="section section-signup page-header" :style="signupImage">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-33 md-medium-size-40 md-small-size-50 md-xsmall-size-70 mx-auto text-center"
            >
              <login-card header-color="green">
                <h4 slot="title" class="card-title"><a href="#/kampusyasami">Kampüs Yaşamı</a></h4>
                <md-button
                  slot="buttons"
                  href="https://www.facebook.com/DuzceUniversite/"
                  class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-facebook-square"></i>
                </md-button>
                <md-button
                  slot="buttons"
                  href="https://twitter.com/duzceuniversite"
                  class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-twitter"></i>
                </md-button>
                <md-button
                  slot="buttons"
                  href="https://www.youtube.com/user/duzceuniversite"
                  class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-youtube"></i>
                </md-button>
                <p slot="description" class="description">Kampüs</p>

                    <md-button slot="description" class="md-simple md-success md-lg" href="#/duzce">
                  Düzce 
                </md-button>
                <br>
     
                  <md-button slot="description" class="md-simple md-success md-lg" href="#/kurulus">
                  Kuruluş
                </md-button>
                <br>

             
                <md-button slot="description" class="md-simple md-success md-lg" href="#/yonetim">
                  Yönetim
                </md-button>

               
              </login-card>
            </div>
          </div>
        </div>
      </div>

    
   
      <div class="section section-download" id="downloadSection">
        <div class="container">

          <div class="md-layout text-center">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h2>Üniversite Süreci</h2>
              <h4>
                İlk kurulduğu yıllarda 3 fakültesi ve 5700 öğrencisi olan Düzce Üniversitesi; bugün 30 bini aşkın öğrencisi, 12 Fakültesi, 4 Enstitüsü, 2 Yüksekokulu, 10 Meslek Yüksekokulu, 30’dan fazla araştırma merkezi, Teknopark’ı, Araştırma ve Uygulama Hastanesi ile saygın ve tercih edilen bir yükseköğretim kurumu olarak dikkat çekmektedir.
              </h4>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100 mx-auto">
              <md-button
                href="#/tanitimfilmleri"
                target="_blank"
                class="md-success md-lg"
                ><i class="fab fa-html5"></i>Galeri</md-button
              >
              <md-button
                href="#/isbirlikleri"
                class="md-success md-lg"
                target="_blank"
                ><i class="fab fa-"></i>İşbirlikleri</md-button
              >
            </div>
          </div>
          <br /><br />

          <div class="sharing-area text-center">
            <div class="md-layout">
              <div class="md-layout-item">
                <h3>SOSYAL MEDYADAN TAKİP EDİN </h3>
              </div>
            </div>

            <md-button class="md-twitter" href="https://twitter.com/duzceuniversite"
              ><i class="fab fa-twitter"></i>Tweet</md-button
            >
            <md-button class="md-facebook" href="https://www.facebook.com/DuzceUniversite/"
              ><i class="fab fa-facebook-square"></i> Facebook</md-button
            >
            <md-button class="md-google" href="https://www.instagram.com/duzceuniversite/"
              ><i class="fab fa-instagram"></i> Instagram</md-button
            >
            <md-button class="md-youtube" href="https://www.youtube.com/user/duzceuniversite"
              ><i class="fab fa-youtube"></i> Youtube</md-button
            >
          </div>
        </div>
      </div>




    </div>
  </div>
</template>





<script>
import { LoginCard } from "@/components";
import Tanitim from "./components/Tanitim";
import Jumbotron from "./components/Jumbotron";
import SectionKart from "./components/SectionKart";
import Carousel from "./components/Carousel";
export default {
  components: {
    LoginCard,
    Tanitim,
    Jumbotron,
    SectionKart,
    Carousel,
  },
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/düzce-img/2.jpg")
    },
    leaf4: {
      type: String,
      default: require("@/assets/img/leaf4.png")
    },
    leaf3: {
      type: String,
      default: require("@/assets/img/leaf3.png")
    },
    leaf2: {
      type: String,
      default: require("@/assets/img/leaf2.png")
    },
    leaf1: {
      type: String,
      default: require("@/assets/img/leaf1.png")
    },
    signup: {
      type: String,
      default: require("@/assets/düzce-img/1.jpg")
    },
  },
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      leafShow: false
    };
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`
      }
    }
  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.leafActive);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  }
};
</script>




<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>
