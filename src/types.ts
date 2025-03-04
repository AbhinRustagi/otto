interface PlatformIndex {
  name: "twitter" | "linkedin" | "bluesky";
  path: string;
}

export interface GroupedPost {
  type: "group";
  platforms: PlatformIndex[];
  name: string;
  date: string;
}

export interface SinglePost {
  type: "single";
  platform: PlatformIndex;
  date: string;
}

export type IndexFile = (GroupedPost | SinglePost)[];

export interface ProfileProps {
  src: string;
  alt: string;
  full_name: string;
  username: string;
  profile_link: string;
}

export interface PostProps {
  profile: ProfileProps;
  content: string;
  date: string;
  platform: PlatformIndex;
  link: string;
}
