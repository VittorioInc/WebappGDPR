export default {
  "section-a-data-types": {
    "questions": [
      {
        "id": "section-a-data-types",
        "type": "multi-select",
        "required": true,
        "allowSelectAll": true,
        "options": [
          {
            "id": "basic-details"
          },
          {
            "id": "government-identifiers"
          },
          {
            "id": "ip-addresses"
          },
          {
            "id": "advertising-ids"
          },
          {
            "id": "location-data"
          },
          {
            "id": "device-identifiers"
          },
          {
            "id": "account-identifiers"
          },
          {
            "id": "employment-details"
          },
          {
            "id": "payment-details"
          },
          {
            "id": "communications"
          },
          {
            "id": "none-of-the-above",
            "exclusive": true
          }
        ]
      }
    ]
  },
  "section-a-no-data-confirm": {
    "questions": [
      {
        "id": "section-a-no-data-confirm",
        "type": "single-select",
        "required": true,
        "options": [
          {
            "id": "no-personal-data-confirmed"
          }
        ]
      }
    ]
  },
  "section-a-lawful-basis": {
    "questions": [
      {
        "id": "section-a-lawful-basis",
        "type": "multi-select",
        "required": true,
        "options": [
          {
            "id": "consent"
          },
          {
            "id": "contract"
          },
          {
            "id": "legal-obligation"
          },
          {
            "id": "vital-interests"
          },
          {
            "id": "legitimate-interests"
          },
          {
            "id": "no-article-6-basis",
            "exclusive": true
          }
        ]
      }
    ]
  },
  "section-a-processing-purposes": {
    "questions": [
      {
        "id": "section-a-processing-purposes",
        "type": "multi-select",
        "required": true,
        "options": [
          {
            "id": "products-services"
          },
          {
            "id": "customer-relationships"
          },
          {
            "id": "marketing-advertising"
          },
          {
            "id": "analytics-improvement"
          },
          {
            "id": "payments-accounting"
          },
          {
            "id": "employment-administration"
          },
          {
            "id": "legal-compliance"
          },
          {
            "id": "security-fraud-access"
          },
          {
            "id": "internal-administration"
          }
        ]
      }
    ]
  }
}
