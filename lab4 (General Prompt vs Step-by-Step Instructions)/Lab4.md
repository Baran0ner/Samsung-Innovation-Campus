# Lab 4 - General Prompt vs Step-by-Step Instructions

## 1. Lab Amacı

Bu labın amacı, aynı görevi iki farklı prompt yöntemiyle denemek ve sonuçları karşılaştırmaktır.

Bu çalışmada iki farklı prompt kullandım:

- **Prompt A:** General Prompt
- **Prompt B:** Step-by-Step Prompt

Konu olarak kendi geliştirdiğim mobil uygulama fikrinden ilerledim. Uygulama, kullanıcılara boy gelişimini destekleyebilecek günlük beslenme, egzersiz, duruş ve alışkanlık görevleri veren bir AI koç mantığında çalışmaktadır.

Buradaki önemli nokta şudur: Uygulama doğrudan “boy uzamasını garanti eden” bir sistem değildir. Daha çok sağlıklı büyüme sürecini, doğru alışkanlıkları, düzenli egzersizi, beslenmeyi, uyku düzenini ve duruş farkındalığını destekleyen bir koç gibi tasarlanmıştır.

---

## 2. Lab 4-1 - Görevi ve Senaryoyu Anlama

Bu senaryoda AI’dan, boy gelişimini destekleyen bir uygulama için günlük görev planı oluşturmasını istiyorum.

AI’ın görevi sadece rastgele egzersiz veya besin önermek değildir. Önce kullanıcının ihtiyacını anlamalı, sonra güvenli ve gerçekçi görevler oluşturmalı, en son da bu görevlerin uygulanabilir olup olmadığını kontrol etmelidir.

### Senaryo

Uygulama içinde bir “Height Growth Coach” yani boy gelişimi koçu var. Bu koç, kullanıcıya günlük olarak:

- Beslenme görevleri
- Egzersiz görevleri
- Duruş görevleri
- Su içme ve uyku hatırlatmaları
- Günlük takip görevleri

vermelidir.

Ancak görevler gerçekçi, güvenli ve uygulanabilir olmalıdır. Ayrıca tıbbi iddia içermemelidir.

### Hidden Steps

Bu görevi iyi çözmek için AI’ın önce kullanıcının yaşına ve genel hedefine uygun güvenli görev alanlarını anlaması, sonra beslenme ve egzersiz görevlerini dengeli şekilde planlaması, en sonunda da planın gerçekçi, güvenli ve tıbbi iddia içermediğini kontrol etmesi gerekir.

### Cümle Tamamlama

To solve this task perfectly, the AI must first understand the user's growth-support goal and safety limits, then create balanced daily nutrition and exercise tasks, and finally verify that the plan is realistic, safe, and does not promise guaranteed height growth.

---

## 3. Lab 4-2 - Prompt A: General Prompt

Bu adımda tüm istekleri tek bir genel prompt içine yazdım. Amaç, AI’ın tek blok halinde verilen talimatlarla nasıl bir sonuç ürettiğini görmekti.

### Prompt A

```text
Sen bir boy gelişimi ve sağlıklı alışkanlık koçusun. Benim mobil uygulamam için kullanıcılara günlük görevler oluşturmanı istiyorum. Uygulama, boy uzamasını destekleyebilecek beslenme, egzersiz, duruş, uyku ve su içme alışkanlıklarına odaklanıyor. Kullanıcıya bir günlük plan hazırla. Planın içinde kahvaltı, öğle, akşam beslenme önerileri, egzersiz görevleri, duruş çalışmaları, su içme hedefi ve uyku önerisi olsun. Plan basit, uygulanabilir ve motive edici olsun. Tıbbi garanti verme, boy uzamasını kesin olarak vaat etme. Çıktıyı tablo şeklinde ver ve sonunda kısa motivasyon mesajı ekle.
```

---

## 4. Prompt A - İlk AI Çıktısı Örneği

| Zaman | Görev | Açıklama |
|---|---|---|
| Sabah | Protein ağırlıklı kahvaltı yap | Yumurta, süt veya yoğurt gibi besinler tercih edilebilir. |
| Sabah | 5 dakika esneme yap | Vücudu güne hazırlamak için hafif esneme yapılabilir. |
| Öğle | Dengeli öğün tüket | Protein, sebze ve tam tahıl içeren dengeli bir tabak hazırlanabilir. |
| Öğleden sonra | 10 dakika duruş egzersizi yap | Omuzları geriye alma ve sırtı dik tutma çalışmaları yapılabilir. |
| Akşam | Hafif egzersiz yap | Zıplama, esneme veya vücut ağırlığı egzersizleri yapılabilir. |
| Gün boyu | Su iç | Gün boyunca yeterli su içmeye dikkat edilmelidir. |
| Gece | Düzenli uyu | Büyüme ve toparlanma için uyku düzeni önemlidir. |

### Prompt A Değerlendirmesi

Prompt A genel olarak anlaşılır bir günlük plan verdi. Ancak çıktı biraz yüzeysel kaldı. Beslenme ve egzersiz önerileri vardı ama görevler yeterince detaylı değildi. Ayrıca hangi görevin neden önemli olduğu çok kısa açıklanmıştı.

Prompt A bazı güvenlik kurallarına uydu ve boy uzamasını garanti etmedi. Fakat plan daha çok genel tavsiye gibi durdu. Uygulama içinde kullanılacak kadar güçlü ve sistemli bir görev yapısı oluşturmadı.

### Cümle Tamamlama

Prompt A produced a result that felt general and simple because the AI followed the safety constraint but missed the specific task structure needed for a daily coaching app.

---

## 5. Lab 4-3 - Prompt B: Step-by-Step Prompt

Bu adımda aynı görevi bu kez adım adım verdim. Böylece AI’ın önce problemi anlamasını, sonra görev kategorilerini oluşturmasını, sonra günlük planı yazmasını ve en son kendi çıktısını kontrol etmesini istedim.

### Prompt B

```text
Sen bir mobil uygulama içinde çalışan Height Growth Coach yani boy gelişimi destek koçusun.

Önemli güvenlik kuralı:
Boy uzamasını kesin olarak vaat etme. Tıbbi teşhis, tedavi veya garanti verme. Planı sadece sağlıklı büyüme sürecini ve iyi yaşam alışkanlıklarını destekleyen öneriler olarak hazırla.

Görevi adım adım yap:

1. Önce kullanıcının günlük hedefini analiz et:
- Sağlıklı beslenme
- Düzenli egzersiz
- Duruş farkındalığı
- Su tüketimi
- Uyku düzeni
- Günlük takip alışkanlığı

2. Sonra görevleri 5 kategoriye ayır:
- Nutrition Task
- Exercise Task
- Posture Task
- Hydration Task
- Sleep / Recovery Task

3. Her kategori için uygulanabilir bir görev oluştur:
- Görev kısa ve net olsun.
- Kullanıcı uygulama içinde checkbox ile tamamlayabilsin.
- Görev çok zor veya gerçek dışı olmasın.
- Egzersizler güvenli ve temel seviyede olsun.
- Beslenme önerileri genel ve sağlıklı olsun.

4. Günlük planı tablo halinde ver:
Tabloda şu sütunlar olsun:
- Category
- Daily Task
- Why It Helps
- Difficulty
- Tracking Type

5. En sonda planı kontrol et:
- Boy uzamasını garanti eden ifade var mı?
- Görevler günlük uygulanabilir mi?
- Beslenme, egzersiz, duruş, su ve uyku dengeli mi?
- Uygulama içinde kullanılabilecek kadar net mi?

6. Son olarak kullanıcıya kısa ve motive edici bir mesaj yaz.
```

---

## 6. Prompt B - AI Çıktısı Örneği

| Category | Daily Task | Why It Helps | Difficulty | Tracking Type |
|---|---|---|---|---|
| Nutrition Task | Kahvaltıda protein ve kalsiyum içeren bir besin ekle. Örneğin yumurta, yoğurt, süt veya peynir tercih edebilirsin. | Protein ve kalsiyum, sağlıklı büyüme ve kemik gelişimini destekleyen temel beslenme öğelerindendir. | Easy | Checkbox |
| Nutrition Task | Gün içinde en az bir porsiyon sebze veya meyve tüket. | Vitamin ve mineral alımını artırarak genel sağlık düzenini destekler. | Easy | Checkbox |
| Exercise Task | 8-10 dakika hafif esneme rutini yap. Boyun, omuz, sırt ve bacak kaslarına odaklan. | Esneme, vücut farkındalığını artırır ve duruşu destekleyebilir. | Medium | Timer |
| Exercise Task | 2 set temel vücut ağırlığı egzersizi yap: squat, wall push-up ve calf raise. | Temel kas gruplarını çalıştırarak aktif yaşam alışkanlığı kazandırır. | Medium | Repetition Counter |
| Posture Task | Gün içinde 3 kez duruş kontrolü yap: omuzlar geride, sırt dik, baş nötr pozisyonda. | Daha iyi postür, kişinin daha dik ve dengeli görünmesine yardımcı olabilir. | Easy | Reminder |
| Hydration Task | Gün boyunca belirlenen su hedefinin en az %80’ini tamamla. | Su tüketimi, enerji seviyesi ve genel vücut fonksiyonları için önemlidir. | Easy | Progress Bar |
| Sleep / Recovery Task | Gece uyumadan 30 dakika önce ekran süresini azalt ve uyku rutinine geç. | Düzenli uyku, toparlanma ve sağlıklı gelişim süreci için önemlidir. | Medium | Checkbox |
| Daily Tracking Task | Gün sonunda görevlerini tamamlayıp tamamlamadığını işaretle. | Takip alışkanlığı, kullanıcının programa daha düzenli devam etmesine yardımcı olur. | Easy | Daily Check-in |

### Verification Check

- Plan boy uzamasını garanti etmiyor.
- Görevler günlük olarak uygulanabilir.
- Beslenme, egzersiz, duruş, su ve uyku dengeli şekilde yer alıyor.
- Görevler uygulama içinde checkbox, timer, progress bar veya reminder ile takip edilebilir.
- Plan tıbbi iddia içermiyor ve sağlıklı alışkanlık desteği olarak hazırlanmış.

### Motivasyon Mesajı

Bugünkü hedefin mükemmel olmak değil, küçük ama düzenli adımlar atmak. Görevlerini tamamladıkça hem daha sağlıklı alışkanlıklar kazanır hem de gelişimini daha bilinçli takip edersin.

---

## 7. Prompt B Değerlendirmesi

Prompt B, Prompt A’ya göre daha detaylı ve kontrollü bir sonuç verdi. Çünkü AI’dan önce kategorileri ayırmasını, sonra her kategori için görev oluşturmasını, en son da güvenlik ve uygulanabilirlik kontrolü yapmasını istedim.

Bu sayede çıktı sadece genel tavsiye gibi kalmadı. Uygulama içinde kullanılabilecek görev formatına daha yakın oldu. Özellikle “Tracking Type” sütunu, bu çıktıyı mobil uygulama tasarımı için daha kullanışlı hale getirdi.

### Cümle Tamamlama

By using Step-by-Step instructions, the AI was able to create a more structured and app-ready daily coaching plan, which was missing in the general approach of Prompt A.

---

## 8. Lab 4-4 - Prompt A ve Prompt B Karşılaştırması

| Kriter | Prompt A | Prompt B |
|---|---|---|
| Detay Seviyesi | Orta seviyede, biraz genel kaldı. | Daha detaylı ve sistemliydi. |
| Görev Yapısı | Görevler vardı ama uygulama formatına tam uygun değildi. | Görevler kategori, açıklama, zorluk ve takip tipiyle verildi. |
| Güvenlik | Boy uzamasını garanti etmedi ama kontrol bölümü yoktu. | Güvenlik kuralı ve verification bölümü vardı. |
| Uygulanabilirlik | Kullanıcı için anlaşılırdı ama yüzeyseldi. | Günlük takip sistemine daha uygundu. |
| Uygulama Entegrasyonu | Sınırlıydı. | Checkbox, timer, reminder ve progress bar gibi uygulama bileşenlerine uygundu. |
| Genel Sonuç | Basit bir günlük öneri planı verdi. | Profesyonel ve ürün odaklı bir günlük görev sistemi verdi. |

### Performans Karşılaştırması

Prompt A daha hızlı ve basit sonuç verdi. Basit bir günlük öneri istendiğinde yeterli olabilir. Ancak daha detaylı ve uygulama içinde kullanılabilir bir çıktı gerektiğinde eksik kaldı.

Prompt B ise görevi adımlara böldüğü için daha kaliteli bir sonuç verdi. Özellikle mobil uygulama için görevlerin takip edilebilir olması, çıktı kalitesini artırdı.

### Cümle Tamamlama

The biggest difference was structure and control. While Prompt A felt like a simple advice list, Prompt B provided a more professional and app-ready solution because it forced the AI to analyze, categorize, generate, and verify the tasks step by step.

---

## 9. Lab 4-5 - A/B Usage Criteria and My Own Rule

Bu labdan öğrendiğim en önemli şey, her görev için aynı prompt yapısının uygun olmadığıdır.

Eğer basit, hızlı ve genel bir cevap istiyorsam Prompt A yeterli olabilir. Ancak görev daha karmaşıksa, güvenlik kuralları varsa veya çıktı bir ürün içinde kullanılacaksa Prompt B daha iyi sonuç verir.

### Kendi Kullanım Kuralım

I will use Prompt A when I need a quick and simple answer, and Prompt B when I need a detailed, safe, structured, and product-ready output to ensure my AI outcomes are always clear, usable, and reliable.

---

## 10. Final Reflection

Bu labda, general prompt ile step-by-step prompt arasındaki farkı daha net gördüm.

Prompt A, aynı görevi daha hızlı çözdü ama sonuç genel kaldı. Prompt B ise daha kontrollü, detaylı ve uygulama içinde kullanılabilir bir çıktı verdi.

Kendi uygulama fikrim açısından Prompt B’nin daha faydalı olduğunu düşünüyorum. Çünkü boy gelişimi, beslenme, egzersiz, duruş, su ve uyku gibi farklı alanları içeriyor. Bu nedenle AI’ın önce görevi analiz etmesi, sonra kategorilere ayırması, en sonunda da güvenlik ve gerçekçilik kontrolü yapması daha doğru bir sonuç üretiyor.

Gelecekte uygulamam için günlük görevler, besin önerileri, egzersiz planları veya kullanıcıya özel koç mesajları oluştururken daha çok Step-by-Step Prompt kullanmayı tercih ederim.
