export default {
  "pages": {
    "section-d-direct-notice-timing": {
      "title": "Sezione D - Informazioni fornite direttamente",
      "questions": {
        "section-d-direct-notice-timing": {
          "title": "Quando le persone forniscono dati personali direttamente all'organizzazione, quando vengono mostrate loro informazioni che spiegano come saranno utilizzati?",
          "prompt": "Scegli la risposta che descrive meglio la prassi abituale dell'organizzazione.",
          "references": [
            "GDPR articolo 13(1)-(2): informazioni fornite quando sono ottenuti i dati personali",
            "GDPR articolo 13(4): eccezione quando l'interessato dispone già delle informazioni"
          ],
          "options": {
            "direct-notice-at-collection": {
              "label": "Prima o nel momento in cui i dati sono raccolti",
              "description": "Per esempio, le informazioni sono mostrate accanto a un modulo, durante la registrazione o prima che la persona invii i propri dati."
            },
            "direct-notice-after-collection": {
              "label": "Solo dopo che i dati sono già stati raccolti",
              "description": "La persona riceve le informazioni dopo aver inviato o fornito i propri dati."
            },
            "no-direct-notice": {
              "label": "Queste informazioni non vengono mostrate",
              "description": "L'organizzazione non fornisce informazioni privacy quando ottiene i dati direttamente dalla persona."
            },
            "direct-subject-already-informed": {
              "label": "La persona dispone già di tutte le informazioni richieste",
              "description": "Usa questa risposta solo quando le stesse informazioni richieste sono già state fornite e sono ancora corrette."
            }
          }
        }
      }
    },
    "section-d-indirect-notice-timing": {
      "title": "Sezione D - Informazioni ottenute altrove",
      "questions": {
        "section-d-indirect-notice-timing": {
          "title": "Quando l'organizzazione riceve dati personali da un'altra fonte, quando viene informata la persona cui si riferiscono?",
          "prompt": "Scegli la risposta che descrive meglio la prassi abituale dell'organizzazione.",
          "references": [
            "GDPR articolo 14(3): tempi dell'informativa quando i dati provengono da un'altra fonte"
          ],
          "options": {
            "indirect-notice-on-time": {
              "label": "Entro un mese e, quando applicabile, non oltre il primo contatto o la prima comunicazione a terzi",
              "description": "Le informazioni sono fornite entro un termine ragionevole e prima di ogni altra scadenza anticipata applicabile dell'articolo 14."
            },
            "indirect-notice-late": {
              "label": "Solo dopo una o più di queste scadenze",
              "description": "La persona è informata solo dopo un mese, il primo contatto o la prima comunicazione a terzi, secondo il caso."
            },
            "no-indirect-notice": {
              "label": "La persona non viene informata",
              "description": "L'organizzazione non fornisce informazioni privacy alla persona cui si riferiscono i dati ottenuti altrove."
            }
          }
        }
      }
    },
    "section-d-indirect-notice-exception": {
      "title": "Sezione D - Eccezioni dell articolo 14",
      "questions": {
        "section-d-indirect-notice-exception": {
          "title": "Perché la persona non viene informata?",
          "prompt": "Seleziona tutte le situazioni applicabili ai dati personali ottenuti altrove.",
          "references": [
            "GDPR articolo 14(5): eccezioni all'obbligo di fornire le informazioni dell'articolo 14"
          ],
          "options": {
            "indirect-subject-already-informed": {
              "label": "La persona dispone già delle informazioni richieste",
              "description": "L'organizzazione può dimostrare che la persona ha già ricevuto le informazioni richieste."
            },
            "indirect-impossible-disproportionate": {
              "label": "Informare ogni persona è impossibile o richiede uno sforzo sproporzionato e sono usate misure alternative",
              "description": "L'organizzazione ha documentato il motivo e usa misure appropriate, compresa, quando opportuno, la pubblicazione delle informazioni."
            },
            "indirect-required-by-law": {
              "label": "Il diritto dell'UE o nazionale disciplina espressamente l'ottenimento o la comunicazione dei dati",
              "description": "La legge individuata richiede l'attività e prevede misure appropriate per proteggere gli interessi legittimi della persona."
            },
            "indirect-professional-secrecy": {
              "label": "I dati devono restare riservati in forza di un obbligo di segreto disciplinato dalla legge",
              "description": "Un obbligo di segreto professionale o previsto dalla legge impedisce di fornire le informazioni."
            },
            "no-article-14-exception": {
              "label": "Nessuna delle precedenti",
              "description": "Non è stata individuata alcuna eccezione dell'articolo 14 che giustifichi la mancata informazione della persona."
            }
          }
        }
      }
    },
    "section-d-notice-content": {
      "title": "Sezione D - Contenuto dell informativa",
      "questions": {
        "section-d-notice-content": {
          "title": "Quali informazioni sono incluse nell informativa privacy?",
          "prompt": "Seleziona ogni elemento degli articoli 13 o 14 applicabile.",
          "references": [
            "GDPR articolo 13(1)-(2): informazioni quando i dati personali sono raccolti presso l interessato",
            "GDPR articolo 14(1)-(2): informazioni quando i dati personali non sono ottenuti presso l interessato",
            "GDPR articolo 13(3) and Article 14(4): further trattamento for another purpose"
          ],
          "options": {
            "controller-identity-contact": {
              "label": "Identità e dati di contatto del titolare",
              "description": "L informativa identifica il titolare e fornisce i suoi dati di contatto."
            },
            "dpo-contact-details": {
              "label": "Dati di contatto del DPO, se applicabile",
              "description": "L informativa include i dati di contatto del responsabile della protezione dei dati se esiste un DPO."
            },
            "purposes-lawful-bases": {
              "label": "Finalità e basi giuridiche",
              "description": "L informativa spiega perché i dati sono trattati e la base giuridica per ciascuna finalità."
            },
            "legitimate-interests-notice": {
              "label": "Interessi legittimi quando invocati",
              "description": "Se sono usati interessi legittimi, l informativa identifica tali interessi."
            },
            "recipients-notice": {
              "label": "Destinatari o categorie di destinatari",
              "description": "L informativa identifica chi riceve i dati personali o le relative categorie di destinatari."
            },
            "transfers-safeguards-notice": {
              "label": "Trasferimenti internazionali e garanzie, se applicabili",
              "description": "L informativa copre trasferimenti verso paesi terzi o organizzazioni internazionali."
            },
            "retention-notice": {
              "label": "Periodo di conservazione o criteri",
              "description": "L informativa indica per quanto tempo i dati sono conservati o i criteri per determinarlo."
            },
            "rights-notice": {
              "label": "Diritti dell interessato",
              "description": "L informativa spiega i diritti di accesso, rettifica, cancellazione, limitazione, opposizione e portabilità."
            },
            "withdraw-consent-notice": {
              "label": "Diritto di revocare il consenso, se pertinente",
              "description": "Se si usa il consenso, l informativa spiega che il consenso può essere revocato."
            },
            "complaint-authority-notice": {
              "label": "Diritto di proporre reclamo a un autorità di controllo",
              "description": "L informativa comunica agli interessati che possono proporre reclamo a un autorità di controllo."
            },
            "required-data-consequences-notice": {
              "label": "Se fornire i dati è obbligatorio e le conseguenze del mancato conferimento",
              "description": "Quando i dati sono raccolti dall interessato, l informativa spiega requisiti legali, contrattuali o necessari."
            },
            "indirect-source-notice": {
              "label": "Fonte e categorie di dati per dati ottenuti indirettamente",
              "description": "Quando i dati non provengono dall interessato, l informativa copre fonte e categorie."
            },
            "further-processing-notice": {
              "label": "Informativa prima di usare i dati per una nuova finalità",
              "description": "Se i dati saranno usati per un altra finalità, ulteriori informazioni sono fornite prima di tale uso."
            },
            "automated-decisions-notice": {
              "label": "Decisioni automatizzate o profilazione, se applicabili",
              "description": "L informativa copre informazioni significative sulle decisioni automatizzate o sulla profilazione applicabili."
            },
            "no-notice-content": {
              "label": "Nessuna delle precedenti",
              "description": "Dalle risposte non è stato individuato alcun contenuto obbligatorio dell informativa."
            }
          },
          "suggestionNotice": "Suggerito dalle risposte precedenti. Puoi modificarlo prima di continuare."
        }
      }
    }
  },
  "assessment": {
    "label": "Sezione D",
    "guidance": {
      "title": "Sezione D - Informazioni sul trattamento",
      "directTiming": "Fornisci le informazioni richieste sul trattamento quando raccogli i dati della persona. Ad esempio, inseriscile accanto a un modulo di raccolta o rendile disponibili prima che la persona fornisca i propri dati. Non occorre ripetere le informazioni che la persona possiede già, ma devi fornire quelle mancanti o modificate.",
      "indirectTiming": "Organizza l’informazione delle persone entro un termine ragionevole dopo aver ottenuto i loro dati, al più tardi entro un mese. Se le contatti o comunichi i loro dati a un altro destinatario prima di allora, fornisci le informazioni entro quel primo contatto o quella prima comunicazione dei dati. Un’eccezione si applica solo alle informazioni e ai trattamenti che soddisfano le sue condizioni. Se copre solo una parte dei tuoi trattamenti, devi comunque fornire le altre informazioni richieste.",
      "alreadyInformed": "Verifica che la persona disponga già di informazioni complete e accurate sul tuo trattamento. Conserva elementi che dimostrino questa conclusione.",
      "exceptionScope": "Verifica che siano soddisfatte le condizioni di ogni eccezione su cui fai affidamento. Un’eccezione si applica solo alle informazioni e ai trattamenti che soddisfano le sue condizioni. Se copre solo una parte dei tuoi trattamenti, devi comunque fornire le altre informazioni richieste.",
      "exceptions": {
        "indirect-subject-already-informed": "Verifica che la persona disponga già di informazioni complete e accurate sul tuo trattamento. Conserva elementi che dimostrino questa conclusione.",
        "indirect-impossible-disproportionate": "Documenta perché informare individualmente le persone è impossibile o sproporzionato e quali misure proteggono i loro diritti. Rendi le informazioni pubblicamente disponibili. Il solo costo o disagio non dimostra che l’eccezione sia applicabile.",
        "indirect-required-by-law": "Individua la specifica disposizione di legge e verifica che disciplini espressamente l’ottenimento o la comunicazione dei dati e preveda misure di protezione appropriate.",
        "indirect-professional-secrecy": "Individua l’obbligo legale di segretezza e verifica quali informazioni impedisca di fornire."
      }
    },
    "outcomes": {
      "controllerNoticeSkipped": "Le verifiche dell’informativa del titolare sono state saltate per il vostro ruolo di solo responsabile. Restano rilevanti gli obblighi di assistenza ai clienti.",
      "noticeReported": "Avete dichiarato di fornire tempestivamente le informazioni e di includere tutti gli argomenti dell’informativa valutati qui. Gli obblighi informativi condizionali dipendono dal trattamento effettivo."
    },
    "communication": {
      "title": "Requisiti di presentazione dell'informativa privacy",
      "intro": "Il questionario non verifica separatamente la qualità della presentazione. Applica tutti questi requisiti dell'articolo 12 quando prepari o riesamini l'informativa privacy:",
      "items": [
        "Mantieni le informazioni concise e trasparenti.",
        "Rendile intellegibili, facili da comprendere e facilmente accessibili.",
        "Usa un linguaggio chiaro e semplice, adatto ai destinatari.",
        "Forniscile per iscritto o con un altro mezzo appropriato, anche elettronico. Forniscile oralmente su richiesta quando l'identità della persona è comprovata con altri mezzi.",
        "Usa un linguaggio facilmente comprensibile per un minore quando le informazioni sono rivolte specificamente ai minori.",
        "Fornisci gratuitamente le informazioni richieste dagli articoli 13 e 14."
      ],
      "reference": "Articolo 12(1) e articolo 12(5) GDPR"
    }
  }
}
