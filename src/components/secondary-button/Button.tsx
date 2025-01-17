const SecondaryBtn = ({ text, onClick }: { text: string; onClick?: () => void }) => {
  return (
    <button className="font-semibold text-black bg-[#F7F7F7] py-3 px-6 rounded uppercase">
      {text}
    </button>
  );
};

export default SecondaryBtn;
