pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                     bash '''#!/bin/bash
                             npm install
                     '''
                }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
