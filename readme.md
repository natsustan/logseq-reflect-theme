# Logseq Reflect Theme

This is a theme inspired by [Reflect.app](https://reflect.app/).

Logseq is an excellent open-source product. It has complete functions, but in some aspects it performs a bit rough and lacks design elements that focus on visual experience. After discovering Reflect.app, I realized that Logseq lacked designer support. 

Therefore, I applied the style of Reflect to Logseq and continued to modify and optimize my code to ensure the frequency of updates for this project.

By the way, I also optimized the layout of the plugins I'm using (including kanban, heatmap, logseq-pomodoro-timer). I like to keep the icons in my upper right corner with reasonable spacing, which makes me very comfortable.

## Installation

You can copy `custom.css` into `~/logseq/custom.css` or paste this line into `~/logseq/custom.css`:

```
@import url('https://cdn.jsdelivr.net/gh/natsustan/logseq-reflect-theme@main/custom.css');
```

### What's the custom.js?

`custom.js` has two main functions: 

- automatically collapsing "Recent"
- changing the name "Favorite" to "Pin Notes".

You can copy `custom.js` into `~/logseq/custom.js`

## Cautions

It is worth noting that in order to restore the design and display of reflect for the search box, I referred to logseq-arc-template and finally implemented it. However, there is currently a issue: if you enable the whiteboard function, the search box will be misplaced. After all, that is actually a create page component. This may be an issue with Logseq itself or possibly my negligence.🤣

Therefore, please temporarily close the whiteboard menu to ensure normal use of this theme.

By the way, I have also prepared a version without reflect search box style for you to choose from and use in your logseq theme.

## Customising

To customise the theme, use Developer Tools within Logseq to identify the components you want to style and add the relevant CSS to your `logseq/custom.css` file.

## Thanks to

I referred to [logseq-arc-template](https://github.com/andyburris/logseq-arc-theme) for the implementation.

