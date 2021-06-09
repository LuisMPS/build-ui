# Contributing to Build UI

First of all, thanks for looking into this section. We're glad you consider investing your time and effort into this project. 

As a starting open source repository, we would greatly appreciate and benefit from helping hands from anyone interested in the project. 

## Ways to Contribute

You can contribute to Build UI in a a lot of ways. Contributing with code is one of them:

- **Send your PRs**: you can send pull requests for code contributions, either to fix issues or to send your ideas. If you are planning to work on a PR, please notify [@LuisMPS](https://github.com/LuisMPS) to avoid duplicate efforts.

- **Submit Issues**: send an issue notifying any bugs you encounter, or requesting a feature or docs enhancement (more details in issue templates).

- **Share Build UI**: spread the word by sharing your experience with Build UI on blog posts, sharing video tutorial, or just publicly sharing your hype for the project.

- **Send your Feedback**: your feedback is very important. You can directly communicate with code contributors if you have any feedback, and starring the project if you find it useful or interesting.

## Set Up your Contributing Environment

We suggest to work on a single thing at a time to increase your chances of getting your PR accepted. Set up your environment with the steps listed below:

1. [Fork the repository](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo).

2. Clone the fork to your local machine and add the remote source:

```sh
git clone https://github.com/<your username>/build-ui.git
cd build-ui
git remote add origin https://github.com/LuisMPS/build-ui.git
```

3. Synchronize your local `main` branch with the remote one.

```sh
git checkout main
git pull origin main
```

4. Create a new topic branch:

```sh
git checkout -b my-topic-branch
```

You can now start working on your code.

Note: If you are working on one of the Build UI packages (Right now, the only package under development is the main Build UI package), make sure to also follow the next steps:

1. Navigate to the directory of the package you want to contribute to.

```sh
cd packages/build-ui
```

2. Install the package dependencies and developer dependencies with [npm](https://www.npmjs.com/):

```sh
npm install && npm install --dev
```


## Submitting your PR

Whenever you think you're ready to submit your PR, you can follow the steps:

0. Before submitting your PR, please keep an eye for a couple things. 

- If your contribution is under a directory that has a test suite, make sure all tests are passing.
- If your contribution is under a directory that has a linting tool, make sure it is not showing any errors.

```sh
npm run test
npm run lint
```

1. Make changes, commit and push to your fork:

```sh
git add my-contribution.js
git commit -m "Added my contribution"
git push -u my-origin
```

2. Go to [the repository](https://github.com/LuisMPS/build-ui) and [make a Pull Request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

Don't be afraid to share your PRs! We will try our best to give the best feedback, and hopefully integrate it into our codebase.


Code of Conduct
===============

As a contributor, you can help us keep the Build UI community open and inclusive.
We highly encourage you to read and abide by our [Code of Conduct](https://github.com/LuisMPS/build-ui/blob/main/CODE_OF_CONDUCT.md). We have decided to adopt the Contributor Covenant Code of Conduct.