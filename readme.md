# Logseq Reflect Theme

This is a theme inspired by [Reflect.app](https://reflect.app/).

I will continue to improve it in the future.

## Installation

You can copy `custom.css` into `logseq/custom.css` or paste this line into `logseq/custom.css`:

```
@import url('https://cdn.jsdelivr.net/gh/natsustan/logseq-reflect-theme@main/custom.css');
```

## Cautions

It is worth noting that in order to restore the design and display of reflect for the search box, I referred to logseq-arc-template and finally implemented it. However, there is currently a issue: if you enable the whiteboard function, the search box will be misplaced. After all, that is actually a create page component. This may be an issue with Logseq itself or possibly my negligence.🤣

Therefore, please temporarily close the whiteboard menu to ensure normal use of this theme.

By the way, I have also prepared a version without reflect search box style for you to choose from and use in your logseq theme.

## Customising

To customise the theme, use Developer Tools within Logseq to identify the components you want to style and add the relevant CSS to your logseq/custom.css file.

## Thanks to

I referred to [logseq-arc-template](https://github.com/andyburris/logseq-arc-theme) for the implementation.