# copypaste

Some already written React components and utilities I use in my project. Simple CLI so I can copy those files into current project without need to write them from scratch or copy them manually.

## Setup & usage

1. Clone the repo
    ```bash
    git clone git@github.com:jedrzejginter/copypaste.git ~/copypaste
    ```

2. Place this in `~/.zshrc`
    ```bash
    function cpc {
      (node ~/copypaste/script.js $@)
    }
    ```

3. Copy files you need in the project.
    ```bash
    cpc c Input
    ```
