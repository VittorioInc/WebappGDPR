export default {
  "pages": {
    "section-m-ropa-content": {
      "title": "Section M - Records of Processing Activities",
      "questions": {
        "section-m-ropa-content": {
          "title": "Which information is included in your organisation’s record of processing activities (RoPA)?",
          "prompt": "Select the information included in each checklist shown for your selected role or roles.",
          "explanation": "A RoPA describes how your organisation uses personal data. A spreadsheet can be sufficient; specialist software is not required. Describe activities such as payroll, recruitment or customer management, rather than listing individual people’s records.\n\nKeep the record in writing, including electronically, keep it current and make it available to the data protection authority on request. If you act as both controller and processor, answer both checklists for the corresponding records.",
          "references": [
            "GDPR Article 30(1): controller record contents and the conditions attached to particular fields",
            "GDPR Article 30(2): processor record contents and the conditions attached to particular fields",
            "GDPR Article 30(3)-(4): written or electronic records available to the supervisory authority on request",
            "GDPR Article 30(5): the under-250 exemption also depends on processing frequency, risks and data categories",
            "EDPB-endorsed Article 30(5) position paper: assess the exemption by processing activity"
          ],
          "exemptionNotice": "Your earlier answers indicate that your organisation has fewer than 250 employees, processes personal data only occasionally, and does not process sensitive personal data (Article 9) or criminal-conviction and offence data (Article 10). If your processing is also unlikely to create a risk to people’s rights and freedoms, you may qualify for an exemption from keeping a RoPA. We still recommend creating one to help organise and demonstrate your data-protection practices.",
          "groupTitles": {
            "controller": "Your record as a controller",
            "processor": "Your record as a processor"
          },
          "options": {
            "ropa-controller-identities-contacts": {
              "label": "Who is responsible and how to contact them",
              "description": "Your organisation’s name and contact details and, where applicable, those of the joint controller, your representative and the DPO."
            },
            "ropa-controller-purposes-data-categories": {
              "label": "Why personal data is used, whose data it is and what information is involved",
              "description": "Record the purposes of processing and the categories of people and personal data involved. For example: managing payroll; employees; identification, salary and bank-account details."
            },
            "ropa-controller-recipients": {
              "label": "Who personal data is shared with",
              "description": "Record the categories of recipients to whom data has been or will be disclosed, including recipients outside the EU/EEA and international organisations. Examples include payroll providers, accountants and public authorities."
            },
            "ropa-controller-transfers": {
              "label": "International transfers, where applicable",
              "description": "Identify transfers to countries outside the EU/EEA or international organisations, naming the destination. For transfers relying on the exceptional route based on compelling legitimate interests in the second subparagraph of Article 49(1), also document the suitable safeguards."
            },
            "ropa-controller-erasure-periods": {
              "label": "Expected deletion periods, where possible",
              "description": "State the envisaged time limits for deleting the different categories of personal data."
            },
            "ropa-controller-security-measures": {
              "label": "A general description of security measures, where possible",
              "description": "Describe the technical and organisational security measures, such as access restrictions, encryption and backups."
            },
            "ropa-controller-none": {
              "label": "None of the above",
              "description": "Select this also if your organisation does not have a RoPA for its activities as a controller."
            },
            "ropa-processor-identities-contacts": {
              "label": "Your organisation and the controllers you work for",
              "description": "Names and contact details of the processor or processors and each controller they work for, plus, where applicable, the controller’s or processor’s representative and the DPO."
            },
            "ropa-processor-processing-categories": {
              "label": "What processing you perform for each controller",
              "description": "Describe the categories of processing carried out on behalf of each controller. For example: hosting customer records, administering payroll or providing customer-support services."
            },
            "ropa-processor-transfers": {
              "label": "International transfers, where applicable",
              "description": "Identify transfers to countries outside the EU/EEA or international organisations, naming the destination. For transfers relying on the exceptional route based on compelling legitimate interests in the second subparagraph of Article 49(1), also document the suitable safeguards."
            },
            "ropa-processor-security-measures": {
              "label": "A general description of security measures, where possible",
              "description": "Describe the technical and organisational security measures, such as access restrictions, encryption and backups."
            },
            "ropa-processor-none": {
              "label": "None of the above",
              "description": "Select this also if your organisation does not have a RoPA for its activities as a processor."
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Section M",
    "guidance": {
      "title": "Section M - Records of Processing Activities",
      "maintenance": "Keep your processing record in writing, including electronically, update it when activities change and make it available to the data protection authority on request. A spreadsheet can work: describe activities such as payroll or customer support, rather than listing individual people.",
      "exemption": "You reported fewer than 250 employees, occasional processing, no sensitive personal data and no criminal-conviction or offence data. An exemption may apply only if the relevant processing is also unlikely to create a risk to people’s rights and freedoms. That risk condition has not been assessed here. Check each activity separately; routine payroll is not occasional processing. We still recommend keeping a RoPA to organise your data-protection practices.",
      "additions": "The recommendations below concern information you did not report as included. Add it on top of the contents you already recorded; keep what is already in place. Where a RoPA is required, complete the relevant information. These additions are also recommended if you qualify for an exemption.",
      "controllerIntro": "Additions to your controller record:",
      "processorIntro": "Additions to your processor record:",
      "contents": {
        "ropa-controller-identities-contacts": "Contacts: record your organisation’s name and contact details and, where applicable, those of joint controllers, your representative and DPO.",
        "ropa-controller-purposes-data-categories": "Purposes and categories: record each activity’s purposes, categories of people and categories of personal data. For example: payroll; employees; identification, salary and bank details.",
        "ropa-controller-recipients": "Recipients: record the categories of recipients receiving the data, including overseas recipients and international organisations.",
        "ropa-controller-transfers": "Transfers: where applicable, identify international transfers and their destinations. For the last-resort compelling-legitimate-interests route under Article 49(1), second subparagraph, also document suitable safeguards.",
        "ropa-controller-erasure-periods": "Deletion: where possible, record expected deletion periods for different categories of personal data.",
        "ropa-controller-security-measures": "Security: where possible, give a general description of technical and organisational security measures.",
        "ropa-processor-identities-contacts": "Contacts: record the names and contact details of the processor or processors and each controller served, plus representatives and the DPO where applicable.",
        "ropa-processor-processing-categories": "Processing: describe the categories of processing performed for each controller, such as hosting or payroll administration.",
        "ropa-processor-transfers": "Transfers: where applicable, identify international transfers and their destinations. For the last-resort compelling-legitimate-interests route under Article 49(1), second subparagraph, also document suitable safeguards.",
        "ropa-processor-security-measures": "Security: where possible, give a general description of technical and organisational security measures."
      },
      "review": "These are conditional additions for review, not confirmed missing legally required contents. None means none of the listed contents was reported for that role; it does not necessarily mean no record exists. Selected contents have not been checked for accuracy or completeness.",
      "regulationLink": {
        "label": "GDPR Article 30: records of processing activities",
        "url": "https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng"
      },
      "exemptionLink": {
        "label": "EDPB-endorsed position on the Article 30(5) exemption",
        "url": "https://www.edpb.europa.eu/documents/other-guidance/position-paper-on-the-derogations-from-the-obligation-to-maintain-records_en"
      }
    },
    "outcomes": {
      "ropaReported": "You report all RoPA content topics assessed for your role or roles. Their accuracy and completeness have not been independently verified."
    }
  }
}
