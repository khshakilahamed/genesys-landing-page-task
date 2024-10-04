/* eslint-disable react/prop-types */

const Card = ({ item, imageHeight, isHover = false }) => {
  return (
    <div>
      <div className="overflow-hidden rounded-lg">
        <img
          src={item?.image}
          alt={item.title}
          className={`
            w-full object-cover
            ${imageHeight ?? "h-[397px]"} 
            ${
              isHover
                ? "hover:scale-110 transition-[transform] duration-300 overflow-hidden"
                : ""
            }
        `}
        />
      </div>
      <div className="pt-4">
        <p className="text-lg">{item.title}</p>
        <div className="flex gap-5 text-xl pt-2">
          <span className="font-semibold">${item.currentPrice}</span>
          <span className="line-through">${item.currentPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
