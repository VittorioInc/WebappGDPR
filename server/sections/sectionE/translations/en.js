export default {
  "pages": {
    "section-e-consent-conditions": {
      "title": "Section E - Consent Conditions",
      "questions": {
        "section-e-consent-conditions": {
          "title": "Which statements describe how your organisation obtains and records consent?",
          "prompt": "Select every statement that is true for your processing activities that rely on consent. All applicable statements must be selected. Any applicable statement left unselected will be treated as a possible gap in the final report.",
          "references": [
            "GDPR Article 4(11): freely given, specific, informed, and unambiguous consent",
            "GDPR Article 7(1): controller must be able to demonstrate consent",
            "GDPR Article 7(2): distinguishable request in clear and plain language",
            "GDPR Article 7(4): consent and unnecessary contract/service conditions",
            "GDPR Article 9(2)(a): explicit consent for specified special-category processing purposes",
            "GDPR Recital 32: clear affirmative action; silence, pre-ticked boxes, or inactivity do not constitute consent",
            "GDPR Recital 43: separate consent and imbalance concerns"
          ],
          "options": {
            "active-optional-consent": {
              "label": "The person makes an active and genuinely optional choice",
              "description": "Consent is not inferred from silence, inactivity, or pre-ticked boxes, and service access is not tied to unnecessary processing."
            },
            "specific-informed-consent": {
              "label": "Consent is specific to each clearly explained purpose",
              "description": "The person receives enough information to understand each purpose and makes separate choices where appropriate."
            },
            "clear-separate-consent-request": {
              "label": "The request is separate, accessible, and written in clear language",
              "description": "Where consent appears with other content, it is clearly distinguishable and easy to understand."
            },
            "demonstrable-consent": {
              "label": "The organisation keeps evidence of consent",
              "description": "Records show who consented, when, how, for which purpose, and what information the person saw."
            },
            "explicit-consent-where-needed": {
              "label": "Explicit consent is captured where Article 9 processing relies on consent",
              "description": "Special-category processing that relies on consent uses explicit consent."
            },
            "no-consent-conditions": {
              "label": "None of these statements describes the current consent process",
              "description": "No applicable consent requirement listed above is currently met."
            }
          }
        }
      }
    },
    "section-e-consent-withdrawal": {
      "title": "Section E - Withdrawal",
      "questions": {
        "section-e-consent-withdrawal": {
          "title": "Which statements describe how your organisation handles withdrawal of consent?",
          "prompt": "Select every statement that is true for your processing activities that rely on consent. All applicable statements must be selected. Any applicable statement left unselected will be treated as a possible gap in the final report.",
          "references": [
            "GDPR Article 5(2): accountability for demonstrating compliance",
            "GDPR Article 7(3): right to withdraw consent at any time",
            "GDPR Article 13(2)(c): notice of the right to withdraw consent",
            "GDPR Article 14(2)(d): notice of the right to withdraw consent",
            "GDPR Article 17(1)(b): erasure where consent is withdrawn and no other legal ground applies"
          ],
          "options": {
            "withdrawal-notice-ready": {
              "label": "Before consenting, people are told that they may withdraw at any time",
              "description": "They are also told that withdrawal does not invalidate processing lawfully performed before it was withdrawn."
            },
            "easy-withdrawal-method": {
              "label": "People can withdraw consent as easily as they gave it",
              "description": "A clear and accessible method is available without unnecessary steps, such as an account control, unsubscribe function, or identified contact route."
            },
            "withdrawal-response-ready": {
              "label": "Withdrawal is recorded and the affected processing is promptly updated",
              "description": "Consent-based processing stops, the consent status is updated, and erasure is considered where Article 17(1)(b) applies."
            },
            "no-consent-withdrawal": {
              "label": "None of these statements describes the current withdrawal process",
              "description": "No applicable withdrawal requirement listed above is currently met."
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Section E",
    "guidance": {
      "title": "Section E - Consent",
      "requirements": {
        "active-optional-consent": "When asking people to consent to processing their personal data, obtain a clear affirmative action that they can freely refuse. Do not use silence, inactivity or pre-ticked boxes as consent, or make a service conditional on consent to unnecessary processing: consent must be freely given and unambiguous.",
        "specific-informed-consent": "When requesting consent, explain each processing purpose beforehand and offer separate choices for distinct purposes where appropriate. People must understand what they are agreeing to; a blanket agreement does not provide specific consent.",
        "clear-separate-consent-request": "When requesting consent, use clear, accessible language. If the request is in a written document covering other matters, make it clearly distinguishable from those matters so people can recognise and understand their choice.",
        "demonstrable-consent": "When relying on consent, keep sufficient records showing who consented, when, how, for which purposes and what information they received. The controller must be able to demonstrate that valid consent was obtained.",
        "explicit-consent-where-needed": "When relying on consent to process special-category personal data, obtain an express statement confirming agreement to that processing. Ordinary consent alone does not meet Article 9’s explicit-consent requirement.",
        "withdrawal-notice-ready": "Before asking people to consent, tell them that they can withdraw consent at any time and that withdrawal does not invalidate processing lawfully carried out beforehand. They must know this before deciding.",
        "easy-withdrawal-method": "For processing based on consent, provide a clear withdrawal method that is as easy to use as the method for giving consent. Avoid unnecessary steps or barriers; for example, provide an unsubscribe link for email marketing.",
        "withdrawal-response-ready": "When someone withdraws consent, record the withdrawal, update their consent status and stop the affected consent-based processing. Erase the data where no other legal ground justifies keeping it and no applicable erasure exception applies."
      }
    },
    "outcomes": {
      "consentSkipped": "No consent-based processing was reported, so consent and withdrawal checks were skipped.",
      "consentFulfilled": "Based on your answers, you report fulfilling all consent and withdrawal requirements assessed in this section."
    }
  }
}
