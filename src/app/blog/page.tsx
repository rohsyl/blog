import {getAllPosts} from "@/app/lib/api";
import React from "react";
import PostPreview from "@/app/components/Blog/PostCard";

export default function Home() {
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

    return (
        <div className="container mx-auto px-5">
            <main>
                <h1 className="text-center text-3xl">All Posts</h1>

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
