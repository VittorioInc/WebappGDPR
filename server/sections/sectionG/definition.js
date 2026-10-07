export default {
  "section-g-rights-process": {
    "questions": [
      {
        "id": "section-g-rights-process",
        "type": "multi-select",
        "required": true,
        "options": [
          {
            "id": "rights-request-channel"
          },
          {
            "id": "rights-identity-check"
          },
          {
            "id": "rights-one-month-deadline"
          },
          {
            "id": "rights-free-of-charge-default"
          },
          {
            "id": "rights-request-records"
          },
          {
            "id": "no-rights-process",
            "exclusive": true
          }
        ]
      }
    ]
  },
  "section-g-rights-supported": {
    "questions": [
      {
        "id": "section-g-rights-supported",
        "type": "multi-select",
        "required": true,
        "options": [
          {
            "id": "right-access"
          },
          {
            "id": "right-rectification"
          },
          {
            "id": "right-erasure"
          },
          {
            "id": "right-restriction"
          },
          {
            "id": "right-recipient-notification"
          },
          {
            "id": "right-portability"
          },
          {
            "id": "right-objection"
          },
          {
            "id": "right-automated-decision"
          },
          {
            "id": "no-rights-supported",
            "exclusive": true
          }
        ]
      }
    ]
  }
}
