<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    >
      <div class="container">
           <h1 class="title">Ana Sayfa/Fakülteler</h1>
      </div>
       </parallax>





    <div class="main main-raised">
      <div class="section profile-content">
      <h3 class="title text-center">FAKÜLTELER</h3>
      <hr>

 <div class="wrapper">
    <div id="navigation-pills">
      <div class="md-layout">
        <div class="md-layout-item md-size-100 md-small-size-100">
          <tabs
            :tab-name="['Akçakoca Bey Siyasal Bilgiler Fakültesi',
             'Eğitim Fakültesi',
             'Fen Edebiyat Fakültesi',
             'İlahiyat Fakültesi',
             'İşletme Fakültesi',
             'Mühendislik Fakültesi',
             'Orman Fakültesi',
             'Sağlık Bilimleri Fakültesi',
             'Sanat ve Tasarım Fakültesi',
             'Spor Bilimleri Fakültesi',
             'Tıp Fakültesi',
             'Ziraat Fakültesi']"
            :tab-icon="['dashboard', 'dashboard','dashboard','dashboard', 'dashboard','dashboard','dashboard', 'dashboard','dashboard','dashboard', 'dashboard','dashboard']"
            plain
            flex-column
            nav-pills-icons
            color-button="dark"
          >

            <template slot="tab-pane-1">

              <div class="container">
              <h4 class="title">AKÇAKOCA BEY SİYASAL BİLİMLER FAKÜLTESİ</h4>
              <br>
              <h5 class="title">Genel Bilgi</h5>
              <hr>
              <h5>                
              Düzce Üniversitesi Akçakoca Bey Siyasal Bilgiler Fakültemiz, 25 Kasım 2016 tarihinde 29899 sayılı resmi gazetede yayımlanan 2016/9539 sayılı
              Bakanlar Kurulu kararıyla kurulmuştur. 2017-2018 Eğitim Öğretim yılında Uluslararası İlişkiler ile Siyaset Bilimi ve Kamu Yönetimi bölümleri
              ilk öğrencilerini alarak eğitim öğretime başlamış, 2018-2019 Eğitim Öğretim yılında İktisat Bölümünün faaliyete geçmesiyle fakülte bünyesinde 
              lisans düzeyinde eğitim  veren bölüm sayısı üçe yükselmiştir.
              <br><br>
              İnşaatı 2018’de tamamlanan fakülte binamızda doğa ile iç içe, deniz manzaralı, ferah bir ortamda eğitim öğretim faaliyetlerimizi sürdürmekteyiz.
              Fakültemizde 120 öğrenci kapasiteli 3 amfi, 40-60 öğrenci kapasiteli 26 derslik yanında kütüphane, konferans salonu, toplantı salonu, 
              öğrenci kulüpleri faaliyet odası, yemekhane ve kantin imkanlarımız da mevcuttur.
              <br><br>
              Kütüphanemizde deniz manzaralı bir çalışma ortamı içerisinde akademisyen ve öğrenci talepleri doğrultusunda sürekli genişleyen kitap ve 
              dergi koleksiyonumuz, kişiye özel kapalı çalışma odaları, grup çalışmaları için dizayn edilmiş bölümler bulunmaktadır. Öğrenci kulüplerimizin 
              düzenlediği çeşitli aktivitelerde konferans salonumuz hem Akçakoca’nın mülki idari erkanıyla birlikte halktan katılımcıları ağırlamakta hem de 
              şehir dışından gelerek konferanslara katılan misafirlerimize hizmet vermektedir. 
              <br><br>
              <strong>Misyonumuz</strong>
              <br>
              Evrensel bilim ilkeleri çerçevesinde, kamu ve özel sektörün ihtiyaç duyduğu alanlarda nitelikli bilgi üreterek, özgür düşünme yeteneği ile 
              sorgulayan, araştıran, demokratik ve etik ilkelere sahip, toplumsal sorumluluklarının farkında olan uluslararası nitelikte bireyler yetiştirmektir.
              <br><br>
              <strong>Vizyonumuz</strong>
              <br>
              Uluslararası düzeyde tanınırlığı ile özgün ve nitelikli, toplumsal faydayı önceleyen, katma değeri yüksek bilimsel çalışmalar ve projeler üretebilen,
              kamu ve özel sektörün ihtiyacını karşılamak üzere nitelikli mezunlar verebilen ve yüksek akademik performansı ile öne çıkan yenilikçi bir fakülte olmaktır.
              <br><br>
              <strong>Değerlerimiz</strong>
              <br>
              Fakültemiz Türkiye Cumhuriyeti'nin temel değer ve ilkelerini benimser, insani ve ahlaki değerleri kendisine prensip olarak kabul eder. 
              Tüm mensupları eğitim-öğretim süreçlerinde aşağıdaki ilkelere riayet eder:
              <br><br>
              Adalet ve Hakkaniyet <br>
              Şeffaflık ve Hesap Verebilirlik <br>
              Katılımcılık <br>
              Dış dünya ile güçlü iletişim içinde olurken öz değerlerini koruma <br>
              Sosyal Sorumluluk <br>
              Bilimsel Üretkenlik <br>
              Kurumsallık <br>
              Yenilikçilik <br>
              Öğrenci Odaklılık <br>
              Etik değerlere bağlılık <br>
              </h5>
              <br><br>
              <h4 class="title">Bölümler</h4>
              <hr>
              <h5>
               ULUSLARARASI İLİŞKİLER <br>
               SİYASET BİLİMİ VE KAMU YÖNETİMİ <br>
               İKTİSAT BÖLÜMÜ <br>
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
                <img src="../../assets/düzce-img/fakulteler/akcakoca1.jpg" class="card-img-top" style="height:300px;">
                <h5 class="card-title text-center">Prof. Dr. Ayfer GEDİKLİ</h5>
                <h5 class="text-center">Dekan</h5>
                </div>
              </div>
              <div class="col">
                <div class="card">
                <img src="../../assets/düzce-img/fakulteler/akcakoca2.jpg" class="card-img-top" style="height:300px;">
                <h5 class="card-title text-center">Doç. Dr. Gökmen Kılıçoğlu</h5>
                <h5 class="text-center">Dekan Yardımcısı</h5>
                </div>
              </div>
              <div class="col">
                <div class="card">
                <img src="../../assets/düzce-img/fakulteler/akcakoca3.jpg" class="card-img-top" style="height:300px;">
                <h5 class="card-title text-center">Ayten DENİZ</h5>
                <h5 class="text-center">Fakülte Sekreteri </h5>
                </div>
              </div>
              </div>
              </div>
              
              <div class="container">
                <br>
                <h4 class="title">İletişim</h4>
                <hr>
                <br>
                <h5 class="title">Fakülte Adresi</h5>
                <h5>Osmaniye Mahallesi Atatürk Caddesi No: 219,  Akçakoca/Düzce</h5>
                <h5>Posta Kodu:81650</h5>
                <br>
                <h5 class="title">Fakültemiz İletişim Kanalları</h5>
                <h5>
                Telefon: 0380 611 2090
                <br>
                Faks: 0380 611 2096
                <br>
                Mail: siyasalbilgiler@duzce.edu.tr
                </h5>
              </div>

            </template>

            <template slot="tab-pane-2">

             <div class="container">
              <h4 class="title">EĞİTİM FAKÜLTESİ</h4>
              <br>
              <h5 class="title">Genel Bilgi</h5>
              <hr>
              <h5>
              <strong>Kuruluş</strong>
              <br><br>
              Eğitim Fakültesi 28.03.1983 tarihli ve 2809 sayılı Kanun’un ek 30. maddesine göre Bakanlar Kurulu’nca  04.04.2011 tarihinde kurulmuştur  
              (15.04.2011 tarih ve 27906 sayılı Resmi Gazete).
              <br><br>
              2012-2013 Eğitim-Öğretim Yılında Sınıf Öğretmenliği Lisans alanında 71 öğrenciyle eğitime başlamıştır.
              <br><br>
              Aynı yılda  Pedagojik Formasyon Sertifika Programı açılmıştır.
              <br><br>
              Fakülte öğretim üyelerince  Sosyal Bilimler Enstitüsü bünyesinde Yüksek Lisans eğitimi verilmektedir.
              <br><br>
              Dekanlık ve eğitim faaliyetleri, Konuralp yerleşkesinde bulunan Teknoloji Fakültesi binası A Blokta sürdürülmektedir. 
              <br><br>
              <strong>Misyon</strong>
              <br><br>
              Yerel, ulusal ve uluslararası standartlarda toplumun beklentilerine ve ihtiyaçlarına karşılık verebilen, etkin öğretmenlik anlayışı 
              çerçevesinde bireysel ve mesleki gelişimi benimseyen, insan haklarına saygılı bireylerin yetişmelerini sağlamak.
              <br><br>
              <strong>Vizyon</strong>
              <br><br>
              Öğrenme kültürünü ilke edinen, bireylerin hayatlarında farklılık yaratacak eğitimciler yetiştirmeyi hedefleyen ve gelecekte yeni
              bilgi ve değer üretiminde lider olan bir fakülte olmak.
              </h5>
              <br><br>
              <h4 class="title">Bölümler</h4>
              <hr>
              <h5>
              Eğitim Bilimleri Bölümü <br>
              Matematik ve Fen Bilimleri Eğitimi Bölümü <br>
              Temel Eğitim Bölümü <br>
              Türkçe ve Sosyal Bilimler Eğitimi Bölümü <br>
              Özel Eğitim Bölümü <br>
              Yabancı Diller Eğitimi Bölümü <br>
              Pedagojik Formasyon <br>
              </h5>
              <br>
             </div>

              <div class="container">
              <h5 class="title">Yönetim</h5>
              <hr>
              <br>
              <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col">
                <div class="card">
                <img src="../../assets/düzce-img/fakulteler/egitim1.jpg" class="card-img-top" style="height:300px;">
                <h5 class="card-title text-center">Prof. Dr. Mustafa KOÇ</h5>
                <h5 class="text-center">Dekan</h5>
                </div>
              </div>
              </div>
              </div>

              <div class="container">
                <br>
                <h4 class="title">İletişim</h4>
                <hr>
                <br>
                <h5 class="title">Fakülte Adresi</h5>
                <h5>Düzce Üniversitesi Konuralp Yerleşkesi Konuralp Merkez/Düzce 81620</h5>
                <h5>Posta Kodu:81650</h5>
                <br>
                <h5 class="title">Fakültemiz İletişim Kanalları</h5>
                <h5>
                Tel: 0380 542 1355
                <br>
                Faks: 0380 611 2096
                <br>
                Mail: ogrenciisleri.ef@duzce.edu.t
                <br>
                Doç. Dr. Üyesi Tuğba Seda Çolak: tugbacolak@duzce.edu.tr
                <br>
                Dr. Öğr. Üyesi Fidan Özbey Gökçe: fidanozbey@duzce.edu.tr
                </h5>
              </div>

            </template>

            <template slot="tab-pane-3">

              <div class="container">
              <h4 class="title">FEN EDEBİYAT FAKÜLTESİ</h4>
              <br>
              <h5 class="title">Genel Bilgi</h5>
              <hr>
              <h5>  
              <strong>Tarihçe</strong>
              <br>
              17 Mart 2006 tarih ve 26111 sayılı Resmi Gazete’de yayınlanan 5467 sayılı Yasa ile kurulan Üniversitemiz bünyesinde yer alan Fakültemizde,
              YÖK’ün 07.12.2007 tarihli toplantısıyla alınan kararla ilk olarak Biyoloji, Fizik, Kimya, Matematik, Psikoloji, Sosyoloji ile Türk Dili 
              ve Edebiyatı olmak üzere 7 bölümün açılmasına karar verilmiştir. Ayrıca YÖK’ün 02.06.2010 tarihli toplantısında alınan karar 
              ile bu bölümlere Arkeoloji ve Tarih Bölümü, 07.09.2011 tarihli toplantısında alınan kararla da Sanat Tarihi Bölümü ve 05.07.2012
              Tarihinde de Kafkas Dilleri ve Kültürleri Bölümü ve Felsefe Bölümü de açılarak Fakültemizdeki bölüm sayısı 12’ye yükselmiştir.
              <br><br>
              <strong>Amaç</strong>
              <br>
              Fen-Edebiyat Fakültesi olarak nitelikli akademik öğretime öncelik verilerek, bu çerçevede çağdaş bilimi ve teknolojik gelişmeleri takip 
              eden çok iyi eğitilmiş, kapsamlı bir bilgi altyapısı olan, entelektüel ve pratik düşünme kabiliyetine sahip öğretim elemanlarıyla, girişimci, 
              donanımlı  öğrenciler yetiştirmeyi hedeflemekteyiz.
              <br><br>
              Fakültemizin diğer bir amacı da, bir yandan öğrencilere uzmanlık alanlarında kapsamlı bir eğitim sağlarken, bir yandan da yaşadığı 
              kente ve dünyaya sahip çıkan, evrensel sanat ve kültür değerlerine hakim, bir dünya vatandaşı olmanın tüm unsurlarını ve yetkinliklerini 
              taşıyan bireyler yetiştirmektir.
              <br><br>
              <strong>Vizyon</strong>
              <br>
              Fakültenin tüm unsurları ile katılımcılığı ve bir bütün içerisinde gelişmeyi teşvik etmek; günümüz şartlarına uygun eğitim-öğretim
              programlarını düzenleyerek bilimsel sürecin sürekliliğini sağlamak, bilim ve teknolojik gelişmelerde yerini alabilmesi için bilimsel 
              araştırma ve geliştirme projeleri yaratmak; bilimsel araştırmaların ulusal ve uluslararası bağlamda belirli bir yer edinebilmesi için 
              çeşitli kaynaklarla desteklemek araştırmalarda disiplinler arası yaklaşımların ön plana çıkarılmasını teşvik etmek, Fakülte ortamında 
              sosyal-kültürel-sanatsal ve sportif faaliyetlere  ortam hazırlamak, örgün-yaygın eğitim alanında tüm etkinlik  programlarını sunmak,
              ayrıca üniversite-sanayi-toplum işbirliğine yönelik çeşitli faaliyetler düzenleyerek kendi toplum ve dünya ile bütünleşmeyi sağlamak, 
              mesleki anlamda eğitim-öğretim ve araştırma olanakları  ile tercih edilen ve tüm değerleri Ülkemize ve insanlığa sunan  öncü bir Fakülte olmaktır.
              <br><br>
              <strong>MİSYON</strong>
              <br>
              Çağdaş bilimi ve teknolojik gelişmeleri takip etmek, geliştirmek ve katkıda bulunmak; bu gelişmeleri ülkenin yüksek öğrenimine,
              yönetimine, toplumsal yaşamına, kalkınma ve gelişme dinamiğine, doğaya ve çevreye duyarlılık bilinci içinde uygulamak; ülkenin hızlı 
              kalkınma çabalarına katkıda bulunmak; öncelikle genç nesillere ve meslek sahibi olma bilinci içerisinde çalışmaların verimliliğini 
              bilimsel bilgiler ışığı altında sürdürülebilirliğini kavratmak; araştırmacılar ve bilim insanları için verimli alt yapıyı sunarak bilimin 
              gelişimine katkı sağlamak; bilimde önde gelen ülkelerin bulunduğu ortamlarda yer almak ve Üniversiteyi tüm bilimsel platformlarda en saygın  
              konumlara ulaştırmak.
              <br><br>
              </h5>
              <h4 class="title">Bölümler</h4>
              <hr>
              <h5>
              Arkeoloji <br>
              Biyoloji <br>
              Felsefe <br>
              Fizik <br>
              Kafkas Dilleri ve Kültürleri <br>
              Kimya <br>
              Matematik <br>
              Psikoloji <br>
              Sanat Tarihi <br>
              Sosyoloji <br>
              Tarih <br>
              Türk Dili ve Edebiyatı
              </h5>
              <br>
              </div>

              <div class="container">
              <h5 class="title">Yönetim</h5>
              <hr>
              <br>
              <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col">
                <div class="card">
                <img src="../../assets/düzce-img/fakulteler/fen1.jpg" class="card-img-top" style="height:300px;">
                <h5 class="card-title text-center">Prof. Dr. Halil İbrahim UĞRAŞ</h5>
                <h5 class="text-center">Dekan</h5>
                </div>
              </div>
              </div>
              </div>

              <div class="container">
                <br>
                <h4 class="title">İletişim</h4>
                <hr>
                <br>
                <h5 class="title">Fakülte Adresi</h5>
                <h5>Düzce Üniversitesi Fen Edebiyat Fakültesi Dekanlığı Konuralp Yerleşkesi DÜZCE</h5>
                <h5>Posta Kodu:81650</h5>
                <br>
                <h5 class="title">Fakültemiz İletişim Kanalları</h5>
                <h5>
                Telefon: 0380 541 24 04
                <br>
                Faks: 0380 541 24 03
                <br>
                Mail: fenedebiyat@duzce.edu.tr
                </h5>
              </div>


            </template>

            <template slot="tab-pane-4">

              <div class="container">
              <h4 class="title">İLAHİYAT FAKÜLTESİ</h4>
              <br>
              <h5 class="title">Genel Bilgi</h5>
              <hr>
              <h5>  
              <strong>Kuruluş</strong>
              <br>
              Düzce Üniversitesi bünyesinde “İlahiyat Fakültesi” açılması Üniversitemiz Senatosunun 12.12.2012 tarih ve 17 nolu toplantısında 2012/148
              sayılı Kararı ile uygun görülmüş olup, söz konusu karar Üniversitemiz tarafından 17.12.2012 tarih ve 00.00/101.102-4041-9984 sayılı yazı ile
              Yükseköğretim Kurulu Başkanlığına gönderilmiştir. Fakültemizin açılması ile ilgili dosya Yükseköğretim Kurulu Başkanlığı tarafından kabul 
              edilmiş ve Yükseköğretim Kurumlarına bağlı olarak kurulması; Milli Eğitim Bakanlığı’na sunulmuş ve Yükseköğretim Kurumlarına bağlı olarak 
              kurulması; Milli Eğitim Bakanlığı’nın teklif yazıları üzerine, 28.03.1983 tarih ve 2809 sayılı Kanunun ek 30.uncu maddesine göre, Bakanlar 
              Kurulu’nca 29.04.2013 tarih ve 2013/4716 Karar Sayılı Kararıyla  Düzce Üniversitesi İlahiyat Fakültesi’nin açılması kararlaştırılmış, bu Karar
              31 Mayıs 2013 Cuma günü 28663 saylı Resmi Gazetede yayımlanarak yürürlüğe girmiştir.
              <br><br>
              Düzce Üniversitesi’ne bağlı açılan İlahiyat Fakültesi bünyesinde bölüm açılması, Bakanlar Kurulu’nca 29.04.2013 tarih ve 2013/4716 Karar 
              Sayılı Kararıyla Düzce Üniversitesi’ne bağlı  İlahiyat Fakültesi açılması kararı gereğince, 31 Mayıs 2013 Cuma günü 28663 saylı Resmi Gazetede 
              yayımlanarak yürürlüğe girmesi sonucu Üniversitemiz Senatosu tarafından 2547 Sayılı Yükseköğretim Kurulu Akademik Teşkilat Yönetmeliği’nin 13 
              maddesi gereğince Düzce Üniversitesi’ne bağlı İlahiyat Fakültesi bünyesinde açılması planlanan “Temel İslam Bilimleri Bölümü”, “Felsefe ve Din 
              Bilimleri Bölümü” ve İslam Tarihi ve Sanatları Bölümü”  bölümlerinin açılması 06.06.2013 tarih ve 09 nolu toplantısında 2013/74 sayılı Kararında 
              uygun görülerek Karar verilmiştir. Bu Karar Düzce Üniversitesi Rektörlüğü tarafından 21.06.2013 tarih ve 104.01-1515-6047 sayılı yazısıyla
              Yükseköğretim Kurulu Başkanlığına gönderilmiş ve Yükseköğretim Kurulu Başkanlığı Düzce Üniversitesi Rektörlüğü’nün İlahiyat Fakültesi
              bünyesinde Bölümler açılması konusundaki teklifini 10.07.2013 tarihli toplantısında incelemiş ve 2547 sayılı kanun’un 2880 Sayılı Kanun’la
              değişik 7/d-2 maddesi uyarınca Fakültemiz bünyesinde  “Temel İslam Bilimleri Bölümü”, “Felsefe ve Din Bilimleri Bölümü” ve İslam Tarihi
              ve Sanatları Bölümü”  bölümlerinin açılması uygun görmüştür. Bölümler açılmasıyla ilgili bu Karar Yükseköğretim Kurulu Başkanlığı  
              tarafından 16.07.2013 tarih ve 101.03.01-5126 sayılı yazısıyla Üniversitemiz Rektörlüğüne bildirilmiş ve aynı zamanda yürürlüğe girmiştir.
              Fakültemiz 2015-2016 Eğitim Öğretim döneminde ilk öğrencileriyle eğitime başlamıştır.
              <br><br>
              <strong>Misyon</strong>
              <br>
              Genelde din bilimleri ve kültürü, özelde İslâm bilimleri ve kültürü alanında ilmî esaslar, kültürel ihtiyaçlar ve uluslararası 
              standartlar çerçevesinde araştırmalar yapmak ve yayınlamak; bu doğrultuda üstün nitelikli din bilimleri uzman ve araştırmacıları, 
              din bilgisi öğretmenleri ve din görevlileri yetiştirmek; ilahiyat alanında bilgi donanımını geliştirmek isteyenlere lisans seviyesinde
              öğrenim görme imkanı sağlamak; sosyal ve kültürel gelişmeleri göz önünde bulundurarak millî, dinî ve ahlakî değerlerimizi koruyup
              geliştirmek suretiyle toplumun maddî-manevî kalkınmasına katkıda bulunmaktır.
              <br><br>
              <strong>Vizyon</strong>
              <br>
              Dinin evrensel ve özgün değerleri hakkında akademik ölçütlere uygun, toplumun ihtiyaçlarıyla uyumlu bilgi üreten,
              bu bilgileri bireyin ruh sağlığı ve toplumun huzuru için doğru ve etkin biçimde aktaran, tarihî ve kültürel kimliğimizin korunup
              geliştirilmesi doğrultusunda yayan, İslamî değerlere ve çağın ihtiyaçlarına uygun biçime yorumlayan gerek ulusal gerekse uluslararası 
              düzeyde öncü ve nitelikli bir yüksek öğrenim kurumu olmaktır.
              <br><br>
              </h5>
              <h4 class="title">Bölümler</h4>
              <hr>
              <h5>
              Temel İslam Bilimleri Bölümü <br>
              Felsefe ve Din Bilimleri Bölümü <br>
              İslam Tarihi ve Sanatları Bölümü <br>
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
                <img src="../../assets/düzce-img/fakulteler/ilahiyat1.jpg" class="card-img-top" style="height:300px;">
                <h5 class="card-title text-center">Prof. Dr. İsmail KARAGÖZ</h5>
                <h5 class="text-center">Dekan</h5>
                </div>
              </div>
              <div class="col">
                <div class="card">
                <img src="../../assets/düzce-img/fakulteler/ilahiyat2.jpg" class="card-img-top" style="height:300px;">
                <h5 class="card-title text-center">Doç. Dr. Furat Akdemir</h5>
                <h5 class="text-center">Dekan Yardımcısı</h5>
                </div>
              </div>
              <div class="col">
                <div class="card">
                <img src="../../assets/düzce-img/fakulteler/ilahiyat1.jpg" class="card-img-top" style="height:300px;">
                <h5 class="card-title text-center">Hasan KÖKSAL</h5>
                <h5 class="text-center">Fakülte Sekreteri</h5>
                </div>
              </div>
              </div>
              </div>

              <div class="container">
                <br>
                <h4 class="title">İletişim</h4>
                <hr>
                <br>
                <h5 class="title">Fakülte Adresi</h5>
                <h5>Konuralp Yerleşkesi, Beçi Yörükler Kampüsü, Merkez/DÜZCE, 81620.</h5>
                <h5>Posta Kodu:81650</h5>
                <br>
                <h5 class="title">Fakültemiz İletişim Kanalları</h5>
                <h5>
                Tel: 0380 542 11 70
                <br>
                Fax: 0380 542 11 80
                <br>
                E-posta: ilahiyat@duzce.edu.tr
                </h5>
              </div>


            </template>

            <template slot="tab-pane-5">
              
              <div class="container">
              <h4 class="title">İŞLETME FAKÜLTESİ</h4>
              <br>
              <h5 class="title">Genel Bilgi</h5>
              <hr>
              <h5>  
              <strong>Tanıtım</strong>
              <br>
              Düzce Üniversitesi İşletme Fakültesi, 26 Şubat 2010 tarih ve 27505 sayılı Resmi Gazetede yayımlanan 2010/103 sayılı Bakanlar Kurulu kararı
              ile kurulmuş ve 2010-2011 Akademik Yılı'nda İşletme Bölümü ile lisans öğretimine başlamıştır. Fakültemiz; İşletme, Sağlık Yönetimi,
              Sigortacılık ve Sosyal Güvenlik, Uluslararası Ticaret ve Yönetim Bilişim Sistemleri olmak üzere beş bölümden oluşmaktadır.
              <br><br>
              İşletme Bölümü’nde 2010-2011 Akademik Yılı'nda lisans öğretimine başlanmış olup, I. ve II. Öğretim olmak üzere ikili öğretim yapılmaktadır.
              Uluslararası Ticaret ve Finans Bölümü ile Sağlık Yönetimi Bölümlerinde 2013-2014 Akademik Yılı'nda lisans öğretimine başlanmıştır.
              Sigortacılık ve Sosyal Güvenlik Bölümü ve Yönetim Bilişim Sistemleri Bölümü ise 2014-2015 Akademik Yılı'nda lisans öğretimine başlamıştır.
              <br><br>
              Sosyal Bilimler Enstitüsü'ne bağlı olarak, İşletme Anabilim Dalı'nda Tezli Yüksek Lisans, Tezsiz Yüksek Lisans ve Doktora düzeyinde de öğretime 
              2011-2012 Akademik Yılı'nda başlanmıştır. Yönetim Bilişim Sistemleri Anabilim Dalı Tezli ve Tezsiz Yüksek Lisans programları ise 2016-2017 
              Akademik Yılı Bahar Dönemi'nde açılmıştır.
              <br><br>
              Fakültemizde 7 profesör, 10 doçent, 19 doktor öğretim üyesi, 4 öğretim görevlisi ve 15 araştırma görevlisi olmak üzere toplam 55 öğretim 
              elemanı ve 7 idari personel görev yapmaktadır.
              <br><br>
              2020-2021 Akademik Yılı itibariyle İşletme Bölümü'nde 515, Sağlık Yönetimi Bölümü'nde 666, Sigortacılık ve Sosyal Güvenlik Bölümü'nde 460,
              Uluslararası İlişkiler Bölümü’nde 59, Uluslararası Ticaret ve Finansman Bölümü'nde 529, Yönetim Bilişim Sistemleri Bölümü'nde 575 olmak üzere
              toplam 2804 öğrenci sayısına ulaşılmıştır.
              <br><br>
              <strong>Misyonumuz</strong>
              <br>
              İş ahlakı temeline dayanan, yenilikçiliği şiar edinmiş girişimci ve yönetici adayları yetiştirmek.
              <br><br>
              <strong>Vizyon</strong>
              <br>
              Girişimci ve yönetici adaylarımızı dijital endüstri çağına uygun bilinç düzeyine ulaştıran ve gerekli donanımları kazandıran bir fakülteye dönüşmek.
              <br><br>
              </h5>
              <h4 class="title">Bölümler</h4>
              <hr>
              <h5>
              İşletme <br>
              Sağlık Yönetimi <br>
              Sigortacılık ve Sosyal Güvenlik <br>
              Uluslararası İlişkiler <br>
              Uluslararası Ticaret ve Finansman <br>
              Yönetim Bilişim Sistemleri
              </h5>
              <br>
              </div>

              <div class="container">
                <br>
                <h4 class="title">İletişim</h4>
                <hr>
                <br>
                <h5 class="title">Fakülte Adresi</h5>
                <h5>Düzce Üniversitesi Konuralp Yerleşkesi İşletme Fakültesi Yörük Mahallesi Merkez/Düzce 81620</h5>
                <h5>Posta Kodu:81650</h5>
                <br>
                <h5 class="title">Fakültemiz İletişim Kanalları</h5>
                <h5>
                Tel: 0380 542 1370
                <br>
                E-Posta: if@duzce.edu.tr
                </h5>
              </div>


            </template>

            <template slot="tab-pane-6">

              <div class="container">
              <h4 class="title">MÜHENDİSLİK FAKÜLTESİ</h4>
              <br>
              <h5 class="title">Genel Bilgi</h5>
              <hr>
              <h5>                
              Düzce Üniversitesi Mühendislik Fakültesi 9 Mayıs 2008 tarihinde kurulmuş, 2009-2010 eğitim-öğretim yılından itibaren öğrenci almaya,
              2013 yılından itibaren ilk mezunlarını vermeye başlamıştır.
              <br><br>
              İş dünyası ile işbirliği içerisinde, eğitim, uygulama ve araştırmalarıyla ulusal ve uluslararası düzeyde tercih edilen bir fakülte 
              olma vizyonumuz doğrultusunda, Bilimsel teknolojiyi kullanarak, yüksek nitelikli, idealist, araştırıcı, geliştirici özelliklerde
              Mühendisler yetiştirme misyonumuza uygun olarak 22 Profesör, 19 Doçent, 46 Doktor Öğretim Üyesi, 3 Dr. Öğr. Gör., 2 Öğretim Görevlisi,
              9 Dr. Arş. Gör., 41 Arş. Gör.  Olmak üzere 142 akademik personel ile eğitim-öğretim ve araştırma faaliyetlerimize devam etmekteyiz.
              <br><br>
              <strong>Bölümler</strong>
              <br>
              Düzce Üniversitesinde Bilgisayar Mühendisliği, Elektrik-Elektronik Mühendisliği, Makine Mühendisliği, İnşaat Mühendisliği, 
              Biyomedikal Mühendisliği, Endüstri Mühendisliği, Mekatronik Mühendisliği ve Çevre Mühendisliği bölümlerinde eğitim öğretim devam etmekte, 
              Bilgisayar, Elektrik-Elektronik, Makine ve İnşaat Mühendisliği bölümlerinde normal öğretim yanında ikinci öğretim programı da bulunmaktadır. 
              Ayrıca Bilgisayar Mühendisliği bölümünde bu yıl ilk kez %100 İngilizce eğitim yapılacak İngilizce Bilgisayar Mühendisliği programı mevcuttur.
              <br><br>
              Düzce Üniversitesi Mühendislik Fakültesi bilim ve teknolojinin gelişmesine paralel olarak bölüm müfredatlarını dinamik bir şekilde 
              güncellemekte, öğrencilerimize güncel teknoloji ve bilgileri aktarmaktadır. Son yıllarda önemli hale gelen Veri Bilimi, 
              Nesnelerin İnterneti, Derin Öğrenme gibi alanlarda dünyadaki değişimle birlikte dersler okutmaya başladık.
              <br><br>
              Hızlı işleyen idari süreçlerle öğrencilerimizin ihtiyaçlarını gidermekteyiz.
              <br><br>
              <strong>Çift Anadal/Yan Dal</strong>
              <br>
              Düzce Üniversitesi Mühendislik Fakültesi bölümlerinde öğrencilerimizin aynı anda iki farklı bölümden mezuniyet diploması alabilecekleri çift 
              anadal programları ve başka bir bölümden sertifika alabilecekleri yandal programları bulunmaktadır. Tüm bölümler birbirleri arasında yandal 
              programı uygulamakta, eğitim müfredatları benzer bölümlerimiz çift anadal programı uygulamaktadır. Yandal ve çift anadal programları öğrencilerimize
              kendi okudukları bölüm dışında ilgi duydukları bir başka bölümde okuma imkanı sunmakta ve başarılı öğrencilerimiz tarafından yaygın olarak
              tercih edilmektedir.
              <br><br>
              <strong>Teknoparkla İlişkiler</strong>
              <br>
              Düzce Üniversitesi Teknoloji Geliştirme Bölgesinde yer alan Düzce Teknopark ve Teknoloji Transfer Ofisi ile birlikte çalışmalar 
              yapılarak öğrencilerimizin derslerinden arta kalan zamanlarında kendilerini mesleki açıdan geliştirebilmeleri için imkanlar sunulmaktadır.
              <br><br>
              <strong>Öğrenci Toplulukları</strong>
              <br>
              Düzce Üniversitesi Mühendislik Fakültesinin en önemli özelliklerinden birisi barındırdığı öğrenci topluluklarıdır.
              Ağırlıklı olarak teknoloji, mühendislik ve bilim odaklı olmak üzere kişisel gelişime destek veren öğrenci topluluklarımız yer almaktadır. 
              Topluluklar öğrencilerimizin kendi organizasyonları ile hem bilimsel etkinlikler hem de sosyal faaliyetler düzenleyebildikleri 
              arkadaş canlısı ortamlardır. Bir çok öğrencimiz en az bir toplulukta üye olarak kendini yetiştirmekte ve geleceğe daha güvenle 
              bakabilmektedir. Pandemi döneminde uzaktan eğitim yürütüldüğü dönemde dahi öğrenci toplulukları faaliyetlerini sürdürmüşlerdir.
              <br><br>
              TÜBİTAK, Sanayi Bakanlığı veya Teknofest Organizasyonu tarafından düzenlenen teknoloji yarışmalarına öğrenci topluluklarımız katılım
              göstermekte ve başarılı sonuçlar almaktadır. Elektrikli araçlar, otonom araçlar, model uydu, roket ve robot kategorilerinde
              düzenlenen  yarışmalara takımlarımızla katılım sağlayıp Türkiye finalinde yarışma hakkı elde etmiş bulunmaktayız. Bazı öğrenci
              topluluklarımız Ülkemiz genelinde tanınırlığa sahip olmuştur. Bunlardan biri Mekatek topluluğudur. Özellikle Teknofest yarışmaları 
              Düzce Üniversitesi tarafından çok önemsenmekte ve öğrencilerimiz teşvik edilmektedir. Öğrencilerimizin ve topluluklarımızın ihtiyaçları 
              Üniversitemiz tarafından karşılanmaktadır.
              <br><br>
              <strong>Erasmus ve Değişim Programları</strong>
              <br>
              Düzce Üniversitesi Mühendislik Fakültesi olarak aralarında Almanya ve İspanya’nın da bulunduğu çok sayıda ülkeden ileri
              gelen üniversitelerle Erasmus anlaşmaları yapmış bulunmaktayız. Bu sayede öğrencilerimiz değişim programları kapsamında
              Avrupanın ileri gelen üniversitelerinde bir veya iki dönem öğrencilik yapma veya teknoloji firmalarında staj yapma imkanına 
              sahip olmaktadır. Erasmus, Farabi ve Mevlana gibi değişim programları ile hem öğrencilerimiz yurtiçi ve yurtdışındaki farklı
              üniversitelerde misafir öğrenci olarak bulunmakta hem de biz yurtdışından öğrencilere ev sahipliği yapabilmekteyiz. Böylece
              öğrencilerimizin farklı kültürlerden akranlarıyla bilgi ve kültür alış-verişi yapma imkanı oluşmaktadır.
              <br><br>
              <strong>Yabancı Öğrenciler</strong>
              <br>
              Fakültemizde dünyanın çeşitli ülkelerinden gelen yabancı uyruklu öğrencilerimiz bulunmakta ve çok farklı kültürel etkileşimler
              oluşmaktadır. Öğrencilerimiz, yabancı uyruklu arkadaşlarından onların ana dillerini öğrenme ve pratik yapma imkanına sahip 
              olmaktalar. Kampüsümüz farklı ırk, renk, dil ve kültürlere sahip öğrencilerle cıvıl cıvıl bir ortam haline gelmekte.
              <br><br>
              <strong>Derslik ve Laboratuvarlar</strong>
              <br>
              Fakültemiz bünyesinde ders ve araştırmalara yönelik laboratuvar, derslikler ve idari ofis alanları içeren 9 bina bloku bulunmakta, 
              bunların dışında dersliklere sahip iki merkezi derslik binasında hizmet vermekteyiz. Mühendislik Fakültesi, şehrin gürültü 
              ve karmaşasından uzak, güvenilir ve huzurlu  ortama sahip Düzce üniversitesi merkez yerleşkesinin tam ortasında yer almakta 
              ve sosyal alanların hepsine yakın mesafede bulunmaktadır.
              <br><br>
              Öğrencilerin sürekli kullanımına açık bilgisayar laboratuvarları, kütüphane, yemekhane ve kafeteryalarla öğrenci dostu bir ortam sunulmaktadır.
              Engelli öğrencilerimizin erişimi için gerekli düzenlemeler tüm binalarımızda bulunmaktadır.
              <br><br>
              <strong>Konum</strong>
              <br>
              Düzce Üniversitesi’nin, Ankara-İstanbul şehirlerinin tam ortasında olması ve Sakarya, Kocaeli, Zonguldak ve Bolu gibi sanayi, kültür
              ve madencilik alanında gelişmiş şehirlere oldukça yakın olması, Düzce sanayisinin gelişmesinde önemli bir rol oynamakta ve 
              akademik anlamda da üniversite-sanayi işbirliğinin geliştirilmesine olanak sağlamaktadır. Değer üretmeyi kendisine amaç edinmiş 
              olan üniversitemiz, gelişmekte olan kampüsü ve çevresi ile öğrencilerimizin eğitimlerini sürdürürken dolu dolu vakit geçirebilmelerine
              olanak sağlamaktadır.
              <br><br>
              </h5>
              <br><br>
              <h4 class="title">Bölümler</h4>
              <hr>
              <h5>
              Bilgisayar Mühendisliği <br>
              Bilgisayar Mühendisliği (İngilizce) <br>
              Biyomedikal Mühendisliği <br>
              Çevre Mühendisliği <br>
              Elektrik - Elektronik Mühendisliği <br>
              Endüstri Mühendisliği <br>
              İnşaat Mühendisliği <br>
              Makine Mühendisliği <br>
              Mekatronik Mühendisliği <br>
              </h5>
              <br>
              </div>

              <div class="container">
              <h5 class="title">Yönetim</h5>
              <hr>
              <br>
              <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col">
                <div class="card">
                <img src="../../assets/düzce-img/fakulteler/muhendis1.jpg" class="card-img-top" style="height:400px;">
                <h5 class="card-title text-center">Prof. Dr. Resul KARA</h5>
                <h5 class="text-center">Dekan</h5>
                </div>
              </div>
              </div>
              </div>

              <div class="container">
                <br>
                <h4 class="title">İletişim</h4>
                <hr>
                <br>
                <h5 class="title">Fakülte Adresi</h5>
                <h5>Düzce Üniversitesi Konuralp Yerleşkesi Merkez/Düzce 81620</h5>
                <h5>Posta Kodu:81650</h5>
                <br>
                <h5 class="title">Fakültemiz İletişim Kanalları</h5>
                <h5>
                Telefon:	(0380) 542 10 36 <br>
                Fax:	(0380) 542 10 37 <br>
                E-Posta:	mf[at]duzce.edu.tr <br>
                </h5>
              </div>

            </template>

            <template slot="tab-pane-7">

              <div class="container">
              <h4 class="title">ORMAN FAKÜLTESİ</h4>
              <br>
              <h5 class="title">Genel Bilgi</h5>
              <hr>
              <h5>  
              1992 yılında Abant İzzet Baysal Üniversitesi’ne bağlı olarak Düzce’de kurulan, daha sonra 2006 yılında kurulan Düzce Üniversitesi bünyesine
               dahil olan fakültemizde; Ağaç İşleri Endüstri Mühendisliği Bölümü, Peyzaj Mimarlığı Bölümü, Orman Endüstri Mühendisliği Bölümü, 
               Orman Mühendisliği Bölümü; lisans ve lisansüstü düzeyde öğretim faaliyeti vermektedir.
              <br><br>
              2012 yılı içerisinde Fakültemizin dördüncü bölümü olarak kurulan “Yaban Hayatı Ekolojisi ve Yönetimi” bölümü ise faal öğretime başlamak
               için çalışmalarına devam etmektedir.
              <br><br>
              Fakültemiz 2001 yılında Üniversitemiz Düzce Konuralp Yerleşkesi'nde bulunan kendi binasına taşınarak 2001-2002 eğitim-öğretim yılından 
              itibaren faaliyetlerini burada sürdürmektedir. Fakültemizin binası, 17.000 m2 kapalı alana sahiptir. Binamız içerisinde;
              <br><br>
              • Derslikler, 
              <br>
              • Laboratuarlar
              <br>
              • Stüdyolar,
              <br>
              • Çizim salonu,
              <br>
              • Tasarım salonu,
              <br>
              • Maket odası,
              <br>
              • Konferans salonu,
              <br>
              • İnternet ve okuma salonu,
              <br>
              • Kantin,
              <br>
              • Atölyeler bulunmaktadır.
              <br><br>
              2012/2013 eğitim-öğretim dönemi itibariyle fakültemiz bünyesinde 677 lisans, 100 lisansüstü (79 yüksek lisans, 21 doktora) öğrencisi öğrenim 
              görmektedir. Lisans düzeyinde öğrenim gören öğrencilerimiz 2009-2010 öğretim yılından itibaren yabancı dil hazırlık eğitimine tabi tutulmaktadırlar.
              Yabancı dil hazırlık eğitimi 2013-2014 eğitim öğretim yılından itibaren seçmeli olmuştur. İsteyen öğrencilerimiz hazırlık eğitimi alabilecek,
              isteyen öğrencilerimiz doğrudan lisans eğitimine başlayabileceklerdir.
              <br><br>
              Güçlü, tecrübeli kadrosu ve tamamlanmış alt yapısı ile nitelikli eğitim-öğretim veren fakültemiz bünyesinde 7 profesör, 11 doçent, 
              22 yardımcı doçent, 3 öğretim görevlisi, 18 araştırma görevlisi ve 2 uzman personel bulunmaktadır. Ayrıca fakültemiz kadrosunda 13 idari 
              personel bulunmaktadır. Fakültemizde bulunan öğretim elemanlarımız, 2008 yılından itibaren 53 adet BAP
              (Bilimsel Araştırma Projeleri)-(25 adet proje devam ediyor), 14 adet TÜBİTAK Projesi )-(6 adet proje devam ediyor),
              yürütmüş ve SCI-E kapsamında Düzce Üniversitesi indeksli birçok yayın yaparak bölgemize, ülkemize ve dünyaya katkıda bulunmuş, 
              bu anlamda Türkiye’nin önde gelen Orman Fakülteleri arasında yer almayı başarmışlardır.
              <br><br>
              Dünya bilim literatürüne Cephalaria duzceënsis (Düzce Pelemir Otu), Centaurea yaltirikii (Düzce Peygamber Çiçeği) bitki türleri,
              Bursaphelenchus anamurius ve Bursaphelenchus andrassyi adları verilen iki nematod türü kazandırılmıştır. Yine üniversitemizde
              tamamlanmış tek SAN-TEZ (Sanayi Tezleri Programı) projesi de fakültemizde gerçekleştirilmiştir.
              <br><br>
              Fakültemiz Ağaç İşleri Endüstri Mühendisliği Bölümü'nde okuyan öğrenciler Ağaç İşleri Endüstri Mühendisi, Orman Mühendisliği Bölümü'nde
              okuyan öğrenciler Orman Mühendisi, Orman Endüstri Mühendisliği Bölümü'nde okuyan öğrenciler Orman Endüstri Mühendisi ve Peyzaj Mimarlığı 
              Bölümü'nde okuyan öğrenciler Peyzaj Mimari olarak mezun olmaktadırlar. Yaban Hayatı Ekolojisi ve Yönetimi Bölümünün faaliyete geçmesi halinde 
              öğrenciler Yaban Hayatı Mühendisi olarak mezun olacaklardır. Mezunlarımızın çalışma konuları ve ülkemizde ve dünyada hangi birimlerde 
              çalışabileceği bölüm web sayfalarımızda detaylı olarak açıklanmıştır.
              </h5>
              <br><br>
              <h4 class="title">Bölümler</h4>
              <hr>
              <h5>
              Peyzaj Mimarlığı <br>
              Ağaç İşleri Endüstri Mühendisliği <br>
              Orman Endüstri Mühendisliği <br>
              Orman Mühendisliği <br>
              Yaban Hayatı Ekolojisi ve Yönetimi <br>
              </h5>
              <br>
              </div>

              <div class="container">
                <br>
                <h4 class="title">İletişim</h4>
                <hr>
                <br>
                <h5 class="title">Fakülte Adresi</h5>
                <h5>	Düzce Üniversitesi Orman Fakültesi Konuralp Yerleşkesi Merkez/Düzce 81620</h5>
                <h5>Posta Kodu:81650</h5>
                <br>
                <h5 class="title">Fakültemiz İletişim Kanalları</h5>
                <h5>
                Telefon:  03805421137 <br>
                Fax:	03805421136 <br>
                Mail:	of@duzce.edu.tr
                </h5>
              </div>


            </template>

            <template slot="tab-pane-8">

             <div class="container">
              <h4 class="title">SAĞLIK BİLİMLERİ FAKÜLTESİ</h4>
              <br>
              <h5 class="title">Genel Bilgi</h5>
              <hr>
              <h5>  
              Fakültemiz 1996 yılındaki Sağlık Şurasında alınan karardan sonra; 10 Ekim 1996 tarih ve 96/8655 sayılı Bakanlar Kurulu Kararı
              ile Sağlık Meslek Liselerinin Sağlık Yüksekokullarına dönüştürülmesi sonucunda Düzce Sağlık Meslek Lisesi de Düzce
              Sağlık Yüksekokulu adıyla A.İ.B.Ü. ‘ne bağlanmıştır. 10 yıl boyunca adı geçen Üniversite için hizmet verdikten sonra
              2006 yılında Düzce Üniversitesi’nin kurulmasıyla Üniversitemiz bünyesinde eğitim-öğretim faaliyetini sürdürmektedir.
              12 Ocak 2017 tarih ve 29946 sayılı Resmi Gazetede yayımlanan 12 Aralık 2016 tarih ve 9648 sayılı Bakanlar Kurulu Kararı 
              ile Sağlık Yüksekokulu kapatılarak yerine Sağlık Bilimleri Fakültesi kurulmuştur.
              <br><br>
              Fakültemiz Konuralp Yerleşkesinde Orman Fakültesi binasında hizmet vermektedir. 
              <br><br>
              Fakültemizin amacı; Atatürk ilke ve inkılâplarına bağlı, evrensel değerleri benimseyen, bu doğrultuda kişisel değerlerini geliştirmiş,
              insan ve hasta haklarına saygılı, bilimsel düşünce sistemine sahip,  araştırma, uygulama ve eğitim becerileri gelişmiş, yeniliğe açık,
              girişimci, sorumluluk sahibi mezunlar yetiştirmektir.
              <br><br>
              </h5>
              <br><br>
              <h4 class="title">Bölümler</h4>
              <hr>
              <h5>
              Hemşirelik Bölümü <br>
              Sosyal Hizmet Bölümü <br>
              Beslenme ve Diyetetik Bölümü <br>
              Fizyoterapi ve Rehabilitasyon Bölümü <br>
              </h5>
              <br>
             </div>

             <div class="container">
              <h5 class="title">Yönetim</h5>
              <hr>
              <br>
              <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col">
                <div class="card">
                <img src="../../assets/düzce-img/fakulteler/saglik1.jpg" class="card-img-top" style="height:500px;">
                </div>
              </div>
              </div>
             </div>

             <div class="container">
                <br>
                <h4 class="title">İletişim</h4>
                <hr>
                <br>
                <h5 class="title">Fakülte Adresi</h5>
                <h5>Düzce Üniversitesi Sağlık Bilimleri Fakültesi Konuralp Yerleşkesi Orman Fakültesi Hizmet Binası Bodrum 1.Kat DÜZCE</h5>
                <h5>Posta Kodu:81650</h5>
                <br>
                <h5 class="title">Fakültemiz İletişim Kanalları</h5>
                <h5>
                Tel: 0380 542 11 41 <br>
                Faks: 0380 542 11 40 <br>
                E-posta: sabf@duzce.edu.tr <br>
                </h5>
              </div>

            </template>

            <template slot="tab-pane-9">

             <div class="container">
              <h4 class="title">SANAT VE TASARIM FAKÜLTESİ</h4>
              <br>
              <h5 class="title">Genel Bilgi</h5>
              <hr>
              <h5>  
              Sanat, Tasarım ve Mimarlık Fakültesi 28.03.1983 tarihli ve 2809 sayılı Kanun’un ek 30. maddesine göre Bakanlar Kurulu’nca
              01.02.2010 tarihinde, evrensel düşünce ve değerlere sahip, sorunlara analitik yaklaşabilen, estetik duyarlılıkları gelişmiş,
              yaratıcı ve yenilikçi ürünler ve mekânlar tasarlarken niteliği ve doğayı göz ardı etmeyen, insan ve topluma öncelik veren, 
              bilgisayar ve enformasyon teknolojilerini tasarım süreçlerine uygulayabilen, meslek sorumluluklarına ve özgüvene sahip bireyler 
              yetiştirmek amacıyla kurulmuştur.
              <br><br>
              Amacımız, Düzce Üniversitesi misyonu ve vizyonu bağlamında; ülke ve dünya kültürüne sanat yoluyla katkıda bulunacak evrensel
              düşünce ve değerlere sahip;  özgün düşünen, teknolojiye hakim, estetik bilinci gelişmiş, disiplinlerarası işbirliği kurabilen,
              etik değerlere  bağlı, adalet duygusu gelişkin, toplum ve bilim dünyasına saygılı, yenilikçi ve özgürlükçü, çoksesli,
              araştıran ve sorgulayan sanatçı ve tasarımcılar yetiştirmektir.
              <br><br>
              Hedefimiz, insanlık tarihinin başlangıcından bu yana ilerlemenin temelini oluşturan sanat ve tasarım konusunda, 
              eğitim ve öğretim kalitesini, günümüz sanat değerleri ve teknolojisi göz önünde bulundurarak artırmak, ulusal ve 
              uluslararası düzeyde tercih edilen bir kuruluş olmak, fakültemizi kültürel ve sanatsal alanda bir çekim merkezi haline getirmektir.
              </h5>
              <br><br>
              <h4 class="title">Bölümler</h4>
              <hr>
              <h5>
              Mimarlık <br>
              Müzik <br>
              Resim <br>
              Heykel <br>
              Sahne Sanatları <br>
              Radyo, Televizyon ve Sinema <br>
              Temel Sanat Bilimleri <br>
              İç Mimarlık <br>
              Görsel İletişim Tasarımı <br>
              Geleneksel Türk Sanatları <br>
              Endüstri Ürünleri Tas. <br>
              Sanat ve Kültür Yönetimi <br>
              </h5>
              <br>
             </div>

              <div class="container">
              <h5 class="title">Yönetim</h5>
              <hr>
              <br>
              <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col">
                <h5 class="title">Dekan</h5>
                <h5>Prof. Dr. E. Yıldız DOYRAN</h5>
                <h5 class="title">Dekan Yardımcısı </h5>
                <h5>
                Doç. Dr. İlker YARDIMCI
                Doç. Dr. Tunç YILDIRIM
                </h5>
                <h5 class="title">Fakülte Sekreteri	</h5>
                <h5>Seval ÇAKICIER</h5>
              </div>
              </div>
             </div>

            </template>

            <template slot="tab-pane-10">

             <div class="container">
              <h4 class="title">SPOR BİLİMLERİ FAKÜLTESİ</h4>
              <br>
              <h5 class="title">Genel Bilgi</h5>
              <hr>
              <h5> 
              <strong>Kuruluş</strong>
              <br>
              Fakültemiz, 03.07.2011 tarih ve 27983 sayılı Resmi Gazetede yayınlanan Bakanlar Kurulu Kararı ile Beden Eğitimi ve Spor Yüksekokulu
              olarak kurulmuştur. 25.01.2016 tarihli ve 2016/8562 sayılı kararname ile akademik faaliyetlerini Spor Bilimleri Fakültesi
              adıyla sürdürmektedir. Fakültemiz, Beden Eğitimi ve Spor Eğitimi Bölümüne; 2013-2014 eğitim-öğretim yılı güz döneminde özel 
              yetenek sınavı ile 40 öğrenci alınarak eğitim-öğretim faaliyetine başlanmıştır. Antrenörlük Eğitimi Bölümü; I. ve II. Öğretim 
              programlarına 2014-2015 eğitim-öğretim yılında Özel Yetenek Sınavı ile 80 öğrenci alarak eğitim-öğretime başlamıştır. Spor Yöneticiliği 
              Bölümü; 2016-2017 Eğitim Öğretim Yılında I. ve II. Öğretim programlarına 80 öğrenci alarak eğitim-öğretime başlamıştır. Antrenörlük
              Eğitimi ve Beden Eğitimi Öğretmenliği bölümleri arasında Çift Anadal Programı (ÇAP) uygulanmaktadır. Fakültemiz Dekanlık faaliyetlerini,
              Konuralp yerleşkesinde bulunan Teknoloji Fakültesi binası A Blokta ve eğitim faaliyetlerini ise Üniversitemiz merkezi dersliklerinde 
              ve spor komplekslerinde yürütmektedir.
              <br><br>
              <strong>Misyon</strong>
              <br>
              Spor Bilimleri Fakültesi, çağdaş ve demokratik bir fakülte olarak; değişim ve gelişime açık, erdemli bilim, meslek, spor 
              insanları ve liderler yetiştiren; spor başta olmak üzere bölgesel, ulusal ve uluslararası düzeyde işbirlikleri kuran; 
              sürdürülebilir kalkınmaya öncülük eden; yenilikçi, girişimci, spesifik olarak spor bilimleri alanlarında evrensel bilgi 
              ve değerler üreten bir fakültedir.
              <br><br>
              <strong>Vizyon</strong>
              <br>
              Katma değeri yüksek uluslararası bilimsel çalışmalarıyla spor bilimleri alanında öncü; nitelikli eğitimi ve ürettiği 
              evrensel değerlerle bölgenin sportif, sosyal ve kültürel gelişmesine öncülük eden fakülte olmak.
              </h5>
              <br><br>
              <h4 class="title">Bölümler</h4>
              <hr>
              <h5>
              Antrenörlük Eğitimi Bölümü <br>
              Spor Yöneticiliği Bölümü <br>
              Beden Eğitimi ve Spor Öğretmenliği Bölümü <br>
              Rekreasyon Bölümü <br>
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
                <img src="../../assets/düzce-img/fakulteler/spor1.png" class="card-img-top" style="height:500px;">
                </div>
              </div>
              </div>
              </div>

              <div class="container">
                <br>
                <h4 class="title">İletişim</h4>
                <hr>
                <br>
                <h5 class="title">Fakülte Adresi</h5>
                <h5>Düzce Üniversitesi Spor Bilimleri Fakültesi Konuralp Yerleşkesi Merkez/DÜZCE</h5>
                <h5>Posta Kodu:81650</h5>
                <br>
                <h5 class="title">Fakültemiz İletişim Kanalları</h5>
                <h5>
                Tel: 0380 542 11 45 <br>
                Faks: 0380 542 13 65 <br>
                Meil Adresi: sbf@duzce.edu.tr <br>
                </h5>
              </div>

            </template>

            <template slot="tab-pane-11">

              <div class="container">
              <h4 class="title">TIP FAKÜLTESİ</h4>
              <br>
              <h5 class="title">Genel Bilgi</h5>
              <hr>
              <h5> 
              <strong>Kuruluş</strong>
              <br>
              Tıp Fakültesi 1992 yılında Abant İzzet Baysal Üniversitesi’ne bağlı olarak kurulmuş  ve 1996 yılında Eğitim-Öğretim faaliyetlerine 
              başlamıştır.Tıp Fakültemiz 2006  yılında çıkan 5467 sayılı kanunla yeni kurulan Düzce Üniversitesi’ne bağlanmıştır.
              <br><br>
              Tıp Fakültemizin Dahili, Temel ve Cerrahi Bilimler Bölümlerine bağlı 40 Anabilim Dalında, 43 profesör, 24 doçent, 54  Dr. Öğretim Üyesi,
               1 Öğretim Görevlisi, 223  araştırma görevlisi (tıpta uzmanlık eğitimi öğrencisi), toplam 346 akademik kadro ve 875 öğrencisiyle
                ile eğitim - öğretim ve sağlık hizmeti verilmektedir.
              <br><br>
              Tıp Fakültemiz ilk mezunlarını 2001-2002 eğitim öğretim yılında vermiştir.
              <br><br>
              Tıp Fakültesi bünyesinde yılda 3 sayı olarak “Düzce Tıp Fakültesi Dergisi” ile “Konuralp Tıp Dergisi” adında 2 ayrı bilimsel dergi 
              çıkarılmaktadır. Tıp Fakültesi Dergisi 1999 yılından günümüze 23. cilt  olarak yayınlanmış ve elektronik ortamda yayınlarını
              okuyucuları ile paylaşmaya başlamıştır. Her iki dergide  İndex Copernicus Doaj, Ulakbim Türk Tıp Dizini, Pleksus Türk Medline
              ve Ebsco indexleri tarafından taranmakta olup, Uluslararası hakemli dergi statüsündedir.
              <br><br>
              Nitelikli bir tıp eğitimi için; kaliteli öğrenci, iyi bir fiziki alt yapı ve olağanüstü sıcak, etkin öğrenci-öğretim üyesi
              iletişimi amaçlanmaktadır. Tıp, doğruluğu ve başarıları her kesimden insanı ilgilendiren uygulamalı bir bilimdir. 
              Tıp Fakülteleri, eğitim ve araştırmaların yanı sıra, sağlık hizmeti de vermektedir. Yalnız tedavi edici hekimlik değil
              koruyucu hekimlik uygulamaları da verilen hizmetin bir parçasıdır. Hizmetin niteliği yönünden bölgenin sağlık alanına 
              yönelik beklentileri de cevaplamaya çalışılmaktadır. Hastane, morfoloji binası ve merkezi dersliklerde yürütülen hizmetlerde
               modern laboratuvarlar, projeksiyonlu- mikrofonlu amfilerde modern cihazlarla uygulamalı ve teorik eğitim-öğretim uygulanmaktadır. 
              <br><br>
              <strong>Eğitim</strong>
              <br>
              Fakültemizde Entegre Eğitim Sistemi içinde Ulusal Çekirdek Eğitim Proğramı uygulanmaktadır. Bu eğitim sisteminin başlıca özelliği Dönem 
              I, II, III derslerinin anabilim dallarına göre değil, konulara göre verilmesidir. Eğitim sisteminde belirli bir konu örneğin solunum 
              sistemi ele alınarak, bu sisteme ait anatomi, histoloji, fizyoloji, biyokimya gibi temel tıp bilimleri veya klinik bilimleri birbirleri 
              ile ilgili ve belirli bir düzen içerisinde verilmektedir. Entegre sistemle tıp öğrencisine basit ve küçük fonksiyonel ve yapısal üniteler 
              sunulmakta, giderek daha karmaşık insan organizması sistemlerine geçilmektedir. Bütün dersler ve laboratuar çalışmaları da konular 
              açısından birbiri ile ilgili bağlantılıdır. Öğrencilere tıp eğitiminin birinci döneminde temel bilimler, ikinci döneminde normal 
              insan biyolojisi ve mikrobiyolojinin temel esasları verilmektedir. Üçüncü dönemde ise, kliniğe hazırlık olmak üzere sistemlerin 
              patoloji, farmakoloji ve fizyopatolojisi ele alınmaktadır. Tıp eğitiminin dördüncü ve beşinci dönemleri klinik stajlara ayrılmıştır. 
              Servislerde hastalar üzerindeki çalışmalar ve klinik eğitimine ek olarak Dönem IV’ de radyoloji konusunda da eğitim görmektedirler. 
              Altıncı yıl mezuniyet öncesi internlik (Aile Hekimliği) dönemidir. Bu dönemde öğretim üyeleri ve uzmanların denetiminde sorumluluk 
              alarak kendilerini hekimliğe hazırlarlar.
              <br><br>
              <strong>Misyon</strong>
              <br>
              Düzce Üniversitesi Tıp Fakültesi Avrupa standartlarına uygun mezuniyet öncesi ve mezuniyet sonrası Üstün nitelikte hekim yetiştirmeyi, 
              kaliteli tedavi hizmeti sunmayı ve koruyucu sağlık hizmetlerini desteklemeyi, tıp araştırmaları alanında yüksek kaliteli araştırmalar 
              üretmeyi, ilgili kuruluşlar ve enstitülerle aktif işbirliği yapmayı Düzce ilinde ve Türkiye’de hekimlik eğitimi ve uygulamasının gelişimine 
              katkıda bulunmayı ve ürettiklerini toplumla paylaşmayı görev edinmiştir.
              <strong>Vizyon</strong>
              <br>
              Ulusal ve uluslararası düzeyde tıp eğitiminin yanı sıra sağlık hizmetlerinde ve bilimsel araştırmalarda önde gelen tıp fakültelerinden biri olmak.
              <br><br>
              </h5>
              <br><br>
              <h4 class="title">Bölümler</h4>
              <hr>
              <h5>
              Cerrahi Tıp Bilimleri Bölümü <br>
              Dahili Tıp Bilimleri Bölümü <br>
              Temel Tıp Bilimleri Bölümü <br>
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
                <img src="../../assets/düzce-img/fakulteler/tip1.jpg" class="card-img-top" style="height:300px;">
                <h5 class="card-title text-center">Prof.Dr. İdris ŞAHİN</h5>
                <h5 class="text-center">Dekan</h5>
                </div>
              </div>
              <div class="col">
                <div class="card">
                <img src="../../assets/düzce-img/fakulteler/tip2.jpg" class="card-img-top" style="height:300px;">
                <h5 class="card-title text-center">Prof.Dr. Bora BÜKEN </h5>
                <h5 class="text-center">Dekan Yardımcısı</h5>
                </div>
              </div>
              <div class="col">
                <div class="card">
                <img src="../../assets/düzce-img/fakulteler/tip3.jpg" class="card-img-top" style="height:300px;">
                <h5 class="card-title text-center">Prof.Dr. Muhammet Ali KAYIKÇI</h5>
                <h5 class="text-center">Dekan Yardımcısı</h5>
                </div>
              </div>
              </div>
              </div>

               <div class="container">
                <br>
                <h4 class="title">İletişim</h4>
                <hr>
                <br>
                <h5 class="title">Fakülte Adresi</h5>
                <h5>	Düzce Üniversitesi Konuralp Yerleşkesi Merkez/Düzce 81620</h5>
                <h5>Posta Kodu:81650</h5>
                <br>
                <h5 class="title">Fakültemiz İletişim Kanalları</h5>
                <h5>
                Telefon:	0380 542 1416 <br>
                Faks:	0380 542 1302 <br>
                E-Posta: tip@duzce.edu.tr <br>
                </h5>
              </div>
              

            </template>

            <template slot="tab-pane-12">

              <div class="container">
              <h4 class="title">ZİRAAT FAKÜLTESİ</h4>
              <br>
              <h5 class="title">Genel Bilgi</h5>
              <hr>
              <h5> 
              Ziraat Fakültesi; 23 Mart 2012 tarih ve 28242 sayılı Resmi Gazetede yayımlanan 2012/2883 sayılı Bakanlar Kurulu Kararı ile 
              ¨Ziraat ve Doğa Bilimleri Fakültesi¨ adı ile kurulmuştur. 2809 sayılı Yükseköğretim Kurumları Teşkilatı Kanunu’nun ek 30. 
              maddesi gereğince 27 Mart 2020 tarih ve 2319 sayılı Cumhurbaşkanı Kararı ile adı ¨Ziraat Fakültesi¨ olarak değiştirilmiştir.
              <br><br>
              Fakültemizin kuruluş amacı, Ülke tarımının gelişmesine katkıda bulunmak, gelişen teknolojiyi tarıma entegre ederek başta bölgemiz 
              olmak üzere mevcut tarımsal sorunlara çözüm üretmek ve nitelikli Ziraat Mühendislerini yetiştirmektir. Fakültemiz, Düzce Üniversitesi 
              Konuralp Yerleşkesinde bulunmaktadır.
              <br><br>
              Fakültemiz bünyesinde, Bahçe Bitkileri, Bitki Koruma, Biyosistem Mühendisliği, Tarla Bitkileri ve Tarımsal Biyoteknoloji lisans 
              programları ile Bitki Koruma Yüksek Lisans ve Bitki Koruma Doktora Programları mevcuttur. Fakültemizin akademik kadrosunda; 5 Profesör, 
              6 Doçent, 7 Doktor Öğretim Üyesi, 6 Araştırma Görevlisi bulunmaktadır.
              <br><br>
              Fakültemizde Eğitim-Öğretim faaliyetleri 2015-2016 yılında Bitki Koruma Bölümünün öğrenci alımı ile başlamıştır. 2018-2019 Eğitim-Öğretim 
              yılında Biyosistem Mühendisliği ve Tarla Bitkileri Bölümlerine de öğrenci alınmış olup, 2021-2022 Eğitim-Öğretim yılında toplam lisans öğrenci 
              sayımız 227’e ulaşmıştır. Fakültemiz 2018-2019 yılında ilk mezunlarını vermiştir.
              <br><br>
              </h5>
              <br><br>
              <h4 class="title">Bölümler</h4>
              <hr>
              <h5>
              Bahçe Bitkileri <br>
              Bitki Koruma <br>
              Biyosistem Mühendisliği <br>
              Tarla Bitkileri <br>
              Tarımsal Biyoteknoloji <br>
              </h5>
              <br>
              </div>

              <div class="container">
                <br>
                <h4 class="title">İletişim</h4>
                <hr>
                <br>
                <h5 class="title">Fakülte Adresi</h5>
                <h5>Düzce Üniversitesi / Ziraat Fakültesi (Konuralp Yerleşkesi) Çiftepınarlar Mahallesi 81620 Merkez/DÜZCE</h5>
                <h5>Posta Kodu:81650</h5>
                <br>
                <h5 class="title">Fakültemiz İletişim Kanalları</h5>
                <h5>
                E posta : zf@duzce.edu.tr <br>
                Telefon : 0380 541 22 94 <br>
                Fax : 0380 541 22 95 <br>
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


