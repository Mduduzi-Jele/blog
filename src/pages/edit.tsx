export const Edit = () => {
     const[editedPost,setEditedPost]= useState(MyPost);
  // const history=useHistory();

  const handleEdit=async()=>{
    try{
      await updatePost(post.id,editedPost);
      // history.push('/MyPost/${MyPost.id}');
    }
    catch(error){
      console.error("Error updating post:",error);
    }
    user.post[Id].MyPost[Id] = post;
    console.log(user);
    localStorage.setItem(userId, JSON.stringify({ ...user }));
    setEditedPost(editedPost);
    console.log("Edited Post",editedPost);
    navigate(-1)
  
    return (
      <>
        <div>
             <h2>Edit Post</h2>
           <input
             type="text"
             value={editedPost.title}
             onChange={(e)=>setEditedPost({...editedPost,title:e.target.value})}
             />
             <textarea
               value={editedPost.content}
               onChange={(e)=>setEditedPost({...editedPost,title:e.target.value})}
               />
               <button onClick={handleEdit}>Save</button>

        </div>
      </>
    );
  };
