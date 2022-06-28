import { BlogService } from './blog.service';
import { CreatePostDTO } from './dto/create-post.dto';
export declare class BlogController {
    private blogService;
    [x: string]: any;
    constructor(blogService: BlogService);
    getPosts(res: any): Promise<any>;
    getPost(res: any, postID: any): Promise<any>;
    addPost(res: any, createPostDTO: CreatePostDTO): Promise<any>;
}
