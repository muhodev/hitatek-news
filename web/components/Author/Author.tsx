import Image from "next/image";
import "./style.css";

export default function Author({
  avatar,
  name,
}: {
  avatar: string | null;
  name: string;
}) {
  return (
    <div className="h-author">
      {!!avatar && (
        <Image
          src={avatar}
          width={32}
          height={32}
          alt={name}
          className="h-author__avatar"
        />
      )}
      <h6 className="h-author__name">{name}</h6>
    </div>
  );
}
