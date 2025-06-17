import {
  pgTable,
  serial,
  varchar,
  boolean,
  timestamp,
  integer,
  text,
  primaryKey,
  uuid,
  pgEnum,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const ROLE_ENUM = pgEnum("role", ["USER", "ADMIN"]);

export const about = pgTable("about", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const jobs = pgTable("jobs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  interval: text("title").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  sectionName: varchar("section_name").notNull(),
  title: varchar("title").notNull(),
  sub_title: text("sub_title"),
  servicesImage: text("services_image"),
  serviceDescription: text("service_description"),
  service01p: text("service_paragraph01"),
  service02p: text("service_paragraph02"),
  includesList: text("includes_list"),
  backgroundColor: text("background_color"),
});

// Таблица проектов (портфолио)
export const works = pgTable("works", {
  id: serial("id").primaryKey(),
  sectionName: varchar("section_name").notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  type: text("project_type").notNull(),
  description: text("description").notNull(),
  repoUrl: varchar("repo_url", { length: 255 }),
  liveUrl: varchar("live_url", { length: 255 }),
  image: varchar("image", { length: 255 }), // путь к обложке проекта
  alt: varchar("alt", { length: 255 }),
  createdAt: timestamp("created_at").default(sql`NOW()`),
  lockedYN: integer("locked_YN").notNull().default(0),
  backgroundColor: text("background_color"),
});
// Страница проектов (портфолио)
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  subtitle: varchar("subtitle", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  type: text("project_type").notNull(),
  description: text("description").notNull(),
  repoUrl: varchar("repo_url", { length: 255 }),
  liveUrl: varchar("live_url", { length: 255 }),
  image: varchar("image", { length: 255 }), // путь к обложке проекта
  alt: varchar("alt", { length: 255 }),
  createdAt: timestamp("created_at").default(sql`NOW()`),
  lockedYN: integer("locked_YN").notNull().default(0),
  priority: integer("priority").notNull().default(1),
  backgroundColor: text("background_color"),
});

export const projectImages = pgTable("project_images", {
  id: serial("id").primaryKey(),
  projectId: integer("project_id")
    .notNull()
    .references(() => projects.id, { onDelete: "cascade" }),
  imageUrl: varchar("image_url", { length: 255 }).notNull(),
  alt: varchar("alt", { length: 255 }), // если нужно описание изображения
  order: integer("order"), // если надо задать порядок отображения
  lockedYN: integer("locked_YN").notNull().default(0),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  company: varchar("company", { length: 100 }),
  email: varchar("email", { length: 150 }).notNull().unique(),
  phone: varchar("phone").unique(),
  passwordHash: text("password_hash").notNull(),
  // role: varchar("role", { length: 20 }).default("admin"),
  // role: varchar("role", { length: 20 }),
  role: ROLE_ENUM("role").default("USER"),
  //   createdAt: timestamp("created_at").default(sql`NOW()`),
  notes: text("notes"),
  active: boolean("active").notNull().default(true),
  lockedYN: integer("locked_YN").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

// Таблица категорий блога
export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull().unique(),
  slug: varchar("slug", { length: 150 }).notNull().unique(),
  createdAt: timestamp("created_at").default(sql`NOW()`),
});

// Таблица тегов блога
export const tags = pgTable("tags", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull().unique(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
});

// Таблица постов блога
export const posts = pgTable("posts", {
  // id: serial("id").primaryKey(),
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  image: varchar("image", { length: 255 }),
  alt: varchar("alt", { length: 255 }),
  content: text("content").notNull(),
  categoryId: integer("category_id").references(() => categories.id, {
    onDelete: "cascade",
  }),
  authorId: integer("author_id").references(() => users.id, {
    onDelete: "cascade",
  }),
  published: boolean("published").default(false),
  createdAt: timestamp("created_at").default(sql`NOW()`),
  updatedAt: timestamp("updated_at").default(sql`NOW()`),
  views: integer("views").default(0), // Track the total number of views
  likes: integer("likes").default(0), // Track the total number of likes
  lockedYN: integer("locked_YN").notNull().default(0),
});

// Связь многие ко многим (посты <-> теги) - ???
export const postTags = pgTable(
  "post_tags",
  {
    postId: uuid("post_id").references(() => posts.id, {
      onDelete: "cascade",
    }),
    tagId: integer("tag_id").references(() => tags.id, { onDelete: "cascade" }),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.postId, table.tagId] }),
  })
);

// Таблица комментариев
export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  postId: uuid("post_id")
    .references(() => posts.id, { onDelete: "cascade" })
    .notNull(),
  authorId: integer("author_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  content: text("content").notNull(),
  // createdAt: timestamp("created_at").default(sql`NOW()`),
  createdAt: timestamp("created_at", {
    withTimezone: true,
  }).defaultNow(),
  updatedAt: timestamp("updated_at").default(sql`NOW()`),
  lockedYN: integer("locked_YN").notNull().default(0),
});

export const guests = pgTable("guests", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name").notNull(),
  lastName: varchar("last_name").notNull(),
  email: varchar("email").unique().notNull(),
  phone: varchar("phone").unique().notNull(),
  notes: text("notes"),
  active: boolean("active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
  lockedYN: integer("locked_YN").notNull().default(0),
});
