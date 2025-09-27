pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo "📥 Checking out repository..."
                checkout scm
                echo "✅ Checkout completed."
            }
        }

        stage('Build') {
            steps {
                echo "🏗️ Running build steps..."
                // Add your build commands here, e.g.:
                // sh 'npm install'
                // sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo "🧪 Running tests..."
                // Add your test commands here, e.g.:
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
