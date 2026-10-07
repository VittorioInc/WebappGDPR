export default {
  "pages": {
    "section-l-dpia-screening": {
      "title": "Section L - DPIA Screening",
      "questions": {
        "section-l-dpia-screening": {
          "title": "Does your organisation carry out, or plan to carry out, any of the following activities involving personal data?",
          "prompt": "For your activities as a controller, select all that apply.",
          "explanation": "A data protection impact assessment (DPIA) examines how an activity could affect people and how those risks will be addressed. It must be completed before processing that is likely to create a high risk to people’s rights and freedoms.\n\n“Large scale” has no fixed numerical threshold. Consider the number or proportion of people affected, the amount and variety of information, how long the processing continues and its geographical reach. The size of the business alone does not determine the answer.\n\nExamples of large-scale processing include a hospital handling patient records as part of its normal activities, or a bank or insurance company processing its customers’ data.\n\nExamples that are not large-scale include an individual GP handling their patients’ records, or an individual lawyer handling clients’ criminal-conviction and offence data. These examples come from the European Data Protection Board (EDPB). Processing that is not large-scale can still require a DPIA if it is likely to create a high risk for other reasons.",
          "explanationLinks": [
            {
              "label": "EDPB: examples of large-scale and non-large-scale processing",
              "href": "https://www.edpb.europa.eu/sme/be-compliant/data-protection-officer_en"
            }
          ],
          "references": [
            "GDPR Article 35(1): a DPIA is required before processing that is likely to result in high risk",
            "GDPR Article 35(3): specified DPIA trigger situations",
            "GDPR Article 35(4)-(5): competent authorities publish lists of processing requiring or not requiring a DPIA",
            "GDPR Article 35(10): specific conditions for processing already assessed when its legal basis was adopted",
            "GDPR Recital 91 and EDPB-endorsed DPIA guidelines (WP248 rev.01): large scale and risk indicators"
          ],
          "options": {
            "automated-evaluation-significant-effects": {
              "label": "Systematically and extensively assess people using automated processing, and use those assessments to make decisions that significantly affect them.",
              "description": "For example, using detailed automated scoring to decide who receives a loan or is selected for employment. The assessment must be systematic and extensive, and the resulting decisions must have legal or similarly significant effects. Human involvement in the final decision does not automatically remove this requirement."
            },
            "large-scale-sensitive-data": {
              "label": "Process sensitive personal data or criminal-conviction and offence data on a large scale.",
              "description": "Examples include a hospital managing patient records or a service processing large amounts of genetic data. Sensitive data includes information about health, ethnicity, religious beliefs, sexual orientation and biometric data used to uniquely identify someone."
            },
            "large-scale-public-monitoring": {
              "label": "Systematically monitor publicly accessible areas on a large scale.",
              "description": "For example, operating a coordinated camera network across a shopping centre or transport network."
            },
            "authority-dpia-list": {
              "label": "Carry out an activity included in our data protection authority’s list of processing requiring a DPIA.",
              "description": "Use the EDPB directory below to find the relevant EU/EEA data protection authority. Check its published DPIA list and the conditions attached to each entry. Select this option if your activity meets those conditions.",
              "descriptionLinks": [
                {
                  "label": "Find your data protection authority (EDPB EU/EEA directory)",
                  "href": "https://www.edpb.europa.eu/about-edpb/our-members_en"
                }
              ]
            },
            "other-potential-high-risk-features": {
              "label": "Carry out other activities with potential high-risk features.",
              "description": "Examples include detailed profiling or tracking, combining information from different sources in unexpected ways, processing highly personal information, monitoring employees or other vulnerable people, or using innovative technologies that substantially affect how people’s data is used. These features require closer assessment; they do not each automatically make a DPIA mandatory."
            },
            "no-dpia-trigger": {
              "label": "None of the above applies to our current or planned activities.",
              "description": "None of the activities listed above applies to our activities as a controller."
            }
          }
        }
      }
    },
    "section-l-dpia-content": {
      "title": "Section L - DPIA Completion",
      "questions": {
        "section-l-dpia-content": {
          "title": "Has your organisation completed DPIAs covering the previously discussed activities?",
          "prompt": "Select one answer for your activities as a controller.",
          "explanation": "Consider all activities discussed throughout this assessment, not only those selected on the previous page. Coverage means the activities requiring a DPIA; routine activities that do not require one need not be covered. An assessment still in progress does not count as completed.\n\nA DPIA should describe how personal data will be used and why, assess whether that use is necessary and proportionate, identify possible harm to people, and explain the measures addressing those risks and demonstrating compliance.\n\nSeek your DPO’s advice if one is designated, and consult affected people or their representatives where appropriate. Where a DPIA is required, complete it before starting the processing. One DPIA may cover similar activities presenting similar high risks.",
          "references": [
            "GDPR Article 35(1): complete a required DPIA before processing; one assessment may cover similar processing with similar high risks",
            "GDPR Article 35(2): seek the advice of the DPO where one is designated",
            "GDPR Article 35(7): minimum DPIA content",
            "GDPR Article 35(9): seek the views of data subjects or representatives where appropriate"
          ],
          "options": {
            "dpia-completed-all": {
              "label": "Yes, covering all activities requiring a DPIA."
            },
            "dpia-completed-some": {
              "label": "Covering some, but not all, activities requiring a DPIA."
            },
            "dpia-completed-none": {
              "label": "No completed DPIA covers these activities."
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Section L",
    "guidance": {
      "title": "Section L - DPIAs",
      "screeningContext": "This questionnaire cannot determine conclusively whether a DPIA is required. Confirm the actual processing, applicable legal conditions, your competent authority’s lists, any exemptions and coverage by existing assessments. Keep a brief record of your reasoning and revisit it when activities or risks change.",
      "noIndicators": [
        "You selected no listed DPIA indicators. Make a short list of your processing activities, using your processing records if available. For each activity, note the data involved, whose data it is, how it is used and the possible harm to people.",
        "A mailing list sending subscribers a generic newsletter is an example where a DPIA is normally unnecessary. Systematic monitoring of employees’ computer or internet activity, however, can require one, even in a small business. If such activities apply, revisit your screening answers.",
        "Check your competent authority’s DPIA lists and their conditions. Record briefly why a DPIA is or is not needed. Your IT provider can explain what its systems collect; seek specialist advice if the assessment remains unclear, or consider carrying out a DPIA voluntarily."
      ],
      "partialCoverage": "You reported that completed DPIAs cover only some relevant activities. Identify which remaining activities legally require a DPIA and complete the necessary assessments.",
      "noCoverage": "You reported no completed DPIA covering these activities. Confirm which activities legally require one and arrange the necessary assessments.",
      "completionTiming": "Complete each required DPIA before starting the processing. An assessment for a planned activity is not necessarily overdue; if processing has already started, address the omission promptly.",
      "contentIntro": "When preparing or reviewing a DPIA, check that it covers:",
      "contentItems": [
        "The processing and its purposes: describe what happens to the data, the people and data involved, recipients, retention periods and supporting systems. Include the legitimate interest pursued where applicable.",
        "Necessity and proportionality: explain why the processing is needed and proportionate to its purposes, including whether less intrusive alternatives could achieve them. Review lawful grounds, data minimisation, retention, people’s rights, processors and applicable international-transfer safeguards.",
        "Risks to people: identify possible harm, its causes, likelihood and severity. Consider people’s rights and freedoms, rather than only financial or operational harm to the business.",
        "Measures addressing those risks: describe safeguards, security measures and arrangements demonstrating GDPR compliance, taking account of the rights and legitimate interests of affected people and others. Evaluate the risk remaining after protection is applied."
      ],
      "processIntro": "Also check the applicable procedural requirements:",
      "processItems": [
        "Seek DPO advice if a DPO is designated.",
        "Seek affected people’s or their representatives’ views where appropriate, while protecting commercial or public interests and processing security.",
        "Take account of compliance with relevant approved codes of conduct, where present; joining one is not compulsory.",
        "Complete a required DPIA before processing starts, and review it where necessary, particularly when risks change.",
        "If high risk remains that appropriate measures cannot mitigate, consult the competent authority before proceeding. Provide the DPIA, processing purposes and means, and protective measures; include the parties’ responsibilities and DPO contact details where applicable, and any other information the authority requests."
      ],
      "contentReview": "These are review topics, not findings that particular content or procedures are missing. Reporting completed DPIAs does not verify their quality, timing or legal sufficiency. The four minimum content categories come from Article 35(7), with practical detail from Annex 2 of the EU DPIA guidelines; procedural conditions follow Articles 35 and 36.",
      "processor": "Help your controller clients with their DPIAs by providing relevant information about your processing, systems and safeguards. The controller remains responsible for determining necessity and carrying out the assessment. This assistance remains relevant even if you use no further providers.",
      "authorityLink": {
        "label": "EDPB: EU/EEA data protection authority directory",
        "url": "https://www.edpb.europa.eu/about-edpb/our-members_en"
      },
      "guidelinesLink": {
        "label": "EU DPIA guidelines, WP248 rev.01: examples and Annex 2 checklist",
        "url": "https://ec.europa.eu/newsroom/article29/items/611236/en"
      },
      "regulationLink": {
        "label": "GDPR: Articles 28, 35 and 36",
        "url": "https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng"
      }
    },
    "outcomes": {
      "dpiaControllerSkipped": "Controller DPIA screening and completion checks were skipped for your processor-only role. Your assistance duties remain relevant.",
      "dpiaNoIndicators": "No listed DPIA indicators were reported. This is a screening outcome, not an exemption; the practical review guidance remains relevant.",
      "dpiaCoverageReported": "You report completed DPIAs covering all activities requiring one. The contents checklist remains relevant because quality, timing and legal sufficiency were not assessed."
    }
  }
}
