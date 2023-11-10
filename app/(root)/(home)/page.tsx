import QuestionCard from "@/components/cards/QuestionCard";
import { Button } from "@/components/ui/button";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Dev Overflow",
};

const questions = [
  {
    _id: "1",
    title:
      "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
    tags: [{ _id: "1", name: "nextjs" }],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "john-doe.jpg",
    },
    upvotes: ["user1", "user2"],
    views: 100,
    answers: [{ answerId: "answer1", text: "Sample answer 1" }],
    createdAt: new Date("2023-09-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "Redux Toolkit Not Updating State as Expected",
    tags: [
      { _id: "1", name: "reactjs" },
      { _id: "2", name: "redux" },
    ],
    author: {
      _id: "2",
      name: "John Doe",
      picture: "john-doe.jpg",
    },
    upvotes: ["user3", "user4"],
    views: 56,
    answers: [
      { answerId: "answer2", text: "Sample answer 2" },
      { answerId: "answer3", text: "Sample answer 3" },
    ],
    createdAt: new Date("2023-09-13T12:00:00.000Z"),
  },
  {
    _id: "3",
    title: "Async/Await Function Not Handling Errors Properly",
    tags: [{ _id: "1", name: "javascript" }],
    author: {
      _id: "3",
      name: "Jane Doe",
      picture: "jane-doe.jpg",
    },
    upvotes: ["user5", "user6", "user7"],
    views: 113,
    answers: [
      { answerId: "answer4", text: "Sample answer 4" },
      { answerId: "answer5", text: "Sample answer 5" },
      { answerId: "answer6", text: "Sample answer 6" },
    ],
    createdAt: new Date("2023-10-02T12:00:00.000Z"),
  },
  {
    _id: "4",
    title: "Best practices for handling state in a React Native application?",
    tags: [{ _id: "3", name: "reactnative" }],
    author: {
      _id: "4",
      name: "Alice Smith",
      picture: "alice-smith.jpg",
    },
    upvotes: ["user8", "user9"],
    views: 80,
    answers: [
      { answerId: "answer7", text: "Sample answer 7" },
      { answerId: "answer8", text: "Sample answer 8" },
    ],
    createdAt: new Date("2023-10-15T10:30:00.000Z"),
  },
  {
    _id: "5",
    title: "How to optimize performance in a large Vue.js application?",
    tags: [{ _id: "4", name: "vuejs" }],
    author: {
      _id: "5",
      name: "Bob Johnson",
      picture: "bob-johnson.jpg",
    },
    upvotes: ["user10", "user11", "user12"],
    views: 120,
    answers: [
      { answerId: "answer9", text: "Sample answer 9" },
      { answerId: "answer10", text: "Sample answer 10" },
      { answerId: "answer11", text: "Sample answer 11" },
    ],
    createdAt: new Date("2023-11-01T14:45:00.000Z"),
  },
];

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
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
      <div className="mt-10">{/* <Pagination /> */}</div>
    </>
  );
}
