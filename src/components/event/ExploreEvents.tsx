"use client";
import FilterBar from "@/components/event/FilterBar";
import EventCard from "@/components/event/EventCard";
import { useState } from "react";

export interface EventInterface {
  id: number;
  title: string;
  date: string;
  category: string;
  participants: number;
  status: "Past" | "Live" | "Upcoming";
  imageUrl: string;
  description: string;
  skills: string[];
  price: number;
  instructor?: {
    name: string;
    avatar: string;
    role: string;
  };
}
export const events: EventInterface[] = [
  {
    id: 1,
    title: "System Design Interview Prep",
    date: "2024-03-25",
    category: "Workshop",
    participants: 1500,
    status: "Upcoming",
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
    description:
      "Master system design interviews with real-world scenarios and expert guidance.",
    skills: ["System Design", "Scalability", "Architecture"],
    price: 0,
    instructor: {
      name: "Alex Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
      role: "Senior System Architect",
    },
  },
  {
    id: 2,
    title: "React Performance Masterclass",
    date: "2024-03-30",
    category: "Competition",
    participants: 800,
    status: "Past",
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000",
    description:
      "Learn advanced React optimization techniques from industry experts.",
    skills: ["React", "Performance", "JavaScript"],
    price: 0,
    instructor: {
      name: "Sarah Chen",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      role: "Senior Frontend Engineer",
    },
  },
  {
    id: 3,
    title: "Machine Learning Bootcamp",
    date: "2024-04-05",
    category: "Workshop",
    participants: 600,
    status: "Live",
    imageUrl:
      "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&q=80&w=1000",
    description:
      "Intensive ML bootcamp covering neural networks, deep learning, and practical applications.",
    skills: ["Python", "ML", "Neural Networks"],
    price: 0,
    instructor: {
      name: "Dr. James Wilson",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      role: "AI Research Scientist",
    },
  },
  {
    id: 4,
    title: "Cloud Architecture Summit",
    date: "2024-04-20",
    category: "Algorithm",
    participants: 1200,
    status: "Past",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    description: "Learn cloud-native architecture patterns and best practices.",
    skills: ["AWS", "Azure", "Cloud Design"],
    price: 0,
    instructor: {
      name: "Maria Garcia",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
      role: "Cloud Solutions Architect",
    },
  },
];

export default function ExploreEvent() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "all" || event.category === selectedCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Explore Events</h2>
        </div>

        <FilterBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredEvents.length === 0 ? (
            <div className="min-h-[30vh] col-span-full text-center text-gray-600">
              <p>
                No events found matching your criteria. Please try different
                filters.
              </p>
            </div>
          ) : (
            filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
