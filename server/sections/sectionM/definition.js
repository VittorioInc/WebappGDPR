export default {
  "section-m-ropa-controller-content": {
    "questions": [
      {
        "id": "section-m-ropa-controller-content",
        "type": "multi-select",
        "required": true,
        "options": [
          {
            "id": "ropa-controller-identities-contacts"
          },
          {
            "id": "ropa-controller-purposes-data-categories"
          },
          {
            "id": "ropa-controller-recipients"
          },
          {
            "id": "ropa-controller-transfers"
          },
          {
            "id": "ropa-controller-erasure-periods"
          },
          {
            "id": "ropa-controller-security-measures"
          },
          {
            "id": "ropa-controller-none",
            "exclusive": true
          }
        ]
      }
    ]
  },
  "section-m-ropa-processor-content": {
    "questions": [
      {
        "id": "section-m-ropa-processor-content",
        "type": "multi-select",
        "required": true,
        "options": [
          {
            "id": "ropa-processor-identities-contacts"
          },
          {
            "id": "ropa-processor-processing-categories"
          },
          {
            "id": "ropa-processor-transfers"
          },
          {
            "id": "ropa-processor-security-measures"
          },
          {
            "id": "ropa-processor-none",
            "exclusive": true
          }
        ]
      }
    ]
  }
}
