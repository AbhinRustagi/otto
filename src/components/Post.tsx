import { PostProps, ProfileProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter, FaLinkedinIn, FaBluesky } from "react-icons/fa6";

const Icons = {
  twitter: { icon: FaXTwitter, color: "bg-(--twitter)" },
  linkedin: { icon: FaLinkedinIn, color: "bg-(--linkedin)" },
  bluesky: { icon: FaBluesky, color: "bg-(--bluesky)" },
};

function Profile(props: ProfileProps) {
  return (
    <div className="flex flex-1 gap-4 relative">
      <Link
        href={props.profile_link}
        className="inset absolute z-100 left-0 top-0 w-full h-full"
      />
      <div className="aspect-square overflow-hidden">
        <Image
          src={props.src}
          alt={props.alt}
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <div>
        <div className="font-medium mb-px">{props.full_name}</div>
        <div className="text-sm text-neutral-500">{props.username}</div>
      </div>
    </div>
  );
}

export function Post(props: PostProps) {
  const { icon: Icon, color } = Icons[props.platform.name];
  const [day, month, year] = props.date.split("-");
  const humanDate = new Date(+year, +month - 1, +day).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="rounded-lg shadow p-4 w-full max-w-sm">
      <div className="flex gap-2 justify-between mb-4">
        <Profile {...props.profile} />
        <div className="flex-1"></div>
        <div
          className={`flex items-center justify-center h-8 w-8 p-2 relative rounded aspect-square ${color}`}
        >
          <Link
            href={props.link}
            className="inset absolute z-10 top-0 left-0 h-full w-full"
          ></Link>
          <Icon className="text-xl text-white relative z-[5]" />
        </div>
      </div>
      <div className="mb-4">
        {props.content.length > 200
          ? props.content.substring(0, 200) + "..."
          : props.content}
      </div>
      <div className="text-sm flex text-neutral-500">
        {humanDate} •{" "}
        {props.platform.name[0].toUpperCase() +
          props.platform.name.substring(1)}
      </div>
    </div>
  );
}

export function GroupPost() {
  return <div className="rounded-lg shadow p-4 w-full max-w-md"></div>;
}
