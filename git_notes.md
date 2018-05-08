git tutorial

| - stage
| - working directory
| - origin

new File index.js

git add <filename>  | stage==> working directory

git commit -m ''   
git commit -am '' === git add + git commit -m ''

git push origin master


git remote add <name> <url> 
git remote add origin git@github.com:mhy-web/arch-js.git


git config [options]

git clone [url]

git status

echo "hello" >> readme.md

man git  // man 手册， 打开Git手册 类似的 ： man npm

git checkout <branchname>

git merge <branchname>

git diff 看两次commit 之间的变化
git diff <id1> <id2>   | 拿到两个哈希id，一般拿到前几位即可，不必拿到全部值, 最近一次 HEAD

git diff 2d23fd3 HEAD

看某个文件的变化
git diff 2d23d3  HEAD -- src/index.js

git diff <commit1> <commit2>

git checkout -- <file> 将内容丢弃

git checkout -- readmd.md 

git reset HEAD | 将内容从stage 变成unstage

git reset HEAD

git reset -- hard <commit hash id>    -- hard 指针强行改变到某次commit

git checkout -- file  比较安全

git push -f 丢弃远程

HEAD 当前指针 

合并commit 
git rebase 
git rebase -i HEAD~1
git rebase --above  //撤销上次的 git rebse

git rebase -i HEAD~4  // HEAD~ 后面的数字代表合并几条

git reset HEAD~1

git checkout  -- <file>


git log   | git reflog  后者可以找到远端的log


