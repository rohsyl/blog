import Image from 'next/image'
import PostHero from "@/app/components/Blog/PostHero";
import {getAllPosts} from "@/app/lib/api";
import PostPreview from "@/app/components/Blog/PostCard";
import Link from "next/link";

export default function Home() {

    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug", "excerpt", 'author']);
    const recentPosts = posts.slice(0, 2);

  return (
      <div>
          <div className="mb-20">


              <div className="mx-auto max-w-screen-sm text-center">
                  <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                      Hi, I&apos;m Sylvain Roh
                  </h2>
              </div>

              <div className="flex">
                  <div className="flex-grow text-center font-light text-gray-500 sm:text-xl dark:text-gray-400">
                      I&apos;m a software engineer and I like to build things. <br/>
                      I&apos;m currently working at Coucou&Co and Hustnet as a fullstack developer.<br/>
                      This blog is a place where I share my thoughts and ideas about software development.
                  </div>
                  <div>
                  </div>
              </div>
          </div>

          {/*<PostHero /><div className="h-16"></div>*/}

          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
              <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Recent posts</h2>
              <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                    Here are some of my recent posts. I hope you enjoy reading them as much as I enjoyed writing them.
              </p>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 mx-auto md:gap-8 gap-4">
              {recentPosts.map((post) => (
                  <div key={post.title}>
                      <PostPreview post={post} noImage={true} />
                  </div>
              ))}
          </div>
          <div className="h-16"></div>
          <Link
              href="/blog"
              className="text-3xl hover:text-gray-300 hover:underline"
          >
              Read More{" -> "}
          </Link>

      </div>
  )
}
