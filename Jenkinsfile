pipeline {
    agent any

    stages {
        stage('Initialization') {
                    steps {
                    echo sh(returnStdout: true, script: 'env')
                    echo 'Initializing'
                        sh 'npm install'
                        sh 'ng set warnings.typescriptMismatch=false'
                    }
                }
        stage('Test') {
            steps {
                script {
                         env.TEST_PORT = (env.RESERVED_PORT as int) + (env.EXECUTOR_NUMBER as int)
                 }
                echo 'Unit Testing..'
                sh "ng test --browsers PhantomJS --single-run true --sm=false --port ${env.TEST_PORT}"
            }
        }
        stage('Build') {
            steps {
            echo 'Building'
                sh 'npm install'
                sh "ng build --prod --base-href /slyce/swangler/uat/${env.BRANCH_NAME}/"
                stash includes: 'dist/**/*', name: 'dist'
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



