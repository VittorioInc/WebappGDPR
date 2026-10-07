export default {
  "pages": {
    "section-m-ropa-content": {
      "title": "Sezione M - Registri delle attività di trattamento",
      "questions": {
        "section-m-ropa-content": {
          "title": "Quali informazioni sono incluse nel registro delle attività di trattamento (RoPA) dell’organizzazione?",
          "prompt": "Seleziona le informazioni incluse in ciascuna lista mostrata per il ruolo o i ruoli selezionati.",
          "explanation": "Il RoPA descrive come l’organizzazione utilizza i dati personali. Può bastare un foglio di calcolo; non è necessario un software dedicato. Descrivi attività come paghe, selezione del personale o gestione dei clienti, invece di elencare i dati delle singole persone.\n\nConserva il registro in forma scritta, anche elettronica, mantienilo aggiornato e rendilo disponibile all’autorità di controllo su richiesta. Se operi sia come titolare sia come responsabile, rispondi a entrambe le liste per i rispettivi registri.",
          "references": [
            "GDPR articolo 30(1): contenuti del registro del titolare e condizioni previste per specifiche voci",
            "GDPR articolo 30(2): contenuti del registro del responsabile e condizioni previste per specifiche voci",
            "GDPR articolo 30(3)-(4): registri scritti o elettronici disponibili all’autorità di controllo su richiesta",
            "GDPR articolo 30(5): l’esenzione per chi ha meno di 250 dipendenti dipende anche da frequenza, rischi e categorie di dati",
            "Documento sull’articolo 30(5) approvato dall’EDPB: valutare l’esenzione per attività di trattamento"
          ],
          "exemptionNotice": "Le risposte precedenti indicano che l’organizzazione ha meno di 250 dipendenti, tratta dati personali solo occasionalmente e non tratta categorie particolari di dati personali (articolo 9) né dati relativi a condanne penali e reati (articolo 10). Se inoltre è improbabile che il trattamento comporti un rischio per i diritti e le libertà delle persone, potresti beneficiare di un’esenzione dalla tenuta del RoPA. Raccomandiamo comunque di crearlo per organizzare e dimostrare le pratiche di protezione dei dati.",
          "groupTitles": {
            "controller": "Il registro come titolare del trattamento",
            "processor": "Il registro come responsabile del trattamento"
          },
          "options": {
            "ropa-controller-identities-contacts": {
              "label": "Chi è responsabile e come contattarlo",
              "description": "Il nome e i dati di contatto dell’organizzazione e, ove applicabile, del contitolare, del rappresentante del titolare e del DPO."
            },
            "ropa-controller-purposes-data-categories": {
              "label": "Perché si usano i dati personali, a chi si riferiscono e quali informazioni sono coinvolte",
              "description": "Registra le finalità del trattamento e le categorie di persone e di dati personali coinvolte. Ad esempio: gestione delle paghe; dipendenti; dati identificativi, retributivi e bancari."
            },
            "ropa-controller-recipients": {
              "label": "Con chi vengono condivisi i dati personali",
              "description": "Registra le categorie di destinatari a cui i dati sono stati o saranno comunicati, inclusi quelli fuori dall’UE/SEE e le organizzazioni internazionali. Ad esempio: fornitori di servizi paghe, commercialisti e autorità pubbliche."
            },
            "ropa-controller-transfers": {
              "label": "Trasferimenti internazionali, ove applicabile",
              "description": "Individua i trasferimenti verso paesi fuori dall’UE/SEE o organizzazioni internazionali, indicandone la destinazione. Per i trasferimenti basati sulla deroga eccezionale dei legittimi interessi cogenti prevista dall’articolo 49(1), secondo comma, documenta anche le garanzie adeguate."
            },
            "ropa-controller-erasure-periods": {
              "label": "Termini previsti per la cancellazione, ove possibile",
              "description": "Indica i termini previsti per cancellare le diverse categorie di dati personali."
            },
            "ropa-controller-security-measures": {
              "label": "Una descrizione generale delle misure di sicurezza, ove possibile",
              "description": "Descrivi le misure di sicurezza tecniche e organizzative, come limitazioni degli accessi, cifratura e copie di backup."
            },
            "ropa-controller-none": {
              "label": "Nessuna delle precedenti",
              "description": "Seleziona questa opzione anche se l’organizzazione non dispone di un registro per le attività svolte come titolare."
            },
            "ropa-processor-identities-contacts": {
              "label": "L’organizzazione e i titolari per cui opera",
              "description": "I nomi e i dati di contatto del responsabile o dei responsabili e di ciascun titolare per cui operano, nonché, ove applicabile, del rappresentante del titolare o del responsabile e del DPO."
            },
            "ropa-processor-processing-categories": {
              "label": "Quali trattamenti vengono svolti per ciascun titolare",
              "description": "Descrivi le categorie di trattamenti svolti per conto di ciascun titolare. Ad esempio: hosting di archivi clienti, amministrazione delle paghe o servizi di assistenza ai clienti."
            },
            "ropa-processor-transfers": {
              "label": "Trasferimenti internazionali, ove applicabile",
              "description": "Individua i trasferimenti verso paesi fuori dall’UE/SEE o organizzazioni internazionali, indicandone la destinazione. Per i trasferimenti basati sulla deroga eccezionale dei legittimi interessi cogenti prevista dall’articolo 49(1), secondo comma, documenta anche le garanzie adeguate."
            },
            "ropa-processor-security-measures": {
              "label": "Una descrizione generale delle misure di sicurezza, ove possibile",
              "description": "Descrivi le misure di sicurezza tecniche e organizzative, come limitazioni degli accessi, cifratura e copie di backup."
            },
            "ropa-processor-none": {
              "label": "Nessuna delle precedenti",
              "description": "Seleziona questa opzione anche se l’organizzazione non dispone di un registro per le attività svolte come responsabile."
            }
          }
        }
      }
    }
  },
  "assessment": {
    "label": "Sezione M",
    "guidance": {
      "title": "Sezione M - Registro delle attività di trattamento",
      "maintenance": "Conservate il registro dei trattamenti in forma scritta, anche elettronica, aggiornatelo quando cambiano le attività e rendetelo disponibile all’autorità di protezione dei dati su richiesta. Un foglio di calcolo può essere sufficiente: descrivete attività come le paghe o l’assistenza clienti, anziché elencare singole persone.",
      "exemption": "Avete dichiarato meno di 250 dipendenti, trattamenti occasionali, nessun dato personale sensibile e nessun dato relativo a condanne penali o reati. Un’esenzione può applicarsi solo se il trattamento rilevante presenta anche un rischio improbabile per i diritti e le libertà delle persone. Tale condizione di rischio non è stata valutata qui. Verificate ogni attività separatamente; la gestione ordinaria delle paghe non è un trattamento occasionale. Consigliamo comunque di tenere un registro per organizzare le pratiche di protezione dei dati.",
      "additions": "Le raccomandazioni seguenti riguardano informazioni che non avete dichiarato come incluse. Aggiungetele ai contenuti già registrati, mantenendo quanto è già presente. Ove il registro sia obbligatorio, completate le informazioni pertinenti. Queste aggiunte sono consigliate anche se beneficiate di un’esenzione.",
      "controllerIntro": "Aggiunte al vostro registro come titolare:",
      "processorIntro": "Aggiunte al vostro registro come responsabile:",
      "contents": {
        "ropa-controller-identities-contacts": "Contatti: registrate nome e contatti della vostra organizzazione e, ove applicabile, dei contitolari, del vostro rappresentante e del DPO.",
        "ropa-controller-purposes-data-categories": "Finalità e categorie: registrate le finalità di ogni attività, le categorie di persone e di dati personali. Ad esempio: gestione delle paghe; dipendenti; dati identificativi, retributivi e bancari.",
        "ropa-controller-recipients": "Destinatari: registrate le categorie di destinatari dei dati, compresi quelli esteri e le organizzazioni internazionali.",
        "ropa-controller-transfers": "Trasferimenti: ove applicabile, identificate i trasferimenti internazionali e le destinazioni. Per il percorso residuale basato su interessi legittimi cogenti ai sensi dell’articolo 49(1), secondo comma, documentate anche le garanzie adeguate.",
        "ropa-controller-erasure-periods": "Cancellazione: ove possibile, registrate i tempi previsti per cancellare le diverse categorie di dati personali.",
        "ropa-controller-security-measures": "Sicurezza: ove possibile, fornite una descrizione generale delle misure di sicurezza tecniche e organizzative.",
        "ropa-processor-identities-contacts": "Contatti: registrate nomi e contatti del responsabile o dei responsabili e di ciascun titolare servito, oltre ai rappresentanti e al DPO ove applicabile.",
        "ropa-processor-processing-categories": "Trattamenti: descrivete le categorie di trattamenti svolti per ogni titolare, come hosting o amministrazione delle paghe.",
        "ropa-processor-transfers": "Trasferimenti: ove applicabile, identificate i trasferimenti internazionali e le destinazioni. Per il percorso residuale basato su interessi legittimi cogenti ai sensi dell’articolo 49(1), secondo comma, documentate anche le garanzie adeguate.",
        "ropa-processor-security-measures": "Sicurezza: ove possibile, fornite una descrizione generale delle misure di sicurezza tecniche e organizzative."
      },
      "review": "Queste sono aggiunte condizionali da riesaminare, non constatazioni di contenuti obbligatori mancanti. Nessuna delle opzioni significa che non avete dichiarato alcuno dei contenuti elencati per quel ruolo, non necessariamente che il registro non esista. Accuratezza e completezza dei contenuti selezionati non sono state verificate.",
      "regulationLink": {
        "label": "GDPR articolo 30: registro delle attività di trattamento",
        "url": "https://eur-lex.europa.eu/eli/reg/2016/679/oj/ita"
      },
      "exemptionLink": {
        "label": "Posizione approvata dall’EDPB sull’esenzione dell’articolo 30(5), pagina in inglese",
        "url": "https://www.edpb.europa.eu/documents/other-guidance/position-paper-on-the-derogations-from-the-obligation-to-maintain-records_en"
      }
    },
    "outcomes": {
      "ropaReported": "Avete dichiarato tutti gli argomenti del registro valutati per il vostro ruolo o i vostri ruoli. Accuratezza e completezza non sono state verificate indipendentemente."
    }
  }
}
