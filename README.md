## New Year's Resolution Suggester
Dive deep in this project following [this post series on dev.to](https://dev.to/ddesio/build-an-ai-powered-new-years-resolutions-suggester-ridiculously-fast-with-amplify-ai-kit-4393)

## AWS Amplify React+Vite Starter Template
This repository use a starter template for creating applications using React+Vite and AWS Amplify, emphasizing easy setup for authentication, API, AI and database capabilities.

## Overview
This template equips you with a foundational React application integrated with AWS Amplify, streamlined for scalability and performance. It is ideal for developers looking to jumpstart their project with pre-configured AWS services like Cognito, AppSync, Bedrock and DynamoDB.

## Features
- **Authentication**: Setup with Amazon Cognito for secure user authentication.
- **API**: Ready-to-use GraphQL endpoint with AWS AppSync.
- **AI**: Integrated with Amazon Bedrock.
- **Database**: Real-time database powered by Amazon DynamoDB.

## Running the project
To get started, clone the repository and install the dependencies:

```bash
npm install
```

Next, configure the Amplify CLI with your AWS account following those [instructions](https://docs.amplify.aws/react/start/account-setup/).
Then, initialize the Amplify project:

```bash

Start a sandbox environment by running:

```bash
AWS_REGION=us-east-1 npx ampx sandbox
```

It will run a sandbox environment in us-east-1 (required to use Amazon Nova models)
Finally, start the development server:

```bash
npm run dev
```

## Deploying to AWS
For detailed instructions on deploying your application, refer to the [deployment section](https://docs.amplify.aws/react/start/quickstart/#deploy-a-fullstack-app-to-aws) of Amplify documentation.

## License
This library is licensed under the MIT-0 License. See the LICENSE file.