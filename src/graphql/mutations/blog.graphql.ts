import { gql } from "@apollo/client";

export const CREATE_BLOG = gql`
    mutation createBlog($title: String, $image: String, $author: String, $category: String, $description: String, $content: String, $slug: String){
  createBlog(title:$title, image:$image, author:$author, category:$category, description:$description, content:$content, slug:$slug){
    _id
  }
}`
export const UPDATE_BLOG = gql`
  mutation updateBlog($_id:String,$title: String, $image: String, $author: String, $category: String, $description: String, $content: String, $slug: String){
    updateBlog(_id:$_id,title:$title, image:$image, author:$author, category:$category, description:$description, content:$content, slug:$slug){
      _id
    }
}`

export const DELETE_BLOG = gql`
  mutation deleteBlog($_id:String){
    deleteBlog(_id:$_id){
      _id
    }
}`