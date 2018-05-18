pipeline {
    agent any

    stages {
        stage('Initialization') {
                    steps {
                    sh "echo $((env.RESERVED_PORT + env.EXECUTOR_NUMBER))"
                    echo sh(returnStdout: true, script: 'env')
                    echo 'Initializing'
                        sh 'npm install'
                        sh 'ng set warnings.typescriptMismatch=false'
                    }
                }
        stage('Test') {
            steps {
                echo 'Unit Testing..'
                sh 'ng test --browsers PhantomJS --single-run true --sm=false --port ${env.RESERVED_PORT}'
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



