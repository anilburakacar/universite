<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    >
      <div class="container">
           <h1 class="title">Ana Sayfa/Bilgi Güvenliği Politikamız</h1>
      </div>
       </parallax>



    <div class="main main-raised">
      <div class="section profile-content">


 <div class="wrapper">
    <div id="navigation-pills">
      <div class="title">
        <h3 class="title text-center">BİLGİ GÜVENLİĞİ POLİTİKAMIZ</h3>
        <br><br>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-size-100 md-small-size-100">
          <tabs
            :tab-name="[' Başkanlığımız',
             'Yönetim',
             'Personel',
             'Kurumsal',
             'EBYS',
             'Programlar',
             'İletişim',]"
            :tab-icon="[]"
            plain
            flex-column
            nav-pills-icons
            color-button="dark"
          >

            <template slot="tab-pane-1">

                <h3 class="title text-center">Başkanlığımız</h3>
                <hr><br>
              <div class="ms-5">
              <h4 class="title">KURULUŞ</h4>
              <h5>Başkanlığımız, 124 sayılı Yükseköğretim Üst Kuruluşları ile Yükseköğretim Kurumlarının İdari Teşkilatı Hakkında Kanun Hükmünde Kararnamenin
              34. maddesince kurulmuştur.
              </h5>
              <br>
              <h4 class="title">MİSYON</h4>
              <h5>Bilginin en önemli değer olduğu günümüzde Üniversitemizde bilgi ve teknolojiyi üretecek tüm faaliyetlere yardımcı ve destek olmak, 
              Üniversitemizde akademik eğitim ve araştırma faaliyetleri ile idari iş yürütme ve geliştirme süreçlerine en gelişmiş teknolojileri , 
              ağ, yazılım ve donanım gereksinimlerini uluslararası standartları da kullanmak suretiyle karşılamak, Uluslararası standartlarda sağlamak, 
              olabildiğince hızlı, kesintisiz ve kaliteli hizmet sunmak.
              </h5>
              <br>
               <h4 class="title">VİZYON</h4>
              <h5>Misyonumuzda belirtilen hizmetleri artan bir verimlilikte gerçekleştirmenin yanı sıra bilgi teknolojilerini en üst seviyede uygulamak, 
                yaygın bir şekilde kullanılabilirliğini sağlamak, doğru teknolojileri üniversitemize taşımak ve bilişim teknolojilerinin uygulanma seviyesi 
                açısından ülkemizde en ön sırada yer almak, kurumumuzu alanında öncü konuma yükseltecek projeler üretmek konuya ilişkin uygulamaları hayata 7
                geçirmek suretiyle eğitim, araştırma ve idari iş süreçleri açısından toplam kalitesi yüksek, bilişim yönüyle tercih edilen, uluslar arası 
                standartları benimseyen ve uygulayan bir elektronik üniversitenin önemli bir bileşeni ve kurum içinde kendi alanında e-dönüşümün öncü ve 
                itici gücü olmaktır.
                </h5>
              </div>
            
            </template>

            <template slot="tab-pane-2">

              <div class="text-center ms-5">
                 <h3 class="title ms-5 text-center">Yönetim</h3>
                <hr><br>
                  <img src="../../assets/düzce-img/bilgiislem/bilgiislem.jpg" class="w-75">
                  <h4 class="card-title text-center">Prof. Dr. Resul KARA</h4>
                  <h5 class="text-center">Bilgi İşlem Daire Başkanı V.</h5>
            </div>

            </template>

            <template slot="tab-pane-3">


               <div class="ms-5">
              <h4 class="title">Personel/Akademik Personel</h4>
              <hr>

              <h5 class="title">Profesör</h5>
              <h5>Prof. Dr. Resul Kara</h5>

              <h5 class="title">Doktor Öğretim Üyesi</h5>
              <h5>Dr. Öğr. Üyesi Serdar KIRIŞOĞLU</h5>

              <h5 class="title">Öğretim Görevlisi</h5>
              <h5>
              Zeynep BOZDOĞAN <br>
              Aylin ŞEVİK YALÇIN <br>
              Çağatay AY <br>
              Emin ŞEŞEN <br>
              Hüseyin Avni ARDAÇ <br>
              Levent SABAH <br>
              Muhammet TAY <br>
              Mehmet Osman DEVRİM <br>
              Murat GÖKMEN <br><br>
              </h5>

              <h4 class="title">Personel/İdari Personel</h4>
              <hr>

              <h5 class="title">Mühendis</h5>
              <h5>
              Abdurrahman YAKUPOĞLU <br>
              Ramazan ARSLAN <br>
              Metin ÇİFCİ <br>
              Levent Erbey <br>
              Yaşar ERGÜN <br>
              </h5>

              <h5 class="title">Tekniker</h5>
              <h5>
              Hasan Hüseyin BEDİR <br>
              Serhat ULUS <br>
              </h5>

              <h5 class="title">Teknisyen</h5>
              <h5>Abdulkadir ALP</h5>
              
              <h5 class="title">Bilgisayar İşletmeni</h5>
              <h5>Gülşah KABLAN</h5>
            </div>
            
            
            
            
            </template>

            <template slot="tab-pane-4">
               <div class="ms-5"><h3 class="title text-center">Kurumsal</h3>
                <hr><br>
              <h4 class="title">BGYS Politikamız</h4>
              <h5>
              İdaremizin hedefleri doğrultusunda çalışmalarını gerçekleştirirken üretilen, kamu kurum/kuruluşları ile ortak kullanılan her formattaki verinin 
              BGYS gereksinimleri çerçevesinde güvenliğinin sağlanması, bilgi varlıklarımıza yönelik kasıtlı veya kasıtsız her türlü tehdidin belirlenmesi ve 
              bu tehditlerin oluşturabileceği risklerin yönetilebilmesi, E-Devlet çalışmaları kapsamında oluşturulan ULAKNET ağı üzerinden sağlanan veri 
              alışverişinin güvenliğinin sağlanması amacıyla;    
              <br>
              BGYS’nin yürütülmesi için kullanılan süreç ve faaliyetlerin sürekli iyileştirilmesi amacıyla düzenli gözden geçirilmesini, <br>
              Kapsam dâhilindeki kurumsal bilginin gizliliği, bütünlüğü, yetkiler dâhilinde erişilebilirliği ve sürekliliğini, <br>
              Yasal düzenlemelere, mevzuat hükümlerine ve sözleşmelere uygun şekilde hizmetlerin; hatasız, mümkün olan en kısa sürede ve 
              kesintisiz olarak sunulmasını, <br>
              İş süreçlerinin bilgi güvenliği yönetim sistemi kapsamında hazırlanan ve onaylanan politika ve prosedürlere uygun şekilde yürütülmesini, <br>
              Bilgi güvenliği risklerinin tanımlanmasını ve sistematik olarak yönetilmesini, <br>
              Bütünsel yaklaşımımız gereği personelimizin ve iş ortaklarımızın yönetim sistemlerimize katılımını ve uyumunu sağlamak için bilinçlendirici, 
              yönlendirici faaliyetler ve eğitim programları planlanmasını, <br>
              Bilgi teknolojileri alanında meydana gelen gelişim ve değişime uyumluluk amacıyla, bilgi güvenliği performansını etkileyen personelin istenilen
               yeterliliğe ulaşması için gerekli eğitimlerin alınması, dinamik bir yapı oluşturulması ve otoriteler ile iletişimin arttırılmasını, <br>
              BGYS’nin kurum kültürümüzün vazgeçilmez bir parçası olarak uygulanmasını, <br>
              taahhüt ederiz. <br>
              </h5>
              <br>
              <h4 class="title">İş Akış Süreçleri</h4> 
              <h5>
              01- <a href="https://bilgiislem.duzce.edu.tr/Dokumanlar/bilgiislem/Dosyalar/ickontrol/isakissemasi/01_Bilgi İşlem Ş.M. İş Akış Şeması.xlsx">
              Bilgi İşlem Şube Müdürlüğü</a>
              <br>
              02- <a href="https://bilgiislem.duzce.edu.tr/Dokumanlar/bilgiislem/Dosyalar/ickontrol/isakissemasi/02_Yazılım Ş.M. İş Akış Şeması.xlsx">
              Yazılım Şube Müdürlüğü</a>
              <br>
              03- <a href="https://bilgiislem.duzce.edu.tr/Dokumanlar/bilgiislem/Dosyalar/ickontrol/isakissemasi/03_İnternet Hizmetleri Ş.M. İş Akış Şeması.xlsx">
              İnternet Hizmetleri Şube Müdürlüğü</a>
              <br>
              04- <a href="https://bilgiislem.duzce.edu.tr/Dokumanlar/bilgiislem/Dosyalar/ickontrol/isakissemasi/04_Haberleşmeİ Hizmetleri Ş.M. İş Akış Şeması.xlsx">
              Haberleşme Hizmetleri Şube Müdürlüğü</a></h5>

              <br>
              <h4 class="title">Görev Tanımları</h4>
              <h5>01-&nbsp;
                <a href="https://bilgiislem.duzce.edu.tr/Dokumanlar/bilgiislem/Dosyalar/ickontrol/gorevtanimlari/01-BİDB.Bilgi İşlem Daire Başkanı Görev Tanımı.doc">
                Bilgi İşlem Daire Başkanı</a>
                <br>
                02-&nbsp;
                <a href="https://bilgiislem.duzce.edu.tr/Dokumanlar/bilgiislem/Dosyalar/ickontrol/gorevtanimlari/02-BİDB.Yazılım Şube Müdürü Görev Tanımı.doc">
                Yazılım Şube Müdürü</a>
                <br>
                03-&nbsp;<a href="https://bilgiislem.duzce.edu.tr/Dokumanlar/bilgiislem/Dosyalar/ickontrol/gorevtanimlari/03-BİDB.Bilgi İşlem Şube Müdürü Görev Tanımı.doc">
                Bilgi İşlem Şube Müdürü</a>
                <br>
                04- <a href="https://bilgiislem.duzce.edu.tr/Dokumanlar/bilgiislem/Dosyalar/ickontrol/gorevtanimlari/04-BİDB.İnternet Hizmetleri Şube Müdürü Görev Tanımı.doc">
                İnternet Hizmetleri Şube Müdürü</a>
                <br>
                05- <a href="https://bilgiislem.duzce.edu.tr/Dokumanlar/bilgiislem/Dosyalar/ickontrol/gorevtanimlari/05-BİDB.Haberleşme Hizmetleri Şube Müdürü Görev Tanımı.doc">
                Haberleşme Hizmetleri Şube Müdürü</a>
                <br>
                06- <a href="https://bilgiislem.duzce.edu.tr/Dokumanlar/bilgiislem/Dosyalar/ickontrol/gorevtanimlari/06-BİDB.Veri Hazırlama ve Kontrol İşletmeni Görev Tanımı - Kopya.doc">
                Veri Hazırlama ve Kontrol İşletmeni</a>
                <br>
                07- <a href="https://bilgiislem.duzce.edu.tr/Dokumanlar/bilgiislem/Dosyalar/ickontrol/gorevtanimlari/07-BİDB.Web Tasarımcısı Görev Tanımı.doc">
                Web Tasarımcısı</a>
                <br>
                08- <a href="https://bilgiislem.duzce.edu.tr/Dokumanlar/bilgiislem/Dosyalar/ickontrol/gorevtanimlari/08-BİDB.Sekreter Görev Tanımı.doc">
                Sekreter</a>
                <br>
                09- <a href="https://bilgiislem.duzce.edu.tr/Dokumanlar/bilgiislem/Dosyalar/ickontrol/gorevtanimlari/09-BİDB.Taşınır Kayıt ve Kontrol Yetkilisi Görev Tanımı.doc">
                Taşınır Kayıt ve Kontrol Yetkilisi</a>
                <br>
                10- <a href="https://bilgiislem.duzce.edu.tr/Dokumanlar/bilgiislem/Dosyalar/ickontrol/gorevtanimlari/10-BİDB.Donanım Bakım Onarım Teknisyeni Görev Tanımı.doc">
                Donanım Bakım Onarım Teknisyeni</a>
                <br>
                11- <a href="https://bilgiislem.duzce.edu.tr/Dokumanlar/bilgiislem/Dosyalar/ickontrol/gorevtanimlari/11-BİDB.Yazılım Personeli Görev Tanımı - Kopya.doc">
                Yazılım Personeli</a></h5>
                </div>
            </template>

            <template slot="tab-pane-5">
               <div class="ms-5"><h3 class="title text-center">EBYS (Elektronik Belge Yönetim Sistemi)</h3>
                <hr><br>
                <h4 class="title">Ebys sistemine giriş yapabilmek için;</h4>
                <h5><a href="http://ebys.duzce.edu.tr/enVision/Login.aspx" class="text-center">http://ebys.duzce.edu.tr/enVision/Login.aspx</a>
                adresinden giriş yapabilirsiniz.
                <br><br>
                EBYS'de 23.10.2020 tarihinde yapılan güncelleme işlemi sonrasında kullanıcıların uygulaması gereken işlemler hakkında bilgilendirme 
                dökümanı için tıklayınız. 
                <br>
                </h5>
                <h4 class="title">İnternet explorer (8,9 sürümleri ) sahip tarayıcıdan sisteme giriş yaparken;</h4>
                <img src="../../assets/düzce-img/bilgiislem/ebys1.png"  class="img-responsive w-75">
                <h5>İnternet explorerdan sisteme giriş yaparken kullanıcı adı ve şifre girilmeden önce uyumluluk görünümü ikonuna
                (yukarıdaki resimdeki kırmızı ikon) tıklanılıp ardından kullanıcı adı ve şifre girilerek sisteme giriş yapılmalıdır.
                <br><br>
                Kırmızı ile seçili ikon görünmüyorsa aşağıdaki işlemleri gerçekleştirmelidir.
                <br>
                </h5>
                <img src="../../assets/düzce-img/bilgiislem/ebys2.png"  class="img-responsive h-50 w-50">
                <br>
                <h5>ya da 
                <br><br>
                “ Araçlar “ sekmesinden “ Uyumluluk Görünümü Ayarları “ tıklanır. 
                <br>
                </h5>
                <img src="../../assets/düzce-img/bilgiislem/ebys3.png"  class="img-responsive h-25 w-50">
                <br><br>
                <h5>açılan pencerede ekle butonuna basılır</h5>
                <br>
                <img src="../../assets/düzce-img/bilgiislem/ebys4.png"  class="img-fluid h-25 w-25 me-4">
                <img src="../../assets/düzce-img/bilgiislem/ebys5.png"  class="img-fluid h-25 w-25">
                <h5>
                <br>
                01.10.2013 itibari ile ebys yazılımını kullanmaya başlayacak olan birimler ;
                <br><br>
                Bilgi İşlem Daire Başkanlığı <br>
                Yapı İşleri ve Teknik Daire Başkanlığı <br>
                Hukuk Müşavirliği <br>
                Sağlık Kültür ve Spor Daire Başkanlığı <br>
                Mühendislik Fakültesi <br><br>
                Sisteminizde Elektronik Belge Yönetim Sistemi (EBYS) çalışabilmesi için sisteminizde Java Yüklü Olması Gerekmektedir; <br>
                <br>
                Bilgisayarınızın işletim sistemine göre aşağıdaki java ve web twain linklerine tıklayarak dosyaları indirdikten sonra sıkıştırılmış dosyaları
                açıp exe dosyalarını çalıştırıp kurmanız gerekmektedir.
                <br><br>
                Windows7, Vista, Windows8 kullanıcılarının bu dosyaları yönetici olarak çalıştır diyerek kurulum yapmaları gerekmektedir.
                </h5>
                </div>

            </template>

            <template slot="tab-pane-6">
               <div class=" ms-5"><h3 class="title text-center">Kurumsal</h3>
                <hr><br>

              <table style="line-height: 1.6; width: 100%;" cellpadding="5" cellspacing="0">
                <tbody>
                    <tr>
                        <td colspan="2" >
                        <h4 class="title">Düzce Üniversitesi Takvim</h4>
                        </td>
                    </tr>
                    <tr>
                        <td><h5>Düzce Üniversitesi Takvim Aracı (Windows7-Windows8)</h5></td>
                        <td style="width: 26px;"><a href="https://bilgiislem.duzce.edu.tr/Dokumanlar/bilgiislem/Programlar/duGadget.gadget">İndir</a><br />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" >
                        <h4 class="title">Düzce Üniversitesi Abone Veritabanları (Gadget)</h4>
                        </td>
                    </tr>
                    <tr>
                        <td><h5>Düzce Üniversitesi Abone Veritabanları Hızlı Erişim Aracı (Windows7-Windows8)</h5></td>
                        <td style="width: 26px;"><a href="https://bilgiislem.duzce.edu.tr/Dokumanlar/bilgiislem/Programlar/AboneVT.rar">İndir</a><br />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" >
                        <h4 class="title">Antivirüs</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <div><h5>Avıra Antıvır Professıonal 32-64 Bit (Türkçe) (Win8 uyumlu)</h5></div>
                        </td>
                        <td><a href="https://bilgiislem.duzce.edu.tr/Dokumanlar/bilgiislem/Programlar/Duzce_Edu_Avira_Sessiz_Kurulum.exe">İndir</a><br />
                        </td>
                    </tr>
                    <tr>
                        <td><h5>Avıra Antıvır Professıonal 32-64 Bit (İngilizce) (Win8 uyumlu)</h5></td>
                        <td><a href="https://bilgiislem.duzce.edu.tr/Dokumanlar/bilgiislem/programlar/Duzce_Edu_Avira_Sessiz_Kurulum.exe">İndir</a><a href="https://bilgiislem.duzce.edu.tr/Dokumanlar/bilgiislem/programlar/Duzce_Edu_Avira_Sessiz_Kurulum.exe">&nbsp;</a></td>
                    </tr>
                    <tr>
                        <td colspan="2" >
                        <h4 class="title">FTP Programları</h4>
                        </td>
                    </tr>
                    <tr>
                        <td><h5>FILEZILLA 3.5.3</h5></td>
                        <td><a href="http://sourceforge.net/projects/filezilla/files/FileZilla_Client/3.7.1.1/FileZilla_3.7.1.1_win32-setup.exe/download?accel_key=57%3A1375364138%3Ahttps%253A//filezilla-project.org/download.php%253Ftype%253Dclient%3A1a66cb29%2438073e4d480a7b15fa47b93228e99f42f0affaa3&amp;click_id=4081311a-faaf-11e2-bc4b-0200ac1d1da0&amp;source=accel">İndir</a><br />
                        </td>
                    </tr>
                    <tr>
                        <td><h5>FileZilla Kullanım Dökümanı</h5></td>
                        <td><a href="https://bilgiislem.duzce.edu.tr/Dokumanlar/bilgiislem/e8148b00-4a9d-49c8-bfb5-a4652afaee29.pdf">İndir</a><a href="https://bilgiislem.duzce.edu.tr/Dokumanlar/bilgiislem/e8148b00-4a9d-49c8-bfb5-a4652afaee29.pdf" target="_blank">&nbsp;</a></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                        <h4 class="title">Uzaktan Erişim Programı</h4>
                        </td>
                    </tr>
                    <tr>
                        <td><h5>Alpemix<br /></h5></td>
                        <td><a href="https://bilgiislem.duzce.edu.tr/Dokumanlar/bilgiislem/ebys/Alpemix.rar">İndir</a></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                        <h4 class="title">Diğer</h4>
                        </td>
                    </tr>
                    <tr>
                        <td><h5>SPSS</h5></td>
                        <td><a href="http://spss.bilgiislem.duzce.edu.tr">İndir</a><br />
                        </td>
                    </tr>
                </tbody>
              </table>
              </div>
            </template>

            <template slot="tab-pane-7">
             <div class=" ms-5"><h3 class="title text-center">Kurumsal</h3>
                <hr><br>
             <h4>Düzce Üniversitesi Rektörlüğü Bilgi İşlem Daire Başkanlığı</h4>
             <h4>Rektörlük Binası 3. Kat Konuralp Yerleşkesi / DÜZCE 81620</h4>
             <h4><strong>Tel No:</strong> 0 380 542 11 12</h4>
             <h4><strong>Faks No:</strong> 0 380 542 11 13</h4>
             <h4><strong>E-Posta Adresi:</strong> bilgiislem@duzce.edu.tr </h4>
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


