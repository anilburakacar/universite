
<template>
  <div>
    <!-- link -->
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,700&display=swap" rel="stylesheet">
    <div class="wrapper">    
        <div class="container">
        <div class="row">

            <div class="col-md-12 col-lg-4">
                <div class="card mx-30">
                    <iframe src="https://www.youtube-nocookie.com/embed/mSS-tfXDrT4" frameborder="0"></iframe>
                      <div class="card-body">
                        <h5 class="card-title">DÜ</h5>
                        <h6>Tanıtım</h6>
                        <p class="card-text">
                        Düzce Üniversitesi’nin temelleri, 1976 yılında İstanbul Teknik Üniversitesi Sakarya Mühendislik Fakültesi’ne bağlı 
                        olarak Düzce Meslek Yüksekokulu’nun açılışına kadar dayanmaktadır.                     
                        </p>
                           <div class="socials">
                            <mdb-btn color="danger" size="lg"> Git </mdb-btn>
                        </div>
                     </div>
               </div>
           </div>

            <div class="col-md-12 col-lg-4">
                      <div class="card mx-30">
                          <iframe src="https://www.youtube-nocookie.com/embed/z2hqyvV6Me0" frameborder="0"></iframe>
                            <div class="card-body">
                              <h5 class="card-title">DÜ</h5>
                              <h6>15.Yıl Belgeseli</h6>
                              <p class="card-text">
                                Değer Üreten Üniversite 15 Yaşında...
                                <br><br>
                                "17 Mart 2006 - 17 Mart 2021"
                                <br><br>
                                </p>        
                              <div class="socials">
                                  <mdb-btn color="danger" size="lg"> Git </mdb-btn>
                              </div>
                          </div>
                    </div>
            </div>

            <div class="col-md-12 col-lg-4">
                          <div class="card mx-30">
                              <iframe src="https://www.youtube.com/embed/OTmdhYvdFiI" frameborder="0" allowfullscreen></iframe>
                                <div class="card-body">
                                  <h5 class="card-title">DÜ</h5>
                                  <h6>Her Şey Sizinle Güzel</h6>
                                  <p class="card-text">
                                    Sizinle Eğleniyoruz. <br>
                                    Sizinle Tat Alıyoruz. <br>
                                    Sizinle Gülüyoruz <br>
                                    Sizinle Mutlu Oluyoruz. <br>
                                  </p>
                            <div class="socials">
                                      <mdb-btn color="danger" size="lg"> Git </mdb-btn>
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
 import { mdbBtn } from 'mdbvue';
  export default {
    components: {
      mdbBtn
    }
  }
</script>

<style scoped>
body {
 font-family: 'Lato', sans-serif;
 background-color: #f4b927;
}
.wrapper {
padding-top: 120px;
}
.card-img-top {
box-shadow: 0 5px 10px rgba(0,0,0,0.5);
}
.card-body{
    text-align: center;
    box-shadow: 0px 15px 15px -8px rgba(0,0,0,0.5)
}
.card-body h6 {
font-size: 14px;
text-transform: uppercase;
color: deeppink;
}
.card-title {
text-transform: uppercase;
font-weight: bold;
font-size: 24px;
}

.socials a {
width: 40px;
height: 40px;
display: inline-block;
border-radius: 50%;
margin: 0 5px;
}
.socials a i {
color: #fff;
padding: 12px 0;
}    

.socials a:nth-child(1) {
background: #3b5998;
}.socials a:nth-child(2) {
background: #ff0000;
}.socials a:nth-child(3) {
background: #007bb5;
}.socials a:nth-child(4) {
background: #ea4c89;
}

@media (max-width: 800px){
    .mx-30{
        margin-bottom: 30px;
    }
}

</style>