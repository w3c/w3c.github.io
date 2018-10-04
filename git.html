<!DOCTYPE html>

<html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Git recipes &amp; tricks</title>
        <link rel="stylesheet" href="css/wgio.css" />
        <link rel="icon" type="image/x-icon" href="//labs.w3.org/favicon.ico" />
    </head>
    
    <body class="targetable">
      
        <header>
            <h1>Git recipes &amp; tricks</h1>
        </header>
        
        <nav>
            <a href="/">Home</a>
            •
            <a href="https://github.com/w3c/">Repositories</a>
            •
            <a href="https://help.github.com/">GitHub Help</a>
        </nav>

        <nav class="internal">
            <ul>
                <li>
                    <a href="#config">Useful config</a>
                </li>
                <li>
                    <a href="#update">Safest way to “update” a local copy</a>
                </li>
                <li>
                    <a href="#lg">An alias to view the history of the repo</a>
                </li>
                <li>
                    <a href="#also">See also</a>
                </li>
            </ul>
        </nav>

        <main>
            <p>These are some <strong>low-level tips for the console</strong>, for <em>power users</em> of Git.</p>
            <section id="config">
                <h2>Useful config <a href="#config">&#x1F517;</a></h2>
                <ul>
                    <li><code>branch.autosetuprebase=always</code>
                        (<a href="https://git-scm.com/docs/git-config#git-config-branchautoSetupRebase">documentation</a>):
                        I find it easier to work with Git this way</li>
                    <li><code>core.editor=emacs -nw</code>
                        (<a href="https://git-scm.com/docs/git-config#git-config-coreeditor">documentation</a>):
                        that's the editor that will be invoked every time Git needs to ask you about a commit message, when you're squashing commits, etc
                        (and of course, you want emacs for that)</li>
                    <li><code>commit.gpgsign=true</code>
                        (<a href="https://git-scm.com/docs/git-config#git-config-commitgpgSign">documentation</a>)
                        and <code>gpg.program=gpg2</code>
                        (<a href="https://git-scm.com/docs/git-config#git-config-gpgprogram">documentation</a>):
                        you will need to set up these variables (and possibly a couple other) if you want to
                        <a href="https://help.github.com/articles/signing-commits-with-gpg/">sign your commits to GitHub using GPG (recommended)</a></li>
                </ul>
            </section>
            <section id="update">
                <h2>Safest way to “update” a local copy <a href="#update">&#x1F517;</a></h2>
                <p>I find this sequence of commands the “safest” way to quickly “refresh” a clone of some remote repo, and at the same time check its status
                    (where “safest” means <em>“reducing to the minimum the probability of messing up things with conflicts, outdated branches, uncommitted
                    changes, etc”</em>):</p>
                <pre>$ git branch -a
$ git pull -r
$ git status
$ git remote prune origin --dry</pre>
                <ul><li><code>$ git branch -a</code> displays information about <em>all</em> branches, both local and <em>remote</em></li>
                    <li><code>$ git pull -r</code> fetches changes from the <em>remote</em> and
                        <a href="https://git-scm.com/docs/git-pull#git-pull--r">“rebases the current branch on top of the upstream branch after fetching”</a>
                    </li>
                    <li><code>$ git status</code> shows you the status of your copy: whether there are new files, missing files, unstaged changes, or commits
                        pending push</li>
                    <li><code>$ git remote prune origin --dry</code> tells you if any branch in the <em>remote</em> has been recently removed.
                        (Submit the same command <em>without</em> the <code>--dry</code> part to actually remove those remotes from your local
                        <code>origin</code>.
                        That will still <em>not</em> remove local branches automatically, but you can do that yourself with
                        <code>git branch -d &lt;BRANCH&gt;</code> if you see some branch is no longer necessary.)
                    </li>
                </ul>
                <p>You can have those four lines as an <em>alias</em>, or inside a <em>script</em> somewhere.</p>
                <p>Even better: if you set up <a href="#aliases">the aliases suggested above</a>, the whole thing becomes:</p>
                <pre>$ git br -a;git pl -r;git st;git re prune origin --dry</pre>
                <p>You can then type it and run it just once, and, from that moment on, simply recover the line from your shell history.</p>
                <p>For example, if you're using Bash: press <code>Ctrl</code>+<code>r</code>, then start typing a distinctive chunk of the line
                    (eg, <code>r;</code>, or <code>st;gi</code>); if you used it not too long ago for the last time, the entire line should appear, and you can
                    simply press <code>Enter</code>.</p>
            </section>
            <section id="lg">
                <h2>An alias to view the history of the repo <a href="#lg">&#x1F517;</a></h2>
                <pre>alias.lg=log --graph --abbrev-commit --decorate --date=relative \
--format=format:'%C(bold blue)%h%C(reset)          \
- %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) \
%C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all</pre>
                <p>Then, simply type</p>
                <pre>$ git lg</pre>
                <p>for a colourful graph of commits, tags and branches.</p>
            </section>
            <section id="also">
                <h2>See also <a href="#also">&#x1F517;</a></h2>
                <ul>
                    <li>Git:
                        <ul>
                            <li><a href="https://git-scm.com/docs">Official Git reference</a></li>
                            <li><a href="https://git-scm.com/book/en/v2"><em>The</em> Git book online</a></li>
                            <li>CSS WG wiki: <a href="https://wiki.csswg.org/tools/git">&ldquo;Quick Guide to Using Git&rdquo;</a></li>
                            <li>Out there: <a href="https://github.com/k88hudson/git-flight-rules">&ldquo;Flight rules for Git&rdquo;</a></li>
                        </ul>
                    </li>
                    <li>GitHub: <a href="best-practices.html">best practices and recommended tools</a></li>
                </ul>
            </section>
        </main>
      
        <footer>
            <address><a href="https://github.com/w3c/w3c.github.io/">We are on GitHub</a></address>
            <p><a href="https://www.w3.org/"><img src="img/w3c.svg" width="65" height="45" alt="W3C Logo"></a></p>
        </footer>

    </body>

</html>
