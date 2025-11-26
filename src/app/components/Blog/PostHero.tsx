import Image from "next/image";
import Link from "next/link";
import DateFormatter from "@/app/components/DateFormatter";
import {getPostBySlug} from "@/app/lib/api";

type Items = {
    [key: string]: string;
};

export default function PostHero() {
    const heroPost = getPostBySlug("hero-post", [
        "title",
        "excerpt",
        "slug",
        "date",
        "coverImage",
    ]);

    return (
        <Link href={`/blog/posts/${heroPost.slug}`}>
            <div className="w-full mx-auto group">

                <div className="grid mt-4 md:grid-cols-2 grid-cols-1">
                    <div className="mb-2">
                        <p className="font-semibold text-xl group-hover:underline">
                            {heroPost.title}
                        </p>
                        {typeof heroPost.date === 'string' && (
                            <DateFormatter dateString={heroPost.date} />
                        )}
                    </div>
                    <p>{heroPost.excerpt}</p>
                </div>

                {(heroPost?.coverImage && typeof heroPost.coverImage === "string") && (
                    <Image
                        alt={`cover image for ${heroPost.title}`}
                        src={heroPost.coverImage}
                        width={1920}
                        height={1080}
                        style={{ width: "100%" }}
                    />
                )}
            </div>
        </Link>
    );
}