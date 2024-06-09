import MyHeader from "../MyHeader";
import MyButton from "../MyButton";

export default function Showcase() {
  return (
    <section className="py-10 flex flex-col gap-10">
      <MyHeader headerType={3}>Explore My Latest Works</MyHeader>
      <div className="flex flex-col md:flex-row items-center gap-10 w-full border border-red-500">
        <div className="w-full md:w-1/2">
          <div className="w-full text-6xl border border-red-500 flex flex-row justify-center items-center h-60">
            IMAGE/PREV
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <MyHeader headerType={3}>Energy Saver - Website design</MyHeader>
              <div className="text-shadow">Web Design</div>
            </div>
            <MyButton justArrow />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-full text-6xl border border-red-500 flex flex-row justify-center items-center h-60">
            IMAGE/PREV
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <MyHeader headerType={3}>Creative Agency Design</MyHeader>
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
            <MyHeader headerType={3}>Creative Agency Design</MyHeader>
            <div className="text-shadow">Landing page Design</div>
          </div>
          <MyButton justArrow />
        </div>
      </div>
      <div className="w-full border border-red-500 flex flex-row justify-center">
        <MyButton>Let&apos;s See More</MyButton>
      </div>
    </section>
  );
}
