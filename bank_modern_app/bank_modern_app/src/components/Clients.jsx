import { clients } from "../constants";
import styles from "../style";
import Marquee from "react-fast-marquee";


const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4  `}>
      <Marquee speed={80}>
        <div className={`${styles.flexCenter}  w-full flex-wrap gap-40   `}>
          {clients.map((client) => (
            <div
              key={client.id}
              className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
            >
              <img
                src={client.logo}
                alt="client"
                className="sm:w-[192px] w-[100px] object-contain hover:invert hover:brightness-0 cursor-pointer "
              />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}

export default Clients
