PingKeeper
==========

Keep your free-tier cloud projects alive with automated health monitoring powered by **Firebase**, **GitHub Actions**, and **React**.

PingKeeper is a modern dashboard that lets you manage your deployed applications, monitor their health, and trigger manual or scheduled pings to prevent free-tier services from sleeping.

Based on your current project structure and implementation.

Features
========

*   Modern Apple-inspired UI
    
*   Firebase Firestore integration
    
*   Add new projects
    
*   Edit project details
    
*   Delete projects
    
*   Search projects instantly
    
*   Manual Ping from dashboard
    
*   Automatic GitHub Actions scheduler
    
*   Firestore real-time updates
    
*   Responsive design
    
*   Expandable action menu
    

Why PingKeeper?
===============

Many free hosting providers automatically put applications to sleep after inactivity.

Examples include:

*   Render
    
*   Railway
    
*   Fly.io
    
*   Koyeb
    
*   Cyclic
    
*   Self-hosted APIs
    

When an application sleeps:

*   First request becomes slow
    
*   API timeout increases
    
*   Bad user experience
    
*   Cold starts
    

PingKeeper periodically sends requests to your applications so they stay active.

Tech Stack
==========

Frontend

*   React
    
*   Vite
    
*   CSS
    
*   Lucide Icons
    

Backend

*   Firebase Firestore
    
*   Firebase Admin SDK
    

Automation

*   GitHub Actions
    

Project Structure
=================

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   PingKeeper/  ├── functions/  ├── public/  ├── scripts/  │   ├── firebase-admin.js  │   └── ping.js  ├── src/  │   ├── components/  │   ├── firebase/  │   ├── github/  │   ├── App.jsx  │   └── main.jsx  ├── firebase.json  ├── package.json  └── README.md   `

Requirements
============

Install:

*   Node.js 20+
    
*   Git
    
*   Firebase CLI
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm install -g firebase-tools   `

Clone the Repository
====================

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   git clone https://github.com/YOUR_USERNAME/PingKeeper.git  cd PingKeeper   `

Install Dependencies
====================

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm install   `

Create Firebase Project
=======================

1.  Open Firebase Console
    
2.  Create a new project
    

Example

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   PingKeeper   `

Enable Firestore
================

Firebase Console

↓

Firestore Database

↓

Create Database

↓

Start in Production Mode

↓

Choose Region

Create Web App
==============

Inside Firebase

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Project Settings  ↓  General  ↓  Add App  ↓  Web   `

Copy the Firebase configuration.

Create .env
===========

Create a file named

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   .env   `

Add

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   VITE_FIREBASE_API_KEY=YOUR_API_KEY  VITE_FIREBASE_AUTH_DOMAIN=YOUR_PROJECT.firebaseapp.com  VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT  VITE_FIREBASE_STORAGE_BUCKET=YOUR_PROJECT.appspot.com  VITE_FIREBASE_MESSAGING_SENDER_ID=XXXXXXXX  VITE_FIREBASE_APP_ID=XXXXXXXX  VITE_GITHUB_OWNER=YOUR_GITHUB_USERNAME  VITE_GITHUB_REPO=PingKeeper  VITE_GITHUB_WORKFLOW=manual-ping.yml  VITE_GITHUB_BRANCH=main  VITE_GITHUB_TOKEN=YOUR_FINE_GRAINED_TOKEN   `

Never commit your .env file.

Configure Firestore
===================

Create a collection

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   projects   `

Documents will be created automatically when adding projects.

Firestore Rules
===============

For development

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   rules_version = '2';  service cloud.firestore {  match /databases/{database}/documents {  match /{document=**} {  allow read, write: if true;  }  }  }   `

For production, secure these rules properly.

GitHub Setup
============

Push your project to GitHub.

Example

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   https://github.com/YOUR_USERNAME/PingKeeper   `

Create Fine-Grained GitHub Token
================================

GitHub

↓

Settings

↓

Developer Settings

↓

Fine-grained Personal Access Tokens

↓

Generate New Token

Permissions

Repository permissions

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Actions  Read and Write   `

Repository access

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Only Selected Repositories   `

Select

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   PingKeeper   `

Copy the generated token.

Add it inside

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   .env   `

Create Manual Workflow
======================

Create

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   .github/workflows/manual-ping.yml   `

Example

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   name: Manual Ping  on:    workflow_dispatch:  jobs:    ping:      runs-on: ubuntu-latest      steps:        - uses: actions/checkout@v4        - uses: actions/setup-node@v4          with:            node-version: 20        - run: npm install        - run: npm run ping   `

This workflow is triggered when the **Ping** button is clicked.

Create Automatic Workflow
=========================

Create

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   .github/workflows/ping.yml   `

Example

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   name: PingKeeper  on:    schedule:      - cron: "0 0 */4 * *"    workflow_dispatch:  jobs:    ping:      runs-on: ubuntu-latest      steps:        - uses: actions/checkout@v4        - uses: actions/setup-node@v4          with:            node-version: 20        - run: npm install        - run: npm run ping   `

This automatically runs every four days.

Running Locally
===============

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm run dev   `

Open

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   http://localhost:5173   `

Building
========

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm run build   `

Preview

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm run preview   `

How It Works
============

### Adding a Project

The dashboard saves project information inside Firestore.

### Editing

The Edit button updates the Firestore document in real time.

### Deleting

Deletes the Firestore document instantly.

### Manual Ping

When the Ping button is clicked

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   React  ↓  GitHub REST API  ↓  GitHub Actions  ↓  scripts/ping.js  ↓  Project URLs  ↓  HTTP Request  ↓  Firestore Updated   `

### Automatic Ping

Every four days

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   GitHub Scheduler  ↓  GitHub Actions  ↓  scripts/ping.js  ↓  Ping every project  ↓  Update Firestore   `

## Platform Setup Guides

Some platforms work out of the box, while others (such as Supabase) require a small amount of setup before PingKeeper can monitor them.

For detailed instructions, see:

📖 **[Platforms.md](./Platforms.md)**

The guide currently includes:

| Platform | Setup Required |
|----------|:--------------:|
| Render | No |
| Railway | No |
| Vercel | No |
| Netlify | No |
| Firebase Hosting | No |
| Firebase Functions | No |
| Supabase Edge Functions | Yes |
| Fly.io | No |
| Google Cloud Run | No |
| Express.js | Optional Health Endpoint |
| FastAPI | Optional Health Endpoint |
| Flask | Optional Health Endpoint |
| NestJS | Optional Health Endpoint |
| Custom VPS | Optional Health Endpoint |
    

Security Notes
==============

*   Never commit your .env file.
    
*   Never expose your GitHub Personal Access Token publicly.
    
*   Restrict your GitHub token to only the required repository.
    
*   Use Firestore security rules before deploying to production.
    

Future Improvements
===================

*   Ping history
    
*   Response time graphs
    
*   Email notifications
    
*   Discord webhook integration
    
*   Slack integration
    
*   Project categories
    
*   Authentication
    
*   Team workspaces
    
*   Custom ping intervals
    
*   Uptime analytics
    
*   Status page
    
*   Docker deployment
    

Contributing
============

Contributions are welcome.

1.  Fork the repository.
    
2.  Create a feature branch.
    
3.  Commit your changes.
    
4.  Push your branch.
    
5.  Open a Pull Request.
    

License
=======

This project is licensed under the MIT License.

Acknowledgements
================

Built using:

*   React
    
*   Vite
    
*   Firebase
    
*   GitHub Actions
    
*   Lucide Icons
    
*   Firestore
    

**Made with PingKeeper — Keep your projects awake, healthy, and always ready.**