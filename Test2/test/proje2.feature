Feature: Gittigidiyor Price Comparasion

    Price Comparasion
    Scenario: Gittigidiyor
    Given "https://www.gittigidiyor.com/" typed
    Then  "televizyon" is typed and entered
    Then  Go to second page  
    Then Select the fifth item
    Then add to basket
    When go to "https://www.gittigidiyor.com/sepetim"
    Then prices should be same