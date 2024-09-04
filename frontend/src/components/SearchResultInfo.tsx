import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};

const SearchResultInfo = ({ total, city }: Props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
      <span>
        Có {total} nhà hàng được tìm thấy ở{" "}
        <span className="text-orange-500">{city}</span>
        <Link
          to="/"
          className="ml-3 text-sm font-semibold cursor-pointer text-blue-500"
        >
          Thay đổi địa điểm
        </Link>
      </span>
    </div>
  );
};

export default SearchResultInfo;
