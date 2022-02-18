# Present your work with Git and Rebase

## Exercise 9 - Get up to date with latest development

Scenario:

- You've been on holiday for a couple of days so there's not been so much progress on the awesome rolling Rick feature.
- While you were away, your team picked up the menu feature and integrated it with main branch.
- You've browsed through some pull requests and notice that there's been some relevant updates to the main branch that affects your branch.
- You decide to rebase your work on main to deal with the conflicts now rather than later.

Instructions for exercise:

- Checkout branch `start`.
- Create a new branch `exercise`.
- Have a look at the commits in `solution` branch.
- Rebase the `exercise` branch on `main`.
- Make sure script and styling adheres to the new project structure/conventions.
- Verify that your rolling rick feature is still as it should be.

Before you ask "why not just merge main into my branch?"
- Merge commits kind of ties branches together and you end up loosing the flexibility that rebase offers.
- Rebase doesn't play nice with merge commits because merge commits have two parent commits.
- You won't end up like [this guy](https://twitter.com/henryhoffman/status/694184106440200192) 😆😂🤣❣️

Tips:

- [Rebase](https://git-scm.com/docs/rebase) the `exercise` branch.
- Use a GUI client such as [GitExtensions](http://gitextensions.github.io/) (Win), [Fork](https://git-fork.com/) (Mac + Win) or [GitKraken](https://www.gitkraken.com/) (Linux, Mac, Win) so that you don't have to figure out the git cli commands for doing the above.
- I've written a bit about pulling in commits from another branch on [my blog](https://blomholm.no/posts/how-i-git-it-syncing/#pull-in-new-commits-from-another-branch).
- I've also written about solving merge conflicts on [my blog](https://blomholm.no/posts/how-i-git-it-syncing/#solve-merge-conflicts-like-they-never-happened).

[Click here for next exercise](https://github.com/kraftlauget/git-ws-10)
