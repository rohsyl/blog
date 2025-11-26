import Image from "next/image";
import Link from "next/link";
import DateFormatter from "@/app/components/DateFormatter";
import {Items} from "@/app/lib/api";


export default function PostPreview(props: { post: Items, noImage?: boolean }) {

    const { post, noImage = false } = props

    return (
        <div>
            <article
                className="p-6 bg-white rounded-lg border border-zinc-200 shadow-md dark:bg-black dark:border-zinc-700 ">

                {((post?.coverImage && typeof post.coverImage === "string") && !noImage) && (
                    <div className="flex justify-center mb-5 max-h-64 ">
                        <Image
                            alt={`cover image for ${post.title}`}
                            className="rounded-lg overflow-hidden"
                            src={post.coverImage}
                            width={600}
                            height={600}
                            style={{objectFit:"cover", borderRadius:"0.5rem"}}
                        />
                    </div>
                )}
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <Link href={`/blog/posts/${post.slug}`}>
                        {post.title}
                    </Link>
                </h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                    {post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                    <div className="">
                        <div className="font-medium dark:text-white">
                            {post.author}
                        </div>
                        <div>
                            {typeof post.date === 'string' && (
                                <DateFormatter dateString={post.date} />
                            )}
                        </div>
                    </div>
                    <Link href={`/blog/posts/${post.slug}`}
                       className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                        Read more
                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </Link>
                </div>
            </article>
        </div>
    );
}