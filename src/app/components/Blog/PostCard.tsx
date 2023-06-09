import Image from "next/image";
import Link from "next/link";
import DateFormatter from "@/app/components/DateFormatter";

type Items = {
    [key: string]: string;
};

export default function PostPreview({ post }: { post: Items }) {
    return (
        <div className="h-100">
            <article
                className="h-100 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-black dark:border-gray-700 ">

                {post?.coverImage && (
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
                            <DateFormatter dateString={post.date} />
                        </div>
                    </div>
                    <Link href={`/blog/posts/${post.slug}`}
                       className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                        Read more
                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </Link>
                </div>
            </article>

            <Link href={`/blog/posts/${post.slug}`}>

                <div className="mt-4 space-y-2">
                    <p className="font-semibold text-xl group-hover:underline">

                    </p>
                </div>
            </Link>
        </div>
    );
}