// app/posts/[slug]

import markdownStyles from "./markdown-styles.module.css";
import markdownToHtml from "@/app/lib/mdToHtml";
import {getPostBySlug} from "@/app/lib/api";
import Image from "next/image";
import DateFormatter from "@/app/components/DateFormatter";
import Container from "@/app/components/Container";

export default async function Post({ params }: { params: { slug: string } }) {
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

                {post?.coverImage && (
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            alt={`cover image for ${post.title}`}
                            src={post.coverImage as string}
                            width={1920}
                            height={1080}
                            style={{ width: "100%" }}
                        />
                    </div>
                )}

                <div
                    className={markdownStyles["markdown"]}
                    dangerouslySetInnerHTML={{ __html: content }}
                />

            </div>
        </Container>
    );
}
