/**
 * Mock data for the team / about page.
 *
 * NOTE: In production, this data is served dynamically via the backend API
 * (see src/lib/api/apiTeam.ts). This file provides static mock data
 * for the public/portfolio version of DevAura.
 */

import { Team } from "@/types/team";

export const mockTeam: Team[] = [
  {
    id: 1,
    name: "Hussein Imad",
    job: "Full-Stack Developer & Project Lead",
    image_url: "/images/team/placeholder.webp",
    created_at: "2024-01-01",
  },
  {
    id: 2,
    name: "Team Member",
    job: "Frontend Developer",
    image_url: "/images/team/placeholder.webp",
    created_at: "2024-01-01",
  },
  {
    id: 3,
    name: "Team Member",
    job: "UI/UX Designer",
    image_url: "/images/team/placeholder.webp",
    created_at: "2024-01-01",
  },
  {
    id: 4,
    name: "Team Member",
    job: "Backend Developer",
    image_url: "/images/team/placeholder.webp",
    created_at: "2024-01-01",
  },
];
