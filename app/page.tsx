import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { IEvent } from "@/database";
import { cacheLife } from "next/cache";

// import events from "@/lib/constants";

const page = async () => {
  "use cache";
  cacheLife("hours");
  const response = await fetch("http://localhost:3000/api/events");
  const { events } = await response.json();

  return (
    <section>
      <h1 className="text-center">
        The Hub for every dev <br /> event you cant miss
      </h1>
      <p className="text-center mt-5">Hackathons meetups and conferences all in one</p>
      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events &&
            events.length > 0 &&
            events.map((event: IEvent) => (
              <li key={event.title} className="list-none">
                <EventCard {...event} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
