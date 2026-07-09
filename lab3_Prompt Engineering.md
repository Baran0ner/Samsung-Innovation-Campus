# Lab 3 - Prompt Engineering Basics

## 1. Lab Amacı

Bu labın amacı, prompt engineering kullanarak yapay zekadan daha kaliteli, düzenli ve gerçekçi çıktılar almayı öğrenmektir.

Bu çalışmada Role, Goal, Context, Constraints, Style, Output Format ve Verification gibi temel prompt bölümlerini kullanarak yapılandırılmış bir prompt hazırladım.

Ana görev olarak, çalışma planına bağlı kalmakta zorlanan bir öğrenci için gerçekçi bir çalışma planı oluşturan bir AI Study Coach tasarladım.

---

## 2. Lab 3-1 - Prompt Element Practice

Bu adımda, genel ve belirsiz bir promptun genelde belirsiz cevaplar ürettiğini gördüm. Eğer prompt içinde net bir amaç, bağlam, kısıtlar ve çıktı formatı yoksa yapay zeka ne istediğimizi tahmin etmeye çalışıyor.

Bence en büyük kalite artışı, prompta constraints ve output format eklendiğinde oluyor. Çünkü bu bölümler eklendiğinde yapay zeka daha düzenli, daha uygulanabilir ve daha kullanışlı bir cevap veriyor.

### Kendi Değerlendirmem

En büyük kalite artışını, prompta net kısıtlar ve çıktı formatı eklendiğinde fark ettim. Öncesinde yapay zeka daha genel bir cevap verebiliyordu ama bu bölümler eklendiğinde sonuç daha anlaşılır ve kullanılabilir hale geldi.

Günlük kullanımda en çok Constraints bölümünü kullanacağımı düşünüyorum. Çünkü bu bölüm yapay zekanın çok genel, gerçek dışı veya uygulanması zor cevaplar üretmesini engelliyor.

Eğer yapay zeka kötü bir cevap verirse, ilk olarak Goal veya Constraints bölümünü düzeltirim. Çünkü çoğu kötü çıktı, görevin yeterince açık anlatılmamasından veya sınırların net verilmemesinden kaynaklanıyor.

---

## 3. Lab 3-2 - Kendi AI Study Coach Fikrimi Oluşturma

Bu bölümde, öğrenciler için gerçekçi çalışma planı hazırlayan bir AI Study Coach tasarladım.

Bu senaryodaki öğrenci, çok katı ve yoğun planlara bağlı kalmakta zorlanıyor. Bu yüzden hazırlanacak planın çok ağır olmaması gerekiyor. Plan içerisinde mola süreleri, esnek zamanlar ve öncelik mantığı bulunmalı.

### Dikkat Edilmesi Gereken Noktalar

- Planda her gün buffer time yani esnek zaman olmalı.
- Çalışma blokları arasında net molalar bulunmalı.
- Zor veya acil dersler öncelikli olmalı.
- Plan öğrenciyi fazla zorlamamalı.
- Günlük plan gerçekçi ve uygulanabilir olmalı.
- Plan mükemmel görünmek yerine sürdürülebilir olmalı.

### Kendi Değerlendirmem

Bence buffer time eklemek bu planı gerçekçi hale getiren en önemli noktalardan biridir. Çünkü öğrenciler gün içinde beklenmeyen durumlarla karşılaşabilir. Eğer planda hiç esneklik yoksa küçük bir gecikme bile bütün planın bozulmasına neden olabilir.

Ayrıca spesifik molalar da önemlidir. Çünkü sürekli çalışmak öğrencinin motivasyonunu düşürebilir. Kısa ve net molalar, odaklanmayı daha uzun süre korumaya yardımcı olur.

Priority logic de önemli bir bölümdür. Çünkü her dersin önemi aynı değildir. Sınavı yakın olan veya daha zor olan dersler daha önce çalışılmalıdır.

---

## 4. Lab 3-3 - Structured Prompt Design

Bu adımda AI Study Coach için yapılandırılmış bir prompt hazırladım.

### Hazırladığım Structured Prompt

```text
Role:
Sen, öğrencilerin gerçekçi ve uygulanabilir çalışma planları oluşturmasına yardımcı olan bir AI Study Coach'sun.

Goal:
Çalışma planlarına bağlı kalmakta zorlanan bir üniversite öğrencisi için haftalık gerçekçi bir çalışma planı oluştur.

Context:
Öğrenci bir üniversite öğrencisidir. Daha düzenli çalışmak istiyor ancak plan çok yoğun veya çok katı olduğunda motivasyonunu kaybediyor. Bu yüzden dengeli, esnek ve uygulanabilir bir çalışma planına ihtiyacı var.

Constraints:
- Her gün buffer time yani esnek zaman ekle.
- Çalışma blokları arasında net molalar ekle.
- Zor veya acil dersleri öncelikli olarak planla.
- Aşırı yoğun bir program oluşturma.
- Bir günde en fazla 4 odaklı çalışma bloğu olsun.
- Her çalışma bloğu 45-60 dakika arasında olsun.
- Her görev için kısa bir açıklama ekle.
- Plan gerçekçi olsun, mükemmel ama uygulanamaz bir program gibi olmasın.

Style:
Açık, destekleyici ve öğrenci dostu bir dil kullan. Cümleler basit ve motive edici olsun.

Output Format:
Çıktıyı haftalık tablo şeklinde oluştur. Tabloda şu bölümler olsun:
- Gün
- Saat
- Ders / Görev
- Mola
- Açıklama / Not

Tablodan sonra planı uygulamak için 3 kısa öneri ekle.

Verification:
Cevabı tamamlamadan önce şunları kontrol et:
- Planda buffer time var mı?
- Molalar net şekilde eklenmiş mi?
- Plan aşırı yoğun mu?
- Zor veya acil dersler öncelikli mi?
- Plan bir öğrenci için gerçekçi mi?
```

### Neden Bu Şekilde Tasarladım?

Role bölümünü ekledim çünkü yapay zekanın sıradan bir plan hazırlayıcı gibi değil, öğrenciye destek olan bir çalışma koçu gibi davranmasını istedim.

Goal bölümünü net yazdım çünkü yapay zekanın sadece herhangi bir çalışma planı değil, çalışma planına bağlı kalmakta zorlanan bir öğrenci için gerçekçi bir plan oluşturmasını istedim.

Context bölümünü ekledim çünkü öğrencinin çok yoğun planlarda motivasyon kaybettiğini belirtmek önemliydi. Bu bilgi, yapay zekanın daha esnek ve uygulanabilir bir plan oluşturmasına yardımcı olur.

Constraints bölümünü ekledim çünkü yapay zekanın aşırı yoğun veya gerçek dışı bir program hazırlamasını istemedim. Özellikle günlük çalışma bloğu sınırı ve buffer time eklemek planı daha gerçekçi hale getiriyor.

Output Format bölümünü ekledim çünkü çıktının tablo halinde ve kolay okunabilir olmasını istedim.

Verification bölümünü ekledim çünkü yapay zekanın cevabı vermeden önce kendi planını kontrol etmesini istedim.

---

## 5. Lab 3-4 - Model Execution and First Result Check

Hazırladığım ilk structured promptu çalıştırdıktan sonra yapay zeka haftalık bir çalışma planı oluşturdu.

İlk çıktı genel olarak düzenliydi. Çalışma blokları, molalar ve kısa açıklamalar vardı. Ancak bazı günlerde planın biraz yoğun olduğunu fark ettim. Özellikle bazı günlerde arka arkaya çok fazla çalışma bloğu vardı ve bu durum gerçek hayatta takip etmeyi zorlaştırabilirdi.

### İlk AI Çıktısının Özeti

İlk yapay zeka çıktısında şunlar vardı:

- Haftalık çalışma tablosu
- Farklı dersler için çalışma blokları
- Çalışma aralarında molalar
- Bazı günlerde buffer time
- Görevler için kısa açıklamalar

### İlk Sonuç Değerlendirmem

İlk sonuç düzenliydi ama tamamen gerçekçi değildi. Bazı günler çok yoğun görünüyordu. Plan, bir öğrenci için uygulanabilir olsa da bazı yerlerde fazla ideal ve mükemmel duruyordu.

Yapay zeka output format kısmına uydu ancak Constraints bölümünün biraz daha güçlü olması gerektiğini fark ettim.

### Kendi Değerlendirmem

İlk olarak yapay zeka biraz yoğun bir plan oluşturdu. Bu yüzden Constraints bölümünü daha net hale getirmeye karar verdim. Özellikle günlük çalışma bloğu sınırını ve boş zaman ekleme kuralını daha güçlü belirtmem gerektiğini düşündüm.

---

## 6. Lab 3-5 - Prompt Tuning and Re-execution

İlk çıktıdaki sorunu düzeltmek için prompta Negative Prompt bölümü ekledim.

Bu eklemenin amacı, yapay zekanın gerçek dışı, çok yoğun veya öğrencinin motivasyonunu düşürebilecek programlar oluşturmasını engellemekti.

### Eklediğim Negative Prompt Bölümü

```text
Negative Prompt:
- Mükemmel ama gerçekçi olmayan bir program oluşturma.
- Bir günde 4'ten fazla odaklı çalışma bloğu ekleme.
- Molaları veya buffer time bölümlerini kaldırma.
- En zor dersleri gece saatlerine koyma.
- Bütün günü sadece ders çalışmayla doldurma.
- Öğrencinin motivasyonunu ve enerji seviyesini görmezden gelme.
```

### İyileştirilmiş Prompt

```text
Role:
Sen, öğrencilerin gerçekçi ve uygulanabilir çalışma planları oluşturmasına yardımcı olan bir AI Study Coach'sun.

Goal:
Çalışma planlarına bağlı kalmakta zorlanan bir üniversite öğrencisi için haftalık gerçekçi bir çalışma planı oluştur.

Context:
Öğrenci bir üniversite öğrencisidir. Daha düzenli çalışmak istiyor ancak plan çok yoğun veya çok katı olduğunda motivasyonunu kaybediyor. Bu yüzden dengeli, esnek, uygulanabilir ve motivasyonu destekleyen bir çalışma planına ihtiyacı var.

Constraints:
- Her gün buffer time yani esnek zaman ekle.
- Çalışma blokları arasında net molalar ekle.
- Zor veya acil dersleri öncelikli olarak planla.
- Aşırı yoğun bir program oluşturma.
- Bir günde en fazla 4 odaklı çalışma bloğu olsun.
- Her çalışma bloğu 45-60 dakika arasında olsun.
- Her gün en az bir esnek zaman bloğu ekle.
- Her görev için kısa bir açıklama ekle.
- Plan gerçekçi olsun, mükemmel ama uygulanamaz bir program gibi olmasın.

Negative Prompt:
- Mükemmel ama gerçekçi olmayan bir program oluşturma.
- Bir günde 4'ten fazla odaklı çalışma bloğu ekleme.
- Molaları veya buffer time bölümlerini kaldırma.
- En zor dersleri gece saatlerine koyma.
- Bütün günü sadece ders çalışmayla doldurma.
- Öğrencinin motivasyonunu ve enerji seviyesini görmezden gelme.

Style:
Açık, destekleyici ve öğrenci dostu bir dil kullan. Cümleler basit ve motive edici olsun.

Output Format:
Çıktıyı haftalık tablo şeklinde oluştur. Tabloda şu bölümler olsun:
- Gün
- Saat
- Ders / Görev
- Mola
- Açıklama / Not

Tablodan sonra planı uygulamak için 3 kısa öneri ekle.

Verification:
Cevabı tamamlamadan önce şunları kontrol et:
- Planda buffer time var mı?
- Molalar net şekilde eklenmiş mi?
- Plan aşırı yoğun mu?
- Zor veya acil dersler öncelikli mi?
- Plan bir öğrenci için gerçekçi mi?
```

---

## 7. İyileştirilmiş AI Çıktısı Örneği

| Gün | Saat | Ders / Görev | Mola | Açıklama / Not |
|---|---|---|---|---|
| Pazartesi | 10:00 - 10:50 | Zor Ders Tekrarı | 10 dakika mola | Güne zor dersle başlamak daha verimlidir çünkü enerji seviyesi daha yüksektir. |
| Pazartesi | 11:00 - 11:50 | Soru Çözümü | 15 dakika mola | Konuyu gerçekten anlayıp anlamadığını görmek için soru çözümü yapılır. |
| Pazartesi | 14:00 - 14:50 | Proje / Ödev Çalışması | 10 dakika mola | Öğleden sonra proje gibi odak isteyen işler yapılabilir. |
| Pazartesi | 16:00 - 16:45 | Buffer Time | Serbest mola | Yetişmeyen işler veya dinlenme için esnek zaman bırakılır. |
| Salı | 10:00 - 10:50 | Acil Ders Çalışması | 10 dakika mola | Teslimi veya sınavı yakın olan dersler öncelikli olmalıdır. |
| Salı | 11:00 - 11:50 | Özet Not Çıkarma | 15 dakika mola | Özet çıkarmak konunun daha kalıcı olmasını sağlar. |
| Salı | 14:00 - 14:50 | Kodlama / Pratik Çalışma | 10 dakika mola | Teoriden sonra pratik yapmak öğrenmeyi güçlendirir. |
| Salı | 16:00 - 16:45 | Buffer Time | Serbest mola | Planın bozulmaması için esnek zaman bırakılır. |
| Çarşamba | 10:00 - 10:50 | Zor Ders Tekrarı | 10 dakika mola | Zor konular günün erken saatlerinde daha kolay çalışılır. |
| Çarşamba | 11:00 - 11:50 | Deneme / Test Çözümü | 15 dakika mola | Eksik konuları görmek için test çözülür. |
| Çarşamba | 14:00 - 14:50 | Hafif Tekrar | 10 dakika mola | Daha hafif bir çalışma, motivasyonu korumaya yardımcı olur. |
| Çarşamba | 16:00 - 16:45 | Buffer Time | Serbest mola | Yetişmeyen işler tamamlanabilir veya dinlenilebilir. |
| Perşembe | 10:00 - 10:50 | Ana Ders Çalışması | 10 dakika mola | Önemli dersler odak seviyesinin yüksek olduğu saatlere konur. |
| Perşembe | 11:00 - 11:50 | Problem Çözümü | 15 dakika mola | Problem çözmek konuyu pekiştirir. |
| Perşembe | 14:00 - 14:50 | Ödev İlerlemesi | 10 dakika mola | Akademik işler küçük parçalara bölünerek daha rahat tamamlanır. |
| Perşembe | 16:00 - 16:45 | Buffer Time | Serbest mola | Programın fazla katı olmasını engeller. |
| Cuma | 10:00 - 10:50 | Haftalık Tekrar | 10 dakika mola | Haftanın konuları birleştirilir ve genel tekrar yapılır. |
| Cuma | 11:00 - 11:50 | Eksik Konu Çalışması | 15 dakika mola | Zayıf olunan konular hafta bitmeden güçlendirilir. |
| Cuma | 14:00 - 14:50 | Hafif Çalışma | 10 dakika mola | Cuma günü plan çok ağır tutulmaz. |
| Cuma | 16:00 - 16:45 | Buffer Time | Serbest mola | Yetişmeyen işler için kullanılır. |
| Cumartesi | 11:00 - 11:50 | Soru Çözümü | 15 dakika mola | Hafta sonu daha hafif ama faydalı bir çalışma yapılır. |
| Cumartesi | 13:00 - 13:50 | Proje / Okuma | 10 dakika mola | Esnek akademik işler hafta sonuna bırakılabilir. |
| Cumartesi | 15:00 - 15:45 | Buffer Time | Serbest mola | Kişisel planlara yer bırakmak için esnek zaman eklenir. |
| Pazar | 12:00 - 12:50 | Hafif Haftalık Tekrar | 10 dakika mola | Pazar günü stresli değil, hafif tekrar odaklı olmalıdır. |
| Pazar | 14:00 - 14:45 | Gelecek Haftayı Planlama | Serbest mola | Yeni haftaya daha düzenli başlamak için kısa planlama yapılır. |

### Planı Uygulamak İçin 3 Öneri

1. En zor dersi, enerjinin daha yüksek olduğu sabah saatlerine koy.
2. Buffer time alanlarını gerçekten boş bırak; her boşluğu yeni görevle doldurma.
3. Bir çalışma bloğunu kaçırırsan bütün planı bırakma, o görevi buffer time içine taşı.

---

## 8. Final Reflection

Constraints bölümünü güçlendirerek ve Negative Prompt bölümü ekleyerek, ilk çıktıda gördüğüm yoğun program sorununu çözebildim.

İyileştirilmiş sonuç daha gerçekçi, daha esnek ve bir öğrencinin uygulaması için daha kolay hale geldi.

Bu lab bana prompt engineering’in sadece soru sormak olmadığını gösterdi. Asıl önemli olan, yapay zekaya görevi doğru şekilde anlatmak, sınırları belirlemek ve beklenen çıktıyı netleştirmektir.

Gelecekte yapay zekadan düzenli, detaylı ve uygulanabilir cevaplar almak istediğimde structured prompt kullanacağım.
