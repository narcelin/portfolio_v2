"use client";
import PageHeading from "../components/PageHeading";
import MyHeader from "../components/MyHeader";
import ThirtiethBirthday from "../components/hardCoded/ThirtiethBirthday.json";
import MyButton from "../components/MyButton";

export default function MyEvent() {
  console.log(ThirtiethBirthday);
  return (
    <main className="flex flex-col items-center py-14 gap-10">
      <MyHeader className="flex items-center justify-center" headerType={4}>
        That Trip To Spain
      </MyHeader>
      <div className="flex justify-between w-full max-w-4xl gap-10">
        <div className="flex flex-col space-y-5 w-1/2">
          <div>LOCATION: Los Caños De Meca, Spain</div>
          <div>
            DESCRIPTION OF EVENT: Trip to the south part of spain where I will
            celebrate my 30th birthday by sharing my experience in Spain with
            you all. We will be located on the beach in southwester florida.
            Looking at a timeline for about a week and possible extensions if
            you would like to explore other parts of Spain.
            <br />
            Morrocco could also be a possability. There is a fairy that can take
            us for the day.
            <br />I will attempt to provide free housing, but depending on the
            amount of people that are interested, I may need to charge for
            housing.
          </div>
        </div>
        <div className="flex flex-col items-center space-y-5 w-1/2">
          <div>DATE: To Be Determined</div>
          <MyButton
            onClick={() => window.open("/rsvp", "_self")}
            fancy
            withArrow
          >
            RSVP
          </MyButton>
        </div>
      </div>
    </main>
  );
}
