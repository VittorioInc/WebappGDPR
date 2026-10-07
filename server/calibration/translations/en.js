export default {
  "scopeNotice": {
    "kicker": "Assessment scope",
    "title": "Before you continue",
    "intro": "This questionnaire is designed for private-sector small and medium-sized businesses. It is not intended for public authorities or public bodies.",
    "items": [
      {
        "title": "Public authorities and public bodies",
        "body": "Public-sector processing has distinct obligations that are outside the scope of this assessment.",
        "quote": "The controller and the processor shall designate a data protection officer in any case where: (a) the processing is carried out by a public authority or body, except for courts acting in their judicial capacity.",
        "reference": "GDPR Article 37(1)(a)"
      },
      {
        "title": "Purely personal or household activity",
        "body": "This assessment is not intended for processing carried out solely in a private capacity with no professional or commercial connection.",
        "quote": "This Regulation does not apply to the processing of personal data: ... (c) by a natural person in the course of a purely personal or household activity.",
        "reference": "GDPR Article 2(2)(c)"
      }
    ],
    "closing": "If the processing is connected to a business, profession or other organisation, continue to the setup questions.",
    "continueLabel": "Continue to setup"
  },
  "kicker": "Calibration",
  "title": "Before the GDPR assessment starts",
  "prompt": "Answer these setup questions once. They will later help the questionnaire adapt to the organisation being assessed.",
  "questions": {
    "calibration-organisation-size": {
      "title": "Approximately how many people make up or regularly work in the organisation?",
      "prompt": "Include employees and other regular workers, such as owners, partners and contractors. Select the closest option.",
      "options": {
        "only-me": {
          "label": "Only me - solo practitioner"
        },
        "fewer-than-250-people": {
          "label": "Fewer than 250 people"
        },
        "at-least-250-people": {
          "label": "250 or more people"
        }
      }
    },
    "calibration-data-role": {
      "title": "Which GDPR role does the organisation have for the processing being assessed?",
      "prompt": "Your organisation may carry out several processing activities at the same time. Assess its GDPR role separately for each activity, based on who decides why personal data is used and the essential means of using it. Select both roles if you act as controller for some activities and processor for others.",
      "options": {
        "controller-role": {
          "label": "Controller",
          "description": "We decide, alone or jointly with others, why personal data is processed and its essential means.",
          "quote": "'controller' means the natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data",
          "reference": "GDPR Article 4(7)"
        },
        "processor-role": {
          "label": "Processor",
          "description": "Another organisation determines the purposes and essential means, and we process the data on its behalf.",
          "quote": "'processor' means a natural or legal person, public authority, agency or other body which processes personal data on behalf of the controller",
          "reference": "GDPR Article 4(8)"
        },
        "controller-and-processor-role": {
          "label": "Both controller and processor",
          "description": "We act as controller for some processing activities and as processor for other activities."
        }
      }
    },
    "calibration-data-origin": {
      "title": "Where does the organisation get personal data from?",
      "prompt": "Select every situation that applies.",
      "options": {
        "data-directly-from-person": {
          "label": "Directly from the person the data is about",
          "description": "For example, through forms, registrations, purchases, contracts, enquiries, job applications, support requests, or use of the organisation’s services.",
          "quote": "Where personal data relating to a data subject are collected from the data subject",
          "reference": "GDPR Article 13(1)"
        },
        "data-from-other-sources": {
          "label": "From another person, organisation, or source",
          "description": "For example, from a client, business partner, referral, public register, public website, social media page, or purchased list.",
          "quote": "Where personal data have not been obtained from the data subject",
          "reference": "GDPR Article 14(1)"
        }
      }
    },
    "calibration-eu-connection": {
      "title": "Does the GDPR apply to your organisation?",
      "prompt": "Select every Article 3 connection that applies. Select the final answer only if none apply.",
      "options": {
        "eu-establishment": {
          "label": "We are established in the EU/EEA",
          "description": "Use this where the processing is connected to an EU/EEA office, branch, or stable arrangement, even if the actual processing happens elsewhere.",
          "quote": "in the context of the activities of an establishment of a controller or a processor in the Union",
          "reference": "GDPR Article 3(1)"
        },
        "eu-goods-services": {
          "label": "We offer goods or services to people in the EU/EEA",
          "description": "Use this where a non-EU/EEA organisation offers goods or services to people in the EU/EEA. Payment is not required.",
          "quote": "the offering of goods or services, irrespective of whether a payment of the data subject is required",
          "reference": "GDPR Article 3(2)(a)"
        },
        "eu-behaviour-monitoring": {
          "label": "We monitor the behaviour of people in the EU/EEA",
          "description": "Use this where tracking, profiling, analytics, or similar monitoring concerns behaviour taking place in the EU/EEA.",
          "quote": "the monitoring of their behaviour as far as their behaviour takes place within the Union",
          "reference": "GDPR Article 3(2)(b)"
        },
        "no-eu-connection": {
          "label": "No EU/EEA connection identified",
          "description": "Use this only if none of the Article 3 EU/EEA connections above applies. The questionnaire will close with a territorial-scope note.",
          "quote": "This Regulation applies to the processing of personal data in the context of the activities of an establishment",
          "reference": "GDPR Article 3"
        }
      },
      "help": {
        "title": "European Union and European Economic Area",
        "text": "The European Economic Area (EEA) includes all EU countries plus Iceland, Liechtenstein and Norway. For this question, outside the EU/EEA means outside those countries."
      }
    },
    "calibration-processing-regularity": {
      "title": "Is personal-data processing a regular or ongoing part of the organisation's activities?",
      "prompt": "Select yes where personal data is handled as part of normal operations. Select no only for genuinely exceptional or from-time-to-time processing outside ordinary activities.",
      "options": {
        "processing-regular": {
          "label": "Yes, processing is regular or ongoing",
          "description": "This includes ordinary client, customer, account, order, booking, support, staff, supplier, marketing, analytics, or service records, even if the data is basic or deleted when the service ends."
        },
        "processing-occasional": {
          "label": "No, processing is only occasional",
          "description": "Use this only where personal data is handled exceptionally or incidentally, outside the organisation's normal recurring way of operating."
        }
      }
    },
    "calibration-processing-scale": {
      "title": "Is the processing likely to be large-scale?",
      "prompt": "The GDPR does not set a fixed number. Consider the number of people affected (including the share of the relevant population), the amount and variety of data, how long the processing continues and its geographical reach. Assess these factors together.",
      "options": {
        "large-scale-processing": {
          "label": "Yes, processing is likely large-scale",
          "description": "Examples include a hospital maintaining patient records, a bank or insurer handling its customers’ data, or a transport operator tracking journeys across a city. Compare the scale of your own activities with these examples."
        },
        "not-large-scale-processing": {
          "label": "No, processing is not large-scale",
          "description": "Examples include an individual doctor caring for their own patients or an individual lawyer managing their own clients’ cases. Processing is not large-scale simply because it is regular or an essential part of your service."
        }
      }
    }
  }
}
