import { products } from "../../constants/footerItems";

const FooterProducts = () => {
  return (
    <div>
      <p className="text-[20px] mb-5">Products</p>
      <ul>
        {products?.map((item) => (
          <li key={item?.id} className="text-base text-gray-400">
            {item?.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterProducts;
