<template>
  <footer
          class="text-center text-lg-start text-light foter"
          style="background-color: #ECEFF1"
         :class="{ [`footer-${type}`]: type }"
         :data-background-color="backgroundColor"
  >
    <section :style="headerStyle">

      <div class="container text-center text-md-start " >
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h1 class="text-uppercase fw-bold text-ligth">DÜZCE ÜNİVERSİTESİ</h1>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
            Düzce Üniversitesi’nin temelleri, 1976 yılında İstanbul Teknik Üniversitesi Sakarya Mühendislik Fakültesi’ne bağlı olarak Düzce Meslek
            Yüksekokulu’nun açılışına kadar dayanmaktadır.
            </p>
          </div>
       
          <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4 ">
                <h3 class="text-uppercase fw-bold bold-text">ANA KAMPÜS</h3>   
                <h4 class="text-light">
                  Düzce Üniversitesi Konuralp Yerleşkesi Yörük Mah.<br>Merkez/DÜZCE, 81620
               </h4>
          </div>


            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4 ">
                <h3 class="text-uppercase fw-bold bold-text">İLETİŞİM</h3>
                <h4 class="text-light">TEL : 0850 800 81 81</h4>
                <h4 class="text-light">FAKS: 0380 542 11 031</h4>
           </div>
        </div>
      </div>

      <div
         class="text-center p-3"
         style="background-color: rgba(0, 0, 0, 0.2)"
         >
         &copy; {{ year }}
         <a class="text-light" href="#"
         >DÜZCE ÜNİVERSİTESİ TÜM HAKLARI SAKLIDIR
         </a>
    </div>
    
    </section>
  </footer>
</template>




<script>
export default {
   props: {
    image: {
      type: String,
      default: require("@/assets/düzce-img/footer.png")}
    },
    backgroundColor: String,
    type: String
    ,
  data() {
    return {
      year: new Date().getFullYear()
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }}}
</script>
<style scoped>


</style>
