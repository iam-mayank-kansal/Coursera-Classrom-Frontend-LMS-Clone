const PrimaryBtn = ({ text, onClick }: { text: string; onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="font-semibold text-white bg-[#068932] w-fit py-4 px-6 rounded uppercase"
    >
      {text}
    </button>
  );
};

export default PrimaryBtn;
