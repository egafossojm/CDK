# What you need to start working with cdk

### 1. AWS CLI
Make sure you have the latest version of the AWS CLI installed on your system.

[How to install aws cli](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

### 2. AWS Account and user
- Create an AWS account if you haven't already
- Create and administrator user
- Configure your credentials
```shell
aws configure
```

### 3. Node.js
The AWS CDK uses Node.js 22.x or later. A version in active long-term support (v24.x at this writing) is recommended.

To install Node.js visit the [node.js](https://nodejs.org/fr/download)  website.
```bash
$ node --version
v24.14.1
```

### 4. IDE for your programming language
One of the benefits of the AWS CDK is that you can leverage your favorite development environments and have a rich experience when exploring the hundreds of different services and features of AWS.

We recommend [VSCode](https://code.visualstudio.com/)

### 5. AWS CDK Toolkit
The toolkit is a command-line utility which allows you to work with CDK apps.

Open a terminal session and run the following command:

**Windows**: you'll need to run this as an Administrator\
**POSIX**: on some systems you may need to run this with sudo

```bash
npm install -g aws-cdk
```

You can check the toolkit version:
```bash
$ cdk --version
2.1118.0 (build 2a848bc)
```