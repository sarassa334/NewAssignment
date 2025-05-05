import express from "express";
import path from "path"; 
import { dirname } from "path"; 
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const app = express();
const port = 8080;

const __dirname = dirname(fileURLToPath(import.meta.url));

let posts = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    content:
      "A closure is one of the most powerful and essential features in JavaScript. It refers to the combination of a function and the lexical environment within which that function was declared. A closure allows an inner function to access variables and parameters from its outer function, even after the outer function has finished executing. This behavior enables several advanced programming patterns and is fundamental for creating modular, reusable, and scalable JavaScript code. Closures are used extensively in JavaScript for tasks such as data encapsulation, function factories, and managing asynchronous code.\n\nOne key use case for closures is in asynchronous programming. When working with callbacks, promises, or async/await, closures allow a function to maintain access to variables from its outer scope, even when the function is executed after a certain delay. This is essential in scenarios like event listeners, timers, and API requests. By understanding closures, developers can write cleaner, more efficient, and error-free code. While closures can seem tricky at first, mastering them opens the door to writing high-quality, maintainable JavaScript code."
  },
  {
    id: 2,
    title: "CSS Flexbox vs Grid: Which Database to Use?",
    content:
      "In modern web development, CSS Flexbox and Grid are the two primary tools for creating layouts. Both of these tools allow developers to build complex, responsive designs with ease, but they serve different purposes and are optimized for different types of layouts. Understanding the distinctions between Flexbox and Grid is essential for any front-end developer.\n\nFlexbox, or the Flexible Box Layout, is a one-dimensional layout model. It allows items within a container to align and distribute space along either a row or column. Flexbox works well when you need to design small-scale layouts like navigation bars, form elements, or cards. It's perfect for situations where you need to evenly space items along a single axis, whether horizontally or vertically.\n\nCSS Grid, on the other hand, is a two-dimensional layout system that provides more flexibility and control over complex designs. It allows items to be placed in both rows and columns, making it ideal for creating full-page layouts, dashboards, and complex grid structures. Grid also allows developers to control the spacing, size, and placement of items with greater precision. The combination of Flexbox for one-dimensional layouts and Grid for two-dimensional designs can result in powerful, flexible web designs that adapt to different screen sizes.\n\nChoosing between Flexbox and Grid depends on the layout requirements. If you're building a simple row or column-based structure, Flexbox is likely the right choice. However, if you're working on a more complex grid system that requires precise control over both rows and columns, CSS Grid is the better option."
  },
  {
    id: 3,
    title: "Introduction to RESTful APIs",
    content:
      "In modern web development, RESTful APIs (Representational State Transfer) have become the standard for building scalable, flexible, and stateless web services. A RESTful API is a set of rules that allow clients to interact with a server over HTTP, using a set of defined operations that allow data to be created, read, updated, or deleted (CRUD). Understanding how RESTful APIs work is essential for building modern web applications that interact with back-end servers.\n\nRESTful APIs are built around a set of key principles. First, they use standard HTTP methods, such as GET, POST, PUT, DELETE, and PATCH, to perform operations on resources. Resources in a RESTful API are typically represented as URLs (Uniform Resource Locators) that map to objects or data in a database. Each resource can be accessed using a unique URL, and the client can interact with the server by sending requests to these URLs.\n\nOne of the key features of RESTful APIs is statelessness. This means that each request sent from a client to a server must contain all the information needed to understand the request. The server does not maintain any information about previous requests, making RESTful APIs highly scalable and fault-tolerant. Additionally, RESTful APIs are designed to return data in a predictable format, typically JSON or XML, making it easy for clients to parse and use the data.\n\nFor developers, learning how to build and consume RESTful APIs is a must, especially when working on modern web applications, mobile apps, or any project that requires interaction with a back-end service."
  },
  {
    id: 4,
    title: "Why Every Developer Should Learn Git and GitHub",
    content:
      "Git is a distributed version control system that allows developers to track changes in their codebase, collaborate with others, and revert back to previous versions of a project. Git is widely used in software development for managing code and ensuring that changes are tracked, documented, and organized. GitHub, a cloud-based platform built on top of Git, provides additional collaboration features, including remote repositories, pull requests, and issue tracking.\n\nVersion control is essential for managing changes to a project over time. Without it, developers would struggle to collaborate efficiently, and it would be difficult to manage multiple versions of a project. Git solves this problem by allowing developers to create branches for experimentation, track every change, and merge code from multiple contributors. This is particularly useful in team environments where multiple developers are working on different parts of a project simultaneously.\n\nGitHub takes Git to the next level by providing a platform for hosting repositories, collaborating on code, and performing code reviews. Developers can push their local Git repositories to GitHub, share their work with others, and receive feedback from collaborators. GitHub also allows for public and private repositories, making it a versatile tool for both open-source projects and private development teams. Beyond version control, GitHub offers features like issue tracking, project boards, and continuous integration, making it an all-in-one tool for managing projects.\n\nFor any developer, learning Git and GitHub is no longer optional—it's a fundamental skill. Whether you're working solo on a personal project or collaborating with a team, Git and GitHub will help you manage code, track progress, and work more efficiently."
  },
  {
    id: 5,
    title: "Deploying Websites",
    content:
      "Deploying websites and applications has never been easier, thanks to platforms like Vercel. Vercel is a cloud platform optimized for frontend frameworks and static sites. It offers a seamless deployment experience for developers, with automatic GitHub integration, serverless functions, and fast global delivery through a content delivery network (CDN). Whether you're working with React, Next.js, or other modern frameworks, Vercel allows you to deploy your projects quickly and easily.\n\nOne of the key advantages of Vercel is its simplicity. By connecting your GitHub repository to Vercel, you can automatically deploy your site every time you push changes to your code. This eliminates the need for manual deployments and allows for continuous integration and continuous deployment (CI/CD) workflows. Vercel also automatically builds your site, optimizes it for performance, and deploys it to a global network of edge locations, ensuring fast load times for users worldwide.\n\nVercel also supports serverless functions, allowing you to add dynamic functionality to your static sites. With serverless functions, you can run backend code, handle form submissions, and create APIs without worrying about server infrastructure. This makes Vercel an ideal platform for full-stack applications, as well as for developers who want to focus on frontend code while relying on Vercel's cloud infrastructure to handle the backend.\n\nFor modern web development, Vercel offers a fast, simple, and highly optimized deployment process. It's a powerful tool for developers looking to deploy websites, apps, and APIs with minimal configuration and maximum performance."
  },
  {
    id: 6,
    title: "Understanding JavaScript Closures",
    content:
      "A closure is one of the most powerful and essential features in JavaScript. It refers to the combination of a function and the lexical environment within which that function was declared. A closure allows an inner function to access variables and parameters from its outer function, even after the outer function has finished executing. This behavior enables several advanced programming patterns and is fundamental for creating modular, reusable, and scalable JavaScript code. Closures are used extensively in JavaScript for tasks such as data encapsulation, function factories, and managing asynchronous code.\n\nOne key use case for closures is in asynchronous programming. When working with callbacks, promises, or async/await, closures allow a function to maintain access to variables from its outer scope, even when the function is executed after a certain delay. This is essential in scenarios like event listeners, timers, and API requests. By understanding closures, developers can write cleaner, more efficient, and error-free code. While closures can seem tricky at first, mastering them opens the door to writing high-quality, maintainable JavaScript code."
  },
  {
    id: 7,
    title: "CSS Flexbox vs Grid: Which Database to Use?",
    content:
      "In modern web development, CSS Flexbox and Grid are the two primary tools for creating layouts. Both of these tools allow developers to build complex, responsive designs with ease, but they serve different purposes and are optimized for different types of layouts. Understanding the distinctions between Flexbox and Grid is essential for any front-end developer.\n\nFlexbox, or the Flexible Box Layout, is a one-dimensional layout model. It allows items within a container to align and distribute space along either a row or column. Flexbox works well when you need to design small-scale layouts like navigation bars, form elements, or cards. It's perfect for situations where you need to evenly space items along a single axis, whether horizontally or vertically.\n\nCSS Grid, on the other hand, is a two-dimensional layout system that provides more flexibility and control over complex designs. It allows items to be placed in both rows and columns, making it ideal for creating full-page layouts, dashboards, and complex grid structures. Grid also allows developers to control the spacing, size, and placement of items with greater precision. The combination of Flexbox for one-dimensional layouts and Grid for two-dimensional designs can result in powerful, flexible web designs that adapt to different screen sizes.\n\nChoosing between Flexbox and Grid depends on the layout requirements. If you're building a simple row or column-based structure, Flexbox is likely the right choice. However, if you're working on a more complex grid system that requires precise control over both rows and columns, CSS Grid is the better option."
  },
  {
    id: 8,
    title: "Introduction to RESTful APIs",
    content:
      "In modern web development, RESTful APIs (Representational State Transfer) have become the standard for building scalable, flexible, and stateless web services. A RESTful API is a set of rules that allow clients to interact with a server over HTTP, using a set of defined operations that allow data to be created, read, updated, or deleted (CRUD). Understanding how RESTful APIs work is essential for building modern web applications that interact with back-end servers.\n\nRESTful APIs are built around a set of key principles. First, they use standard HTTP methods, such as GET, POST, PUT, DELETE, and PATCH, to perform operations on resources. Resources in a RESTful API are typically represented as URLs (Uniform Resource Locators) that map to objects or data in a database. Each resource can be accessed using a unique URL, and the client can interact with the server by sending requests to these URLs.\n\nOne of the key features of RESTful APIs is statelessness. This means that each request sent from a client to a server must contain all the information needed to understand the request. The server does not maintain any information about previous requests, making RESTful APIs highly scalable and fault-tolerant. Additionally, RESTful APIs are designed to return data in a predictable format, typically JSON or XML, making it easy for clients to parse and use the data.\n\nFor developers, learning how to build and consume RESTful APIs is a must, especially when working on modern web applications, mobile apps, or any project that requires interaction with a back-end service."
  },
];

// ejs engine 
app.set("view engine", "ejs"); 
app.set("views", path.join(__dirname, "views")); 

// my middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
  res.render("index", { posts });
});

//1 show create page
app.get("/new", (req, res) => {
  res.render("new-post");
});

//1 create a new post
app.post("/new", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  posts.unshift(newPost);
  res.redirect("/");
});

//2 show edit page
app.get("/edit/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);
  if (post) {
    res.render("edit-post", { post });
  } else {
    res.redirect("/");
  }
});

//2 edit (post)
app.post("/edit/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const updatedPost = {
    id: id,
    title: req.body.title,
    content: req.body.content,
  };

  const postIndex = posts.findIndex((post) => post.id === id);
  posts[postIndex] = updatedPost;

  res.redirect("/");
});


//3 delete post
app.get("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const postIndex = posts.findIndex((post) => post.id === id);

if (postIndex > -1) {
  posts.splice(postIndex, 1);
  res.redirect("/"); 
} else {
  res.status(404).json({ error: `post id ${id} not found` });
}
});

// view single post (Read More...)
app.get("/post/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);

  if (post) {
    res.render("single-post", { post });
  } else {
    res.status(404).send("Post not found");
  }
});

// server
app.listen(port, () => {});
