export default {
  "section-c-governance-measures": {
    "questions": [
      {
        "id": "section-c-governance-measures",
        "type": "multi-select",
        "required": true,
        "options": [
          {
            "id": "data-protection-owner"
          },
          {
            "id": "written-data-protection-policy"
          },
          {
            "id": "staff-guidance-training"
          },
          {
            "id": "no-governance-measures",
            "exclusive": true
          }
        ]
      }
    ]
  },
  "section-c-dpo-triggers": {
    "questions": [
      {
        "id": "section-c-dpo-triggers",
        "type": "multi-select",
        "required": true,
        "options": [
          {
            "id": "large-scale-monitoring"
          },
          {
            "id": "large-scale-article-9-10-data"
          },
          {
            "id": "member-state-law-dpo-required"
          },
          {
            "id": "voluntary-dpo-designated"
          },
          {
            "id": "no-dpo-trigger",
            "exclusive": true
          }
        ]
      }
    ]
  },
  "section-c-dpo-designation": {
    "questions": [
      {
        "id": "section-c-dpo-designation",
        "type": "single-select",
        "required": true,
        "options": [
          {
            "id": "dpo-designated"
          },
          {
            "id": "dpo-not-designated"
          }
        ]
      }
    ]
  }
}
