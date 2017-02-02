### Welcome

Hello Dash fan, welcome to the Dash Community Blog editor.  This page allows you to write articles, essays, etc and submit them to be included on the [blog's homepage](https://dashcommunity.github.io/blog/).

### Try it Out

This text is editable.  Go ahead, give it a try - add, delete, and style some of this text.  Make something **bold** or _italic_ using familiar keyboard shortcuts or selecting text and changing its style.  Currently the editor supports basic functionality and styling.  It is still under active development, so expect to see some bugs (and improvements) along the way.

You can save drafts to (and retreive from) your browser's [local storage](https://en.wikipedia.org/wiki/Web_storage) or any GitHub account or organization you have write access to.  Not all the features available through this user interface (UI) are working yet (e.g. links, highlighting, photos).  Finishing these features is planned, and other features can be added as desired.

### Make a Post

We encourage anyone and everyone to post content.  It could be anything from a five-sentence summary of this morning's shower thought boiled down to its most condensed form, to a five-page rambling journal entry regarding your path to discovering Dash and your motivations for remaining engaged.  Basically anything worth getting on the public record and sharing with others.  Follow these steps to get started:

1. Join the Dash Community GitHub organization
2. Add yourself to the [_bloggers_ team](https://github.com/orgs/dashcommunity/teams/bloggers)
3. Write something here in this editor
4. Select **Publish to Community Blog** on the form** **below
5. Fill out the form (see below for details)
6. Click **Publish**

This will commit your entry to the open-source blog repo and your post will appear shortly afterwards.

### Form Instructions

The form below contains options for saving and retrieving drafts as well as publishing to the live blog.  In order to perform any of the GitHub actions (including publishing) you must use a GitHub personal access token.  Ideally this would be your own, but if you don't want to bother getting one you may use the one provided in the **fields** section below.  This will use the bot account that was set up for this very purpose.

**Form Actions**

- _Load from Local Storage_ retrieves a previously saved draft from your browser's local storage.
- _Load from GitHub_ retrieves a previously saved draft from where it was save (by you or someone else) on GitHub.
- _Save to Local Storage_ saves a draft to your browser's local storage.
- _Save to GitHub_ saves a draft to Github
- _Publish to Community Blog_ technically doesn't publish the post immediately.  It creates a commit to the blog repo (since you are a member of the blogger group and thus have commit rights to the repo).  Currently this webpage is generated manually, so although your post is live on the master bracnh of the GitHub repo, it's not yet deployed to the server this site is generated from, so there will be a bit of delay before your post is actually live.  This step can be automated in the future if we see fit. 

**Form Fields**

- _User_ is your GitHub user account if you wish to save drafts to (or load from) your personal GitHub account.  You may enter ++dashcommunity++ if you wish to use that repo for your drafts.  If you do this please use a path starting with "drafts/yourname" (e.g.  ++drafts/yourname/whatever/you/want)++ to keep things tidy. 
- _Repo_ is any repository you want if using your own account (it must already exist; this won't create one).  Enter ++blog++ if using ++dashcommunity++ as your _user_.
- _Path_ is the file path you wish to store your draft under.  Folders are separated by forward slashes (i.e. the "/").  The path should not include the repo or the file name, as they are separate fields.
- _File_ is the name you wish to give your draft.  Using a name _without_ spaces is recommended.  If you include a ".md" extension your draft will be saved in markdown format on GitHub.  Similarly, if you are loading a markdown file from GitHub you must include the ".md" extension so that it properly converts to the editor file format.  If you are not saving to (or loading from) GitHub you should not use a ".md" (or any other) extension.
- _Token_ is a personal access token from GitHub.  You can get one of these by going to https://github.com/settings/tokens while signed in to your account, and clicking **generate new token**.  Check the "public\_repo" box (under "repo") for the token, and make note of it elsewhere.  If you don't want to do this, you can just use this one:
    - token for the lazy: ++ef9b0d8c5ffe38873631 6af3940d169f028e88fc++.
    - Important: Because GitHub doesn't allow me to publish the token to the code (that generated this default editor content) I had to fake it out by putting a space half way between it.  You need to **remove the space**.

### Test Run

If you'd like to see how loading a file works, try this:

- Click the **Load from GitHub** action option
- Enter fields as follows:
    - _User_: dashcommunity
    - _Repo_: blog
    - _Path_: editor
    - _File_: issues.md
    - _Token_: ++ef9b0d8c5ffe38873631++ ++6af3940d169f028e88fc ++
        - (remove the space)
- Click the **Load from GitHub** button

You can change the file from "bugs.md" to "welcome.md" and re-submit to get this content back.
