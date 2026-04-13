# The Writer's Cheat Sheet: The Quiet Archive

Welcome to your new digital writing space! This guide will help you manage your stories without needing to look at any code.

---

### 1. Where to Write
Find these folders on your computer:
- **Essays**: `nextapp/content/essays/`
- **Fatherhood**: `nextapp/content/fatherhood/`
- **Reflections**: `nextapp/content/reflections/`

### 2. How to Add a New Story
1. Create a new file in one of the folders above (e.g., `my-new-story.mdx`).
2. Copy and paste this **Header Template** at the very top of the file:

```markdown
---
title: "Your Story Title Here"
date: "2026-03-31"
excerpt: "A short, one-sentence description of the story."
category: "Essay"
slug: "your-story-title-here"
---

Start writing your story here...
```

### 3. Basic Formatting
Use these simple marks while you write:
- **`## Subheading`**: Use for section titles.
- **`*Italics*`**: To emphasize words.
- **`> Quote`**: For those long, beautiful quotes from books or poems.
- **`**Bold**`**: For strong emphasis.

### 4. How to Publish (The 3 Magic Commands)
When you are ready for the world to see your new writing, open your terminal and run these 3 commands:

```bash
git add .
git commit -m "Added a new story: [Your Title]"
git push
```

### 5. Managing Your Design (Fonts & Colors)
Everything about the fonts (**Libre Baskerville**) and colors (**Off-white background**) is "Permanent & Global." You don't have to worry about styling per post—the site does it for you. 

- **To Change the Site Name**: Open `nextapp/src/components/Header.tsx` and change the text in the `Link` tag on line 22.

---

**Happy Writing!**
The Quiet Archive is now yours to fill.
