export default {
  "section-l-dpia-screening": {
    "questions": [
      {
        "id": "section-l-dpia-screening",
        "type": "multi-select",
        "required": true,
        "options": [
          {
            "id": "automated-evaluation-significant-effects"
          },
          {
            "id": "large-scale-sensitive-data"
          },
          {
            "id": "large-scale-public-monitoring"
          },
          {
            "id": "authority-dpia-list"
          },
          {
            "id": "other-potential-high-risk-features"
          },
          {
            "id": "no-dpia-trigger",
            "exclusive": true
          }
        ]
      }
    ]
  },
  "section-l-dpia-content": {
    "questions": [
      {
        "id": "section-l-dpia-content",
        "type": "single-select",
        "required": true,
        "options": [
          {
            "id": "dpia-completed-all"
          },
          {
            "id": "dpia-completed-some"
          },
          {
            "id": "dpia-completed-none"
          }
        ]
      }
    ]
  }
}
