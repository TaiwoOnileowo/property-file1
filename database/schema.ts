import {
    uuid,
    pgTable,
    varchar,
    text,
    decimal,
    pgEnum,
    date,
    timestamp,
  } from "drizzle-orm/pg-core";

export const ROLE_ENUM = pgEnum("role", ["ADMIN", "USER", "AGENT"]);

export const users = pgTable("users", {
    id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
    fullName: varchar("full_name", { length: 255 }).notNull(),
    email: text("email").notNull().unique(),
    bio: text("bio"),
    profileImage: text("profile_image"),
    password: text("password").notNull(),
    phoneNumber: varchar("phone_number", { length: 20 }),
    role: ROLE_ENUM("role").default("USER"),
    lastActivityDate: date("last_activity_date").notNull().defaultNow(),
    createdAt: timestamp("created_at", {
      withTimezone: true,
    }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});
  
export const agents = pgTable("agents", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull().unique().references(() => users.id, { onDelete: "cascade" }),
  businessName: varchar("company_name", { length: 255 }).notNull(),
  businessImage: text("company_image"),
  address: text("address"),
  description: text("description"),
  website: text("website"),
  facebook: text("facebook"),
  instagram: text("instagram"),
  twitter: text("twitter"),
  linkedin: text("linkedin"),
  whatsappBusiness: varchar("whatsapp_business", { length: 20 }),
  // verificationStatus: verificationStatusEnum("verification_status").default("PENDING"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export const locations = pgTable("locations", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  address: text("address").notNull(),
  city: varchar("city", { length: 100 }).notNull(),
  state: varchar("state", { length: 100 }).notNull(),
  neighborhood: varchar("neighborhood", { length: 100 }),
  latitude: decimal("latitude", { precision: 10, scale: 6 }),
  longitude: decimal("longitude", { precision: 10, scale: 6 }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});