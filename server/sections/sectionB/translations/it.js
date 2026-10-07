export default {
  "pages": {
    "section-b-special-category-data": {
      "title": "Sezione B - Categorie particolari di dati",
      "questions": {
        "section-b-special-category-data": {
          "title": "I dati personali individuati rientrano in queste categorie particolari dell articolo 9 GDPR?",
          "prompt": "Seleziona ogni categoria dell articolo 9 applicabile.",
          "references": [
            "GDPR articolo 9(1): categorie particolari di dati personali"
          ],
          "options": {
            "racial-ethnic-origin": {
              "label": "Origine razziale o etnica",
              "description": "Dati personali che rivelano l origine razziale o etnica."
            },
            "political-opinions": {
              "label": "Opinioni politiche",
              "description": "Dati personali che rivelano opinioni politiche."
            },
            "religious-philosophical-beliefs": {
              "label": "Convinzioni religiose o filosofiche",
              "description": "Dati personali che rivelano convinzioni religiose o filosofiche."
            },
            "trade-union-membership": {
              "label": "Appartenenza sindacale",
              "description": "Dati personali che rivelano l appartenenza sindacale."
            },
            "genetic-data": {
              "label": "Dati genetici",
              "description": "Dati genetici relativi a una persona."
            },
            "biometric-identification": {
              "label": "Dati biometrici per identificazione univoca",
              "description": "Dati biometrici trattati allo scopo di identificare in modo univoco una persona fisica."
            },
            "health-data": {
              "label": "Dati relativi alla salute",
              "description": "Dati personali relativi allo stato di salute, all assistenza o alle cure di una persona."
            },
            "sex-life-sexual-orientation": {
              "label": "Vita sessuale o orientamento sessuale",
              "description": "Dati personali relativi alla vita sessuale o all orientamento sessuale di una persona fisica."
            },
            "no-special-category-data": {
              "label": "Nessuna delle precedenti",
              "description": "Dalle risposte non sono state individuate categorie particolari di dati dell articolo 9."
            }
          }
        }
      }
    },
    "section-b-article-9-condition": {
      "title": "Sezione B - Condizioni dell articolo 9",
      "questions": {
        "section-b-article-9-condition": {
          "title": "Quale condizione dell articolo 9(2) GDPR permette di trattare quei dati di categoria particolare?",
          "prompt": "Per trattare lecitamente questi dati occorre almeno una condizione applicabile dell’articolo 9(2) per ogni finalità, oltre a una base giuridica ai sensi dell’articolo 6. Finalità diverse possono basarsi su condizioni diverse. Seleziona tutte le condizioni applicabili.",
          "references": [
            "GDPR articolo 9(2): exceptions for special-category trattamento"
          ],
          "options": {
            "special-data-processor-only": {
              "label": "Queste categorie particolari sono trattate solo per conto dei clienti",
              "description": "Non agiamo come titolare per questi dati."
            },
            "explicit-consent": {
              "label": "Consenso esplicito",
              "description": "L interessato ha prestato consenso esplicito per una o più finalità specifiche, salvo che la legge impedisca di basarsi sul consenso."
            },
            "employment-social-security-law": {
              "label": "Diritto del lavoro, sicurezza sociale o protezione sociale",
              "description": "Il trattamento è necessario per diritti o obblighi specifici in tali ambiti ed è autorizzato dalla legge applicabile o da un contratto collettivo."
            },
            "article-9-vital-interests": {
              "label": "Interessi vitali quando il consenso non può essere prestato",
              "description": "Il trattamento è necessario per tutelare interessi vitali quando l interessato è fisicamente o giuridicamente incapace di prestare consenso."
            },
            "not-for-profit-body": {
              "label": "Attività legittime di un ente senza scopo di lucro qualificato",
              "description": "Il trattamento è effettuato da una fondazione, associazione o altro ente senza scopo di lucro con finalità politica, filosofica, religiosa o sindacale, con garanzie."
            },
            "manifestly-public": {
              "label": "Dati resi manifestamente pubblici dall interessato",
              "description": "Il trattamento riguarda dati personali resi manifestamente pubblici dall interessato."
            },
            "legal-claims-courts": {
              "label": "Accertamento, esercizio o difesa di diritti in sede giudiziaria",
              "description": "Il trattamento è necessario per diritti in sede giudiziaria o quando le autorità giurisdizionali esercitano funzioni giurisdizionali."
            },
            "substantial-public-interest": {
              "label": "Interesse pubblico rilevante basato sulla legge",
              "description": "Il trattamento è necessario per motivi di interesse pubblico rilevante sulla base del diritto dell Unione o degli Stati membri, con garanzie adeguate."
            },
            "health-social-care": {
              "label": "Salute, medicina del lavoro o assistenza sociale",
              "description": "Il trattamento è necessario per medicina preventiva o del lavoro, diagnosi medica, assistenza sanitaria o sociale, o gestione dei relativi sistemi e servizi."
            },
            "public-health": {
              "label": "Sanità pubblica basata sulla legge",
              "description": "Il trattamento è necessario per motivi di interesse pubblico nel settore della sanità pubblica, sulla base del diritto dell Unione o degli Stati membri."
            },
            "research-statistics-archiving": {
              "label": "Archiviazione, ricerca o statistica basate sulla legge",
              "description": "Il trattamento è necessario per archiviazione nel pubblico interesse, ricerca scientifica o storica, o finalità statistiche con le garanzie dell articolo 89."
            },
            "no-article-9-condition": {
              "label": "Nessuna delle precedenti",
              "description": "Non è stata individuata alcuna condizione dell articolo 9 per il trattamento di categorie particolari."
            }
          },
          "variants": {
            "both": {
              "prompt": "Per questa domanda considera solo le attività in cui la tua organizzazione agisce come titolare. Se tratti queste categorie particolari esclusivamente per conto dei clienti, seleziona la relativa opzione qui sotto. Per trattare lecitamente questi dati occorre almeno una condizione applicabile dell’articolo 9(2) per ogni finalità, oltre a una base giuridica ai sensi dell’articolo 6. Finalità diverse possono basarsi su condizioni diverse. Seleziona tutte le condizioni applicabili."
            }
          }
        }
      }
    },
    "section-b-article-10-data": {
      "title": "Sezione B - Dati su condanne penali e reati",
      "questions": {
        "section-b-article-10-data": {
          "title": "La tua organizzazione tratta dati personali relativi a condanne penali, reati o misure di sicurezza connesse?",
          "prompt": "Per trattare lecitamente questi dati devi soddisfare almeno una delle due condizioni seguenti, oltre ad avere una base giuridica ai sensi dell’articolo 6. Seleziona tutte le condizioni applicabili oppure indica che non tratti questi dati.",
          "references": [
            "GDPR articolo 10: condanne penali, reati e misure di sicurezza connesse"
          ],
          "options": {
            "article-10-processor-data": {
              "label": "Sì",
              "description": ""
            },
            "article-10-official-authority-control": {
              "label": "Il trattamento è effettuato sotto il controllo dell autorità pubblica",
              "description": "I dati dell articolo 10 sono trattati sotto il controllo dell autorità pubblica, come richiesto dall articolo 10."
            },
            "article-10-law-authorised-safeguards": {
              "label": "Il trattamento è autorizzato dal diritto UE o nazionale con garanzie",
              "description": "Il trattamento è autorizzato dalla legge applicabile, che prevede garanzie adeguate per i diritti e le libertà degli interessati."
            },
            "no-article-10-data": {
              "label": "Non sono trattati dati dell articolo 10",
              "description": "Non sono stati individuati dati personali relativi a condanne penali, reati o misure di sicurezza connesse."
            }
          },
          "variants": {
            "processor": {
              "prompt": "Includi i dati che tratti per conto dei clienti, secondo le loro istruzioni.",
              "options": {
                "no-article-10-data": {
                  "label": "No",
                  "description": ""
                }
              }
            },
            "both": {
              "prompt": "Per le condizioni giuridiche qui sotto considera solo le attività in cui la tua organizzazione agisce come titolare. Se tratti questi dati esclusivamente per conto dei clienti, seleziona la relativa opzione. Per trattare lecitamente questi dati devi soddisfare almeno una delle due condizioni seguenti, oltre ad avere una base giuridica ai sensi dell’articolo 6. Seleziona tutte le condizioni applicabili oppure indica che non tratti questi dati.",
              "options": {
                "article-10-processor-data": {
                  "label": "Questi dati sono trattati solo per conto dei clienti",
                  "description": ""
                }
              }
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Sezione B",
    "guidance": {
      "title": "Sezione B - Categorie particolari e dati su condanne penali e reati",
      "condition": "Per ogni finalità che coinvolge categorie particolari di dati per cui agisci come titolare, verifica che sia soddisfatta una condizione applicabile dell’articolo 9, oltre alla base giuridica ordinaria. Selezionare una condizione nel questionario non dimostra che i relativi requisiti legali e le garanzie siano soddisfatti.",
      "criminal": "Per le attività in cui agisci come titolare, verifica che il trattamento sia effettivamente svolto sotto il controllo dell’autorità pubblica oppure autorizzato da una legge UE o nazionale applicabile che preveda garanzie appropriate. Una base giuridica ordinaria, compreso il consenso, non autorizza da sola il trattamento di dati su condanne penali o reati.",
      "identifyLaw": "Individua la legge che autorizza il tuo utilizzo dei dati e le garanzie che richiede.",
      "processor": "Per questi dati trattati per conto dei clienti, assicurati che l’accordo e le istruzioni documentate del titolare coprano le categorie interessate e le garanzie necessarie a proteggerle. Informa immediatamente il titolare se ritieni che un’istruzione violi la normativa sulla protezione dei dati."
    },
    "skipped": "Avete dichiarato di non trattare dati sensibili né dati relativi a condanne penali e reati; le verifiche delle condizioni giuridiche aggiuntive sono quindi state saltate."
  }
}
