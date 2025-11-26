pipeline{
    agent any
    tools{
        nodejs "node25"
    }
    stages{
        stage('git checkout'){
            steps{
                checkout scm
            }
        }
        stage('install dependancies'){
            steps{
                sh 'npm ci || npm install'
            }
        }
        stage('install playwright browser'){
            steps{
                sh 'npx playwright install --with-deps'
            }
        }
        stage('compile playwright test'){
            steps{
                sh 'npx bddgen'
                
            }
        }
        stage('run playwright script'){
            steps{
                sh 'npx playwright test'
            }
        }
        stage('publish report'){
            steps{
                publishHTML([
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright HTML Report'
                ])
            }
        }
    }
}