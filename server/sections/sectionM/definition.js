export default {
  "section-m-ropa-content": {
    "questions": [
      {
        "id": "section-m-ropa-content",
        "type": "multi-select",
        "required": true,
        "optionGroups": [
          {
            "id": "controller",
            "optionIds": [
              "ropa-controller-identities-contacts",
              "ropa-controller-purposes-data-categories",
              "ropa-controller-recipients",
              "ropa-controller-transfers",
              "ropa-controller-erasure-periods",
              "ropa-controller-security-measures",
              "ropa-controller-none"
            ]
          },
          {
            "id": "processor",
            "optionIds": [
              "ropa-processor-identities-contacts",
              "ropa-processor-processing-categories",
              "ropa-processor-transfers",
              "ropa-processor-security-measures",
              "ropa-processor-none"
            ]
          }
        ],
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
          },
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
