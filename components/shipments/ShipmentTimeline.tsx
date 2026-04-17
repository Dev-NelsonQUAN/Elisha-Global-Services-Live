import React from 'react';
import { CheckCircle, Clock, XCircle, ChevronRight } from 'lucide-react';

interface TimelineEvent {
  status: 'DELIVERED' | 'IN_TRANSIT' | 'PENDING' | 'ISSUE' | 'COMPLETE';
  location: string;
  date: string;
  isCurrent: boolean;
}

interface ShipmentTimelineProps {
  events: TimelineEvent[];
}

const statusColorMap = {
  DELIVERED: 'text-green-500', // A custom success green is needed
  COMPLETE: 'text-primary',     // Gold for completed steps
  IN_TRANSIT: 'text-primary-700 animate-pulse', // Darker Gold for active step
  PENDING: 'text-muted-foreground', // Gray for future steps
  ISSUE: 'text-destructive', // Red for errors
};

const statusIconMap = {
  DELIVERED: CheckCircle,
  COMPLETE: CheckCircle,
  IN_TRANSIT: Clock,
  PENDING: ChevronRight,
  ISSUE: XCircle,
};

const ShipmentTimeline: React.FC<ShipmentTimelineProps> = ({ events }) => {
  return (
    <div className="relative border-l border-border pl-6 space-y-8">
      
      {events.slice().reverse().map((event, index) => {
        const Icon = statusIconMap[event.status] || Clock;
        const colorClass = statusColorMap[event.status];
        
        const isLatest = index === 0;

        return (
          <div key={index} className="relative">
            <div className={`absolute -left-3.5 top-0 flex items-center justify-center 
                            w-7 h-7 rounded-full border-2 
                            ${isLatest ? 'bg-primary border-primary' : 'bg-card border-border'}`}
            >
              <Icon 
                className={`w-4 h-4 
                  ${isLatest ? 'text-background' : colorClass}
                  ${event.status === 'IN_TRANSIT' ? 'animate-bounce-gentle' : ''}`}
              />
            </div>
            
            {/* Timeline Content */}
            <div className="ml-0 pt-0.5 pb-2">
              <p className={`text-lg font-semibold ${isLatest ? 'text-primary' : 'text-foreground'}`}>
                {event.status.replace('_', ' ')}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {event.location}
              </p>
              <time className="text-xs text-muted-foreground block mt-0.5">
                {event.date}
              </time>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShipmentTimeline;