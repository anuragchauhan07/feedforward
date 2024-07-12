import { FeedbackResponseType } from "@/types";
import { Button } from "../ui/button";
import { IoIosArrowUp } from "react-icons/io";
import {
  useGetFeedbackByProjectId,
  useChangeVotesById,
  useDeleteFeedbackByFeedbackId,
} from "@/lib/hooks/useFeedback";
import { MdOutlineDeleteOutline } from "react-icons/md";

type PublicFeedbackContainerProps = {
  projectId: string;
  isPublic: boolean;
};

const FeedbackContainer = ({
  projectId,
  isPublic,
}: PublicFeedbackContainerProps) => {
  const { data: feedbacks } = useGetFeedbackByProjectId(projectId);
  const { mutateAsync: deleteFeedbackByFeedbackId } =
    useDeleteFeedbackByFeedbackId();
  const { mutateAsync: changeVotesById, isSuccess: success } =
    useChangeVotesById();
  const votesHandler = (feedbackId: string) => {
    const isUpvoted = localStorage.getItem(feedbackId);
    if (isUpvoted == "true") {
      changeVotesById({
        feedbackId: feedbackId,
        incrementBy: -1,
      });
      if (success) {
        localStorage.removeItem(feedbackId);
      }
    } else {
      changeVotesById({
        feedbackId: feedbackId,
        incrementBy: 1,
      });
      if (success) {
        localStorage.setItem(feedbackId, "true");
      }
    }
  };

  return (
    <div className="w-full md:w-[700px] flex flex-col gap-2 md:gap-6">
      {feedbacks?.length > 0 ? (
        feedbacks?.map((item: FeedbackResponseType, index: number) => {
          return (
            <div
              key={index}
              className="flex w-full bg-gray-100 rounded-xl p-2 md:p-6 items-center md:hover:scale-105 transition duration-200"
            >
              <div className="flex-1 items-start flex flex-col">
                <p className="text-md font-bold">{item.feedbackTitle}</p>
                <p className="font-semibold text-sm text-gray-700">
                  {item.feedbackDescription}
                </p>

                {!isPublic && (
                  <p className="font-semibold bg-gray-900 text-xs px-1 mt-2 text-white rounded-sm">
                    Total votes: {item.votes}
                  </p>
                )}
              </div>

              {isPublic ? (
                <Button
                  className="rounded-xl h-16 flex flex-col"
                  onClick={() => {
                    votesHandler(item._id);
                  }}
                >
                  <IoIosArrowUp />
                  {item.votes}
                </Button>
              ) : (
                <Button
                  className="rounded-md bg-red-600 p-2 text-xl"
                  onClick={() => {
                    deleteFeedbackByFeedbackId(item._id);
                  }}
                >
                  <MdOutlineDeleteOutline />
                </Button>
              )}
            </div>
          );
        })
      ) : (
        <div className="flex items-center justify-center text-center h-28 border-4 border-dotted bg-gray-100 rounded-xl">
          <p className="font-semibold text-xl ">No feedbacks yet!</p>
        </div>
      )}
    </div>
  );
};

export default FeedbackContainer;
