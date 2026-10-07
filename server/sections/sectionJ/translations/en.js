export default {
  "pages": {
    "section-j-security-measures": {
      "title": "Section J - Security Measures",
      "questions": {
        "section-j-security-measures": {
          "title": "Which measures does your organisation currently use to protect personal data?",
          "prompt": "Select all that apply, including measures provided by your IT supplier. Consider what could happen if the data were lost, changed or accessed without permission, and the possible harm to people. The examples illustrate possible solutions; you do not need every technology mentioned.",
          "notice": "These examples suggest good security practices; they do not establish GDPR compliance. Your organisation must assess its processing, the risks and possible harm to people, then implement and regularly review appropriate protection. Some examples may not be necessary, while additional measures may be needed. Selecting an answer does not guarantee that protection is sufficient.",
          "references": [
            "GDPR Article 32(1)-(2): choose security measures appropriate to processing risks and possible harm to people",
            "GDPR Article 32(1)(a): pseudonymisation and encryption of personal data",
            "GDPR Article 32(1)(b): ongoing confidentiality, integrity, availability, and resilience",
            "GDPR Article 32(1)(c): timely restoration of availability and access after an incident",
            "GDPR Article 32(2): protection against accidental or unlawful destruction, loss, alteration, disclosure, or access"
          ],
          "options": {
            "security-work-accounts": {
              "label": "Employees and other authorised workers use individual, protected work accounts",
              "description": "Give each employee, contractor or other authorised worker their own account for work email, shared files and business applications. Avoid sharing one username and password. Enable two-step verification for work accounts and use a password manager for strong, unique passwords.\n\nEach employee has their own company email account. Signing in requires their password and confirmation through an authenticator app or security key. When someone leaves, the business disables their account."
            },
            "security-access-permissions": {
              "label": "Staff can access only the files needed for their work",
              "description": "Create separate folders for activities such as Payroll, Customers and General Administration. Give named employees access only to the folders they need. Choose “Viewer” when someone only needs to read files and “Editor” when they need to change them.\n\nFor example, a business using Google Drive could keep its Payroll folder’s general access set to “Restricted”, with access limited to the owner and payroll worker. Its accountant could receive access only to the documents needed. In this example, the business would also check that a wider shared folder or group does not already grant access to other people."
            },
            "personal-data-encrypted": {
              "label": "Stored personal data is protected by encryption",
              "description": "Use encryption for stored data where appropriate, particularly on laptops, removable drives and backups that could be lost or stolen. Protect recovery keys and keep them available to authorised people.\n\nA business laptop should use Windows BitLocker, Mac FileVault or similar encryption software. This helps prevent someone who steals the laptop from reading its stored files without the necessary credentials or key. A normal login password alone is not the same as disk encryption."
            },
            "security-protected-communications": {
              "label": "Personal data is protected during communications and sharing",
              "description": "Use approved work email, messaging, calling and file-sharing services with encryption and suitable access settings. Check recipients and meeting participants before sharing personal information.\n\nShare documents through links restricted to named recipients. For sensitive discussions, consider end-to-end encrypted messages or calls. If staff need remote access to systems inside the office network, consider using a VPN."
            },
            "security-device-maintenance": {
              "label": "Devices and software are maintained to reduce security threats",
              "description": "Use supported software, install security updates promptly and enable suitable protection against malicious software and unwanted network connections.\n\nWork computers receive operating-system and browser updates automatically, run updated antivirus protection, have a firewall enabled and lock their screens after inactivity. Include personal devices used for work in these arrangements."
            },
            "security-timely-restoration": {
              "label": "Personal data is backed up and can be restored",
              "description": "Keep three copies of important data across two storage types, with one copy off-site. Keep at least one backup disconnected, protect it with encryption, and periodically check that restoration works.\n\nA simpler arrangement is business cloud storage plus a separate encrypted external-drive backup, disconnected and securely stored after use. This offers less protection if the backup fails or becomes outdated. Cloud synchronisation alone is not an independent backup.\n\nChoose backup frequency according to how much information could be lost and the resulting harm or disruption. Daily backups may suit some activities; others need more frequent copies.",
              "descriptionLinks": [
                {
                  "label": "ENISA: secure backups, section 5.3.7 (opens in a new tab)",
                  "href": "https://www.enisa.europa.eu/sites/default/files/publications/ENISA%20Report%20-%20Cybersecurity%20for%20SMES%20Challenges%20and%20Recommendations.pdf#page=43"
                },
                {
                  "label": "ENISA: cybersecurity guide for small businesses (opens in a new tab)",
                  "href": "https://www.enisa.europa.eu/publications/cybersecurity-guide-for-smes"
                }
              ]
            },
            "security-physical-protection": {
              "label": "Paper records and equipment are protected against unauthorised physical access",
              "description": "Control access to places where personal data is stored or used, including offices, filing cabinets and rooms containing IT equipment.\n\nEmployee files are kept in a locked cabinet whose keys are held by authorised staff. Visitors are accompanied in working areas, and equipment containing personal data is not left accessible in public areas."
            },
            "personal-data-pseudonymised": {
              "label": "Names and other identifying details are replaced with codes where identities are unnecessary",
              "description": "Where a task does not require knowing someone’s identity, work with coded records and keep the information linking codes to people separately, with restricted access. This is called pseudonymisation.\n\nA customer-analysis dataset uses customer codes and excludes names and contact details. The separate table linking codes to customers is accessible only to authorised staff. Other identifying details must also be considered; replacing names alone may not be sufficient. The data remains personal data."
            },
            "no-security-measures": {
              "label": "None of the measures listed above",
              "description": "None of these listed measures is currently used."
            }
          }
        }
      }
    },
    "section-j-security-verification": {
      "title": "Section J - Security Checks and Policies",
      "questions": {
        "section-j-security-verification": {
          "title": "How does your organisation maintain and document its data security?",
          "prompt": "Select every practice currently in place.",
          "references": [
            "GDPR Article 32(1)(d): regularly test, assess, and evaluate security measures",
            "GDPR Article 24(1)-(2): controllers must implement and review appropriate measures, including data protection policies where proportionate to their processing",
            "GDPR Article 32(4): people with access process personal data only on the controller instructions unless required by law"
          ],
          "options": {
            "security-testing-and-correction": {
              "label": "We periodically check our security measures and correct identified weaknesses.",
              "description": "Periodically check that the measures you rely on work as intended. For example, restore sample backup files and check that security updates are being installed. Address weaknesses found and keep a brief record of the checks and corrective action."
            },
            "security-written-policies": {
              "label": "We have written security policies that are kept up to date and put into practice.",
              "description": "Write down the security rules and responsibilities relevant to your organisation, including approved tools, account protection, sharing information, backups and reporting incidents. Make these instructions available to employees and other authorised workers, and explain the rules relevant to their work.\n\nA short, clearly written document may be suitable for a small business, depending on its processing and risks. Keep a dated version and update it when practices or risks change."
            },
            "no-security-verification-controls": {
              "label": "None of the above",
              "description": "Neither of these listed practices is currently in place."
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Section J",
    "guidance": {
      "title": "Section J - Data Security",
      "practiceChecks": "Regularly check whether your personal-data security measures work and correct identified weaknesses. For a small business, this could include testing a backup restoration and checking updates and access permissions. Assign responsibility, choose a frequency suited to your risks, and keep a brief record of checks and fixes.",
      "policyController": "Where proportionate to your processing activities, document your security rules and responsibilities. A small business may use a short document covering accounts, sharing, backups and incidents, or equivalent existing documentation. Make the rules available to workers, explain them, put them into practice and update them when needed.",
      "policyProcessor": "Document the security procedures and responsibilities needed to protect your clients’ personal data and follow their instructions. Existing procedures may already cover this. Ensure workers understand and apply the rules, and update them when your processing or risks change.",
      "riskContext": "Choose security measures according to the personal data you handle, how you use it, and the likelihood and seriousness of harm if it is lost, changed, disclosed or accessed without permission. Consider available technology, implementation costs and protection already provided by your suppliers. Review protection as activities, threats or incidents change. The examples below are practical starting points: selecting measures does not guarantee sufficient protection, and an unchecked category may be unnecessary or addressed through equivalent safeguards.",
      "noneReported": "You reported using none of the listed security measures. Review the protection currently in place, including any equivalent arrangements, and address risks that are not adequately controlled. This answer does not establish that you have no protection or confirm a GDPR breach.",
      "measures": {
        "security-work-account-protection": "Where employees, contractors or other authorised workers use business systems containing personal data, provide individual work accounts with strong, unique passwords and two-step verification. A password manager can help. Disable accounts when access is no longer needed.",
        "security-access-permissions": "Where staff access personal data, limit access to what their work requires. For example, separate payroll and customer folders, grant access to named workers, and use read-only permissions when editing is unnecessary. Check inherited permissions and remove outdated access.",
        "security-stored-data-encryption": "Assess whether encryption is needed to protect stored personal data, particularly on laptops, removable drives and backups that could be lost or stolen. Built-in tools such as BitLocker or FileVault may help. Protect recovery keys and keep them available to authorised people.",
        "security-communications-and-sharing": "When communicating or sharing personal data, use suitable work services and check recipients, participants and access settings. Restrict shared links to intended recipients where appropriate. Consider stronger protection for sensitive communications and a VPN where staff need remote access to the office network.",
        "security-device-and-software-protection": "Where devices handle personal data, use supported software, install security updates promptly and enable suitable malware protection, firewalls and automatic screen locking. Include personal devices used for work; your IT supplier can help configure these protections.",
        "security-backups-and-recovery": "Where losing access to personal data could harm people or disrupt essential activities, arrange protected backups and timely restoration. Consider three copies across two storage types, with one off-site. A lighter option is business cloud storage plus a separate encrypted, disconnected drive, but this offers less protection if that backup fails or becomes outdated. Cloud synchronisation alone is not an independent backup. Choose frequency according to the risks and periodically check that restoration works.",
        "security-physical-access-protection": "Where paper records or equipment contain personal data, prevent unauthorised physical access. Practical measures include locked filing cabinets, controlled keys, accompanied visitors and secure storage of laptops and drives. Adapt protection to the premises and risks.",
        "security-pseudonymisation-where-appropriate": "Where a task does not require knowing people’s identities, consider using coded records and keeping the identifying information separately with restricted access. For example, analyse customer purchases using customer codes rather than names. Consider other identifying details too; coded data remains personal data."
      },
      "edpbLink": {
        "label": "EDPB: securing personal data",
        "url": "https://www.edpb.europa.eu/sme/be-compliant/secure-personal-data_en"
      },
      "enisaLink": {
        "label": "ENISA: cybersecurity guide for small businesses",
        "url": "https://www.enisa.europa.eu/publications/cybersecurity-guide-for-smes"
      },
      "backupLink": {
        "label": "ENISA: secure backups, section 5.3.7",
        "url": "https://www.enisa.europa.eu/sites/default/files/publications/ENISA%20Report%20-%20Cybersecurity%20for%20SMES%20Challenges%20and%20Recommendations.pdf#page=43"
      }
    },
    "outcomes": {
      "securityReported": "You report all eight security categories and both maintenance practices assessed here. Whether the protection is sufficient still depends on your processing risks."
    }
  }
}
