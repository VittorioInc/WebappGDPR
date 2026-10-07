export default {
  "section-j-security-measures": {
    "questions": [
      {
        "id": "section-j-security-measures",
        "type": "multi-select",
        "required": true,
        "options": [
          {
            "id": "security-work-accounts"
          },
          {
            "id": "security-access-permissions"
          },
          {
            "id": "personal-data-encrypted"
          },
          {
            "id": "security-protected-communications"
          },
          {
            "id": "security-device-maintenance"
          },
          {
            "id": "security-timely-restoration"
          },
          {
            "id": "security-physical-protection"
          },
          {
            "id": "personal-data-pseudonymised"
          },
          {
            "id": "no-security-measures",
            "exclusive": true
          }
        ]
      }
    ]
  },
  "section-j-security-verification": {
    "questions": [
      {
        "id": "section-j-security-verification",
        "type": "multi-select",
        "required": true,
        "options": [
          {
            "id": "security-testing-and-correction"
          },
          {
            "id": "security-written-policies"
          },
          {
            "id": "no-security-verification-controls",
            "exclusive": true
          }
        ]
      }
    ]
  }
}
