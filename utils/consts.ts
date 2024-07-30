import { dailyReward, friends, telegram, twitter, youtube } from "@/images";

export const MAX_ENERGY_REFILLS_PER_DAY = 6;
export const ENERGY_REFILL_COOLDOWN = 60 * 60 * 1000; // 1 hour in milliseconds


// Multitap
export const multitapUpgradeBasePrice = 1000;
export const multitapUpgradeCostCoefficient = 2;

export const multitapUpgradeBaseBenefit = 1;
export const multitapUpgradeBenefitCoefficient = 1;

// Energy
export const energyUpgradeBasePrice = 1000;
export const energyUpgradeCostCoefficient = 2;

export const energyUpgradeBaseBenefit = 500;
export const energyUpgradeBenefitCoefficient = 1;

// Mine (profit per hour)
export const mineUpgradeBasePrice = 1000;
export const mineUpgradeCostCoefficient = 1.5;

export const mineUpgradeBaseBenefit = 100;
export const mineUpgradeBenefitCoefficient = 1.2;






export const earnData = [
    {
      category: "Youtube Goals",
      tasks: [
        {
          id: "1",
          title: "Follow Gameotivity on Youtube",
          tokens: 5000,
          image: "youtube",
          description: "We going to start Footballers podcast",
          callToAction: "Watch video",
          type: "youtube",
          link: "#",
          taskStartTimestamp: new Date("2024-07-29T00:00:00Z")
        },
        {
          id: "2",
          title: "GTap Offical Trailer",
          tokens: 5000,
          image: "youtube",
          description: "The offical Trailer of the GTap",
          callToAction: "Watch video",
          type: "youtube",
          link: "#",
          taskStartTimestamp: new Date("2024-07-29T00:00:00Z")
        },
      ]
    },
    {
      category: "Tasks list",
      tasks: [
        {
          id: "4",
          title: "GTap Telegram Channel",
          tokens: 5000,
          image: "telegram",
          description: "Stay updated with the latest news and announcements by joining our Telegram channel.",
          callToAction: "Join channel",
          type: "telegram",
          link: "#",
          taskStartTimestamp: new Date("2024-07-29T00:00:00Z")
        },
        {
          id: "5",
          title: "Follow GTap-Offical X",
          tokens: 5000,
          image: "twitter",
          description: "Follow us on X (formerly Twitter) for real-time updates and community engagement.",
          callToAction: "Follow on X",
          type: "twitter",
          link: "#",
          taskStartTimestamp: new Date("2024-07-29T00:00:00Z")
        },
        {
          id: "6",
          title: "Invite 3 friends",
          tokens: 25000,
          image: "friends",
          description: "Invite your friends to join the Ice community and earn bonus tokens for each successful referral.",
          callToAction: "Invite friends",
          type: "referral",
          link: "",
          taskStartTimestamp: null
        }
      ]
    },
  ];