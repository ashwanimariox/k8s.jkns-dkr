pipeline {
    agent any

    stages {
        stage("Checkout the code") {
            steps {
                // Checkout the specified branch from the Git repository //
                checkout([$class: 'GitSCM', branches: [[name: 'build']], userRemoteConfigs: [[url: 'git@github.com:ashwanimariox/k8s.jkns-dkr.git']]])
            }
        }
        stage("Check React dependencies and install if needed") {
            steps {
                // Check if React dependencies are present //
                script {
                    def reactInstalled = fileExists('node_modules')
                    if (!reactInstalled) {
                        // Install npm dependencies //
                        sh "npm install"
                    }
                }
            }
        }
        stage("Run tests") {
            steps {
                // Run tests //
                sh "npm test"
            }
        }
        stage("Build Docker image") {
            steps {
                // Build Docker image //
                sh "docker build -t ashwanidevops321/jenkins-docker-kubernates:1 ."
            }
        }
        stage("Push Docker image to Docker Hub") {
            steps {
                // Log in to Docker Hub //
                withDockerRegistry([credentialsId: 'DOCKER_HUB_ID', url: 'https://index.docker.io/v1/']) {
                    // Push Docker image to Docker Hub //
                    sh "docker push ashwanidevops321/jenkins-docker-kubernates:1"
                }
            }
        }
        stage("Run Docker container") {
            steps {
                // Run Docker container from the pushed image //
                sh "docker run -d -p 5000:5000 ashwanidevops321/jenkins-docker-kubernates:1"
            }
        }
    }

    post {
        always {
            echo "========always========"
        }
        success {
            echo "========pipeline executed successfully ========"
        }
        failure {
            echo "========pipeline execution failed========"
        }
    }
}
