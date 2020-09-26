# Jobsadmin

Bu tek sayfa progressive web app [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3. kullanılarak oluşturulmuştur.

## Kullanılan Diğer Kütüphaneler

- Arayüz için [Angular Material](https://material.angular.io/)

- State Managament için [Ngrx Store & Effects](https://ngrx.io/)

- Recaptcha V3 için [ng-recaptcha](https://www.npmjs.com/package/ng-recaptcha)

- Bootstrap'in sadece ızgara yapısı

## Modüller

### App Shell

Uygulama yüklenene kadar açılış ekranı

### Core

Temel modül. İstekler genelde burada yapılır. Bu proje küçük olduğu için stage managamenti de buraya dahil ettim.

### Shared

Paylaştırılan modül. Kart ve sayfayı kaplayan loading komponentleri burada bulunmaktadır.

Ayrıca POSTMAN'dan kaynaklanan kısıtlamalar nedemiyle ücreti yıllık, aylık ya da günlük olarak sınıflandıran pipe da burada yer almaktadır.

İşler detaylıca filtrelenmek istenirse diye örnek bir auto complete bileşeni oluşturdum.

### Admin

Yetkilinin CRUD operasyonlarını gerçekleştireceği kısım. Ek olarak sayfalandırma özelliği ekledim.

Silme, düzenleme ve ekleme işlemleri modal üzerinde yapılmaktadır.

Yine postman'ın sınırlamalarından dolayı post için sadece 1 url oluşturdum. Sadece id dönderiyor.

State management ile bütün işlemleri store'da topladım.

> Hosting için firebase kullandım. [Buraya](https://jobsadmininterview.web.app) tıklayarak uygulamayı açabilirsiniz.

## Sınırlamalar

`Postman'ın şu anlık mock server kullanım kredisi 648/1000'dir.`

Postman rastgele birden fazla paragraf oluşturulduğunda JSON verisinde alt satıra geçtiği için **kendi mock serveri** çöküyor. Bunun önüne geçmek için iş açıklamasını tek paragraf ile sınırlandırıp detail içinde 10 defa döndürdüm.

Nadir de olsa Postman mock server bazı alanları eksik oluşturabiliyor. Söz gelimi şirket ismi ya da iş alanı bilgilerini rastgele çekemiyor, bunun sonucunda ekranda boş kalabiliyor. Bu durumda tarayıcıyı kapatıp yeni gizli sekmede yeniden açabilirsiniz.

## Uygulamayı localde çalıştırmak

Proje ana dizinine gelip node paketlerini yükledikten sonra `ng serve` komutuyla `http://localhost:4200/` portunda görüntüleyebilirsiniz.

## Prod Build almak (App Shell İçin)

```sh
ng run jobsadmin:app-shell:production
```
