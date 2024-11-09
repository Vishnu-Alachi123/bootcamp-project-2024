export interface Blog {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

const blogs: Blog[] = [
	{
        title:
          "My Journey with Hack4Impact: Excitement, Learning, and Contribution",
        date: "10-15-2024",
        description:
          "Joining Hack4Impact has been an exciting journey. Through the bootcamp, I explored JavaScript and TypeScript, improving my coding skills while working on real-world problems. The best part is contributing to meaningful projects alongside a passionate community. I’m excited to continue learning and growing!",
        image: "/images/blog1_img.PNG",
        imageAlt: "Image of Hack4Imapct logo",
        slug: "",
      },
      {
        title:
          "Onam Celebration with the South Indian Cultural Club: A Day of Food and Fun",
        date: "10-15-2024",
        description: "this is my second blog",
        image: "/images/blog2_img.PNG",
        imageAlt: "Group Picture of Onam Celebration",
        slug: "",
      } 
];

export default blogs;