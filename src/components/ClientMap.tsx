import React, { memo, useState, useRef, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';

const GEO_URL =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const CLIENT_COUNTRIES: string[] = [
  'US', 'CA', 'GB', 'DE', 'FR', 'AU', 'AE', 'NL', 'JP', 'IN', 'CN', 'BR', 'ZA',
];

const INDIA_COORDS: [number, number] = [78.9629, 20.5937];

const CLIENT_MARKERS: { countryCode: string; name: string; coordinates: [number, number] }[] = [
  { countryCode: 'US', name: 'United States', coordinates: [-95.7129, 37.0902] },
  { countryCode: 'CA', name: 'Canada', coordinates: [-106.3468, 56.1304] },
  { countryCode: 'GB', name: 'United Kingdom', coordinates: [-3.4360, 55.3781] },
  { countryCode: 'DE', name: 'Germany', coordinates: [10.4515, 51.1657] },
  { countryCode: 'FR', name: 'France', coordinates: [2.2137, 46.2276] },
  { countryCode: 'AU', name: 'Australia', coordinates: [133.7751, -25.2744] },
  { countryCode: 'AE', name: 'UAE', coordinates: [55.1764, 23.4241] },
  { countryCode: 'IN', name: 'India', coordinates: INDIA_COORDS },
];

// Color palette
const MAP_OCEAN_FILL = '#BFDBFE';
const MAP_DEFAULT_COUNTRY_FILL = '#F3F4F6';
const MAP_HOVER_COUNTRY_FILL = '#D1D5DB';
const CLIENT_FILL_START = '#FBBC05';
const CLIENT_FILL_END = '#D97706';
const MARKER_FILL_COLOR = '#10B981';
const MARKER_STROKE_COLOR = '#FFFFFF';

type MapPosition = {
  coordinates: [number, number];
  zoom: number;
};

const ClientMap: React.FC = memo(() => {
  const [tooltipContent, setTooltipContent] = useState<string>('');
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const mapRef = useRef<any>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState<MapPosition>({ coordinates: [0, 0], zoom: 1 });

  // Function to calculate tooltip position (no changes)
  const calculateTooltipPosition = (clientX: number, clientY: number) => {
    if (!tooltipRef.current) return { x: clientX, y: clientY };
    const tooltipWidth = tooltipRef.current.offsetWidth;
    const tooltipHeight = tooltipRef.current.offsetHeight;
    const mapBounds = mapRef.current?.getBoundingClientRect();
    let newX = clientX + 15;
    let newY = clientY - tooltipHeight - 10;
    if (mapBounds) {
      if (newX + tooltipWidth > mapBounds.right) {
        newX = clientX - tooltipWidth - 15;
      }
      if (newY < mapBounds.top) {
        newY = clientY + 15;
      }
      if (newY + tooltipHeight > mapBounds.bottom) {
        newY = clientY - tooltipHeight - 15;
      }
    }
    return { x: newX, y: newY };
  };

  const handleMouseEnter = (geo: any, event: React.MouseEvent) => {
    const isClient = CLIENT_COUNTRIES.includes(geo.properties.iso_a2);
    const countryName = geo.properties.name;
    setTooltipContent(countryName + (isClient ? ' (Client)' : ''));
    setTooltipPos(calculateTooltipPosition(event.clientX, event.clientY));
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (tooltipContent) {
      setTooltipPos(calculateTooltipPosition(event.clientX, event.clientY));
    }
  };

  const handleMouseLeave = () => {
    setTooltipContent('');
    setTooltipPos(null);
  };

  const handleCountryClick = (geo: any) => {
    const iso = (geo.properties && geo.properties.iso_a2) || '';
    if (iso === 'IN') {
      setPosition({ coordinates: INDIA_COORDS, zoom: 4 });
    } else {
      // You can add logic here to zoom to other countries if needed
    }
  };

  const handleResetZoom = () => {
    setPosition({ coordinates: [0, 0], zoom: 1 });
  };

  const handleMoveEnd = (position: MapPosition) => {
    setPosition(position);
  };

  return (
    <div
      className="relative rounded-xl shadow-xl overflow-hidden border border-slate-200"
      style={{ height: '500px' }}
      onMouseMove={handleMouseMove}
    >
      <ComposableMap
        ref={mapRef}
        projection="geoMercator"
        projectionConfig={{
          scale: 160,
          center: [0, 0],
        }}
        style={{ width: '100%', height: '100%', backgroundColor: MAP_OCEAN_FILL }}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo) => {
                const iso = (geo.properties && geo.properties.iso_a2) || '';
                const isClient = CLIENT_COUNTRIES.includes(iso);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={(event) => handleMouseEnter(geo, event)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleCountryClick(geo)}
                    style={{
                      default: {
                        fill: isClient ? `url(#clientGradient)` : MAP_DEFAULT_COUNTRY_FILL,
                        stroke: '#afafafff',
                        strokeWidth: 0.75,
                        outline: 'none',
                        transition: 'all 250ms ease-in-out',
                      },
                      // --- MODIFIED: Removed conflicting 'transform' ---
                      hover: {
                        fill: isClient ? CLIENT_FILL_END : MAP_HOVER_COUNTRY_FILL,
                        stroke: '#FFFFFF',
                        strokeWidth: 0.75,
                        outline: 'none',
                        cursor: 'pointer',
                        // transform: 'scale(1.02)', // <-- Removed this
                        transition: 'all 250ms ease-in-out',
                      },
                      // --- MODIFIED: Removed conflicting 'transform' ---
                      pressed: {
                        fill: isClient ? CLIENT_FILL_END : MAP_HOVER_COUNTRY_FILL,
                        stroke: '#FFFFFF',
                        strokeWidth: 0.75,
                        outline: 'none',
                        // transform: 'scale(0.98)', // <-- Removed this
                        transition: 'all 150ms ease-in-out',
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>

          <defs>
            <linearGradient id="clientGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={CLIENT_FILL_START} />
              <stop offset="100%" stopColor={CLIENT_FILL_END} />
            </linearGradient>
          </defs>

          {CLIENT_MARKERS.map(({ name, coordinates, countryCode }) => {
            if (CLIENT_COUNTRIES.includes(countryCode)) {
              return (
                <Marker key={name} coordinates={coordinates}>
                  <circle
                    r={7}
                    fill={MARKER_FILL_COLOR}
                    stroke={MARKER_STROKE_COLOR}
                    strokeWidth={1.5}
                    className="animate-pulse"
                  />
                </Marker>
              );
            }
            return null;
          })}
        </ZoomableGroup>
      </ComposableMap>

      {/* Reset Zoom Button */}
      <button
        onClick={handleResetZoom}
        className="absolute bottom-4 right-4 bg-white text-slate-700 px-3 py-1 rounded-md shadow-lg text-xs font-semibold hover:bg-slate-100 transition-colors z-10"
      >
        Reset View
      </button>

      {/* Custom Tooltip (no changes) */}
      {tooltipContent && tooltipPos && (
        <div
          ref={tooltipRef}
          className="absolute z-50 bg-slate-800 text-white text-xs px-2 py-1 rounded shadow-md pointer-events-none transition-opacity duration-200"
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y,
          }}
        >
          {tooltipContent}
        </div>
      )}
    </div>
  );
});

ClientMap.displayName = 'ClientMap';

export default ClientMap;