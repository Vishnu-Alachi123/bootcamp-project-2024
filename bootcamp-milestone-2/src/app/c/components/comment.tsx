import style from './comment.module.css'

type IComment = {
	user: string;
	comment: string;
	time: Date;
}

type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}
function parseCommentTime(time: Date){
    const timeobj = new Date(time);
    const date = timeobj.toLocaleDateString();
    let hours = timeobj.getHours();
    let minute =timeobj.getMinutes();
    const amOrPm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
    hours = hours % 12 || 12; // Convert to 12-hour format (0 becomes 12)
    const formattedMinute = minute < 10 ? `0${minute}` : minute;
    // Format the final string
    const finalDate = `${date} ${hours}:${formattedMinute} ${amOrPm}`;
    return finalDate
    


	/*
		Implementation up to you...
	*/
}

function Comment({ comment }: CommentProps) {
    return (
        <div className={style.comment_container}>
            <div className={style.comment_header}>
                <h4 className={style.comment_user}>{comment.user}</h4>
                <span className={style.comment_ime}>{parseCommentTime(comment.time)}</span>
            </div>
            <p className={style.comment_text}>{comment.comment}</p>
        </div>
    );
}

export default Comment;