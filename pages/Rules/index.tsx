import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";



export const Rules = () => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <Text style={styles.title}>Regolamento</Text>
        <Text style={styles.body}>
          Il gioco rappresenta un assedio dove il numero degli Assedianti, è il
          doppio di quello degli Assediati.
        </Text>
        <Text style={styles.subTitle}>Prima mossa:</Text>
        <Text style={styles.body}>
          Non vi sono indicazioni storiche precise circa quale delle due parti
          abbia il diritto di fare la prima mossa, anche se talune fonti
          suggeriscono che gli Assediati giochino per primi.
        </Text>
        <Text style={styles.subTitle}>Movimento dei pezzi:</Text>
        <Text style={styles.body}>
          I giocatori si alternano nel muovere i propri pezzi. Tutti i pezzi si
          muovono all’interno del piano di gioco di un numero qualunque di
          caselle in direzione Orizzontale o Verticale (ma mai combinando
          entrambi i movimenti nella stessa mossa) fintantoché le caselle
          attraversate siano libere; infatti ogni pedina ostruisce il movimento
          delle altre che devono fermarsi sulla casella libera precedente quella
          occupata. Il Trono (casella centrale del tabellone) e i quattro angoli
          (caselle gli angoli) possono essere occupati solo dal Re; un pezzo
          diverso dal Re può passare sopra il Trono (purché sia libero) durante
          il suo movimento, ma non fermarsi su di esso
        </Text>
        <Text style={styles.subTitle}>Cattura dei pezzi:</Text>
        <Text style={styles.body}>
          Tutti i pezzi tranne il Re sono soggetti alla Cattura per Custodia,
          ovvero possono essere catturati se vengono imprigionati fra due pezzi
          avversari sulla stessa riga o colonna, ma solo se è l’aggressore ad
          effettuare la cattura. I tre pezzi devono essere adiacenti senza
          essere intervallati da caselle vuote; Non si considera catturato un
          pezzo spostato in mezzo a due nemici.
        </Text>
        <Text style={styles.body}>
          Il Trono e le caselle ai quattro angoli del piano di gioco sono sempre
          ostili a qualsiasi pezzo adiacente; in caso di attacco ad un pezzo,
          l’attaccante sostituisce uno dei suoi due pezzi necessari alla cattura
          con l’angolo o col Trono.
        </Text>
        <Text style={styles.body}>
          Non è obbligatorio catturare un pezzo quando se ne presenta
          l’occasione. È consentito catturare contemporaneamente più pezzi
          avversari con una sola mossa.
        </Text>
        <Text style={styles.body}>
          Il Re non può essere utilizzato come uno dei due pezzi necessari per
          catturare una pedina avversaria. Un pezzo non può invece essere
          catturato sfruttando il bordo del piano di gioco come pezzo ostile
        </Text>
        <Text style={styles.body}>
          La cattura del Re avviene in maniera differente da quella degli altri
          pezzi: il Re deve essere circondato da quattro pezzi dell’assediante,
          posti nelle quattro caselle adiacenti a quelle del Re.
        </Text>
        <Text style={styles.body}>
          Al termine di una mossa che preceda quella di una possibile cattura
          del Re, l’Assediante deve avvertire l’Assediato della minaccia.
        </Text>
        <Text style={styles.subTitle}>Vittoria:</Text>
        <Text style={styles.body}>
          Gli Assedianti vincono quando riescono ad imprigionare il Re. Gli
          Assediati quando il Re riesce a raggiungere una delle quattro caselle
          d'angolo. Nel caso in cui l’Assediato riesca nel suo turno a creare
          una via di fuga diretta verso un angolo in una mossa, deve
          annunciarlo. Se è l’Assediante ad aprire la via di fuga, l’Assediato
          può sfruttarla immediatamente.
        </Text>
        <Text style={styles.subTitle}>Strategie:</Text>
        <Text style={styles.body}>
          Sebbene possa sembrare il contrario, gli Assediati sono in una
          posizione di lieve vantaggio. Gli Assediati dovrebbero cercare di
          eliminare quanti più pezzi degli Assedianti per aprire una via di fuga
          al Re; talvolta gli stessi pezzi dell’Assediato costituiscono un
          ostacolo ai movimenti del Re. Gli Assedianti dovrebbero cercare di
          allargarsi per occupare le possibili vie di fuga e minimizzare le
          perdite nella prima parte della partita.
        </Text>
      </View>
    </ScrollView>
  );
};
