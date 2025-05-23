import { CiUser } from "react-icons/ci";

interface Props {
  rol: string;
  name: string;
}

function Profile({ rol, name }: Props) {
  return (
    <>
      <div className="w-[90%] h-[1px] bg-gray-600 mb-2" />
      <div className="h-[10%] w-full bg-background flex items-center justify-center">
        <div className="w-[30px] h-[30px] rounded-full mr-3 bg-primary flex items-center justify-center ml-5">
          <CiUser size={24} className="text-white" />
        </div>
        <div className="h-full w-[80%]">
          <div className="font-semibold text-white">{rol}</div>
          <div className="font-extralight text-primary">{name}</div>
        </div>
      </div>
    </>
  );
}

export default Profile;
