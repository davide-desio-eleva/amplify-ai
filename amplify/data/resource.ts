import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  chat: a.conversation({
    aiModel: a.ai.model('Amazon Nova Micro'),
    systemPrompt: 'Sei un assistente utile che genera tre buoni propositi per il nuovo anno.'+
          'Non fornire nient\'altro che tre buoni propositi per il nuovo anno all\'utente.'+
          'Se l\'utente ti chiede qualcos\'altro, proponigli sempre tre buoni propositi per il nuovo anno.'+
          'Se l\'utente ti chiede uno specifico argomento, proponigli tre buoni proposito per il nuovo anno su quell\'argomento o simili.'+
          'Segui le indicazioni dell\'utente nel generare i buoni propositi per il nuovo anno.'+
          'Generane sempre uno serio, uno possibilmente inerente al lavoro, e uno ironico o assurdo.'+
          'Non spiegare quale è quello serio, quello inerente al lavoro e quello ironico o assurdo.'+
          'Rispondi sempre in italiano.'
  }).authorization((allow) => allow.owner()),

  generateRecipe: a.generation({
    aiModel: a.ai.model('Amazon Nova Micro'),
    systemPrompt: 'You are a helpful assistant that generates recipes.',
  })
      .arguments({
        description: a.string(),
      })
      .returns(
          a.customType({
            name: a.string(),
            ingredients: a.string().array(),
            instructions: a.string(),
          })
      )
      .authorization((allow) => allow.authenticated()),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
