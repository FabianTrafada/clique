import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/26937707/pexels-photo-26937707/free-photo-of-kuda-liar-danau-washoe.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={40}
            height={40}
            alt=""
            className="size-10 rounded-full"
          />
          <span className="font-medium">Imam Ah Ah</span>
        </div>
        <Image src="/more.png" width={16} height={16} alt="" />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/20858050/pexels-photo-20858050/free-photo-of-laut-teluk-musim-panas-pantai.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            fill
            className="object-cover rounded-md"
            alt=""
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          animi consectetur a similique totam. Nulla officiis quae unde sint,
          adipisci ex tempora suscipit perspiciatis dolor sed labore, autem,
          iste quis.
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              width={16}
              height={16}
              className="cursor-pointer"
              alt=""
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline-block">Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              width={16}
              height={16}
              className="cursor-pointer"
              alt=""
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline-block">Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              width={16}
              height={16}
              className="cursor-pointer"
              alt=""
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline-block">Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
