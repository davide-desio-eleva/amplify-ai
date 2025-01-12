# 🌟 Eleva New Year's Resolution Suggester - Powered by AI, AWS Amplify and Amazon Nova
Dive deep into this project by following [this post series on dev.to](https://dev.to/ddesio/build-an-ai-powered-new-years-resolutions-suggester-ridiculously-fast-with-amplify-ai-kit-4393).

## 🚀 AWS Amplify React+Vite Starter Template
This repository provides a starter template for creating applications using React+Vite and AWS Amplify, with a focus on easy setup for authentication, API, AI, and database capabilities.

## 🔄 Overview
This template equips you with a foundational React application integrated with AWS Amplify, optimized for scalability and performance. It is perfect for developers aiming to kickstart their projects with pre-configured AWS services like Cognito, AppSync, Bedrock, and DynamoDB.

## 🔧 Features
- **🔐 Authentication**: Setup with Amazon Cognito for secure user authentication.
- **📝 API**: Ready-to-use GraphQL endpoint with AWS AppSync.
- **🤖 AI**: Integrated with Amazon Bedrock.
- **📄 Database**: Real-time database powered by Amazon DynamoDB.

## 👁‍🗨 Branches
This repository contains two branches:
- **main**: The main branch includes the starter template with a "Conversational AI" UI implemented.
- **develop**: The develop branch features the complete project with all functionalities and a "Generative AI" UI implemented.

Read more about the evolution of this project in [this post series on dev.to](https://dev.to/ddesio/build-an-ai-powered-new-years-resolutions-suggester-ridiculously-fast-with-amplify-ai-kit-4393).

## 🚧 Running the Project
To get started, clone the repository and install the dependencies:

```bash
npm install
```

Next, configure the Amplify CLI with your AWS account by following [these instructions](https://docs.amplify.aws/react/start/account-setup/).

Start a sandbox environment by running:

```bash
AWS_REGION=us-east-1 npx ampx sandbox
```

This will set up a sandbox environment in `us-east-1` (required for using Amazon Nova models).

Finally, start the development server:

```bash
npm run dev
```

## 📢 Deploying to AWS
For detailed instructions on deploying your application, refer to the [deployment section](https://docs.amplify.aws/react/start/quickstart/#deploy-a-fullstack-app-to-aws) of the Amplify documentation.

## © License
This library is licensed under the MIT-0 License. See the LICENSE file for more details.