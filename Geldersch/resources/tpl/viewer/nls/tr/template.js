﻿define(
	 ({
		viewer: {
			common: {
				close: "Kapat"
			},
			loading: {
				long: "Hikaye başlatılıyor",
				long2: "Beklendiğiniz için teşekkürler",
				failButton: "Hikayeyi yeniden yükle"
			},
			signin: {
				title: "Kimlik doğrulama gerekli",
				explainViewer: "Hikayeye erişmek için %PORTAL_LINK% üzerindeki bir hesapla oturum açın.",
				explainBuilder: "Hikayeyi yapılandırmak için %PORTAL_LINK% üzerindeki bir hesapla oturum açın."
			},
			errors: {
				boxTitle: "Bir hata oluştu",
				invalidConfig: "Geçersiz yapılandırma",
				invalidConfigNoApp: "Web Mapping Application tanımlayıcısı index.html dosyasında tanımlı değil.",
				invalidConfigNoAppDev: "Web Haritalama Uygulaması belirteci URL parametrelerinde (?appid=) belirtilmiştir. Geliştirme modunda index.html dosyasındaki appid yapılandırması yoksayılır.",
				unspecifiedConfigOwner: "Yetkili malik yapılandırılmamış.",
				invalidConfigOwner: "Hikaye sahibi yetkilendirilmemiş.",
				createMap: "Harita oluşturulamıyor",
				invalidApp: "%TPL_NAME% mevcut değil ya da erişilemez.",
				appLoadingFail: "Hata oluştu, %TPL_NAME% doğru şekilde yüklenmedi.",
				notConfiguredDesktop: "Hikaye henüz yapılandırılmadı.",
				notConfiguredMobile: "%TPL_NAME% oluşturucu, bu ekran boyutunda desteklenmez. Mümkünse, oluşturucu erişimi için tarayıcınızı yeniden boyutlandırın veya hikayenizi daha büyük ekranı olan bir cihazda oluşturun.",
				notConfiguredMobile2: "Cihazınızı yatay konuma döndürerek %TPL_NAME% oluşturucuyu kullanın.",
				notAuthorized: "Bu hikayeye erişme yetkiniz yok",
				notAuthorizedBuilder: "%TPL_NAME% oluşturucuyu kullanma yetkiniz yok.",
				noBuilderIE: "Oluşturucu %VERSION% öncesindeki Internet Explorer sürümlerinde desteklenmiyor. %UPGRADE%",
				noViewerIE: "Bu hikaye %VERSION% öncesindeki Internet Explorer sürümlerinde desteklenmiyor. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Tarayıcınızı güncelleyin</a>.",
				mapLoadingFail: "Hata oluştu, harita düzgün şekilde yüklenmedi.",
				signOut: "Oturumu Kapat"
			},
			mobileInfo: {
				legend: "Gösterim",
				description: "Açıklama",
				lblLegendMobileError: "Üzgünüz, gösterim kullanılamıyor. Hikayeyi yeniden yükleyin.",
				lblLegendMobileErrorExplain: "Hikaye yüklendikten sonra cihaz dikey moda döndürülürse gösterim kullanılamaz."
			},
			mobileFooter: {
				swipeInvite: "Öyküde gezinmek için kaydır",
				lblNext: "Sonraki",
				lblEnd: "Öykünün sonuna geldiniz"
			},
			headerFromCommon: {
				storymapsText: "Öykü haritası",
				builderButton: "Düzenle",
				facebookTooltip: "Facebook\'ta Paylaş",
				twitterTooltip: "Twitter\'da Paylaş",
				bitlyTooltip: "Kısa bağlantı edin",
				templateTitle: "Şablon başlığını ayarla",
				templateSubtitle: "Şablon altyazısını ayarla",
				share: "Paylaş",
				checking: "Hikaye içeriğiniz denetleniyor",
				fix: "Hikayenizdeki sorunları düzeltin",
				noerrors: "Sorun bulunmadı",
				tooltipAutoplayDisabled: "Bu özellik otomatik oynatma modunda kullanılamaz",
				notshared: "Hikaye paylaşılmıyor"
			},
			overviewFromCommon: {
				title: "Genel Bakış Haritası"
			},
			legendFromCommon: {
				title: "Gösterim"
			},
			shareFromCommon: {
				copy: "Kopyala",
				copied: "Kopyalandı",
				open: "Aç",
				embed: "Web sayfasının içine yerleştir",
				embedExplain: "Hikayeyi bir web sayfasının içine yerleştirmek için aşağıdaki HTML kodunu kullanın.",
				size: "Boyut (genişlik/yükseklik):",
				autoplayLabel: "Otomatik oynatma modu",
				autoplayExplain1: "Otomatik oynatma modu düzenli aralıklarla hikayenizde ilerler. Bu özellik, bir kiosk ya da genel ekran için idealdir, ancak bunun bazı durumlarda hikayenin okunmasını güçleştirebileceğini unutmayın. Bu özellik küçük ekranlarda desteklenmez.",
				autoplayExplain2: "Bu etkin durumdayken hikayeyi oynatacak/duraklatacak ve gezinme hızını ayarlayacak kontroller vardır.",
				linksupdated: "Bağlantılar güncellendi!"
			},
			locatorFromCommon: {
				error: "Konum kullanılamıyor"
			}
        }
    })
);