import { Comment } from '../types';

export default function CommentList({ comments }: {
  comments: Comment[];
}) {
  return (
    <ul className="comment-list">
      {comments.map((comment) => (
        <li
          key={comment.id}
          className="comment-item"
        >
          {comment.content}
        </li>
      ))}
    </ul>
  );
}
