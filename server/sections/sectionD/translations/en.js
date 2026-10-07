export default {
  "pages": {
    "section-d-direct-notice-timing": {
      "title": "Section D - Information Provided Directly",
      "questions": {
        "section-d-direct-notice-timing": {
          "title": "When people give personal data directly to your organisation, when are they shown information explaining how it will be used?",
          "prompt": "Choose the answer that best describes the organisation's normal practice.",
          "references": [
            "GDPR Article 13(1)-(2): information provided when personal data are obtained",
            "GDPR Article 13(4): exception where the data subject already has the information"
          ],
          "options": {
            "direct-notice-at-collection": {
              "label": "Before or when the data is collected",
              "description": "For example, the information is shown beside a form, during registration, or before the person submits their details."
            },
            "direct-notice-after-collection": {
              "label": "Only after the data has already been collected",
              "description": "The person receives the information after submitting or providing their data."
            },
            "no-direct-notice": {
              "label": "They are not shown this information",
              "description": "The organisation does not provide privacy information when it obtains data directly from the person."
            },
            "direct-subject-already-informed": {
              "label": "They already have all the required information",
              "description": "Use this only where the same required information was previously provided and remains accurate."
            }
          }
        }
      }
    },
    "section-d-indirect-notice-timing": {
      "title": "Section D - Information Obtained Elsewhere",
      "questions": {
        "section-d-indirect-notice-timing": {
          "title": "When your organisation receives personal data from somewhere else, when is the person informed?",
          "prompt": "Choose the answer that best describes the organisation's normal practice.",
          "references": [
            "GDPR Article 14(3): timing for information where data is obtained from another source"
          ],
          "options": {
            "indirect-notice-on-time": {
              "label": "Within one month and, where applicable, no later than the first contact or disclosure",
              "description": "The information is provided within a reasonable period and before any earlier applicable Article 14 deadline."
            },
            "indirect-notice-late": {
              "label": "Only after one or more of those time limits",
              "description": "The person is informed, but only after one month, the first communication, or the first disclosure as applicable."
            },
            "no-indirect-notice": {
              "label": "The person is not informed",
              "description": "The organisation does not provide privacy information to the person whose data it obtained elsewhere."
            }
          }
        }
      }
    },
    "section-d-indirect-notice-exception": {
      "title": "Section D - Article 14 Exceptions",
      "questions": {
        "section-d-indirect-notice-exception": {
          "title": "Why is the person not informed?",
          "prompt": "Select every situation that applies to the personal data obtained elsewhere.",
          "references": [
            "GDPR Article 14(5): exceptions to the Article 14 information duty"
          ],
          "options": {
            "indirect-subject-already-informed": {
              "label": "The person already has the required information",
              "description": "The organisation can show that the person already received the required information."
            },
            "indirect-impossible-disproportionate": {
              "label": "Individual notice is impossible or involves disproportionate effort, and alternative safeguards are used",
              "description": "The organisation has documented the reason and uses appropriate safeguards, including making the information publicly available where appropriate."
            },
            "indirect-required-by-law": {
              "label": "EU or national law expressly governs obtaining or disclosing the data",
              "description": "The identified law requires the activity and provides appropriate measures protecting the person’s legitimate interests."
            },
            "indirect-professional-secrecy": {
              "label": "The data must remain confidential under a legally regulated secrecy obligation",
              "description": "A professional or statutory secrecy obligation prevents the information from being provided."
            },
            "no-article-14-exception": {
              "label": "None of the above",
              "description": "No Article 14 exception has been identified for not informing the person."
            }
          }
        }
      }
    },
    "section-d-notice-content": {
      "title": "Section D - Notice Content",
      "questions": {
        "section-d-notice-content": {
          "title": "Which information is included in the privacy notice?",
          "prompt": "Select every Article 13 or Article 14 item that applies.",
          "references": [
            "GDPR Article 13(1)-(2): information where personal data are collected from the data subject",
            "GDPR Article 14(1)-(2): information where personal data have not been obtained from the data subject",
            "GDPR Article 13(3) and Article 14(4): further processing for another purpose"
          ],
          "options": {
            "controller-identity-contact": {
              "label": "Controller identity and contact details",
              "description": "The notice identifies the controller and gives contact details."
            },
            "dpo-contact-details": {
              "label": "DPO contact details where applicable",
              "description": "The notice includes data protection officer contact details if a DPO applies."
            },
            "purposes-lawful-bases": {
              "label": "Purposes and lawful bases",
              "description": "The notice explains why data is processed and the legal basis for each purpose."
            },
            "legitimate-interests-notice": {
              "label": "Legitimate interests where relied on",
              "description": "If legitimate interests are used, the notice identifies those interests."
            },
            "recipients-notice": {
              "label": "Recipients or categories of recipients",
              "description": "The notice identifies who receives the personal data or the relevant recipient categories."
            },
            "transfers-safeguards-notice": {
              "label": "International transfers and safeguards where applicable",
              "description": "The notice covers transfers to third countries or international organisations."
            },
            "retention-notice": {
              "label": "Retention period or criteria",
              "description": "The notice states how long data is kept or the criteria used to determine that period."
            },
            "rights-notice": {
              "label": "Data subject rights",
              "description": "The notice explains the rights of access, rectification, erasure, restriction, objection, and portability."
            },
            "withdraw-consent-notice": {
              "label": "Right to withdraw consent where relevant",
              "description": "If consent is used, the notice explains that consent can be withdrawn."
            },
            "complaint-authority-notice": {
              "label": "Right to lodge a complaint with a supervisory authority",
              "description": "The notice tells individuals they can complain to a supervisory authority."
            },
            "required-data-consequences-notice": {
              "label": "Whether providing data is required and the consequences of not providing it",
              "description": "Where data is collected from the individual, the notice explains legal, contractual, or necessary requirements."
            },
            "indirect-source-notice": {
              "label": "Source and data categories for indirectly obtained data",
              "description": "Where data does not come from the individual, the notice covers the source and categories."
            },
            "further-processing-notice": {
              "label": "Notice before using data for a new purpose",
              "description": "If data will be used for another purpose, further information is given before that use."
            },
            "automated-decisions-notice": {
              "label": "Automated decision-making or profiling where applicable",
              "description": "The notice covers meaningful information about applicable automated decisions or profiling."
            },
            "no-notice-content": {
              "label": "None of the above",
              "description": "No required notice content has been identified from these answers."
            }
          },
          "suggestionNotice": "Suggested from earlier answers. You can change this before continuing."
        }
      }
    }
  },
  "assessment": {
    "label": "Section D",
    "guidance": {
      "title": "Section D - Privacy information",
      "directTiming": "Provide the required privacy information when you collect the person’s data. For example, place it beside a collection form or make it available before someone gives their details. You do not need to repeat information the person already has, but provide anything missing or changed.",
      "indirectTiming": "Arrange to inform people within a reasonable period after obtaining their data, at the latest within one month. If you contact them or disclose their data to another recipient sooner, provide the information by that first contact or disclosure. An exception applies only to the information and processing covered by its conditions. If it covers only part of your processing, you must still provide the remaining required information.",
      "alreadyInformed": "Check that the person already has complete, accurate information about your processing. Keep evidence supporting that conclusion.",
      "exceptionScope": "Check that the conditions of each exception you rely on are met. An exception applies only to the information and processing covered by its conditions. If it covers only part of your processing, you must still provide the remaining required information.",
      "exceptions": {
        "indirect-subject-already-informed": "Check that the person already has complete, accurate information about your processing. Keep evidence supporting that conclusion.",
        "indirect-impossible-disproportionate": "Document why individual notification is impossible or disproportionate and the measures protecting people’s rights. Make the information publicly available. Cost or inconvenience alone does not establish the exception.",
        "indirect-required-by-law": "Identify the specific legal provision and check that it expressly governs obtaining or disclosing the data and provides appropriate protective measures.",
        "indirect-professional-secrecy": "Identify the legal secrecy obligation and check which information it prevents you from providing."
      }
    },
    "outcomes": {
      "controllerNoticeSkipped": "Controller privacy-notice checks were skipped for your processor-only role. Your duties to assist clients remain relevant.",
      "noticeReported": "You report timely privacy information and all notice topics assessed here. Conditional information duties depend on the actual processing."
    },
    "communication": {
      "title": "Privacy information presentation requirements",
      "intro": "This questionnaire does not separately verify presentation quality. Apply all of these Article 12 requirements when preparing or reviewing privacy information:",
      "items": [
        "Keep the information concise and transparent.",
        "Make it intelligible, easy to understand, and easily accessible.",
        "Use clear and plain language suited to the intended audience.",
        "Provide it in writing or by another appropriate means, including electronically. Provide it orally on request where the person's identity is proven by other means.",
        "Use language a child can easily understand when the information is addressed specifically to children.",
        "Provide the information required by Articles 13 and 14 free of charge."
      ],
      "reference": "GDPR Article 12(1) and Article 12(5)"
    }
  }
}
