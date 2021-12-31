<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    >
      <div class="container">
           <h1 class="title">Ana Sayfa/Enstitüler</h1>
      </div>
       </parallax>




    <div class="main main-raised">
      <div class="section profile-content">
      <h3 class="title text-center">ENSTİTÜLER</h3>
      <hr>

 <div class="wrapper">
    <div id="navigation-pills">
      <div class="md-layout">
        <div class="md-layout-item md-size-100 md-small-size-100">
          <tabs
            :tab-name="['Lisansüstü Eğitim Enstitüsü',
             'Güzel Sanatlar Enstitüsü',
             'Fen Bilimleri Enstitüsü',
             'Sağlık Bilimleri Enstitüsü',
             'Sosyal Bilimler Enstitüsü',]"
            :tab-icon="['dashboard', 'dashboard','dashboard','dashboard', 'dashboard','dashboard']"
            plain
            flex-column
            nav-pills-icons
            color-button="dark"
          >

            <template slot="tab-pane-1">

              <div class="container">
              <h4 class="title">LİSANSÜSTÜ EĞİTİM ENSTİTÜSÜ</h4>
              <br>
              <h5 class="title">Genel Bilgi</h5>
              <hr>
              <h5>                
              29.06.2021 tarih ve 31526 sayılı Resmi Gazetede yayımlanarak yürürlüğe giren 4180 sayılı Cumhurbaşkanlığı 
              Kararı ile Düzce Üniversitesi Lisansüstü Eğitim Enstitüsü kurulmuştur.
              <br><br>
              <strong>Hakkımızda</strong>
              <br>
              17 Mart 2006 tarih ve 26111 sayılı Resmi Gazete’de yayınlanan 5467 sayılı yasa ile Düzce Üniversitesi kurulduktan sonra 23.08.2007
              tarihinden itibaren Düzce Üniversitesi bünyesinde yer alan Sosyal Bilimler Enstitüsü, 2547 sayılı Yükseköğretim Yasasının 19. 
              maddesi gereğince 18.01.2007 tarihinde Eğitim-Öğretimine başlayan Sağlık Bilimleri Enstitüsü, 17/03/2006 tarihinde kurulmuş olan Fen 
              Bilimleri Enstitüsü ve 01.11.2016 tarihli Resmi Gazete’de yer alan Bakanlar Kurulu Kararı ile kurulmuş olan Güzel Sanatlar Enstitüsü
              29.06.2021 tarih ve 31526 sayılı Resmi Gazetede yayımlanarak yürürlüğe giren 4180 sayılı Cumhurbaşkanlığı Kararı ile kapatılmış
              Düzce Üniversitesi Lisansüstü Eğitim Enstitüsü kurulmuştur.
              <br><br>
              Enstitümüzde Doktora, Tezli Yüksek Lisans ve Tezsiz Yüksek Lisans programlarında eğitim verilmektedir.
              <br><br>
              <strong>Misyonumuz</strong>
              <br>
              Öğrenmeyi öğrenmenin temel alındığı bir anlayışla uzmanlaşmayı sağlamak ve bu süreçte ilgili sektörlerin gereksinim duyduğu konularda 
              bilimsel ölçekte projeler üretmektir.
              <br><br>
              <strong>Vizyonumuz</strong>
              <br>
              Öğrencilerin kişisel vizyonlarını oluşturmalarına ve hayata geçirmelerine rehberlik etmektir.
              <br>
              </h5>
              <br>
              </div>

              <div class="container">
              <h5 class="title">Yönetim</h5>
              <hr>
              <br>
              <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card">
                <img src="../../assets/düzce-img/enstitu/lisans1.png" class="card-img-top" style="height:300px;">
                <h5 class="card-title text-center">Prof. Dr. Zafer AKBAŞ</h5>
                <h5 class="text-center">Enstitü Müdürü</h5>
                </div>
              </div>
              <div class="col">
                <div class="card">
                <img src="../../assets/düzce-img/enstitu/lisans2.png" class="card-img-top" style="height:300px;">
                <h5 class="card-title text-center">Doç. Dr. Ahmet DEMİR</h5>
                <h5 class="text-center">Enstitü Müdür Yardımcısı</h5>
                </div>
              </div>
              <div class="col">
                <div class="card">
                <img src="../../assets/düzce-img/enstitu/lisans3.jpg" class="card-img-top" style="height:300px;">
                <h5 class="card-title text-center">Doç. Dr. Pınar GÜLTEKİN</h5>
                <h5 class="text-center">Enstitü Müdür Yardımcısı</h5>
                </div>
              </div>
              </div>
              </div>
              
              <div class="container">
                <br>
                <h4 class="title">İletişim</h4>
                <hr>
                <br>
                <h5 class="title">Adres</h5>
                <h5>Düzce Üniversitesi Rektörlüğü Lisansüstü Eğitim Enstitüsü Müdürlüğü Rektörlük Binası Kat:3 Konuralp/Düzce 81620</h5>
                <h5>Posta Kodu:81650</h5>
                <br>
                <h5 class="title">İletişim Kanalları</h5>
                <h5>
                Tel No: <br>
                0 (380) 542 14 37 (Sosyal Bilimler öğrenci işleri için) <br>
                0 (380) 542 12 08 (Fen Bilimleri öğrenci işleri için) <br>
                0 (380) 542 11 30 (Sağlık Bilimleri öğrenci işleri için) <br>
                0 (380) 541 30 12 (Güzel Sanatlar öğrenci işleri için) <br><br>
                E-posta adresi : lisansustu@duzce.edu.tr <br>
                </h5>
              </div>

            </template>

            <template slot="tab-pane-2">

              <div class="container">
              <h4 class="title">GÜZEL SANATLAR ENSTİTÜSÜ</h4>
              <br>
              <h5 class="title">Genel Bilgi</h5>
              <hr>
              <h5>
              <strong>Misyonumuz</strong>
              <br>
              Öğrencilerimize; ülkemizin tarihi, sosyal ve kültürel özelliklerinden beslenebilen, disiplinlerarası iş birliği kurabilen, 
              etik değerlere  bağlı, yenilikçi, yapıcı ve yaratıcı yönü ile ülke ve dünya kültürüne sanat yoluyla katkıda bulunabilecek 
              bir akademik yetkinlik kazandırmaktır. 
              <br><br>
              <strong>Vizyonumuz</strong>
              <br>
              Düzce Üniversitesi Güzel Sanatlar Enstitüsü, bilim ve sanatın iş birliğini öngören yöntem ve uygulamalarla birikimlerini çağdaş 
              bir çizgide buluşturan, Türk ve dünya sanatına yön vererek alanına katkı sağlayan bir kurum olmayı; üniversitemizin lisansüstü 
              eğitimde tercih edilen bir çekim merkezi haline getirilmesini hedeflemektedir. 
              <br><br>
              <strong>Hakkımızda</strong>
              <br>
              Düzce Üniversitesi Rektörlüğü'ne bağlı olan Güzel Sanatlar Enstitümüz; 01.11.2016 tarihli Resmi Gazete’de yer alan Bakanlar Kurulu 
              Kararı ile kurulmuştur.
              <br><br>
              Enstitümüzde (3) Tezli Yüksek Lisans (Resim ASD, Heykel ASD, Radyo Televizyon ve Sinema ASD) ve (1) Sanatta Yeterlik (Resim ASD) 
              ve (1) Doktora Programı (Radyo Televizyon ve Sinema ASD) mevcuttur. 
              <br><br>
              Enstitümüzün, Resim Anasanat Dalı ile Heykel Anasanat Dalı'nın, Resim ve Heykel Tezli Yüksek Lisans programları 2017-2018 Bahar Döneminde;
              <br><br>
              Resim Anasanat Dalı'nın, Resim Sanatta Yeterlik Programı 2018-2019 Güz Döneminde;
              <br><br>
              Radyo, Televizyon ve Sinema Anasanat Dalı'nın, Sinema ve Televizyon Tezli Yüksek Lisans programı ise 2019-2020 Güz Döneminde ilk 
              öğrencilerini kabul etmiştir.
              <br><br>
              2021-2022 Akademik yılında, Radyo Televizyon ve Sinema ASD'nin, Sinema ve Televizyon Doktora Programı ilk öğrencilerini almayı planlamaktadır.
              <br><br>
              Enstitümüzün kuruluşunda 2016-2019 döneminde, Heykel ASD Öğretim Üyesi Prof. Dr. Ferhat Kamil SATICI Enstitü Müdürü, 
              Resim ASD Öğretim Üyeleri Doç. Dr. Burhan YILMAZ ve Doç. Dr. Lütfi ÖZDEN Müdür Yardımcısı olarak görevlerini tamamlamıştır. 
              <br><br>
              2019-2022 Döneminde görev yapmak üzere Doç. Dr. Açelya B. GÖNÜLLÜ Enstitü Müdürü, Dr. Öğr. Üyesi İlayda SOYUPAK Müdür Yardımcısı olarak 
              göreve başlamıştır.
              </h5>
              <br><br>
              </div>

              <div class="container">
              <h5 class="title">Yönetim</h5>
              <hr>
              <br>
              <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col">
                <h5 class="title">Enstitü Müdürü</h5>
                <h5>Doç. Dr. Açelya B. GÖNÜLLÜ</h5>
                <h5 class="title">Enstitü Müdür Yardımcısı</h5>
                <h5>Dr. Öğr. Üyesi İlayda SOYUPAK</h5>
                <h5 class="title">Enstitü Sekreteri</h5>
                <h5>Beytullah ÇITIR</h5>
              </div>
              </div>
             </div>

            </template>

            <template slot="tab-pane-3">

              <div class="container">
              <h4 class="title">FEN BİLİMLERİ ENSTİTÜSÜ</h4>
              <br>
              <h5 class="title">Genel Bilgi</h5>
              <hr>
              <h5>       
              <strong>Tanıtım</strong>
              <br>
              Düzce Üniversitesi Fen Bilimleri Enstitüsü 17/03/2006 tarihinde kurulmuştur. Enstitümüz, daha önce Abant İzzet Baysal Üniversitesi 
              Fen Bilimleri Enstitüsü, bünyesinde yer alan 4 Enstitü Anabilim Dalı (Peyzaj Mimarlığı, Orman Mühendisliği, Orman Endüstri Mühendisliği 
              ve Elektrik Eğitimi)  (EABD)’ndaki öğrencilerin kayıtlarının Enstitümüz bünyesine nakil yapılması ile eğitime 2007-2008 Eğitim-Öğretim 
              yılı Güz döneminde başlamıştır. Düzce Üniversitesi Fen Bilimleri Enstitüsü, 2019 yılı Nisan ayı itibariyle 23 EABD’da 23 tezli yüksek 
              lisans ve 10 doktora programında toplam 1470 öğrenciye eğitim vermektedir. Enstitümüzde 1 Müdür, 2 Müdür Yardımcısı, 1 Enstitü Sekreteri 
              ve 3 adet Memur görev almaktadır. Enstitümüz hem örgüt yapısı hem de fiziki çalışma alanları bakımında yeterliliklere sahiptir.
              <br><br>
              Düzce Üniversitesi Fen Bilimleri Enstitüsü, Fen bilimleri alanlarında eğitim ve araştırmalarıyla uluslararası düzeyde saygın 
              ve tercih edilen; yeni ufuklar açan, değişen dünya koşullarında topluma liderlik yapabilen bilim adamı ve araştırmacıların 
              yetiştirildiği bir kurum olmayı kendisine misyon edinmiştir. Bu amaç doğrultusunda, endüstriden gelen istekleri değerlendirerek 
              ve dünyadaki bilimsel gelişmeler ışığında, yeni lisansüstü programların kurulmasına olanak verecek yapılanmaları Düzce Üniversitesi’nin 
              hedef ve stratejileri paralelinde destekler ve organize eder. Bunun yanında, EABD’larının belli bir koordinasyonla, üst düzey öğretim 
              ve etkinlik yapmalarına olanak sağlamak enstitümüzün amaçları arasındadır. Üniversite-sanayi-kamu ve özel sektörle işbirliği amacı 
              ile bu kapsamdaki ve Avrupa Birliği projelerin yapılmasına olanak sağlayacak yapılanmaların çalıştaylarla oluşturulmasını hedefler. 
              Düzce Üniversitesi’nin uluslararası bir konuma gelmesi enstitümüzün bir diğer hedefidir. Düzce Üniversitesi’nin, ülkemize araştırmacı 
              ve bilim insanı yetiştirilmesi hedefine destek olmak üzere, programların başarılı bir şekilde yürütülmesi amacı ile yapılanmaları düzenler.
              <br><br>
              <strong>Misyonumuz</strong>
              <br>
              Eğitim ve araştırmalarıyla uluslararası düzeyde saygın ve tercih edilen, bilim dünyasına yeni ufuklar açabilen ve 
              değişen dünya koşullarında topluma liderlik yapabilecek donanıma sahip bilim adamı ve araştırmacıların yetiştirilmesini sağlamaktır.
              <br><br>
              <strong>Vizyonumuz</strong>
              <br>
              Ülkemizde ve uluslararası alanda rekabet gücünü arttıracak eğitimi ve bilimsel araştırmaları destekleyen, toplum için 
              üstün nitelikli araştırmacılar yetiştiren ve en üst düzeyde lisansüstü eğitim verilmesini sağlayan bir enstitü olmaktır.
              <br><br>
              </h5>
              <h4 class="title">Ana Bilim Dalları</h4>
              <hr>
              <h5>
              Disiplinlerarası <br>
              Eğitim Fakültesi <br>
              Fen Edebiyat Fakültesi <br>
              Mühendislik Fakültesi <br>
              Orman Fakültesi <br>
              Sanat, Tasarım ve Mimarlık Fakültesi <br>
              Ziraat ve Doğa Bilimleri Fakültesi <br>
              </h5>
              <br>
              </div>

             <div class="container">
              <h5 class="title">Yönetim</h5>
              <hr>
              <br>
              <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col">
                <h5 class="title">Enstitü Müdürü</h5>
                <h5>	 Prof. Dr. Uğur GÜVENÇ</h5>
                <h5 class="title">Enstitü Müdür Yardımcısı</h5>
                <h5>
                Doç. Dr. Pınar GÜLTEKİN <br>
                Doç. Dr. Ahmet DEMİR <br>
                </h5>
                <h5 class="title">Enstitü Sekreteri</h5>
                <h5> Selim GÜVEN</h5>
              </div>
              </div>
             </div>
              
              <div class="container">
                <br>
                <h4 class="title">İletişim</h4>
                <hr>
                <br>
                <h5 class="title">Adres</h5>
                <h5>Düzce Üniversitesi Rektörlüğü Fen Bilimleri Enstitüsü Müdürlüğü Rektörlük Binası Kat: 2 Konuralp/Düzce 81620</h5>
                <h5>Posta Kodu:81650</h5>
                <br>
                <h5 class="title">İletişim Kanalları</h5>
                <h5>
                Tel No: 0 380 542 12 08 <br>
                Faks No: 0 380 542 12 38 <br>
                E-posta adresi: fbe@duzce.edu.tr <br>
                </h5>
              </div>

            </template>

            <template slot="tab-pane-4">

              <div class="container">
              <h4 class="title">SAĞLIK BİLİMLERİ ENSTİTÜSÜ</h4>
              <br>
              <h5 class="title">Genel Bilgi</h5>
              <hr>
              <h5>       
              <strong>Tanıtım</strong>
              <br>
              Enstitüler, Lisansüstü eğitim- öğretim, bilimsel araştırma ve uygulama yapmak üzere Rektörlüklere bağlı olarak kurulan Yükseköğretim 
              kurumlarıdır. Bu çerçevede Düzce Üniversitesi Sağlık Bilimleri Enstitüsü, 17 Mart 2006 tarih ve 26111 sayılı Resmi Gazete’de 
              yayımlanarak yürürlüğe giren 5467 sayılı Kanun’la kurulmuştur. Yasanın yürürlüğe girdiği tarihte Abant İzzet Baysal Üniversitesi 
              Sağlık Bilimleri Enstitüsü’ne bağlı olarak eğitim- öğretim faaliyetini sürdüren 9 (dokuz) Anabilimdalında açılmış 
              olan(Anatomi, Biyokimya, Farmakoloji, Fizyoloji, Halk Sağlığı, Psikiyatri Hemşireliği, Histoloji ve Embriyoloji, Mikrobiyoloji, 
              Tıbbi Biyoloji ve Genetik ) Yüksek Lisans Programları ve bu programlarda kayıtlı öğrencilerimiz 04.09.2007 tarihinde devralınmıştır.
              <br><br>
              2547 sayılı Yükseköğretim Yasasının 19. maddesi gereğince 18.01.2007 tarihinde Eğitim-Öğretimine başlayan Enstitümüzde halen 
              16 anabilim dalında (Anatomi, Biyoistatistik ve Tıbbi Bilişim, Biyokimya, Beden Eğitimi ve Spor, Doğal ve Bitkisel Ürünler / Kozmetik Ürünler, 
              Farmakoloji, Fizyoloji, Halk Sağlığı, Hemşirelik, Histoloji ve Embriyoloji, Psikiyatri, Psikiyatri Hemşireliği, Mikrobiyoloji, 
              Sağlıkta Kalite Geliştirme, Sağlık Kurumları Yönetimi, Tıbbi Biyoloji ve Genetik ) lisansüstü eğitim-öğretim yürütülmekte ve koordine 
              edilmektedir. Enstitümüz 2018-2019 Bahar Dönemi itibarı ile toplamda 116(yüzonaltı) mezun vermiş olup halen 292(ikiyüzdoksaniki) 
              öğrencisi bulunmaktadır.
              <br><br>
              <strong>Misyonumuz</strong>
              <br>
              Sağlık ve Spor Bilimleri alanında nitelikli araştırmacılar ve bilimsel ve teknolojik bilgi ve beceriye sahip bireyler 
              yetiştirilmesi için gereken eğitim programlarının sürekli geliştirilmesini, değerlendirilmesini, etkin olarak yürütülmesini 
              sağlamak, tüm programlarda eğitimin kalitesinin yükseltilmesine katkıda bulunmak, uluslar arası gelişmeleri ve toplumsal 
              gereksinimleri göz önüne alarak yeni programların açılmasını teşvik etmek ve organizasyonunu sağlamaktır.
              <br><br>
              <strong>Vizyonumuz</strong>
              <br>
              Üstün nitelikli ve aldığı eğitimin mesleğini ve yaşam kalitesini geliştireceğine inanan öğrenciler tarafından tercih edilen, 
              mezunlarının aldıkları eğitimle alanlarında seçkin bir yere sahip olmasını sağlayan, yürüttüğü eğitim programlarıyla 
              nitelikli bilim insanı yetiştiren, ulusal ve uluslararası düzeydeki araştırmalarını artırarak sürdüren saygın bir kurum olmaktır.
              <br><br>
              </h5>
              <h4 class="title">Ana Bilim Dalları</h4>
              <hr>
              <h5>
              Anatomi Anabilim Dalı <br>
              Beden Eğitimi ve Spor Anabilim Dalı <br>
              Biyoistatistik ve Tıbbi Bilişim Anabilim Dalı <br>
              Biyokimya Anabilim Dalı <br>
              Doğal, Bitkisel Ürünler ve Kozmetik Ürünler Anabilim Dalı <br>
              Farmakoloji Anabilim Dalı <br>
              Fizyoloji Anabilim Dalı <br>
              Halk Sağlığı Anabilim Dalı <br>
              Hareket ve Antrenman Bilimleri Anabilim Dalı <br>
              Hemşirelik Anabilim Dalı <br>
              Psikiyatri Hemşireliği <br>
              Histoloji ve Embriyoloji Anabilim Dalı <br>
              Mikrobiyoloji Anabilim Dalı <br>
              Psikiyatri Anabilim Dalı <br>
              Sağlıkta Kalite Geliştirme Anabilim Dalı <br>
              Sağlık Kurumları Yönetimi Anabilim Dalı <br>
              Spor Yöneticiliği Anabilim Dalı <br>
              Tıbbi Biyoloji ve Genetik Anabilim Dalı <br>
              </h5>
              <br>
              </div>

              <div class="container">
              <h5 class="title">Yönetim</h5>
              <hr>
              <br>
              <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col">
                <h5 class="title">Enstitü Müdürü</h5>
                <h5>Prof. Dr. Adnan ÖZÇETİN</h5>
                <h5 class="title">Enstitü Müdür Yardımcısı</h5>
                <h5>Doç. Dr. Şengül CANGÜR</h5>
                <h5 class="title">Enstitü Sekreteri</h5>
                <h5>Yusuf Ziya ALBAYRAKOĞLU</h5>
              </div>
              </div>
             </div>

               <div class="container">
                <br>
                <h4 class="title">İletişim</h4>
                <hr>
                <br>
                <h5 class="title">Adres</h5>
                <h5>Düzce Üniversitesi Rektörlüğü Sağlık Bilimleri Enstitüsü Müdürlüğü Rektörlük Binası Kat: 2 Konuralp/Düzce 81620</h5>
                <h5>Posta Kodu:81650</h5>
                <br>
                <h5 class="title">İletişim Kanalları</h5>
                <h5>
                TEL: 0380 542 11 30 <br>
                FAKS: 0380 542 11 31 <br>
                E-POSTA : sbe@duzce.edu.tr <br>
                </h5>
              </div>

            </template>

            <template slot="tab-pane-5">

              <div class="container">
              <h4 class="title">SOSYAL BİLİMLWER ENSTİTÜSÜ</h4>
              <br>
              <h5 class="title">Genel Bilgi</h5>
              <hr>
              <h5>        
              <strong>Tarihçe</strong>
              <br>
              Enstitümüz Abant İzzet Baysal Üniversitesi adı altında 2547 Sayılı Yüksek Öğretim Kanunu Yürütme Kurulu Kararı ile 25.07.2003 tarihinde 
              kurulmuştur. Turizm ve Otel İşletmeciliği Anabilim Dalı, Sosyal Bilimler Enstitüsü’nün çekirdeği olmuş ve Enstitü’nün tarihsel gelişim 
              sürecindeki ilk basamağını oluşturmuştur. 17 Mart 2006 tarih ve 26111 sayılı Resmi Gazete’de yayınlanan 5467 sayılı yasa ile Düzce 
              Üniversitesi kurulduktan sonra 23.08.2007 tarihinden itibaren Düzce Üniversitesi bünyesinde yer almıştır.
              <br><br>
              Enstitümüz, 2003 yılından bu yana geçen zaman içinde Sosyal Bilimlerin hemen her alanında yüksek lisans ve doktora yaptırmak 
              amacına yönelik olarak gelişme göstermiştir. Enstitümüz her geçen yıl verdiği hizmetleri daha da geliştirmektedir. 
              22.07.2008 tarihinde Eğitim Bilimleri Anabilim Dalı, 08.10.2010 tarihinde Toplam Kalite Yönetimi Anabilim Dalı ve 13.01.2011 
              tarihinde İşletme Anabilim Dalı, 19.12.2013 tarihinde Girişimcilik Anabilim Dalı, 19.03.2014 tarihinde Birleşik Üstün Yetenekliler 
              Çalışmaları Anabilim Dalı, 25.09.2014 tarihinde Türk Dili ve Edebiyatı Anabilim Dalı ve Kafkas Dilleri ve Kültürleri 
              Anabilim Dalı, 22.06.2016 tarihinde Tarih Anabilim Dalı, 29.06.2016 tarihinde Temel Eğitim Anabilim Dalı, 10.08.2016 
              tarihinde Yönetim Bilişim Sistemleri Anabilim Dalı, 11.01.2017 tarihinde Sosyal Bilimler ve Türkçe Eğitimi Anabilim Dalı, 
              22.02.2017 tarihinde Sağlık Yönetimi Anabilim Dalı, 06.09.2017 tarihinde Temel İslam Bilimleri Anabilim Dalı, 11.04.2018 
              tarihinde Sigortacılık ve Sosyal Güvenlik Anabilim Dalı, 17.04.2019 tarihinde Uluslararası İlişkiler Anabilim Dalı, 
              18.09.2019 tarihinde Sosyoloji Anabilim Dalı, 06.02.2020 tarihinde Uluslararası Ticaret Anabilim Dalı, bu zincire eklenmiştir. 
              Bu artışta, yeni uzmanlık alanlarının ortaya çıkması ve çeşitli alanlarda bilim insanına duyulan gereksinim etkili olmuş ve olmaktadır.
              <br><br>
              2011 yılında Enstitümüz bünyesinde hakemli statüde Sosyal Bilimler Enstitüsü Dergisi yayın hayatına başlamıştır. İlk sayısı 2011 yılında 
              yayınlanan Dergi, yılda iki sayı olarak yayın hayatına devam etmektedir. 
              <br><br>
              <strong>Misyonumuz</strong>
              <br>
              Öğrenmeyi öğrenmenin temel alındığı bir anlayışla uzmanlaşmayı sağlamak ve bu süreçte ilgili sektörlerin gereksinim duyduğu 
              konularda bilimsel ölçekte projeler üretmektir.
              <br><br>
              <strong>Vizyonumuz</strong>
              <br>
              Öğrencilerin kişisel vizyonlarını oluşturmalarına ve hayata geçirmelerine rehberlik etmektir.
              <br>
              </h5>
              <br>
              </div>

              <div class="container">
              <h5 class="title">Yönetim</h5>
              <hr>
              <br>
              <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card">
                <img src="../../assets/düzce-img/enstitu/sosyal1.png" class="card-img-top" style="height:300px;">
                <h5 class="card-title text-center">Prof. Dr. Zafer AKBAŞ</h5>
                <h5 class="text-center">Enstitü Müdürü</h5>
                </div>
              </div>
              <div class="col">
                <div class="card">
                <img src="../../assets/düzce-img/enstitu/sosyal2.png" class="card-img-top" style="height:300px;">
                <h5 class="card-title text-center">Dr. Öğr. Üyesi Aslıhan KUYUMCU VARDAR</h5>
                <h5 class="text-center">Enstitü Müdür Yardımcısı</h5>
                </div>
              </div>
              <div class="col">
                <div class="card">
                <img src="../../assets/düzce-img/enstitu/sosyal3.png" class="card-img-top" style="height:300px;">
                <h5 class="card-title text-center">Vedat PARTI/</h5>
                <h5 class="text-center">Enstitü Müdür Yardımcısı</h5>
                </div>
              </div>
              </div>
              </div>

               <div class="container">
                <br>
                <h4 class="title">İletişim</h4>
                <hr>
                <br>
                <h5 class="title">Adres</h5>
                <h5>Düzce Üniversitesi Rektörlüğü Sosyal Bilimler Enstitüsü Müdürlüğü Rektörlük Binası Kat:4 Konuralp/Düzce 81620</h5>
                <h5>Posta Kodu:81650</h5>
                <br>
                <h5 class="title">İletişim Kanalları</h5>
                <h5>
                Tel No: 0 (380) 542 14 37 <br>
                Faks No : 0 (380) 542 14 38 <br>
                E-posta adresi : sobe@duzce.edu.tr <br>
                </h5>
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


