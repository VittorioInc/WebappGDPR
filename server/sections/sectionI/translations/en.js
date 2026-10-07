export default {
  "pages": {
    "section-i-transfer-situations": {
      "title": "Section I - International Transfers",
      "questions": {
        "section-i-transfer-situations": {
          "title": "Does your organisation send personal data to, or make it accessible to, recipients outside the EU/EEA or international organisations?",
          "prompt": "Consider suppliers, business partners and group companies, including cloud storage, backups and remote support. Data can be accessible to an overseas recipient even when the servers are located in the EU/EEA.",
          "references": [
            "GDPR Article 4(26): definition of an international organisation",
            "GDPR Article 44: transfers to third countries or international organisations must comply with Chapter V"
          ],
          "options": {
            "international-transfers-reported": {
              "label": "Yes",
              "description": "We send personal data to, or allow access by, at least one such recipient."
            },
            "no-international-transfers": {
              "label": "No",
              "description": "We do not send personal data to, or allow access by, any such recipient."
            }
          }
        }
      }
    },
    "section-i-transfer-mechanism": {
      "title": "Section I - Transfer Mechanism",
      "questions": {
        "section-i-transfer-mechanism": {
          "title": "Does an adequacy decision cover every international transfer your organisation makes, directly or through its providers?",
          "prompt": "Check that the relevant decisions cover each destination, recipient and type of data. Select No if only some transfers are covered; you can then identify the mechanisms used for the remaining transfers below.",
          "references": [
            "GDPR Article 45(1): transfer on the basis of an adequacy decision",
            "GDPR Article 46(1): appropriate safeguards and enforceable data subject rights",
            "GDPR Article 46(2): safeguards including binding corporate rules and standard data protection clauses",
            "GDPR Article 46(3): authorisation for other contractual clauses and public-authority administrative arrangements",
            "GDPR Article 47: approval and requirements for binding corporate rules",
            "GDPR Article 49(1): derogations for specific situations where Article 45 or 46 is unavailable"
          ],
          "options": {
            "adequacy-decision": {
              "label": "Yes",
              "description": "Every reported transfer is covered by an applicable adequacy decision."
            },
            "adequacy-not-all": {
              "label": "No",
              "description": "At least one transfer is not covered by an adequacy decision."
            }
          }
        },
        "section-i-transfer-mechanism-alternatives": {
          "title": "For transfers not covered by an adequacy decision, what does your organisation rely on?",
          "prompt": "Select all mechanisms used for those transfers. The first four options are safeguards under Article 46; the Article 49 option is an exception with specific conditions. Selecting a mechanism does not confirm that all its conditions are met.",
          "options": {
            "standard-data-protection-clauses": {
              "label": "Standard contractual clauses or other authorised contractual clauses",
              "description": "The parties use contractual terms that provide the required protection for the transfer."
            },
            "binding-corporate-rules": {
              "label": "Approved binding corporate rules for transfers within a group",
              "description": "The group’s approved rules cover the entities and transfers concerned."
            },
            "approved-code-or-certification": {
              "label": "Approved code of conduct or certification with binding commitments",
              "description": "The approved framework covers the transfer, and the recipient makes binding and enforceable commitments to protect the data."
            },
            "public-authority-instrument": {
              "label": "Binding instrument or authorised arrangement between public authorities",
              "description": "The public bodies use a legally binding instrument or an authorised administrative arrangement that provides enforceable protection for the people concerned."
            },
            "article-49-derogation": {
              "label": "An exception under Article 49 for a specific situation",
              "description": "The transfer meets the specific conditions of the exception relied on."
            },
            "no-transfer-mechanism": {
              "label": "None of the above",
              "description": "We have not identified any of these mechanisms for the transfers not covered by an adequacy decision."
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Section I",
    "guidance": {
      "title": "Section I - International Transfers",
      "noTransfers": "When reviewing whether you transfer personal data outside the EU/EEA, include cloud services, backups, remote support and separate group companies. Check who can receive or access the data, rather than relying only on where the servers are located.",
      "recipientContext": "Identify the actual recipients, destinations and access arrangements for your international transfers, including transfers made through providers. A separate overseas company’s access can constitute a transfer even when the servers remain in the EU/EEA. Access by your own employees abroad is not, by itself, a transfer to another organisation, but still requires appropriate security.",
      "mechanismReview": "Before continuing the affected transfers, establish whether a valid transfer mechanism covers them. Ask your provider for the applicable transfer documentation. If no lawful route is available, suspend the affected transfers or change the service or access arrangements. This concerns transfers not covered by an adequacy decision; it does not mean that all your transfers lack protection.",
      "mechanisms": {
        "transfer-adequacy-scope-and-validity": "When relying on an adequacy decision, check that it remains valid and covers the actual destination, recipient and processing. Some decisions cover only particular sectors or participating organisations. Where participation or certification is required, verify the receiving organisation’s current status and relevant coverage. An applicable adequacy decision removes the need for an additional transfer safeguard, but other GDPR obligations remain.",
        "transfer-contractual-clauses-conditions": "When relying on contractual clauses for an international transfer, ensure that the appropriate clauses are binding on the relevant parties and completed for the actual processing. Assess whether the destination’s laws and practices allow the protection to work, and add effective safeguards where necessary. A provider’s statement that it uses clauses does not establish this. Standard contractual clauses adopted by the European Commission do not require separate authority authorisation when used within their scope and conditions. If you instead rely on individually drafted clauses as the transfer safeguard, obtain authorisation from the competent supervisory authority.",
        "transfer-bcr-approval-and-coverage": "When relying on binding corporate rules, check that they have the required approval and cover the group entities, data and transfers concerned. An ordinary internal privacy policy is not an approved transfer mechanism.",
        "transfer-code-certification-and-commitments": "When relying on a code of conduct or certification, check that it is approved for international transfers and that the recipient has made the required binding and enforceable commitments. A general security certificate alone does not satisfy this requirement.",
        "transfer-public-authority-instrument-conditions": "When relying on an instrument between public authorities, check that it is legally binding and enforceable and protects people’s rights. An administrative arrangement requires the competent authority’s authorisation and enforceable, effective rights for the people concerned.",
        "transfer-specific-exception-conditions": "Review your reliance on Article 49 carefully. You reported using a derogation for a specific situation. These derogations have strict conditions and must be interpreted narrowly; they are not a general permission for international transfers. Identify the precise derogation you rely on and check every applicable condition before proceeding. This questionnaire does not establish that the derogation applies. Review GDPR Article 49 and the EDPB’s official guidance linked below, and obtain specialist advice if its application remains unclear."
      },
      "onwardProtection": "When your provider passes personal data to another recipient or allows overseas access, check that protection continues through those arrangements. Keep evidence of the applicable transfer route and revisit it when recipients, services, access arrangements or relevant legal conditions change.",
      "controllerReminder": "For international transfers under your responsibility as a controller, include the required transfer information in your privacy notice, including information about the applicable adequacy decision or safeguards and how people can obtain a copy of the safeguards. Include transfers in your processing records where required.",
      "processorReminder": "When transferring a client’s personal data as a processor, follow the controller’s documented instructions and applicable authorisation requirements. Confirm the transfer route and help the controller obtain the information needed for its own obligations.",
      "adequacyDecisionLink": {
        "label": "European Commission: current adequacy decisions",
        "url": "https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en"
      },
      "article49Link": {
        "label": "GDPR Article 49 (full Regulation text)",
        "url": "https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng"
      },
      "article49GuidanceLink": {
        "label": "EDPB: Guidelines 2/2018 on Article 49 derogations",
        "url": "https://www.edpb.europa.eu/documents/guideline/guidelines-22018-on-derogations-of-article-49-under-regulation-2016679_en"
      }
    },
    "outcomes": {
      "transfersSkipped": "You reported no international transfers, so transfer-mechanism checks were skipped. This does not remove general security duties.",
      "transfersReported": "You reported a transfer mechanism for the transfers assessed. Its scope and legal conditions have not been verified; the conditional recommendations remain relevant."
    }
  }
}
