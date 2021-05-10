pipeline {
    agent {
        docker { image 'circleci/node:12-browsers' }
    }
    stages {
        stage('checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/richardhendricksen/testcafe-mocking-typescript-framework.git'
            }
        }
        stage('Run tests') {
            steps {
                script {
                    try {
                        sh 'yarn install --frozen-lockfile'
                        sh 'yarn test:ci'
                    } finally {
                        sh "yarn test:report:generate"
                        publishHTML target: [
                                allowMissing         : true,
                                alwaysLinkToLastBuild: true,
                                keepAll              : true,
                                reportDir            : 'reports/allure/allure-report',
                                reportFiles          : 'index.html',
                                reportTitles         : 'Test results',
                                reportName           : 'Test results'
                        ]
                    }
                }
            }
        }
    }
}