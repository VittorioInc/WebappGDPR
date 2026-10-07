export default {
  "pages": {
    "section-c-governance-measures": {
      "title": "Section C - Policy and Organisation",
      "questions": {
        "section-c-governance-measures": {
          "title": "Who is responsible for GDPR compliance, and what basic accountability measures are in place?",
          "prompt": "Select every baseline accountability measure that applies.",
          "explanation": "Even if none of these measures is in place, your organisation remains responsible for the GDPR duties that apply to it as a controller or processor. If no one has been assigned to coordinate compliance, senior management must ensure this work is organised; if the business is run by an individual in their own name, this is the business owner. Appointing a coordinator does not transfer the organisation’s legal responsibility.",
          "references": [
            "GDPR Article 5(2): accountability",
            "GDPR Article 24(1): technical and organisational measures",
            "GDPR Article 24(2): data protection policies where proportionate"
          ],
          "options": {
            "data-protection-owner": {
              "label": "A person or team owns data protection responsibilities",
              "description": "Someone is responsible for coordinating GDPR compliance work."
            },
            "written-data-protection-policy": {
              "label": "Proportionate written data-protection rules or procedures",
              "description": "The organisation has practical written rules for handling personal data, scaled to its processing activities."
            },
            "staff-guidance-training": {
              "label": "Staff guidance or training",
              "description": "People who handle personal data receive guidance, awareness, or training."
            },
            "no-governance-measures": {
              "label": "None of the above",
              "description": "No basic GDPR accountability measure has been identified from these answers."
            }
          }
        }
      }
    },
    "section-c-dpo-triggers": {
      "title": "Section C - Data Protection Officer",
      "questions": {
        "section-c-dpo-triggers": {
          "title": "Which DPO requirement or designation basis applies to the organisation?",
          "prompt": "Select the conditions that apply to your organisation, including any specific legal requirement or voluntary appointment of a DPO.",
          "explanation": "“Large scale” has no fixed numerical threshold. Consider the number or proportion of people affected, the amount and variety of data, how long the processing continues and its geographical reach. The size of the business alone does not determine the answer.\n\nExamples include a hospital processing patient records or a bank processing customers’ data. An individual doctor handling their patients’ records or an individual lawyer handling clients’ cases would generally not constitute large-scale processing.",
          "explanationLinks": [
            {
              "label": "EDPB: examples of large-scale and non-large-scale processing",
              "href": "https://www.edpb.europa.eu/sme/be-compliant/data-protection-officer_en"
            }
          ],
          "references": [
            "GDPR Article 37(1): mandatory designation of the data protection officer",
            "GDPR Article 37(4): other mandatory or voluntary designation"
          ],
          "options": {
            "large-scale-monitoring": {
              "label": "Core activities require regular and systematic monitoring on a large scale",
              "description": "This concerns large-scale monitoring of data subjects as a core activity."
            },
            "large-scale-article-9-10-data": {
              "label": "Core activities involve large-scale Article 9 or Article 10 data identified in Section B",
              "description": "This covers large-scale processing of special-category data or criminal conviction/offence data as a core activity."
            },
            "member-state-law-dpo-required": {
              "label": "A specific EU or Member State law requires a DPO",
              "description": "A law outside the Article 37(1) triggers has been identified as requiring the organisation to designate a DPO."
            },
            "voluntary-dpo-designated": {
              "label": "A DPO has been voluntarily designated",
              "description": "The organisation has chosen to designate a DPO even if no mandatory DPO trigger has been identified."
            },
            "no-dpo-trigger": {
              "label": "No mandatory or voluntary DPO basis applies",
              "description": "No Article 37 trigger, other legal requirement, or voluntary DPO designation has been identified."
            }
          },
          "detectedNotice": {
            "title": "Possible DPO trigger identified from earlier answers",
            "intro": "Based on earlier answers, we have preselected possible DPO triggers for your review. Keep each option selected only if all the stated conditions, including that the processing is a core activity, are met.",
            "note": "You can also select a DPO requirement under other EU or Member State law, or a voluntary DPO designation."
          },
          "suggestionNotice": "Suggested from earlier answers. You can change this before continuing."
        }
      }
    },
    "section-c-dpo-designation": {
      "title": "Section C - Data Protection Officer",
      "questions": {
        "section-c-dpo-designation": {
          "title": "Has your organisation appointed a Data Protection Officer (DPO)?",
          "prompt": "Answer based on any mandatory DPO basis selected in the previous step.",
          "references": [
            "GDPR Article 37(1): designation of the data protection officer",
            "GDPR Article 37(4): designation required by Union or Member State law",
            "GDPR Article 37(5): professional qualities and expert knowledge",
            "GDPR Article 37(7): publish and communicate DPO contact details"
          ],
          "options": {
            "dpo-designated": {
              "label": "Yes, a DPO has been designated",
              "description": "A DPO has been designated for the relevant controller or processor activities."
            },
            "dpo-not-designated": {
              "label": "No, a DPO has not been designated",
              "description": "A mandatory DPO basis was selected, but no DPO has been designated."
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Section C",
    "guidance": {
      "title": "Section C - Policy and organisation",
      "coordinator": "Make clear who coordinates data-protection work and follows up outstanding actions. In a small business, this may be the owner or an existing member of staff. Assigning this responsibility does not transfer the organisation’s legal obligations or necessarily require appointing a DPO.",
      "controllerPolicies": "For activities where you act as controller, check whether your processing calls for written data-protection policies. Keep them proportionate to your activities and risks: short, practical procedures may be sufficient for a small organisation, provided they adequately cover its needs and are put into practice.",
      "processorProcedures": "For activities where you act as processor, document the instructions and practical procedures needed to fulfil your duties and handle clients’ data securely. Keep them suited to the work and risks involved.",
      "staff": "If other people handle personal data under your organisation’s authority, give them practical instructions suited to their work, including how to handle data securely and report problems. Check that they understand and follow those instructions."
    },
    "reported": "You report all three governance arrangements in place, and have answered the applicable DPO designation questions. The legal designation conditions are not verified here."
  }
}
