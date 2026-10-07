export default {
  "pages": {
    "section-k-breach-notification-records": {
      "title": "Section K - Controller: Breach Notification and Records",
      "questions": {
        "section-k-breach-notification-records": {
          "title": "Which arrangements has your organisation put in place for reporting and recording personal data breaches?",
          "prompt": "For your activities as a controller, select the arrangements currently in place, even if your organisation has never experienced a breach.",
          "references": [
            "GDPR Article 33(1): notify the authority without undue delay and, where feasible, within 72 hours unless risk to people is unlikely; explain any delay",
            "GDPR Article 33(3)-(4): required notification information and provision in phases",
            "GDPR Article 33(5): document every personal data breach, its effects and remedial action",
            "GDPR Recital 87: promptly identify breaches and support timely notification"
          ],
          "options": {
            "breach-authority-notification-process": {
              "label": "We have a process for assessing breaches and notifying the data protection authority when required.",
              "description": "Employees and other authorised workers should know whom to contact immediately if they suspect a breach. Someone should be responsible for coordinating the response; in a small business, this may be the owner.\n\nAssess the possible harm to affected people promptly. Notify the authority unless the breach is unlikely to create a risk to their rights and freedoms. Notification must be made without undue delay and, where feasible, within 72 hours of becoming aware of the breach. Explain any delay beyond 72 hours. Missing information can be supplied afterwards without undue further delay."
            },
            "breach-recordkeeping-process": {
              "label": "We have a process for recording every personal data breach, including those that do not require notification.",
              "description": "Keep a record of what happened, its effects and the action taken. Also record when the organisation became aware, the assessment of possible harm, and the reasons for deciding whether notification was necessary. A securely stored document or spreadsheet can be used."
            },
            "no-breach-notification-records": {
              "label": "None of the above",
              "description": "Neither of these listed arrangements is currently in place."
            }
          }
        }
      }
    },
    "section-k-data-subject-communication": {
      "title": "Section K - Controller: Affected Individuals",
      "questions": {
        "section-k-data-subject-communication": {
          "title": "Does your organisation have a process for informing affected people when a personal data breach requires it?",
          "prompt": "For your activities as a controller, answer based on the arrangements currently in place, even if your organisation has never experienced a breach.",
          "explanation": "Inform affected people without undue delay when the breach is likely to create a high risk to their rights and freedoms. There is no fixed 72-hour deadline for this communication.\n\nDescribe the breach in clear language, provide a contact point, explain likely consequences and the measures taken or proposed. Include practical advice people can follow to protect themselves.\n\nIndividual communication may be unnecessary where effective protection makes the affected data unreadable to unauthorised people, such as encryption with uncompromised keys, or subsequent measures ensure that the high risk is no longer likely to materialise.\n\nIf contacting everyone individually would involve disproportionate effort, an equally effective public communication or similar measure is still required.",
          "references": [
            "GDPR Article 34(1): communicate without undue delay where a breach is likely to result in high risk",
            "GDPR Article 34(2): use clear and plain language and provide the required information",
            "GDPR Article 34(3): communication exceptions and the public-communication alternative",
            "GDPR Recital 86: recommend precautions people can take to reduce adverse effects"
          ],
          "options": {
            "breach-communication-process-in-place": {
              "label": "Yes",
              "description": "We have a process for informing affected people when required."
            },
            "no-breach-communication-process": {
              "label": "No",
              "description": "We do not currently have this process in place."
            }
          }
        }
      }
    },
    "section-k-processor-breach-reporting": {
      "title": "Section K - Processor: Client Notification and Assistance",
      "questions": {
        "section-k-processor-breach-reporting": {
          "title": "Does your organisation have a process for promptly notifying and assisting its clients when a personal data breach affects data processed on their behalf?",
          "prompt": "For your activities as a processor, answer based on the arrangements currently in place, even if your organisation has never experienced a breach.",
          "explanation": "Notify the relevant client, acting as controller, without undue delay after becoming aware of a breach. Do not wait for a complete investigation or for a conclusion that the breach poses a significant risk. Provide available information promptly, follow up as more becomes known, and assist the client with its assessment and response.",
          "references": [
            "GDPR Article 33(2): notify the controller without undue delay after becoming aware of a personal data breach",
            "GDPR Article 28(3)(f): assist the controller with security and breach duties, taking account of the processing and information available"
          ],
          "options": {
            "processor-breach-process-in-place": {
              "label": "Yes",
              "description": "We have a process for promptly notifying and assisting the relevant client when a breach affects personal data processed on its behalf."
            },
            "no-processor-breach-process": {
              "label": "No",
              "description": "We do not currently have this process in place."
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Section K",
    "guidance": {
      "title": "Section K - Personal Data Breaches",
      "controller": {
        "breach-assessment-and-authority-notification-readiness": "Establish a clear way for workers to report suspected personal data breaches immediately, and appoint someone to coordinate the response. In a small business, this may be the owner. Assess possible harm promptly. Notify the competent data protection authority unless risk to people’s rights and freedoms is unlikely, without undue delay and, where feasible, within 72 hours of becoming aware. Explain any delay; missing information can follow without undue further delay.",
        "breach-documentation-including-unnotified-breaches": "Keep a secure record of every personal data breach, including those not notified. A simple spreadsheet can record what happened, when you became aware, the effects, corrective action and the reasons for notification decisions."
      },
      "communication": "Arrange how you would contact affected people when a personal data breach is likely to create a high risk to their rights and freedoms. Inform them without undue delay, using clear language, a contact point, likely consequences, measures taken or proposed, and practical protective advice. There is no fixed 72-hour deadline. Communication may be unnecessary if effective protection, such as encryption with uncompromised keys, prevents unauthorised reading, or subsequent measures remove the likely high risk. If individual contact involves disproportionate effort, equally effective public communication is still required.",
      "processor": "Agree with each client whom to contact when a personal data breach affects data processed on its behalf. Notify the client without undue delay after becoming aware; do not wait for a completed investigation or a risk threshold. There is no separate 72-hour allowance. Provide available information promptly, follow up as more becomes known and assist the client’s assessment and response.",
      "sourceLink": {
        "label": "EDPB: personal data breaches, guidance for small businesses",
        "url": "https://www.edpb.europa.eu/sme/assess-the-risks/data-breaches_en"
      }
    },
    "outcomes": {
      "breachFulfilled": "You report all breach reporting, communication and recordkeeping arrangements assessed for your role or roles. Any actual breach must still be assessed against the applicable notification conditions."
    }
  }
}
