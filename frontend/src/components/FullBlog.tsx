import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlockCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4 md:px-10 w-full max-w-screen-xl pt-12">
                    {/* Main Content Area */}
                    <div className="md:col-span-8">
                        <div className="text-3xl md:text-5xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="text-slate-500 pt-2 text-sm md:text-base">
                            Posted on 2nd December 2023
                        </div>
                        <div className="pt-4 text-base md:text-lg">
                            {blog.content}
                        </div>
                    </div>
                    {/* Author Section */}
                    <div className="md:col-span-4">
                        <div className="text-slate-600 text-lg">Author</div>
                        <div className="flex flex-col md:flex-row w-full mt-4 md:mt-0">
                            <div className="md:pr-4 flex justify-center md:justify-start mb-4 md:mb-0">
                                <Avatar size="big" name={blog.author.name || "Anonymous"} />
                            </div>
                            <div className="text-center md:text-left">
                                <div className="text-xl font-bold">
                                    {blog.author.name || "Anonymous"}
                                </div>
                                <div className="pt-2 text-slate-500 text-sm md:text-base">
                                    Random catch phrase about the author's ability to grab the user's attention
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
