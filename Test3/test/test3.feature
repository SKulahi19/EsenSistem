Feature: Gittigidiyor

    Price Comparasion
    Scenario: API Test
    Given "https://restcountries.eu/rest/v2/capital/ankara"
    Then  "Turkish lira" is in the list
    Then  There are 10 language 
  
     