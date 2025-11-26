// app/posts/[slug]

import markdownStyles from "./markdown-styles.module.css";
import markdownToHtml from "@/app/lib/mdToHtml";
import {getPostBySlug} from "@/app/lib/api";
import Image from "next/image";
import DateFormatter from "@/app/components/DateFormatter";
import Container from "@/app/components/Container";

export default async function Post(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = getPostBySlug(params.slug, ["title", "author", "content", "coverImage", "date"]);

    const content = await markdownToHtml((post.content || "") as string);

    return (
        <Container>
            <div className="w-full text-black dark:text-white">
                <div className="mb-10 text-black dark:text-white">
                    <p className="text-2xl">{post.title}</p>
                    <p className="text-gray-400">
                        {post.author} |{" "}
                        <DateFormatter dateString={post.date as string} />
                    </p>
                </div>

                {(post?.coverImage && typeof post.coverImage === "string") && (
                    <Image
                        alt={`cover image for ${post.title}`}
                        src={post.coverImage}
                        className="max-h-64 w-auto rounded-lg"
                        width={1920}
                        height={1080}
                    />
                )}

                <div
                    className="markdown"
                    dangerouslySetInnerHTML={{ __html: content }}
                />

            </div>
        </Container>
    );
}
