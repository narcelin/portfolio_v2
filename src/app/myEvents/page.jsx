import EventCard from "../components/sections/EventCard";
import PageHeading from "../components/PageHeading";

export default function MyEvents() {
  return (
    <main className="flex flex-col items-center py-14 gap-10">
      <PageHeading
        heading="My Events"
        subHeading="Any Issues? Contact me directly at narcelin.events@gmail.com"
      />
      <EventCard
        title="New Event Title"
        description="New Description"
        id="myEvent"
      />
    </main>
  );
}
