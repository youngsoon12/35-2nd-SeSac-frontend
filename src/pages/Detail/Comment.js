import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import S from './Styled.Detail';
import { API } from '../../components/Config/Config';

const Comment = ({
  id,
  user_id,
  parent_comment_id,
  profile_image_url,
  nickname,
  comment,
  created_at,
  userId,
  getCommentsData,
  TOKEN,
}) => {
  const [reply, setReply] = useState('');
  const [isReplyOpen, setisReplyOpen] = useState(false);
  const params = useParams();

  const handleReply = e => {
    setReply(e.target.value);
  };

  const toggleReply = () => {
    setisReplyOpen(replyOpen => !replyOpen);
  };

  const addComment = e => {
    e.preventDefault();
    if (reply.trim().length === 0) {
      alert('댓글 내용을 입력해주세요');
      return;
    }

    fetch(`${API}/posts/${params.id}/comments`, {
      method: 'POST',
      headers: {
        Authorization: TOKEN,
      },
      body: JSON.stringify({
        parent_comment_id: id,
        comment: reply,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          getCommentsData();
          setReply('');
        } else {
          alert('다시 시도해 주세요');
        }
      });

    toggleReply();
  };

  // 댓글 삭제
  const deleteComment = () => {
    const confirmDelete = window.confirm('댓글을 삭제하시겠습니까?');

    if (confirmDelete) {
      fetch(`${API}/posts/${params.id}/comments/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: TOKEN,
        },
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === 'SUCCESS') {
            getCommentsData();
          } else {
            alert('다시 시도해 주세요');
          }
        });
    } else return;
  };

  //댓글 수정
  const [editReply, setEditReply] = useState();
  const [editable, setEditable] = useState(false);

  const editOn = () => {
    setEditable(true);
  };

  const handleEdit = e => {
    setEditReply(e.target.value);
  };

  const updateComment = () => {
    fetch(`${API}/posts/${params.id}/comments/${id}`, {
      method: 'PATCH',
      headers: {
        Authorization: TOKEN,
      },
      body: JSON.stringify({
        comment: editReply,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          getCommentsData();
        } else {
          alert('다시 시도해 주세요');
        }
      });

    setEditable(!editable);
  };

  const date = created_at && created_at.split('T')[0].replaceAll('-', '.');
  const time = created_at && created_at.split('T')[1].slice(0, 5);

  return (
    <S.OneComment className={parent_comment_id !== 0 && 'reply'}>
      <S.CommentImg>
        <S.Img src={profile_image_url} />
      </S.CommentImg>
      <S.Article>
        <S.Nickname>{nickname}</S.Nickname>
        {editable ? (
          <S.CommentsForm onSubmit={updateComment}>
            <S.Input type="text" value={editReply} onChange={handleEdit} />
            <S.Button type="submit">등록</S.Button>
          </S.CommentsForm>
        ) : (
          <div>{editReply ? editReply : comment}</div>
        )}
        <S.Info>
          <div>
            {date}&nbsp;{time}
          </div>
          {parent_comment_id === 0 && (
            <>
              <S.Dot />
              <S.CommentOptionButton onClick={toggleReply}>
                답글
              </S.CommentOptionButton>
            </>
          )}
          {userId === user_id && (
            <>
              <S.Dot />
              <S.CommentOptionButton onClick={() => editOn()}>
                수정
              </S.CommentOptionButton>
              <S.Dot />
              <S.CommentOptionButton onClick={() => deleteComment()}>
                삭제
              </S.CommentOptionButton>
            </>
          )}
        </S.Info>
        <S.CommentsForm
          style={isReplyOpen || { height: '0', visibility: 'hidden' }}
          onSubmit={addComment}
        >
          <S.Input type="text" value={reply} onChange={handleReply} />
          <S.Button disabled={!reply}>등록</S.Button>
        </S.CommentsForm>
      </S.Article>
    </S.OneComment>
  );
};

export default Comment;
