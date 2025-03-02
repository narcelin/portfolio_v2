import EventCard from "../components/sections/EventCard";

import PageHeading from "../components/PageHeading";

export default function Contact() {
  return (
    <main className="flex flex-col items-center py-14 gap-10">
      <PageHeading
        heading="My Events"
        subHeading="Contact me directly at arcelin.nicolas@gmail.com"
        // heading="Contact"
        // subHeading="Let's Connect and Create Something Amazing Together: Reach Out to Start a Conversation About Your Project or Idea Today!"
      />
      {/* <ContactMe /> */}
      {/* <ReachMe className="container" /> */}
      <EventCard />
    </main>
  );
}
