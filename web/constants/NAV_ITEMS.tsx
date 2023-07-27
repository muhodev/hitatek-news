export const NAV_ITEMS = [
  {
    id: "news",
    label: "News",
    link: "/news",
    children: [
      {
        id: "newsChildren1",
        label: "News Children 1",
        link: "/news-children-1",
      },
      {
        id: "newsChildren2",
        label: "News Children 2",
        link: "/news-children-2",
      },
    ],
  },
  {
    id: "features",
    label: "Features",
    link: "/features",
    children: [
      {
        id: "featuresChildren1",
        label: "Features Children 1",
        link: "/features-children-1",
      },
      {
        id: "featuresChildren2",
        label: "features Children 2",
        link: "/features-children-2",
      },
    ],
  },
  {
    id: "topics",
    label: "Topics",
    link: "/topics",
    children: [
      {
        id: "topicsChildren1",
        label: "Topics Children 1",
        link: "/topics-children-1",
      },
      {
        id: "topicsChildren2",
        label: "Topics Children 2",
        link: "/topics-children-2",
      },
    ],
  },
  {
    id: "video",
    label: "Video",
    link: "/video",
    children: [
      {
        id: "videoChildren1",
        label: "Video Children 1",
        link: "/video-children-1",
      },
      {
        id: "videoChildren2",
        label: "Video Children 2",
        link: "/video-children-2",
      },
    ],
  },
  {
    id: "live",
    label: (
      <span className="flex items-center gap-x-2">
        <span className="red-dot"></span>
        <span>Live</span>
      </span>
    ),
    link: "/live",
  },
];
