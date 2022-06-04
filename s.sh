rm .nomedia
echo "Commit:"
git add *
read commit
git commit -m "$commit"
git add *
git push
touch .nomedia
