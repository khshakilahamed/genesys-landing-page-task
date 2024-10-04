/* eslint-disable react/prop-types */

const Card = ({ item, imageHeight, isHover = false }) => {
  return (
    <div className="">
      <div className="overflow-hidden rounded-lg">
        <img
          src={item?.image}
          alt={item.title}
          loading="eager"
          className={`
            w-full object-cover
            ${imageHeight ?? "h-[250px] sm:h-[300px] md:w-[350px] xl:h-[397px]"} 
            ${
              isHover
                ? "hover:scale-110 transition-[transform] duration-300 overflow-hidden"
                : ""
            }
        `}
        />
      </div>
      <div className="pt-2 sm:pt-4">
        <p className="text-lg">{item.title}</p>
        <div className="flex gap-3 sm:gap-5 text-xl pt-1 sm:pt-2">
          <span className="font-semibold">${item.currentPrice}</span>
          <span className="line-through">${item.currentPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
