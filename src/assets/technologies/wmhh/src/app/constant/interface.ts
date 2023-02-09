import { FormControl } from "@angular/forms";

export interface PageConfig {
  total: number;
  currentPage: number;
  pageSize?: number;
  isNext?: boolean;
}

export interface IContent {
  type: number;
  lang: string;
  userType: number;
}

export interface IGiftCard {
  giftCardId: string;
  bookingId: string;
}

export interface PropertyHeader {
  locations: string[];
  fromDate: string;
  toDate: string;
}

export interface IRangeSlider {
  min: FormControl;
  max: FormControl;
  options: {
    ceil: number;
    floor: number;
  };
}

export interface IDocument {
  url: string;
  file?: File;
  name?: string;
  type?: string;
}

export interface IMyCurrentLocation {
  city: string;
  state: string;
  country: string;
  latitude: number;
  longitude: number;
  address: string;
  pincode: number;
}

export interface IMyCurrentLocationLocalStorage {
  city: string;
  state: string;
  country: string;
  coocoordinates: [];
  line1: string;
  pincode: number;
}

export interface IMessage {
  isDeleted: boolean;
  messageId: string;
  messageText: string;
  attachment: string;
  messageTimestamp: number;
  messageType: number;
  senderId: string;
  recieverId: string;
  sent: boolean;
  received: boolean;
  thumbnail?: any;
  type?: number;
  file?: File;
  url?: string;
  demoData?: IDemo;
}

export interface IDemo {
  propertyName: string;
  date: number;
  time: string;
  remarks: string;
  status: any;
  demoId: string;
}

export interface IBlockedUser {
  name: string;
  email: string;
  image: string;
  userId: string;
}

export interface IInbox {
  userId: string;
  name: string;
  image: string;
  roomId: string;
  timeStamp: number;
  unreadCount: 0;
  typing: boolean;
  isBlocked: boolean;
  seenTimeStamp: number;
  deleteTimeStamp: number;
}

export interface IChatUser {
  name: string;
  email: string;
  phone: string;
  userId: string;
  userType: any;
  device: any;
  badgeCount: number;
  isOnline: boolean;
}

export interface IPayload {
  messageText: string;
  attachment: string;
  messageType: number;
  thumbnail?: string;
  demoData?: IDemo;
}

export interface IChatFile {
  type: number;
  file: File;
  url: string;
  message?: IMessage;
}

export interface IFileDownloaded {
  name: string;
  url: string;
  uploaded: boolean;
  message?: IMessage;
}

export interface IPreviewFile {
  url: string;
  type: number;
}

export interface IChatNotification {
  [key: string]: INotificationMessage;
}

export interface INotificationMessage {
  senderId: string;
  receiverId: string;
  roomId: string;
  messageText: string;
  messageType: number;
  attachment: string;
  receiverType: any;
  messageTimestamp: number;
  messageId: string;
  demoData?: IDemo;
}

export interface PlacedOrderResponse {
  loyaltyPointUsed: number;
  orderReceiptId: string;
  razorpayOrderId: string;
  deliveredBy: string;
  price: number;
  orderId: string;
  paymentType: string;
  orderReference: string;
}

export interface IGoogleAnalyticsEvent {
  eventName: string;
  eventCategory: string;
  eventAction: string;
  eventLabel: string;
  eventValue?: number;
}
