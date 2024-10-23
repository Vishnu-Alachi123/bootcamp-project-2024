var slugify = function (title) {
    return title
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/[^a-z0-9-]/g, ""); //removes all characters that alphanumerical or a hyphen
};
var blog_list = [
    {
        title: "My Journey with Hack4Impact: Excitement, Learning, and Contribution",
        date: "10-15-2024",
        description: "Joining Hack4Impact has been an exciting journey. Through the bootcamp, I explored JavaScript and TypeScript, improving my coding skills while working on real-world problems. The best part is contributing to meaningful projects alongside a passionate community. I’m excited to continue learning and growing!",
        image: "images/blog1_img.png",
        imageAlt: "Image of Hack4Imapct logo",
        slug: "",
    },
    {
        title: "Onam Celebration with the South Indian Cultural Club: A Day of Food and Fun",
        date: "10-15-2024",
        description: "this is my second blog",
        image: "images/blog2_img.PNG",
        imageAlt: "Group Picture of Onam Celebration",
        slug: "",
    },
];
var Blog_container = document.getElementById("blog-container");
blog_list.forEach(function (blog) {
    // blog title
    blog.slug = slugify(blog.title); // modifying slug based on blog title
    var link = document.createElement("a");
    var slug = blog.slug;
    link.href = "Blogs/".concat(slug, ".html");
    link.innerHTML = "Read More";
    link.classList.add("blog_link");
    var blog_content = document.createElement("div");
    blog_content.classList.add("blog_content"); //adding class to the blog_content div
    var blog_header = document.createElement("h1");
    blog_header.textContent = blog.title; //putting title value into blog header element
    blog_header.classList.add("blog_header");
    blog_content.appendChild(blog_header);
    // blog image
    var blog_image = document.createElement("img");
    blog_image.src = blog.image;
    blog_image.classList.add("blog_image_preview");
    blog_content.appendChild(blog_image);
    // blog content
    var blog_text = document.createElement("p");
    blog_text.textContent = blog.description;
    blog_text.classList.add("blog_description");
    blog_content.appendChild(blog_text);
    blog_content.appendChild(link);
    // appending each blog into main blog div
    Blog_container === null || Blog_container === void 0 ? void 0 : Blog_container.appendChild(blog_content);
});
