export default {
  "section-k-breach-notification-records": {
    "questions": [
      {
        "id": "section-k-breach-notification-records",
        "type": "multi-select",
        "required": true,
        "options": [
          {
            "id": "breach-authority-notification-process"
          },
          {
            "id": "breach-recordkeeping-process"
          },
          {
            "id": "no-breach-notification-records",
            "exclusive": true
          }
        ]
      }
    ]
  },
  "section-k-data-subject-communication": {
    "questions": [
      {
        "id": "section-k-data-subject-communication",
        "type": "single-select",
        "required": true,
        "options": [
          {
            "id": "breach-communication-process-in-place"
          },
          {
            "id": "no-breach-communication-process"
          }
        ]
      }
    ]
  },
  "section-k-processor-breach-reporting": {
    "questions": [
      {
        "id": "section-k-processor-breach-reporting",
        "type": "single-select",
        "required": true,
        "options": [
          {
            "id": "processor-breach-process-in-place"
          },
          {
            "id": "no-processor-breach-process"
          }
        ]
      }
    ]
  }
}
