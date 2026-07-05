import "server-only";

import { ObjectId } from "mongodb";

import { getDb } from "./db";

const COLLECTION = "contact_messages";

export type ContactMessage = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
};

type ContactMessageDocument = Omit<ContactMessage, "_id" | "createdAt"> & {
  _id: ObjectId;
  createdAt: Date;
};

export type NewContactMessage = Omit<ContactMessage, "_id" | "createdAt">;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function parseContactMessage(body: unknown): NewContactMessage {
  const input = body as Record<string, unknown>;
  return {
    name: clean(input.name),
    email: clean(input.email),
    phone: clean(input.phone),
    message: clean(input.message),
  };
}

export function validateContactMessage(message: NewContactMessage) {
  if (!message.name || !message.phone || !message.message) {
    return "Name, phone, and message are required.";
  }

  if (message.name.length > 80) {
    return "Name is too long.";
  }

  if (message.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(message.email)) {
    return "Enter a valid email address.";
  }

  if (message.phone.length > 30) {
    return "Phone number is too long.";
  }

  if (message.message.length > 1000) {
    return "Message is too long.";
  }

  return null;
}

export async function saveContactMessage(message: NewContactMessage) {
  const db = await getDb();
  await db.collection<NewContactMessage & { createdAt: Date }>(COLLECTION).insertOne({
    ...message,
    createdAt: new Date(),
  });
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  const db = await getDb();
  const messages = await db
    .collection<ContactMessageDocument>(COLLECTION)
    .find({})
    .sort({ createdAt: -1 })
    .limit(50)
    .toArray();

  return messages.map((message) => ({
    _id: message._id.toString(),
    name: message.name,
    email: message.email,
    phone: message.phone,
    message: message.message,
    createdAt: message.createdAt.toISOString(),
  }));
}
