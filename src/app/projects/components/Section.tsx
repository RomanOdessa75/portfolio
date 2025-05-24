interface SectionProps {
  title: string;
}

export default function Section({ title }: SectionProps) {
  return (
    <div className="flex items-center justify-center h-screen bg-[#bfccd8] px-8 relative">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-[6rem] sm:text-[4rem] m-0 p-0">
          {title}
        </h1>
      </div>
    </div>
  );
}
