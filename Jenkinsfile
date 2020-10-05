pipeline {
  agent any
  environment {
    CI = 'true'
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh '/Users/zdenkomucina/Desktop/CypressTest/cypress/integration/CypressDocs/languageSupport.spec.js'
      }
    }
  }
}