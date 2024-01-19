import { DataTable } from "@/components/data-table";
import { columns, Company } from "./columns";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function getData(): Promise<Company[]> {
  return [
    {
      id: "650b4cd7c449d82e99df4762",
      name: "CBE",
      rating: "4",
      reviews: "150",
      companyType: "Corporate",
      headOffice: "Addis Ababa",
      companyLogo:
        "https://res.cloudinary.com/dz7lxjqrg/image/upload/v1695239382/z1ouzz7jzkgfpe1mj5x6.png",
      employeeNumber: "35000",
      mainService: "Banking and Finance",
      about:
        "The history of Commercial Bank of Ethiopia (CBE) dates back to the establishment of the State Bank of Ethiopia in 1942. CBE was legally established as a share company in 1963. Since then, it has been playing signiﬁcant roles in the development of the country. Currently CBE has more than 37.9 million account holders in its more than 1900 branches and the number of Mobile and Internet Banking users also reached more than 6.6 million and 37k. Active ATM card holders reached more than 8.3 million and 17 million CBE Birr users.",
      jobs: ["650b4cfec449d82e99df4765", "650b5fa0928665ee5a2758a2"],
      benefits: {
        InternationalRelocation: false,
        FreeTransport: false,
        ChildCare: false,
        Gymnasium: false,
        Cafeteria: false,
        WorkFromHome: false,
        FreeFood: false,
        TeamOutings: false,
        EducationAssistance: false,
        SoftSkillTraining: false,
        HealthInsurance: false,
        JobTraining: false,
        _id: "65335216ace671be34181201",
      },
      userReview: ["65335216ace671be341811fd", "65335364ace671be34181209"],
    },
    {
      id: "650b4cd7c449d82e99df4762",
      name: "CBE",
      rating: "4",
      reviews: "150",
      companyType: "Corporate",
      headOffice: "Addis Ababa",
      companyLogo:
        "https://res.cloudinary.com/dz7lxjqrg/image/upload/v1695239382/z1ouzz7jzkgfpe1mj5x6.png",
      employeeNumber: "35000",
      mainService: "Banking and Finance",
      about:
        "The history of Commercial Bank of Ethiopia (CBE) dates back to the establishment of the State Bank of Ethiopia in 1942. CBE was legally established as a share company in 1963. Since then, it has been playing signiﬁcant roles in the development of the country. Currently CBE has more than 37.9 million account holders in its more than 1900 branches and the number of Mobile and Internet Banking users also reached more than 6.6 million and 37k. Active ATM card holders reached more than 8.3 million and 17 million CBE Birr users.",
      jobs: ["650b4cfec449d82e99df4765", "650b5fa0928665ee5a2758a2"],
      benefits: {
        InternationalRelocation: false,
        FreeTransport: false,
        ChildCare: false,
        Gymnasium: false,
        Cafeteria: false,
        WorkFromHome: false,
        FreeFood: false,
        TeamOutings: false,
        EducationAssistance: false,
        SoftSkillTraining: false,
        HealthInsurance: false,
        JobTraining: false,
        _id: "65335216ace671be34181201",
      },
      userReview: ["65335216ace671be341811fd", "65335364ace671be34181209"],
    },
    {
      id: "650b4cd7c449d82e99df4762",
      name: "CBE",
      rating: "4",
      reviews: "150",
      companyType: "Corporate",
      headOffice: "Addis Ababa",
      companyLogo:
        "https://res.cloudinary.com/dz7lxjqrg/image/upload/v1695239382/z1ouzz7jzkgfpe1mj5x6.png",
      employeeNumber: "35000",
      mainService: "Banking and Finance",
      about:
        "The history of Commercial Bank of Ethiopia (CBE) dates back to the establishment of the State Bank of Ethiopia in 1942. CBE was legally established as a share company in 1963. Since then, it has been playing signiﬁcant roles in the development of the country. Currently CBE has more than 37.9 million account holders in its more than 1900 branches and the number of Mobile and Internet Banking users also reached more than 6.6 million and 37k. Active ATM card holders reached more than 8.3 million and 17 million CBE Birr users.",
      jobs: ["650b4cfec449d82e99df4765", "650b5fa0928665ee5a2758a2"],
      benefits: {
        InternationalRelocation: false,
        FreeTransport: false,
        ChildCare: false,
        Gymnasium: false,
        Cafeteria: false,
        WorkFromHome: false,
        FreeFood: false,
        TeamOutings: false,
        EducationAssistance: false,
        SoftSkillTraining: false,
        HealthInsurance: false,
        JobTraining: false,
        _id: "65335216ace671be34181201",
      },
      userReview: ["65335216ace671be341811fd", "65335364ace671be34181209"],
    },
  ];
}

export default async function Companies() {
  const data = await getData();
  return (
    <div className="px-5 lg:px-10 space-y-6 mx-auto py-10">
      <div className="flex justify-between">
        <PageTitle title="Companies" sub="View, edit, delete companies here." />
        <Link href="/companies/add-companies">
          <Button>Add Companies</Button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
