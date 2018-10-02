# Markdown Flow

Automatic flowchart generator based on the [markdown language](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Written in [Angular](https://angular.io/) with help of [ngx-graph](https://github.com/swimlane/ngx-graph).

Color palette based on the [Aussie Palette](https://flatuicolors.com/palette/au) by [Flat UI Colors](https://flatuicolors.com/).

## Adding nodes
Nodes can be created using the `+` list indicator. 

All the list formats will be included in the markdown preview, but only the ones with the `+` indicator will be rendered as nodes.

## Node colors
Nodes can be collored by adding the following codes to the node line:

- `[❌]` colors the node red
- `[✔]` colors the node green

## Exporting
The flowchart can be exported to `.svg`, but for now only the part of the diagram that's being shown in the screen is going to exported.

## What's next?
I want to add the following exports:

- `.csv`
- `.pdf`
- `.md`
- `.json` with the tree object
- `.txt` with the flow description
