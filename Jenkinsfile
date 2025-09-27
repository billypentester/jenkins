pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo "📥 Checking out repository..."
                git branch: 'master', url: 'https://github.com/billypentester/jenkins'
                echo "✅ Checkout completed."
            }
        }

        stage('Build') {
            steps {
                echo "🏗️ Running build steps..."
            }
        }

        stage('Test') {
            steps {
                echo "🧪 Running tests..."
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
