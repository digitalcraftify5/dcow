"use client";

import * as React from "react";
import { MapPin, Navigation, ExternalLink, ShieldCheck, Globe, Clock } from "lucide-react";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { CyberBackground } from "@/components/ui/cyber-background";
import { SITE_CONFIG } from "@/constants/site";

interface LocationHub {
  id: string;
  name: string;
  region: string;
  address: string;
  coords: string;
  status: string;
  gmapsUrl: string;
  mapEmbedUrl: string;
}

export const ContactMapSection: React.FC = () => {
  const HUBS: LocationHub[] = [
    {
      id: "india",
      name: "Core Engineering & Technology HQ",
      region: "India (Headquarters)",
      address: SITE_CONFIG.contact.address.formatted,
      coords: "34.0308° N, 74.7937° E",
      status: "PRIMARY_HQ // CORE_ENGINEERING",
      gmapsUrl: "https://maps.google.com/?q=Al+Mehdi+Colony+Yayil+Rawalpora+Srinagar+Jammu+Kashmir+190005",
      mapEmbedUrl: "https://maps.google.com/maps?q=Al%20Mehdi%20Colony%20Yayil%20Rawalpora%20Srinagar%20Jammu%20Kashmir%20190005&t=&z=14&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: "dubai",
      name: "Dubai Global Operations Hub",
      region: "United Arab Emirates",
      address: "Rigga Business Center - 3001, Al Murqabat, 466-0, Dubai, United Arab Emirates",
      coords: "25.2631° N, 55.3214° E",
      status: "ACTIVE // 24/7 SLA HUB",
      gmapsUrl: "https://maps.google.com/?q=Rigga+Business+Center+3001+Al+Murqabat+Dubai",
      mapEmbedUrl: "https://maps.google.com/maps?q=Rigga%20Business%20Center%203001%20Al%20Murqabat%20Dubai&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: "usa",
      name: "San Francisco Innovation Office",
      region: "United States",
      address: "Market St, San Francisco, CA 94105, USA",
      coords: "37.7749° N, 122.4194° W",
      status: "ACTIVE // NORTH AMERICA HUB",
      gmapsUrl: "https://maps.google.com/?q=San+Francisco+CA",
      mapEmbedUrl: "https://maps.google.com/maps?q=San%20Francisco%20CA&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
  ];

  // Set India HQ as default selected hub
  const [activeHub, setActiveHub] = React.useState<LocationHub>(HUBS[0]);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-zinc-950/80">
      <CyberBackground variant="purple" density={25} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <CyberBadge text="GLOBAL_COORDINATES // INTERACTIVE_MAP" variant="purple" />
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Digital Craftify <span className="text-gradient-purple-cyan">Global Hub Locations</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
            Inspect live coordinates, SLA hub status, and direct map navigation for our global operational hubs.
          </p>
        </div>

        {/* Location Selector Tabs (India HQ First & Selected by Default) */}
        <div className="flex flex-wrap justify-center gap-3">
          {HUBS.map((hub) => (
            <button
              key={hub.id}
              onClick={() => setActiveHub(hub)}
              className={`px-5 py-3 rounded-2xl text-xs font-mono font-bold transition-all duration-300 flex items-center gap-2 ${
                activeHub.id === hub.id
                  ? "bg-purple-600 text-white border border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.6)] scale-105"
                  : "bg-zinc-900/90 text-zinc-400 border border-zinc-800 hover:text-white hover:border-purple-500/40"
              }`}
            >
              <MapPin size={14} className={activeHub.id === hub.id ? "text-purple-300" : "text-zinc-500"} />
              <span>{hub.name}</span>
            </button>
          ))}
        </div>

        {/* Interactive Map & Metadata Display Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl p-6 lg:p-8 glass-card border border-zinc-800/90 shadow-2xl">
          {/* Metadata Left */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <CyberBadge text={activeHub.status} variant="purple" />

              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white">{activeHub.name}</h3>
                <p className="text-xs font-mono text-purple-400 font-bold">{activeHub.region}</p>
              </div>

              <div className="space-y-3 pt-2 border-t border-zinc-800/80 text-xs">
                <div className="flex items-start gap-2.5 text-zinc-300">
                  <MapPin size={16} className="text-purple-400 shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">{activeHub.address}</span>
                </div>

                <div className="flex items-center gap-2.5 text-zinc-300 font-mono">
                  <Navigation size={16} className="text-cyan-400 shrink-0" />
                  <span className="text-cyan-300 font-bold">{activeHub.coords}</span>
                </div>

                <div className="flex items-center gap-2.5 text-zinc-300 font-mono">
                  <Clock size={16} className="text-emerald-400 shrink-0" />
                  <span className="text-emerald-400 font-bold">24/7 SLA Operations Active</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800/80">
              <a
                href={activeHub.gmapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-950/80 border border-purple-500/40 text-xs font-mono font-bold text-purple-300 hover:border-purple-400 hover:text-white transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)]"
              >
                <span>Launch Google Maps Route</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Map Frame Right */}
          <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] rounded-2xl overflow-hidden border border-zinc-800 shadow-inner bg-zinc-900">
            <iframe
              src={activeHub.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(120%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${activeHub.name} Map View`}
              className="absolute inset-0 w-full h-full opacity-85 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
