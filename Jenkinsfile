pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS-24'
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/Mwangi121/gallery.git'
            }
        }
        stage('Initial Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
            post {
                failure {
                    emailext (
                        subject: "Test Failed: ${env.JOB_NAME} - ${env.BUILD_NUMBER}",
                        body: "Tests failed in build ${env.BUILD_NUMBER}. Check console at ${env.BUILD_URL}",
                        to: "collins.mwangi4@student.moringaschool.com"
                    )
                }
            }
        }
        stage('Deploy to Render') {
            steps {
                echo 'Deployment triggered automatically via GitHub push to Render'
                echo 'App URL: https://gallery-nth0.onrender.com'
            }
            post {
                success {
                    slackSend(
                        channel: '#collins_ip1',
                        color: 'good',
                        message: "Deployment Successful! Build #${env.BUILD_NUMBER} deployed to Render: https://gallery-nth0.onrender.com",
                        teamDomain: 'DarkRoomTeam',
                        tokenCredentialId: 'slack-token',
                        botUser: true
                    )
                }
            }
        }
    }
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}