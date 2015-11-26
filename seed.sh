#!/bin/bash

#=============================================================
# Configuration Section

# Base configuratioins, Don't change!
SEED_REPO=https://github.com/AbuMuslimAmr/angular-express-seed.git
SCRIPT_HOME=.

# New project configuration, this section you need to fill!
NEW_PROJ_REMOTE=https://github.com/AbuMuslimAmr/test-clone.git
NEW_PROJ_NAME=test-clone
INITIAL_COMMIT_MESSAGE="Initial commit"
FIND_KEYS=('ngApp' 'other-key-word') # Don't change these KEYS, just fill $REPLACE_KEYS with the corresponding values
REPLACE_KEYS=('newNgApp' 'other-value') # IMPORTANT: values can't contain spaces 
#=============================================================

log() {
	if [ "$2" == 'error' ]
	then
		echo -e "\x1B[31m$1\x1B[0m"
	elif [ "$2" == 'success' ]
	then
		echo -e "\x1B[32m$1\x1B[0m"
	else # info
		echo -e "\x1B[01;96m$1\x1B[0m"
	fi
	return 0
}

log-error () {
	log "$1" error
}

log-success() {
	log "$1" success
}

log-separator() {
	log "----------------------------------------------"
}

log-generic-error-message() {
	log-error "Something went wrong!"
}

exit-on-error() {
	if [ $? -ne 0 ]; then log-generic-error-message; exit 0; fi
}

#====================================================================
# 0) Welcome
log-separator
log "Hello there! happy to know you're trying to use my seed project
if you faced any problem, feel free to contact me on abu.muslim.amr@gmail.com
NOTE: Make sure you already provided proper values in the 'Configuration' section 
in the beginning of this script
"

#====================================================================
# 1) check if folder already exists
test -d $NEW_PROJ_NAME && log-error "Directory ($NEW_PROJ_NAME) already exist!" && exit 1; 

#====================================================================
# 2) create new folder
log-separator
log "creating dir $NEW_PROJ_NAME..."
mkdir $NEW_PROJ_NAME
exit-on-error && log-success "($NEW_PROJ_NAME) created successfully"

#====================================================================
# 3) clone into newly created folder
log-separator
log "Clone into $NEW_PROJ_NAME..."
git clone $SEED_REPO $NEW_PROJ_NAME
exit-on-error && log-success "Cloned successfully!"

#====================================================================
# 4) move to the repo root
log-separator
log "Move to $NEW_PROJ_NAME"
cd $NEW_PROJ_NAME
exit-on-error && log-success "Moved to $NEW_PROJ_NAME"

#====================================================================
# 5) reset the .git/
log-separator
log "Remove .git/"
rm -rvf .git/
exit-on-error && log-success "Remove original git repo success!"

#====================================================================
# 6) initialize new git repo
log-separator
log "Initialize new git repo"
git init
exit-on-error && log-success "New git repo initialized successfully!"

#====================================================================
# 7) add new remote 'origin'
log-separator
log "Adding new remote 'origin' => $NEW_PROJ_REMOTE"
git remote add origin $NEW_PROJ_REMOTE
exit-on-error && log-success "Remote add success!"

#====================================================================
# 8) find all files in the project, and put them in .FILELIST
log-separator
log "Finding and replacing keywords..."
find -type f > ./.FILELIST
exit-on-error && log-success ".FILELIST created successfully"

#====================================================================
# 9) find and replace keywords, easily customize it
# for each file 
for f in $(cat $SCRIPT_HOME/.FILELIST)
do
	# for each keyword
        key_word_index=0
        for i in ${FIND_KEYS[@]}
        do
                sed "s/$i/${REPLACE_KEYS[$key_word_index]}/g" -i $f
                echo "s/$i/${REPLACE_KEYS[$key_word_index]}/g" $f
                key_word_index=$((key_word_index+1))
        done
done
exit-on-error && log-success "Find and replace success!"
rm .FILELIST # clean

#====================================================================
# 10) stage all files in the new project
log-separator
log "Modifying README..." 
echo "# $NEW_PROJ_NAME
Tada! Here you go..." > README.md
exit-on-error && log-success "README.md updated"

#====================================================================
# 10) stage all files in the new project
log-separator
log "GIT: staging changes..." 
git add -A
exit-on-error && log-success "GIT: staging success!"

#====================================================================
# 11) initial commit
log-separator
log "GIT: initial commit: $INITIAL_COMMIT_MESSAGE" 
git commit -m "$INITIAL_COMMIT_MESSAGE"
exit-on-error && log-success "GIT: Commit success!"

#====================================================================
# 12) push to the remote
log-separator
log "GIT: Pushing to origin..."
git push -u origin master
exit-on-error && log-success "GIT: Code pushed!"

#====================================================================
# 13) clean
log-separator
log "Cleaning after..."
exit-on-error && log-success "Clean success!"

#====================================================================
# 14) success!
log-separator
log-success "That's it! like a piece of cake! your repo is now ready at $NEW_PROJ_REMOTE"
