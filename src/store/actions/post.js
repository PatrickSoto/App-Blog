import * as FileSystem from 'expo-file-system';

import { LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POST, ADD_POST } from "../types"
import { DB } from "../../db"

export const loadPosts = () => {
    return async dispatch => {
        const posts = await DB.getPosts()
        dispatch({
            type: LOAD_POSTS,
            payload: posts
        })
    }
}