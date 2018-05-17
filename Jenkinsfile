pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
            echo 'Building'
                sh 'npm install'
                sh 'ng set warnings.typescriptMismatch=false'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'ng test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
