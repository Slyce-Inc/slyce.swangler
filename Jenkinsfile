pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
            echo 'Building'
                sh 'npm install'
                sh 'npm run-script build'
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
