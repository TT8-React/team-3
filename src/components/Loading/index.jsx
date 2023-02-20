import { LoadingStyled } from "./LoadingStyled";

const Loading = () => {
  return (
    <LoadingStyled>
      <div className="loading-rotary"></div>
      <p className="title">Loading...</p>
    </LoadingStyled>
  );
};

export default Loading;
