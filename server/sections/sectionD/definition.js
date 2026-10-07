export default {
  "section-d-direct-notice-timing": {
    "questions": [
      {
        "id": "section-d-direct-notice-timing",
        "type": "single-select",
        "required": true,
        "options": [
          {
            "id": "direct-notice-at-collection"
          },
          {
            "id": "direct-notice-after-collection"
          },
          {
            "id": "no-direct-notice"
          },
          {
            "id": "direct-subject-already-informed"
          }
        ]
      }
    ]
  },
  "section-d-indirect-notice-timing": {
    "questions": [
      {
        "id": "section-d-indirect-notice-timing",
        "type": "single-select",
        "required": true,
        "options": [
          {
            "id": "indirect-notice-on-time"
          },
          {
            "id": "indirect-notice-late"
          },
          {
            "id": "no-indirect-notice"
          }
        ]
      }
    ]
  },
  "section-d-indirect-notice-exception": {
    "questions": [
      {
        "id": "section-d-indirect-notice-exception",
        "type": "multi-select",
        "required": true,
        "options": [
          {
            "id": "indirect-subject-already-informed"
          },
          {
            "id": "indirect-impossible-disproportionate"
          },
          {
            "id": "indirect-required-by-law"
          },
          {
            "id": "indirect-professional-secrecy"
          },
          {
            "id": "no-article-14-exception",
            "exclusive": true
          }
        ]
      }
    ]
  },
  "section-d-notice-content": {
    "questions": [
      {
        "id": "section-d-notice-content",
        "type": "multi-select",
        "required": true,
        "options": [
          {
            "id": "controller-identity-contact"
          },
          {
            "id": "dpo-contact-details"
          },
          {
            "id": "purposes-lawful-bases"
          },
          {
            "id": "legitimate-interests-notice"
          },
          {
            "id": "recipients-notice"
          },
          {
            "id": "transfers-safeguards-notice"
          },
          {
            "id": "retention-notice"
          },
          {
            "id": "rights-notice"
          },
          {
            "id": "withdraw-consent-notice"
          },
          {
            "id": "complaint-authority-notice"
          },
          {
            "id": "required-data-consequences-notice"
          },
          {
            "id": "indirect-source-notice"
          },
          {
            "id": "further-processing-notice"
          },
          {
            "id": "automated-decisions-notice"
          },
          {
            "id": "no-notice-content",
            "exclusive": true
          }
        ]
      }
    ]
  }
}
