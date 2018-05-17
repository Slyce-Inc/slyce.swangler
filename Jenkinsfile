pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                ng run-script build
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
