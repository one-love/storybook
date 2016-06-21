#!/usr/bin/env fish

for module in (grep '^@' stories/screen.scss | cut -f 2 -d '~' | cut -f 1 -d '"')
    set sass_file (ls -1 node_modules/$module/*.scss)
    echo "'./node_modules/$sass_file',"
end