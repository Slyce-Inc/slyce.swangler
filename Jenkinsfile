pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'swangler'
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
