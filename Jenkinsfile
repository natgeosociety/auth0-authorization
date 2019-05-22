#!groovy

def IMAGE_REF = ''

pipeline {
  agent any
  stages {

    stage('Checkout') {
      steps {
        checkout scm
        script {
          IMAGE_REF=docker2.imageRef()
        }
      }
    }

    stage('Test') {
      steps {
        withCredentials([file(credentialsId: '8d8b1ca4-4036-477c-b7e8-018f0b1a67dd', variable: 'env_file')]) {
          sh "docker build . --target tester --tag ${IMAGE_REF}.test"
          sh "docker run --env-file ${env_file} ${IMAGE_REF}.test"
        }
      }
    }

    stage('Build') {
      steps {
        sh "docker build . --target builder"
      }
    }

    stage('Publish package to npm') {
      steps {
        script {
          if (env.BRANCH_NAME == 'master') {
            withCredentials([string(credentialsId: 'npm-auth-token', variable: 'npm_token')]) {
              sh "docker build . --target publisher --tag ${IMAGE_REF} --build-arg npm_token=${npm_token}"
              sh "docker run ${IMAGE_REF}"
            }
          }
        }
      }
    }

  }
}
