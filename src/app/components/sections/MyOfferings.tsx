export default function MyOfferings() {
  return (
    <section className="py-10">
      <div>My Offerings for You</div>
      {/* Create component */}
      <ul className="flex flex-row justify-between border border-transparent border-b-shadow">
        <div>Skill one</div>
        <div className="flex flex-row gap-8">
          <p>description</p>
          <div>expand button</div>
        </div>
      </ul>
      <ul className="flex flex-row justify-between border border-transparent border-b-shadow">
        <div>Skill two</div>
        <div className="flex flex-row gap-8">
          <p>description</p>
          <div>expand button</div>
        </div>
      </ul>
      <ul className="flex flex-row justify-between border border-transparent border-b-shadow">
        <div>Skill three</div>
        <div className="flex flex-row gap-8">
          <p>description</p>
          <div>expand button</div>
        </div>
      </ul>
      <ul className="flex flex-row justify-between border border-transparent border-b-shadow">
        <div>Skill four</div>
        <div className="flex flex-row gap-8">
          <p>description</p>
          <div>expand button</div>
        </div>
      </ul>
    </section>
  );
}
