# Markdown Flow

Automatic flowchart generator based on the [markdown language](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Written in [Angular](https://angular.io/) with help of [ngx-graph](https://github.com/swimlane/ngx-graph).

## Adding nodes
Nodes can be created using the `+` list indicator, all other list formats are allowed.

## Node colors
Nodes can be collored by adding the following codes to the node line:

- `[❌]` colors the line red
- `[✔]` colors the line green

## Exporting
The flowchart can be exported to `.svg`, but for now only the part of the diagram that's being shown in the screen is going to exported.

## What's next?
I want to add the following exports:

- `.csv`
- `.pdf`
- `.md`
- `.json` with the tree object
- `.txt` with the flow description
