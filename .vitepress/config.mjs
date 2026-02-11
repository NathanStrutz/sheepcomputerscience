import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SHEEP Computer Science",
  description: "Class website for parents and students",
  appearance: "dark",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Google Classroom", link: "https://classroom.google.com/" },
    ],

    sidebar: [
      {
        text: "Menu",
        items: [
          { text: "When & Where", link: "/vital-information" },
          { text: "Contact", link: "/contact" },
          { text: "Your Teachers", link: "/about-your-teachers" },
          { text: "What We Learn", link: "/syllabus" },
          { text: "Homework Overview", link: "/homework" },
          { text: "How to Ask For Help", link: "/how-to-ask-for-help" },
          { text: "Computers", link: "/computer" },
          { text: "Computer Shopping", link: "/computer-shopping" },
          { text: "AI Policy", link: "/ai-policy" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
