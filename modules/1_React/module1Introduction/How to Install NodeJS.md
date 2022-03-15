# How to Install NodeJS 

There are many ways to install Node.  Below are a few methods by Operating System/  



You can download the installer for the most recent version at [NodeJS's website](https://nodejs.org/en/). The installer should install the most recent version. After installation, though, make sure to check that your version is at least above 8, with: 

```bash
node --version
> v13.5.0
```



However, if you wish to play around with multiple versions of node, consider downloading [Node Version Manager (NVM](https://github.com/nvm-sh/nvm)). NVM allows for you to switch around which node version you are using within your environment. 

Once NVM is installed, to choose which version you'd like to install, type: 

```bash
nvm install node # Where "node" is the version version, such as  10.10.0, 6.14.4, etc. 
```

To switch between versions, use: 

```bash
nvm use node # Where "node" is the version version, such as  10.10.0, 6.14.4, etc. 
```





### **Installers**

You can also use a package manager to install node: 

**MacOS** 

The suggested package manager for MacOS is **[Homebrew](https://brew.sh/)**. After installing homebrew, you can directly install node with: 

```bash
brew install node
```

To install nvm with homebrew: 

```bash
brew install nvm
```



**Linux**

To install node in a linux environment, use apt-get: 

```bash
sudo apt-get install nodejs
```

You cannot use apt-get to install nvm, instead curl the install script here: 

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```



**Windows**

To install node via a windows package manager, you may have chocolatey or possibly scoop. 

- [Chocolatey](https://chocolatey.org/packages/nodejs): 

  - NodeJS: 

    ```bash
    choco install nodejs
    ```

  - NVM: 

    ```bash
    choco install nvm
    ```

- [Scoop](https://scoop.sh/): 

  - NodeJS: 

    ```bash
    scoop install nodejs
    ```

  - NVM: 

    ```bash
    scoop install nvm
    ```

    

  

## Further Documentation: 

The most recent version of documentation is available [here](https://nodejs.org/api/). 