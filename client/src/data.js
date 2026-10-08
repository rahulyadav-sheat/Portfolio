// ALL the content of the portfolio lives here (for now).
// Later (Class 10) this data will come from MongoDB instead.
// We use "_id" because MongoDB gives every item an _id.

export const profile = {
  name: "Rahul Yadav",
  title: "MERN Stack Developer",
  tagline:
    "I build simple, fast web apps with React and Node.js — " +
    "and I'm looking for my first role as a full-stack developer.",
  about:
    "I'm a final-year B.Tech (CSE) student at SHEAT College of " +
    "Engineering, Varanasi. I enjoy turning ideas into working websites, " +
    "and I've spent the last year building projects with the MERN stack.",
  photo: "./photo.jpg",
  resumeUrl: "#",
  email: "rahulbsb111@gmail.com",
  location: "Varanasi, India",
  github: "https://github.com/rahulyadav-sheat",
  linkedin: "https://www.linkedin.com/in/rahul-yadav-0142a1342/?isSelfProfile=true",
};

export const skills = [
  { _id: "1", name: "HTML", category: "Frontend" },
  { _id: "2", name: "CSS", category: "Frontend" },
  { _id: "3", name: "JavaScript", category: "Frontend" },
  { _id: "4", name: "React", category: "Frontend" },
  { _id: "5", name: "Node.js", category: "Backend" },
  { _id: "6", name: "Express", category: "Backend" },
  { _id: "7", name: "MongoDB", category: "Backend" },
  { _id: "8", name: "Git & GitHub", category: "Tools" },
  { _id: "9", name: "VS Code", category: "Tools" },
  { _id: "10", name: "Postman", category: "Tools" },
];
