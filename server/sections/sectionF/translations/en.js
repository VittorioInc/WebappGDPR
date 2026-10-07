export default {
  "pages": {
    "section-f-child-involvement": {
      "title": "Section F - Children",
      "questions": {
        "section-f-child-involvement": {
          "title": "Which situations involving children's personal data apply to your organisation?",
          "prompt": "Select every statement that is true. Your selections determine any consent follow-up questions and the child-related recommendations in the final report.",
          "references": [
            "GDPR Recital 38: children merit specific protection",
            "GDPR Article 8(1): child consent in relation to information society services",
            "GDPR Article 12(1): clear and plain language for information addressed to a child",
            "GDPR Article 17(1)(f): erasure for data collected in relation to Article 8(1) services"
          ],
          "options": {
            "children-data-handled": {
              "label": "The organisation processes personal data relating to children",
              "description": "Use this for child-related processing that is not limited to the more specific situations below."
            },
            "child-directed-information": {
              "label": "Privacy information or other GDPR communications are addressed directly to children",
              "description": "Article 12(1) requires information addressed specifically to a child to use clear and plain language."
            },
            "child-consent-online-service": {
              "label": "Consent is used for an online service offered directly to children",
              "description": "Article 8 may apply where consent is the lawful basis for an information society service offered directly to a child."
            },
            "child-marketing-profiling": {
              "label": "Children's data is used for marketing or profiling",
              "description": "This includes marketing, personality profiles, user profiles, or similar child-focused analysis."
            },
            "no-children-involved": {
              "label": "The organisation does not process personal data relating to children",
              "description": "No processing of personal data relating to children has been identified."
            }
          }
        }
      }
    },
    "section-f-child-consent": {
      "title": "Section F - Child Consent",
      "questions": {
        "section-f-child-consent": {
          "title": "How does the online service handle consent from children below the applicable age threshold?",
          "prompt": "Identify the age threshold that applies to the service, then select one answer. Article 8(1) sets the threshold at 16, unless applicable Member State law lowers it to an age between 13 and 15. This question concerns consent-based information society services offered directly to children.",
          "references": [
            "GDPR Article 8(1): child at least 16 unless Member State law sets a lower age not below 13",
            "GDPR Article 8(1): consent by holder of parental responsibility where the child is below the relevant age"
          ],
          "options": {
            "child-above-threshold-consent": {
              "label": "Only children at or above the applicable threshold may consent for themselves",
              "description": "The service checks age and does not offer this consent-based service to children below the applicable threshold."
            },
            "parental-authorisation-under-threshold": {
              "label": "Children below the threshold may use the service with parental consent or authorisation",
              "description": "The service checks age. Below the applicable threshold, consent is given or authorised by the holder of parental responsibility over the child."
            },
            "no-child-consent-process": {
              "label": "No reliable age-based consent process is currently in place",
              "description": "The applicable threshold, age checks, or the consent process for younger children has not been established."
            }
          }
        }
      }
    },
    "section-f-parental-authorisation": {
      "title": "Section F - Parental Authorisation",
      "questions": {
        "section-f-parental-authorisation": {
          "title": "Which measures are used to verify and document parental consent or authorisation?",
          "prompt": "Select all measures that are in place for every activity relying on parental consent or authorisation. Each unselected measure will produce a separate action in the final report. Article 8(2) requires reasonable verification efforts; Articles 7(1) and 5(2) require evidence of consent and compliance.",
          "references": [
            "GDPR Article 8(2): reasonable efforts to verify parental authorisation, considering available technology",
            "GDPR Article 7(1): controller must be able to demonstrate consent",
            "GDPR Article 5(2): accountability for demonstrating compliance",
            "GDPR Article 5(1)(c): personal data limited to what is necessary"
          ],
          "options": {
            "parental-authorisation-verified": {
              "label": "Reasonable verification efforts are made, considering available technology",
              "description": "Verify that consent is given or authorised by the holder of parental responsibility. Collect only personal data necessary for that verification."
            },
            "child-consent-records-kept": {
              "label": "Records document the age assessment, parental consent or authorisation, and verification performed",
              "description": "Keep proportionate evidence showing the applicable threshold, age assessment, who gave or authorised consent, and how this was verified."
            },
            "no-parental-authorisation-measures": {
              "label": "Neither measure is currently in place",
              "description": "Parental authorisation is not verified and the supporting evidence is not kept."
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Section F",
    "guidance": {
      "title": "Section F - Children",
      "noData": [
        "You reported that your organisation does not process children’s personal data. This means no identifiable information about children is collected, stored, accessed or otherwise used, rather than simply that children are not your customers. Review your activities and existing information, including registration forms, bookings, photographs and records about employees’ dependants.",
        "Before gathering additional age or identity information, assess whether it is necessary to meet your applicable obligations. If checks are needed, use an effective, proportionate method and collect only what is necessary. Not knowing someone’s age does not establish that they are an adult. Reassess your answer if you identify children’s data or your activities change."
      ],
      "processorContext": "For services you provide solely as a processor, work with the controller to implement the following arrangements under its documented instructions; responsibility for establishing the lawful basis and consent requirements remains with the controller.",
      "actions": {
        "child-age-consent-process": [
          "When offering an online service directly to children and relying on consent, establish the applicable consent age: normally 16, but applicable national law may lower it to between 13 and 15. Add an age check before activating the consent-based processing. Below that age, either prevent that processing or obtain consent or authorisation from the person holding parental responsibility.",
          "Match age checks to the risks of your service. For some low-risk services, an age declaration or birth-year field may be appropriate. Use additional checks where the risks or doubts about an answer require them, and avoid collecting a full date of birth or identity document unless needed."
        ],
        "parental-authorisation-verified": [
          "When parental authorisation is required, use verification proportionate to the risks. For a low-risk service, a separate approval email explaining the processing and requesting confirmation of parental responsibility may be sufficient. Possession of an email address alone does not demonstrate parental responsibility. Strengthen verification where needed; consider a verification provider that returns only the result needed, rather than unnecessary identity information."
        ],
        "child-consent-records-kept": [
          "When relying on parental consent or authorisation, keep a restricted-access record of the applicable age threshold, age-check result, authorisation, information provided and verification performed. A small business can use a simple consent register linked to the approval record. Retain only the evidence needed to demonstrate consent and compliance."
        ]
      }
    },
    "outcomes": {
      "childrenSkipped": "You reported no children’s data, so the child-consent follow-ups were skipped. The practical scope checks in the recommendations remain relevant.",
      "childConsentSkipped": "Your reported activities did not trigger the online-service child-consent follow-ups. General protection of children’s data remains relevant.",
      "childConsentReported": "You report the age-based consent and any parental-authorisation arrangements assessed on your selected route. Their implementation has not been verified."
    },
    "protection": {
      "title": "Recommendations for protecting children’s data",
      "intro": "These recommendations follow from the child-related activities you selected. Check or maintain the relevant measures; this questionnaire has not established whether they are already in place.",
      "items": {
        "child-risks": "When handling children’s personal data, consider the harm that loss, disclosure or misuse could cause, taking account of children’s more limited awareness of risks and rights. Use safeguards appropriate to your role and the risks, keep proportionate evidence and review them when circumstances change. If you act as a processor, work with the controller under its documented instructions (GDPR Recital 38; Articles 28 and 32).",
        "child-data-minimisation": "When collecting children’s personal data, check forms, booking records and account settings to limit collection to what each purpose needs. For controller activities, make this the default. If you act as a processor, follow the controller’s instructions and flag unnecessary collection to it (GDPR Articles 5(1)(c), 25(2) and 28).",
        "child-friendly-information": "Check that privacy information and other GDPR communications addressed to children are easy to find and use clear, plain language that the intended children can understand (GDPR Article 12(1); Recital 58).",
        "child-marketing-profiling": "Check the purposes, lawful basis and safeguards for marketing or profiling involving children, taking account of their particular vulnerability. If relying on legitimate interests, assess whether children’s interests or rights override those interests (GDPR Recital 38; Articles 6(1)(f) and 25).",
        "child-erasure": "Check that the rights-request process covers erasure of data collected in connection with Article 8 services. Assess requests under Article 17(1)(f), taking account of the exceptions in Article 17(3); the relevant erasure right can still be exercised after the person becomes an adult (GDPR Article 17; Recital 65)."
      }
    }
  }
}
