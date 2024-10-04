/* eslint-disable react/prop-types */

const FooterMenuItems = ({ title, items }) => {
  return (
    <div>
      <p className="text-[20px] mb-5 text-white">{title}</p>
      <ul className="space-y-3">
        {items?.map((item) => (
          <li key={item?.id} className="text-base text-[#FFFFFFCC] cursor-pointer hover:text-red-2">
            {item?.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenuItems;
