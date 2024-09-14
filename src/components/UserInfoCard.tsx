import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-primary text-xs">
          See all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-400">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Fabian Perkasa</span>
          <span className="text-sm ">@fabianperkasa</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          tempore aperiam necessitatibus delectus.
        </p>
        <div className="flex items-center gap-2">
            <Image src="/map.png" alt="" width={16} height={16} />
            <span>Living in <b>Purwokerto</b></span>
        </div>
        <div className="flex items-center gap-2">
            <Image src="/school.png" alt="" width={16} height={16} />
            <span>Went To <b>SMK Telkom Purwokerto</b></span>
        </div>
        <div className="flex items-center gap-2">
            <Image src="/work.png" alt="" width={16} height={16} />
            <span>Works at <b>Apple Inc.</b></span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16}/>
            <Link href="https://fabiantrafada.vercel.app" className="text-primary font-medium">
              Portfolio
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16}/>
            <span>Joined 20 Agustus 2024</span>
          </div>
        </div>
        <button className="bg-primary text-white text-sm rounded-md p-2">Follow</button>
        <span className="text-red-400 self-end text-xs cursor-pointer">Block user</span>
      </div>
    </div>
  );
};

export default UserInfoCard;
