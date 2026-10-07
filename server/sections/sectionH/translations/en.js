export default {
  "pages": {
    "section-h-service-provider-use": {
      "title": "Section H - Service Providers",
      "questions": {
        "section-h-service-provider-use": {
          "title": "Does your organisation use other companies or service providers to handle personal data on its behalf?",
          "prompt": "Include separate group companies and providers handling your clients’ data for you.",
          "references": [
            "GDPR Article 4(8): a processor handles personal data on behalf of a controller",
            "GDPR Article 28(1), (3)-(4): provider guarantees and binding processing terms"
          ],
          "options": {
            "external-processors-used": {
              "label": "Yes",
              "description": "At least one other company or provider handles personal data on our behalf."
            },
            "no-service-providers": {
              "label": "No",
              "description": "We do not use other companies or providers to handle personal data on our behalf."
            }
          }
        }
      }
    },
    "section-h-provider-checks": {
      "title": "Section H - Provider Checks",
      "questions": {
        "section-h-provider-checks": {
          "title": "Do you check that each of these providers can protect personal data and meet its GDPR obligations?",
          "prompt": "Provider checks should cover every provider you use.",
          "references": [
            "GDPR Article 28(1), (4): sufficient guarantees for data protection and compliance"
          ],
          "options": {
            "provider-checks-in-place": {
              "label": "Yes",
              "description": "We assess every provider’s ability to protect personal data and meet its GDPR obligations."
            },
            "no-provider-checks": {
              "label": "No",
              "description": "We do not carry out these checks, or at least one provider has not been assessed."
            }
          }
        }
      }
    },
    "section-h-provider-agreements": {
      "title": "Section H - Provider Agreements",
      "questions": {
        "section-h-provider-agreements": {
          "title": "Do you have a binding written data-processing agreement in place with every such provider?",
          "prompt": "Answer for agreements actually in place with every provider, including electronic agreements.",
          "references": [
            "GDPR Article 28(3)-(4), (9): binding processing terms in writing, including electronic form"
          ],
          "options": {
            "provider-agreements-in-place": {
              "label": "Yes",
              "description": "Every provider is covered by binding written data-processing terms."
            },
            "provider-agreements-incomplete": {
              "label": "No",
              "description": "At least one provider is not covered; an unused template does not count as an agreement in place."
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Section H",
    "guidance": {
      "title": "Section H - Service Providers",
      "providerChecks": "Before allowing a provider to handle personal data on your behalf, check that it can protect the data and meet its obligations. For a small business, start with its data-processing terms and security documentation: consider access controls, breach reporting, any further providers it uses and where data can be accessed. Record your assessment and request clarification where the information is insufficient. Match the depth of your checks to the risks.",
      "providerAgreements": "Put binding written data-processing terms in place with every provider handling personal data on your behalf. Electronic agreements can qualify, including suitable terms incorporated into a service contract; an unused template does not. Check that the terms cover your actual processing and the requirements below.",
      "agreementIntro": "A binding data-processing agreement must describe the processing and specify the provider’s responsibilities. Check that it covers:",
      "agreementContents": {
        "processingDetails": "Processing details: subject matter, duration, nature and purpose; types of personal data; categories of people; and the controller’s rights and obligations.",
        "instructions": "Documented instructions: processing only under the controller’s instructions, including international transfers. If EU or Member State law requires other processing, the provider must inform the controller beforehand unless that law prohibits doing so.",
        "confidentiality": "Confidentiality: authorised workers must be bound by confidentiality commitments or an appropriate legal duty.",
        "security": "Security: the provider must implement the measures required to protect the personal data.",
        "subprocessors": "Further providers: compliance with the rules for appointing and contracting with sub-processors.",
        "rightsAssistance": "People’s rights: assistance with rights requests through appropriate measures, taking account of the processing and what is possible.",
        "complianceAssistance": "Compliance assistance: help with security, breach notification, DPIAs and consultation with the authority, taking account of the processing and information available.",
        "endOfService": "End of service: return or delete the personal data at the controller’s choice, and delete remaining copies unless EU or Member State law requires retention.",
        "evidenceAndAudits": "Evidence and audits: provide the information needed to demonstrate compliance and allow and contribute to audits, including inspections.",
        "unlawfulInstructions": "Unlawful instructions: immediately warn the controller if an instruction appears to breach applicable data-protection law."
      },
      "agreementDisclaimer": "These are required agreement topics, not findings that any particular clause is missing. Reporting that an agreement is in place does not verify its contents or implementation (GDPR Article 28(3)).",
      "processorReminder": "When handling personal data for a client as a processor, ensure your relationship is governed by binding written terms covering these requirements, and follow the client’s documented instructions. These responsibilities remain relevant even if you do not use any further providers.",
      "subprocessorReminder": "If you appoint another processor to handle your client’s data, obtain the controller’s prior specific or general written authorisation and impose the same data-protection obligations on that provider. With general authorisation, give advance notice of additions or replacements so the controller can object. You remain responsible to the controller for that provider’s performance (GDPR Article 28(2)–(4))."
    },
    "outcomes": {
      "providersSkipped": "You reported no providers processing data on your behalf, so provider checks and agreement questions were skipped. Your own processor duties, if relevant, remain.",
      "providersReported": "You report provider checks and binding written agreements with every provider. The agreement contents and implementation still need to meet the applicable conditions."
    }
  }
}
