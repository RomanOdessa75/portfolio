import AnimatedName from "@/components/AnimatedName";

interface ItemPageFooterLogoProps {
  bgColor?: string;
  className?: string;
}

const ItemPageFooterLogo = ({
  bgColor = "#e49366",
  className,
}: ItemPageFooterLogoProps) => {
  const defaultHeightStyle = "h-[calc(100vw*0.45)]";

  return (
    <footer
      className={`w-full overflow-hidden ${defaultHeightStyle} ${className || ""}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="mx-auto px-8 h-full flex flex-col justify-center">
        <div className="flex justify-between text-black text-sm xsml:text-lg mdl:text-xl lg:text-2xl my-4 md:my-8">
          <div className="w-full">
            <p>12, Gagarin ave.</p>
            <p>65034 Odessa</p>
            <p>Ukraine</p>
          </div>
          <div className="w-full md:w-1/4 text-right">
            <p>Email</p>
            <p>LinkedIn</p>
            <p>(38)0677156955</p>
          </div>
        </div>

        <div className="w-full h-[2px] bg-black" />

        <div className="flex-grow flex items-center justify-center min-h-0 py-2">
          <AnimatedName className="page-footer__animated-name" />
        </div>
      </div>
    </footer>
  );
};

export default ItemPageFooterLogo;
