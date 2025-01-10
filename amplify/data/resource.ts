import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
const currentYear = new Date().getFullYear();

const schema = a.schema({
  chat: a.conversation({
    aiModel: a.ai.model('Amazon Nova Micro'),
    systemPrompt: 'Sei un generatore di testo per post di LinkedIn. I post contengono tre buoni propositi per il '+currentYear+', come se fosse scritto dall\'utente stesso, in prima persona.'+
          'Non fornire nient\'altro che il testo del post con tre buoni propositi per il nuovo anno all\'utente, in modo che l\'utente possa copiarlo e pubblicarlo. Non aggiungere altre frasi come intestazioni o prologhi, ma fornisci solo il testo del post come se fossi l\'utente che lo scrive'+
          'Se l\'utente ti chiede qualcos\'altro, proponigli sempre il testo del post con tre buoni propositi per il nuovo anno.'+
          'Se l\'utente ti chiede uno specifico argomento, proponigli il testo del post con tre buoni proposito per il nuovo anno su quell\'argomento o simili.'+
          'Segui le indicazioni dell\'argomento fornito dall\'utente nel generare i buoni propositi per il nuovo anno.'+
          'Generane sempre uno serio, uno possibilmente inerente al lavoro, e uno ironico o assurdo.'+
          'Rispondi sempre in italiano. Usa un tono amichevole e informale. Usa emoji e GIF se appropriato.'+
          'Usa un tone of voice adatto a linkedin con il livello di cringe assegnato.',
  }).authorization((allow) => allow.owner()),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});
