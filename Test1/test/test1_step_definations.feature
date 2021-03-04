Feature: ESEN SYSTEM WEBSITE CORRECTION


    Scenario: Is website correct ?
    Given a user enter "https://www.esensi.com.tr/"
    Then website url should be "https://www.esensi.com.tr/"
    Then website title should be "Ana Sayfa - ESEN Sistem Entegrasyon" 
    When "Kurumsal" is clicked
    Then "Hakkımızda" should be in the submenu
   
    Scenario: Correction of communication fields
    Given a user types "https://www.esensi.com.tr/"
    When "İletişim" is clicked and url should be "https://www.esensi.com.tr/iletisim/"
    Then click the button Mesaj Gönder and observe the error log message
      
 