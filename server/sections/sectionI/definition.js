export default {
  "section-i-transfer-situations": {
    "questions": [
      {
        "id": "section-i-transfer-situations",
        "type": "single-select",
        "required": true,
        "options": [
          {
            "id": "international-transfers-reported"
          },
          {
            "id": "no-international-transfers"
          }
        ]
      }
    ]
  },
  "section-i-transfer-mechanism": {
    "questions": [
      {
        "id": "section-i-transfer-mechanism",
        "type": "single-select",
        "required": true,
        "options": [
          {
            "id": "adequacy-decision"
          },
          {
            "id": "adequacy-not-all"
          }
        ]
      },
      {
        "id": "section-i-transfer-mechanism-alternatives",
        "type": "multi-select",
        "required": true,
        "showWhen": {
          "questionId": "section-i-transfer-mechanism",
          "optionId": "adequacy-not-all"
        },
        "options": [
          {
            "id": "standard-data-protection-clauses"
          },
          {
            "id": "binding-corporate-rules"
          },
          {
            "id": "approved-code-or-certification"
          },
          {
            "id": "public-authority-instrument"
          },
          {
            "id": "article-49-derogation"
          },
          {
            "id": "no-transfer-mechanism",
            "exclusive": true
          }
        ]
      }
    ]
  }
}
