export default {
  "pages": {
    "section-a-data-types": {
      "title": "Section A - Personal Data",
      "questions": {
        "section-a-data-types": {
          "title": "Does your organisation handle personal data?",
          "prompt": "Select every example your organisation collects, stores, receives, accesses, or uses. These are examples; other information can also be personal data.",
          "references": [
            "GDPR Article 4(1): personal data",
            "GDPR Article 4(2): processing",
            "GDPR Recital 30: online identifiers"
          ],
          "selectAllLabel": "Select all",
          "clearAllLabel": "Clear all",
          "options": {
            "basic-details": {
              "label": "Individuals' basic details",
              "description": "Name, age, address, email address, or telephone number."
            },
            "government-identifiers": {
              "label": "Government or official identifiers",
              "description": "Passport number, national ID, tax code, social security number, or driving licence number."
            },
            "ip-addresses": {
              "label": "IP addresses",
              "description": "Internet protocol addresses collected through websites, apps, systems, or logs."
            },
            "advertising-ids": {
              "label": "Online advertising or tracking identifiers",
              "description": "Advertising identifiers on Apple and Android devices, cookie identifiers, analytics identifiers, or similar online identifiers."
            },
            "location-data": {
              "label": "Location data",
              "description": "Information about where a person is, was, or moves."
            },
            "device-identifiers": {
              "label": "Unique device identifiers",
              "description": "Device IDs, serial numbers, hardware identifiers, or app-generated device identifiers."
            },
            "account-identifiers": {
              "label": "Account or customer identifiers",
              "description": "User ID, client number, membership ID, or booking ID."
            },
            "employment-details": {
              "label": "Employment or contractor details",
              "description": "Staff records, payroll details, CVs, work schedules, or performance notes."
            },
            "payment-details": {
              "label": "Payment or billing details",
              "description": "Invoices, bank details, transaction records, or billing contacts."
            },
            "communications": {
              "label": "Communications with individuals",
              "description": "Emails, support tickets, messages, call notes, or correspondence history."
            },
            "none-of-the-above": {
              "label": "None of the above",
              "description": "Use this only if the organisation does not handle information about identifiable living people."
            }
          }
        }
      }
    },
    "section-a-no-data-confirm": {
      "title": "Section A - Confirmation",
      "questions": {
        "section-a-no-data-confirm": {
          "title": "Are you sure you do not handle information that could identify a living person?",
          "prompt": "This includes direct or indirect identification, such as names, IDs, location data, or online identifiers.",
          "references": [
            "GDPR Article 4(1): identifiable natural person"
          ],
          "options": {
            "no-personal-data-confirmed": {
              "label": "Yes, we do not handle any such information",
              "description": "Section A will mark personal data as not identified from your answers."
            }
          }
        }
      }
    },
    "section-a-lawful-basis": {
      "title": "Section A - Lawful Basis",
      "questions": {
        "section-a-lawful-basis": {
          "title": "What conditions do you rely on to justify processing the selected individuals' data?",
          "prompt": "Select every Article 6 condition that applies. Every type of data gathered should be justified for each purpose; if no condition applies to some data gathering, that data should not be gathered or used.",
          "references": [
            "GDPR Article 5(1)(a): lawfulness, fairness and transparency",
            "GDPR Article 6(1): lawfulness of processing"
          ],
          "options": {
            "consent": {
              "label": "Consent of the individual",
              "description": "The individual has consented to processing for one or more specific purposes."
            },
            "contract": {
              "label": "Contract or pre-contract steps",
              "description": "Processing is necessary for a contract with the individual or to take requested steps before entering into a contract."
            },
            "legal-obligation": {
              "label": "Legal obligation",
              "description": "Processing is necessary to comply with a legal obligation that applies to the organisation."
            },
            "vital-interests": {
              "label": "Vital interests",
              "description": "Processing is necessary to protect the vital interests of the individual or another natural person."
            },
            "legitimate-interests": {
              "label": "Legitimate interests",
              "description": "Processing is necessary for legitimate interests pursued by the organisation or a third party, unless overridden by the individual's rights and freedoms."
            },
            "no-article-6-basis": {
              "label": "None of the above",
              "description": "Use this if none of these Article 6 conditions currently applies."
            }
          }
        }
      }
    },
    "section-a-processing-purposes": {
      "title": "Section A - Purpose Limitation",
      "questions": {
        "section-a-processing-purposes": {
          "title": "For what purposes does your organisation use the selected personal data?",
          "prompt": "Collect personal data only for clearly defined, lawful and legitimate purposes, and only as much as you need to fulfil them. Do not collect data that serves no such purpose. These are the GDPR principles of purpose limitation and data minimisation.",
          "references": [
            "GDPR Article 5(1)(b): purpose limitation",
            "GDPR Article 5(1)(c): data minimisation",
            "GDPR Article 30(1)(b): purposes of the processing"
          ],
          "options": {
            "products-services": {
              "label": "Providing products or services",
              "description": "Delivering goods, services, bookings, accounts, support, or requested features."
            },
            "customer-relationships": {
              "label": "Managing customer or client relationships",
              "description": "Handling enquiries, service history, client files, support records, or account management."
            },
            "marketing-advertising": {
              "label": "Marketing or advertising",
              "description": "Sending promotions, running campaigns, personalising ads, or measuring advertising activity."
            },
            "analytics-improvement": {
              "label": "Website analytics or service improvement",
              "description": "Understanding use of websites, apps, products, services, or internal processes."
            },
            "payments-accounting": {
              "label": "Payments, billing, and accounting",
              "description": "Managing invoices, payments, bookkeeping, tax records, or financial administration."
            },
            "employment-administration": {
              "label": "Employment or contractor administration",
              "description": "Managing recruitment, work assignments, payroll, benefits, evaluations, or HR files."
            },
            "legal-compliance": {
              "label": "Legal, regulatory, or tax compliance",
              "description": "Meeting legal duties, responding to authorities, keeping mandatory records, or defending claims."
            },
            "security-fraud-access": {
              "label": "Security, fraud prevention, or access control",
              "description": "Protecting systems, detecting misuse, investigating incidents, or managing access permissions."
            },
            "internal-administration": {
              "label": "Other internal administration",
              "description": "Operating the organisation where the purpose does not fit one of the categories above."
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Section A",
    "personalData": {
      "title": "Section A - Personal data",
      "reported": "You reported handling the following types of personal data: {categories}.",
      "checkInventory": "Use this as a starting point for identifying the personal data your organisation handles. The questionnaire’s examples are not exhaustive: other information may also identify someone, either on its own or combined with other information."
    },
    "lawfulBasis": {
      "title": "Section A - Lawful basis and purposes",
      "noBasis": "You have not identified a lawful basis for processing personal data. Before starting or continuing the affected processing, establish which lawful basis applies to each purpose and check that its conditions are met. If none applies, that processing must not take place.",
      "categoryCheck": [
        "Check each category of data separately. Identify why you collect and use it, which lawful basis supports each purpose, and whether that data is necessary for that purpose. Different categories may share the same purpose and lawful basis, but a justification for one category does not automatically justify collecting others.",
        "This questionnaire asks about data categories, purposes and lawful bases separately. It does not verify that each category is justified for every purpose for which you use it."
      ],
      "legitimateInterests": "Identify the legitimate interest pursued, check that the processing is necessary, and assess whether the affected people’s interests and rights override it. Document this assessment, including any safeguards.",
      "purposeLimitation": "Describe your purposes specifically: broad labels such as “marketing” or “internal administration” are only starting points. Before using existing data for a new purpose, check whether that use is legally permitted; the original justification does not automatically cover it."
    },
    "basisReported": "You reported processing grounds and purposes. Their applicability still needs to be checked for each activity and category of data."
  }
}
