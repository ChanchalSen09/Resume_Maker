import { getResume } from "@/actions/resume";
import ResumeBuilder from "./_components/resume-builder";

export default async function ResumePage() {
  const resume = await getResume();

  return (
    <div className="container mx-auto pl-4 pr-4">
      <ResumeBuilder initialContent={resume?.content} />
    </div>
  );
}
