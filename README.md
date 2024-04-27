# Todo List Application

This is a simple todo list application where the a user can create, toggle status and delete their todo items.


## Prerequisites

Make sure you have Docker installed on your system. You can download and install Docker from [here](https://www.docker.com/get-started).

## Getting Started

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/sujairam-dev/todolist.git
    ```

2. Navigate to the project directory:

    ```bash
    cd todolist
    ```

3. Build the Docker image:

    ```bash
    docker build -t todo-app .
    ```

4. Run the Docker container:

    ```bash
    docker run -d -p 3000:3000 todolist-docker-app
    ```

5. Open your web browser and visit `http://localhost:3000` to view the running application.
