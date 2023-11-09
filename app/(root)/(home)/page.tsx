import { Button } from "@/components/ui/button";
import NoResult from "@/components/shared/NoResult";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Dev Overflow",
};

export default async function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        {/* <LocalSearchbar /> */}

        {/* <Filter /> */}
      </div>

      {/* <HomeFilters /> */}

      <div className="mt-10 flex w-full flex-col gap-6">
        <NoResult
          title="There’s no question to show"
          description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
          link="/ask-question"
          linkTitle="Ask a Question"
        />
      </div>
      <div className="mt-10">{/* <Pagination /> */}</div>
    </>
  );
}
