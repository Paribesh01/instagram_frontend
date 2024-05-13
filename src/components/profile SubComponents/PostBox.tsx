import { useRecoilValue } from "recoil";
import { currentProfileState } from "../../store/atoms/profile";
import { Link } from "react-router-dom";

export function PostBox(props: any) {
  const profiledata = useRecoilValue(currentProfileState);
  const imageUrl = `http://localhost:8080/post/img/${props.post.imgUrl}`;
  // console.log(props);
  return (
    <div className=" w-1/4 p-px md:px-3">
      <Link to={`/fullpost/${props.post.id}`}>
        <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
          <img
            className="w-full h-full absolute left-0 top-0 object-cover"
            src={imageUrl}
            alt="image"
          />
          <i className="fas fa-square absolute right-0 top-0 m-1"></i>
          {/* Overlay */}
          <div className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute left-0 top-0 hidden">
            <div className="flex justify-center items-center space-x-4 h-full">
              <span className="p-2">
                <i className="fas fa-heart"></i>
                {props.post._count.likes}
              </span>
              <span className="p-2">
                <i className="fas fa-comment"></i>

                {props.post._count.Comment}
              </span>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
}
