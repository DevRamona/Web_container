

Project Overview: Web container is a minimalist todo list application built using React and styled with Tailwind CSS. It enables users to manage tasks by adding, marking as complete, and deleting todos.

Usage Instructions:

Installation:

Clone the repository:
git clone https://github.com/DevRamona/Web_container.git
Navigate to the project directory:
web_container
Install dependencies:
npm install
Running the Application:

To run the application locally:
npm run dev
Access the application at http://localhost:8080 in your web browser.
Usage:

Add a new todo by typing the task in the input field and pressing Enter or clicking the "Add Todo" button.

Mark a todo as completed by clicking on the checkbox next to it.

Delete a todo by clicking on the delete icon next to it.

S

Use Docker Image To Test:

Pull the Docker image from the repository:
docker ramona12/containerizing_a_web_container
Run the Docker container:
docker run -p 8080:8080 ramona12/containerizing_a_web_container
Access the application at http://localhost:8080 in your web browser.
OR: If you wish to configure the Docker settings yourself, follow these steps:

Usage
Clone the Repository:

git clone https://github.com/DevRamona/Web_container.git
Navigate to the Project Directory:

cd Web_container
Run the Configuration Script: Ensure Docker is installed on your system, And modify the lscblack.sh to match your needs, then execute the following command:

For Linux User
sudo ./configure.sh
For Windows PowerShell User
./configure.sh
OR
bash configure.sh
This script will automate Docker image building, container running, and other necessary configurations.

Access the Application: After Docker configuration, access the application at http://localhost:8080 in your web browser.


Configuration
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    port: 8080
  }
});
