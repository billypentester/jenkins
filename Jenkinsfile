pipeline {
    
    agent any

    tools { 
        nodejs "NodeJS_20"   // must match the name you set in Global Tool Config
    }

    options {
        timestamps()   // show timestamps in logs
        ansiColor('xterm') // colored logs
    }

    stages {
        stage('Checkout') {
            steps {
                echo "📥 Checking out repository..."
                git branch: 'master', url: 'https://github.com/billypentester/jenkins'
                echo "✅ Checkout completed."
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "📦 Installing dependencies..."
                sh 'npm ci'   // faster & cleaner than `npm install`
            }
        }

        stage('Lint') {
            steps {
                echo "🔎 Running lint checks..."
                sh 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                echo "🏗️ Building project..."
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo "🧪 Running tests..."
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo "🚀 Deploying application..."
                echo "✅ Deployment completed."
            }
        }

    }

    post {
        always {
            echo "📜 Pipeline finished."        
        }
        success {
            echo "🎉 Pipeline executed successfully!"
        }
        failure {
            echo "❌ Pipeline failed. Please check logs above."
        }
    }
}
