// Language-independent validation and display structure.
export const calibrationQuestions = [
  {
    "id": "calibration-organisation-size",
    "type": "single-select",
    "required": true,
    "options": [
      {
        "id": "only-me"
      },
      {
        "id": "fewer-than-250-people"
      },
      {
        "id": "at-least-250-people"
      }
    ]
  },
  {
    "id": "calibration-data-role",
    "type": "single-select",
    "required": true,
    "options": [
      {
        "id": "controller-role"
      },
      {
        "id": "processor-role"
      },
      {
        "id": "controller-and-processor-role"
      }
    ]
  },
  {
    "id": "calibration-data-origin",
    "type": "multi-select",
    "required": true,
    "options": [
      {
        "id": "data-directly-from-person"
      },
      {
        "id": "data-from-other-sources"
      }
    ]
  },
  {
    "id": "calibration-eu-connection",
    "type": "multi-select",
    "required": true,
    "options": [
      {
        "id": "eu-establishment"
      },
      {
        "id": "eu-goods-services"
      },
      {
        "id": "eu-behaviour-monitoring"
      },
      {
        "id": "no-eu-connection",
        "exclusive": true
      }
    ]
  },
  {
    "id": "calibration-processing-regularity",
    "type": "single-select",
    "required": true,
    "options": [
      {
        "id": "processing-regular"
      },
      {
        "id": "processing-occasional"
      }
    ]
  },
  {
    "id": "calibration-processing-scale",
    "type": "single-select",
    "required": true,
    "options": [
      {
        "id": "large-scale-processing"
      },
      {
        "id": "not-large-scale-processing"
      }
    ]
  }
]
