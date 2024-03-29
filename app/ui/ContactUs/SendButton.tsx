import Image from "next/image";

const SendButton = () => {
  return (
    <button
      type="submit"
      className="p-2 px-8 text-white rounded-sm flex items-center justify-center bg-black font-medium text-base sm:text-xl space-x-4"
    >
      <p>Send Inquiry</p>
      <Image src="/icons/Sent.svg" alt="" width={25} height={25} />
    </button>
  );
};

export default SendButton;
