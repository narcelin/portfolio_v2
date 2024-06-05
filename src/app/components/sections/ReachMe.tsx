import MyButton from "../MyButton";
export default function ReachMe() {
  return (
    <section className="py-10 gap-10 flex flex-col justify-center items-center border border-red-500">
      <div className="text-5xl font-semibold w-1/3 text-center">
        Have a project in mind? Let&apos;s get to work.
      </div>
      <div className="flex flex-row items-center gap-5">
        <MyButton fancy withArrow>
          Say Hello
        </MyButton>
        <MyButton>Say Hello</MyButton>
      </div>
    </section>
  );
}
