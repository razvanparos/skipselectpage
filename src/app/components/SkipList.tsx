"use client";
import React, { useEffect, useState } from "react";
import SkipCard from "./SkipCard";
import Filter from "./Filter";
import { LoaderCircle } from "lucide-react";

interface Skip {
  id: number;
  size: number;
  price_before_vat: number;
  hire_period_days: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  vat: number;
}

interface Filters {
  minSize: number;
  maxSize: number;
  roadAllowed: boolean | null;
  heavyWaste: boolean | null;
  minPrice: number;
  maxPrice: number;
}

function SkipList() {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [originalSkips, setOriginalSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);
  const [selectedSkipMode, setSelectedSkipMode] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [filters, setFilters] = useState<Filters>({
    minSize: 0,
    maxSize: 50,
    roadAllowed: null,
    heavyWaste: null,
    minPrice: 0,
    maxPrice: 1500,
  });

  const fetchSkips = async () => {
    try {
      const response = await fetch(
        "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch skips");
      }

      const data = await response.json();
      setSkips(data);
      setOriginalSkips(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchSkips();
  }, []);

  useEffect(() => {
    if (selectedSkipId != null) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        const selectedSkip = skips.filter((skip) => skip.id === selectedSkipId);
        setSkips(selectedSkip);
        setSelectedSkipMode(true);
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setSkips(originalSkips);
        setSelectedSkipMode(false);
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [selectedSkipId, originalSkips]);

  const handleSkipSelect = (id: number) => {
    setSelectedSkipId(selectedSkipId === id ? null : id);
  };

  const filteredSkips = skips.filter((skip) => {
    const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);

    if (skip.size < filters.minSize || skip.size > filters.maxSize) {
      return false;
    }

    if (totalPrice < filters.minPrice || totalPrice > filters.maxPrice) {
      return false;
    }

    if (
      filters.roadAllowed !== null &&
      skip.allowed_on_road !== filters.roadAllowed
    ) {
      return false;
    }

    if (
      filters.heavyWaste !== null &&
      skip.allows_heavy_waste !== filters.heavyWaste
    ) {
      return false;
    }

    return true;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <LoaderCircle className="animate-spin h-12 w-12 text-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-red-600 text-center">
          <p className="text-lg font-semibold">Error loading skips</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-y-8">
        <Filter filters={filters} onFilterChange={setFilters} selectedSkipMode={selectedSkipMode}/>

        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg md:text-3xl font-bold text-gray-900">
              {selectedSkipMode?'Selected Skip':'Available Skips'}
            </h2>
            <p className="text-gray-600">
              {filteredSkips.length}{" "}
              {filteredSkips.length === 1 ? "skip" : "skips"} found
            </p>
          </div>
          <div className={`grid grid-cols-1 ${selectedSkipMode?'grid-cols-1':'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
            {filteredSkips.map((skip) => (
              <div
                key={skip.id}
                className={`transition-all duration-300 ease-in-out ${
                  isTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
                }`}
              >
                <SkipCard
                  {...skip}
                  isSelected={selectedSkipId === skip.id}
                  onSelect={handleSkipSelect}
                  selectedSkipMode={selectedSkipMode}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkipList;
