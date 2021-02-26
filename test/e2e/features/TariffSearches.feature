
Feature: Broadband tariff searches using URL parameters
    As a Telco advertising campaign manager
    I want to use URL parameters to select specific broadband tariff search combinations
    So that I can provide preselected search results for various Verivox customer groups

Scenario: Verify default tariff search results
Given that I can open the broadband tariff search page
Then I should see a page that lists a default selection of tariffs
And the URL should change to include a default phone prefix

Scenario: Verify tariff search results with preconfigured URL parameters
Given that I can open the broadband tariff search page with some preconfigured parameters
Then I should see a page that lists the available tariffs for my selection
When I change the URL parameters to include TV option
Then I should see different tariffs for my adjusted tariff search options