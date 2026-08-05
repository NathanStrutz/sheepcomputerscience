import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SHEEP Computer Science",
  description: "Class website for parents and students to learn about SHEEP Computer Science in Summerville, SC",
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
          { text: "Syllabus", link: "/syllabus" },
          { text: "How to Ask For Help", link: "/how-to-ask-for-help" },
          { text: "Computers", link: "/computer" },
          { text: "Computer Setup", link: "/computer-setup" },
          { text: "Computer Shopping", link: "/computer-shopping" },
          { text: "AI Policy", link: "/ai-policy" },
        ],
      },
    ],
  },
});
