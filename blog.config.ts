import type { ContactPlatformType } from "@core/contact"
import getAuthorContactHref from "@core/contact"

const contacts: Readonly<
    {
        [key in Exclude<ContactPlatformType, "email">]?: string
    } & {
        email: string // ✅ email for RSS
    }
> = {
    email: getAuthorContactHref("email", "danpa725@cau.ac.kr"),
    github: getAuthorContactHref("github", "danpacho"),
}
const author = {
    name: "danpacho",
    introduce:
        "Hi! I'm passionate young man. Young man becomes TOP GUN. You can modify it. Love your self, Plz.",
    faviconUrl: "/favicon.ico",
    bannerImageUrl: "/banner.png",
    contacts,
} as const

const blog = {
    url: "https://notefull-test.vercel.app",
    siteName: "Notefull",
    subtitle: "Dev blog built with notefull ❤️",
    copyright: `${
        author.name
    }© All rights reserved ${new Date().getFullYear()}.`,
    language: "ko",
    googleAnalyticsID: "DISABLED", // default to "DISABLED"
} as const

const config = {
    blogContentsDirectoryName: "blog", // blog contents directory name
    useKatex: false, // katex option
    postPerCategoryPage: 4,
    numberOfLatestPost: 4,
    numberOfMainPageCategory: 5,
    themeColor: "#73d1d7",
    postControllerText: {
        first: (category: string) => `${category}로 돌아가기`, // first post ➡️ no prev post, so replace with your text
        last: (category: string) => `${category}의 마지막 콘텐츠입니다!`, // last post ➡️ no next post, so replace with your text
    },
    navigationMenu: [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Category",
            path: "/category",
        },
        {
            name: "Profile",
            path: "/profile",
        },
    ],
    author,
    ...blog,
} as const

export type BlogInfoType = typeof blog
export type AuthorInfoType = typeof author
export type ConfigType = typeof config

export { config }
