import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";

const Spin = (props) => {
  const spiner = useSelector((state) => state.appReducer.loading);

  return (
    <div>
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={80}
        width={80}
        visible={spiner}
      />
    </div>
  );
};

export default Spin;
