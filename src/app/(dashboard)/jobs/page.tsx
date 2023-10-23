import { DataTable } from "@/components/data-table";
import { columns, Job } from "./columns";

async function getData(): Promise<Job[]> {
  return [
    {
      id: "6506e016217f3bed87eb78cf",
      title: "Mobile app developer",
      rating: 4,
      companyName: "CBE",
      companyType: "Banking and Finance",
      jobType: "Full Time",
      workMode: "In Office",
      department: "IT",
      experience: 2,
      description:
        "Are you a budding frontend developer seeking an exceptional opportunity to gain hands-on experience while working with a prestigious Management Consulting firm? TalentKompass Deutschland, a leading Human Resources company based in Germany, is searching for a highly motivated Frontend Development Intern to join our esteemed client. This remote position offers a unique chance for someone who is passionate about web development and eager to learn in a dynamic and fast-paced environment. As a Frontend Development Intern, you will work closely with the development and consulting teams, where you will be responsible for a range of tasks, including coding, debugging, and collaborating on innovative web solutions. You will have the extraordinary opportunity to learn from experienced professionals who will provide mentorship and guidance throughout the internship. With this internship, you will gain valuable experience in frontend development, web design, and teamwork – all essential skills for a successful career in this field.",
      location: "Addis Abeba",
      jobTags: ["Programming", "excel", "troubleshoot"],
      role: "Team Leader",
      education: ["Computer Science", "Management"],
      responsiblities: [
        "Provide technical leadership in designing",
        "developing and implementing Oracle ATG Commerce solutions and Endeca search engine Design and architect highly scalable",
        "reliable and available eCommerce systems",
        "Conduct code review",
        "performance tuning and provide guidance to development team",
      ],
      requirements: [
        "Expertise in designing and architecting highly scalable and available eCommerce systems",
        "Proven experience in code review and performance tuning of Oracle ATG Commerce applications",
        "Excellent understanding of software design principles patterns and architecture best practices",
      ],
      preferredSkills: [
        "Experience in integrating Oracle ATG Commerce with third-party systems such as payment gateways shipping carriers and tax calculators",
        "Knowledge of Agile methodologies and experience in working in Agile environments",
      ],
      closingDate: "2001-09-25T12:01:00.000Z",
      review: 20,
      salary: "not disclosed",
      applicants: 200,
      postedBy: "Admin",
      img: "https://res.cloudinary.com/dz7lxjqrg/image/upload/v1694949398/h8wchxav30hnkq46zkqu.png",
      jobPostDate: "2023-09-17T11:16:38.985Z",
    },
    {
      id: "6506e016217f3bed87eb78cf",
      title: "Mobile app developer",
      rating: 4,
      companyName: "CBE",
      companyType: "Banking and Finance",
      jobType: "Full Time",
      workMode: "In Office",
      department: "IT",
      experience: 2,
      description:
        "Are you a budding frontend developer seeking an exceptional opportunity to gain hands-on experience while working with a prestigious Management Consulting firm? TalentKompass Deutschland, a leading Human Resources company based in Germany, is searching for a highly motivated Frontend Development Intern to join our esteemed client. This remote position offers a unique chance for someone who is passionate about web development and eager to learn in a dynamic and fast-paced environment. As a Frontend Development Intern, you will work closely with the development and consulting teams, where you will be responsible for a range of tasks, including coding, debugging, and collaborating on innovative web solutions. You will have the extraordinary opportunity to learn from experienced professionals who will provide mentorship and guidance throughout the internship. With this internship, you will gain valuable experience in frontend development, web design, and teamwork – all essential skills for a successful career in this field.",
      location: "Addis Abeba",
      jobTags: ["Programming", "excel", "troubleshoot"],
      role: "Team Leader",
      education: ["Computer Science", "Management"],
      responsiblities: [
        "Provide technical leadership in designing",
        "developing and implementing Oracle ATG Commerce solutions and Endeca search engine Design and architect highly scalable",
        "reliable and available eCommerce systems",
        "Conduct code review",
        "performance tuning and provide guidance to development team",
      ],
      requirements: [
        "Expertise in designing and architecting highly scalable and available eCommerce systems",
        "Proven experience in code review and performance tuning of Oracle ATG Commerce applications",
        "Excellent understanding of software design principles patterns and architecture best practices",
      ],
      preferredSkills: [
        "Experience in integrating Oracle ATG Commerce with third-party systems such as payment gateways shipping carriers and tax calculators",
        "Knowledge of Agile methodologies and experience in working in Agile environments",
      ],
      closingDate: "2001-09-25T12:01:00.000Z",
      review: 20,
      salary: "not disclosed",
      applicants: 200,
      postedBy: "Admin",
      img: "https://res.cloudinary.com/dz7lxjqrg/image/upload/v1694949398/h8wchxav30hnkq46zkqu.png",
      jobPostDate: "2023-09-17T11:16:38.985Z",
    },
    {
      id: "6506e016217f3bed87eb78cf",
      title: "Mobile app developer",
      rating: 4,
      companyName: "CBE",
      companyType: "Banking and Finance",
      jobType: "Full Time",
      workMode: "In Office",
      department: "IT",
      experience: 2,
      description:
        "Are you a budding frontend developer seeking an exceptional opportunity to gain hands-on experience while working with a prestigious Management Consulting firm? TalentKompass Deutschland, a leading Human Resources company based in Germany, is searching for a highly motivated Frontend Development Intern to join our esteemed client. This remote position offers a unique chance for someone who is passionate about web development and eager to learn in a dynamic and fast-paced environment. As a Frontend Development Intern, you will work closely with the development and consulting teams, where you will be responsible for a range of tasks, including coding, debugging, and collaborating on innovative web solutions. You will have the extraordinary opportunity to learn from experienced professionals who will provide mentorship and guidance throughout the internship. With this internship, you will gain valuable experience in frontend development, web design, and teamwork – all essential skills for a successful career in this field.",
      location: "Addis Abeba",
      jobTags: ["Programming", "excel", "troubleshoot"],
      role: "Team Leader",
      education: ["Computer Science", "Management"],
      responsiblities: [
        "Provide technical leadership in designing",
        "developing and implementing Oracle ATG Commerce solutions and Endeca search engine Design and architect highly scalable",
        "reliable and available eCommerce systems",
        "Conduct code review",
        "performance tuning and provide guidance to development team",
      ],
      requirements: [
        "Expertise in designing and architecting highly scalable and available eCommerce systems",
        "Proven experience in code review and performance tuning of Oracle ATG Commerce applications",
        "Excellent understanding of software design principles patterns and architecture best practices",
      ],
      preferredSkills: [
        "Experience in integrating Oracle ATG Commerce with third-party systems such as payment gateways shipping carriers and tax calculators",
        "Knowledge of Agile methodologies and experience in working in Agile environments",
      ],
      closingDate: "2001-09-25T12:01:00.000Z",
      review: 20,
      salary: "not disclosed",
      applicants: 200,
      postedBy: "Admin",
      img: "https://res.cloudinary.com/dz7lxjqrg/image/upload/v1694949398/h8wchxav30hnkq46zkqu.png",
      jobPostDate: "2023-09-17T11:16:38.985Z",
    },
  ];
}

export default async function Jobs() {
  const data = await getData();

  return (
    <div className="px-5 lg:px-10 mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
