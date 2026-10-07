export default {
  "pages": {
    "section-b-special-category-data": {
      "title": "Section B - Special Categories of Data",
      "questions": {
        "section-b-special-category-data": {
          "title": "Do any of the personal data you identified fall into these GDPR Article 9 special categories?",
          "prompt": "Select every Article 9 category that applies.",
          "references": [
            "GDPR Article 9(1): special categories of personal data"
          ],
          "options": {
            "racial-ethnic-origin": {
              "label": "Racial or ethnic origin",
              "description": "Personal data revealing racial or ethnic origin."
            },
            "political-opinions": {
              "label": "Political opinions",
              "description": "Personal data revealing political opinions."
            },
            "religious-philosophical-beliefs": {
              "label": "Religious or philosophical beliefs",
              "description": "Personal data revealing religious or philosophical beliefs."
            },
            "trade-union-membership": {
              "label": "Trade union membership",
              "description": "Personal data revealing trade union membership."
            },
            "genetic-data": {
              "label": "Genetic data",
              "description": "Genetic data relating to an individual."
            },
            "biometric-identification": {
              "label": "Biometric data for unique identification",
              "description": "Biometric data processed for the purpose of uniquely identifying a natural person."
            },
            "health-data": {
              "label": "Data concerning health",
              "description": "Personal data concerning an individual's health status, care, or treatment."
            },
            "sex-life-sexual-orientation": {
              "label": "Sex life or sexual orientation",
              "description": "Personal data concerning a natural person's sex life or sexual orientation."
            },
            "no-special-category-data": {
              "label": "None of the above",
              "description": "No Article 9 special-category data has been identified from these answers."
            }
          }
        }
      }
    },
    "section-b-article-9-condition": {
      "title": "Section B - Article 9 Conditions",
      "questions": {
        "section-b-article-9-condition": {
          "title": "Which GDPR Article 9(2) condition allows you to process that special-category data?",
          "prompt": "Processing this data lawfully requires at least one applicable Article 9(2) condition for each purpose, in addition to a lawful basis under Article 6. Different purposes may rely on different conditions. Select every condition that applies.",
          "references": [
            "GDPR Article 9(2): exceptions for special-category processing"
          ],
          "options": {
            "special-data-processor-only": {
              "label": "These special-category data are handled only on behalf of clients",
              "description": "We do not act as controller for these data."
            },
            "explicit-consent": {
              "label": "Explicit consent",
              "description": "The individual has given explicit consent for one or more specified purposes, unless the law prevents relying on consent."
            },
            "employment-social-security-law": {
              "label": "Employment, social security, or social protection law",
              "description": "Processing is necessary for specific rights or obligations in those fields and is authorised by applicable law or collective agreement."
            },
            "article-9-vital-interests": {
              "label": "Vital interests where consent cannot be given",
              "description": "Processing is necessary to protect vital interests where the individual is physically or legally incapable of giving consent."
            },
            "not-for-profit-body": {
              "label": "Legitimate activities of a qualifying not-for-profit body",
              "description": "Processing is by a foundation, association, or other not-for-profit body with a political, philosophical, religious, or trade union aim, with safeguards."
            },
            "manifestly-public": {
              "label": "Data manifestly made public by the individual",
              "description": "The processing relates to personal data manifestly made public by the data subject."
            },
            "legal-claims-courts": {
              "label": "Legal claims or courts acting judicially",
              "description": "Processing is necessary for legal claims, or whenever courts are acting in their judicial capacity."
            },
            "substantial-public-interest": {
              "label": "Substantial public interest based on law",
              "description": "Processing is necessary for substantial public interest on the basis of Union or Member State law with suitable safeguards."
            },
            "health-social-care": {
              "label": "Health, occupational medicine, or social care",
              "description": "Processing is necessary for preventive or occupational medicine, medical diagnosis, health or social care, or management of related systems and services."
            },
            "public-health": {
              "label": "Public health based on law",
              "description": "Processing is necessary for reasons of public interest in the area of public health, on the basis of Union or Member State law."
            },
            "research-statistics-archiving": {
              "label": "Archiving, research, or statistics based on law",
              "description": "Processing is necessary for archiving in the public interest, scientific or historical research, or statistical purposes with Article 89 safeguards."
            },
            "no-article-9-condition": {
              "label": "None of the above",
              "description": "No Article 9 condition has been identified for the special-category processing."
            }
          },
          "variants": {
            "both": {
              "prompt": "For this question, consider only activities where your organisation acts as controller. If the special-category data is handled solely on behalf of clients, select the corresponding option below. Processing this data lawfully requires at least one applicable Article 9(2) condition for each purpose, in addition to a lawful basis under Article 6. Different purposes may rely on different conditions. Select every condition that applies."
            }
          }
        }
      }
    },
    "section-b-article-10-data": {
      "title": "Section B - Criminal Conviction and Offence Data",
      "questions": {
        "section-b-article-10-data": {
          "title": "Does your organisation process personal data relating to criminal convictions, offences, or related security measures?",
          "prompt": "To process this data lawfully, you must meet at least one of the two conditions below, in addition to having a lawful basis under Article 6. Select every condition that applies, or indicate that you do not process this data.",
          "references": [
            "GDPR Article 10: criminal convictions, offences, and related security measures"
          ],
          "options": {
            "article-10-processor-data": {
              "label": "Yes",
              "description": ""
            },
            "article-10-official-authority-control": {
              "label": "Processing is carried out under the control of official authority",
              "description": "The Article 10 data is processed under official-authority control, as required by Article 10."
            },
            "article-10-law-authorised-safeguards": {
              "label": "Processing is authorised by EU or Member State law with safeguards",
              "description": "The processing is authorised by applicable law that provides appropriate safeguards for individuals' rights and freedoms."
            },
            "no-article-10-data": {
              "label": "No Article 10 data is processed",
              "description": "No personal data relating to criminal convictions, criminal offences, or related security measures has been identified."
            }
          },
          "variants": {
            "processor": {
              "prompt": "Include data you handle on behalf of your clients, under their instructions.",
              "options": {
                "no-article-10-data": {
                  "label": "No",
                  "description": ""
                }
              }
            },
            "both": {
              "prompt": "For the legal conditions below, consider only activities where your organisation acts as controller. If these data are handled solely on behalf of clients, select the corresponding option. To process this data lawfully, you must meet at least one of the two conditions below, in addition to having a lawful basis under Article 6. Select every condition that applies, or indicate that you do not process this data.",
              "options": {
                "article-10-processor-data": {
                  "label": "These data are handled only on behalf of clients",
                  "description": ""
                }
              }
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Section B",
    "guidance": {
      "title": "Section B - Special-category and criminal-offence data",
      "condition": "For each purpose involving special-category data where you act as controller, check that an applicable Article 9 condition is met alongside your ordinary lawful basis. Selecting a condition in this questionnaire does not establish that its legal requirements and safeguards are satisfied.",
      "criminal": "For activities where you act as controller, check that the processing is actually covered by official-authority control or by an applicable EU or national law providing appropriate safeguards. An ordinary lawful basis, including consent, does not by itself authorise processing criminal-conviction or offence data.",
      "identifyLaw": "Identify the law authorising your use of the data and the safeguards it requires.",
      "processor": "For any of these data you handle on behalf of clients, ensure that your agreement and the controller’s documented instructions cover the relevant categories and the safeguards needed to protect them. Immediately inform the controller if you believe an instruction breaches data-protection law."
    },
    "skipped": "You reported no sensitive or criminal-conviction and offence data, so the additional legal-condition checks were skipped."
  }
}
