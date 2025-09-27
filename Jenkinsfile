pipeline {
    
    // agent {
    //     docker { image 'node:22-alpine' } // Uses Node.js 18 inside a container
    // }

    agent any  // run on any available agent

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
                // sh 'npm test'
            }
        }
    }

    post {
        always {
            echo "📜 Pipeline finished (success or fail)."
        }
        success {
            echo "🎉 Pipeline executed successfully!"
        }
        failure {
            echo "❌ Pipeline failed. Please check logs above."
        }
    }
}
