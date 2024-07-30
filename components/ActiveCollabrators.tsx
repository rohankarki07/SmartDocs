import { useOthers } from "@liveblocks/react/suspense";
import Image from "next/image";

const ActiveCollabrators = () => {
  const others = useOthers();
  const collabrators = others.map((others) => others.info);
  return (
    <div>
      <ul className="collabrators-list">
        {collabrators.map(({ id, avatar, name, color }) => (
          <li className="collabrators" key={id}>
            <Image
              src={avatar}
              alt={name}
              width={100}
              height={100}
              className="inline-block size-8 rounded-full ring-2  ring-dark-100"
              style={{ border: `1px solid ${color}` }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveCollabrators;
