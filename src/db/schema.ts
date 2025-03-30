import { pgTable, serial, varchar, boolean, timestamp, integer, text, primaryKey } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";

export const header = pgTable("header", {
	id: serial("id").primaryKey(),
	name: varchar("first_name").notNull(),
})

// export const footer = pgTable("footer", {
// 	id: serial("id").primaryKey(),
// 	name: varchar("first_name").notNull(),
// })

export const about = pgTable("footer", {
	id: serial("id").primaryKey(),
    name: varchar("first_name").notNull(),
    description: text("description").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
})

export const hero = pgTable("hero", {
	id: serial("id").primaryKey(),
    name: varchar("first_name").notNull(),
    title: text("title"),
    sub_title: text("sub_title"),
})

export const burger = pgTable("burger", {
	id: serial("id").primaryKey(),
	name: varchar("first_name").notNull(),
})

export const services = pgTable("services", {
	id: serial("id").primaryKey(),
	title: varchar("title").notNull(),
    sub_title: text("sub_title"),
    servicesImage: text("services_image"),
    serviceDescription: text("service_description"),
})

// Таблица проектов (портфолио)
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: text("description").notNull(),
  repoUrl: varchar("repo_url", { length: 255 }),
  liveUrl: varchar("live_url", { length: 255 }),
  image: varchar("image", { length: 255 }), // путь к обложке проекта
  createdAt: timestamp("created_at").default(sql`NOW()`),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  company: varchar("company", { length: 100 }),
  email: varchar("email", { length: 150 }).notNull().unique(),
  phone: varchar("phone").unique(),
  passwordHash: text("password_hash").notNull(),
  role: varchar("role", { length: 20 }).default("admin"),
//   createdAt: timestamp("created_at").default(sql`NOW()`),
  notes: text("notes"),
  active: boolean("active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
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
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  content: text("content").notNull(),
  categoryId: integer("category_id").references(() => categories.id, { onDelete: "cascade" }),
  authorId: integer("author_id").references(() => users.id, { onDelete: "cascade" }),
  published: boolean("published").default(false),
  createdAt: timestamp("created_at").default(sql`NOW()`),
  updatedAt: timestamp("updated_at").default(sql`NOW()`),
});

// Связь многие ко многим (посты <-> теги)
export const postTags = pgTable("post_tags", {
  postId: integer("post_id").references(() => posts.id, { onDelete: "cascade" }),
  tagId: integer("tag_id").references(() => tags.id, { onDelete: "cascade" }),
}, (table) => ({
  pk: primaryKey({ columns: [table.postId, table.tagId] }),
}));

// Таблица комментариев
export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  postId: integer("post_id").references(() => posts.id, { onDelete: "cascade" }).notNull(),
  authorId: integer("author_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").default(sql`NOW()`),
  updatedAt: timestamp("updated_at").default(sql`NOW()`),
});



export const customers = pgTable("customers", {
	id: serial("id").primaryKey(),
	firstName: varchar("first_name").notNull(),
    lastName: varchar("last_name").notNull(),
    email: varchar("email").unique().notNull(),
    phone: varchar("phone").unique().notNull(),
    notes: text("notes"),
    active: boolean("active").notNull().default(true),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
})

export const tickets = pgTable("tickets", {
    id: serial("id").primaryKey(),
    customerId: integer("customer_id").notNull().references(() => customers.id),
    title: varchar("title").notNull(),
    description: text("description"),
    completed: boolean("completed").notNull().default(false),
    tech: varchar("tech").notNull().default("unassigned"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
})

// Create relations 
export const customersRelations = relations(customers,
    ({ many }) => ({
        tickets: many(tickets),
    })
)

export const ticketsRelations = relations(tickets,
    ({ one }) => ({
        customer: one(customers, {
            fields: [tickets.customerId],
            references: [customers.id],
        })
    })
)