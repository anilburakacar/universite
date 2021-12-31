import Vue from "vue";
import Router from "vue-router";

import Index from "./views/Index.vue";
import DuDuyurular from "./views/DuDuyurular.vue";
import DuYayinlar from "./views/DuYayinlar.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";



//üniversitemiz
import Duzce from "./views/universitemiz/Duzce.vue";
import Kurulus from "./views/universitemiz/Kurulus.vue";
import Yonetim from "./views/universitemiz/Yonetim.vue";
import Sayilarladu from "./views/universitemiz/Sayilarladu.vue";
import Siralamalar from "./views/universitemiz/Siralamalar.vue";
import KurumsalStrateji from "./views/universitemiz/KurumsalStrateji.vue";
import IdariBirimler from "./views/universitemiz/IdariBirimler.vue";
import KampusYasami from "./views/universitemiz/KampusYasami.vue";
import Isbirlikleri from "./views/universitemiz/Isbirlikleri.vue";
import TanitimFilmleri from "./views/universitemiz/TanitimFilmleri.vue";
import Yonetmelik from "./views/universitemiz/Yonetmelik.vue";
import BilgiGuvenligi from "./views/universitemiz/BilgiGuvenligi.vue";



//akademik
import Fakulteler from "./views/akademik/Fakulteler.vue";
import Enstituler from "./views/akademik/Enstituler.vue";
import Yuksekokullar from "./views/akademik/Yuksekokullar.vue";
import MeslekYuksekokullari from "./views/akademik/MeslekYuksekokullari.vue";
import Kurullar from "./views/akademik/Kurullar.vue";
import BolumBaskanliklari from "./views/akademik/BolumBaskanliklari.vue";


//araştırma
import ArastirmaMerkezleri from "./views/arastirma/ArastirmaMerkezleri.vue";
import Teknoloji from "./views/arastirma/Teknoloji.vue";




//ihtisaslasma
import ProgramKapsami from "./views/ihtisaslasma/ProgramKapsami.vue";
import TibbiBitki from "./views/ihtisaslasma/TibbiBitki.vue";
import UrunlerMarkalar from "./views/ihtisaslasma/UrunlerMarkalar.vue";
import UretimMerkezi from "./views/ihtisaslasma/UretimMerkezi.vue";
import Geleneksel from "./views/ihtisaslasma/Geleneksel.vue";
import Tarimsal from "./views/ihtisaslasma/Tarimsal.vue";
import Aricilik from "./views/ihtisaslasma/Aricilik.vue";
import BilimselYayinlar from "./views/ihtisaslasma/BilimselYayinlar.vue";
import IsbirlikleriGaleri from "./views/ihtisaslasma/IsbirlikleriGaleri.vue";
import Etkinlikler from "./views/ihtisaslasma/Etkinlikler.vue";




Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/duduyurular",
      name: "duduyurular",
      components: { default: DuDuyurular, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/duyayinlar",
      name: "duyayinlar",
      components: { default: DuYayinlar, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },


    //üniversitemiz

    {
      path: "/duzce",
      name: "duzce",
      components: { default: Duzce, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/kurulus",
      name: "kurulus",
      components: { default: Kurulus, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/yonetim",
      name: "yonetim",
      components: { default: Yonetim, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/sayilarladu",
      name: "sayilarladu",
      components: { default: Sayilarladu, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/siralamalar",
      name: "siralamalar",
      components: { default: Siralamalar, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/kurumsalstrateji",
      name: "kurumsalstrateji",
      components: { default: KurumsalStrateji, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/idaribirimler",
      name: "idaribirimler",
      components: { default: IdariBirimler, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

      {
      path: "/kampüsyasami",
      name: "kampüsyasami",
      components: { default: KampusYasami, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/isbirlikleri",
      name: "isbirlikleri",
      components: { default: Isbirlikleri, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

     

    {
      path: "/tanitimfilmleri",
      name: "tanitimfilmleri",
      components: { default: TanitimFilmleri, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/yonetmelik",
      name: "yonetmelik",
      components: { default: Yonetmelik, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },


    {
      path: "/bilgiguvenligi",
      name: "bilgiguvenligi",
      components: { default: BilgiGuvenligi, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    






    //akademik

    {
      path: "/fakulteler",
      name: "fakulteler",
      components: { default: Fakulteler, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/enstituler",
      name: "enstituler",
      components: { default: Enstituler, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/yuksekokullar",
      name: "yuksekokullar",
      components: { default: Yuksekokullar, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/yuksekokullar",
      name: "yuksekokullar",
      components: { default: Yuksekokullar, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/meslekyuksekokullari",
      name: "meslekyuksekokullari",
      components: { default: MeslekYuksekokullari, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/kurullar",
      name: "kurullar",
      components: { default: Kurullar, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/bolumbaskanliklari",
      name: "bolumbaskanliklari",
      components: { default: BolumBaskanliklari, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },







    //arastirma

    {
      path: "/arastirmamerkezleri",
      name: "arastirmamerkezleri",
      components: { default: ArastirmaMerkezleri, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/teknoloji",
      name: "teknoloji",
      components: { default: Teknoloji, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },





    //ihtisaslasma

    {
      path: "/programkapsami",
      name: "programkapsami",
      components: { default: ProgramKapsami, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/tibbibitki",
      name: "tibbibitki",
      components: { default: TibbiBitki, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/urunlermarkalar",
      name: "urunlermarkalar",
      components: { default: UrunlerMarkalar, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/uretimmerkezi",
      name: "uretimmerkezi",
      components: { default: UretimMerkezi, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/geleneksel",
      name: "geleneksel",
      components: { default: Geleneksel, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/tarimsal",
      name: "tarimsal",
      components: { default: Tarimsal, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/aricilik",
      name: "aricilik",
      components: { default: Aricilik, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/bilimselyayinlar",
      name: "bilimselyayinlar",
      components: { default: BilimselYayinlar, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },


    {
      path: "/isbirliklerigaleri",
      name: "isbirliklerigaleri",
      components: { default: IsbirlikleriGaleri, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/etkinlikler",
      name: "etkinlikler",
      components: { default: Etkinlikler, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },








  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
