

Had to:

to get dev server to start (npm start)
run: ``echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
``
Ref: https://github.com/facebook/jest/issues/3254