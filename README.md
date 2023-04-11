## Getting Started
1. Install dependencies
```#!/bin/sh
yarn
```

2. Execute tests with the Launchpad
```#!/bin/sh
npx cypress open
```

3. To run tests in console
```#!/bin/sh
yarn test:develop
```

4. Before create a PR , execute linter validations locally:
```#!/bin/sh
yarn lint
```

### Commit Message Guidelines

Before committing your changes, please make sure your commit messages follow the conventional commit format:

```#!/bin/sh
<type>[<scope>]: <description>

[<body>]

[<footer>]
```

<type>: A predefined type to categorize the commit. Must be one of the following: build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test.
<scope>: (Optional) A specific area of the project affected by the commit.
<description>: A brief, clear summary of the changes made in the commit.
<body>: (Optional) A more detailed description of the changes made in the commit.
<footer>: (Optional) Additional information, such as issue references or breaking changes.

Example of a valid commit message:

```#!/bin/sh
feat(login): implement login with Google
```