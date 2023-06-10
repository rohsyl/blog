import {getAllPosts, Items} from "@/app/lib/api";
import React from "react";
import PostPreview from "@/app/components/Blog/PostCard";
import Container from "@/app/components/Container";

export default function Home() {
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
    const postGroups = posts
        .reduce((acc, post, i) => {
            const index = i % 2;
            acc[index] = acc[index] || [];
            // @ts-ignore
            acc[index].push(post);
            return acc;
        }, [] as Items[][]);

    return (
        <Container>
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Posts</h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                    Here are all my posts. Enjoy ! 🎉
                </p>
            </div>

            <div className="h-12"></div>

            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4 ">

                {postGroups.map((postItems, i) => (
                    <div className="grid gap-4" key={i}>
                        {postItems.map((post) => (
                            <div key={post.title}>
                                <PostPreview post={post} />
                            </div>
                        ))}
                    </div>
                ))}

            </div>
            <div className="grid md:hidden grid-cols-1 md:grid-cols-2 gap-4 ">
                {posts.map((post) => (
                    <div key={post.title}>
                        <PostPreview post={post} />
                    </div>
                ))}
            </div>
        </Container>
    );
}
