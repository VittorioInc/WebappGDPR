export default {
  "section-f-child-involvement": {
    "questions": [
      {
        "id": "section-f-child-involvement",
        "type": "multi-select",
        "required": true,
        "options": [
          {
            "id": "children-data-handled"
          },
          {
            "id": "child-directed-information"
          },
          {
            "id": "child-consent-online-service"
          },
          {
            "id": "child-marketing-profiling"
          },
          {
            "id": "no-children-involved",
            "exclusive": true
          }
        ]
      }
    ]
  },
  "section-f-child-consent": {
    "questions": [
      {
        "id": "section-f-child-consent",
        "type": "single-select",
        "required": true,
        "options": [
          {
            "id": "child-above-threshold-consent"
          },
          {
            "id": "parental-authorisation-under-threshold"
          },
          {
            "id": "no-child-consent-process"
          }
        ]
      }
    ]
  },
  "section-f-parental-authorisation": {
    "questions": [
      {
        "id": "section-f-parental-authorisation",
        "type": "multi-select",
        "required": true,
        "options": [
          {
            "id": "parental-authorisation-verified"
          },
          {
            "id": "child-consent-records-kept"
          },
          {
            "id": "no-parental-authorisation-measures",
            "exclusive": true
          }
        ]
      }
    ]
  }
}
