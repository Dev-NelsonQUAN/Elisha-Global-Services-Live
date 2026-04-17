export type ShipmentStatus = 'DELIVERED' | 'IN_TRANSIT' | 'PENDING' | 'ISSUE' | 'COMPLETE';

export interface TimelineEvent {
  status: ShipmentStatus;
  location: string;
  date: string;
  isCurrent: boolean;
}

export interface ShipmentDetails {
  id: string;
  trackingNumber: string;
  status: ShipmentStatus;
  origin: string;
  destination: string;
  estimatedDelivery: string;
  timeline: TimelineEvent[];
}