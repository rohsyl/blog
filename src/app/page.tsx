import Image from 'next/image'
import PostHero from "@/app/components/Blog/PostHero";
import {getAllPosts} from "@/app/lib/api";
import PostPreview from "@/app/components/Blog/PostCard";
import Link from "next/link";
import Container from "@/app/components/Container";
import { TypeAnimation } from 'react-type-animation';
import AnimatedTitle from "@/app/components/AnimatedTitle";

export default function Home() {

    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug", "excerpt", 'author', "published"]);
    const recentPosts = posts.slice(0, 2);

  return (
      <>
          <Container>
              <div className="mb-20">
                  <div className="mx-auto max-w-screen-sm text-center">
                      <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        <AnimatedTitle />
                      </h2>
                  </div>

                  <div className="flex">
                      <div className="flex-grow text-center font-light text-gray-500 sm:text-xl dark:text-gray-400">
                          I&apos;m a software engineer and I like to build things. <br/>
                          I&apos;m currently working at Studer Innotec as a fullstack developer.<br/>
                          This blog is a place where I share my thoughts and ideas about software development.
                      </div>
                      <div>
                      </div>
                  </div>
              </div>
          </Container>
          <div className="max-h-64 overflow-hidden mb-20 relative">
              <Image src={'/banner-home.jpg?1'} alt={'banner-home.jpg'}
                     width={1920}
                     height={350}
                     style={{objectFit:"cover", objectPosition:"center"}}
              />
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                    className="bg-opacity-70 bg-white dark:bg-black dark:bg-opacity-70"></div>
          </div>
          <Container>

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
              <div className="h-8"></div>
              <div className="text-center">
                  <Link
                      href="/blog"
                      className="text-2xl hover:text-gray-300 hover:underline"
                  >
                      Read More...
                  </Link>
              </div>

          </Container>
      </>
  )
}
