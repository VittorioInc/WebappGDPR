export default {
  "section-e-consent-conditions": {
    "questions": [
      {
        "id": "section-e-consent-conditions",
        "type": "multi-select",
        "required": true,
        "options": [
          {
            "id": "active-optional-consent"
          },
          {
            "id": "specific-informed-consent"
          },
          {
            "id": "clear-separate-consent-request"
          },
          {
            "id": "demonstrable-consent"
          },
          {
            "id": "explicit-consent-where-needed"
          },
          {
            "id": "no-consent-conditions",
            "exclusive": true
          }
        ]
      }
    ]
  },
  "section-e-consent-withdrawal": {
    "questions": [
      {
        "id": "section-e-consent-withdrawal",
        "type": "multi-select",
        "required": true,
        "options": [
          {
            "id": "withdrawal-notice-ready"
          },
          {
            "id": "easy-withdrawal-method"
          },
          {
            "id": "withdrawal-response-ready"
          },
          {
            "id": "no-consent-withdrawal",
            "exclusive": true
          }
        ]
      }
    ]
  }
}
