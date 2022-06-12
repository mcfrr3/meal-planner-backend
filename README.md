# meal-planner-backend

A backend API using nodeJS and express to allow users on the [meal-planner](https://github.com/mcfrr3/meal-planner) frontend app to save favorite recipes. 
Uses the following:
- NodeJS
- Express
- knex 
- SQLite

## Git 

https://stackoverflow.com/questions/20956154/whats-the-workflow-to-contribute-to-an-open-source-project-using-git-pull-reque

Follow these steps each time you start working:

1. Make sure you are synced with the master/main branch 

```
git checkout main
git pull origin main
git checkout <feature branch>
git merge main
git push
```

2. Create a new branch in your project fork for the changes you want to make

```
git checkout -b myfixes
```

3. Commit regularly on your working branch

4. Git push once all changes have been committed

5. Merge request in GitHub and fix any potential merge conflicts. Make sure to delete your working branch (prompt given on GitHub)