import { GenderOption, LinkType, Role } from "./types";

export const genderOptions: GenderOption[] = [
  {
    value: "male",
    label: "Male",
    gradientColors: ["#4c669f", "#3b5998", "#192f6a"],
    icon: "male"
  },
  {
    value: "female",
    label: "Female",
    gradientColors: ["#ff4b8d", "#ff69b4", "#ff1493"],
    icon: "female"
  },
  {
    value: "nonbinary",
    label: "Non-binary",
    gradientColors: ["#56ab2f", "#a8e063"],
    icon: "transgender"
  }
];

export const popularRoles: Role[] = [
  { id: "1", name: "Frontend Developer", icon: "logo-react" },
  { id: "2", name: "Backend Developer", icon: "server-outline" },
  { id: "3", name: "Full Stack Developer", icon: "layers-outline" },
  { id: "4", name: "UX Designer", icon: "color-palette-outline" },
  { id: "5", name: "Data Scientist", icon: "analytics-outline" },
  { id: "6", name: "DevOps Engineer", icon: "git-network-outline" }
];

export const allRoles: Role[] = [
  ...popularRoles,
  { id: "7", name: "Product Manager", icon: "briefcase-outline" },
  { id: "8", name: "QA Engineer", icon: "checkmark-done-circle-outline" },
  { id: "9", name: "Mobile Developer", icon: "phone-portrait-outline" },
  { id: "10", name: "Cloud Architect", icon: "cloud-outline" },
  { id: "11", name: "AI/ML Engineer", icon: "brain-outline" },
  {
    id: "12",
    name: "Cybersecurity Specialist",
    icon: "shield-checkmark-outline"
  },
  { id: "13", name: "UI Designer", icon: "brush-outline" },
  { id: "14", name: "System Administrator", icon: "hardware-chip-outline" },
  { id: "15", name: "Database Administrator", icon: "server-outline" },
  { id: "16", name: "Network Engineer", icon: "git-network-outline" },
  { id: "17", name: "Game Developer", icon: "game-controller-outline" },
  { id: "18", name: "Blockchain Developer", icon: "link-outline" },
  { id: "19", name: "Technical Writer", icon: "document-text-outline" },
  { id: "20", name: "Business Analyst", icon: "bar-chart-outline" },
  { id: "21", name: "Scrum Master", icon: "people-outline" },
  { id: "22", name: "IoT Developer", icon: "wifi-outline" },
  { id: "23", name: "AR/VR Developer", icon: "glasses-outline" },
  {
    id: "24",
    name: "Embedded Systems Engineer",
    icon: "hardware-chip-outline"
  },
  { id: "25", name: "Data Engineer", icon: "funnel-outline" },
  { id: "26", name: "SRE (Site Reliability Engineer)", icon: "pulse-outline" },
  { id: "27", name: "Information Architect", icon: "git-branch-outline" },
  { id: "28", name: "Bioinformatics Specialist", icon: "leaf-outline" },
  { id: "29", name: "Quantum Computing Researcher", icon: "infinite-outline" },
  { id: "30", name: "Robotics Engineer", icon: "construct-outline" },
  { id: "31", name: "Cloud Security Engineer", icon: "lock-closed-outline" },
  { id: "32", name: "Big Data Engineer", icon: "telescope-outline" },
  {
    id: "33",
    name: "Data Visualization Specialist",
    icon: "pie-chart-outline"
  },
  { id: "34", name: "Penetration Tester", icon: "bug-outline" },
  { id: "35", name: "Performance Engineer", icon: "speedometer-outline" },
  { id: "36", name: "Localization Engineer", icon: "language-outline" },
  { id: "37", name: "Salesforce Developer", icon: "cloud-upload-outline" },
  { id: "38", name: "Firmware Engineer", icon: "cog-outline" },
  { id: "39", name: "GIS Developer", icon: "map-outline" },
  {
    id: "40",
    name: "API Integration Specialist",
    icon: "git-pull-request-outline"
  }
];

export const linkTypes: LinkType[] = [
  {
    id: "1",
    name: "GitHub",
    icon: require("../assets/images/icons/github.png"),
    placeholder: "Your GitHub username",
    handle: ""
  },
  {
    id: "2",
    name: "LinkedIn",
    icon: require("../assets/images/icons/linkedin.png"),
    placeholder: "Your LinkedIn profile URL",
    handle: ""
  },
  {
    id: "3",
    name: "Twitter",
    icon: require("../assets/images/icons/x.png"),
    placeholder: "Your Twitter handle",
    handle: ""
  },
  {
    id: "4",
    name: "Dribbble",
    icon: require("../assets/images/icons/dribble.png"),
    placeholder: "Your Dribbble username",
    handle: ""
  },
  {
    id: "5",
    name: "Behance",
    icon: require("../assets/images/icons/behance.png"),
    placeholder: "Your Behance profile URL",
    handle: ""
  },
  {
    id: "6",
    name: "Medium",
    icon: require("../assets/images/icons/medium.png"),
    placeholder: "Your Medium username or profile URL",
    handle: ""
  },
  {
    id: "7",
    name: "Stack Overflow",
    icon: require("../assets/images/icons/stackoverflow.png"),
    placeholder: "Your Stack Overflow profile URL",
    handle: ""
  },
  {
    id: "8",
    name: "CodePen",
    icon: require("../assets/images/icons/codepen.png"),
    placeholder: "Your CodePen username",
    handle: ""
  },
  {
    id: "9",
    name: "GitLab",
    icon: require("../assets/images/icons/gitlab.png"),
    placeholder: "Your GitLab username",
    handle: ""
  },
  {
    id: "10",
    name: "Instagram",
    icon: require("../assets/images/icons/instagram.png"),
    placeholder: "Your Instagram handle",
    handle: ""
  },
  {
    id: "11",
    name: "Facebook",
    icon: require("../assets/images/icons/facebook-main.png"),
    placeholder: "Your Facebook profile URL",
    handle: ""
  },
  {
    id: "12",
    name: "YouTube",
    icon: require("../assets/images/icons/youtube.png"),
    placeholder: "Your YouTube channel URL",
    handle: ""
  },
  {
    id: "13",
    name: "TikTok",
    icon: require("../assets/images/icons/tiktok-1.png"),
    placeholder: "Your TikTok username",
    handle: ""
  },
  {
    id: "14",
    name: "Pinterest",
    icon: require("../assets/images/icons/pinterest.png"),
    placeholder: "Your Pinterest username",
    handle: ""
  },
  {
    id: "15",
    name: "Snapchat",
    icon: require("../assets/images/icons/snapchat.png"),
    placeholder: "Your Snapchat username",
    handle: ""
  },
  {
    id: "16",
    name: "Reddit",
    icon: require("../assets/images/icons/reddit.png"),
    placeholder: "Your Reddit username",
    handle: ""
  },
  {
    id: "17",
    name: "Twitch",
    icon: require("../assets/images/icons/twitch.png"),
    placeholder: "Your Twitch channel name",
    handle: ""
  },
  {
    id: "18",
    name: "SoundCloud",
    icon: require("../assets/images/icons/soundcloud.png"),
    placeholder: "Your SoundCloud profile URL",
    handle: ""
  },
  {
    id: "19",
    name: "Spotify",
    icon: require("../assets/images/icons/spotify-green.png"),
    placeholder: "Your Spotify artist profile URL",
    handle: ""
  },
  {
    id: "20",
    name: "Flickr",
    icon: require("../assets/images/icons/flickr.png"),
    placeholder: "Your Flickr username",
    handle: ""
  },
  {
    id: "21",
    name: "DeviantArt",
    icon: require("../assets/images/icons/deviant-art.png"),
    placeholder: "Your DeviantArt username",
    handle: ""
  },
  {
    id: "22",
    name: "Goodreads",
    icon: require("../assets/images/icons/goodreads.png"),
    placeholder: "Your Goodreads profile URL",
    handle: ""
  },
  {
    id: "23",
    name: "Quora",
    icon: require("../assets/images/icons/quora.png"),
    placeholder: "Your Quora profile URL",
    handle: ""
  },
  {
    id: "24",
    name: "Kaggle",
    icon: require("../assets/images/icons/kaggle.png"),
    placeholder: "Your Kaggle username",
    handle: ""
  },
  {
    id: "25",
    name: "Product Hunt",
    icon: require("../assets/images/icons/product-hunt.png"),
    placeholder: "Your Product Hunt username",
    handle: ""
  },
  {
    id: "26",
    name: "Hacker News",
    icon: require("../assets/images/icons/hacker-news.png"),
    placeholder: "Your Hacker News username",
    handle: ""
  },
  {
    id: "27",
    name: "Meetup",
    icon: require("../assets/images/icons/meetup.png"),
    placeholder: "Your Meetup profile URL",
    handle: ""
  },
  {
    id: "28",
    name: "Slack",
    icon: require("../assets/images/icons/slack.png"),
    placeholder: "Your Slack member ID or workspace URL",
    handle: ""
  },
  {
    id: "29",
    name: "Discord",
    icon: require("../assets/images/icons/discord.png"),
    placeholder: "Your Discord username#discriminator",
    handle: ""
  },
  {
    id: "30",
    name: "Telegram",
    icon: require("../assets/images/icons/telegram.png"),
    placeholder: "Your Telegram username",
    handle: ""
  },
  {
    id: "31",
    name: "WhatsApp",
    icon: require("../assets/images/icons/whatsapp.png"),
    placeholder: "Your WhatsApp business contact",
    handle: ""
  },
  {
    id: "32",
    name: "Skype",
    icon: require("../assets/images/icons/skype.png"),
    placeholder: "Your Skype username",
    handle: ""
  },
  {
    id: "33",
    name: "WeChat",
    icon: require("../assets/images/icons/wechat.png"),
    placeholder: "Your WeChat ID",
    handle: ""
  },
  // {
  //   id: "38",
  //   name: "Tumblr",
  //   icon: "https://www.tumblr.com/favicon.ico",
  //   placeholder: "Your Tumblr blog URL"
  // },
  // {
  //   id: "39",
  //   name: "Mastodon",
  //   icon: "https://mastodon.social/favicon.ico",
  //   placeholder: "Your Mastodon profile URL"
  // },
  {
    id: "34",
    name: "Clubhouse",
    icon: require("../assets/images/icons/clubhouse.png"),
    placeholder: "Your Clubhouse username",
    handle: ""
  },
  {
    id: "35",
    name: "Patreon",
    icon: require("../assets/images/icons/patreon-2.png"),
    placeholder: "Your Patreon page URL",
    handle: ""
  },
  {
    id: "36",
    name: "Buy Me a Coffee",
    icon: require("../assets/images/icons/bmc.png"),
    placeholder: "Your Buy Me a Coffee page URL",
    handle: ""
  },
  {
    id: "37",
    name: "Ko-fi",
    icon: require("../assets/images/icons/kofi.png"),
    placeholder: "Your Ko-fi page URL",
    handle: ""
  },
  {
    id: "38",
    name: "Etsy",
    icon: require("../assets/images/icons/etsy.png"),
    placeholder: "Your Etsy shop URL",
    handle: ""
  },
  {
    id: "39",
    name: "Fiverr",
    icon: require("../assets/images/icons/fiverr.png"),
    placeholder: "Your Fiverr profile URL",
    handle: ""
  },
  {
    id: "40",
    name: "Upwork",
    icon: require("../assets/images/icons/upwork.png"),
    placeholder: "Your Upwork profile URL",
    handle: ""
  },
  {
    id: "41",
    name: "Xing",
    icon: require("../assets/images/icons/xing.png"),
    placeholder: "Your Xing profile URL",
    handle: ""
  },
  {
    id: "42",
    name: "ResearchGate",
    icon: require("../assets/images/icons/researchgate.png"),
    placeholder: "Your ResearchGate profile URL",
    handle: ""
  },
  {
    id: "433",
    name: "Academia",
    icon: require("../assets/images/icons/academia.png"),
    placeholder: "Your Academia profile URL",
    handle: ""
  }
];

export const categories = [
  { name: "Social Media", ids: ["3", "11", "12", "14", "15", "16", "17"] },
  { name: "Professional", ids: ["2", "27", "46", "47", "48"] },
  { name: "Developer", ids: ["1", "8", "9", "10", "26", "29"] },
  { name: "Creative", ids: ["5", "6", "22", "23"] },
  { name: "Writing", ids: ["7", "24", "25"] },
  { name: "Video", ids: ["13", "18", "19"] },
  { name: "Music", ids: ["20", "21"] },
  { name: "Messaging", ids: ["31", "32", "33", "34", "35", "36", "37"] },
  { name: "Funding", ids: ["41", "42", "43"] },
  { name: "Marketplace", ids: ["44", "45"] },
  { name: "Academic", ids: ["49", "50"] }
];

export const stepLabels = ["Basic Info", "Additional Info"];

export const genders = ["Male", "Female", "Other"];

export const techRoles = [
  {
    name: "Software Developer",
    icon: "code",
    iconLibrary: "MaterialIcons"
  },
  {
    name: "Frontend Developer",
    icon: "web",
    iconLibrary: "MaterialIcons"
  },
  {
    name: "Backend Developer",
    icon: "database",
    iconLibrary: "FontAwesome5"
  },
  {
    name: "Full-Stack Developer",
    icon: "developer-board",
    iconLibrary: "MaterialIcons"
  },
  {
    name: "Mobile Developer",
    icon: "phone-android",
    iconLibrary: "MaterialIcons"
  },
  {
    name: "DevOps Engineer",
    icon: "server",
    iconLibrary: "FontAwesome5"
  },
  {
    name: "Data Scientist",
    icon: "chart-bar",
    iconLibrary: "FontAwesome5"
  },
  {
    name: "Data Analyst",
    icon: "chart-line",
    iconLibrary: "FontAwesome5"
  },
  {
    name: "Machine Learning Engineer",
    icon: "robot",
    iconLibrary: "FontAwesome5"
  },
  {
    name: "UI/UX Designer",
    icon: "palette",
    iconLibrary: "MaterialIcons"
  },
  {
    name: "Product Manager",
    icon: "clipboard-list",
    iconLibrary: "FontAwesome5"
  },
  {
    name: "Quality Assurance Engineer",
    icon: "bug",
    iconLibrary: "FontAwesome5"
  },
  {
    name: "Cloud Engineer",
    icon: "cloud",
    iconLibrary: "FontAwesome5"
  },
  {
    name: "Cybersecurity Specialist",
    icon: "shield-alt",
    iconLibrary: "FontAwesome5"
  },
  {
    name: "Systems Administrator",
    icon: "cogs",
    iconLibrary: "FontAwesome5"
  },
  {
    name: "Network Engineer",
    icon: "network-wired",
    iconLibrary: "FontAwesome5"
  },
  {
    name: "Database Administrator",
    icon: "database",
    iconLibrary: "FontAwesome5"
  },
  {
    name: "Scrum Master",
    icon: "tasks",
    iconLibrary: "FontAwesome5"
  },
  {
    name: "Technical Writer",
    icon: "file-alt",
    iconLibrary: "FontAwesome5"
  },
  {
    name: "IT Support Specialist",
    icon: "headset",
    iconLibrary: "FontAwesome5"
  }
];

export const socialPlatforms = [
  {
    name: "Facebook",
    icon: "facebook",
    iconLibrary: "FontAwesome"
  },
  {
    name: "Twitter",
    icon: "twitter",
    iconLibrary: "FontAwesome"
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    iconLibrary: "FontAwesome"
  },
  {
    name: "Instagram",
    icon: "instagram",
    iconLibrary: "FontAwesome"
  },
  {
    name: "GitHub",
    icon: "github",
    iconLibrary: "FontAwesome"
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    iconLibrary: "FontAwesome"
  },
  {
    name: "Telegram",
    icon: "telegram",
    iconLibrary: "FontAwesome"
  },
  {
    name: "YouTube",
    icon: "youtube",
    iconLibrary: "FontAwesome"
  },
  {
    name: "Reddit",
    icon: "reddit",
    iconLibrary: "FontAwesome"
  },
  {
    name: "Stack Overflow",
    icon: "stack-overflow",
    iconLibrary: "FontAwesome"
  },
  {
    name: "Dribbble",
    icon: "dribbble",
    iconLibrary: "FontAwesome"
  },
  {
    name: "Behance",
    icon: "behance",
    iconLibrary: "FontAwesome"
  },
  {
    name: "Medium",
    icon: "medium",
    iconLibrary: "FontAwesome"
  },
  {
    name: "Pinterest",
    icon: "pinterest",
    iconLibrary: "FontAwesome"
  },
  {
    name: "X",
    icon: "x",
    iconLibrary: "FontAwesome"
  }
];
