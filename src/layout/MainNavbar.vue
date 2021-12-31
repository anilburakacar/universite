<template>

  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"                 
    :color-on-scroll="colorOnScroll"
  >
      <a href="#/">
        <img src="../assets/düzce-img/logo.jpg" style="width:60px; height:60px; border-radius:30px; margin-right:20px" class="text-left">
        </a>
    <div class="md-toolbar-row md-collapse-lateral">
     <div class="md-toolbar-section-start">
        <a href="#/">
            <h3 class="md-title" style="font-weigth:700px;">Düzce Üniversitesi</h3>
        </a>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
            </mobile-menu>
            <md-list>


              <!-- üniversitemiz -->
              <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">apps</i>
                        <p>Üniversitemiz</p>
                        
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a href="#/duzce">
                            <i class="material-icons">layers</i>
                            <p>Düzce</p> 
                          </a>
                        </li>
                       <li>
                          <a href="#/kurulus">
                            <i class="material-icons">layers</i>
                            <p>Kuruluş</p> 
                          </a>
                        </li>
                         <li>
                          <a href="#/yonetim">
                            <i class="material-icons">layers</i>
                            <p>Yönetim</p> 
                          </a>
                        </li>
                         <li>
                          <a href="#/sayilarladu">
                            <i class="material-icons">layers</i>
                            <p>Sayılarla DÜ</p> 
                          </a>
                        </li>
                         <li>
                          <a href="#/siralamalar">
                            <i class="material-icons">layers</i>
                            <p>Sıralamalar</p> 
                          </a>
                        </li>
                         <li>
                          <a href="#/kurumsalstrateji">
                            <i class="material-icons">layers</i>
                            <p>Kurumsal Strateji</p> 
                          </a>
                        </li>
                         <li>
                          <a href="#/idaribirimler">
                            <i class="material-icons">layers</i>
                            <p>İdare Birimler</p> 
                          </a>
                        </li>
                         <li>
                          <a href="#/kampüsyasami">
                            <i class="material-icons">layers</i>
                            <p>Kampüs Yaşamı</p> 
                          </a>
                        </li>
                         <li>
                          <a href="#/isbirlikleri">
                            <i class="material-icons">layers</i>
                            <p>İşbirlikleri</p> 
                          </a>
                        </li>
                         <li>
                          <a href="#/tanitimfilmleri">
                            <i class="material-icons">layers</i>
                            <p>Tanıtım Filmleri/Fotoğraf Galerisi</p> 
                          </a>
                        </li>
                         <li>
                          <a href="#/yonetmelik">
                            <i class="material-icons">layers</i>
                            <p>Yönetmelik ve Yönergeler</p> 
                          </a>
                        </li>
                         <li>
                          <a href="#/bilgiguvenligi">
                            <i class="material-icons">layers</i>
                            <p>Bilgi Güvenliği Politikamız</p> 
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>



             <!-- akademik -->
              <li class="md-list-item" >
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">apps</i>
                        <p>Akademik</p>
                        
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a href="#/fakulteler">
                            <i class="material-icons">layers</i>
                            <p>Fakülteler</p> 
                          </a>
                        </li>
                       <li>
                          <a href="#/enstituler">
                            <i class="material-icons">layers</i>
                            <p>Enstitüler</p> 
                          </a>
                        </li>
                         <li>
                          <a href="#/yuksekokullar">
                            <i class="material-icons">layers</i>
                            <p>Yüksekokullar</p> 
                          </a>
                        </li>
                         <li>
                          <a href="#/meslekyuksekokullari">
                            <i class="material-icons">layers</i>
                            <p>Meslek Yüksekokulları</p> 
                          </a>
                        </li>
                         <li>
                          <a href="#/kurullar">
                            <i class="material-icons">layers</i>
                            <p>Kurullar</p> 
                          </a>
                        </li>
                         <li>
                          <a href="#/bolumbaskanliklari">
                            <i class="material-icons">layers</i>
                            <p>Bölüm Başkanlıkları</p> 
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>



             <!-- arastırma -->
              <li class="md-list-item" >
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">apps</i>
                        <p>Araştırma</p>
                        
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a href="#/arastirmamerkezleri">
                            <i class="material-icons">layers</i>
                            <p>Araştırma Merkezleri</p> 
                          </a>
                        </li>
                       <li>
                          <a href="https://cdn.duzce.edu.tr/File/GetFile/d834bcb6-f351-49f7-98d2-b8b1dba20280">
                            <i class="material-icons">layers</i>
                            <p>Laboratuvar Envanteri</p> 
                          </a>
                        </li>
                         <li>
                          <a href="#/teknoloji">
                            <i class="material-icons">layers</i>
                            <p>Teknoloji Transfer Ofisi</p> 
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>



             <!-- ihtisaslasma-->
              <li class="md-list-item" >
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">apps</i>
                        <p>İhtisaslaşma</p>
                        
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a href="#/programkapsami">
                            <i class="material-icons">layers</i>
                            <p>Program Kapsamı</p> 
                          </a>
                        </li>
                       <li>
                          <a href="#/tibbibitki">
                            <i class="material-icons">layers</i>
                            <p>Tıbbi Bitki Yetiştiriciliği</p> 
                          </a>
                        </li>
                         <li>
                          <a href="#/urunlermarkalar">
                            <i class="material-icons">layers</i>
                            <p>Ürünler/Markalar</p> 
                          </a>
                        </li>
                         <li>
                          <a href="#/uretimmerkezi">
                            <i class="material-icons">layers</i>
                            <p>Üretim Merkezi</p> 
                          </a>
                        </li>
                         <li>
                          <a href="#/geleneksel">
                            <i class="material-icons">layers</i>
                            <p>Geleneksel ve Tamamlayıcı Tıp Faaliyetleri</p> 
                          </a>
                        </li>
                         <li>
                          <a href="#/tarimsal">
                            <i class="material-icons">layers</i>
                            <p>Tarımsal Atıkların Geri Kazanımı Faaliyetleri</p> 
                          </a>
                        </li>
                         <li>
                          <a href="#/aricilik">
                            <i class="material-icons">layers</i>
                            <p>Arıcılık/Arı Ürünleri</p> 
                          </a>
                        </li>
                         <li>
                          <a href="#/bilimselyayinlar">
                            <i class="material-icons">layers</i>
                            <p>Bilimsel Yayınlar</p> 
                          </a>
                        </li>
                         <li>
                          <a href="#/isbirliklerigaleri">
                            <i class="material-icons">layers</i>
                            <p>İşbirlikleri</p> 
                          </a>
                        </li>
                         <li>
                          <a href="#/etkinlikler">
                            <i class="material-icons">layers</i>
                            <p>Etkinlikler</p> 
                          </a>
                        </li>
  
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>




             <!-- Yayınlar ve Duyurular -->
         
              <md-list-item
                href="#/duyayinlar"
              >
                <i class="material-icons">content_paste</i>
                <p>DÜYayınlar</p>
              </md-list-item>

              <md-list-item
                href="#/duduyurular"
              >
                <i class="material-icons">cloud_download</i>
                <p>DÜDuyurular</p>
              </md-list-item>

            <!-- Social Media -->

              <md-list-item
                href="https://twitter.com/duzceuniversite"
                target="_blank"
              >
                <i class="fab fa-twitter"></i>
                <p class="hidden-lg">Twitter</p>
                <md-tooltip md-direction="bottom"
                  >Twitter'a git</md-tooltip
                >
              </md-list-item>
              <md-list-item
                href="https://www.facebook.com/DuzceUniversite/"
                target="_blank"
              >
                <i class="fab fa-facebook-square"></i>
                <p class="hidden-lg">Facebook</p>
                <md-tooltip md-direction="bottom"
                  >Facebook'a git</md-tooltip
                >
              </md-list-item>
              <md-list-item
                href="https://www.instagram.com/duzceuniversite/"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
                <p class="hidden-lg">Instagram</p>
                <md-tooltip md-direction="bottom"
                  >Instagram'a git</md-tooltip
                >
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>
































<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false
    };
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["login", "landing", "profile"];
      return excludedRoutes.every(r => r !== this.$route.name);
    }
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>
