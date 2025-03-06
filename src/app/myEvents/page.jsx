import EventCard from "../components/sections/EventCard";
import PageHeading from "../components/PageHeading"; //Honestly can probably get rid of this? Or change it

export default function MyEvents() {
  return (
    <main className="flex flex-col items-center py-14 gap-10">
      <PageHeading
        heading="My Events"
        subHeading="Any Issues? Contact me directly at narcelin.events@gmail.com"
      />
      {/* Eventually will need to pull EventCard data from database */}
      <EventCard
        id="myEvent"
        title="The Spain Trip"
        description="Join me in Spain for my 30th birthday!"
        date="Summer 2026"
      />
    </main>
  );
}
