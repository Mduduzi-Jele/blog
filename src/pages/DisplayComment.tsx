import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Context } from 'react';
import { MyContext } from '../App';


const DisplayComment:React.FC = () => {
    const [comment, setComment] = useState<string | null>(null);
    const { id } = useContext(MyContext);

    useEffect(() => {
        const storedComment = localStorage.getItem('${id}');

        if(storedComment){
            setComment(storedComment);
        }
    }, [id]);

  return (
    <div className='Display-comment'>
      {comment ? (
        <div className='comment-container'>
            <ul className='comment-list'>
                <li>{comment}</li>
            </ul>
        </div>
      ) : (
        <div className='No-comment'>
            <p>No Comments</p>
        </div>
      )}
    </div>
  )
}

export default DisplayComment
