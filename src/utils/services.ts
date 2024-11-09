import { Services } from "@/types/type"
import Image1 from "../../public/images/services/list/serviceList_1.jpg"
import Image2 from "../../public/images/services/list/serviceList_2.jpg"
import Image3 from "../../public/images/services/list/serviceList_3.jpg"
import Image4 from "../../public/images/services/list/serviceList_4.jpg"

const services = [
    {
        title: "Frontend Development",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "react.js",
            "next.js",
            "tailwind",
            "SEO",
            "GSAP",
            "Framer Motion",
            "Lenis Scroll",
            "git",
        ],
        description: "With frontend, I'm able to combine both my design capabilities with my problem-solving skills, and as I code, I am extensively exercising both simulataneously. I lean more into React frameworks, mainly Next.js, which allows me to increase web performance, optimize images and media much easier, and improve SEO rankings, and TypeScript for catching bugs and discrepanicies early, ensuring that my code is error-free and correct throughout.",
        image: Image2
    },
    {
        title: "Backend Development",
        technologies: [
            "node.js",
            "JavaScript",
            "TypeScript",
            "next.js",
            "supabase",
            "firebase",
            "express",
            "mongoDB"
        ],
        description: "Along with frontend, I am also knowledgable in implementing backend services to my projects to truly create a full-force application. I lean towards BaaS (backend-as-a-service) due to its overall efficiency in creating and maintaining databases that help me deliver real-world applications with less headache so that I can quicken the development process.",
        image: Image1
        
    },
    {
        title: "UI Design",
        technologies: [
            "Figma",
            "Color Theory",
            "Wireframe",
        ],
        description: "I always start my projects with Figma because it's important to know the direction before coding can ensue. I typically find inspiration from Pinterest and Awwwards, and I design my wireframes and mockups based on the moodboard that I formulate as well as on my intuition. Being a detail-oriented person, I meticulously select the appropriate typography, color scheme, and design layout that best conveys the theme of the application that I wish to build.",
        image: Image3
    },
    {
        title: "Brand Identity",
        technologies: [
            "Figma",
            "Artboard",
            "Brand guidelines",
        ],
        description: "Though I don't specialize in brand design, I have gained an avid interest in it, stemmed from my love of creating things. I like to find more ways to build on my skillset, even if that's outside of coding. I believe that it's important to be able to market a product in such a way that customers would be intrigued and encouraged to invest in that product, ensuring that the text, images, and mockups for the brand flow together.",
        image: Image4
    },
]

export const allServices : Services[] = []

services.forEach((item, i) => {
    allServices.push({
        ...item,
        id: i + 1
    })
})