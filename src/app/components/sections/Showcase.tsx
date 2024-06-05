import MyButton from "../MyButton";

export default function Showcase() {
  return (
    <section className="py-10 flex flex-col gap-10">
      <div className="flex flex-row gap-10 w-full border border-red-500">
        <div className="w-1/2">
          <div className="w-full text-6xl border border-red-500 flex flex-row justify-center items-center h-60">
            IMAGE/PREV
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <div className="text-2xl font-semibold">
                Energy Saver - Website design
              </div>
              <div className="text-shadow">Web Design</div>
            </div>
            <MyButton justArrow />
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-full text-6xl border border-red-500 flex flex-row justify-center items-center h-60">
            IMAGE/PREV
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <div className="text-2xl font-semibold">
                Creative Agency Design
              </div>
              <div className="text-shadow">Landing page Design</div>
            </div>
            <MyButton justArrow />
          </div>
        </div>
      </div>
      <div>
        <div className="w-full text-6xl border border-red-500 flex flex-row justify-center items-center h-60">
          IMAGE/PREV
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <div className="text-2xl font-semibold">Creative Agency Design</div>
            <div className="text-shadow">Landing page Design</div>
          </div>
          <MyButton justArrow />
        </div>
      </div>
      <div className="w-full border border-red-500 flex flex-row justify-center">
        <MyButton withArrow>Let&apos;s See More</MyButton>
      </div>
    </section>
  );
}
