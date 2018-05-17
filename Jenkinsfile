pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
            echo 'Pulling...' + env.BRANCH_NAME
            echo "${env}"
            echo 'Building'
                sh 'npm install'
                sh 'ng set warnings.typescriptMismatch=false'
                sh "ng build --prod --base-href /slyce/swangler/uat/${env.BRANCH_NAME}/"
                stash includes: 'dist/**/*', name: 'dist'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
            echo 'Deploying..'
                dir("/var/www/html/slyce/swangler/uat/${env.BRANCH_NAME}"){
                      sh 'touch temp'
                      sh 'rm -fr *'
                      unstash 'dist'
                      sh 'cp -r dist/* .'
                      sh 'rm -fr dist'
                    }
            }
        }
    }
}



