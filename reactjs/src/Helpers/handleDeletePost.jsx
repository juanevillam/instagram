import Swal from "sweetalert2";
import { db } from "../Database/firebase";

export const handleDeletePost = async( postId ) => { 
    Swal.fire({ title: "Deleting Post", text: "Please wait...", didOpen: () => Swal.showLoading() }); 
    await db.collection( "posts" ).doc( postId ).delete();
    Swal.close(); 
    Swal.fire( "Post Deleted", "Your post has been deleted successfully.", "success" );
};