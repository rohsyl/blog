import {getAllPosts} from "@/app/lib/api";
import React from "react";
import PostPreview from "@/app/components/Blog/PostCard";

export default function Home() {
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

    return (
        <div className="container mx-auto px-5">
            <main>
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Posts</h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Here are all my posts. Enjoy ! 🎉
                    </p>
                </div>

                <div className="h-12"></div>

                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
                    {posts.map((post) => (
                        <div key={post.title}>
                            <PostPreview post={post} />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
