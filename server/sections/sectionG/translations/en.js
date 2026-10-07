export default {
  "pages": {
    "section-g-rights-process": {
      "title": "Section G - Data Subject Rights",
      "questions": {
        "section-g-rights-process": {
          "title": "What arrangements do you have for handling requests about personal data?",
          "prompt": "For your activities as a controller, select each measure in place, even if you have not yet received a request.",
          "references": [
            "GDPR Articles 5(2) and 24: accountability and evidence of compliance",
            "GDPR Article 12(2): facilitate the exercise of data subject rights",
            "GDPR Article 12(3): response without undue delay and within one month",
            "GDPR Article 12(5): information, communication, and actions generally free of charge",
            "GDPR Article 12(6): additional information where identity is reasonably doubted"
          ],
          "options": {
            "rights-request-channel": {
              "label": "People have a clear way to submit rights requests",
              "description": "Requests can be received through an email address, form, account tool, or other clear channel."
            },
            "rights-identity-check": {
              "label": "Identity can be verified when needed",
              "description": "Where there are reasonable doubts about identity, only the additional information necessary to confirm it is requested."
            },
            "rights-one-month-deadline": {
              "label": "The one-month response deadline is tracked",
              "description": "Requests are tracked from receipt so a response can be provided without undue delay and within one month."
            },
            "rights-free-of-charge-default": {
              "label": "Rights communications and actions are free by default",
              "description": "People can normally exercise their rights without being charged."
            },
            "rights-request-records": {
              "label": "Requests and outcomes are recorded",
              "description": "Evidence is kept of requests and how they were handled; no particular register format is required."
            },
            "no-rights-process": {
              "label": "None of the above",
              "description": "None of these measures is currently in place."
            }
          }
        }
      }
    },
    "section-g-rights-supported": {
      "title": "Section G - Rights Coverage",
      "questions": {
        "section-g-rights-supported": {
          "title": "Which data subject rights can your organisation currently handle?",
          "prompt": "Select every right the organisation has a way to handle.",
          "references": [
            "GDPR Article 15: right of access by the data subject",
            "GDPR Article 16: right to rectification",
            "GDPR Article 17: right to erasure",
            "GDPR Article 18: right to restriction of processing",
            "GDPR Article 19: notification obligation regarding rectification, erasure, or restriction",
            "GDPR Article 20: right to data portability",
            "GDPR Article 21: right to object",
            "GDPR Article 22: automated individual decision-making, including profiling"
          ],
          "options": {
            "right-access": {
              "label": "Access",
              "description": "The organisation can confirm whether data is processed and provide access, information, and copies."
            },
            "right-rectification": {
              "label": "Rectification",
              "description": "The organisation can correct inaccurate data and complete incomplete data."
            },
            "right-erasure": {
              "label": "Erasure",
              "description": "The organisation can assess and act on erasure requests where Article 17 grounds apply."
            },
            "right-restriction": {
              "label": "Restriction of processing",
              "description": "The organisation can restrict processing where Article 18 conditions apply."
            },
            "right-recipient-notification": {
              "label": "Recipient notification",
              "description": "The organisation can notify recipients of rectification, erasure, or restriction where required."
            },
            "right-portability": {
              "label": "Data portability",
              "description": "The organisation can provide portable data where Article 20 conditions apply."
            },
            "right-objection": {
              "label": "Objection",
              "description": "The organisation can handle objections, including direct-marketing objections."
            },
            "right-automated-decision": {
              "label": "Automated decision-making protections",
              "description": "The organisation can handle Article 22 protections for fully automated decisions with legal or similarly significant effects."
            },
            "no-rights-supported": {
              "label": "None of the above",
              "description": "No data subject rights handling capability has been identified from these answers."
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Section G",
    "guidance": {
      "title": "Section G - Data Subject Rights",
      "controllerContext": "For processing where you act as a controller, the following recommendations concern your own handling of personal-data rights requests.",
      "process": {
        "rights-request-channel": "Give people a clear way to request access, correction or other action concerning their personal data, such as a published email address. Ensure staff recognise these requests even when they arrive through another channel.",
        "rights-identity-check": "When handling a personal-data request, verify identity if you have reasonable doubts about who is asking. Request only the additional information necessary; do not routinely require identity documents for every request.",
        "rights-one-month-deadline": "Record when personal-data requests arrive and assign someone to respond without undue delay, normally within one month. If complexity or the number of requests makes an extension necessary, explain the reasons within that first month; the extension may cover two further months.",
        "rights-free-of-charge-default": "Handle personal-data requests free of charge by default. A reasonable fee or refusal requires a permitted exception, such as a manifestly unfounded or excessive request, which you must be able to justify.",
        "rights-request-records": "Keep proportionate evidence of personal-data requests, the decisions made and your responses. A simple, access-restricted spreadsheet can help demonstrate how requests were handled; the GDPR does not prescribe a particular register format."
      },
      "controllerRights": {
        "right-access": "Establish a way to find a person’s personal data, confirm whether you process it, and provide a copy together with the required information about its use. Protect other people’s rights when preparing the response.",
        "right-rectification": "Establish a way to correct inaccurate personal data and complete incomplete information, taking account of the purposes for which you use it.",
        "right-erasure": "Establish a way to assess requests to delete personal data. Delete it when a legal ground applies, for example when it is no longer needed, unless an exception permits or requires retention, such as a legal obligation or the defence of legal claims.",
        "right-restriction": "Establish a way to pause the use of personal data when restriction is required, for example while checking disputed accuracy. Restricted data can normally remain stored, but further use needs a permitted ground. Inform the person before lifting the restriction.",
        "right-recipient-notification": "After correcting personal data, erasing it under the relevant grounds or restricting its use, notify recipients to whom you disclosed it unless this is impossible or involves disproportionate effort. Tell the person who those recipients are if they ask.",
        "right-portability": "If you process personal data provided by the person electronically on the basis of consent or a contract, establish a way to supply it in a reusable digital format, such as CSV. Transfer it directly to another organisation where technically feasible, while protecting other people’s rights.",
        "right-objection": "Establish a way to stop using personal data for direct marketing when the person objects. For processing based on legitimate interests or a public-interest task, assess objections concerning the person’s particular situation and stop unless a permitted ground justifies continuing.",
        "right-automated-decision": "If you make decisions solely by automated means that have legal or similarly significant effects on people, check that an exception under GDPR Article 22(2) allows this: the decision must be necessary for entering into or performing a contract with the person, authorised by EU or Member State law that provides suitable safeguards, or based on the person’s explicit consent. Put the required safeguards in place. For the contract and explicit-consent exceptions, Article 22(3) requires at least human intervention by the controller, an opportunity for the person to express their views and a way to challenge the decision."
      },
      "processorRights": {
        "right-access": "As a processor, establish a way to retrieve personal data and help the controller prepare access responses, taking account of the nature of the processing and what is possible. Forward requests promptly and act under documented instructions; you do not have a separate one-month response allowance.",
        "right-rectification": "As a processor, establish a way to correct or complete personal data on the controller’s documented instructions, so it can fulfil applicable rectification requests.",
        "right-erasure": "As a processor, establish a way to delete personal data on the controller’s documented instructions when an erasure request must be fulfilled. Let the controller decide whether erasure grounds or retention exceptions apply, and explain any limits affecting your assistance.",
        "right-restriction": "As a processor, establish a way to restrict the use of personal data on the controller’s documented instructions when required. Keep restricted data from being used beyond what is permitted, and coordinate any lifting of the restriction with the controller.",
        "right-recipient-notification": "As a processor, help the controller identify recipients and communicate corrections, erasure or restrictions where notification is required. Follow its documented instructions and coordinate with any relevant sub-processors.",
        "right-portability": "As a processor, help the controller export personal data in a reusable digital format and, where technically feasible, transfer it directly to another organisation when portability applies. Follow documented instructions; the controller determines whether the processing meets the conditions for this right.",
        "right-objection": "As a processor, promptly forward objections to the controller and establish a way to stop or adjust the affected processing on its documented instructions. The controller decides how the objection applies, including the duty to stop direct marketing.",
        "right-automated-decision": "As a processor, if your services support solely automated decisions with legal or similarly significant effects, help the controller implement the applicable safeguards, including human intervention and challenges where required. Follow documented instructions; assistance does not itself establish that the decision-making is lawful."
      }
    },
    "outcomes": {
      "rightsFulfilled": "You report all rights-handling capabilities and, for controller activities, all request-handling requirements assessed here. Conditional rights apply only when their legal conditions are met."
    }
  }
}
