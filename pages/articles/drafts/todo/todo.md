### To do

**Bugs/Issues to fix**

- Path cannot be empty (can't put files in root of repo)
- Action button doesn't provide any feedback (fail/success)
- CSS issues (sidebar spacing, font, etc)
- [Links](http://www.wikipedia.com) don't show up in editor but they pass through to markdown (just another CSS issue, or something bigger?)
- Highlight and ++underline++ don't show up in markdown
- Inline styling (**bold**, _italics_, etc) screw up if the styling extends into the spaces on either side.  When converted to markdown it adds meta characters
- Local storage only saves sha of last loaded file,  and it overwrites it.  This causes problems when trying to save and overwrite fileB if fileA was the last thing loaded (or is it saved?  I'll have to check my code)
- Something (maybe todo list block entities) is throwing the error: "Uncaught DOMException: Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range." when trying to convert to markdown

**Features to add**

Some things I still need to do: 

- Allow _any _user to edit (with proper permissions)
- Basic form validation & error handling (with UI) 

**Other things to do**

- Clean up UI (maybe just 'bootstrap')
- See if Walker can load this remotely
